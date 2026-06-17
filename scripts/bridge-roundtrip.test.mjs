// Round-trip / splice safety tests for the unified bridge pure core.
// Run: node --experimental-strip-types scripts/bridge-roundtrip.test.mjs
//
// These cover the data-corruption risks the design review flagged:
//   - choose-wrapped action target extraction
//   - id-filtered per-card slices (turn-on edit must not touch turn-off/schedule)
//   - schedule helper arms survive a turn-on/off rebuild
//   - weekday gate lives only in the time-arm
//   - legacy detection
import {
  buildUnified,
  readSlices,
  isUnified,
  deviceBridgeId,
  emptySlices,
  modeSliceKey,
  readLegacySlice,
  planLegacyMigration,
  LEGACY_TURN_TAGS,
  TRIGGER_ID,
} from "../src/shared/bridge.ts";

let pass = 0;
let fail = 0;
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);
function check(name, cond) {
  if (cond) { pass++; console.log("  ✓ " + name); }
  else { fail++; console.error("  ✗ " + name); }
}

// Simulate the card edit path: fresh GET cfg -> readSlices -> override my slice -> buildUnified.
function editSlice(cfg, mode, times, weekdays, target) {
  const slices = readSlices(cfg);
  slices[modeSliceKey(mode)] = { times, weekdays };
  if (!slices.target) slices.target = target;
  return buildUnified(slices, cfg);
}

console.log("deviceBridgeId");
check("derives from device", deviceBridgeId("switch.kitchen") === "sui_bridge_switch_kitchen");

console.log("full three-slice round-trip");
let cfg = buildUnified({
  target: "switch.kitchen",
  friendly: "Kitchen",
  on: { times: ["08:30:00", "07:00:00"], weekdays: ["mon", "tue", "wed", "thu", "fri"] },
  off: { times: ["23:00:00"], weekdays: ["sat", "sun"] },
  schedule: { entity: "schedule.kitchen_x" },
});
check("is unified", isUnified(cfg) === true);
let s = readSlices(cfg);
check("on times sorted+kept", eq(s.on.times, ["07:00:00", "08:30:00"]));
check("on weekdays kept", eq(s.on.weekdays, ["mon", "tue", "wed", "thu", "fri"]));
check("off times kept", eq(s.off.times, ["23:00:00"]));
check("off weekdays kept", eq(s.off.weekdays, ["sat", "sun"]));
check("schedule entity kept", s.schedule.entity === "schedule.kitchen_x");
check("target kept", s.target === "switch.kitchen");
check("friendly kept", s.friendly === "Kitchen");

console.log("turn-on edit preserves the OTHER slices (no clobber)");
let cfg2 = editSlice(cfg, "turn_on", ["09:15:00"], [...["mon","tue","wed","thu","fri","sat","sun"]], "switch.kitchen");
let s2 = readSlices(cfg2);
check("on slice updated", eq(s2.on.times, ["09:15:00"]));
check("on all-7 days -> bare arm", eq(s2.on.weekdays, ["mon","tue","wed","thu","fri","sat","sun"]));
check("off slice preserved", eq(s2.off.times, ["23:00:00"]));
check("off weekdays preserved", eq(s2.off.weekdays, ["sat", "sun"]));
check("schedule preserved through turn-on edit", s2.schedule.entity === "schedule.kitchen_x");

console.log("turn-off edit preserves on + schedule");
let cfg3 = editSlice(cfg2, "turn_off", ["22:00:00", "06:00:00"], ["mon"], "switch.kitchen");
let s3 = readSlices(cfg3);
check("off slice updated+sorted", eq(s3.off.times, ["06:00:00", "22:00:00"]));
check("off weekday gate kept", eq(s3.off.weekdays, ["mon"]));
check("on slice still intact", eq(s3.on.times, ["09:15:00"]));
check("schedule still intact", s3.schedule.entity === "schedule.kitchen_x");

console.log("schedule wizard adds schedule slice to a turn-on-only bridge");
let onlyOn = buildUnified(emptySlices({ target: "light.den", friendly: "Den" }));
onlyOn = editSlice(onlyOn, "turn_on", ["18:00:00"], ["fri"], "light.den");
check("no schedule yet", readSlices(onlyOn).schedule.entity === null);
let withSched = (() => { const sl = readSlices(onlyOn); sl.schedule = { entity: "schedule.den_y" }; return buildUnified(sl, onlyOn); })();
let s4 = readSlices(withSched);
check("schedule arm added", s4.schedule.entity === "schedule.den_y");
check("turn-on slice survived schedule add", eq(s4.on.times, ["18:00:00"]) && eq(s4.on.weekdays, ["fri"]));
// schedule triggers + arms actually present
check("has sched_on trigger", triggerHasId(withSched, TRIGGER_ID.SCHED_ON));
check("has sync trigger", triggerHasId(withSched, TRIGGER_ID.SYNC));

console.log("empty bridge is valid + target survives with no times");
let empty = buildUnified(emptySlices({ target: "fan.office", friendly: "Office" }));
check("empty still unified", isUnified(empty));
check("target extractable with zero times", readSlices(empty).target === "fan.office");
check("both branches present", empty.action[0].choose.length === 2);

console.log("legacy automation is NOT detected as unified");
const legacy = {
  alias: "Foo", description: "[schedule-ui:turn-on] Foo",
  trigger: [{ platform: "time", at: "08:00:00" }],
  condition: [{ condition: "time", weekday: ["mon"] }],
  action: [{ service: "homeassistant.turn_on", target: { entity_id: "switch.foo" } }],
  mode: "single",
};
check("legacy not unified", isUnified(legacy) === false);

console.log("weekday gate only gates the time-arm, never schedule/sync");
// ON branch with partial weekdays + schedule: schedule arm must have NO weekday.
const gated = buildUnified({
  target: "switch.k", friendly: "K",
  on: { times: ["07:00:00"], weekdays: ["mon"] },
  off: { times: [], weekdays: [...["mon","tue","wed","thu","fri","sat","sun"]] },
  schedule: { entity: "schedule.k" },
});
const onBranch = gated.action[0].choose.find((b) => b.sequence[0].service.endsWith(".turn_on"));
const orArms = onBranch.conditions[0].or;
const schedArm = orArms.find((a) => a.condition === "trigger" && a.id === TRIGGER_ID.SCHED_ON);
// the time-arm is the `and` that gates the ON time trigger (not the sync `and`)
const timeArmAnd = orArms.find(
  (a) => Array.isArray(a.and) && a.and.some((x) => x.condition === "trigger" && x.id === TRIGGER_ID.ON)
);
const syncArm = orArms.find(
  (a) => Array.isArray(a.and) && a.and.some((x) => x.condition === "trigger" && x.id === TRIGGER_ID.SYNC)
);
check("schedule arm present & ungated", !!schedArm);
check("time-arm carries the weekday gate", !!timeArmAnd && timeArmAnd.and.some((x) => x.condition === "time"));
check("sync arm has NO weekday gate", !!syncArm && !syncArm.and.some((x) => x.condition === "time"));

console.log("HA-start re-sync only turns ON, never OFF (#15)");
const offBranchG = gated.action[0].choose.find((b) => b.sequence[0].service.endsWith(".turn_off"));
const offArmsG = Array.isArray(offBranchG.conditions[0]?.or)
  ? offBranchG.conditions[0].or
  : [offBranchG.conditions[0]];
const offSyncArm = offArmsG.find(
  (a) => Array.isArray(a?.and) && a.and.some((x) => x.condition === "trigger" && x.id === TRIGGER_ID.SYNC)
);
check("ON branch keeps its sync arm", !!syncArm);
check("OFF branch has NO sync arm (no turn_off on restart)", !offSyncArm);
check("OFF branch still has the sched_off state trigger arm",
  offArmsG.some((a) => a?.condition === "trigger" && a.id === TRIGGER_ID.SCHED_OFF));
check("sui_sync trigger still emitted (ON branch needs it)", triggerHasId(gated, TRIGGER_ID.SYNC));

console.log("legacy automation parsing (for migration)");
const legacyOn = {
  description: "[schedule-ui:turn-on] Kitchen",
  trigger: [{ platform: "time", at: "07:00:00" }, { platform: "time", at: "06:30:00" }],
  condition: [{ condition: "time", weekday: ["mon", "wed"] }],
  action: [{ service: "homeassistant.turn_on", target: { entity_id: "switch.kitchen" } }],
  mode: "single",
};
const legOn = readLegacySlice(legacyOn);
check("legacy mode = turn_on", legOn.mode === "turn_on");
check("legacy times sorted", eq(legOn.times, ["06:30:00", "07:00:00"]));
check("legacy weekdays parsed", eq(legOn.weekdays, ["mon", "wed"]));
check("legacy target parsed", legOn.target === "switch.kitchen");
check("legacy tag recognised", LEGACY_TURN_TAGS.some((t) => legacyOn.description.includes(t)));
const legacyOff = {
  description: "[schedule-ui:turn-off] Kitchen",
  trigger: [{ platform: "time", at: "23:00:00" }],
  condition: [],
  action: [{ service: "homeassistant.turn_off", target: { entity_id: "switch.kitchen" } }],
};
const legOff = readLegacySlice(legacyOff);
check("legacy off mode", legOff.mode === "turn_off");
check("legacy off no-condition -> all 7 days", legOff.weekdays.length === 7);

console.log("migration: legacy on+off adopted into a fresh unified bridge");
const mslices = emptySlices({ target: "switch.kitchen", friendly: "Kitchen" });
for (const leg of [legOn, legOff]) {
  const key = leg.mode === "turn_off" ? "off" : "on";
  mslices[key] = { times: leg.times, weekdays: leg.weekdays };
}
const migrated = buildUnified(mslices);
const ms = readSlices(migrated);
check("migrated on times", eq(ms.on.times, ["06:30:00", "07:00:00"]));
check("migrated on weekdays", eq(ms.on.weekdays, ["mon", "wed"]));
check("migrated off times", eq(ms.off.times, ["23:00:00"]));
check("migrated off all-7 days", ms.off.weekdays.length === 7);
check("unified bridge is not itself a legacy match", isUnified(migrated) && !LEGACY_TURN_TAGS.some((t) => (migrated.description || "").includes(t)));

console.log("safety gates: readLegacySlice.fullyCaptured (must NOT delete these)");
const scalarWd = readLegacySlice({
  description: "[schedule-ui:turn-off] K",
  trigger: [{ platform: "time", at: "23:00:00" }],
  condition: [{ condition: "time", weekday: "mon" }],
  action: [{ service: "homeassistant.turn_off", target: { entity_id: "switch.k" } }],
});
check("scalar weekday normalized to [mon]", eq(scalarWd.weekdays, ["mon"]) && scalarWd.fullyCaptured);
const sunTrig = readLegacySlice({
  description: "[schedule-ui:turn-on] K",
  trigger: [{ platform: "sun", event: "sunset" }],
  action: [{ service: "homeassistant.turn_on", target: { entity_id: "switch.k" } }],
});
check("non-time trigger -> fullyCaptured false", sunTrig.fullyCaptured === false);
const multiTarget = readLegacySlice({
  description: "[schedule-ui:turn-on] K",
  trigger: [{ platform: "time", at: "07:00:00" }],
  action: [{ service: "homeassistant.turn_on", target: { entity_id: ["switch.k", "switch.living"] } }],
});
check("multi-target -> fullyCaptured false", multiTarget.fullyCaptured === false && multiTarget.targets.length === 2);
const multiAction = readLegacySlice({
  description: "[schedule-ui:turn-on] K",
  trigger: [{ platform: "time", at: "07:00:00" }],
  action: [
    { service: "homeassistant.turn_on", target: { entity_id: "switch.k" } },
    { service: "notify.me", data: { message: "hi" } },
  ],
});
check("extra action -> fullyCaptured false", multiAction.fullyCaptured === false);
const noTimes = readLegacySlice({
  description: "[schedule-ui:turn-on] K",
  trigger: [],
  action: [{ service: "homeassistant.turn_on", target: { entity_id: "switch.k" } }],
});
check("no triggers/times -> fullyCaptured false", noTimes.fullyCaptured === false);
const areaTarget = readLegacySlice({
  description: "[schedule-ui:turn-on] K",
  trigger: [{ platform: "time", at: "07:00:00" }],
  action: [{ service: "homeassistant.turn_on", target: { area_id: "kitchen" } }],
});
check("area_id target -> fullyCaptured false", areaTarget.fullyCaptured === false);

// condition guards: a tagged automation the user hand-edited to add a guard
// (or a window/non-canonical weekday) must NOT be auto-migrated+deleted.
const stateGuard = readLegacySlice({
  description: "[schedule-ui:turn-off] K",
  trigger: [{ platform: "time", at: "23:00:00" }],
  condition: [{ condition: "state", entity_id: "binary_sensor.home", state: "on" }],
  action: [{ service: "homeassistant.turn_off", target: { entity_id: "switch.k" } }],
});
check("state guard condition -> fullyCaptured false", stateGuard.fullyCaptured === false);
const guardPlusWeekday = readLegacySlice({
  description: "[schedule-ui:turn-off] K",
  trigger: [{ platform: "time", at: "23:00:00" }],
  condition: [
    { condition: "state", entity_id: "binary_sensor.vacation", state: "off" },
    { condition: "time", weekday: ["mon"] },
  ],
  action: [{ service: "homeassistant.turn_off", target: { entity_id: "switch.k" } }],
});
check("extra guard + weekday -> fullyCaptured false", guardPlusWeekday.fullyCaptured === false);
const timeWindow = readLegacySlice({
  description: "[schedule-ui:turn-on] K",
  trigger: [{ platform: "time", at: "07:00:00" }],
  condition: [{ condition: "time", after: "06:00:00", before: "09:00:00" }],
  action: [{ service: "homeassistant.turn_on", target: { entity_id: "switch.k" } }],
});
check("time after/before window -> fullyCaptured false", timeWindow.fullyCaptured === false);
const nonCanonicalWd = readLegacySlice({
  description: "[schedule-ui:turn-on] K",
  trigger: [{ platform: "time", at: "07:00:00" }],
  condition: [{ condition: "time", weekday: ["monday"] }],
  action: [{ service: "homeassistant.turn_on", target: { entity_id: "switch.k" } }],
});
check("non-canonical weekday code -> fullyCaptured false (not widened to all-7)", nonCanonicalWd.fullyCaptured === false);
const cleanWeekday = readLegacySlice({
  description: "[schedule-ui:turn-on] K",
  trigger: [{ platform: "time", at: "07:00:00" }],
  condition: [{ condition: "time", weekday: ["mon", "fri"] }],
  action: [{ service: "homeassistant.turn_on", target: { entity_id: "switch.k" } }],
});
check("clean single weekday condition -> fullyCaptured true", cleanWeekday.fullyCaptured === true && eq(cleanWeekday.weekdays, ["mon", "fri"]));

// capture fidelity: non-literal / disabled / data-carrying shapes must be KEPT
const entityAt = readLegacySlice({
  description: "[schedule-ui:turn-on] K",
  trigger: [{ platform: "time", at: "input_datetime.wake" }],
  action: [{ service: "homeassistant.turn_on", target: { entity_id: "switch.k" } }],
});
check("entity/relative `at` -> fullyCaptured false (not coerced to 00:00)", entityAt.fullyCaptured === false);
const disabledTrig = readLegacySlice({
  description: "[schedule-ui:turn-on] K",
  trigger: [{ platform: "time", at: "07:00:00" }, { platform: "time", at: "09:00:00", enabled: false }],
  action: [{ service: "homeassistant.turn_on", target: { entity_id: "switch.k" } }],
});
check("disabled time trigger -> fullyCaptured false", disabledTrig.fullyCaptured === false);
const disabledCond = readLegacySlice({
  description: "[schedule-ui:turn-off] K",
  trigger: [{ platform: "time", at: "23:00:00" }],
  condition: [{ condition: "time", weekday: ["mon"], enabled: false }],
  action: [{ service: "homeassistant.turn_off", target: { entity_id: "switch.k" } }],
});
check("disabled weekday condition -> fullyCaptured false", disabledCond.fullyCaptured === false);
const topDisabled = readLegacySlice({
  description: "[schedule-ui:turn-on] K",
  enabled: false,
  trigger: [{ platform: "time", at: "07:00:00" }],
  action: [{ service: "homeassistant.turn_on", target: { entity_id: "switch.k" } }],
});
check("top-level disabled automation -> fullyCaptured false", topDisabled.fullyCaptured === false);
const dataParams = readLegacySlice({
  description: "[schedule-ui:turn-on] K",
  trigger: [{ platform: "time", at: "07:00:00" }],
  action: [{ service: "homeassistant.turn_on", target: { entity_id: "switch.k" }, data: { brightness: 50 } }],
});
check("action with extra data -> fullyCaptured false", dataParams.fullyCaptured === false);
const actionKeyVariant = readLegacySlice({
  description: "[schedule-ui:turn-on] K",
  trigger: [{ platform: "time", at: "07:00:00" }],
  action: [{ action: "homeassistant.turn_on", target: { entity_id: "switch.k" } }],
});
check("modern `action:` key still recognized (pristine)", actionKeyVariant.fullyCaptured === true && actionKeyVariant.mode === "turn_on");
const outOfRange = readLegacySlice({
  description: "[schedule-ui:turn-on] K",
  trigger: [{ platform: "time", at: "25:00:00" }],
  action: [{ service: "homeassistant.turn_on", target: { entity_id: "switch.k" } }],
});
check("out-of-range time literal -> fullyCaptured false", outOfRange.fullyCaptured === false);
const nullInTargets = readLegacySlice({
  description: "[schedule-ui:turn-on] K",
  trigger: [{ platform: "time", at: "07:00:00" }],
  action: [{ service: "homeassistant.turn_on", target: { entity_id: ["switch.k", null] } }],
});
check("non-string entry in entity_id array -> fullyCaptured false", nullInTargets.fullyCaptured === false);

console.log("planLegacyMigration: conflicting weekdays are KEPT not merged");
const base = emptySlices({ target: "switch.k", friendly: "K" });
const planConflict = planLegacyMigration(base, [
  { cid: "a", slice: { mode: "turn_on", times: ["07:00:00"], weekdays: ["mon", "tue", "wed", "thu", "fri"] } },
  { cid: "b", slice: { mode: "turn_on", times: ["09:00:00"], weekdays: ["sat", "sun"] } },
]);
check("first same-mode adopted (delete a)", planConflict.toDelete.includes("a"));
check("conflicting-weekday kept (skip b, NOT deleted)", planConflict.skipped.includes("b") && !planConflict.toDelete.includes("b"));
check("adopted slice keeps its own weekdays (no clobber)", eq(planConflict.slices.on.weekdays, ["mon", "tue", "wed", "thu", "fri"]));
check("conflicting times NOT merged in", eq(planConflict.slices.on.times, ["07:00:00"]));

console.log("planLegacyMigration: same weekdays union + both deleted");
const planUnion = planLegacyMigration(emptySlices({ target: "switch.k", friendly: "K" }), [
  { cid: "a", slice: { mode: "turn_on", times: ["07:00:00"], weekdays: ["mon"] } },
  { cid: "b", slice: { mode: "turn_on", times: ["09:00:00"], weekdays: ["mon"] } },
]);
check("same-weekday union times", eq(planUnion.slices.on.times, ["07:00:00", "09:00:00"]));
check("both deleted on union", planUnion.toDelete.includes("a") && planUnion.toDelete.includes("b") && planUnion.skipped.length === 0);

function triggerHasId(cfg, id) {
  return (cfg.trigger || []).some((t) => t.id === id);
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
