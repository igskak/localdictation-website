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
    title: "Witness — Spracherkennung für den Mac, ohne Cloud",
    description: "Sprache zu Text am Mac: lokale Diktier-App für Apple Silicon. Deutsch und Englisch mischen, unsichere Stellen prüfen, Text direkt am Cursor einsetzen.",
    imageAlt: "Witness zeigt einen markierten Betrag vor dem Einfügen",
  },
  en: {
    title: "Witness — Speech to text for Mac, private and offline",
    description: "Voice to text for Apple silicon Macs, processed on the device. Mix English and German, review uncertain passages, and insert text at your cursor.",
    imageAlt: "Witness highlights an amount for review before insertion",
  },
  ru: {
    title: "Witness — диктовка без передачи твоих данных",
    description: "Локальная диктовка для Mac на Apple Silicon. Мешай русский с английским, проверяй неуверенные места и вставляй готовый текст прямо под курсор.",
    imageAlt: "Witness подсвечивает сумму для проверки до вставки",
  },
  uk: {
    title: "Witness — диктування без передавання твоїх даних",
    description: "Локальне диктування для Mac на Apple Silicon. Змішуй українську з англійською, перевіряй непевні місця та вставляй готовий текст просто під курсор.",
    imageAlt: "Witness підсвічує суму для перевірки до вставлення",
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
