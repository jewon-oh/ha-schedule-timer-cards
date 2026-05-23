// @ts-nocheck
import { LitElement, html, css } from "lit";
import { TIMER_LOCALES } from "../locales/index.js";

class HaCustomTimerCardEditor extends LitElement {
  static properties = {
    hass: {},
    _config: { state: true },
    _selectedEntity: { state: true },
    _selectedAction: { state: true },
    _isLoading: { state: true },
    _creationError: { state: true }
  };

  setConfig(config) {
    this._config = config;
    this._selectedAction = config.action_type || "turn_off";
  }

  get _lang() {
    return this.hass?.language && this.hass.language.includes('ko') ? 'ko' : 'en';
  }

  _t(key) {
    return TIMER_LOCALES[this._lang]?.[key] ?? TIMER_LOCALES.en[key];
  }

  // 1. Target Entity 선택 시 Timer 헬퍼 및 브릿지 자동 생성
  async _onTargetEntityPicked(ev) {
    const targetEntityId = ev.detail.value;
    if (!targetEntityId || targetEntityId === this._selectedEntity) return;
    
    this._selectedEntity = targetEntityId;
    this._isLoading = true;
    this._creationError = null;
    
    try {
      const entityState = this.hass.states[targetEntityId];
      const entityName = entityState?.attributes?.friendly_name || targetEntityId;
      
      let timerId = null;
      let timerEntityId = null;

      // Step A: Timer 헬퍼 생성 (Schedule처럼 내부 WS API 활용)
      try {
        const payload = {
          type: "timer/create",
          name: `${entityName}${this._t("timerSuffix")}`,
          icon: "mdi:timer-sand"
        };
        const timerResult = await this.hass.callWS(payload);
        timerId = timerResult.id;
        timerEntityId = `timer.${timerId}`;
        console.log("[schedule-ui] timer helper create SUCCESS:", timerEntityId);
      } catch (e) {
        console.warn("Timer helper auto-creation failed via config/timer/create. Error:", e);
        this._creationError = this._t("helperFailMsg");
        this._isLoading = false;
        return;
      }

      // Step B: 블루프린트 참조 방식으로 자동화 브릿지 생성
      const actionType = this._selectedAction || "turn_off";
      const bridgeId = `timer_bridge_${timerId}`;
      const alias = `${this._t("timerBridgeAliasPrefix")}${entityName}`;
      
      console.log("[schedule-ui] Creating timer bridge (blueprint):", bridgeId, "for target:", targetEntityId);

      // 기존 동일 ID 브릿지 중복 제거
      try {
        const automations = await this.hass.callWS({ type: "config/entity_registry/list" });
        const existing = automations.find(a => a.entity_id === `automation.${bridgeId}`);
        if (existing) {
          await this.hass.callWS({ type: "config/entity_registry/remove", entity_id: existing.entity_id });
        }
      } catch(e) {}

      // 블루프린트 참조 형식 — HA '사용중' 카운트에 반영됨
      const bridgePayload = {
        alias: alias,
        description: this._t("bridgeDescription"),
        use_blueprint: {
          path: "jewon-oh/timer-bridge-blueprint.yaml",
          input: {
            timer_helper: timerEntityId,
            target_device: targetEntityId,
            action_type: actionType
          }
        }
      };

      await this.hass.callApi("POST", `config/automation/config/${bridgeId}`, bridgePayload);
      console.log("[schedule-ui] timer automation bridge (blueprint) create SUCCESS:", bridgeId);

      // 설정 임시 업데이트
      this._config = {
        ...this._config,
        entity: timerEntityId,
        title: `${entityName}${this._t("timerSuffix")}`
      };

      // 설정 이벤트 발송 (HA UI에 저장 트리거)
      this.dispatchEvent(new CustomEvent("config-changed", {
        detail: { config: this._config },
        bubbles: true,
        composed: true
      }));
      
    } catch (e) {
      console.error(e);
      this._creationError = `${this._t("errorPrefix")}${e.message}`;
    } finally {
      this._isLoading = false;
    }
  }

  // _createAutomationBridge: 블루프린트 참조 방식으로 _onTargetEntityPicked에 통합 (삭제됨)

  _onActionChange(ev) {
    this._selectedAction = ev.target.value;
  }

  render() {
    if (!this.hass || !this._config) return html``;

    return html`
      <div class="card-config">
        <div class="wizard-header">
          <ha-icon icon="mdi:magic-staff"></ha-icon>
          <div>
            <h3>${this._t("editorWizardTitle")}</h3>
            <p>${this._t("editorWizardDesc")}</p>
          </div>
        </div>

        <div class="wizard-fields">
          <!-- 타겟 기기 픽커 -->
          <div class="wizard-field">
            <label>${this._t("editorTargetDevice")}</label>
            <ha-selector
              .hass=${this.hass}
              .selector=${{ entity: { domain: ["light", "switch", "fan", "climate", "media_player"] } }}
              .value=${this._selectedEntity}
              @value-changed=${this._onTargetEntityPicked}
            ></ha-selector>
          </div>
          
          <!-- 동작 방식 픽커 -->
          <div class="wizard-field">
            <label>${this._t("editorActionType")}</label>
            <select class="custom-select" .value="${this._selectedAction}" @change="${this._onActionChange}">
              <option value="turn_off">${this._t("editorActionOff")}</option>
              <option value="turn_on">${this._t("editorActionOn")}</option>
              <option value="toggle">${this._t("editorActionToggle")}</option>
            </select>
          </div>
        </div>

        ${this._isLoading ? html`
          <div class="status-msg info">
            <ha-icon icon="mdi:loading" class="spin"></ha-icon>
            ${this._t("syncingMessage")}
          </div>
        ` : ""}

        ${this._creationError ? html`
          <div class="status-msg error">
            <ha-icon icon="mdi:alert-circle"></ha-icon>
            ${this._creationError}
          </div>
        ` : ""}

        <!-- 수동 모드 지원 -->
        <hr class="divider" />
        
        <div class="wizard-field">
          <label>${this._t("editorEntity")}${this._t("generatedTimerLabel")}</label>
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._config.entity}
            domain="timer"
            .configValue=${"entity"}
            @value-changed=${(e) => {
              this._config = { ...this._config, entity: e.detail.value };
              this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: this._config }, bubbles: true, composed: true }));
            }}
          ></ha-entity-picker>
        </div>
      </div>
    `;
  }

  static styles = css`
    .card-config {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .wizard-header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 16px;
      background: rgba(3, 169, 244, 0.1);
      border: 1px solid rgba(3, 169, 244, 0.2);
      border-radius: 8px;
    }
    .wizard-header ha-icon {
      color: #03a9f4;
      --mdc-icon-size: 32px;
    }
    .wizard-header h3 {
      margin: 0 0 4px 0;
      color: var(--primary-text-color);
      font-size: 1rem;
    }
    .wizard-header p {
      margin: 0;
      color: var(--secondary-text-color);
      font-size: 0.85rem;
      line-height: 1.4;
    }
    .wizard-fields {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-bottom: 20px;
    }
    .wizard-field {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    .wizard-field label {
      font-size: 0.85rem;
      color: var(--secondary-text-color);
      font-weight: 500;
    }
    .custom-select {
      width: 100%;
      height: 48px;
      background: var(--card-background-color, transparent);
      border: 1px solid var(--divider-color, rgba(128, 128, 128, 0.3));
      border-radius: 4px;
      color: var(--primary-text-color);
      padding: 0 12px;
      font-size: 1rem;
      outline: none;
    }
    .divider {
      border: 0;
      height: 1px;
      background: var(--divider-color, rgba(128, 128, 128, 0.3));
      margin: 8px 0;
    }
    .status-msg {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px;
      border-radius: 8px;
      font-size: 0.9rem;
    }
    .status-msg.info {
      background: rgba(3, 169, 244, 0.1);
      color: #03a9f4;
    }
    .status-msg.error {
      background: rgba(244, 67, 54, 0.1);
      color: #f44336;
    }
    .spin {
      animation: spin 1s linear infinite;
    }
    @keyframes spin {
      100% { transform: rotate(360deg); }
    }
  `;
}

customElements.define("ha-custom-timer-card-editor", HaCustomTimerCardEditor);
