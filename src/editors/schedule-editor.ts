// @ts-nocheck
import { LitElement, html, css } from "lit";
import { LOCALES } from "../locales/index.js";
import { deviceBridgeId, isUnified, readSlices, buildUnified, emptySlices } from "../shared/bridge.js";

class HaCustomScheduleCardEditor extends LitElement {
  static properties = {
    hass: {},
    _config: {},
    _isCreating: { type: Boolean },
    _createResult: { type: Object },
  };

  setConfig(config) {
    this._config = config;
  }

  configChanged(newConfig) {
    const event = new Event("config-changed", { bubbles: true, composed: true });
    event.detail = { config: newConfig };
    this.dispatchEvent(event);
  }

  async _onAutoCreateDevicePicker(ev) {
    const targetEntityId = ev.detail.value;
    if (this._isCreating || !this.hass || !targetEntityId) return;

    // 기기 이름 기반으로 스케쥴 이름 자동 생성
    const entityObj = this.hass.states[targetEntityId];
    const friendlyName = entityObj?.attributes?.friendly_name || targetEntityId.split('.')[1] || this._t("unknownDevice");
    const routineName = `${friendlyName}${this._t("routineSuffix")}`;

    this._isCreating = true;
    this._createResult = null;
    this.requestUpdate();

    try {
      console.log("[ha-schedule-timer-cards] Editor Auto createRoutine - name:", routineName, "target:", targetEntityId);
      
      const schedulePayload = {
        type: "schedule/create",
        name: routineName,
        icon: "mdi:calendar-clock",
      };


      const scheduleResult = await this.hass.callWS(schedulePayload);
      console.log("[ha-schedule-timer-cards] schedule/create SUCCESS:", scheduleResult);

      const scheduleId = scheduleResult.id;
      const scheduleEntityId = `schedule.${scheduleId}`;

      // Upsert the ONE shared per-device unified bridge: add/refresh the
      // schedule slice (helper-state on/off + HA-start re-sync) while
      // preserving any turn-on/turn-off slices a sibling card added.
      const automationId = deviceBridgeId(targetEntityId);
      let existing = null;
      try {
        existing = await this.hass.callApi("GET", `config/automation/config/${automationId}`);
      } catch (e) { /* not created yet */ }

      const slices = existing && isUnified(existing)
        ? readSlices(existing)
        : emptySlices({ target: targetEntityId, friendly: friendlyName, alias: routineName });
      slices.schedule = { entity: scheduleEntityId };
      if (!slices.target) slices.target = targetEntityId;
      if (!slices.friendly) slices.friendly = friendlyName;

      const automationPayload = buildUnified(slices, existing && isUnified(existing) ? existing : undefined);
      await this.hass.callApi("POST", `config/automation/config/${automationId}`, automationPayload);
      console.log("[ha-schedule-timer-cards] unified bridge upserted:", automationId);

      // Remove any superseded legacy blueprint bridge for this same device so
      // it can't double-drive the device alongside the unified bridge. Only
      // ever touches OUR auto-generated blueprint automations (matched by
      // blueprint path + target_device), never user-authored automations.
      await this._removeLegacyBlueprintBridge(targetEntityId, automationId);

      this._createResult = { success: true, entityId: scheduleEntityId };

      // 자동 생성 완료 시 곧바로 config의 entity 속성을 교체
      this.configChanged({ ...this._config, entity: scheduleEntityId });

    } catch (e) {
      console.error("[ha-schedule-timer-cards] createRoutine FAILED:", e);
      this._createResult = { success: false, message: e.message || JSON.stringify(e) };
    } finally {
      this._isCreating = false;
      this.requestUpdate();
    }
  }

  // Find and delete any auto-generated schedule-bridge-blueprint automation
  // that targets this same device (other than the unified bridge we just
  // wrote). Without this, the old blueprint and the new unified bridge would
  // BOTH react to a schedule's on/off and double-drive the device. Strictly
  // scoped: only automations whose use_blueprint.path is our blueprint AND
  // whose target_device matches — never user automations.
  async _removeLegacyBlueprintBridge(targetEntityId, keepId) {
    try {
      const autos = Object.values(this.hass.states || {})
        .filter((s) => typeof s.entity_id === "string" && s.entity_id.startsWith("automation."));
      for (const st of autos) {
        const cid = st.attributes?.id;
        if (!cid || cid === keepId) continue;
        let cfg;
        try {
          cfg = await this.hass.callApi("GET", `config/automation/config/${cid}`);
        } catch (e) { continue; }
        const bp = cfg?.use_blueprint;
        const isOurBlueprint = bp && typeof bp.path === "string" && bp.path.includes("schedule-bridge-blueprint");
        if (!isOurBlueprint) continue;
        // The schedule blueprint targets exactly ONE device; only delete on an
        // exact single-device match — never when target_device is a multi list
        // (deleting that would lose control of the other devices).
        const tgt = bp?.input?.target_device;
        if (typeof tgt !== "string" || tgt !== targetEntityId) continue;
        try {
          await this.hass.callApi("DELETE", `config/automation/config/${cid}`);
          console.log("[ha-schedule-timer-cards] removed superseded blueprint bridge:", cid);
        } catch (e) {
          console.warn("[ha-schedule-timer-cards] could not remove legacy bridge", cid, e);
        }
      }
    } catch (e) {
      console.warn("[ha-schedule-timer-cards] legacy bridge cleanup skipped:", e);
    }
  }

  _t(key) {
    const lang = this.hass?.language?.startsWith('ko') ? 'ko' : 'en';
    return LOCALES[lang][key] || LOCALES["en"][key];
  }

  render() {
    if (!this.hass || !this._config) {
      return html``;
    }

    // The auto-create wizard calls schedule/create + config/automation/config/...
    // both of which are admin-only HA APIs. Non-admin users get 401, so the
    // wizard is hidden for them and only the "pick existing helper" path is
    // exposed.
    const isAdmin = !!this.hass.user?.is_admin;

    return html`
      <div class="card-config">

        ${isAdmin ? html`
          <div class="wizard-section">
            <div style="font-weight: 600; color: var(--primary-color); display: flex; align-items: center; gap: 8px;">
              <ha-icon icon="mdi:magic-staff"></ha-icon>
              <span>${this._t("editorWizardTitle")}</span>
            </div>
            <p style="font-size: 0.85rem; color: var(--secondary-text-color); margin: 8px 0 16px 0; line-height: 1.4;">
              ${this._t("editorWizardDesc")}
            </p>

            ${this._isCreating ? html`
              <div style="text-align: center; padding: 20px; color: var(--primary-color);">
                <ha-icon icon="mdi:loading" class="spin"></ha-icon>
                <span style="margin-left: 8px;">${this._t("creating")}</span>
              </div>
            ` : html`
              <ha-selector
                .hass=${this.hass}
                .selector=${{ entity: { domain: ["switch", "light", "fan", "climate", "cover"] } }}
                .value=${""}
                .required=${false}
                .label=${this._t("editorTargetDevice")}
                @value-changed=${this._onAutoCreateDevicePicker}
              ></ha-selector>
            `}

            ${this._createResult?.success ? html`
              <div style="margin-top: 12px; color: var(--success-color, #4caf50); font-size: 0.9rem; display: flex; align-items: center; gap: 6px;">
                <ha-icon icon="mdi:check-circle" style="--mdc-icon-size: 18px;"></ha-icon>
                <span>${this._createResult.entityId} ${this._t("editorCreateSuccess")}</span>
              </div>
            ` : ''}
            ${this._createResult && !this._createResult.success ? html`
              <div style="margin-top: 12px; color: var(--error-color, #f44336); font-size: 0.9rem;">
                ${this._t("editorErrorPrefix")}${this._createResult.message}
              </div>
            ` : ''}
          </div>

          <div style="height: 1px; background: var(--divider-color, rgba(100,100,100,0.2)); margin: 24px 0;"></div>
        ` : html`
          <div style="padding: 12px 14px; background: rgba(255, 152, 0, 0.08); border: 1px solid rgba(255, 152, 0, 0.25); border-radius: 8px; font-size: 0.85rem; color: var(--secondary-text-color); margin-bottom: 16px; display: flex; gap: 10px; align-items: flex-start;">
            <ha-icon icon="mdi:shield-account" style="--mdc-icon-size: 18px; color: #ff9800; flex-shrink: 0;"></ha-icon>
            <span>${this._t("adminOnlyWizard")}</span>
          </div>
        `}

        <div style="font-weight: 600; margin-bottom: 16px; color: var(--primary-text-color);">
          ${this._t("editorAdvanced")}
        </div>

        <ha-selector
          .hass=${this.hass}
          .selector=${{ entity: { domain: "schedule" } }}
          .value=${this._config.entity || ""}
          .required=${false}
          .label=${this._t("editorScheduleEntity")}
          @value-changed=${this._entityChanged}
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

  _entityChanged(ev) {
    if (!this._config || !this.hass) return;
    const value = ev.detail.value;
    if (this._config.entity === value) return;
    
    this.configChanged({
      ...this._config,
      entity: value,
    });
  }

  _titleChanged(ev) {
    if (!this._config || !this.hass) return;
    const value = ev.target.value;
    if (this._config.title === value) return;
    
    if (value === "") {
      const tmpConfig = { ...this._config };
      delete tmpConfig.title;
      this.configChanged(tmpConfig);
    } else {
      this.configChanged({
        ...this._config,
        title: value,
      });
    }
  }

  static styles = css`
    .card-config {
      display: flex;
      flex-direction: column;
    }
    .wizard-section {
      background: var(--secondary-background-color, rgba(0,0,0,0.05));
      padding: 16px;
      border-radius: 8px;
    }
    .spin {
      animation: spin 1.5s linear infinite;
    }
    @keyframes spin {
      100% { transform: rotate(360deg); }
    }
  `;
}

customElements.define("ha-custom-schedule-card-editor", HaCustomScheduleCardEditor);
