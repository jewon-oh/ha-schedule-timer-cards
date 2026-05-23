export { LOCALES, type ScheduleLang, type ScheduleLocale } from "./schedule.js";
export { TIMER_LOCALES, type TimerLang, type TimerLocale } from "./timer.js";

export function detectLang(): "ko" | "en" {
  const lang = (typeof navigator !== "undefined" && navigator.language) || "en";
  return lang.startsWith("ko") ? "ko" : "en";
}
