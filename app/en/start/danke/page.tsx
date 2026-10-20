import type { Metadata } from "next";
import { StartThanksPage } from "../../../_components/StartThanksPage";
import { startCopy } from "../../../_data/startCopy";

export const metadata: Metadata = {
  title: startCopy.en.thanks.meta.title,
  description: startCopy.en.thanks.meta.description,
  robots: { index: false, follow: false },
};

export default function StartThanksEn() {
  return <StartThanksPage locale="en" />;
}
