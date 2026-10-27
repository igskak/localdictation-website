import { ExpansionLegalPage } from "../../_components/ExpansionLegalPage";
import { legalExpansionCopy } from "../../_data/legalExpansionCopy";
export const metadata = { title: `${legalExpansionCopy.es.withdrawal.title} · Witness`, description: legalExpansionCopy.es.withdrawal.description, robots: { index: false, follow: false } };
export default function Page() { return <ExpansionLegalPage locale="es" page="withdrawal" />; }
