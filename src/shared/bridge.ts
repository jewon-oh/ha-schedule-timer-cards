// @ts-nocheck
// Unified per-device "schedule bridge" — the single automation that the
// schedule, turn-on and turn-off cards all read and write for one device.
//
// This module is PURE (no lit, no hass): everything is plain data in / data
// out, so the splice/round-trip logic can be unit-tested offline (see
// scripts/bridge-roundtrip.test.mjs). All three cards share these functions
// so they can never disagree on the automation shape.
//
// The automation carries three INDEPENDENT slices, each tagged by trigger id,
// feeding a single `choose` action so each card reads only its own slice:
//   - schedule slice: schedule-helper state on/off (+ HA-start re-sync)
//   - turn-on slice:  discrete ON times (per-weekday)
//   - turn-off slice: discrete OFF times (per-weekday)
//
// Round-trip strategy: a card never mutates the automation in place. It
// readSlices() the whole config, overrides ONLY its own slice, then
// buildUnified() rebuilds the entire automation deterministically. Rebuild is
// the single canonical writer, so two cards editing the same automation can
// never clobber each other's slices (each does a fresh GET first).

export const WEEKDAYS = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// Machine discovery tag written into the automation description. Lets a card
// recognise a unified bridge vs a legacy single-mode automation.
export const BRIDGE_TAG = "[schedule-ui:bridge]";

// Trigger ids — the load-bearing keys that let each card find its own slice.
export const TRIGGER_ID = {
  ON: "sui_on",
  OFF: "sui_off",
  SCHED_ON: "sui_sched_on",
  SCHED_OFF: "sui_sched_off",
  SYNC: "sui_sync",
};

export const SERVICE_BY_MODE = {
  turn_on: "homeassistant.turn_on",
  turn_off: "homeassistant.turn_off",
};

// action_mode ("turn_on"/"turn_off") → slice key ("on"/"off").
export function modeSliceKey(mode) {
  return mode === "turn_off" ? "off" : "on";
}

// Deterministic config_id derivable from the device alone, so schedule,
// turn-on and turn-off cards all compute the SAME id for one device with no
// cross-card coordination. entity_ids contain exactly one dot.
export function deviceBridgeId(targetEntityId) {
  return "sui_bridge_" + String(targetEntityId).replace(/\./g, "_");
}

export function normalizeTime(s) {
  if (!s || typeof s !== "string") return "00:00:00";
  const parts = s.split(":");
  const h = String(Math.max(0, Math.min(23, parseInt(parts[0] || "0", 10) || 0))).padStart(2, "0");
  const m = String(Math.max(0, Math.min(59, parseInt(parts[1] || "0", 10) || 0))).padStart(2, "0");
  return `${h}:${m}:00`;
}

const byWeekday = (a, b) => WEEKDAYS.indexOf(a) - WEEKDAYS.indexOf(b);
const uniqSortTimes = (arr) => [...new Set((arr || []).map(normalizeTime))].sort();
const sortWeekdays = (arr) =>
  [...new Set((arr || []).map((d) => String(d).toLowerCase()))]
    .filter((d) => WEEKDAYS.includes(d))
    .sort(byWeekday);

const triggerList = (cfg) =>
  Array.isArray(cfg?.trigger) ? cfg.trigger : Array.isArray(cfg?.triggers) ? cfg.triggers : [];
const actionList = (cfg) =>
  Array.isArray(cfg?.action) ? cfg.action : Array.isArray(cfg?.actions) ? cfg.actions : [];

const idMatches = (condId, want) =>
  Array.isArray(condId) ? condId.includes(want) : condId === want;

const firstEntity = (v) => (Array.isArray(v) ? v[0] : v) || null;

// A config is a unified bridge if its action is a `choose` OR any trigger
// carries a sui_* id. Legacy single-mode/blueprint automations match neither
// and keep their original shape (cards fall back to legacy read/write).
export function isUnified(cfg) {
  for (const a of actionList(cfg)) {
    if (a && Array.isArray(a.choose)) return true;
  }
  for (const t of triggerList(cfg)) {
    if (typeof t?.id === "string" && t.id.startsWith("sui_")) return true;
  }
  return false;
}

function branchService(branch) {
  const seq = Array.isArray(branch?.sequence) ? branch.sequence : [];
  for (const s of seq) {
    const svc = s?.service || s?.action;
    if (typeof svc === "string") {
      return { svc, target: firstEntity(s?.target?.entity_id || s?.data?.entity_id || s?.entity_id) };
    }
  }
  return { svc: null, target: null };
}

// Flatten a branch's conditions (it is `[{ or: [...arms] }]` or `[arm]`) and
// pull the weekday list for this mode's time-arm. Bare trigger arm → all 7
// days; an `and` of [trigger, time:weekday] → those days.
function branchWeekdays(branch, modeId) {
  const conds = Array.isArray(branch?.conditions) ? branch.conditions : [];
  const arms = [];
  for (const c of conds) {
    if (Array.isArray(c?.or)) arms.push(...c.or);
    else arms.push(c);
  }
  for (const arm of arms) {
    if (arm?.condition === "trigger" && idMatches(arm.id, modeId)) return [...WEEKDAYS];
    if (Array.isArray(arm?.and)) {
      const hasTrig = arm.and.some((s) => s?.condition === "trigger" && idMatches(s.id, modeId));
      if (hasTrig) {
        const wd = arm.and.find((s) => s?.condition === "time" && Array.isArray(s.weekday));
        return wd ? sortWeekdays(wd.weekday) : [...WEEKDAYS];
      }
    }
  }
  return [...WEEKDAYS];
}

// Parse a unified automation into its three independent slices. Safe to call
// on any unified config; for a legacy config the caller should use isUnified()
// first and keep the legacy path.
export function readSlices(cfg) {
  const onTimes = [];
  const offTimes = [];
  let scheduleEntity = null;

  for (const t of triggerList(cfg)) {
    const id = t?.id;
    const isTime = t?.platform === "time" || t?.trigger === "time";
    if (isTime) {
      const ats = Array.isArray(t.at) ? t.at : typeof t.at === "string" ? [t.at] : [];
      for (const a of ats) {
        if (typeof a !== "string") continue;
        if (id === TRIGGER_ID.OFF) offTimes.push(a);
        else if (id === TRIGGER_ID.ON) onTimes.push(a);
      }
    }
    const isState = t?.platform === "state" || t?.trigger === "state";
    if (isState && (id === TRIGGER_ID.SCHED_ON || id === TRIGGER_ID.SCHED_OFF)) {
      const e = firstEntity(t.entity_id);
      if (typeof e === "string" && e.startsWith("schedule.")) scheduleEntity = e;
    }
  }

  let onBranch = null;
  let offBranch = null;
  let target = null;
  for (const a of actionList(cfg)) {
    if (!Array.isArray(a?.choose)) continue;
    for (const b of a.choose) {
      const { svc, target: tgt } = branchService(b);
      if (typeof svc !== "string") continue;
      if (svc.endsWith(".turn_on")) {
        onBranch = b;
        if (!target) target = tgt;
      } else if (svc.endsWith(".turn_off")) {
        offBranch = b;
        if (!target) target = tgt;
      }
    }
  }

  const description = typeof cfg?.description === "string" ? cfg.description : "";
  const friendly = description.startsWith(BRIDGE_TAG)
    ? description.slice(BRIDGE_TAG.length).trim() || null
    : null;

  return {
    target: target || null,
    friendly,
    alias: typeof cfg?.alias === "string" ? cfg.alias : undefined,
    on: {
      times: uniqSortTimes(onTimes),
      weekdays: onBranch ? branchWeekdays(onBranch, TRIGGER_ID.ON) : [...WEEKDAYS],
    },
    off: {
      times: uniqSortTimes(offTimes),
      weekdays: offBranch ? branchWeekdays(offBranch, TRIGGER_ID.OFF) : [...WEEKDAYS],
    },
    schedule: { entity: scheduleEntity },
  };
}

function timeArm(modeId, weekdays) {
  const wd = weekdays && weekdays.length > 0 && weekdays.length < 7 ? sortWeekdays(weekdays) : null;
  if (!wd) return { condition: "trigger", id: modeId };
  return { and: [{ condition: "trigger", id: modeId }, { condition: "time", weekday: wd }] };
}

function buildBranch(slices, mode) {
  const isOn = mode === "on";
  const sched = slices.schedule?.entity || null;
  const slice = isOn ? slices.on : slices.off;
  const arms = [];
  if (sched) {
    arms.push({ condition: "trigger", id: isOn ? TRIGGER_ID.SCHED_ON : TRIGGER_ID.SCHED_OFF });
    arms.push({
      and: [
        { condition: "trigger", id: TRIGGER_ID.SYNC },
        { condition: "state", entity_id: sched, state: isOn ? "on" : "off" },
      ],
    });
  }
  arms.push(timeArm(isOn ? TRIGGER_ID.ON : TRIGGER_ID.OFF, slice?.weekdays));
  return {
    conditions: [arms.length === 1 ? arms[0] : { or: arms }],
    sequence: [
      {
        service: isOn ? SERVICE_BY_MODE.turn_on : SERVICE_BY_MODE.turn_off,
        target: { entity_id: slices.target || null },
      },
    ],
  };
}

// Rebuild the entire unified automation from the three slices. Deterministic
// and total: same slices → same config. `baseCfg` (the freshly-fetched config)
// is spread first so user-added top-level keys survive, then the managed keys
// (alias/description/mode/trigger/condition/action) are overwritten.
export function buildUnified(slices, baseCfg) {
  const friendly =
    slices.friendly || (slices.target ? String(slices.target).split(".")[1] : null) || "device";
  const sched = slices.schedule?.entity || null;

  const trigger = [];
  if (sched) {
    trigger.push({ platform: "state", entity_id: sched, to: "on", id: TRIGGER_ID.SCHED_ON });
    trigger.push({ platform: "state", entity_id: sched, to: "off", id: TRIGGER_ID.SCHED_OFF });
    trigger.push({ platform: "homeassistant", event: "start", id: TRIGGER_ID.SYNC });
  }
  for (const t of uniqSortTimes(slices.on?.times)) trigger.push({ platform: "time", at: t, id: TRIGGER_ID.ON });
  for (const t of uniqSortTimes(slices.off?.times)) trigger.push({ platform: "time", at: t, id: TRIGGER_ID.OFF });

  const out = { ...(baseCfg || {}) };
  // Drop alternate/plural and blueprint keys so we never ship a duplicate or a
  // stale blueprint reference alongside the inline config.
  delete out.triggers;
  delete out.conditions;
  delete out.actions;
  delete out.use_blueprint;

  out.alias = slices.alias || friendly;
  out.description = `${BRIDGE_TAG} ${friendly}`;
  out.mode = "queued"; // serialise near-simultaneous schedule + time fires
  out.trigger = trigger;
  out.condition = [];
  out.action = [{ choose: [buildBranch(slices, "on"), buildBranch(slices, "off")] }];
  return out;
}

// Build the slices object for a brand-new bridge that only carries one card's
// initial (empty) slice plus the target. Used by the wizards.
export function emptySlices({ target, friendly, alias }) {
  return {
    target: target || null,
    friendly: friendly || null,
    alias,
    on: { times: [], weekdays: [...WEEKDAYS] },
    off: { times: [], weekdays: [...WEEKDAYS] },
    schedule: { entity: null },
  };
}
