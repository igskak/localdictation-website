import { ExpansionLegalPage } from "../../_components/ExpansionLegalPage";
import { legalExpansionCopy } from "../../_data/legalExpansionCopy";
export const metadata = { title: `${legalExpansionCopy.es.privacy.title} · Witness`, description: legalExpansionCopy.es.privacy.description, robots: { index: false, follow: false } };
export default function Page() { return <ExpansionLegalPage locale="es" page="privacy" />; }
