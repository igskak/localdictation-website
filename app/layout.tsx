import type { Metadata } from "next";
import { headers } from "next/headers";
import { parseLocale } from "./_lib/locale";
import { analyticsEnabled, getAnalyticsConfig } from "./_lib/analytics";
import { ConsentGate } from "./_components/ConsentGate";
import "./globals.css";

export const metadata: Metadata = {
  title: "Witness — Diktieren, ohne deine Daten zu teilen",
  description:
    "Lokale Spracherkennung für den Mac. Diktiere auf Deutsch und Englisch, prüfe unsichere Stellen und behalte Audio und Text auf deinem Gerät.",
  applicationName: "Witness",
  category: "productivity",
  robots: { index: true, follow: true },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const incoming = await headers();
  const locale = parseLocale(incoming.get("x-page-locale"));
  const analytics = getAnalyticsConfig();
  return (
    <html lang={locale}>
      <body>
        {children}
        {analyticsEnabled(analytics) && <ConsentGate config={analytics} locale={locale} />}
      </body>
    </html>
  );
}
