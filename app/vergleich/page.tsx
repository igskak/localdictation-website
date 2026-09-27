import { ComparisonHub, comparisonHubMetadata } from "../_components/ComparisonHub";

export const dynamic = "force-dynamic";

export async function generateMetadata() {
  return comparisonHubMetadata();
}

export default function VergleichPage() {
  return <ComparisonHub />;
}
