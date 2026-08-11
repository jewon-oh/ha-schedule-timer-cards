// @ts-nocheck
// Lists every automation that references a given entity and links each one
// through to its editor.
//
// The lookup is NOT a name/label heuristic: it calls Home Assistant's own
// `search/related` websocket command, the same one that powers the "related"
// section of the device page. HA walks the actual automation configs, so an
// automation is found whether it references the entity in a trigger, a
// condition or an action — no naming convention or label required.
//
// Note that `search/related` reports *references*, not intent: an automation
// that merely reads the entity in a condition is listed alongside one that
// switches it. That is the right behaviour for a "what touches this device?"
// view, which is what this card is.
import { LitElement, html, css } from "lit";
import { RELATED_LOCALES, detectLang } from "../locales/index.js";

class HaCustomRelatedCard extends LitElement {
  static properties = {
    hass: { type: Object },
    _config: { state: true },
    _automations: { state: true },
    _loading: { state: true },
    _error: { state: true },
  };

  constructor() {
    super();
    this._automations = null;   // string[] of automation entity_ids, null = not loaded
    this._loading = false;
    this._error = null;
    this._lastQueried = null;   // item_id the current result belongs to
  }

  static getStubConfig() {
    return { type: "custom:ha-custom-related-card" };
  }

  setConfig(config) {
    if (!config) throw new Error("Invalid configuration");
    this._config = config;
    this._lastQueried = null;   // force a refetch against the new target
  }

  get _lang() {
    return this.hass?.language && this.hass.language.includes("ko") ? "ko" : "en";
  }

  _t(key) {
    return RELATED_LOCALES[this._lang]?.[key] ?? RELATED_LOCALES.en[key];
  }

  // What to ask HA about. `entity` is the common case; `device_id` lets a card
  // cover every entity of a device at once.
  get _target() {
    if (this._config?.device_id) return { item_type: "device", item_id: this._config.device_id };
    if (this._config?.entity) return { item_type: "entity", item_id: this._config.entity };
    return null;
  }

  updated() {
    // hass is reassigned on every state change in HA, so only refetch when the
    // thing we are asking about actually changed (or a refresh was requested).
    const target = this._target;
    if (!this.hass || !target) return;
    if (this._lastQueried === target.item_id || this._loading) return;
    this._fetchRelated();
  }

  async _fetchRelated() {
    const target = this._target;
    if (!this.hass || !target) return;
    this._loading = true;
    this._error = null;
    this._lastQueried = target.item_id;
    try {
      const res = await this.hass.callWS({ type: "search/related", ...target });
      // Only automations — scripts/scenes/areas come back too but are a
      // different question than "what automates this device?".
      this._automations = Array.isArray(res?.automation) ? [...res.automation] : [];
    } catch (e) {
      this._error = e?.message || String(e);
      this._automations = null;
      this._lastQueried = null;   // let a refresh retry
    } finally {
      this._loading = false;
    }
  }

  _refresh(ev) {
    ev?.stopPropagation();
    this._lastQueried = null;
    this._fetchRelated();
  }

  // The automation editor is addressed by the automation's *config* id
  // (attributes.id), not its entity_id. YAML automations have no id and
  // cannot be opened in the UI editor.
  _editId(entityId) {
    return this.hass?.states?.[entityId]?.attributes?.id ?? null;
  }

  _openEditor(entityId, ev) {
    ev?.stopPropagation();
    const id = this._editId(entityId);
    if (!id) {
      this._openMoreInfo(entityId);
      return;
    }
    this._navigate(`/config/automation/edit/${id}`);
  }

  // SPA navigation inside the HA frontend: push the URL, then tell the router.
  // A plain location assignment would trigger a full reload of the frontend.
  _navigate(path) {
    history.pushState(null, "", path);
    window.dispatchEvent(new CustomEvent("location-changed", { bubbles: true, composed: true }));
  }

  _openMoreInfo(entityId) {
    this.dispatchEvent(new CustomEvent("hass-more-info", {
      detail: { entityId },
      bubbles: true,
      composed: true,
    }));
  }

  _toggle(entityId, ev) {
    ev?.stopPropagation();
    const st = this.hass?.states?.[entityId]?.state;
    this.hass.callService("automation", st === "on" ? "turn_off" : "turn_on", { entity_id: entityId });
  }

  // "마지막 실행 3시간 전" when it has run, plain "실행 기록 없음" when it
  // hasn't — prefixing the never-run text would read "마지막 실행 실행 기록 없음".
  _lastRunLabel(iso) {
    const rel = this._relativeTime(iso);
    return rel === this._t("neverRun") ? rel : `${this._t("lastRun")} ${rel}`;
  }

  _relativeTime(iso) {
    if (!iso) return this._t("neverRun");
    const then = Date.parse(iso);
    if (!Number.isFinite(then)) return this._t("neverRun");
    const mins = Math.floor((Date.now() - then) / 60000);
    if (mins < 1) return this._t("justNow");
    if (mins < 60) return `${mins}${this._t("minutesAgo")}`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours}${this._t("hoursAgo")}`;
    return `${Math.floor(hours / 24)}${this._t("daysAgo")}`;
  }

  _name(entityId) {
    return this.hass?.states?.[entityId]?.attributes?.friendly_name || entityId;
  }

  render() {
    if (!this._config) return html``;

    const title = this._config.title || this._t("title");

    if (!this._target) {
      return html`
        <ha-card>
          <div class="card-header"><div class="name">${title}</div></div>
          <div class="card-content"><div class="empty-state">${this._t("notConfigured")}</div></div>
        </ha-card>
      `;
    }

    const list = this._automations;
    const count = Array.isArray(list) ? list.length : null;

    return html`
      <ha-card>
        <div class="card-header">
          <div class="name">
            ${title}
            ${count !== null ? html`<span class="count">${count}${this._t("countSuffix")}</span>` : ""}
          </div>
          <button class="icon-btn" title="${this._t("refresh")}" @click=${this._refresh}>
            <ha-icon icon="mdi:refresh"></ha-icon>
          </button>
        </div>

        <div class="card-content">
          ${this._error
            ? html`<div class="empty-state error">${this._t("lookupFailed")}<br /><span class="detail">${this._error}</span></div>`
            : this._loading && list === null
              ? html`<div class="empty-state">${this._t("loading")}</div>`
              : !count
                ? html`<div class="empty-state">${this._t("none")}</div>`
                : html`<div class="rows">${list.map((id) => this._renderRow(id))}</div>`}
        </div>
      </ha-card>
    `;
  }

  _renderRow(entityId) {
    const st = this.hass?.states?.[entityId];
    const on = st?.state === "on";
    const editable = !!this._editId(entityId);
    return html`
      <div
        class="row ${on ? "" : "row-off"}"
        @click=${(e) => this._openEditor(entityId, e)}
        title="${editable ? this._t("edit") : this._t("noEditId")}"
      >
        <ha-icon class="row-icon ${on ? "on" : ""}" icon="mdi:robot"></ha-icon>
        <div class="row-info">
          <div class="row-name">${this._name(entityId)}</div>
          <div class="row-meta">
            <span class="${on ? "state-on" : "state-off"}">${on ? this._t("enabled") : this._t("disabled")}</span>
            <span class="dot">·</span>
            <span>${this._lastRunLabel(st?.attributes?.last_triggered)}</span>
          </div>
        </div>
        <button
          class="icon-btn toggle ${on ? "on" : ""}"
          @click=${(e) => this._toggle(entityId, e)}
          title="${on ? this._t("disabled") : this._t("enabled")}"
        >
          <ha-icon icon="${on ? "mdi:toggle-switch" : "mdi:toggle-switch-off-outline"}"></ha-icon>
        </button>
        <ha-icon class="chevron" icon="mdi:chevron-right"></ha-icon>
      </div>
    `;
  }

  getCardSize() {
    return 1 + (Array.isArray(this._automations) ? this._automations.length : 1);
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
      --custom-success: #4caf50;
    }

    ha-card {
      background: var(--custom-bg);
      border-radius: var(--ha-card-border-radius, 12px);
      border: 1px solid var(--custom-border);
      overflow: hidden;
      font-family: var(--paper-font-body1_-_font-family, system-ui, -apple-system, sans-serif);
      color: var(--custom-text);
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
      letter-spacing: 0.1px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .count {
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--custom-secondary);
      background: rgba(255, 255, 255, 0.08);
      border-radius: 10px;
      padding: 1px 8px;
    }

    .card-content {
      padding: 8px 12px 12px 12px;
    }

    .rows {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .row {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 8px 10px 10px;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.05);
      cursor: pointer;
      transition: background 0.2s ease;
    }

    .row:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    .row:active {
      transform: scale(0.99);
    }

    .row-off {
      opacity: 0.55;
    }

    .row-icon {
      --mdc-icon-size: 22px;
      color: var(--custom-secondary);
      flex: 0 0 auto;
    }

    .row-icon.on {
      color: var(--custom-success);
    }

    .row-info {
      flex: 1 1 auto;
      min-width: 0;
    }

    .row-name {
      font-size: 0.95rem;
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .row-meta {
      font-size: 0.75rem;
      color: var(--custom-secondary);
      display: flex;
      align-items: center;
      gap: 5px;
      margin-top: 2px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .state-on {
      color: var(--custom-success);
    }

    .state-off {
      color: var(--custom-secondary);
    }

    .dot {
      opacity: 0.5;
    }

    .icon-btn {
      background: none;
      border: none;
      padding: 4px;
      cursor: pointer;
      color: var(--custom-secondary);
      display: flex;
      align-items: center;
      border-radius: 8px;
    }

    .icon-btn:hover {
      background: rgba(255, 255, 255, 0.1);
      color: var(--custom-text);
    }

    .toggle.on {
      color: var(--custom-success);
    }

    .chevron {
      --mdc-icon-size: 20px;
      color: var(--custom-secondary);
      flex: 0 0 auto;
      opacity: 0.6;
    }

    .empty-state {
      padding: 18px 8px;
      text-align: center;
      color: var(--custom-secondary);
      font-size: 0.9rem;
    }

    .empty-state.error {
      color: var(--custom-danger);
    }

    .empty-state .detail {
      font-size: 0.75rem;
      opacity: 0.8;
      word-break: break-word;
    }
  `;
}

customElements.define("ha-custom-related-card", HaCustomRelatedCard);

window.customCards = window.customCards || [];
(() => {
  const t = RELATED_LOCALES[detectLang()] ?? RELATED_LOCALES.en;
  window.customCards.push({
    type: "ha-custom-related-card",
    name: t.cardName,
    preview: true,
    description: t.cardDescription,
    documentationURL: "https://github.com/jewon-oh/ha-schedule-timer-cards",
  });
})();
