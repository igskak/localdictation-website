import type { Metadata } from "next";
import { ThankYouForm } from "./ThankYouForm";

export const metadata: Metadata = {
  title: "Download · LocalDictation",
  description: "LocalDictation installieren und den Lizenzschlüssel anfordern.",
  robots: { index: false, follow: false },
};

export default async function DankePage({ searchParams }: { searchParams: Promise<{ lang?: string; preview?: string }> }) {
  const params = await searchParams;
  const locale = params.lang === "en" ? "en" : "de";
  const isDe = locale === "de";

  return (
    <main className="thanks-page" lang={locale}>
      <header className="thanks-header shell">
        <a href={isDe ? "/" : "/en"} className="thanks-brand">LocalDictation</a>
        <span>{isDe ? "Private Vorschau" : "Private preview"}</span>
      </header>
      <section className="thanks-hero shell">
        <div className="download-confirmation">
          <span className="download-check" aria-hidden="true">↓</span>
          <p>{isDe ? "Download-Platz ist vorbereitet" : "The download slot is ready"}</p>
        </div>
        <h1>{isDe ? "Wohin sollen wir deinen Lizenzschlüssel schicken?" : "Where should we send your licence key?"}</h1>
        <p>{isDe ? "Der signierte Build ist noch nicht an diese Vorschau angeschlossen. Sobald er bereit ist, startet der Download vor dieser Seite automatisch — die Form bleibt freiwillig." : "The signed build is not connected to this preview yet. Once it is ready, the download will start before this page opens — the form will remain optional."}</p>
      </section>
      <section className="thanks-grid shell">
        <ThankYouForm locale={locale} />
        <aside className="key-card">
          <span>{isDe ? "Lizenzschlüssel" : "Licence key"}</span>
          <strong>•••• — •••• — ••••</strong>
          <p>{isDe ? "Kein Profil. Kein Passwort. Bis zu zwei Macs." : "No profile. No password. Up to two Macs."}</p>
        </aside>
      </section>
      <section className="install-section shell" id="installation">
        <div className="install-intro"><span>01—03</span><h2>{isDe ? "In drei Schritten startklar" : "Ready in three steps"}</h2></div>
        <div className="install-grid">
          <article><b>01</b><h3>{isDe ? "Image öffnen" : "Open the image"}</h3><p>{isDe ? "LocalDictation in den Programme-Ordner ziehen." : "Drag LocalDictation into Applications."}</p></article>
          <article><b>02</b><h3>{isDe ? "Mikrofon erlauben" : "Allow microphone"}</h3><p>{isDe ? "macOS fragt beim ersten Diktat einmal nach." : "macOS asks once on your first dictation."}</p></article>
          <article><b>03</b><h3>{isDe ? "Bedienungshilfe erlauben" : "Allow Accessibility"}</h3><p>{isDe ? "Damit Text genau am Cursor eingesetzt werden kann." : "So text can be inserted exactly at your cursor."}</p></article>
        </div>
        <div className="permission-window" role="img" aria-label={isDe ? "Beispiel der macOS-Bedienungshilfen-Einstellung" : "Example of the macOS Accessibility setting"}>
          <div className="permission-sidebar"><i /><i /><i /><i /></div>
          <div className="permission-content"><small>{isDe ? "Datenschutz & Sicherheit" : "Privacy & Security"}</small><h3>{isDe ? "Bedienungshilfen" : "Accessibility"}</h3><div><span className="mini-app-icon">L</span><b>LocalDictation</b><i className="toggle-on" /></div></div>
        </div>
        <p className="help-line">{isDe ? "Etwas klemmt?" : "Something stuck?"} <a href="mailto:hallo@localdictation.app">{isDe ? "Schreib mir direkt" : "Email me directly"} ↗</a></p>
      </section>
    </main>
  );
}
