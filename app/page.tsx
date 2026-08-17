import type { Metadata } from "next";
import { LandingPage } from "./_components/LandingPage";
import { requestOrigin } from "./_lib/requestOrigin";

export async function generateMetadata(): Promise<Metadata> {
  const origin = await requestOrigin();
  const title = "LocalDictation — Diktieren, ohne deine Daten zu teilen";
  const description = "Lokale Diktier-App für Apple Silicon. Deutsch und Englisch mischen, unsichere Stellen prüfen und Text direkt am Cursor einsetzen.";
  const image = new URL("/og.png", origin).toString();
  return {
    metadataBase: origin,
    title,
    description,
    alternates: { canonical: "/", languages: { de: "/", en: "/en", "x-default": "/" } },
    openGraph: { type: "website", locale: "de_DE", url: origin, siteName: "LocalDictation", title, description, images: [{ url: image, width: 1200, height: 630, alt: "LocalDictation zeigt einen markierten Betrag vor dem Einfügen" }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default function Home() {
  return <LandingPage locale="de" />;
}
