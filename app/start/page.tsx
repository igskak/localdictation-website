import type { Metadata } from "next";
import { StartPage } from "../_components/StartPage";
import { startCopy } from "../_data/startCopy";

/**
 * Reached from the ads and from nowhere else: out of the sitemap, no internal
 * link, and told to stay out of the index.
 */
export const metadata: Metadata = {
  title: startCopy.de.meta.title,
  description: startCopy.de.meta.description,
  robots: { index: false, follow: false },
};

export default function StartDe() {
  return <StartPage locale="de" />;
}
