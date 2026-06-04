// @ts-nocheck
import { LitElement, html, css } from "lit";
import { TURN_ON_LOCALES, detectLang } from "../locales/index.js";

// HA weekday codes used by `condition: time` — Monday-first to match the
// rest of the schedule-ui cards. Order is load-bearing: this array's index
// (0..6) is what UI buttons map to.
const WEEKDAYS = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// Per-mode constants. The same card class drives both ha-custom-turn-on-card
// and ha-custom-turn-off-card (the subclass below); these tables keep all
// per-mode knobs (service name, automation-description tag, icon) in one
// place so a future "toggle" mode would only need a third row.
const SERVICE_BY_MODE = {
  turn_on: "homeassistant.turn_on",
  turn_off: "homeassistant.turn_off",
};
const TAG_BY_MODE = {
  turn_on: "[schedule-ui:turn-on]",
  turn_off: "[schedule-ui:turn-off]",
};
const ICON_BY_MODE = {
  turn_on: "mdi:power-plug-outline",
  turn_off: "mdi:power-plug-off-outline",
};

// Kept exported under its historical name; callers (the editor) only used
// it as the tag for the default turn_on path.
const AUTOMATION_TAG = TAG_BY_MODE.turn_on;

class HaCustomTurnOnCard extends LitElement {
  // Default action mode for this concrete element class. The turn-off
  // subclass below overrides this; user config (`action_mode`) takes
  // precedence over both. Reading via `this.constructor.defaultActionMode`
  // means a subclass switches its identity just by setting this one prop.
  static defaultActionMode = "turn_on";

  static properties = {
    _config: { state: true },
    _hass: { state: false },
    _automationId: { state: true },
    _automationConfig: { state: true },
    _times: { state: true },           // ["HH:MM:SS", ...]
    _weekdays: { state: true },        // ["mon", "tue", ...]
    _target: { state: true },          // entity_id string
    _isSaving: { state: true },
    _toast: { state: true },
    _confirm: { state: true },
  };

  // Resolution order: explicit config > class-level default. Reads through
  // the live `_config` so a user editing action_mode in the visual editor
  // flips the card without a reload.
  get _actionMode() {
    const fromConfig = this._config?.action_mode;
    if (fromConfig === "turn_on" || fromConfig === "turn_off") return fromConfig;
    return this.constructor.defaultActionMode || "turn_on";
  }

  // Pick a mode-suffixed locale key when the underlying string varies per
  // mode (titles, suffixes, wizard copy) and fall back to the base key
  // for mode-agnostic strings (dialog text, weekday labels, …).
  _modeKey(base) {
    const mode = this._actionMode;
    const suffix = mode === "turn_off" ? "TurnOff" : "TurnOn";
    return `${base}${suffix}`;
  }
  _tm(base) {
    return this._t(this._modeKey(base));
  }

  constructor() {
    super();
    this._lang = detectLang();
    this._automationId = null;
    this._automationConfig = null;
    this._times = [];
    this._weekdays = [...WEEKDAYS];
    this._target = null;
    this._isSaving = false;
    this._toast = null;
    this._toastTimer = null;
    this._saveTimer = null;
    this._confirm = null;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._saveTimer) clearTimeout(this._saveTimer);
    if (this._toastTimer) clearTimeout(this._toastTimer);
  }

  setConfig(config) {
    if (!config) throw new Error("Invalid configuration");
    this._config = config;
    if (this._hass) this._loadAutomation();
  }

  set hass(hass) {
    const oldHass = this._hass;
    this._hass = hass;
    if (hass?.language) {
      const newLang = hass.language.startsWith("ko") ? "ko" : "en";
      if (this._lang !== newLang) {
        this._lang = newLang;
        this.requestUpdate();
      }
    }
    if (!oldHass) this.requestUpdate();
    if (!oldHass && hass && this._config) this._loadAutomation();
  }

  _t(key) {
    return TURN_ON_LOCALES[this._lang]?.[key] ?? TURN_ON_LOCALES.en[key];
  }

  _showToast(message, ms = 3000) {
    if (this._toastTimer) clearTimeout(this._toastTimer);
    this._toast = { message };
    this._toastTimer = setTimeout(() => { this._toast = null; this._toastTimer = null; }, ms);
  }

  _openConfirm(message, onConfirm) {
    this._confirm = { message, onConfirm };
  }

  _closeConfirm() {
    this._confirm = null;
  }

  // The card config points to an automation either by entity_id (`automation.xxx`)
  // or by raw config_id (the storage slug used by config/automation/config/<id>).
  // We always normalize to the config_id because that's what the read/write API
  // requires.
  async _resolveAutomationConfigId() {
    if (!this._hass) return null;
    const raw = this._config?.automation;
    if (!raw) return null;
    if (typeof raw !== "string") return null;
    if (!raw.startsWith("automation.")) return raw;
    // entity_id → unique_id (== config_id) via entity registry
    try {
      const regEntry = await this._hass.callWS({
        type: "config/entity_registry/get",
        entity_id: raw,
      });
      if (regEntry?.unique_id) return regEntry.unique_id;
    } catch (e) {
      console.warn("[turn-on] entity registry lookup failed:", e);
    }
    // Fallback to the slug after "automation." — rarely matches but better than nothing.
    return raw.split(".")[1];
  }

  async _loadAutomation() {
    if (!this._hass || !this._config?.automation) return;
    const configId = await this._resolveAutomationConfigId();
    if (!configId) return;
    try {
      const cfg = await this._hass.callApi("GET", `config/automation/config/${configId}`);
      this._automationId = configId;
      this._automationConfig = cfg;
      this._hydrateFromAutomation(cfg);
      await this._maybeMigrateLegacyAlias();
    } catch (e) {
      console.error("[turn-on] failed to load automation:", e);
      this._automationId = null;
      this._automationConfig = null;
    }
  }

  // Older wizards produced aliases like "켜기 스케쥴: <device>" / "Turn-on
  // schedule: <device>". We've since unified on the suffix form ("<device>
  // 켜기 스케쥴") to match the schedule and timer cards. If we detect the
  // legacy prefix at load time, rewrite the alias once so HA's automations
  // list and the card header end up consistent. User-customized aliases
  // (anything not matching the exact legacy prefix) are left alone.
  // Only the turn_on mode ever shipped under the legacy prefix scheme — the
  // turn_off card type was introduced in v1.6.0, after the suffix form was
  // already standard — so we skip this entirely in turn_off mode.
  async _maybeMigrateLegacyAlias() {
    if (this._actionMode !== "turn_on") return;
    const cfg = this._automationConfig;
    if (!cfg || !this._automationId || !this._hass) return;
    const alias = typeof cfg.alias === "string" ? cfg.alias : "";
    const legacyPairs = [
      { prefix: "켜기 스케쥴: ", suffix: " 켜기 예약" },
      { prefix: "Turn-on schedule: ", suffix: " Turn-On Schedule" },
    ];
    for (const { prefix, suffix } of legacyPairs) {
      if (!alias.startsWith(prefix)) continue;
      const name = alias.slice(prefix.length);
      const newAlias = `${name}${suffix}`;
      if (newAlias === alias) return;
      const newCfg = { ...cfg, alias: newAlias };
      try {
        await this._hass.callApi("POST", `config/automation/config/${this._automationId}`, newCfg);
        this._automationConfig = newCfg;
      } catch (e) {
        console.warn("[turn-on] legacy alias migration failed:", e);
      }
      return;
    }
  }

  // Parse times/weekdays/target out of the automation YAML. We tolerate
  // missing pieces (a freshly-created automation may have no triggers yet)
  // by falling back to sensible defaults.
  _hydrateFromAutomation(cfg) {
    const triggers = Array.isArray(cfg?.trigger) ? cfg.trigger
      : (Array.isArray(cfg?.triggers) ? cfg.triggers : []);
    const times = [];
    for (const t of triggers) {
      // platform is the legacy key; newer HA exports may use `trigger`.
      if (t?.platform === "time" || t?.trigger === "time") {
        const at = t.at;
        if (Array.isArray(at)) {
          for (const a of at) if (typeof a === "string") times.push(this._normalizeTime(a));
        } else if (typeof at === "string") {
          times.push(this._normalizeTime(at));
        }
      }
    }
    this._times = [...new Set(times)].sort();

    const conds = Array.isArray(cfg?.condition) ? cfg.condition
      : (Array.isArray(cfg?.conditions) ? cfg.conditions : []);
    let weekdays = null;
    for (const c of conds) {
      if (c?.condition === "time" && Array.isArray(c.weekday)) {
        weekdays = c.weekday.map(d => String(d).toLowerCase()).filter(d => WEEKDAYS.includes(d));
        break;
      }
    }
    // No condition? Then the automation fires every day.
    this._weekdays = weekdays && weekdays.length > 0 ? weekdays : [...WEEKDAYS];

    // Extract the target entity_id from the first action whose service
    // matches the current mode (homeassistant.turn_on for turn_on mode,
    // homeassistant.turn_off for turn_off mode). Loaders that picked the
    // wrong mode would otherwise see no target and start showing the
    // "automation not found" toast even when the automation is valid.
    const actions = Array.isArray(cfg?.action) ? cfg.action
      : (Array.isArray(cfg?.actions) ? cfg.actions : []);
    const expectedSuffix = `.${this._actionMode}`;
    let target = null;
    for (const a of actions) {
      const svc = a?.service || a?.action;
      if (typeof svc === "string" && svc.endsWith(expectedSuffix)) {
        target = a?.target?.entity_id
          || a?.data?.entity_id
          || a?.entity_id
          || null;
        if (Array.isArray(target)) target = target[0];
        if (target) break;
      }
    }
    // Fallback: if the automation was created for the *other* mode (e.g.
    // user manually toggled action_mode in YAML), still pull the target so
    // the card can offer to save and overwrite the service on next edit.
    if (!target) {
      for (const a of actions) {
        const svc = a?.service || a?.action;
        if (typeof svc === "string" && (svc.endsWith(".turn_on") || svc.endsWith(".turn_off"))) {
          target = a?.target?.entity_id
            || a?.data?.entity_id
            || a?.entity_id
            || null;
          if (Array.isArray(target)) target = target[0];
          if (target) break;
        }
      }
    }
    this._target = target;
  }

  _normalizeTime(s) {
    if (!s || typeof s !== "string") return "00:00:00";
    const parts = s.split(":");
    const h = String(Math.max(0, Math.min(23, parseInt(parts[0] || "0", 10) || 0))).padStart(2, "0");
    const m = String(Math.max(0, Math.min(59, parseInt(parts[1] || "0", 10) || 0))).padStart(2, "0");
    return `${h}:${m}:00`;
  }

  _scheduleSaveDebounced(ms = 400) {
    if (this._saveTimer) clearTimeout(this._saveTimer);
    this._saveTimer = setTimeout(() => {
      this._saveTimer = null;
      this._saveAutomation();
    }, ms);
  }

  // Rebuild trigger/condition/action sections from current state and POST
  // the whole automation config back. We keep the original alias, description,
  // mode, etc. untouched so user edits in the HA UI survive.
  async _saveAutomation() {
    if (!this._hass || !this._automationId || !this._automationConfig) return;
    if (!this._target) {
      this._showToast(this._t("automationNotFound"));
      return;
    }
    this._isSaving = true;
    try {
      const sortedTimes = [...new Set(this._times)].sort();
      const trigger = sortedTimes.map(t => ({ platform: "time", at: t }));
      const conditionList = this._weekdays.length === 7
        ? [] // all 7 days → no condition needed
        : [{ condition: "time", weekday: [...this._weekdays].sort((a, b) => WEEKDAYS.indexOf(a) - WEEKDAYS.indexOf(b)) }];
      const action = [{
        service: SERVICE_BY_MODE[this._actionMode] || SERVICE_BY_MODE.turn_on,
        target: { entity_id: this._target },
      }];

      const newCfg = {
        ...this._automationConfig,
        trigger,
        condition: conditionList,
        action,
      };
      // Drop the modern aliases so we don't ship duplicate keys.
      delete newCfg.triggers;
      delete newCfg.conditions;
      delete newCfg.actions;

      await this._hass.callApi("POST", `config/automation/config/${this._automationId}`, newCfg);
      this._automationConfig = newCfg;
    } catch (e) {
      console.error("[turn-on] save failed:", e);
      const code = e?.code || e?.error?.code;
      const msg = String(e?.message || e || "").toLowerCase();
      const isAuth = code === "unauthorized" || msg.includes("unauthorized") || msg.includes("not allowed");
      this._showToast(isAuth ? this._t("unauthorized") : `${this._t("saveFailed")} ${e?.message || e}`);
      await this._loadAutomation();
    } finally {
      this._isSaving = false;
    }
  }

  _addTime() {
    // Insert a default of 08:00, or 1 hour after the latest existing time
    // so a rapid-fire of clicks gives a sensible cascade instead of duplicates.
    let next = "08:00:00";
    if (this._times.length > 0) {
      const last = [...this._times].sort().slice(-1)[0];
      const [h, m] = last.split(":").map(Number);
      const total = (h * 60 + m + 60) % (24 * 60);
      next = `${String(Math.floor(total / 60)).padStart(2, "0")}:${String(total % 60).padStart(2, "0")}:00`;
    }
    if (this._times.includes(next)) {
      // Fallback: scan for the first free 15-min slot.
      for (let mins = 0; mins < 1440; mins += 15) {
        const candidate = `${String(Math.floor(mins / 60)).padStart(2, "0")}:${String(mins % 60).padStart(2, "0")}:00`;
        if (!this._times.includes(candidate)) { next = candidate; break; }
      }
    }
    this._times = [...this._times, next].sort();
    this._scheduleSaveDebounced();
  }

  _removeTime(idx) {
    this._openConfirm(this._t("confirmDeleteTime"), () => {
      this._closeConfirm();
      this._times = this._times.filter((_, i) => i !== idx);
      this._scheduleSaveDebounced();
    });
  }

  // `<input type="time">` returns "HH:MM"; we always store with seconds.
  _onTimeInput(e, idx) {
    const v = e.target.value;
    if (!v) return;
    const normalized = this._normalizeTime(v);
    if (this._times[idx] === normalized) return;
    // If the user tries to set a duplicate, revert to the previous value.
    if (this._times.includes(normalized)) {
      this._showToast(this._t("duplicateTime"));
      // force a re-render to reset the input value
      this._times = [...this._times];
      return;
    }
    const next = [...this._times];
    next[idx] = normalized;
    this._times = next.sort();
    this._scheduleSaveDebounced();
  }

  _toggleWeekday(code) {
    const has = this._weekdays.includes(code);
    const next = has
      ? this._weekdays.filter(d => d !== code)
      : [...this._weekdays, code];
    if (next.length === 0) {
      this._showToast(this._t("atLeastOneDay"));
      return;
    }
    this._weekdays = next.sort((a, b) => WEEKDAYS.indexOf(a) - WEEKDAYS.indexOf(b));
    this._scheduleSaveDebounced();
  }

  _targetFriendlyName() {
    if (!this._target || !this._hass) return this._target || "";
    const st = this._hass.states?.[this._target];
    return st?.attributes?.friendly_name || this._target;
  }

  render() {
    if (!this._config) return html`<ha-card><div class="error">${this._t("notConfigured")}</div></ha-card>`;

    const headerIcon = ICON_BY_MODE[this._actionMode] || ICON_BY_MODE.turn_on;

    // Preview / pre-hass state
    if (!this._hass) {
      return html`
        <ha-card>
          <div class="card-header">
            <div class="name">${this._config.title || this._tm("title")}</div>
            <div class="header-right"><ha-icon icon="${headerIcon}"></ha-icon></div>
          </div>
          <div class="card-content">
            <div class="empty-state">
              <ha-icon icon="${headerIcon}" style="--mdc-icon-size: 48px; opacity: 0.4;"></ha-icon>
              <p>${this._t("placeholder")}</p>
            </div>
          </div>
        </ha-card>
      `;
    }

    // Dummy preview when card has no automation configured yet.
    const isDummy = !this._config.automation;
    // Title precedence: explicit card config > the automation's stored alias
    // (already in "<device> <suffix>" form because the wizard built it that
    // way) > "<friendly target> <suffix>" if we know the target > generic
    // fallback. This keeps the new card's header consistent with the
    // schedule/timer cards' "<device> 스케쥴" / "<device> 타이머" pattern.
    const aliasName = this._automationConfig?.alias;
    const builtName = this._target
      ? `${this._targetFriendlyName()}${this._tm("routineSuffix")}`
      : null;
    const titleText = this._config.title
      || aliasName
      || builtName
      || this._tm("title");

    // When dummy, show fake data so the picker preview isn't empty.
    const times = isDummy ? ["08:00:00", "18:30:00"] : this._times;
    const weekdays = isDummy ? ["mon", "tue", "wed", "thu", "fri"] : this._weekdays;
    const target = isDummy ? "switch.example" : this._target;

    return html`
      <ha-card class="${isDummy ? 'is-dummy' : ''}">
        ${isDummy ? html`<div class="dummy-badge">${this._t("previewSuffix").trim()}</div>` : ''}

        <div class="card-header">
          <div class="name">${titleText}</div>
          <div class="header-right">
            <ha-icon icon="${headerIcon}"></ha-icon>
          </div>
        </div>

        <div class="card-content">
          ${!isDummy && !this._automationConfig ? html`
            <div class="empty-state">${this._t("automationNotFound")}</div>
          ` : html`
            ${target ? html`
              <div class="target-row">
                <ha-icon icon="mdi:target"></ha-icon>
                <span class="target-name">${this._targetFriendlyName() || target}</span>
              </div>
            ` : ''}

            <div class="times-section">
              <div class="section-label">
                <span>${this._tm("times")}</span>
                <button type="button" class="add-btn"
                        ?disabled=${isDummy}
                        @click=${this._addTime}
                        title="${this._t("addTime")}"
                        aria-label="${this._t("addTime")}">
                  <ha-icon icon="mdi:plus"></ha-icon>
                  <span>${this._t("addTime")}</span>
                </button>
              </div>

              ${times.length === 0 ? html`
                <div class="empty-times">${this._t("noTimes")}</div>
              ` : html`
                <div class="time-list">
                  ${times.map((t, idx) => html`
                    <div class="time-row">
                      <input type="time"
                             class="time-input"
                             .value=${t.slice(0, 5)}
                             ?disabled=${isDummy}
                             @change=${(e) => this._onTimeInput(e, idx)}/>
                      <button type="button"
                              class="remove-btn"
                              ?disabled=${isDummy}
                              aria-label="${this._t("delete")}"
                              title="${this._t("delete")}"
                              @click=${() => this._removeTime(idx)}>
                        <ha-icon icon="mdi:close"></ha-icon>
                      </button>
                    </div>
                  `)}
                </div>
              `}
            </div>

            <div class="day-switcher" role="group" aria-label="${this._t("days").join("/")}">
              ${WEEKDAYS.map((code, i) => {
                const isActive = weekdays.includes(code);
                return html`
                  <button type="button"
                          class="day-pill ${isActive ? 'selected' : ''}"
                          aria-pressed="${isActive}"
                          ?disabled=${isDummy}
                          @click=${() => this._toggleWeekday(code)}>
                    ${this._t("daysShort")[i]}
                  </button>
                `;
              })}
            </div>
            <div class="days-help">${this._tm("daysHelp")}</div>
          `}
        </div>

        ${this._toast ? html`
          <div class="toast" role="status" aria-live="polite">${this._toast.message}</div>
        ` : ''}

        ${this._confirm ? html`
          <div class="confirm-overlay" @click=${this._closeConfirm}>
            <div class="confirm-card" role="alertdialog" aria-modal="true" @click=${(e) => e.stopPropagation()}>
              <div class="confirm-title">${this._t("confirmDeleteTitle")}</div>
              <div class="confirm-body">${this._confirm.message}</div>
              <div class="confirm-actions">
                <button type="button" class="ghost-btn" @click=${this._closeConfirm}>${this._t("cancel")}</button>
                <button type="button" class="danger-btn" @click=${this._confirm.onConfirm}>${this._t("delete")}</button>
              </div>
            </div>
          </div>
        ` : ''}
      </ha-card>
    `;
  }

  static styles = css`
    :host {
      display: block;
      --custom-primary: var(--primary-color, #03a9f4);
      --custom-bg: var(--card-background-color, rgba(255, 255, 255, 0.05));
      --custom-border: var(--divider-color, rgba(255, 255, 255, 0.1));
      --custom-text: var(--primary-text-color, #ffffff);
      --custom-secondary: var(--secondary-text-color, #a0a0a0);
      --custom-danger: var(--error-color, #f44336);
    }

    ha-card {
      background: var(--custom-bg);
      border-radius: var(--ha-card-border-radius, 12px);
      border: 1px solid var(--custom-border);
      overflow: hidden;
      font-family: var(--paper-font-body1_-_font-family, system-ui, -apple-system, sans-serif);
      color: var(--custom-text);
      position: relative;
    }

    .card-header {
      padding: 12px 16px 4px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .card-header .name {
      font-size: 1.15rem;
      font-weight: 600;
      color: var(--primary-text-color, #ffffff);
    }

    .header-right ha-icon {
      color: var(--custom-primary);
      --mdc-icon-size: 20px;
    }

    .card-content {
      padding: 8px 16px 14px 16px;
      position: relative;
    }

    .empty-state {
      text-align: center;
      padding: 24px 0;
      color: var(--custom-secondary);
      font-size: 0.9rem;
    }
    .empty-state p { margin: 8px 0 0 0; }

    .target-row {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 4px 4px 10px 4px;
      color: var(--custom-secondary);
      font-size: 0.85rem;
    }
    .target-row ha-icon { --mdc-icon-size: 16px; opacity: 0.7; }
    .target-name { color: var(--custom-text); font-weight: 500; }

    /* ── 시각 리스트 ── */
    .times-section {
      background: var(--secondary-background-color, rgba(127,127,127,0.06));
      border-radius: 10px;
      padding: 10px 12px;
      margin-bottom: 10px;
    }

    .section-label {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.85rem;
      color: var(--custom-secondary);
      margin-bottom: 8px;
    }

    .add-btn {
      appearance: none;
      -webkit-appearance: none;
      font: inherit;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 4px 10px;
      background: var(--custom-primary);
      color: var(--text-primary-color, #fff);
      border: none;
      border-radius: 999px;
      font-size: 0.8rem;
      font-weight: 600;
      cursor: pointer;
    }
    .add-btn ha-icon { --mdc-icon-size: 16px; }
    .add-btn:disabled { opacity: 0.5; cursor: not-allowed; }

    .empty-times {
      text-align: center;
      padding: 14px 8px;
      color: var(--custom-secondary);
      font-size: 0.85rem;
      opacity: 0.75;
    }

    .time-list {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .time-row {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 4px 0;
    }

    .time-input {
      flex: 1;
      font: inherit;
      font-size: 1.15rem;
      font-variant-numeric: tabular-nums;
      padding: 8px 12px;
      border-radius: 8px;
      border: 1px solid var(--divider-color, rgba(127,127,127,0.25));
      background: var(--card-background-color, rgba(255,255,255,0.04));
      color: var(--custom-text);
      outline: none;
    }
    .time-input:focus { border-color: var(--custom-primary); }
    .time-input:disabled { opacity: 0.6; cursor: not-allowed; }

    .remove-btn {
      appearance: none;
      -webkit-appearance: none;
      font: inherit;
      width: 32px;
      height: 32px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: 50%;
      background: transparent;
      color: var(--custom-secondary);
      cursor: pointer;
    }
    .remove-btn ha-icon { --mdc-icon-size: 18px; }
    .remove-btn:hover { background: rgba(127,127,127,0.12); color: var(--custom-danger); }
    .remove-btn:disabled { opacity: 0.4; cursor: not-allowed; }

    /* ── 요일 스위처 ── */
    .day-switcher {
      display: flex;
      justify-content: space-around;
      gap: 4px;
      margin-bottom: 4px;
      padding: 0 4px;
    }

    .day-pill {
      appearance: none;
      -webkit-appearance: none;
      font: inherit;
      flex: 1;
      text-align: center;
      padding: 6px 0;
      font-size: 0.85rem;
      color: var(--custom-secondary);
      background: transparent;
      cursor: pointer;
      border-radius: 999px;
      border: 1px solid transparent;
      outline: none;
      -webkit-tap-highlight-color: transparent;
      transition: background 0.15s ease, color 0.15s ease;
    }

    @media (hover: hover) {
      .day-pill:hover:not(:disabled):not(.selected) {
        background: rgba(127,127,127,0.10);
      }
    }

    .day-pill.selected {
      color: var(--text-primary-color, #fff);
      background: var(--custom-primary);
      font-weight: 600;
    }

    .day-pill:focus-visible {
      outline: 2px solid var(--custom-primary);
      outline-offset: 2px;
    }

    .day-pill:disabled { opacity: 0.4; cursor: not-allowed; }

    .days-help {
      font-size: 0.75rem;
      color: var(--custom-secondary);
      opacity: 0.75;
      text-align: center;
      padding: 0 8px;
    }

    /* dummy badge */
    .is-dummy { opacity: 0.95; }
    .dummy-badge {
      position: absolute;
      top: 8px;
      right: 8px;
      background: rgba(0,0,0,0.55);
      color: #fff;
      font-size: 0.7rem;
      padding: 2px 8px;
      border-radius: 999px;
      z-index: 10;
    }

    /* toast */
    .toast {
      position: absolute;
      left: 50%;
      bottom: 16px;
      transform: translateX(-50%);
      background: rgba(20, 20, 20, 0.92);
      color: #fff;
      font-size: 0.85rem;
      padding: 10px 16px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      z-index: 2000;
      max-width: calc(100% - 32px);
    }

    /* confirm dialog */
    .confirm-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1500;
    }
    .confirm-card {
      background: var(--card-background-color, #2b2b2b);
      color: var(--custom-text);
      border-radius: 12px;
      border: 1px solid var(--custom-border);
      padding: 18px 20px;
      width: min(90%, 320px);
      box-shadow: 0 8px 24px rgba(0,0,0,0.4);
    }
    .confirm-title { font-size: 1rem; font-weight: 600; margin-bottom: 8px; }
    .confirm-body { font-size: 0.9rem; color: var(--custom-secondary); line-height: 1.5; margin-bottom: 16px; }
    .confirm-actions { display: flex; gap: 8px; justify-content: flex-end; }
    .danger-btn {
      padding: 8px 16px;
      background: var(--custom-danger);
      color: #fff;
      border: none;
      border-radius: 8px;
      font-size: 0.9rem;
      font-weight: 500;
      cursor: pointer;
    }
    .ghost-btn {
      background: transparent;
      color: var(--custom-secondary);
      border: 1px solid var(--custom-border);
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
      font-size: 0.9rem;
      font-weight: 500;
    }

    .error {
      color: var(--custom-danger);
      padding: 16px;
      text-align: center;
    }
  `;

  static getConfigElement() {
    return document.createElement("ha-custom-turn-on-card-editor");
  }

  static getStubConfig() {
    return {};
  }

  getCardSize() {
    return this._config?.automation ? 4 : 5;
  }

  getGridOptions() {
    return { columns: 12, min_rows: 3 };
  }
}

// Turn-off variant: shares the entire class above. The only difference is
// the default action mode (used when the user-supplied config omits
// `action_mode`) and the stub the picker drops in for fresh inserts.
class HaCustomTurnOffCard extends HaCustomTurnOnCard {
  static defaultActionMode = "turn_off";
  static getStubConfig() {
    return { action_mode: "turn_off" };
  }
}

customElements.define("ha-custom-turn-on-card", HaCustomTurnOnCard);
customElements.define("ha-custom-turn-off-card", HaCustomTurnOffCard);

window.customCards = window.customCards || [];
const _lang = detectLang();
window.customCards.push({
  type: "ha-custom-turn-on-card",
  name: TURN_ON_LOCALES[_lang].cardNameTurnOn,
  preview: true,
  description: TURN_ON_LOCALES[_lang].cardDescriptionTurnOn,
  documentationURL: "https://github.com/jewon-oh/ha-schedule-timer-cards",
});
window.customCards.push({
  type: "ha-custom-turn-off-card",
  name: TURN_ON_LOCALES[_lang].cardNameTurnOff,
  preview: true,
  description: TURN_ON_LOCALES[_lang].cardDescriptionTurnOff,
  documentationURL: "https://github.com/jewon-oh/ha-schedule-timer-cards",
});

// Export the constants if other modules want them (e.g., editor for tag matching).
export { AUTOMATION_TAG, TAG_BY_MODE, SERVICE_BY_MODE };
