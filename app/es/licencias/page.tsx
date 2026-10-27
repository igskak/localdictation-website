import { ExpansionLegalPage } from "../../_components/ExpansionLegalPage";
import { legalExpansionCopy } from "../../_data/legalExpansionCopy";
export const metadata = { title: `${legalExpansionCopy.es.licences.title} · Witness`, description: legalExpansionCopy.es.licences.description, robots: { index: false, follow: false } };
export default function Page() { return <ExpansionLegalPage locale="es" page="licences" />; }
