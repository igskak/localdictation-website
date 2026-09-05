import type { Metadata } from "next";
import Link from "next/link";
import { LegalShell } from "../../_components/LegalShell";
import { legalPaths } from "../../_lib/legal";

export const metadata: Metadata = { title: "Legal notice · Witness", description: "Provider identification and legal information for Witness.", robots: { index: false, follow: false } };

export default function LegalNoticePage() {
  return <LegalShell
    locale="en"
    page="imprint"
    eyebrow="Legal"
    title="Legal notice"
    updated="5 September 2026"
    notice={<><b>Provider details complete.</b> The details on this page are complete and current. Who sells is here; what is sold is in the <Link href={legalPaths.en.terms}>Terms and Licence</Link>.</>}
  >
    <h2>Provider</h2>
    <p>Ihor Skakovskyi<br />Ostrovského 26<br />150 00 Praha 5<br />Czech Republic</p>
    <h2>Legal form and registration</h2>
    <p>Sole trader (OSVČ) under Czech law, registered in the trade register of the Czech Republic (živnostenský registr).</p>
    <p>Identification number (IČO): 17328691</p>
    <h2>Contact</h2>
    <p>E-mail: <a href="mailto:hallo@witnessmac.com">hallo@witnessmac.com</a><br />Telephone: +420 607 643 905</p>
    <h2>Responsible for the content</h2>
    <p>Ihor Skakovskyi, address as above.</p>
    <h2>Sale and invoicing</h2>
    <p>The checkout runs through Stripe, which acts as merchant of record in its own name on this sale, issues the invoice and remits the VAT. The licence contract for using Witness is with the provider named above.</p>
    <h2>Dispute resolution</h2>
    <p>The body responsible for out-of-court resolution of consumer disputes is the Czech Trade Inspection Authority (Česká obchodní inspekce), <a href="https://coi.gov.cz/informace-o-adr/" rel="noreferrer">coi.gov.cz/informace-o-adr</a>. We also take complaints directly, at the contact address above.</p>
  </LegalShell>;
}
