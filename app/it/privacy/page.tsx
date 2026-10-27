import { ExpansionLegalPage } from "../../_components/ExpansionLegalPage";
import { legalExpansionCopy } from "../../_data/legalExpansionCopy";
export const metadata = { title: `${legalExpansionCopy.it.privacy.title} · Witness`, description: legalExpansionCopy.it.privacy.description, robots: { index: false, follow: false } };
export default function Page() { return <ExpansionLegalPage locale="it" page="privacy" />; }
