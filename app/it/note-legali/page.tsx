import { ExpansionLegalPage } from "../../_components/ExpansionLegalPage";
import { legalExpansionCopy } from "../../_data/legalExpansionCopy";
export const metadata = { title: `${legalExpansionCopy.it.imprint.title} · Witness`, description: legalExpansionCopy.it.imprint.description, robots: { index: false, follow: false } };
export default function Page() { return <ExpansionLegalPage locale="it" page="imprint" />; }
