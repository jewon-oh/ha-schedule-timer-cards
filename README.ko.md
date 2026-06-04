# HA Custom Schedule & Timer Cards

> Home Assistant `schedule`, `timer` 헬퍼를 시각적으로 관리하고, 헬퍼와 실제 기기를 연결하는 자동화 브릿지까지 한 번에 생성하는 Lovelace 커스텀 카드.

**Languages:** [English](README.md) · [한국어](README.ko.md)

[![HACS Custom](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://hacs.xyz/)
[![GitHub Release](https://img.shields.io/github/v/release/jewon-oh/ha-schedule-timer-cards?include_prereleases)](https://github.com/jewon-oh/ha-schedule-timer-cards/releases)
[![Validate](https://github.com/jewon-oh/ha-schedule-timer-cards/actions/workflows/validate.yml/badge.svg?branch=master)](https://github.com/jewon-oh/ha-schedule-timer-cards/actions/workflows/validate.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#라이선스)

단일 JS 파일로 동작하며, Home Assistant 언어 설정에 따라 한국어/영어 UI가 자동 전환됩니다.

## 스크린샷

![Schedule + Timer 카드를 Home Assistant 대시보드에서](assets/dashboard.png)

## 목차

- [주요 기능](#주요-기능)
- [설치](#설치)
- [사용 방법](#사용-방법)
- [설정](#설정)
- [동작 원리](#동작-원리)
- [문제 해결](#문제-해결)
- [개발](#개발)
- [기여](#기여)
- [라이선스](#라이선스)

## 주요 기능

- **스케쥴 자동 생성** — 카드 편집기에서 제어할 기기를 선택하면 Schedule 헬퍼와 켜짐/꺼짐 자동화가 자동으로 생성됩니다.
- **켜기 / 끄기 예약** — 지정한 요일·시각마다 기기를 켜거나 끄는 전용 카드 (시각 + 요일 선택기 제공).
- **방향 선택 타이머** — 타이머 카드 상단에 켜기/끄기 라디오를 두어, 기기의 현재 상태와 반대로 기본 선택(켜짐 → 끄기, 꺼짐 → 켜기)되고 선택한 방향으로 종료 시 동작합니다.
- **단일 파일 구조** — `timer-schedule-card.js` 한 개로 설치되며, HACS 커스텀 저장소를 지원합니다.
- **24시간 주간 타임라인** — 요일별 시간 블록을 세로 타임라인(열 = 요일, 축 = 0~24시)으로 표시하고 현재 시각선을 그립니다.
- **매일 통합 탭** — 7개 요일의 공통 시간 블록을 교집합으로 모아 한 번에 추가/삭제합니다.
- **HA Sections 레이아웃 호환** — 디스플레이 크기에 맞춰 카드 높이가 자동 조정됩니다.
- **다크/라이트 테마 대응** — 글래스모피즘 스타일로 양쪽 테마에 모두 적용됩니다.

## 설치

### HACS (권장)

1. HACS → 우측 상단 **사용자 지정 저장소(Custom repositories)** 선택
2. 저장소 URL 입력:

   ```text
   https://github.com/jewon-oh/ha-schedule-timer-cards
   ```

3. 목록에서 `Custom Schedule Card`를 다운로드합니다.
4. 리소스 자동 추가 팝업이 뜨면 승인합니다.

### 수동 설치

1. `timer-schedule-card.js`를 `/config/www/`에 복사합니다.
2. **설정 → 대시보드 → 리소스**에서 `/local/timer-schedule-card.js`를 `JavaScript Module` 유형으로 추가합니다.

> **모바일/Companion 앱 캐시:** HA의 service worker가 새로고침 후에도 이전 번들을
> 그대로 들고 있는 경우가 있습니다. 리소스 URL 뒤에 `?v=1.6.0`처럼 쿼리스트링을
> 달고 릴리스마다 값을 올리면 강제로 다시 받습니다. 업데이트 직후 카드가 사라지면
> 아래 [문제 해결](#문제-해결)을 참고하세요.
>
> **권한:** **자동 생성 마법사**는 관리자 전용 HA API
> (`schedule/create`, `timer/create`, `config/automation/config/*`)를 호출합니다.
> 일반 사용자에게는 마법사가 숨겨지고, 기존 헬퍼 선택만 가능합니다. 관리자가
> 헬퍼를 먼저 만들고 대시보드를 공유하세요.

## 사용 방법

### 1. 마법사로 자동 생성

1. 대시보드 편집 모드에서 `Custom Schedule Card` 또는 `Custom Timer Card`를 추가합니다.
2. 카드 편집기 하단의 **[ 대상 기기 선택 ]** 드롭다운을 클릭합니다.
3. 자동으로 켜고 끌 기기를 선택합니다. (종료 시 동작도 지정 가능)
4. 헬퍼와 브릿지 자동화가 즉시 생성됩니다.
5. 저장 후 뷰어 화면에서 시간 블록을 추가하면 기기가 연동됩니다.

### 2. 기존 헬퍼 직접 연결

이미 등록된 스케쥴/타이머 헬퍼가 있다면, 카드 에디터의 엔티티 선택에서 직접 지정합니다.

## 설정

```yaml
type: custom:ha-custom-schedule-card
entity: schedule.livingroom_light      # 스케쥴 엔티티 ID (필수)
title: 거실 전등 일정                  # 카드 제목 (선택)
```

| 옵션     | 필수 | 설명                                                  |
| -------- | ---- | ----------------------------------------------------- |
| `entity` | O    | 스케쥴 헬퍼 엔티티 ID. `schedule.*` 도메인만 지원.    |
| `title`  | X    | 카드 상단 제목. 미입력 시 스케쥴 기본 이름 사용.      |

### 제공 카드 종류

| 카드                   | 타입                              | 설명                                                  |
|------------------------|-----------------------------------|-------------------------------------------------------|
| Schedule Card          | `custom:ha-custom-schedule-card`  | 세로 24시간 주간 타임라인, 요일 통합 제어             |
| Timer Card             | `custom:ha-custom-timer-card`     | 카운트다운 타이머, 켜기/끄기 방향 선택(기본값=기기 상태) |
| Turn-On Schedule Card  | `custom:ha-custom-turn-on-card`   | 시각 + 요일 선택기, 지정 시각마다 기기 **켜기**       |
| Turn-Off Schedule Card | `custom:ha-custom-turn-off-card`  | 시각 + 요일 선택기, 지정 시각마다 기기 **끄기**       |

## 동작 원리

스케쥴·켜기·끄기 카드는 **기기당 자동화 하나**(*통합 브릿지*)를 공유합니다.
`config/automation/config/sui_bridge_<기기>` 에 저장됩니다 (예:
`switch.living_room` → `sui_bridge_switch_living_room`). 각 카드는 트리거 `id`로
구분되는 **자기 슬라이스만** 편집합니다:

```text
sui_sched_on / sui_sched_off / sui_sync   → 스케쥴 헬퍼 on/off (+ HA 재시작 재동기화)
sui_on   → 켜기 시각 (요일별)
sui_off  → 끄기 시각 (요일별)
```

단일 `choose` 액션이 기기를 켜거나 끄며, 요일 조건은 각자의 시각 슬라이스에만
적용됩니다. 전체 형태는 [examples/unified-bridge.yaml](examples/unified-bridge.yaml)을
참고하세요. 밝기·색상·온도 등 추가 조정이 필요하면 **설정 → 자동화**에서 생성된
자동화를 직접 수정합니다.

> **마이그레이션:** 기존에 따로 만들어진 자동화는 그대로 동작합니다. 어떤 기기에
> 마법사를 다시 실행하면 통합 브릿지로 업그레이드됩니다: 스케쥴 마법사는 그 기기의
> 기존 자동 생성 blueprint 브릿지를 제거하고, 켜기/끄기 마법사는 그 기기의 기존
> 자동 생성 단독 켜기/끄기 자동화를 통합 브릿지로 이관(시각·요일 보존)한 뒤
> 제거합니다 — 이중 구동이 없습니다. 단, 직접 수정한 자동화(추가 조건, 동적/엔티티
> 시각, 밝기 data, 다중 대상, 비활성 규칙 등)는 "우리가 만든 형태가 아님"으로
> 인식되어 **건드리지 않고 보존**하며, 남은 항목은 안내로 표시됩니다.

## 문제 해결

### 업데이트 후 "Custom element doesn't exist: ha-custom-turn-on-card" / "구성 오류"

네 종류의 카드(`schedule`, `timer`, `turn-on`, `turn-off`)는 모두 **하나의** 파일
`timer-schedule-card.js`로 배포됩니다. 새 릴리스에서 카드(custom element)가 추가되면,
HA의 service worker(와 Companion 앱 WebView)가 **같은 URL**의 이전 번들을 캐시에서
계속 제공하기 때문에 새 element를 찾지 못하고 *"Custom element doesn't exist"* 또는
*구성 오류* 카드가 표시됩니다. 기존 카드와 다른 제작자의 카드는 정상 동작하며, 방금
추가된 element만 나타나지 않습니다.

**해결 방법 (수동 설치):**

1. **리소스 버전 올리기.** **설정 → 대시보드 → 리소스**에서 `timer-schedule-card.js`
   항목을 편집해 쿼리스트링을 새 릴리스 버전으로 변경합니다. 예:
   `/local/timer-schedule-card.js?v=1.6.0`. `?v=` 값은 *바뀌기만* 하면 되지만,
   릴리스 버전과 맞추면 관리하기 편합니다.
2. **Home Assistant 재시작** (또는 대시보드 새로고침) — 새 리소스 URL이 적용됩니다.
3. **브라우저 강력 새로고침** — `Ctrl`+`F5` / `Ctrl`+`Shift`+`R` (Windows/Linux),
   `Cmd`+`Shift`+`R` (macOS).
4. **Companion 앱 프런트엔드 캐시 초기화** — 모바일/데스크톱 앱을 쓴다면 위의 강력
   새로고침으로는 앱 WebView 캐시까지 비워지지 않으므로 따로 초기화해야 합니다.
   - **iOS:** App Settings → Companion App → Debug → **Reset frontend cache**.
   - **Android:** 설정 → Companion App → Troubleshooting → **Reset frontend cache**.
   - **macOS:** 메뉴 막대 아이콘 → Preferences → Debugging → **Reset frontend cache**.
5. **로드된 버전 확인.** 브라우저 개발자 콘솔(또는 앱 디버그 로그)을 열어 배너가 새
   버전을 표시하는지 확인합니다.

   ```text
   [schedule-ui] v1.6.0 loaded
   ```

   배너가 여전히 이전 버전이면 캐시가 남아 있는 것이니 캐시 초기화를 다시 진행하세요.
   배너가 방금 설치한 릴리스와 일치하면 새 카드 타입이 정상 인식됩니다.

> **HACS 설치는 자동으로 보호됩니다 — `?v=` 변경 불필요.** HACS는 리소스를
> `/hacsfiles/ha-schedule-timer-cards/timer-schedule-card.js?hacstag=…`
> 형태로 등록합니다 (`hacstag`는 설치된 버전에 따라 바뀌는 숫자 캐시버스터이며,
> *콘텐츠 해시가 아닙니다*). 버전이 바뀌면 이 태그도 바뀌므로 **HACS 업데이트마다 리소스
> URL이 자동으로 다시 쓰여**, 브라우저가 완전히 새로운 URL을 보고 강제로 다시
> 받습니다. 따라서 HACS 사용자는 3~4단계(강력 새로고침 / Companion 프런트엔드
> 캐시 초기화)만 하면 되고 1단계는 건너뛰면 됩니다. 단, 이 자동 갱신은
> **storage 모드** Lovelace에서만 동작합니다. **YAML 모드** Lovelace를 쓴다면
> HACS가 리소스를 관리하지 못하므로, 수동 설치와 동일하게 `/hacsfiles/...` URL의
> 버전을 직접 올려야 합니다.

## 개발

의존성 설치 및 번들 빌드:

이 프로젝트는 [pnpm](https://pnpm.io/)을 사용합니다. `package.json`의 `packageManager` 필드에 버전이 박혀 있으니 `corepack enable`만 해두면 자동으로 잡힙니다.

```bash
pnpm install
pnpm run build      # 루트 timer-schedule-card.js 생성
pnpm run watch      # 변경 시 자동 재빌드
```

Home Assistant 서버 없이 카드 UI만 확인하려면 `dev/` 폴더의 프리뷰 HTML을 사용합니다.

```bash
pnpm run dev        # 8080 포트 정적 서버 기동
# http://localhost:8080/dev/preview.html
# http://localhost:8080/dev/preview-timer.html
```

헤드리스 스모크 테스트 (두 프리뷰를 로드하고 카드 마운트 및 콘솔 에러 0 검증):

```bash
pnpm run smoke
```

### 로컬 Home Assistant 인스턴스 (실제 테스트 권장)

`dev/preview*.html`은 HA의 일부만 mock합니다. 실제 `schedule`/`timer` 헬퍼, 진짜
`hass.callWS` API, 카드 픽커, 비주얼 에디터, 자동 생성되는 자동화 브릿지까지 — HA
플러그인 개발자들이 보통 테스트하는 방식대로 검증하려면 Docker로 로컬 HA를 띄우세요.

```bash
pnpm run build      # timer-schedule-card.js 빌드 (HA 컨테이너에 volume mount됨)
pnpm run ha:up      # docker compose up -d; HA가 http://localhost:8123 에서 동작
pnpm run ha:logs    # HA 로그 실시간 확인
pnpm run ha:down    # 컨테이너 정지·삭제
```

첫 기동 체크리스트:

1. `http://localhost:8123` 접속 → onboarding 마법사 완료(계정 생성, 위치 등).
2. **설정 → 기기 & 서비스 → 헬퍼 → 헬퍼 만들기** 에서 `Schedule` 또는 `Timer` 헬퍼 생성.
3. 대시보드 편집 → **카드 추가** → *Schedule Card* / *Timer Card* 선택. ([ha-config/configuration.yaml](ha-config/configuration.yaml)의 `frontend.extra_module_url` 덕분에 Lovelace 리소스를 따로 등록하지 않아도 자동 로드됩니다.)
4. 코드 수정 후 `pnpm run build` 또는 `pnpm run watch` 실행 → 브라우저 강력 새로고침(Ctrl+F5)으로 새 번들 로드.

`ha-config/`는 `configuration.yaml`만 추적하고 나머지(HA DB, 인증정보 등)는 gitignore되므로
로컬 데이터가 저장소로 새지 않습니다.

스크린샷 재생성 (Playwright + 프리뷰 페이지):

```bash
pnpm run screenshot
```

프로젝트 구조:

```text
src/        TypeScript 소스 (빌드되어 루트 timer-schedule-card.js 생성)
dev/        브라우저 프리뷰 HTML (오프라인 UI 검증용)
scripts/    Node 헬퍼 (스크린샷 생성 등)
assets/     README 스크린샷
examples/   YAML 자동화 블루프린트
```

## 기여

이슈 제보와 PR은 환영합니다. 큰 변경은 사전에 이슈로 논의해주세요.

1. 저장소 Fork
2. 기능 브랜치 생성 (`git checkout -b feat/my-feature`)
3. 변경 사항 커밋
4. Push 후 Pull Request 생성

## 라이선스

이 프로젝트는 [MIT License](LICENSE) 하에 배포됩니다.
