// Inverse of add-turnon-ui.js. Strips every "켜기 예약" turn-on sub-popup
// and its navigation menu item back out of ha_dashboard.yaml, leaving the
// schedule / timer / 끄기 예약 (turn-off) blocks untouched. Idempotent —
// running twice is a no-op.
//
// Run from repo root:  node scripts/remove-turnon-ui.js
//
// The turn-off UI (add-turnoff-ui.js) does not depend on the turn-on blocks,
// so removing turn-on is safe to do independently.

const fs = require("fs");
const path = require("path");

const FILE = path.resolve(__dirname, "..", "ha_dashboard.yaml");

const rawSrc = fs.readFileSync(FILE, "utf8");
const usesCRLF = rawSrc.includes("\r\n");
const src = usesCRLF ? rawSrc.replace(/\r\n/g, "\n") : rawSrc;

if (!src.includes("ha-custom-turn-on-card") && !src.includes("_turnon'")) {
  console.log("turn-on UI not present — nothing to do.");
  process.exit(0);
}

// ── pass 1: remove each "켜기 예약" menu item ─────────────────────────────
// Anchored on `primary: 켜기 예약` + the `_turnon` navigation_path so we
// never touch the parallel 끄기 예약 / 스케줄 예약 items. The non-greedy
// spans stop at this block's own terminal card_mod line. The trailing \n is
// consumed so the following menu item slides up with no blank gap.

const menuRe = new RegExp(
  String.raw`              - type: custom:mushroom-template-card\n` +
  String.raw`                primary: 켜기 예약\n` +
  String.raw`[\s\S]*?` +
  String.raw`navigation_path: '#[\w_]+_turnon'\n` +
  String.raw`[\s\S]*?` +
  String.raw`22px; color: var\(--secondary-text-color\); \}\n`,
  "g",
);

let menuMatches = 0;
let out = src.replace(menuRe, () => { menuMatches++; return ""; });
console.log(`pass 1: removed ${menuMatches} menu items`);

// ── pass 2: remove each turn-on popup vertical-stack ─────────────────────
// Anchored on the popup's `#<slug>_turnon` bubble-card hash, matched through
// the terminal ha-custom-turn-on-card / automation line. The trailing \n is
// consumed so the next popup slides up cleanly.

const popupRe = new RegExp(
  String.raw`          - type: vertical-stack\n` +
  String.raw`            cards:\n` +
  String.raw`              - type: custom:bubble-card\n` +
  String.raw`                card_type: pop-up\n` +
  String.raw`                hash: '#[\w_]+_turnon'\n` +
  String.raw`[\s\S]*?` +
  String.raw`              - type: custom:ha-custom-turn-on-card\n` +
  String.raw`                title: [^\n]*\n` +
  String.raw`                automation: [^\n]*\n`,
  "g",
);

let popupMatches = 0;
out = out.replace(popupRe, () => { popupMatches++; return ""; });
console.log(`pass 2: removed ${popupMatches} popups`);

if (menuMatches !== popupMatches) {
  console.error(`MISMATCH: menus=${menuMatches}, popups=${popupMatches}. Aborting (file unchanged).`);
  process.exit(1);
}

if (popupMatches === 0) {
  console.error("no turn-on blocks matched — regex drift? Aborting.");
  process.exit(1);
}

const finalOut = usesCRLF ? out.replace(/\n/g, "\r\n") : out;
fs.writeFileSync(FILE, finalOut);
console.log(`✓ wrote ${FILE} (${menuMatches} devices updated, ${usesCRLF ? "CRLF" : "LF"})`);
