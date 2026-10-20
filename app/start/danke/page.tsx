import type { Metadata } from "next";
import { StartThanksPage } from "../../_components/StartThanksPage";
import { startCopy } from "../../_data/startCopy";

export const metadata: Metadata = {
  title: startCopy.de.thanks.meta.title,
  description: startCopy.de.thanks.meta.description,
  robots: { index: false, follow: false },
};

export default function StartThanksDe() {
  return <StartThanksPage locale="de" />;
}
