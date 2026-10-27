import type { PageLocale } from "./locale";

/** Languages with legal-document routes. Only counsel-approved sets may be selected by a checkout. */
export type LegalLocale = "de" | "en" | "es" | "it" | "fr";

export const legalPages = ["terms", "withdrawal", "privacy", "imprint", "licences"] as const;
export type LegalPage = (typeof legalPages)[number];

/**
 * Where each document lives, in each language.
 *
 * German keeps the German route names it was launched with — `/agb` and
 * `/widerruf` are printed inside the app and inside the licence mails, and a
 * tidier path would be a broken link in software already on somebody's Mac.
 */
export const legalPaths: Record<LegalLocale, Record<LegalPage, string>> = {
  de: {
    terms: "/agb",
    withdrawal: "/widerruf",
    privacy: "/datenschutz",
    imprint: "/impressum",
    licences: "/lizenzen",
  },
  en: {
    terms: "/en/terms",
    withdrawal: "/en/cancellation",
    privacy: "/en/privacy",
    imprint: "/en/legal-notice",
    licences: "/en/licences",
  },
  es: {
    terms: "/es/condiciones",
    withdrawal: "/es/desistimiento",
    privacy: "/es/privacidad",
    imprint: "/es/aviso-legal",
    licences: "/es/licencias",
  },
  it: {
    terms: "/it/condizioni",
    withdrawal: "/it/recesso",
    privacy: "/it/privacy",
    imprint: "/it/note-legali",
    licences: "/it/licenze",
  },
  fr: {
    terms: "/fr/conditions",
    withdrawal: "/fr/retractation",
    privacy: "/fr/confidentialite",
    imprint: "/fr/mentions-legales",
    licences: "/fr/licences",
  },
};

/**
 * Which set a reader of this locale is offered.
 *
 * German for the German site; English for everybody else. Russian and
 * Ukrainian have no set of their own, and English is the language those two
 * locales already lead with as their second one — sending them to a German
 * withdrawal instruction they cannot read would be worse than a translation
 * that is honest about being one.
 */
export function legalLocale(locale: PageLocale): LegalLocale {
  return locale === "de" ? "de" : "en";
}
