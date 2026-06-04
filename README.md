# HA Custom Schedule & Timer Cards

> Lovelace custom cards for managing Home Assistant `schedule` and `timer` helpers visually — with one-click automation bridges to wire helpers to real devices.

**Languages:** [English](README.md) · [한국어](README.ko.md)

[![HACS Custom](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://hacs.xyz/)
[![GitHub Release](https://img.shields.io/github/v/release/jewon-oh/ha-schedule-timer-cards?include_prereleases)](https://github.com/jewon-oh/ha-schedule-timer-cards/releases)
[![Validate](https://github.com/jewon-oh/ha-schedule-timer-cards/actions/workflows/validate.yml/badge.svg?branch=master)](https://github.com/jewon-oh/ha-schedule-timer-cards/actions/workflows/validate.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#license)

Single JS file. UI auto-switches between English and Korean based on your Home Assistant language.

## Screenshots

![Schedule + Timer cards on a Home Assistant dashboard](assets/dashboard.png)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [How It Works](#how-it-works)
- [Troubleshooting](#troubleshooting)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Auto-create schedules** — pick a target device in the card editor and the schedule helper plus on/off automation are generated for you.
- **Turn-on / turn-off schedules** — dedicated cards fire a device on (or off) at the listed times per weekday, with a time + day picker.
- **Timer with direction toggle** — the timer card shows on/off radios above the countdown; it defaults to the opposite of the device's current state (on → off, off → on) and finishes in the chosen direction.
- **Single-file delivery** — everything ships in `timer-schedule-card.js`; HACS custom repository supported.
- **24-hour weekly timeline** — vertical timeline (columns = days, axis = 0–24h) with a now-indicator line.
- **Daily merged tab** — view the intersection of blocks across all 7 days; add or delete them all at once.
- **HA Sections layout compatible** — card height auto-adjusts to your display.
- **Dark/light theme** — glassmorphism styling fits both Home Assistant themes.

## Installation

### HACS (recommended)

1. Open HACS → top-right menu → **Custom repositories**.
2. Add the repository URL:

   ```text
   https://github.com/jewon-oh/ha-schedule-timer-cards
   ```

3. Download `Custom Schedule Card` from the list.
4. Approve the resource auto-add prompt.

### Manual

1. Copy `timer-schedule-card.js` to `/config/www/`.
2. Add `/local/timer-schedule-card.js` as a `JavaScript Module` resource under **Settings → Dashboards → Resources**.

> **Mobile / Companion cache:** HA's service worker can keep an old copy of the
> bundle even after you refresh. Bump a query-string on the resource URL —
> e.g. `/local/timer-schedule-card.js?v=1.6.0` — and update it on every release
> to force a re-fetch. See [Troubleshooting](#troubleshooting) below if a card
> goes missing right after an update.
>
> **Permissions:** the **auto-create wizard** calls admin-only HA APIs
> (`schedule/create`, `timer/create`, `config/automation/config/*`). Non-admin
> users see the wizard hidden and can only pick an existing helper. Have an
> admin create the helper first, then share the dashboard.

## Usage

### 1. Auto-create with the wizard

1. In dashboard edit mode, add `Custom Schedule Card` or `Custom Timer Card`.
2. Click the **[ Target Device ]** dropdown at the bottom of the card editor.
3. Pick the device to be turned on/off automatically (the off-action is configurable).
4. The helper and bridge automation are created immediately.
5. Save, then drag time blocks in the viewer — the device responds.

### 2. Use an existing helper

If you already have a schedule or timer helper, just select it in the card editor's entity picker.

## Configuration

```yaml
type: custom:ha-custom-schedule-card
entity: schedule.livingroom_light      # schedule entity ID (required)
title: Living Room Light               # card title (optional)
```

| Option   | Required | Description                                                         |
| -------- | -------- | ------------------------------------------------------------------- |
| `entity` | Yes      | Schedule helper entity ID. Only the `schedule.*` domain is allowed. |
| `title`  | No       | Card title. Falls back to the schedule's default name.              |

### Available cards

| Card                   | Type                              | Description                                                  |
|------------------------|-----------------------------------|--------------------------------------------------------------|
| Schedule Card          | `custom:ha-custom-schedule-card`  | Vertical 24h weekly timeline, daily merged tab               |
| Timer Card             | `custom:ha-custom-timer-card`     | Countdown timer with on/off direction picker (defaults to device state) |
| Turn-On Schedule Card  | `custom:ha-custom-turn-on-card`   | Time + weekday picker; turns a device **on** at each time    |
| Turn-Off Schedule Card | `custom:ha-custom-turn-off-card`  | Time + weekday picker; turns a device **off** at each time   |

## How It Works

Wizard-generated automations are saved under `config/automation/config/{schedule_bridge_ID}`.

```text
schedule.my_device ON  → target device turn_on
schedule.my_device OFF → target device turn_off
```

For brightness, color, temperature, or other conditions, edit the generated automation under **Settings → Automations**.

## Troubleshooting

### "Custom element doesn't exist: ha-custom-turn-on-card" / "구성 오류" after updating

All four cards (`schedule`, `timer`, `turn-on`, `turn-off`) ship in **one** file,
`timer-schedule-card.js`. When a release adds a new custom element, HA's
service worker (and the Companion app's WebView) keeps serving the previously
cached bundle from the **same URL**, so the new element is missing and HA shows
*"Custom element doesn't exist"* or a *구성 오류* (configuration error) card.
Older cards and other vendors' cards keep working — only the just-added element
is absent.

**Fix (manual install):**

1. **Bump the resource version.** Go to **Settings → Dashboards → Resources**,
   edit the `timer-schedule-card.js` entry, and change the query string to the
   new release version, e.g. `/local/timer-schedule-card.js?v=1.6.0`. The `?v=`
   value just has to *change* — matching the release version keeps it tidy.
2. **Restart Home Assistant** (or reload the dashboard) so the new resource URL
   is served.
3. **Hard refresh the browser** — `Ctrl`+`F5` / `Ctrl`+`Shift`+`R` (Windows/Linux)
   or `Cmd`+`Shift`+`R` (macOS).
4. **Clear the Companion app frontend cache** if you use the mobile/desktop app
   (the hard refresh above does not reach its WebView cache):
   - **iOS:** App Settings → Companion App → Debug → **Reset frontend cache**.
   - **Android:** Settings → Companion App → Troubleshooting → **Reset frontend cache**.
   - **macOS:** menu-bar icon → Preferences → Debugging → **Reset frontend cache**.
5. **Verify the loaded version.** Open the browser dev console (or the app's
   debug log) and confirm the banner reads the new version:

   ```text
   [schedule-ui] v1.6.0 loaded
   ```

   If the banner still shows the old version, the stale bundle is still cached —
   repeat the cache-clear step. Once the banner matches the release you just
   installed, the new card type will resolve.

> **HACS installs are auto-protected — no `?v=` bump needed.** HACS registers
> the resource as `/hacsfiles/ha-schedule-timer-cards/timer-schedule-card.js?hacstag=…`
> with a version-derived numeric cache-buster (it changes when the installed
> version changes — it is *not* a content hash). Because that tag changes on
> update, **every HACS update rewrites the resource URL automatically**, so the
> browser sees a brand-new URL and is forced to re-fetch. HACS users only need
> steps 3–4 (hard refresh / Companion frontend-cache reset) — skip step 1.
> Caveat: this auto-rewrite only happens in **storage-mode**
> Lovelace. If you run **YAML-mode** Lovelace, HACS cannot manage the resource, so
> you must version the `/hacsfiles/...` URL yourself, exactly like a manual install.

## Development

Install dependencies and build the bundle:

This project uses [pnpm](https://pnpm.io/) — the pinned version is in `package.json`'s `packageManager` field, so `corepack enable` will pick it up automatically.

```bash
pnpm install
pnpm run build      # outputs timer-schedule-card.js
pnpm run watch      # rebuild on changes
```

Preview the card UI without a Home Assistant server using the dev HTML pages:

```bash
pnpm run dev        # http-server on :8080
# http://localhost:8080/dev/preview.html
# http://localhost:8080/dev/preview-timer.html
```

Run the headless smoke test (loads both previews, asserts the cards mount and emit no console errors):

```bash
pnpm run smoke
```

### Local Home Assistant instance (recommended for real testing)

The dev/preview HTMLs only mock a tiny slice of HA. To test the card the way HA
plugin authors usually do — against a real `schedule`/`timer` helper, the actual
`hass.callWS` API, the card picker, the visual editor, and the auto-created
automation bridge — spin up a local HA in Docker:

```bash
pnpm run build      # produces timer-schedule-card.js (bundled into HA via volume mount)
pnpm run ha:up      # docker compose up -d; HA listens on http://localhost:8123
pnpm run ha:logs    # tail HA logs
pnpm run ha:down    # stop and remove the container
```

First launch checklist:

1. Open `http://localhost:8123`, complete the onboarding wizard.
2. **Settings → Devices & services → Helpers → Create helper** → add a `Schedule` or `Timer` helper.
3. Edit any dashboard → **Add Card** → pick *Schedule Card* / *Timer Card* (no manual Lovelace resource registration needed — the bundle is auto-loaded via `frontend.extra_module_url` in [ha-config/configuration.yaml](ha-config/configuration.yaml)).
4. Rebuild (`pnpm run build` or `pnpm run watch`) and hard-refresh the browser to pick up the new bundle.

`ha-config/` is gitignored except for `configuration.yaml`, so your HA database
and credentials stay local.

Regenerate screenshots (uses Playwright + the dev preview pages):

```bash
pnpm run screenshot
```

Project layout:

```text
src/        TypeScript sources (built into root timer-schedule-card.js)
dev/        Browser preview HTML for offline UI testing
scripts/    Node helpers (screenshot generation)
assets/     README screenshots
examples/   YAML automation blueprints
```

## Contributing

Issues and pull requests are welcome. For larger changes, open an issue first.

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/my-feature`)
3. Commit your changes
4. Push and open a Pull Request

## License

Released under the [MIT License](LICENSE).
