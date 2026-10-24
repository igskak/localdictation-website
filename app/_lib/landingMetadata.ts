import type { Metadata } from "next";
import { alternateLanguages, localeHome, openGraphLocales, type Locale } from "./locale";
import { requestOrigin } from "./requestOrigin";

// The German and English titles name what the paid campaign buys:
// `spracherkennung` and `sprache zu text`, `speech to text` and `voice to text`
// (docs/GTM.md). Part of how Google rates a landing page is whether it talks
// about the search that brought the reader. On 2026-09-16 it rated this page
// "below average" for all five keywords, and the English page never said
// "voice to text" at all. Russian and Ukrainian are not advertised and keep
// their own lines.
const meta: Record<Locale, { title: string; description: string; imageAlt: string }> = {
  de: {
    title: "Witness: Spracherkennung für den Mac, ohne Cloud",
    description: "Sprache zu Text am Mac: lokale Diktier-App für Apple Silicon. Deutsch und Englisch mischen, Text sofort am Cursor, unsichere Stellen werden markiert.",
    imageAlt: "Witness markiert einen Betrag im eingefügten Text",
  },
  en: {
    title: "Witness: Speech to text for Mac, private and offline",
    description: "Voice to text for Apple silicon Macs, processed on the device. Mix English and German, get text at your cursor at once, with uncertain passages marked.",
    imageAlt: "Witness flags an amount in the inserted text",
  },
  ru: {
    title: "Witness: диктовка без передачи твоих данных",
    description: "Локальная диктовка для Mac на Apple Silicon. Мешай русский с английским: текст сразу встаёт под курсор, а неуверенные места Witness отметит.",
    imageAlt: "Witness отмечает сумму во вставленном тексте",
  },
  uk: {
    title: "Witness: диктування без передавання твоїх даних",
    description: "Локальне диктування для Mac на Apple Silicon. Змішуй українську з англійською: текст одразу з'являється під курсором, а непевні місця Witness позначить.",
    imageAlt: "Witness позначає суму у вставленому тексті",
  },
};

export async function landingMetadata(locale: Locale): Promise<Metadata> {
  const origin = await requestOrigin();
  const { title, description, imageAlt } = meta[locale];
  const path = localeHome(locale);
  const image = new URL("/og.png", origin).toString();
  return {
    metadataBase: origin,
    title,
    description,
    alternates: { canonical: path, languages: alternateLanguages },
    openGraph: {
      type: "website",
      locale: openGraphLocales[locale],
      url: path === "/" ? origin : new URL(path, origin),
      siteName: "Witness",
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
