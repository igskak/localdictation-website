import { ComparisonPage, comparisonMetadata } from "../../_components/ComparisonPage";
import { comparisons } from "../../_data/comparisons";

const data = comparisons["macwhisper-alternative"];

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return comparisonMetadata(data);
}

export default function MacWhisperAlternativePage() {
  return <ComparisonPage data={data} />;
}
