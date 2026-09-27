import { notFound } from "next/navigation";
import { ComparisonPage, comparisonMetadata } from "../../../_components/ComparisonPage";
import { englishComparisonAt } from "../../../_data/comparisons";

// One route for every English page under /en/compare: a new page is a data entry
// in comparisons.ts, not a new folder. A slug with no entry is a 404.
export const dynamic = "force-dynamic";

type Params = { params: Promise<{ slug: string }> };

async function entry({ params }: Params) {
  const { slug } = await params;
  return englishComparisonAt(`/en/compare/${slug}`) ?? notFound();
}

export async function generateMetadata(props: Params) {
  return comparisonMetadata(await entry(props));
}

export default async function EnglishComparisonPage(props: Params) {
  return <ComparisonPage data={await entry(props)} />;
}
