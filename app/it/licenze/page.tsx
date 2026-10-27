import { ExpansionLegalPage } from "../../_components/ExpansionLegalPage";
import { legalExpansionCopy } from "../../_data/legalExpansionCopy";
export const metadata = { title: `${legalExpansionCopy.it.licences.title} · Witness`, description: legalExpansionCopy.it.licences.description, robots: { index: false, follow: false } };
export default function Page() { return <ExpansionLegalPage locale="it" page="licences" />; }
