export type Locale = "de" | "en" | "ru" | "uk";

export const locales: Locale[] = ["de", "en", "ru", "uk"];

const homePaths: Record<Locale, string> = { de: "/", en: "/en", ru: "/ru", uk: "/uk" };

export const localeLabels: Record<Locale, string> = { de: "DE", en: "EN", ru: "RU", uk: "UK" };

export const openGraphLocales: Record<Locale, string> = { de: "de_DE", en: "en_GB", ru: "ru_RU", uk: "uk_UA" };

/** Alternates for hreflang. German stays x-default: paid search and the legal pages are German-first. */
export const alternateLanguages: Record<string, string> = {
  de: "/",
  en: "/en",
  ru: "/ru",
  uk: "/uk",
  "x-default": "/",
};

export function parseLocale(value: string | null | undefined): Locale {
  return locales.includes(value as Locale) ? (value as Locale) : "de";
}

export function localeHome(locale: Locale): string {
  return homePaths[locale];
}

/** Query suffix that carries the locale to /danke and /download. German is the default and stays clean. */
export function localeQuery(locale: Locale): string {
  return locale === "de" ? "" : `lang=${locale}`;
}
