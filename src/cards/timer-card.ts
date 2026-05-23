// @ts-nocheck
import { LitElement, html, css } from "lit";
import { TIMER_LOCALES, detectLang } from "../locales/index.js";

class HaCustomTimerCard extends LitElement {
  static properties = {
    hass: { type: Object },
    _config: { state: true },
    _now: { state: true },
    _inputHours: { state: true },
    _inputMinutes: { state: true },
    _inputSeconds: { state: true }
  };

  constructor() {
    super();
    this._now = Date.now();
    this._inputHours = 0;
    this._inputMinutes = 30;
    this._inputSeconds = 0;
  }

  connectedCallback() {
    super.connectedCallback();
    this._timerInterval = setInterval(() => {
      this._now = Date.now();
    }, 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._timerInterval) {
      clearInterval(this._timerInterval);
    }
  }

  static getConfigElement() {
    return document.createElement("ha-custom-timer-card-editor");
  }

  static getStubConfig() {
    return {
      type: "custom:ha-custom-timer-card"
    };
  }

  setConfig(config) {
    if (!config) throw new Error("Invalid configuration");
    this._config = config;
  }

  get _lang() {
    return this.hass?.language && this.hass.language.includes('ko') ? 'ko' : 'en';
  }

  _t(key) {
    return TIMER_LOCALES[this._lang]?.[key] ?? TIMER_LOCALES.en[key];
  }

  // Parses "HH:MM:SS" into total seconds
  _parseDurationToSeconds(durationStr) {
    if (!durationStr) return 0;
    // Format could be "0:30:00" or "00:30:00"
    const parts = durationStr.split(':').map(Number);
    if (parts.length === 3) {
      return (parts[0] * 3600) + (parts[1] * 60) + parts[2];
    }
    return 0;
  }

  _formatSeconds(sec) {
    if (sec <= 0) return "00:00:00";
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = Math.floor(sec % 60);
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }

  _callService(service, data = {}) {
    if (!this._config.entity) return;
    this.hass.callService("timer", service, { entity_id: this._config.entity, ...data });
  }

  _startTimerCustom() {
    const totalSec = (this._inputHours * 3600) + (this._inputMinutes * 60) + this._inputSeconds;
    if (totalSec <= 0) return;
    const durationStr = this._formatSeconds(totalSec);
    this._callService("start", { duration: durationStr });
  }

  _startTimerPreset(minutes) {
    this._callService("start", { duration: this._formatSeconds(minutes * 60) });
  }

  _addTime(minutes) {
    let totalMinutes = (this._inputHours * 60) + this._inputMinutes + minutes;
    if (totalMinutes < 0) totalMinutes = 0;

    this._inputHours = Math.floor(totalMinutes / 60);
    this._inputMinutes = totalMinutes % 60;
    
    // 최대 시간 초과 방지
    if (this._inputHours > 99) {
       this._inputHours = 99;
       this._inputMinutes = 59;
    }
    this.requestUpdate();
  }

  // 시간 값 증감 핸들러
  _adjustTime(field, delta) {
    const limits = { hours: { min: 0, max: 23 }, minutes: { min: 0, max: 59 }, seconds: { min: 0, max: 59 } };
    const fieldMap = { hours: '_inputHours', minutes: '_inputMinutes', seconds: '_inputSeconds' };
    const propName = fieldMap[field];
    const limit = limits[field];
    let val = (this[propName] || 0) + delta;
    if (val < limit.min) val = limit.max;
    if (val > limit.max) val = limit.min;
    this[propName] = val;
  }

  // 숫자 직접 입력 핸들러
  _onSpinInput(field, ev) {
    const limits = { hours: { min: 0, max: 23 }, minutes: { min: 0, max: 59 }, seconds: { min: 0, max: 59 } };
    const fieldMap = { hours: '_inputHours', minutes: '_inputMinutes', seconds: '_inputSeconds' };
    const limit = limits[field];
    let val = parseInt(ev.target.value) || 0;
    if (val < limit.min) val = limit.min;
    if (val > limit.max) val = limit.max;
    this[fieldMap[field]] = val;
  }

  render() {
    if (!this._config) return html`<ha-card><div class="error">Not configured</div></ha-card>`;

    const isDummy = !this._config.entity;
    let state = "idle";
    let remainingSec = 0;
    let totalDurationSec = 3600;
    let customTitle = this._config.title || this._t("defaultTitle");

    if (!isDummy && this.hass && this.hass.states[this._config.entity]) {
      const stateObj = this.hass.states[this._config.entity];
      state = stateObj.state;
      customTitle = this._config.title || stateObj.attributes.friendly_name || this._config.entity;
      totalDurationSec = this._parseDurationToSeconds(stateObj.attributes.duration) || 3600;

      if (state === "active" && stateObj.attributes.finishes_at) {
        let calcSec = Math.floor((new Date(stateObj.attributes.finishes_at).getTime() - this._now) / 1000);
        
        // 동적 오차 보정: 클라이언트 시간이 느려 calcSec가 기준시간을 초과하면 오차(offset)를 고정 저장
        if (this._timeOffset === undefined || this._lastTimerState !== "active") {
          this._timeOffset = Math.max(0, calcSec - totalDurationSec);
        }
        
        // 오차를 빼서 0까지 정확히 떨어지도록 맞춤
        remainingSec = Math.max(0, calcSec - (this._timeOffset || 0));
        remainingSec = Math.min(totalDurationSec, remainingSec);
      } else if (state === "paused" && stateObj.attributes.remaining) {
        remainingSec = this._parseDurationToSeconds(stateObj.attributes.remaining);
        this._timeOffset = undefined;
      } else if (state === "idle") {
        remainingSec = 0;
        this._timeOffset = undefined;
      }
      this._lastTimerState = state;
    } else if (isDummy) {
      state = "idle";
      this._inputHours = 0;
      this._inputMinutes = 30;
    }

    const progressPercent = totalDurationSec > 0
      ? Math.max(0, Math.min(100, (remainingSec / totalDurationSec) * 100))
      : 0;

    const h = Math.floor(remainingSec / 3600);
    const m = Math.floor((remainingSec % 3600) / 60);
    const s = Math.floor(remainingSec % 60);

    return html`
      <ha-card>
        <div class="card-header">
          <div class="name">${customTitle}</div>
          <div class="header-right">
            ${state !== 'idle' ? html`
              <span class="state-badge ${state}">${state === 'active' ? this._t('start') : this._t('pausedMessage')}</span>
            ` : ''}
            <ha-icon icon="${state === 'active' ? 'mdi:timer-sand' : 'mdi:timer'}"></ha-icon>
          </div>
        </div>

        <div class="card-content">
          ${state === "idle" ? html`
            <!-- 대기 상태: 숫자 증감 입력 -->
            <div class="time-spinner-row">
              <div class="time-spinner">
                <button class="spin-btn" @click="${() => this._adjustTime('hours', 1)}"><ha-icon icon="mdi:chevron-up"></ha-icon></button>
                <input class="spin-value" type="number" min="0" max="23" .value="${String(this._inputHours).padStart(2, '0')}" @change="${e => this._onSpinInput('hours', e)}" @focus="${e => e.target.select()}">
                <button class="spin-btn" @click="${() => this._adjustTime('hours', -1)}"><ha-icon icon="mdi:chevron-down"></ha-icon></button>
                <div class="spin-label">${this._t("hoursLabel")}</div>
              </div>
              <div class="spin-separator">:</div>
              <div class="time-spinner">
                <button class="spin-btn" @click="${() => this._adjustTime('minutes', 1)}"><ha-icon icon="mdi:chevron-up"></ha-icon></button>
                <input class="spin-value" type="number" min="0" max="59" .value="${String(this._inputMinutes).padStart(2, '0')}" @change="${e => this._onSpinInput('minutes', e)}" @focus="${e => e.target.select()}">
                <button class="spin-btn" @click="${() => this._adjustTime('minutes', -1)}"><ha-icon icon="mdi:chevron-down"></ha-icon></button>
                <div class="spin-label">${this._t("minutesLabel")}</div>
              </div>
              <div class="spin-separator">:</div>
              <div class="time-spinner">
                <button class="spin-btn" @click="${() => this._adjustTime('seconds', 1)}"><ha-icon icon="mdi:chevron-up"></ha-icon></button>
                <input class="spin-value" type="number" min="0" max="59" .value="${String(this._inputSeconds).padStart(2, '0')}" @change="${e => this._onSpinInput('seconds', e)}" @focus="${e => e.target.select()}">
                <button class="spin-btn" @click="${() => this._adjustTime('seconds', -1)}"><ha-icon icon="mdi:chevron-down"></ha-icon></button>
                <div class="spin-label">${this._t("secondsLabel")}</div>
              </div>
            </div>
          ` : html`
            <!-- 동작/일시정지 상태: 남은 시간 표시 + 바 -->
            <div class="timer-display">
              <div class="timer-remaining">
                <span class="time-digit">${String(h).padStart(2, '0')}</span>
                <span class="time-colon">:</span>
                <span class="time-digit">${String(m).padStart(2, '0')}</span>
                <span class="time-colon">:</span>
                <span class="time-digit">${String(s).padStart(2, '0')}</span>
              </div>
              <div class="timer-message" style="margin-top: 8px; font-size: 0.95rem; color: var(--custom-secondary); display: flex; justify-content: center;">
                ${(() => {
                  let timeArr = [];
                  if(h > 0) timeArr.push(h + this._t("hoursStr"));
                  if(m > 0 || h > 0) timeArr.push(m + this._t("minutesStr"));
                  timeArr.push(s + this._t("secondsStr"));
                  const remainStr = timeArr.join(' ');
                  return html`<span style="background: rgba(0,0,0,0.2); padding: 4px 12px; border-radius: 12px;">${remainStr} ${this._t("countdownMessage")}</span>`;
                })()}
              </div>
            </div>
            <div class="progress-bar-container">
              <div class="progress-bar ${state}" style="width: ${progressPercent}%;"></div>
            </div>
          `}

          <div class="presets-container" style="display: flex; flex-direction: column; gap: 8px; width: 100%;">
            <div class="presets">
              <button class="preset-btn" @click="${() => this._addTime(5)}" ?disabled="${state !== 'idle' && !isDummy}">${this._t('preset5m')}</button>
              <button class="preset-btn" @click="${() => this._addTime(10)}" ?disabled="${state !== 'idle' && !isDummy}">${this._t('preset10m')}</button>
              <button class="preset-btn" @click="${() => this._addTime(30)}" ?disabled="${state !== 'idle' && !isDummy}">${this._t('preset30m')}</button>
            </div>
            <div class="presets">
              <button class="preset-btn minus" @click="${() => this._addTime(-5)}" ?disabled="${state !== 'idle' && !isDummy}">${this._t('presetMinus5m')}</button>
              <button class="preset-btn minus" @click="${() => this._addTime(-10)}" ?disabled="${state !== 'idle' && !isDummy}">${this._t('presetMinus10m')}</button>
              <button class="preset-btn minus" @click="${() => this._addTime(-30)}" ?disabled="${state !== 'idle' && !isDummy}">${this._t('presetMinus30m')}</button>
            </div>
          </div>

          <div class="controls">
            ${state === "idle" ? html`
              <button class="btn btn-primary start-btn" @click="${() => this._startTimerCustom()}" ?disabled="${isDummy}">
                <ha-icon icon="mdi:play"></ha-icon> ${this._t('start')}
              </button>
            ` : html`
              ${state === "active" ? html`
                <button class="btn btn-secondary" @click="${() => this._callService('pause')}" ?disabled="${isDummy}">
                  <ha-icon icon="mdi:pause"></ha-icon> ${this._t('pause')}
                </button>
              ` : html`
                <button class="btn btn-primary" @click="${() => this._callService('start')}" ?disabled="${isDummy}">
                  <ha-icon icon="mdi:play"></ha-icon> ${this._t('resume')}
                </button>
              `}
              <button class="btn btn-danger" @click="${() => this._callService('cancel')}" ?disabled="${isDummy}">
                <ha-icon icon="mdi:stop"></ha-icon> ${this._t('stop')}
              </button>
            `}
          </div>
        </div>
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
      --custom-active-bg: rgba(3, 169, 244, 0.15);
      --custom-success: #4caf50;
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
      padding: 16px 16px 8px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .card-header .name {
      font-size: 1.15rem;
      font-weight: 600;
      color: var(--primary-text-color, #ffffff);
      letter-spacing: 0.1px;
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .header-right ha-icon {
      color: var(--custom-primary);
      --mdc-icon-size: 20px;
    }

    .state-badge {
      font-size: 0.75rem;
      font-weight: 600;
      padding: 4px 10px;
      border-radius: 20px;
      letter-spacing: 0.3px;
    }

    .state-badge.active {
      background: var(--custom-active-bg);
      color: var(--custom-primary);
    }

    .state-badge.paused {
      background: rgba(255, 152, 0, 0.15);
      color: #ff9800;
    }

    .card-content {
      padding: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

    /* === 숫자 스피너 (대기 상태) === */
    .time-spinner-row {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 0;
    }

    .time-spinner {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
    }

    .spin-btn {
      width: 48px;
      height: 32px;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid var(--custom-border);
      border-radius: 8px;
      color: var(--custom-secondary);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.15s ease;
      --mdc-icon-size: 20px;
    }

    .spin-btn:hover {
      background: rgba(255, 255, 255, 0.12);
      color: var(--custom-text);
      border-color: rgba(255, 255, 255, 0.2);
    }

    .spin-btn:active {
      transform: scale(0.92);
      background: rgba(3, 169, 244, 0.15);
    }

    .spin-value {
      width: 64px;
      font-size: 2.4rem;
      font-weight: 700;
      color: var(--custom-text);
      background: transparent;
      border: 1px solid transparent;
      border-radius: 8px;
      text-align: center;
      line-height: 1;
      font-variant-numeric: tabular-nums;
      font-family: inherit;
      padding: 4px 0;
      outline: none;
      transition: border-color 0.2s, background 0.2s;
      -moz-appearance: textfield;
    }

    .spin-value::-webkit-outer-spin-button,
    .spin-value::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    .spin-value:focus-visible {
      border-color: var(--custom-primary);
      background: rgba(3, 169, 244, 0.08);
      outline: none;
    }

    .spin-label {
      font-size: 0.7rem;
      color: var(--custom-secondary);
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-top: 2px;
    }

    .spin-separator {
      font-size: 2rem;
      font-weight: 700;
      color: var(--custom-secondary);
      padding: 0 2px;
      align-self: center;
      margin-bottom: 24px;
    }

    /* === 타이머 표시 (동작/일시정지 상태) === */
    .timer-display {
      padding: 16px 0;
    }

    .timer-remaining {
      display: flex;
      align-items: baseline;
      gap: 4px;
    }

    .time-digit {
      font-size: 3rem;
      font-weight: 700;
      color: var(--custom-text);
      font-variant-numeric: tabular-nums;
      letter-spacing: 1px;
    }

    .time-colon {
      font-size: 2.4rem;
      font-weight: 300;
      color: var(--custom-secondary);
      margin: 0 2px;
    }

    /* === 프로그레스 바 === */
    .progress-bar-container {
      width: 100%;
      height: 6px;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 3px;
      overflow: hidden;
    }

    .progress-bar {
      height: 100%;
      border-radius: 3px;
      transition: width 1s linear;
    }

    .progress-bar.active {
      background: var(--custom-primary);
    }

    .progress-bar.paused {
      background: #ff9800;
    }

    /* === 프리셋 버튼 === */
    .presets {
      display: flex;
      gap: 12px;
      justify-content: center;
      width: 100%;
    }

    .preset-btn {
      flex: 1;
      height: 44px;
      background: rgba(255,255,255,0.05);
      border: 1px solid var(--custom-border);
      color: var(--custom-text);
      border-radius: 12px;
      font-size: 0.95rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .preset-btn:hover:not(:disabled) {
      background: rgba(255,255,255,0.1);
      border-color: rgba(255,255,255,0.2);
    }

    .preset-btn:active:not(:disabled) {
      transform: scale(0.95);
    }

    .preset-btn:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    /* === 컨트롤 버튼 === */
    .controls {
      display: flex;
      gap: 12px;
      width: 100%;
      justify-content: center;
    }

    .btn {
      flex: 1;
      height: 48px;
      border: none;
      border-radius: 12px;
      font-family: inherit;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      transition: all 0.2s ease;
    }

    .btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .btn-primary {
      background: var(--custom-primary);
      color: var(--text-primary-color, #fff);
    }

    .btn-primary:active:not(:disabled) {
      transform: scale(0.96);
    }

    .btn-secondary {
      background: rgba(255, 255, 255, 0.1);
      color: var(--custom-text);
    }

    .btn-secondary:hover:not(:disabled) {
      background: rgba(255, 255, 255, 0.15);
    }

    .btn-danger {
      background: var(--custom-danger);
      color: #fff;
    }

    .btn-danger:hover:not(:disabled) {
      background: #e53935;
    }
  `;
}
customElements.define("ha-custom-timer-card", HaCustomTimerCard);


// ==========================================
// Editor Card (Wizard)
// ==========================================
window.customCards = window.customCards || [];
(() => {
  const t = TIMER_LOCALES[detectLang()] ?? TIMER_LOCALES.en;
  window.customCards.push({
    type: "ha-custom-timer-card",
    name: t.cardName,
    preview: true,
    description: t.cardDescription,
    documentationURL: "https://github.com/jewon-oh/schedule-ui",
  });
})();
