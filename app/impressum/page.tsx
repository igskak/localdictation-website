import type { Metadata } from "next";
import { LegalShell } from "../_components/LegalShell";

export const metadata: Metadata = { title: "Impressum · Witness", description: "Anbieterkennzeichnung und rechtliche Hinweise für Witness.", robots: { index: false, follow: false } };

export default function ImpressumPage() {
  return <LegalShell eyebrow="Rechtliches" title="Impressum" notice={<><b>Anbieterangaben vollständig.</b> Die Angaben auf dieser Seite sind vollständig und aktuell. Widerrufsbelehrung und Datenschutzerklärung sind weiterhin Entwürfe und müssen vor dem ersten Verkauf von einer qualifizierten Stelle geprüft werden.</>}>
    <h2>Anbieter</h2>
    <p>Ihor Skakovskyi<br />Ostrovského 26<br />150 00 Praha 5<br />Tschechische Republik</p>
    <h2>Rechtsform und Registrierung</h2>
    <p>Einzelunternehmer (OSVČ) nach tschechischem Recht, eingetragen im Gewerberegister der Tschechischen Republik (živnostenský registr).</p>
    <p>Identifikationsnummer (IČO): 17328691</p>
    <h2>Kontakt</h2>
    <p>E-Mail: <a href="mailto:hallo@witnessmac.com">hallo@witnessmac.com</a><br />Telefon: +420 607 643 905</p>
    <h2>Verantwortlich für den Inhalt</h2>
    <p>Ihor Skakovskyi, Anschrift wie oben.</p>
  </LegalShell>;
}
