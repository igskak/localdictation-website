import { ExpansionLegalPage } from "../../_components/ExpansionLegalPage";
import { legalExpansionCopy } from "../../_data/legalExpansionCopy";
export const metadata = { title: `${legalExpansionCopy.fr.withdrawal.title} · Witness`, description: legalExpansionCopy.fr.withdrawal.description, robots: { index: false, follow: false } };
export default function Page() { return <ExpansionLegalPage locale="fr" page="withdrawal" />; }
