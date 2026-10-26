import type { Metadata } from "next";
import { StartThanksPage } from "../../../_components/StartThanksPage";
import { startCopy } from "../../../_data/startCopy";

export const metadata: Metadata = { ...startCopy.fr.thanks.meta, robots: { index: false, follow: false } };

export default function StartThanksFr() { return <StartThanksPage locale="fr" />; }
