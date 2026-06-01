// Companion to add-turnon-ui.js. For every device popup that already has a
// "켜기 예약" sub-popup (introduced in v1.5.0), inject a parallel "끄기
// 예약" sub-popup using ha-custom-turn-off-card plus a navigation menu
// item in the main popup. Idempotent — running twice is a no-op.
//
// Run from repo root:  node scripts/add-turnoff-ui.js
//
// The automation field is left blank; users wire it up after creating the
// per-device turn-off automation via the card editor's wizard.

const fs = require("fs");
const path = require("path");

const FILE = path.resolve(__dirname, "..", "ha_dashboard.yaml");

const rawSrc = fs.readFileSync(FILE, "utf8");
const usesCRLF = rawSrc.includes("\r\n");
const src = usesCRLF ? rawSrc.replace(/\r\n/g, "\n") : rawSrc;

if (src.includes("ha-custom-turn-off-card") || src.includes("_turnoff'")) {
  console.log("turn-off UI already present — nothing to do.");
  process.exit(0);
}

if (!src.includes("ha-custom-turn-on-card")) {
  console.error("turn-on UI not present yet. Run add-turnon-ui.js first.");
  process.exit(1);
}

// ── helpers ───────────────────────────────────────────────────────────

function turnOffTitle(turnOnTitle) {
  // turn-on titles produced by add-turnon-ui.js use "<name> 켜기 예약".
  // Swap 켜기 → 끄기 to stay symmetric.
  if (turnOnTitle.includes("켜기 예약")) {
    return turnOnTitle.replace("켜기 예약", "끄기 예약");
  }
  if (turnOnTitle.includes("Turn-On")) {
    return turnOnTitle.replace("Turn-On", "Turn-Off");
  }
  return turnOnTitle + " (끄기)";
}

function buildMenuItem(slug) {
  // Mirror of the turn-on menu item — same shape, mdi:power-plug-off-outline
  // icon to distinguish at a glance, navigates to the new _turnoff hash.
  return `              - type: custom:mushroom-template-card
                primary: 끄기 예약
                secondary: ''
                icon: mdi:power-plug-off-outline
                icon_color: amber
                layout: horizontal
                fill_container: true
                tap_action:
                  action: navigate
                  navigation_path: '#${slug}_turnoff'
                card_mod:
                  style: >
                    ha-card { background: var(--secondary-background-color);
                    border-radius: 14px; box-shadow: none; border: none; }

                    ha-card:after { content: '\\203A'; position: absolute; right:
                    18px; top: 50%; transform: translateY(-50%); font-size:
                    22px; color: var(--secondary-text-color); }`;
}

function buildPopup(slug, switchEntity, title) {
  // Mirror of the existing turn-on popup vertical-stack. Same bubble-card
  // styles, same back/title/close header row. Differences: icon is
  // mdi:power-plug-off-outline, hash uses _turnoff, and the card is
  // ha-custom-turn-off-card.
  return `          - type: vertical-stack
            cards:
              - type: custom:bubble-card
                card_type: pop-up
                hash: '#${slug}_turnoff'
                entity: ${switchEntity}
                button_type: name
                name: >-
                  {{ state_attr(config.entity, 'friendly_name') or config.entity
                  }}
                icon: mdi:power-plug-off-outline
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
                    icon: mdi:power-plug-off-outline
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
              - type: custom:ha-custom-turn-off-card
                title: ${title}
                action_mode: turn_off
                automation: ''`;
}

// ── pass 1: insert "끄기 예약" menu item after each "켜기 예약" menu item ─

const menuRe = new RegExp(
  String.raw`(              - type: custom:mushroom-template-card\n` +
  String.raw`                primary: 켜기 예약\n` +
  String.raw`[\s\S]*?` +
  String.raw`navigation_path: '#([\w_]+)_turnon'\n` +
  String.raw`[\s\S]*?` +
  String.raw`22px; color: var\(--secondary-text-color\); \})`,
  "g",
);

let menuMatches = 0;
let out = src.replace(menuRe, (full, turnOnBlock, slug) => {
  menuMatches++;
  return `${turnOnBlock}\n${buildMenuItem(slug)}`;
});
console.log(`pass 1: inserted ${menuMatches} menu items`);

// ── pass 2: insert turn-off popup vertical-stack after each turn-on popup ─

// The turn-on popup is a vertical-stack whose last child is a
// ha-custom-turn-on-card. We anchor on the popup's bubble-card hash
// (`#<slug>_turnon`) to extract the slug, then match through to the
// terminal `automation:` line. The capture group keeps the popup intact
// and the trailing `(\n)` ensures we re-emit the same separator.

const popupRe = new RegExp(
  String.raw`(          - type: vertical-stack\n` +
  String.raw`            cards:\n` +
  String.raw`              - type: custom:bubble-card\n` +
  String.raw`                card_type: pop-up\n` +
  String.raw`                hash: '#([\w_]+)_turnon'\n` +
  String.raw`                entity: ([\w_.]+)\n` +
  String.raw`[\s\S]*?` +
  String.raw`              - type: custom:ha-custom-turn-on-card\n` +
  String.raw`                title: ([^\n]+)\n` +
  String.raw`                automation: [^\n]*)(\n)`,
  "g",
);

let popupMatches = 0;
out = out.replace(popupRe, (full, turnOnPopup, slug, switchEntity, turnOnTitleStr) => {
  popupMatches++;
  const newPopup = buildPopup(slug, switchEntity, turnOffTitle(turnOnTitleStr));
  return `${turnOnPopup}\n${newPopup}\n`;
});
console.log(`pass 2: inserted ${popupMatches} popups`);

if (menuMatches !== popupMatches) {
  console.error(`MISMATCH: menus=${menuMatches}, popups=${popupMatches}. Aborting (file unchanged).`);
  process.exit(1);
}

if (popupMatches === 0) {
  console.error("no turn-on popups matched — regex drift? Aborting.");
  process.exit(1);
}

const finalOut = usesCRLF ? out.replace(/\n/g, "\r\n") : out;
fs.writeFileSync(FILE, finalOut);
console.log(`✓ wrote ${FILE} (${menuMatches} devices updated, ${usesCRLF ? "CRLF" : "LF"})`);
