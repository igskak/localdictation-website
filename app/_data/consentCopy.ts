import type { Locale } from "../_lib/locale";

export type ConsentCopy = {
  /** The banner itself. Two buttons, no dark pattern: refusing is one click, like accepting. */
  title: string;
  /** Takes the products actually loaded, so the box never names one that is switched off. */
  body: (tools: string) => string;
  tools: { both: string; analytics: string; ads: string };
  accept: string;
  decline: string;
  privacyLink: string;
  /** The footer entry that reopens the choice, because a consent that cannot be withdrawn is not one. */
  reopen: string;
  region: string;
};

/**
 * The banner says what is actually loaded and, in one line, what is not
 * touched by it. Naming the app in the same breath is not marketing: a reader
 * who just read "nothing leaves your Mac" on the page above deserves to be
 * told which of the two statements this box is about.
 */
export const consentCopy: Record<Locale, ConsentCopy> = {
  de: {
    title: "Dürfen wir Cookies für die Messung setzen?",
    body: (tools) => `Dafür werden Daten von ${tools} verarbeitet, auch in den USA. Stimmst du zu, dürfen Cookies auf deinem Gerät gespeichert werden; lehnst du ab, wird nichts gespeichert und die Messung bleibt anonym. Was du in Witness diktierst, ist davon in keinem Fall berührt — das verlässt deinen Mac nicht.`,
    tools: { both: "Google Analytics und Google Ads", analytics: "Google Analytics", ads: "Google Ads" },
    accept: "Einverstanden",
    decline: "Ablehnen",
    privacyLink: "Was genau gemessen wird",
    reopen: "Cookie-Einstellungen",
    region: "Hinweis zu Cookies",
  },
  en: {
    title: "May we set cookies for measurement?",
    body: (tools) => `Data is processed for that by ${tools}, including in the United States. Agree and cookies may be stored on your device; decline and nothing is stored and the measurement stays anonymous. What you dictate in Witness is untouched either way — it does not leave your Mac.`,
    tools: { both: "Google Analytics and Google Ads", analytics: "Google Analytics", ads: "Google Ads" },
    accept: "Agree",
    decline: "Decline",
    privacyLink: "What exactly is measured",
    reopen: "Cookie settings",
    region: "Cookie notice",
  },
  ru: {
    title: "Можно ставить cookies для измерений?",
    body: (tools) => `Для этого данные обрабатываются сервисами ${tools}, в том числе в США. Согласие разрешает хранить cookies на вашем устройстве; при отказе ничего не сохраняется, а измерение остаётся анонимным. То, что вы диктуете в Witness, это не затрагивает ни при каком выборе — оно не покидает ваш Mac.`,
    tools: { both: "Google Analytics и Google Ads", analytics: "Google Analytics", ads: "Google Ads" },
    accept: "Согласен",
    decline: "Отказаться",
    privacyLink: "Что именно измеряется",
    reopen: "Настройки cookies",
    region: "Уведомление о cookies",
  },
  uk: {
    title: "Можна ставити cookies для вимірювань?",
    body: (tools) => `Для цього дані обробляються сервісами ${tools}, зокрема у США. Згода дозволяє зберігати cookies на вашому пристрої; за відмови нічого не зберігається, а вимірювання залишається анонімним. Те, що ви диктуєте у Witness, це не зачіпає за жодного вибору — воно не залишає ваш Mac.`,
    tools: { both: "Google Analytics і Google Ads", analytics: "Google Analytics", ads: "Google Ads" },
    accept: "Погоджуюсь",
    decline: "Відмовитись",
    privacyLink: "Що саме вимірюється",
    reopen: "Налаштування cookies",
    region: "Повідомлення про cookies",
  },
};
