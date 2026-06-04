// @ts-nocheck
import { LitElement, html, css } from "lit";
import { TURN_ON_LOCALES } from "../locales/index.js";
import { deviceBridgeId, isUnified, readSlices, buildUnified, emptySlices } from "../shared/bridge.js";

class HaCustomTurnOnCardEditor extends LitElement {
  static properties = {
    hass: {},
    _config: {},
    _isCreating: { type: Boolean },
    _createResult: { type: Object },
    // Resolved entity_id to feed into the automation picker. The card config
    // may legally hold either an entity_id ("automation.foo") or a config_id
    // ("turn_on_foo_xyz" from older wizards). The picker only understands
    // entity_ids — so we resolve any config_id by walking the entity registry
    // and cache the result here.
    _displayValue: { state: true },
  };

  setConfig(config) {
    this._config = config;
  }

  updated(changedProps) {
    if (changedProps.has("_config") || changedProps.has("hass")) {
      this._refreshDisplayValue();
    }
  }

  _t(key) {
    const lang = this.hass?.language?.startsWith("ko") ? "ko" : "en";
    return TURN_ON_LOCALES[lang]?.[key] ?? TURN_ON_LOCALES.en[key];
  }

  // Mode-suffixed locale lookup. Mirrors `_tm` in turn-on-card.ts. Mode-
  // agnostic strings (dialog text, weekday labels) stay on plain `_t`.
  _tm(base) {
    const mode = this._actionMode;
    const suffix = mode === "turn_off" ? "TurnOff" : "TurnOn";
    return this._t(`${base}${suffix}`);
  }

  // Editor inherits the action_mode from the card config. New configs
  // ship via getStubConfig (turn-off card sets it explicitly; turn-on
  // card omits and we default to turn_on for backward compat).
  get _actionMode() {
    const v = this._config?.action_mode;
    return v === "turn_off" ? "turn_off" : "turn_on";
  }

  configChanged(newConfig) {
    const event = new Event("config-changed", { bubbles: true, composed: true });
    event.detail = { config: newConfig };
    this.dispatchEvent(event);
  }

  // The wizard upserts the ONE shared per-device bridge automation
  // (sui_bridge_<device>). If a sibling card (turn-off, or the schedule card)
  // already created it, we reuse it and only ensure our (empty) slice + the
  // target are present; otherwise we create a fresh unified skeleton. Times
  // are edited in the card itself.
  async _onWizardDevicePicker(ev) {
    const targetEntityId = ev.detail.value;
    if (this._isCreating || !this.hass || !targetEntityId) return;

    const mode = this._actionMode;
    const entityObj = this.hass.states[targetEntityId];
    const friendly = entityObj?.attributes?.friendly_name || targetEntityId.split('.')[1] || this._t("unknownDevice");
    const alias = `${friendly}${this._tm("routineSuffix")}`;
    const automationId = deviceBridgeId(targetEntityId);

    this._isCreating = true;
    this._createResult = null;
    this.requestUpdate();

    try {
      // Reuse an existing unified bridge for this device if present, else
      // build a fresh skeleton. Either way buildUnified is the single writer.
      let existing = null;
      try {
        existing = await this.hass.callApi("GET", `config/automation/config/${automationId}`);
      } catch (e) { /* not created yet — fall through to skeleton */ }

      let payload;
      if (existing && isUnified(existing)) {
        const slices = readSlices(existing);
        if (!slices.target) slices.target = targetEntityId;
        if (!slices.friendly) slices.friendly = friendly;
        payload = buildUnified(slices, existing);
      } else {
        payload = buildUnified(emptySlices({ target: targetEntityId, friendly, alias }));
      }
      await this.hass.callApi("POST", `config/automation/config/${automationId}`, payload);
      // HA assigns an entity_id from the alias slug, not from our config_id —
      // the picker UI only recognizes entity_ids, so store that. The card's
      // load path resolves entity_id → unique_id at API call time, mirroring
      // schedule-card.ts. If the registry hasn't caught up yet (rare),
      // gracefully fall back to the config_id; the card supports both.
      const entityId = await this._resolveEntityIdByUniqueId(automationId);
      const stored = entityId || automationId;
      this._createResult = { success: true, automationId, entityId };
      // Persist the resolved entity_id AND keep the (possibly default)
      // action_mode in the config so reopening the editor stays in the
      // same mode.
      this.configChanged({ ...this._config, action_mode: mode, automation: stored });
    } catch (e) {
      console.error("[turn-on] wizard failed:", e);
      this._createResult = { success: false, message: e?.message || JSON.stringify(e) };
    } finally {
      this._isCreating = false;
      this.requestUpdate();
    }
  }

  _onModeChanged(ev) {
    const next = ev.detail.value === "turn_off" ? "turn_off" : "turn_on";
    if (next === this._actionMode) return;
    this.configChanged({ ...this._config, action_mode: next });
  }

  render() {
    if (!this.hass || !this._config) return html``;

    // POST to config/automation/config/<id> is admin-only. Hide the wizard for
    // non-admins; they can still point the card at an existing automation.
    const isAdmin = !!this.hass.user?.is_admin;
    const mode = this._actionMode;

    return html`
      <div class="card-config">

        <div class="mode-row">
          <ha-selector
            .hass=${this.hass}
            .selector=${{
              select: {
                mode: "dropdown",
                options: [
                  { value: "turn_on", label: this._t("modeTurnOn") },
                  { value: "turn_off", label: this._t("modeTurnOff") },
                ],
              },
            }}
            .value=${mode}
            .required=${true}
            .label=${this._t("editorModeLabel")}
            @value-changed=${this._onModeChanged}
          ></ha-selector>
        </div>

        ${isAdmin ? html`
          <div class="wizard-section">
            <div class="wizard-title">
              <ha-icon icon="mdi:magic-staff"></ha-icon>
              <span>${this._tm("editorWizardTitle")}</span>
            </div>
            <p class="wizard-desc">${this._tm("editorWizardDesc")}</p>

            ${this._isCreating ? html`
              <div class="creating">
                <ha-icon icon="mdi:loading" class="spin"></ha-icon>
                <span>${this._t("creating")}</span>
              </div>
            ` : html`
              <ha-selector
                .hass=${this.hass}
                .selector=${{ entity: { domain: ["switch", "light", "fan", "climate", "cover", "media_player", "input_boolean"] } }}
                .value=${""}
                .required=${false}
                .label=${this._tm("editorTargetDevice")}
                @value-changed=${this._onWizardDevicePicker}
              ></ha-selector>
            `}

            ${this._createResult?.success ? html`
              <div class="success-msg">
                <ha-icon icon="mdi:check-circle"></ha-icon>
                <span>${this._createResult.automationId} — ${this._t("editorCreateSuccess")}</span>
              </div>
            ` : ''}
            ${this._createResult && !this._createResult.success ? html`
              <div class="error-msg">${this._t("editorErrorPrefix")}${this._createResult.message}</div>
            ` : ''}
          </div>

          <div class="divider"></div>
        ` : html`
          <div class="non-admin">
            <ha-icon icon="mdi:shield-account"></ha-icon>
            <span>${this._tm("adminOnlyWizard")}</span>
          </div>
        `}

        <div class="section-title">${this._t("editorAdvanced")}</div>

        <ha-selector
          .hass=${this.hass}
          .selector=${{ entity: { domain: "automation" } }}
          .value=${this._displayValue || ""}
          .required=${false}
          .label=${this._t("editorAutomationEntity")}
          @value-changed=${this._automationChanged}
        ></ha-selector>

        <br/>

        <ha-textfield
          label="${this._t("editorCardTitle")}"
          .value=${this._config.title || ""}
          @input=${this._titleChanged}
          style="width: 100%;"
        ></ha-textfield>
      </div>
    `;
  }

  // Resolve _config.automation (entity_id OR legacy config_id) to the
  // current entity_id for the picker. Called from updated() whenever the
  // inputs change. Resets _displayValue and triggers a re-render with the
  // correct value once we have one.
  async _refreshDisplayValue() {
    const v = this._config?.automation;
    if (!v || !this.hass) {
      if (this._displayValue !== "") this._displayValue = "";
      return;
    }
    if (typeof v === "string" && v.startsWith("automation.")) {
      if (this._displayValue !== v) this._displayValue = v;
      return;
    }
    // Legacy / wizard-fallback config_id form — look up the entity that
    // currently owns this unique_id.
    const eid = await this._resolveEntityIdByUniqueId(v, 1);
    const next = eid || "";
    if (this._displayValue !== next) this._displayValue = next;
  }

  // HA does NOT expose a direct unique_id → entity_id lookup, so we list
  // the registry and scan. Retries briefly because a freshly-POSTed
  // automation may not be in the registry yet.
  async _resolveEntityIdByUniqueId(uniqueId, retries = 5) {
    if (!this.hass || !uniqueId) return null;
    for (let i = 0; i < retries; i++) {
      try {
        const entries = await this.hass.callWS({ type: "config/entity_registry/list" });
        const match = entries.find(e => e.unique_id === uniqueId && e.platform === "automation");
        if (match?.entity_id) return match.entity_id;
      } catch (e) { /* ignore — likely transient */ }
      if (i < retries - 1) await new Promise(r => setTimeout(r, 300));
    }
    return null;
  }

  _automationChanged(ev) {
    if (!this._config || !this.hass) return;
    // Store the picker's entity_id directly. The card resolves to unique_id
    // on load via config/entity_registry/get (same pattern as schedule-card.ts).
    const value = ev.detail.value || "";
    if (this._config.automation === value) return;
    if (value === "") {
      const tmp = { ...this._config };
      delete tmp.automation;
      this.configChanged(tmp);
    } else {
      this.configChanged({ ...this._config, automation: value });
    }
  }

  _titleChanged(ev) {
    if (!this._config || !this.hass) return;
    const value = ev.target.value;
    if (this._config.title === value) return;
    if (value === "") {
      const tmp = { ...this._config };
      delete tmp.title;
      this.configChanged(tmp);
    } else {
      this.configChanged({ ...this._config, title: value });
    }
  }

  static styles = css`
    .card-config { display: flex; flex-direction: column; }
    .mode-row { margin-bottom: 16px; }
    .wizard-section {
      background: var(--secondary-background-color, rgba(0,0,0,0.05));
      padding: 16px;
      border-radius: 8px;
    }
    .wizard-title {
      font-weight: 600;
      color: var(--primary-color);
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .wizard-desc {
      font-size: 0.85rem;
      color: var(--secondary-text-color);
      margin: 8px 0 16px 0;
      line-height: 1.4;
    }
    .creating {
      text-align: center;
      padding: 20px;
      color: var(--primary-color);
    }
    .creating ha-icon { margin-right: 8px; }
    .spin { animation: spin 1.5s linear infinite; }
    @keyframes spin { 100% { transform: rotate(360deg); } }
    .success-msg {
      margin-top: 12px;
      color: var(--success-color, #4caf50);
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .success-msg ha-icon { --mdc-icon-size: 18px; }
    .error-msg {
      margin-top: 12px;
      color: var(--error-color, #f44336);
      font-size: 0.9rem;
    }
    .divider {
      height: 1px;
      background: var(--divider-color, rgba(100,100,100,0.2));
      margin: 24px 0;
    }
    .non-admin {
      padding: 12px 14px;
      background: rgba(255, 152, 0, 0.08);
      border: 1px solid rgba(255, 152, 0, 0.25);
      border-radius: 8px;
      font-size: 0.85rem;
      color: var(--secondary-text-color);
      margin-bottom: 16px;
      display: flex;
      gap: 10px;
      align-items: flex-start;
    }
    .non-admin ha-icon { --mdc-icon-size: 18px; color: #ff9800; flex-shrink: 0; }
    .section-title {
      font-weight: 600;
      margin-bottom: 16px;
      color: var(--primary-text-color);
    }
  `;
}

customElements.define("ha-custom-turn-on-card-editor", HaCustomTurnOnCardEditor);
