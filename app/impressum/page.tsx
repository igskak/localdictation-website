import type { Metadata } from "next";
import { LegalShell } from "../_components/LegalShell";

export const metadata: Metadata = { title: "Impressum · LocalDictation", description: "Anbieterkennzeichnung und rechtliche Hinweise für die private LocalDictation-Vorschau.", robots: { index: false, follow: false } };

export default function ImpressumPage() {
  return <LegalShell eyebrow="Rechtliches" title="Impressum"><h2>Anbieterangaben</h2><p>Die ladungsfähige Anschrift, Rechtsform, vertretungsberechtigte Person und gegebenenfalls Register- sowie Umsatzsteuerangaben sind vor Veröffentlichung einzusetzen. Es werden bewusst keine Daten erfunden.</p><h2>Kontakt</h2><p>E-Mail: hallo@localdictation.app <em>(Absender und Domain vor Veröffentlichung verifizieren.)</em></p><h2>Verantwortlich für Inhalte</h2><p>Name und Anschrift der verantwortlichen Person sind vor Veröffentlichung einzusetzen.</p></LegalShell>;
}
