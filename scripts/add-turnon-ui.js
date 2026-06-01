// One-shot dashboard transformation: for every device popup in
// ha_dashboard.yaml that already has a schedule sub-popup, inject a
// parallel "Turn-On Schedule" sub-popup (with its own bubble-card popup,
// header row, and ha-custom-turn-on-card) plus a navigation menu item in
// the main popup. Idempotent — running twice is a no-op.
//
// Run from repo root:  node scripts/add-turnon-ui.js
//
// The automation field is left blank; users wire it up after creating the
// per-device turn-on automation via the card editor's wizard.

const fs = require("fs");
const path = require("path");

const FILE = path.resolve(__dirname, "..", "ha_dashboard.yaml");

const rawSrc = fs.readFileSync(FILE, "utf8");

// HA dashboard YAML on Windows is shipped with CRLF line endings. We do
// the regex work against an LF-normalized copy to keep the patterns sane,
// then restore CRLF on write so HA picks the file up unchanged outside of
// our injected blocks.
const usesCRLF = rawSrc.includes("\r\n");
const src = usesCRLF ? rawSrc.replace(/\r\n/g, "\n") : rawSrc;

if (src.includes("ha-custom-turn-on-card") || src.includes("_turnon'")) {
  console.log("turn-on UI already present — nothing to do.");
  process.exit(0);
}

// ── helpers ───────────────────────────────────────────────────────────

function turnOnTitle(scheduleTitle) {
  // Schedule card titles use "… 예약". We keep that suffix and prepend
  // "켜기" so titles still read naturally. Examples:
  //   "코팅실 2 전등 예약"   → "코팅실 2 전등 켜기 예약"
  //   "스케줄 작동 예약"      → "스케줄 작동 켜기 예약"
  // If for some reason the title lacks "예약", just append the marker.
  if (scheduleTitle.endsWith("예약")) {
    return scheduleTitle.slice(0, -2).trimEnd() + " 켜기 예약";
  }
  return scheduleTitle + " 켜기 예약";
}

function buildMenuItem(slug) {
  // Mirror of the "스케줄 예약" mushroom-template-card menu item.
  return `              - type: custom:mushroom-template-card
                primary: 켜기 예약
                secondary: ''
                icon: mdi:power-plug-outline
                icon_color: amber
                layout: horizontal
                fill_container: true
                tap_action:
                  action: navigate
                  navigation_path: '#${slug}_turnon'
                card_mod:
                  style: >
                    ha-card { background: var(--secondary-background-color);
                    border-radius: 14px; box-shadow: none; border: none; }

                    ha-card:after { content: '\\203A'; position: absolute; right:
                    18px; top: 50%; transform: translateY(-50%); font-size:
                    22px; color: var(--secondary-text-color); }`;
}

function buildPopup(slug, switchEntity, title) {
  // Mirror of the existing schedule popup vertical-stack. Same bubble-card
  // styles, same back/title/close header row. Only differences: icon is
  // mdi:power-plug-outline (matches the turn-on card's own header icon),
  // hash uses _turnon suffix, and the card is ha-custom-turn-on-card.
  return `          - type: vertical-stack
            cards:
              - type: custom:bubble-card
                card_type: pop-up
                hash: '#${slug}_turnon'
                entity: ${switchEntity}
                button_type: name
                name: >-
                  {{ state_attr(config.entity, 'friendly_name') or config.entity
                  }}
                icon: mdi:power-plug-outline
                show_header: false
                bg_opacity: '80'
                bg_blur: '14'
                bg_color: var(--card-background-color)
                width_desktop: 540px
                width_mobile: 100vw
                margin_top_desktop: 12vh
                margin_top_mobile: 0px
                tap_action:
                  action: toggle
                styles: |
                  .bubble-pop-up,
                  .bubble-pop-up-container,
                  .bubble-pop-up.is-popup-visible {
                    animation: none !important;
                    transition: none !important;
                  }
                  @media (max-width: 768px) {
                    .bubble-pop-up {
                      height: calc(100vh - 2vh) !important;
                      border-radius: 24px !important;
                      margin-bottom: 0 !important;
                    }
                  }
                  .bubble-button-card-container {
                    border-radius: 14px !important;
                    transition: background 0.25s ease !important;
                    padding: 4px 10px !important;
                    background: \${state === 'on' ? 'var(--secondary-background-color)' : 'transparent'} !important;
                  }
                  .bubble-icon {
                    color: \${state === 'on' ? '#00C853' : 'var(--secondary-text-color)'} !important;
                  }
                  .bubble-header-container {
                    display: flex !important;
                    flex-direction: row !important;
                    align-items: center !important;
                    gap: 8px !important;
                  }
                  .bubble-button-card-container {
                    order: 2 !important;
                    flex: 1 !important;
                  }
                  .bubble-previous-button-container,
                  .bubble-previous-button {
                    order: 1 !important;
                  }
                  .bubble-close-button-container,
                  .bubble-close-button {
                    order: 3 !important;
                  }
              - type: horizontal-stack
                card_mod:
                  style: |
                    #root {
                      display: grid !important;
                      grid-template-columns: 48px 1fr 48px !important;
                      grid-auto-columns: unset !important;
                      gap: 8px !important;
                    }
                cards:
                  - type: custom:mushroom-template-card
                    icon: mdi:arrow-left
                    icon_color: grey
                    tap_action:
                      action: navigate
                      navigation_path: '#${slug}'
                    card_mod:
                      style: >
                        ha-card { background: transparent !important;
                        box-shadow: none !important; border: none !important;
                        padding: 0 !important; width: 48px !important;
                        min-width: 48px !important; max-width: 48px !important;
                        }

                        mushroom-shape-icon { --shape-color: transparent
                        !important; }
                  - type: custom:mushroom-template-card
                    entity: ${switchEntity}
                    icon: mdi:power-plug-outline
                    primary: '{{ state_attr(entity, ''friendly_name'') }}'
                    tap_action:
                      action: none
                    hold_action:
                      action: none
                    double_tap_action:
                      action: none
                    card_mod:
                      style: >
                        ha-card { background: var(--secondary-background-color)
                        !important; border-radius: 14px; box-shadow: none;
                        border: none; pointer-events: none; }

                        mushroom-state-info .primary { font-size: 16px
                        !important; font-weight: 600 !important; }
                  - type: custom:mushroom-template-card
                    icon: mdi:close
                    icon_color: grey
                    tap_action:
                      action: navigate
                      navigation_path: '#'
                    card_mod:
                      style: >
                        ha-card { background: transparent !important;
                        box-shadow: none !important; border: none !important;
                        padding: 0 !important; width: 48px !important;
                        min-width: 48px !important; max-width: 48px !important;
                        }

                        mushroom-shape-icon { --shape-color: transparent
                        !important; }
              - type: custom:ha-custom-turn-on-card
                title: ${title}
                automation: ''`;
}

// ── pass 1: insert "켜기 예약" menu item after each "스케줄 예약" menu item ─

// The schedule menu item block is the mushroom-template-card whose primary
// is "스케줄 예약" and whose tap_action navigates to '#<slug>_sched'. We
// match the whole card_mod block (which ends on the line containing
// `22px; color: var(--secondary-text-color); }`) so we can splice the new
// menu item directly after it at the same indent depth.

const menuRe = new RegExp(
  String.raw`(              - type: custom:mushroom-template-card\n` +
  String.raw`                primary: 스케줄 예약\n` +
  String.raw`[\s\S]*?` +
  String.raw`navigation_path: '#([\w_]+)_sched'\n` +
  String.raw`[\s\S]*?` +
  String.raw`22px; color: var\(--secondary-text-color\); \})`,
  "g",
);

let menuMatches = 0;
let out = src.replace(menuRe, (full, scheduleBlock, slug) => {
  menuMatches++;
  return `${scheduleBlock}\n${buildMenuItem(slug)}`;
});
console.log(`pass 1: inserted ${menuMatches} menu items`);

// ── pass 2: insert turn-on popup vertical-stack after each schedule popup ─

// The schedule popup is a vertical-stack whose last child is a
// ha-custom-schedule-card. We anchor on the popup's bubble-card hash
// (`#<slug>_sched`) so we can pull out the slug, then we match through
// the card's `toggle_entity:` line, which is the popup's terminal line.
// We capture the trailing newline and indentation so the inserted block
// sits at the same 10-space depth as the schedule popup itself.

const popupRe = new RegExp(
  String.raw`(          - type: vertical-stack\n` +
  String.raw`            cards:\n` +
  String.raw`              - type: custom:bubble-card\n` +
  String.raw`                card_type: pop-up\n` +
  String.raw`                hash: '#([\w_]+)_sched'\n` +
  String.raw`[\s\S]*?` +
  String.raw`              - type: custom:ha-custom-schedule-card\n` +
  String.raw`                title: ([^\n]+)\n` +
  String.raw`                entity: schedule\.[\w_]+\n` +
  String.raw`                toggle_entity: ([\w_.]+))(\n)`,
  "g",
);

let popupMatches = 0;
out = out.replace(popupRe, (full, schedulePopup, slug, scheduleTitle, switchEntity) => {
  popupMatches++;
  const newPopup = buildPopup(slug, switchEntity, turnOnTitle(scheduleTitle));
  return `${schedulePopup}\n${newPopup}\n`;
});
console.log(`pass 2: inserted ${popupMatches} popups`);

if (menuMatches !== popupMatches) {
  console.error(`MISMATCH: menus=${menuMatches}, popups=${popupMatches}. Aborting (file unchanged).`);
  process.exit(1);
}

if (popupMatches === 0) {
  console.error("no schedule popups matched — regex drift? Aborting.");
  process.exit(1);
}

// Re-encode to match the original line ending convention.
const finalOut = usesCRLF ? out.replace(/\n/g, "\r\n") : out;
fs.writeFileSync(FILE, finalOut);
console.log(`✓ wrote ${FILE} (${menuMatches} devices updated, ${usesCRLF ? "CRLF" : "LF"})`);
