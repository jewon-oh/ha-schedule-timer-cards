# HA Custom Schedule & Timer Cards

> Home Assistant `schedule`, `timer` 헬퍼를 시각적으로 관리하고, 헬퍼와 실제 기기를 연결하는 자동화 브릿지까지 한 번에 생성하는 Lovelace 커스텀 카드.

**Languages:** [English](README.md) · [한국어](README.ko.md)

[![HACS Custom](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://hacs.xyz/)
[![GitHub Release](https://img.shields.io/github/v/release/jewon-oh/schedule-ui?include_prereleases)](https://github.com/jewon-oh/schedule-ui/releases)
[![Validate](https://github.com/jewon-oh/schedule-ui/actions/workflows/validate.yml/badge.svg?branch=master)](https://github.com/jewon-oh/schedule-ui/actions/workflows/validate.yml)
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
- [개발](#개발)
- [기여](#기여)
- [라이선스](#라이선스)

## 주요 기능

- **스케쥴 자동 생성** — 카드 편집기에서 제어할 기기를 선택하면 Schedule 헬퍼와 켜짐/꺼짐 자동화가 자동으로 생성됩니다.
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
   https://github.com/jewon-oh/schedule-ui
   ```

3. 목록에서 `Custom Schedule Card`를 다운로드합니다.
4. 리소스 자동 추가 팝업이 뜨면 승인합니다.

### 수동 설치

1. `timer-schedule-card.js`를 `/config/www/`에 복사합니다.
2. **설정 → 대시보드 → 리소스**에서 `/local/timer-schedule-card.js`를 `JavaScript Module` 유형으로 추가합니다.

> **모바일/Companion 앱 캐시:** HA의 service worker가 새로고침 후에도 이전 번들을
> 그대로 들고 있는 경우가 있습니다. 리소스 URL 뒤에 `?v=1.4.2`처럼 쿼리스트링을
>달고 릴리스마다 숫자를 올리면 강제로 다시 받습니다.
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

| 카드          | 타입                              | 설명                                       |
|---------------|-----------------------------------|--------------------------------------------|
| Schedule Card | `custom:ha-custom-schedule-card`  | 세로 24시간 주간 타임라인, 요일 통합 제어  |
| Timer Card    | `custom:ha-custom-timer-card`     | 원형 프로그레스 바, 기기 오프 타이머       |

## 동작 원리

마법사로 생성된 자동화는 `config/automation/config/{schedule_bridge_ID}`에 저장됩니다.

```text
schedule.my_device ON  → 대상 기기 turn_on
schedule.my_device OFF → 대상 기기 turn_off
```

밝기, 색상, 온도 등 추가 조건이 필요하면 **설정 → 자동화**에서 생성된 자동화를 직접 수정합니다.

## 개발

의존성 설치 및 번들 빌드:

```bash
npm install
npm run build      # 루트 timer-schedule-card.js 생성
npm run watch      # 변경 시 자동 재빌드
```

Home Assistant 서버 없이 카드 UI만 확인하려면 `dev/` 폴더의 프리뷰 HTML을 사용합니다.

```bash
npm run dev        # 8080 포트 정적 서버 기동
# http://localhost:8080/dev/preview.html
# http://localhost:8080/dev/preview-timer.html
```

헤드리스 스모크 테스트 (두 프리뷰를 로드하고 카드 마운트 및 콘솔 에러 0 검증):

```bash
npm run smoke
```

### 로컬 Home Assistant 인스턴스 (실제 테스트 권장)

`dev/preview*.html`은 HA의 일부만 mock합니다. 실제 `schedule`/`timer` 헬퍼, 진짜
`hass.callWS` API, 카드 픽커, 비주얼 에디터, 자동 생성되는 자동화 브릿지까지 — HA
플러그인 개발자들이 보통 테스트하는 방식대로 검증하려면 Docker로 로컬 HA를 띄우세요.

```bash
npm run build       # timer-schedule-card.js 빌드 (HA 컨테이너에 volume mount됨)
npm run ha:up       # docker compose up -d; HA가 http://localhost:8123 에서 동작
npm run ha:logs     # HA 로그 실시간 확인
npm run ha:down     # 컨테이너 정지·삭제
```

첫 기동 체크리스트:

1. `http://localhost:8123` 접속 → onboarding 마법사 완료(계정 생성, 위치 등).
2. **설정 → 기기 & 서비스 → 헬퍼 → 헬퍼 만들기** 에서 `Schedule` 또는 `Timer` 헬퍼 생성.
3. 대시보드 편집 → **카드 추가** → *Schedule Card* / *Timer Card* 선택. ([ha-config/configuration.yaml](ha-config/configuration.yaml)의 `frontend.extra_module_url` 덕분에 Lovelace 리소스를 따로 등록하지 않아도 자동 로드됩니다.)
4. 코드 수정 후 `npm run build` 또는 `npm run watch` 실행 → 브라우저 강력 새로고침(Ctrl+F5)으로 새 번들 로드.

`ha-config/`는 `configuration.yaml`만 추적하고 나머지(HA DB, 인증정보 등)는 gitignore되므로
로컬 데이터가 저장소로 새지 않습니다.

스크린샷 재생성 (Playwright + 프리뷰 페이지):

```bash
npm run screenshot
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
