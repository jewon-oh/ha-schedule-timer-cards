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

function triggerHasId(cfg, id) {
  return (cfg.trigger || []).some((t) => t.id === id);
}

console.log(`\n${pass} passed, ${fail} failed`);
process.exit(fail ? 1 : 0);
