import type { Metadata } from "next";
import { alternateLanguages, localeHome, openGraphLocales, type Locale } from "./locale";
import { requestOrigin } from "./requestOrigin";

const meta: Record<Locale, { title: string; description: string; imageAlt: string }> = {
  de: {
    title: "LocalDictation — Diktieren, ohne deine Daten zu teilen",
    description: "Lokale Diktier-App für Apple Silicon. Deutsch und Englisch mischen, unsichere Stellen prüfen und Text direkt am Cursor einsetzen.",
    imageAlt: "LocalDictation zeigt einen markierten Betrag vor dem Einfügen",
  },
  en: {
    title: "LocalDictation — Dictate without sharing your data",
    description: "Private dictation for Apple silicon. Mix English and German, review uncertain passages, and insert text at your cursor.",
    imageAlt: "LocalDictation highlights an amount for review before insertion",
  },
  ru: {
    title: "LocalDictation — диктовка без передачи твоих данных",
    description: "Локальная диктовка для Mac на Apple Silicon. Мешай русский с английским, проверяй неуверенные места и вставляй готовый текст прямо под курсор.",
    imageAlt: "LocalDictation подсвечивает сумму для проверки до вставки",
  },
  uk: {
    title: "LocalDictation — диктування без передавання твоїх даних",
    description: "Локальне диктування для Mac на Apple Silicon. Змішуй українську з англійською, перевіряй непевні місця та вставляй готовий текст просто під курсор.",
    imageAlt: "LocalDictation підсвічує суму для перевірки до вставлення",
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
      siteName: "LocalDictation",
      title,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
