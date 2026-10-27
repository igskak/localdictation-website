import { ExpansionLegalPage } from "../../_components/ExpansionLegalPage";
import { legalExpansionCopy } from "../../_data/legalExpansionCopy";
export const metadata = { title: `${legalExpansionCopy.es.imprint.title} · Witness`, description: legalExpansionCopy.es.imprint.description, robots: { index: false, follow: false } };
export default function Page() { return <ExpansionLegalPage locale="es" page="imprint" />; }
