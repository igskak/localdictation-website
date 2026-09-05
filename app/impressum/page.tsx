import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "../_components/LegalShell";

export const metadata: Metadata = { title: "Impressum · Witness", description: "Anbieterkennzeichnung und rechtliche Hinweise für Witness.", robots: { index: false, follow: false } };

export default function ImpressumPage() {
  return <LegalShell
    page="imprint"
    eyebrow="Rechtliches"
    title="Impressum"
    updated="5. September 2026"
    notice={<><b>Anbieterangaben vollständig.</b> Die Angaben auf dieser Seite sind vollständig und aktuell. Wer verkauft, steht hier; was verkauft wird, steht in den <Link href="/agb">Vertrags- und Lizenzbedingungen</Link>.</>}
  >
    <h2>Anbieter</h2>
    <p>Ihor Skakovskyi<br />Ostrovského 26<br />150 00 Praha 5<br />Tschechische Republik</p>
    <h2>Rechtsform und Registrierung</h2>
    <p>Einzelunternehmer (OSVČ) nach tschechischem Recht, eingetragen im Gewerberegister der Tschechischen Republik (živnostenský registr).</p>
    <p>Identifikationsnummer (IČO): 17328691</p>
    <h2>Kontakt</h2>
    <p>E-Mail: <a href="mailto:hallo@witnessmac.com">hallo@witnessmac.com</a><br />Telefon: +420 607 643 905</p>
    <h2>Verantwortlich für den Inhalt</h2>
    <p>Ihor Skakovskyi, Anschrift wie oben.</p>
    <h2>Verkauf und Rechnung</h2>
    <p>Der Bezahlvorgang läuft über Stripe, das bei diesem Verkauf als Händler im eigenen Namen auftritt (Merchant of Record), die Rechnung stellt und die Umsatzsteuer abführt. Der Lizenzvertrag über die Nutzung von Witness kommt mit dem oben genannten Anbieter zustande.</p>
    <h2>Streitbeilegung</h2>
    <p>Zuständige Stelle für die außergerichtliche Beilegung von Verbraucherstreitigkeiten ist die Tschechische Handelsinspektion (Česká obchodní inspekce), <a href="https://coi.gov.cz/informace-o-adr/" rel="noreferrer">coi.gov.cz/informace-o-adr</a>. Beschwerden nehmen wir auch direkt unter der Kontaktadresse oben entgegen.</p>
  </LegalShell>;
}
