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
//   - schedule slice: schedule-helper state on/off (+ HA-start re-sync that
//     only turns ON a stale-off device, never OFF — see #15)
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
        const wd = arm.and.find((s) => s?.condition === "time" && s.weekday != null);
        if (!wd) return [...WEEKDAYS];
        return sortWeekdays(Array.isArray(wd.weekday) ? wd.weekday : [wd.weekday]);
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
    // HA-start re-sync (sui_sync) only ENABLES a stale-off device — it is added
    // to the ON branch only, never the OFF branch. A restart must not turn a
    // device OFF, or an unrelated reboot (power loss, OOM, HA update) would kill
    // every device whose schedule is currently off. The real off edge is still
    // handled by the schedule.* -> off state trigger (sui_sched_off). See #15.
    if (isOn) {
      arms.push({
        and: [
          { condition: "trigger", id: TRIGGER_ID.SYNC },
          { condition: "state", entity_id: sched, state: "on" },
        ],
      });
    }
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

// Description tags written by the OLD standalone turn-on/turn-off wizards
// (pre-unified-bridge). Used to recognise a device's legacy automations so the
// wizard can migrate their times into the unified bridge and remove them.
export const LEGACY_TURN_TAGS = ["[schedule-ui:turn-on]", "[schedule-ui:turn-off]"];

function sameWeekdays(a, b) {
  const x = sortWeekdays(a);
  const y = sortWeekdays(b);
  return x.length === y.length && x.every((d, i) => d === y[i]);
}

// Parse a LEGACY flat turn-on/turn-off automation (no choose, no sui_* ids)
// into a single slice, with enough metadata for the caller to decide whether
// it is SAFE to migrate-and-delete. The wizard must only delete an automation
// that exactly matches the auto-generated standalone shape and whose behaviour
// is fully captured here — otherwise it would destroy user data.
//
// `fullyCaptured` is true ONLY when the automation is a plain single-action
// turn_on/turn_off on exactly one entity, driven solely by parseable `time`
// triggers. Anything else (sun/template triggers, extra actions, multiple or
// non-entity targets, no times) → fullyCaptured=false → caller skips it.
export function readLegacySlice(cfg) {
  // POSITIVE WHITELIST: `pristine` stays true only if EVERY part of the
  // automation matches exactly the shape our generator emits, parameterised
  // solely by (times, weekday set, single target entity). Any deviation — a
  // non-literal/entity `at`, a disabled trigger/condition/automation, a guard
  // or time-window condition, a non-canonical weekday, extra action keys
  // (e.g. data:{brightness}), a non-entity or multi target — flips it false,
  // so the wizard KEEPS (never deletes) anything it cannot fully reproduce.
  const LITERAL_TIME = /^([01]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/; // valid HH:MM[:SS] only
  let pristine = cfg?.enabled !== false;

  // Triggers: ≥1, all enabled literal `time` triggers, only known keys.
  const triggers = triggerList(cfg);
  const times = [];
  if (triggers.length === 0) pristine = false;
  const TRIG_KEYS = new Set(["platform", "trigger", "at", "id"]);
  for (const t of triggers) {
    const isTime = t?.platform === "time" || t?.trigger === "time";
    if (!isTime || t?.enabled === false) { pristine = false; continue; }
    if (t && Object.keys(t).some((k) => !TRIG_KEYS.has(k))) pristine = false;
    const ats = Array.isArray(t.at) ? t.at : typeof t.at === "string" ? [t.at] : [];
    if (ats.length === 0) pristine = false;
    for (const a of ats) {
      if (typeof a === "string" && LITERAL_TIME.test(a.trim())) times.push(a.trim());
      else pristine = false; // entity/relative/garbage `at` — not faithfully capturable
    }
  }

  // Conditions: NONE (all 7 days) OR exactly one pure canonical weekday
  // time-condition. Anything else (guard, window, disabled, 2nd arm, bad code).
  const conds = Array.isArray(cfg?.condition)
    ? cfg.condition
    : Array.isArray(cfg?.conditions)
      ? cfg.conditions
      : [];
  let weekdays = null;
  if (conds.length > 1) pristine = false;
  const COND_KEYS = new Set(["condition", "weekday"]);
  for (const c of conds) {
    if (!c || c.condition !== "time" || c.enabled === false) { pristine = false; continue; }
    if (Object.keys(c).some((k) => !COND_KEYS.has(k)) || c.weekday == null) { pristine = false; continue; }
    const arr = Array.isArray(c.weekday) ? c.weekday : typeof c.weekday === "string" ? [c.weekday] : null;
    const parsed = arr ? sortWeekdays(arr) : [];
    if (!arr || parsed.length === 0 || parsed.length !== arr.length) { pristine = false; continue; } // non-canonical/dup
    weekdays = parsed;
  }

  // Action: exactly one turn_on/off on a SINGLE entity, no data/extra keys.
  const actions = actionList(cfg);
  let mode = null;
  let targets = [];
  if (actions.length !== 1) pristine = false;
  const ACT_KEYS = new Set(["service", "action", "target"]);
  for (const a of actions) {
    const svc = a?.service || a?.action;
    if (typeof svc === "string" && svc.endsWith(".turn_on")) mode = "turn_on";
    else if (typeof svc === "string" && svc.endsWith(".turn_off")) mode = "turn_off";
    else pristine = false;
    if (a && Object.keys(a).some((k) => !ACT_KEYS.has(k))) pristine = false; // e.g. data:{brightness}
    const tgt = a?.target || {};
    if (tgt && Object.keys(tgt).some((k) => k !== "entity_id")) pristine = false; // area/device/label
    const eid = a?.target?.entity_id;
    if (Array.isArray(eid)) {
      if (eid.some((x) => typeof x !== "string")) pristine = false;
      targets = eid.filter((x) => typeof x === "string");
    } else if (typeof eid === "string") targets = [eid];
    else pristine = false;
    break; // length === 1 already enforced above
  }
  if (targets.length !== 1) pristine = false;

  const fullyCaptured = pristine && mode != null && times.length > 0 && targets.length === 1;

  return {
    mode,
    target: targets[0] || null,
    targets,
    actionCount: actions.length,
    times: uniqSortTimes(times),
    weekdays: weekdays && weekdays.length > 0 ? weekdays : [...WEEKDAYS],
    fullyCaptured,
  };
}

// Plan how a set of (already safety-screened) legacy slices merge into the
// bridge's slices. Pure + total so it can be unit-tested. Returns the updated
// slices plus which legacy cids are safe to DELETE (fully merged) vs SKIP
// (kept in place because merging them would lose data — a weekday conflict the
// single-weekday-per-mode model can't represent). NEVER unions across
// different weekday sets.
export function planLegacyMigration(slices, items) {
  const out = {
    ...slices,
    on: { times: [...(slices.on?.times || [])], weekdays: [...(slices.on?.weekdays || WEEKDAYS)] },
    off: { times: [...(slices.off?.times || [])], weekdays: [...(slices.off?.weekdays || WEEKDAYS)] },
    schedule: { ...(slices.schedule || { entity: null }) },
  };
  const adopted = {};
  const toDelete = [];
  const skipped = [];
  for (const it of items || []) {
    const slice = it.slice;
    if (!slice || (slice.mode !== "turn_on" && slice.mode !== "turn_off")) { skipped.push(it.cid); continue; }
    const key = slice.mode === "turn_off" ? "off" : "on";
    const cur = out[key];
    if (!cur.times || cur.times.length === 0) {
      out[key] = { times: [...slice.times], weekdays: [...slice.weekdays] };
      adopted[key] = slice.weekdays;
      toDelete.push(it.cid);
    } else {
      const refWd = adopted[key] || cur.weekdays;
      if (sameWeekdays(refWd, slice.weekdays)) {
        out[key] = { times: [...new Set([...cur.times, ...slice.times])].sort(), weekdays: refWd };
        toDelete.push(it.cid);
      } else {
        skipped.push(it.cid); // weekday conflict — keep the automation, don't delete
      }
    }
  }
  return { slices: out, toDelete, skipped };
}
