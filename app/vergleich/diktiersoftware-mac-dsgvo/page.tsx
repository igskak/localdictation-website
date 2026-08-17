import { ComparisonPage, comparisonMetadata } from "../../_components/ComparisonPage";
import { comparisons } from "../../_data/comparisons";

const data = comparisons["diktiersoftware-mac-dsgvo"];

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return comparisonMetadata(data);
}

export default function DiktiersoftwareMacDsgvoPage() {
  return <ComparisonPage data={data} />;
}
