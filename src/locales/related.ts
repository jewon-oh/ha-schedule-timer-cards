// Related-automations card translations.
// The card lists every automation that references a given entity, using
// Home Assistant's own `search/related` websocket command, and links each
// row through to the automation editor.
export const RELATED_LOCALES = {
  ko: {
    cardName: "연결된 자동화 카드",
    cardDescription: "이 기기를 참조하는 자동화를 모두 찾아 보여주고, 편집 화면으로 이동합니다.",
    title: "연결된 자동화",
    notConfigured: "카드가 구성되지 않았습니다. 기기를 선택하세요.",
    loading: "불러오는 중...",
    none: "이 기기를 참조하는 자동화가 없습니다.",
    lookupFailed: "자동화 조회에 실패했습니다.",
    refresh: "새로고침",
    edit: "편집",
    enabled: "사용 중",
    disabled: "사용 안 함",
    neverRun: "실행 기록 없음",
    lastRun: "마지막 실행",
    justNow: "방금 전",
    minutesAgo: "분 전",
    hoursAgo: "시간 전",
    daysAgo: "일 전",
    countSuffix: "개",
    noEditId: "이 자동화는 UI에서 편집할 수 없습니다 (YAML 자동화).",
  },
  en: {
    cardName: "Related Automations Card",
    cardDescription: "Finds every automation referencing this device and links to its editor.",
    title: "Related automations",
    notConfigured: "Card is not configured. Pick an entity.",
    loading: "Loading...",
    none: "No automations reference this device.",
    lookupFailed: "Failed to look up automations.",
    refresh: "Refresh",
    edit: "Edit",
    enabled: "Enabled",
    disabled: "Disabled",
    neverRun: "Never run",
    lastRun: "Last run",
    justNow: "just now",
    minutesAgo: "m ago",
    hoursAgo: "h ago",
    daysAgo: "d ago",
    countSuffix: "",
    noEditId: "This automation cannot be edited from the UI (YAML automation).",
  },
} as const;

export type RelatedLang = keyof typeof RELATED_LOCALES;
export type RelatedLocale = (typeof RELATED_LOCALES)[RelatedLang];
