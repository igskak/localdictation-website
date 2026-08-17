import { ComparisonPage, comparisonMetadata } from "../../_components/ComparisonPage";
import { comparisons } from "../../_data/comparisons";

const data = comparisons["superwhisper-alternative"];

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return comparisonMetadata(data);
}

export default function SuperwhisperAlternativePage() {
  return <ComparisonPage data={data} />;
}
