// @ts-nocheck
import { LitElement, html, css } from "lit";
import { LOCALES, detectLang } from "../locales/index.js";

const WEEKDAYS = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

// 브릿지 자동화 ID 접두사
const AUTOMATION_PREFIX = "schedule_bridge_";

// v1.4 모델: 카드는 한 schedule을 단일 view로 다룬다.
// - _activeDays: number[]  (0=Mon … 6=Sun) — 같은 시간 블록 세트가 적용되는 요일들
// - _blocks    : {from,to}[] — 활성 요일들이 공유하는 단일 블록 세트
// 저장 시 활성 요일에는 _blocks, 비활성 요일에는 빈 배열을 내려 보낸다.

class HaCustomScheduleCard extends LitElement {
  static properties = {
    _config: { state: true },
    _hass: { state: false },
    _scheduleData: { state: true },
    _activeDays: { state: true },
    _blocks: { state: true },
    _showCreateWizard: { state: true },
    _isCreating: { state: true },
    _createResult: { state: true },
    _dragStartMin: { state: true },
    _dragEndMin: { state: true },
    _isDragging: { state: true },
    _selectedBlockIdx: { state: true },
    _resizingBlockIdx: { state: true },
    _resizingEdge: { state: true },
    _toast: { state: true },
    _confirm: { state: true },
    _isEditing: { state: true },
  };

  constructor() {
    super();
    this._scheduleData = null;
    const todayIdx = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1; // 0=Mon, 6=Sun
    this._activeDays = [todayIdx];
    this._blocks = [];
    this._showCreateWizard = false;
    this._isCreating = false;
    this._createResult = null;
    this._lang = "en";
    this._isEditing = false;
    this._dragStartMin = null;
    this._dragEndMin = null;
    this._isDragging = false;
    this._selectedBlockIdx = null;
    this._resizingBlockIdx = null;
    this._resizingEdge = null;
    this._toast = null;        // { message: string }
    this._confirm = null;      // { message, onConfirm }
    this._toastTimer = null;
    this._saveTimer = null;    // debounced _updateSchedule
  }

  // 빠른 연속 토글(예: 월·화·수 켜기)에서 매번 서버 왕복하지 않도록
  // 마지막 변경 후 일정 시간 멈춰야 저장한다.
  _scheduleSaveDebounced(ms = 400) {
    if (this._saveTimer) clearTimeout(this._saveTimer);
    this._saveTimer = setTimeout(() => {
      this._saveTimer = null;
      this._updateSchedule();
    }, ms);
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

  setConfig(config) {
    this._config = config;
    if (this._hass) this._loadSchedule();
  }

  set hass(hass) {
    const oldHass = this._hass;
    this._hass = hass;

    let shouldUpdate = !oldHass; // 최초로 hass가 주입될 때 렌더링 강제 트리거

    // 언어 감지
    if (hass && hass.language) {
      const newLang = hass.language.startsWith("ko") ? "ko" : "en";
      if (this._lang !== newLang) {
        this._lang = newLang;
        shouldUpdate = true;
      }
    }

    if (shouldUpdate) {
      this.requestUpdate(); // hass 최초 주입 또는 언어 변경 시 화면 갱신
    }

    // 최초 연결 시 데이터 초기화
    if (!oldHass && hass && this._config) {
      this._loadSchedule();
    }
  }

  _t(key) {
    return LOCALES[this._lang][key] || LOCALES["en"][key];
  }

  async _loadSchedule() {
    if (!this._hass || !this._config.entity) return;

    try {
      const result = await this._hass.callWS({
        type: "schedule/list",
      });
      
      const entityId = this._config.entity;
      const entitySlug = entityId.split(".")[1];
      
      // entity registry에서 unique_id(=storage id)를 WebSocket으로 직접 조회
      // HA에서 entity_id를 rename하면 slug와 storage id가 달라지므로 필수
      let storageId = entitySlug;
      try {
        const regEntry = await this._hass.callWS({
          type: "config/entity_registry/get",
          entity_id: entityId,
        });
        if (regEntry && regEntry.unique_id) {
          storageId = regEntry.unique_id;
          console.log("[schedule-ui] entity registry → unique_id:", storageId);
        }
      } catch (regErr) {
        console.warn("[schedule-ui] entity registry 조회 실패, slug 사용:", entitySlug, regErr);
      }
      
      // 1차: storage id(unique_id)로 매칭
      let match = result.find(s => s.id === storageId);
      
      // 2차: entity_id slug로 매칭
      if (!match) {
        match = result.find(s => s.id === entitySlug);
      }
      
      // 3차: friendly_name으로 매칭
      if (!match) {
        const entityState = this._hass.states?.[entityId];
        const friendlyName = entityState?.attributes?.friendly_name;
        if (friendlyName) {
          match = result.find(s => s.name === friendlyName);
        }
      }
      
      console.log("[schedule-ui] loadSchedule - entity:", entityId, "storageId:", storageId, "matched:", match ? match.id : "NONE");
      if (!match && result.length > 0) {
        console.warn("[schedule-ui] 매칭 실패! available ids:", result.map(s => `${s.id}(${s.name})`));
      }

      if (match) {
        this._scheduleData = match;
        this._hydrateFromSchedule(match);
      }
    } catch (e) {
      console.error("[schedule-ui] Failed to load schedules", e);
    }
  }

  // 두 블록이 겹치는지 (touching은 겹침으로 간주하지 않음 — 17:00 끝 / 17:00 시작은 OK)
  _blocksOverlap(a, b) {
    return a.from < b.to && b.from < a.to;
  }

  // 정렬된 블록들에서 겹치는/맞닿은 구간들을 하나로 병합. HA schedule API는
  // 같은 요일에 겹치는 블록을 거부하므로 hydrate 단계에서 normalize한다.
  _mergeIntervals(blocks) {
    const sorted = [...blocks].sort((a, b) => a.from.localeCompare(b.from));
    const merged = [];
    for (const b of sorted) {
      if (merged.length === 0) { merged.push({ ...b }); continue; }
      const last = merged[merged.length - 1];
      if (b.from <= last.to) {
        // 겹침 또는 인접 → 통합
        if (b.to > last.to) last.to = b.to;
      } else {
        merged.push({ ...b });
      }
    }
    return merged;
  }

  // schedule API 응답을 카드 내부 모델(_blocks + _activeDays)로 풀어낸다.
  // 기존 사용자 데이터가 요일별로 달랐다면 합집합 후 시간 겹침은 자동 병합한다.
  _hydrateFromSchedule(match) {
    const rawUnion = [];
    const activeSet = new Set();
    for (let i = 0; i < WEEKDAYS.length; i++) {
      const dayBlocks = match[WEEKDAYS[i]] || [];
      if (dayBlocks.length > 0) activeSet.add(i);
      for (const b of dayBlocks) {
        rawUnion.push({ from: b.from, to: b.to });
      }
    }
    const merged = this._mergeIntervals(rawUnion);
    this._blocks = merged;

    if (activeSet.size === 0) {
      const todayIdx = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;
      this._activeDays = [todayIdx];
    } else {
      this._activeDays = [...activeSet].sort((a, b) => a - b);
    }

    // hydrate 단계에서 normalize가 발생했다는 신호: 서버의 raw 블록 합산 수와 merged 수가 다르면 사용자에게 알린다.
    // (rawUnion의 unique 개수가 merged보다 많으면 겹침이 있었다는 뜻.)
    const uniqueRaw = new Set(rawUnion.map(b => `${b.from}~${b.to}`)).size;
    if (uniqueRaw > merged.length) {
      console.warn("[schedule-ui] hydrate: merged overlapping blocks", { rawUnique: uniqueRaw, merged: merged.length });
      // 다음 update 시점에 자동으로 정리된 데이터가 서버에 반영된다.
    }
  }

  async _updateSchedule() {
    if (!this._hass || !this._scheduleData) return;
    this._isEditing = true;

    try {
      const scheduleId = this._scheduleData.id;
      const updatePayload = { name: this._scheduleData.name };
      if (this._scheduleData.icon) updatePayload.icon = this._scheduleData.icon;

      // v1.4: 활성 요일에는 unified blocks를, 비활성에는 빈 배열을 채운다.
      const sortedBlocks = [...this._blocks].sort((a, b) => a.from.localeCompare(b.from));
      const activeSet = new Set(this._activeDays);
      for (let i = 0; i < WEEKDAYS.length; i++) {
        updatePayload[WEEKDAYS[i]] = activeSet.has(i) ? sortedBlocks : [];
      }

      console.log("[schedule-ui] updateSchedule - schedule_id:", scheduleId,
        "activeDays:", this._activeDays, "blocks:", sortedBlocks);

      await this._hass.callWS({
        type: "schedule/update",
        schedule_id: scheduleId,
        ...updatePayload,
      });
      await this._loadSchedule();
    } catch (e) {
      console.error("[schedule-ui] updateSchedule FAILED:", e);
      this._showToast(`${this._t("saveFailed")} ${e?.message || e}`);
      await this._loadSchedule();
    } finally {
      this._isEditing = false;
    }
  }



  _deleteBlock(blockIdx) {
    if (this._isEditing || !this._scheduleData || !this._config?.entity) return;
    if (blockIdx < 0 || blockIdx >= this._blocks.length) return;
    this._openConfirm(this._t("confirmDeleteBlock"), async () => {
      this._closeConfirm();
      this._blocks = this._blocks.filter((_, i) => i !== blockIdx);
      this._selectedBlockIdx = null;
      await this._updateSchedule();
    });
  }

  // 픽셀 Y → 분(15분 스냅)
  _yToMinutes(barEl, clientY) {
    const rect = barEl.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
    const SNAP = 15;
    const minutes = Math.round((ratio * 1440) / SNAP) * SNAP;
    return Math.max(0, Math.min(1440, minutes));
  }

  // 분 → "HH:MM:00"
  _minutesToTimeStr(min) {
    const safe = Math.max(0, Math.min(1439, min));
    const h = Math.floor(safe / 60);
    const m = safe % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:00`;
  }

  // 드래그로 새 블록 시작
  _onBarPointerDown(e) {
    if (this._isEditing) return;
    // 기존 블록/핸들/삭제 버튼 위에서 시작한 포인터는 새 블록 생성에서 제외
    const path = e.composedPath ? e.composedPath() : [];
    if (path.some(el => el?.classList?.contains?.('editor-block'))) return;
    this._selectedBlockIdx = null;
    const bar = e.currentTarget;
    try { bar.setPointerCapture(e.pointerId); } catch (_) { /* noop */ }
    const min = this._yToMinutes(bar, e.clientY);
    this._isDragging = true;
    this._dragStartMin = min;
    this._dragEndMin = min;
  }

  _onBarPointerMove(e) {
    if (!this._isDragging) return;
    this._dragEndMin = this._yToMinutes(e.currentTarget, e.clientY);
  }

  async _onBarPointerUp(e) {
    if (!this._isDragging) return;
    const bar = e.currentTarget;
    try { bar.releasePointerCapture(e.pointerId); } catch (_) { /* noop */ }
    const start = Math.min(this._dragStartMin, this._dragEndMin);
    const end = Math.max(this._dragStartMin, this._dragEndMin);
    this._isDragging = false;
    this._dragStartMin = null;
    this._dragEndMin = null;
    if (end - start < 15) return;
    if (this._overlapsExisting(start, end)) {
      this._showToast(this._t("blockOverlap"));
      return;
    }
    this._blocks = [...this._blocks, {
      from: this._minutesToTimeStr(start),
      to: this._minutesToTimeStr(end),
    }].sort((a, b) => a.from.localeCompare(b.from));
    await this._updateSchedule();
  }

  // 블록 선택/해제 (선택 시 핸들 + 삭제 버튼 노출)
  _selectBlock(e, blockIdx) {
    e.stopPropagation();
    this._selectedBlockIdx = this._selectedBlockIdx === blockIdx ? null : blockIdx;
  }

  _onSelectedDeleteClick(e, blockIdx) {
    e.stopPropagation();
    this._deleteBlock(blockIdx);
  }

  // 블록 리사이즈 (상단/하단 핸들)
  _onHandlePointerDown(e, blockIdx, edge) {
    e.stopPropagation();
    if (this._isEditing) return;
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch (_) { /* noop */ }
    this._resizingBlockIdx = blockIdx;
    this._resizingEdge = edge;
  }

  _onHandlePointerMove(e, blockIdx, edge) {
    if (this._resizingBlockIdx !== blockIdx || this._resizingEdge !== edge) return;
    const column = e.currentTarget.closest('.editor-column');
    if (!column) return;
    const block = this._blocks[blockIdx];
    if (!block) return;

    const min = this._yToMinutes(column, e.clientY);
    const fromMin = this._timeToMinutes(block.from);
    const toMin = this._timeToMinutes(block.to);
    const otherBlocks = this._blocks.filter((_, i) => i !== blockIdx);
    let newFrom = fromMin;
    let newTo = toMin;

    if (edge === 'top') {
      const prevEnd = otherBlocks
        .map(b => this._timeToMinutes(b.to))
        .filter(t => t <= toMin)
        .reduce((max, t) => Math.max(max, t), 0);
      newFrom = Math.max(prevEnd, Math.min(min, toMin - 15));
    } else {
      const nextStart = otherBlocks
        .map(b => this._timeToMinutes(b.from))
        .filter(t => t >= fromMin)
        .reduce((m2, t) => Math.min(m2, t), 1440);
      newTo = Math.min(nextStart, Math.max(min, fromMin + 15));
    }

    if (newFrom === fromMin && newTo === toMin) return;
    this._blocks = this._blocks.map((b, i) => i === blockIdx
      ? { from: this._minutesToTimeStr(newFrom), to: this._minutesToTimeStr(newTo) }
      : b);
  }

  async _onHandlePointerUp(e, blockIdx, edge) {
    if (this._resizingBlockIdx !== blockIdx || this._resizingEdge !== edge) return;
    try { e.currentTarget.releasePointerCapture(e.pointerId); } catch (_) { /* noop */ }
    this._resizingBlockIdx = null;
    this._resizingEdge = null;
    await this._updateSchedule();
  }

  // unified blocks 안에서 겹침 검사 (블록 인덱스 제외 가능)
  _overlapsExisting(startMin, endMin, excludeIdx = -1) {
    return this._blocks.some((b, i) => {
      if (i === excludeIdx) return false;
      const bStart = this._timeToMinutes(b.from);
      const bEnd = this._timeToMinutes(b.to);
      return startMin < bEnd && endMin > bStart;
    });
  }

  _currentDragOverlaps() {
    if (!this._isDragging || this._dragStartMin === null) return false;
    const s = Math.min(this._dragStartMin, this._dragEndMin);
    const e = Math.max(this._dragStartMin, this._dragEndMin);
    if (e - s < 15) return false;
    return this._overlapsExisting(s, e);
  }

  // day-switcher 토글 (multi-select). 최소 1개 보장.
  // 즉시 반영 후 debounced save — 사용자가 여러 요일을 연속해서 토글해도
  // 잠금/왕복 없이 한 번에 묶어서 저장된다.
  _toggleActiveDay(idx) {
    const has = this._activeDays.includes(idx);
    const next = has
      ? this._activeDays.filter(d => d !== idx)
      : [...this._activeDays, idx].sort((a, b) => a - b);
    if (next.length === 0) {
      this._showToast(this._t("atLeastOneDay"));
      return;
    }
    this._activeDays = next;
    this._scheduleSaveDebounced();
  }

  _formatTime(timeStr) {
    if (!timeStr) return "";
    let [hours, minutes] = timeStr.split(":");
    let date = new Date();
    date.setHours(parseInt(hours));
    date.setMinutes(parseInt(minutes));
    
    return new Intl.DateTimeFormat(this._lang, {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }).format(date);
  }

  // "HH:MM:SS" 형식의 시간 문자열을 하루 기준 분(minutes)으로 변환
  _timeToMinutes(timeStr) {
    if (!timeStr) return 0;
    const parts = timeStr.split(":");
    return parseInt(parts[0]) * 60 + parseInt(parts[1]);
  }



  render() {
    if (!this._config) return html`<ha-card><div class="error">Not configured</div></ha-card>`;

    // 카드 피커 프리뷰 또는 hass 미로드 시: 간단한 플레이스홀더 표시
    if (!this._hass) {
      return html`
        <ha-card>
          <div class="card-header">
            <div class="name">${this._config.title || this._t("scheduleManager")}</div>
            <div class="header-right">
              <ha-icon icon="mdi:calendar-clock"></ha-icon>
            </div>
          </div>
          <div class="card-content">
            <div class="empty-state">
              <ha-icon icon="mdi:calendar-plus" style="--mdc-icon-size: 48px; opacity: 0.4; margin-bottom: 12px;"></ha-icon>
              <p style="margin: 0; color: var(--secondary-text-color, #a0a0a0);">${this._t("placeholder")}</p>
            </div>
          </div>
        </ha-card>
      `;
    }

    // 엔티티 미설정 시 카드 피커 미리보기용 더미 데이터
    let isDummy = false;
    let titleName = this._scheduleData?.name;
    let icon = this._scheduleData?.icon;
    let effectiveBlocks = this._blocks;
    let effectiveActiveDays = this._activeDays;

    if (!this._config.entity) {
      isDummy = true;
      titleName = this._t("scheduleManager") + this._t("previewSuffix");
      icon = "mdi:calendar-star";
      effectiveBlocks = [{ from: "09:00:00", to: "18:00:00" }];
      effectiveActiveDays = [0, 1, 2, 3, 4];
    }

    const customTitle = this._config.title || titleName || this._t("scheduleManager");

    const MINUTES_IN_DAY = 1440;
    const isDragging = this._isDragging;
    const dragStart = isDragging ? Math.min(this._dragStartMin, this._dragEndMin) : 0;
    const dragEnd = isDragging ? Math.max(this._dragStartMin, this._dragEndMin) : 0;
    const now = new Date();
    const todayIdx = (now.getDay() + 6) % 7;
    const showNow = effectiveActiveDays.includes(todayIdx);
    const nowPos = ((now.getHours() * 60 + now.getMinutes()) / MINUTES_IN_DAY) * 100;
    const sortedBlocks = [...effectiveBlocks].sort((a, b) => a.from.localeCompare(b.from));

    return html`
      <ha-card class="${isDummy ? 'is-dummy' : ''}">
        ${isDummy ? html`<div class="dummy-badge">${this._t("previewSuffix").trim()}</div>` : ''}

        <div class="card-header">
          <div class="name">${customTitle}</div>
          <div class="header-right">
            <ha-icon icon="${icon || 'mdi:calendar-clock'}"></ha-icon>
          </div>
        </div>

        <div class="card-content">
          <div class="day-editor">
            <div class="day-editor-grid">
              <div class="hour-labels-col" aria-hidden="true">
                ${Array.from({ length: 25 }, (_, h) => html`<span>${h}</span>`)}
              </div>
              <div class="editor-column"
                   role="application"
                   aria-label="${this._t("scheduleManager")}"
                   @pointerdown=${this._onBarPointerDown}
                   @pointermove=${this._onBarPointerMove}
                   @pointerup=${this._onBarPointerUp}
                   @pointercancel=${this._onBarPointerUp}>
                ${Array.from({ length: 24 }, (_, h) => html`
                  <div class="hour-gridline" style="top: ${(h / 24) * 100}%;"></div>
                `)}
                ${sortedBlocks.map((block, blockIdx) => {
                  const startMin = this._timeToMinutes(block.from);
                  const endMin = this._timeToMinutes(block.to);
                  const top = (startMin / MINUTES_IN_DAY) * 100;
                  const height = ((endMin - startMin) / MINUTES_IN_DAY) * 100;
                  const isSelected = this._selectedBlockIdx === blockIdx;
                  // top<7% 인 블록은 pill을 위가 아니라 아래로 보낸다 (잘림 방지)
                  const pillBelow = top < 7;
                  return html`
                    <button type="button"
                            class="editor-block ${isSelected ? 'selected' : ''}"
                            style="top: ${top}%; height: ${Math.max(height, 0.5)}%;"
                            title="${this._formatTime(block.from)} ~ ${this._formatTime(block.to)}"
                            aria-label="${this._formatTime(block.from)} – ${this._formatTime(block.to)}"
                            @click=${(e) => this._selectBlock(e, blockIdx)}
                            @pointerdown=${(e) => e.stopPropagation()}>
                      ${isSelected ? html`
                        <span class="block-time-pill ${pillBelow ? 'below' : ''}">
                          ${block.from.slice(0, 5)}~${block.to.slice(0, 5)}
                        </span>
                        <span class="block-handle handle-top"
                              aria-label="${this._t("startTime")}"
                              @pointerdown=${(e) => this._onHandlePointerDown(e, blockIdx, 'top')}
                              @pointermove=${(e) => this._onHandlePointerMove(e, blockIdx, 'top')}
                              @pointerup=${(e) => this._onHandlePointerUp(e, blockIdx, 'top')}
                              @pointercancel=${(e) => this._onHandlePointerUp(e, blockIdx, 'top')}></span>
                        <span class="block-handle handle-bottom"
                              aria-label="${this._t("endTime")}"
                              @pointerdown=${(e) => this._onHandlePointerDown(e, blockIdx, 'bottom')}
                              @pointermove=${(e) => this._onHandlePointerMove(e, blockIdx, 'bottom')}
                              @pointerup=${(e) => this._onHandlePointerUp(e, blockIdx, 'bottom')}
                              @pointercancel=${(e) => this._onHandlePointerUp(e, blockIdx, 'bottom')}></span>
                        <button type="button"
                                class="block-delete"
                                aria-label="${this._t("delete")}"
                                title="${this._t("delete")}"
                                @click=${(e) => this._onSelectedDeleteClick(e, blockIdx)}>
                          <span aria-hidden="true">−</span>
                        </button>
                      ` : ''}
                    </button>
                  `;
                })}
                ${isDragging ? (() => {
                  const overlaps = this._currentDragOverlaps();
                  return html`
                    <div class="editor-block pending dragging ${overlaps ? 'conflict' : ''}"
                         style="top: ${(dragStart / MINUTES_IN_DAY) * 100}%; height: ${Math.max(((dragEnd - dragStart) / MINUTES_IN_DAY) * 100, 0.5)}%;">
                      <span class="block-time-label">
                        ${overlaps ? '⚠ ' : ''}${this._minutesToTimeStr(dragStart).slice(0, 5)} ~ ${this._minutesToTimeStr(dragEnd).slice(0, 5)}
                      </span>
                    </div>
                  `;
                })() : ''}
                ${showNow ? html`<div class="now-line" style="top: ${nowPos}%;"><span class="now-line-label">${this._minutesToTimeStr(now.getHours() * 60 + now.getMinutes()).slice(0, 5)}</span></div>` : ''}
                ${sortedBlocks.length === 0 && !isDragging ? html`
                  <div class="timeline-empty-hint">${this._t("empty")}</div>
                ` : ''}
              </div>
            </div>
          </div>

          <div class="day-switcher" role="group" aria-label="${this._t("activeDays")}">
            ${WEEKDAYS.map((_, i) => {
              const isActive = effectiveActiveDays.includes(i);
              return html`
                <button type="button"
                        class="day-pill ${isActive ? 'selected' : ''}"
                        aria-pressed="${isActive}"
                        ?disabled=${isDummy}
                        @click=${() => this._toggleActiveDay(i)}>
                  ${this._t("daysShort")[i]}
                </button>
              `;
            })}
          </div>
          <div class="active-days-help">${this._t("activeDaysHelp")}</div>
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

    h2 {
      margin: 0;
      font-size: 1.1rem;
      font-weight: 600;
      letter-spacing: 0.5px;
    }

    .card-content {
      padding: 20px;
      position: relative;
    }

    /* ── 스케쥴 생성 마법사 ── */
    .create-wizard {
      animation: fadeIn 0.3s ease;
    }

    .wizard-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 8px;
    }

    .wizard-header ha-icon {
      color: var(--custom-primary);
      --mdc-icon-size: 28px;
    }

    .wizard-header h3 {
      margin: 0;
      font-size: 1.05rem;
      font-weight: 600;
    }

    .wizard-desc {
      margin: 0 0 20px 0;
      font-size: 0.85rem;
      color: var(--custom-secondary);
      line-height: 1.5;
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
      font-weight: 500;
      color: var(--custom-secondary);
    }

    .wizard-field input[type="text"] {
      padding: 12px;
      background: rgba(0,0,0,0.2);
      border: 1px solid var(--custom-border);
      color: var(--custom-text);
      border-radius: 8px;
      font-size: 1rem;
      outline: none;
      font-family: inherit;
      transition: border-color 0.2s ease;
    }

    .wizard-field input[type="text"]:focus {
      border-color: var(--custom-primary);
    }

    .wizard-field input[type="text"]::placeholder {
      color: var(--custom-secondary);
      opacity: 0.5;
    }

    .wizard-field select {
      padding: 12px;
      background: rgba(0,0,0,0.2);
      border: 1px solid var(--custom-border);
      color: var(--custom-text);
      border-radius: 8px;
      font-size: 1rem;
      outline: none;
      font-family: inherit;
      cursor: pointer;
      appearance: none;
      -webkit-appearance: none;
      transition: border-color 0.2s ease;
    }

    .wizard-field select:focus {
      border-color: var(--custom-primary);
    }

    .wizard-field select option {
      background: var(--card-background-color, #2b2b2b);
      color: var(--primary-text-color, #fff);
      font-size: 1rem;
    }

    .wizard-field ha-entity-picker {
      display: block;
    }

    .create-btn {
      width: 100%;
      padding: 14px;
      background: linear-gradient(135deg, var(--custom-primary), #7c4dff);
      color: var(--text-primary-color, #fff);
      border: none;
      border-radius: 12px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      box-shadow: 0 4px 16px rgba(3, 169, 244, 0.35);
      transition: all 0.2s ease;
    }

    .create-btn:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(3, 169, 244, 0.45);
    }

    .create-btn:active:not(:disabled) {
      transform: scale(0.98);
    }

    .create-btn:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    .result-msg {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 14px 16px;
      border-radius: 12px;
      margin-bottom: 16px;
      animation: fadeIn 0.3s ease;
    }

    .result-msg.success {
      background: rgba(76, 175, 80, 0.12);
      border: 1px solid rgba(76, 175, 80, 0.3);
    }

    .result-msg.success ha-icon {
      color: var(--custom-success);
      --mdc-icon-size: 24px;
      flex-shrink: 0;
      margin-top: 2px;
    }

    .result-msg.success strong {
      color: var(--custom-success);
      display: block;
      margin-bottom: 4px;
    }

    .result-msg.success p {
      margin: 0;
      font-size: 0.9rem;
      color: var(--custom-secondary);
      word-break: break-all;
    }

    .result-msg.success .hint {
      margin-top: 8px;
      font-size: 0.8rem;
      opacity: 0.7;
    }

    .result-msg.error {
      background: rgba(244, 67, 54, 0.1);
      border: 1px solid rgba(244, 67, 54, 0.3);
      color: var(--custom-danger);
      font-size: 0.85rem;
    }

    .result-msg.error ha-icon {
      --mdc-icon-size: 20px;
      flex-shrink: 0;
    }

    .wizard-hint {
      text-align: center;
      font-size: 0.8rem;
      color: var(--custom-secondary);
      opacity: 0.6;
      margin: 16px 0 0 0;
    }

    .wizard-close-btn {
      position: absolute;
      top: 12px;
      right: 12px;
      background: rgba(255,255,255,0.08);
      border: none;
      color: var(--custom-secondary);
      cursor: pointer;
      padding: 6px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
    }

    .wizard-close-btn:hover {
      background: rgba(255,255,255,0.15);
      color: var(--custom-text);
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .spin {
      animation: spin 1s linear infinite;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* ── 요일 칩 (form 전용) ── */
    .day-chip {
      flex: 1;
      text-align: center;
      padding: 10px 0;
      border-radius: 12px;
      font-size: 0.9rem;
      font-weight: 500;
      cursor: pointer;
      background: rgba(255,255,255,0.03);
      border: 1px solid var(--custom-border);
      transition: all 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);
      min-width: 0;
    }

    .day-chip:hover {
      background: rgba(255,255,255,0.08);
      transform: translateY(-2px);
    }

    .day-chip.selected {
      background: var(--custom-primary);
      color: var(--text-primary-color, #fff);
      border-color: var(--custom-primary);
      box-shadow: 0 4px 12px rgba(3, 169, 244, 0.3);
      transform: translateY(-2px);
    }

    /* '매일' 탭 전용 스타일 */
    .day-chip.everyday {
      flex: 1.4;
      font-size: 0.85rem;
      letter-spacing: 0.5px;
    }

    .day-chip.everyday.selected {
      background: linear-gradient(135deg, var(--custom-primary), #7c4dff);
      border-color: transparent;
    }

    /* ── 데이 에디터 (단일 컬럼) ── */
    .day-editor {
      margin-bottom: 16px;
      background: rgba(255,255,255,0.02);
      border-radius: 12px;
      padding: 12px 8px;
    }

    .day-editor-grid {
      display: flex;
      gap: 8px;
      height: 540px;
    }

    .hour-labels-col {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-shrink: 0;
      width: 24px;
      text-align: right;
      padding-right: 4px;
    }

    .hour-labels-col span {
      font-size: 0.7rem;
      color: var(--custom-secondary);
      opacity: 0.55;
      line-height: 1;
      transform: translateY(-50%);
    }

    .hour-labels-col span:first-child { transform: translateY(0); }
    .hour-labels-col span:last-child { transform: translateY(-100%); }

    .editor-column {
      position: relative;
      flex: 1;
      background: rgba(255,255,255,0.02);
      border-radius: 6px;
      border: 1px solid rgba(255,255,255,0.06);
      /* overflow: visible — 핸들·삭제 버튼·time pill은 의도적으로 블록 모서리
         바깥에 그려진다. hidden을 쓰면 모서리에서 잘려 사용자 메시지처럼
         "뱃지가 프레임보다 아래에 렌더링"되는 것처럼 보인다. 블록 자체는
         _yToMinutes()가 0–1440으로 클램프하므로 컬럼 밖으로 나갈 일 없음. */
      overflow: visible;
      cursor: crosshair;
      touch-action: none;
      user-select: none;
    }

    .hour-gridline {
      position: absolute;
      left: 0;
      right: 0;
      height: 1px;
      background: rgba(255,255,255,0.05);
      pointer-events: none;
    }

    /* .editor-block (rendered as <button>) — button reset folded into the
       main rule so a higher-specificity selector cannot strip the background. */
    .editor-block {
      appearance: none;
      -webkit-appearance: none;
      font: inherit;
      color: inherit;
      padding: 0;
      margin: 0;
      position: absolute;
      left: 4px;
      right: 4px;
      background: var(--custom-primary);
      border: none;
      border-radius: 4px;
      min-height: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      outline: none;
      -webkit-tap-highlight-color: transparent;
      transition: opacity 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;
      z-index: 1;
    }

    /* outline은 키보드 포커스(:focus-visible)에서만 그린다.
       마우스/터치로 활성화한 경우에는 outline none을 유지해 sticky focus가
       시각적으로 남지 않도록 한다. */
    .editor-block:focus-visible {
      outline: 2px solid #fff;
      outline-offset: 2px;
    }

    .editor-block:hover:not(.pending):not(.selected) {
      opacity: 0.9;
      box-shadow: 0 0 8px rgba(3, 169, 244, 0.5);
    }

    .editor-block.selected {
      background: rgba(13, 71, 161, 0.55);
      border: 1.5px solid var(--custom-primary);
      box-shadow: 0 0 10px rgba(3, 169, 244, 0.3);
      overflow: visible;
      z-index: 4;
    }

    .block-time-pill {
      position: absolute;
      top: -28px;
      left: 0;
      background: rgba(40, 40, 40, 0.95);
      color: #fff;
      font-size: 0.75rem;
      font-weight: 500;
      padding: 4px 10px;
      border-radius: 999px;
      white-space: nowrap;
      pointer-events: none;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      z-index: 100;
    }

    /* 블록이 timeline 위쪽에 있으면 pill을 블록 아래로 보낸다 (잘림 방지) */
    .block-time-pill.below {
      top: auto;
      bottom: -28px;
    }

    .block-handle {
      position: absolute;
      width: 14px;
      height: 14px;
      background: var(--custom-primary);
      border: 2px solid #fff;
      border-radius: 50%;
      box-shadow: 0 1px 3px rgba(0,0,0,0.4);
      touch-action: none;
      cursor: ns-resize;
      /* 핸들은 다른 요소보다 항상 위에 — 작은 블록에서 아래 블록과 겹쳐도 잡기 좋도록 */
      z-index: 1000;
      /* 양쪽 핸들 모두 가로 중앙 정렬 */
      left: calc(50% - 7px);
    }

    .block-handle::after {
      content: "";
      position: absolute;
      inset: -10px; /* 24x24 hit target */
    }

    .block-handle.handle-top    { top: -7px; }
    .block-handle.handle-bottom { bottom: -7px; }

    .block-delete {
      position: absolute;
      top: -10px;
      right: -10px;
      width: 22px;
      height: 22px;
      background: var(--custom-danger);
      color: #fff;
      border: 2px solid #fff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      padding: 0;
      font-size: 1rem;
      line-height: 1;
      font-weight: 700;
      box-shadow: 0 1px 3px rgba(0,0,0,0.4);
      z-index: 1000;
    }

    .block-delete:hover {
      background: #b71c1c;
    }

    .block-delete span {
      transform: translateY(-1px);
    }

    .editor-block.pending {
      background: linear-gradient(180deg, rgba(3, 169, 244, 0.7), rgba(3, 169, 244, 0.45));
      border: 1.5px dashed #ffffff66;
      z-index: 2;
    }

    .editor-block.dragging {
      border-style: solid;
    }

    .editor-block.conflict {
      background: linear-gradient(180deg, rgba(255, 82, 82, 0.7), rgba(255, 82, 82, 0.45));
      border-color: #ff5252;
    }

    .repeat-pill.conflict {
      opacity: 0.35;
      cursor: not-allowed;
      text-decoration: line-through;
    }

    .repeat-pill.conflict:hover {
      background: transparent;
    }

    .block-time-label {
      font-size: 0.75rem;
      font-weight: 600;
      color: #fff;
      text-shadow: 0 1px 2px rgba(0,0,0,0.4);
      pointer-events: none;
      padding: 0 6px;
      white-space: nowrap;
    }

    /* 현재 시각: 점이 아니라 컬럼 전체를 가로지르는 선 + 좌측 라벨 */
    .now-line {
      position: absolute;
      left: 0;
      right: 0;
      height: 0;
      border-top: 2px solid var(--custom-danger);
      pointer-events: none;
      z-index: 6;
    }
    .now-line::before {
      content: "";
      position: absolute;
      left: -4px;
      top: -5px;
      width: 8px;
      height: 8px;
      background: var(--custom-danger);
      border-radius: 50%;
    }
    .now-line-label {
      position: absolute;
      right: 4px;
      top: -10px;
      font-size: 0.65rem;
      color: var(--custom-danger);
      background: var(--custom-bg);
      padding: 0 4px;
      border-radius: 3px;
      font-weight: 600;
      line-height: 1;
    }

    .timeline-empty-hint {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--custom-secondary);
      font-size: 0.9rem;
      pointer-events: none;
      opacity: 0.7;
      padding: 0 12px;
      text-align: center;
    }

    /* ── 요일 스위처 (뷰 전환) ── */
    .day-switcher {
      display: flex;
      justify-content: space-around;
      gap: 4px;
      margin-bottom: 6px;
      padding: 0 4px;
    }

    /* .day-pill (rendered as <button>) — button reset inlined. */
    .day-pill {
      appearance: none;
      -webkit-appearance: none;
      font: inherit;
      flex: 1;
      text-align: center;
      padding: 10px 0;
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

    /* hover effect만 진짜 마우스 환경에서 적용. 모바일은 sticky hover로
       selected 상태가 흐린 hover background 에 가려지던 문제(특히 iOS)를 방지. */
    @media (hover: hover) {
      .day-pill:hover:not(:disabled):not(.selected) {
        background: rgba(255,255,255,0.04);
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

    .day-pill:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .active-days-help {
      font-size: 0.75rem;
      color: var(--custom-secondary);
      opacity: 0.75;
      text-align: center;
      padding: 0 8px 4px;
    }

    /* 인라인 토스트 (alert 대체) */
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
      animation: toastIn 0.2s ease;
      max-width: calc(100% - 32px);
    }

    @keyframes toastIn {
      from { opacity: 0; transform: translate(-50%, 8px); }
      to   { opacity: 1; transform: translate(-50%, 0); }
    }

    /* 인라인 confirm 다이얼로그 (browser confirm 대체) */
    .confirm-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1500;
      animation: fadeIn 0.15s ease;
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

    .confirm-title {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 8px;
    }

    .confirm-body {
      font-size: 0.9rem;
      color: var(--custom-secondary);
      line-height: 1.5;
      margin-bottom: 16px;
    }

    .confirm-actions {
      display: flex;
      gap: 8px;
      justify-content: flex-end;
    }

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
    .danger-btn:hover { filter: brightness(1.1); }

    /* ── 반복 섹션 (저장 전) ── */
    .empty-state {
      text-align: center;
      padding: 24px 0;
      color: var(--custom-secondary);
      font-size: 0.9rem;
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

    .ghost-btn:hover { background: rgba(255,255,255,0.04); }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .primary-btn {
      padding: 8px 16px;
      background: var(--custom-primary);
      color: var(--text-primary-color, #fff);
      border: none;
      border-radius: 8px;
      font-size: 0.9rem;
      font-weight: 500;
      cursor: pointer;
    }
  `;

  // HA 커스텀 카드 편집기 인스턴스 연동
  static getConfigElement() {
    return document.createElement("ha-custom-schedule-card-editor");
  }

  // 카드 피커에서 처음 배치될 때의 기본값 (type은 HA가 자동 추가하므로 포함 금지)
  static getStubConfig() {
    return {};
  }

  // masonry 뷰를 위한 기본 예상 카드 높이 (1단위 = 50px)
  getCardSize() {
    return this._config?.entity ? 5 : 7;
  }

  // sections 뷰를 위한 그리드 옵션 (세로 길이를 내용에 맞추기 위해 rows는 지정하지 않음)
  getGridOptions() {
    return {
      columns: 12,
      min_rows: 3,
    };
  }
}

// ---------------------------------------------------------
// Visual Editor 구현 영역
// ---------------------------------------------------------
customElements.define("ha-custom-schedule-card", HaCustomScheduleCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "ha-custom-schedule-card",
  name: LOCALES[detectLang()].cardName,
  preview: true,
  description: LOCALES[detectLang()].cardDescription,
  documentationURL: "https://github.com/jewon-oh/schedule-ui",
});
