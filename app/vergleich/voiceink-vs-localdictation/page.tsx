import { ComparisonPage, comparisonMetadata } from "../../_components/ComparisonPage";
import { comparisons } from "../../_data/comparisons";

const data = comparisons["voiceink-vs-localdictation"];

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return comparisonMetadata(data);
}

export default function VoiceInkVsLocalDictationPage() {
  return <ComparisonPage data={data} />;
}
