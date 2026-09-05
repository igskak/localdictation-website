import type { Locale } from "./locale";

/** The two languages the legal texts exist in. Russian and Ukrainian readers get the English set. */
export type LegalLocale = "de" | "en";

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
export function legalLocale(locale: Locale): LegalLocale {
  return locale === "de" ? "de" : "en";
}
