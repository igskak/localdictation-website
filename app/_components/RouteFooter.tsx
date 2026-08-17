import Link from "next/link";

export function RouteFooter({ locale = "de" }: { locale?: "de" | "en" }) {
  const isDe = locale === "de";

  return (
    <footer className="route-footer">
      <div className="route-footer-inner shell">
        <span>© 2026 LocalDictation</span>
        <nav aria-label={isDe ? "Rechtliche Links" : "Legal links"}>
          <Link href="/impressum" hrefLang="de">{isDe ? "Impressum" : "Legal notice (DE)"}</Link>
          <Link href="/datenschutz" hrefLang="de">{isDe ? "Datenschutz" : "Privacy (DE)"}</Link>
          <Link href="/widerruf" hrefLang="de">{isDe ? "Widerruf" : "Cancellation (DE)"}</Link>
          <a href="mailto:hallo@localdictation.app">{isDe ? "Kontakt" : "Contact"}</a>
        </nav>
      </div>
    </footer>
  );
}
