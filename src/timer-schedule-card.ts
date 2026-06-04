// @ts-nocheck
// Entry point for the schedule-ui Lovelace bundle.
//
// Each card and its editor lives in its own module under src/cards and
// src/editors. They self-register via customElements.define and append
// themselves to window.customCards as a side effect of being imported.
//
// Adding a new card here is therefore a two-step process:
//   1. drop the module under src/cards/<name>.ts (or src/editors/<name>.ts)
//   2. add an import "./..." line below.
//
// Anything else (shared constants, helpers, types) should live in src/
// alongside whichever module actually owns it — there is no longer a
// "main card" file here. Keep this entry point as small as possible.

import "./locales/index.js";
import "./editors/schedule-editor.js";
import "./editors/timer-editor.js";
import "./editors/turn-on-editor.js";
import "./cards/schedule-card.js";
import "./cards/timer-card.js";
import "./cards/turn-on-card.js";

console.log(
  "%c[schedule-ui] v1.8.0 loaded",
  "color: #03a9f4; font-weight: bold; font-size: 14px;",
);
