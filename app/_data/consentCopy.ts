import type { Locale } from "../_lib/locale";

export type ConsentCopy = {
  /** The banner itself. Two buttons, no dark pattern: refusing is one click, like accepting. */
  title: string;
  body: string;
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
    body: "Google Analytics und Google Ads verarbeiten dafür Daten, auch in den USA. Stimmst du zu, dürfen sie Cookies auf deinem Gerät speichern; lehnst du ab, wird nichts gespeichert und die Messung bleibt anonym. Was du in Witness diktierst, ist davon in keinem Fall berührt — das verlässt deinen Mac nicht.",
    accept: "Einverstanden",
    decline: "Ablehnen",
    privacyLink: "Was genau gemessen wird",
    reopen: "Cookie-Einstellungen",
    region: "Hinweis zu Cookies",
  },
  en: {
    title: "May we set cookies for measurement?",
    body: "Google Analytics and Google Ads process data for that, including in the United States. Agree and they may store cookies on your device; decline and nothing is stored and the measurement stays anonymous. What you dictate in Witness is untouched either way — it does not leave your Mac.",
    accept: "Agree",
    decline: "Decline",
    privacyLink: "What exactly is measured",
    reopen: "Cookie settings",
    region: "Cookie notice",
  },
  ru: {
    title: "Можно ставить cookies для измерений?",
    body: "Google Analytics и Google Ads обрабатывают для этого данные, в том числе в США. Согласие разрешает им хранить cookies на вашем устройстве; при отказе ничего не сохраняется, а измерение остаётся анонимным. То, что вы диктуете в Witness, это не затрагивает ни при каком выборе — оно не покидает ваш Mac.",
    accept: "Согласен",
    decline: "Отказаться",
    privacyLink: "Что именно измеряется",
    reopen: "Настройки cookies",
    region: "Уведомление о cookies",
  },
  uk: {
    title: "Можна ставити cookies для вимірювань?",
    body: "Google Analytics і Google Ads обробляють для цього дані, зокрема у США. Згода дозволяє їм зберігати cookies на вашому пристрої; за відмови нічого не зберігається, а вимірювання залишається анонімним. Те, що ви диктуєте у Witness, це не зачіпає за жодного вибору — воно не залишає ваш Mac.",
    accept: "Погоджуюсь",
    decline: "Відмовитись",
    privacyLink: "Що саме вимірюється",
    reopen: "Налаштування cookies",
    region: "Повідомлення про cookies",
  },
};
