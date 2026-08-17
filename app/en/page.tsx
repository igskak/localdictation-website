import type { Metadata } from "next";
import { LandingPage } from "../_components/LandingPage";
import { requestOrigin } from "../_lib/requestOrigin";

export async function generateMetadata(): Promise<Metadata> {
  const origin = await requestOrigin();
  const title = "LocalDictation — Dictate without sharing your data";
  const description = "Private dictation for Apple silicon. Mix English and German, review uncertain passages, and insert text at your cursor.";
  const image = new URL("/og.png", origin).toString();
  return {
    metadataBase: origin,
    title,
    description,
    alternates: { canonical: "/en", languages: { de: "/", en: "/en", "x-default": "/" } },
    openGraph: { type: "website", locale: "en_GB", url: new URL("/en", origin), siteName: "LocalDictation", title, description, images: [{ url: image, width: 1200, height: 630, alt: "LocalDictation highlights an amount for review before insertion" }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default function EnglishHome() {
  return <LandingPage locale="en" />;
}
