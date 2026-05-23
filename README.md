# HA Custom Schedule & Timer Cards

Home Assistant의 `schedule`, `timer` 헬퍼를 시각적으로 관리하고, 기기 연결 자동화(Bridge)까지 한 번에 생성하는 커스텀 카드입니다.

단일 파일로 구성되어 있으며, Home Assistant의 언어 설정에 따라 한국어와 영어가 자동 전환됩니다.

## 주요 기능

- **스케쥴 자동 생성** — 카드 편집기에서 제어할 기기를 선택하면 Schedule 헬퍼와 켜짐/꺼짐 자동화가 자동으로 생성됩니다.
- **단일 파일 구조** — `timer-schedule-card.js` 한 개로 설치되며, HACS 커스텀 저장소를 지원합니다.
- **24시간 주간 타임라인** — 요일별 시간 블록을 세로 타임라인(열 = 요일, 축 = 0~24시)으로 표시하고 현재 시각선을 그립니다.
- **매일 통합 탭** — 7개 요일의 공통 시간 블록을 교집합으로 모아 한 번에 추가/삭제합니다.
- **HA Sections 레이아웃 호환** — 디스플레이 크기에 맞춰 카드 높이가 자동 조정됩니다.
- **다크/라이트 테마 대응** — 글래스모피즘 스타일로 양쪽 테마에 모두 적용됩니다.

<div align="center">
  <img src="assets/preview.png" alt="스케쥴 카드 미리보기" width="45%" style="margin-right: 4%;" />
  <img src="assets/preview-timer.png" alt="타이머 카드 미리보기" width="45%" />
</div>

---

## 설치

### HACS (권장)

1. HACS 메뉴 → 우측 상단 **사용자 지정 저장소(Custom repositories)** 선택
2. 저장소 URL 입력:

   ```text
   https://github.com/jewon-oh/schedule-ui
   ```
3. 목록에서 `Custom Schedule Card`를 다운로드합니다.
4. 리소스 자동 추가 팝업이 뜨면 승인합니다.

### 수동 설치

1. `timer-schedule-card.js`를 `/config/www/`에 복사합니다.
2. **설정 → 대시보드 → 리소스**에서 `/local/timer-schedule-card.js`를 `JavaScript Module` 유형으로 추가합니다.

---

## 사용 방법

### 1. 마법사로 자동 생성 (권장)

1. 대시보드 편집 모드에서 `Custom Schedule Card` 또는 `Custom Timer Card`를 추가합니다.
2. 카드 편집기 하단의 **[ 대상 기기 선택 ]** 드롭다운을 클릭합니다.
3. 자동으로 켜고 끌 기기를 선택합니다. (종료 시 동작도 지정 가능)
4. 헬퍼와 브릿지 자동화가 즉시 생성됩니다.
5. 저장 후 뷰어 화면에서 시간 블록을 추가하면 기기가 연동됩니다.

### 2. 기존 헬퍼 직접 연결

이미 등록된 스케쥴/타이머 헬퍼가 있다면, 카드 에디터의 엔티티 선택에서 직접 지정합니다.

---

## 구성 요소

1. **스케쥴 카드** — 세로 24시간 주간 타임라인, 요일 통합 제어
2. **타이머 카드** — 원형 프로그레스 바, 기기 오프 타이머

두 카드 모두 `/local/timer-schedule-card.js` 한 파일에 포함되어 있습니다.

---

## YAML 설정

```yaml
type: custom:ha-custom-schedule-card
entity: schedule.livingroom_light      # 스케쥴 엔티티 ID (필수)
title: 거실 전등 일정                  # 카드 제목 (선택)
```

| 옵션       | 필수 | 설명                                  |
|----------|----|---------------------------------------|
| `entity` | O  | 스케쥴 헬퍼의 엔티티 ID. `schedule.*` 도메인만 지원. |
| `title`  | X  | 카드 상단 제목. 미입력 시 스케쥴 기본 이름 사용.         |

---

## 자동화 브릿지 동작

마법사로 생성된 자동화는 `config/automation/config/{schedule_bridge_ID}`에 저장됩니다.

```text
schedule.my_device ON  → 대상 기기 turn_on
schedule.my_device OFF → 대상 기기 turn_off
```

밝기, 색상, 온도 등 추가 조건이 필요하면 **설정 → 자동화**에서 생성된 자동화를 직접 수정합니다.

---

## 로컬 미리보기 (개발용)

HA 서버 없이 UI만 확인하려면 포함된 `preview.html`을 사용합니다.

```bash
python -m http.server 8080
# http://localhost:8080/preview.html
```
