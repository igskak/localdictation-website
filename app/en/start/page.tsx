import type { Metadata } from "next";
import { StartPage } from "../../_components/StartPage";
import { startCopy } from "../../_data/startCopy";

export const metadata: Metadata = {
  title: startCopy.en.meta.title,
  description: startCopy.en.meta.description,
  robots: { index: false, follow: false },
};

export default function StartEn() {
  return <StartPage locale="en" />;
}
