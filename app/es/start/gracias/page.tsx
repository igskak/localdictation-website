import type { Metadata } from "next";
import { StartThanksPage } from "../../../_components/StartThanksPage";
import { startCopy } from "../../../_data/startCopy";

export const metadata: Metadata = { ...startCopy.es.thanks.meta, robots: { index: false, follow: false } };

export default function StartThanksEs() { return <StartThanksPage locale="es" />; }
