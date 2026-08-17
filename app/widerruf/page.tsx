import type { Metadata } from "next";
import { LegalShell } from "../_components/LegalShell";

export const metadata: Metadata = { title: "Widerruf · LocalDictation", description: "Entwurf der Widerrufsbelehrung und Geld-zurück-Garantie von LocalDictation.", robots: { index: false, follow: false } };

export default function WiderrufPage() {
  return <LegalShell eyebrow="Rechtliches" title="Widerruf und Geld-zurück-Garantie"><h2>Widerrufsbelehrung</h2><p>Die vollständige, zum Checkout und Merchant-of-Record-Modell passende Widerrufsbelehrung einschließlich Frist, Ausübung, Folgen und Musterformular muss vor dem ersten Verkauf rechtlich geprüft und ergänzt werden.</p><h2>Freiwillige 30-Tage-Garantie</h2><p>Der vorgesehene Launch-Offer enthält zusätzlich eine 30-tägige Geld-zurück-Garantie ohne Begründung. Bedingungen, Beginn, Abwicklung und Verhältnis zum gesetzlichen Widerrufsrecht werden vor Checkout verbindlich in den Vertragsunterlagen festgelegt.</p></LegalShell>;
}
