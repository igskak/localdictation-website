import type { Metadata } from "next";
import { LegalShell } from "../_components/LegalShell";

export const metadata: Metadata = { title: "Widerruf · Witness", description: "Entwurf der Widerrufsbelehrung von Witness.", robots: { index: false, follow: false } };

export default function WiderrufPage() {
  return <LegalShell eyebrow="Rechtliches" title="Widerruf"><h2>Widerrufsbelehrung</h2><p>Die vollständige, zum Checkout und Merchant-of-Record-Modell passende Widerrufsbelehrung einschließlich Frist, Ausübung, Folgen und Musterformular muss vor dem ersten Verkauf rechtlich geprüft und ergänzt werden.</p></LegalShell>;
}
