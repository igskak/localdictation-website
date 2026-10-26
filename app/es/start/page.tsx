import type { Metadata } from "next";
import { StartPage } from "../../_components/StartPage";
import { startCopy } from "../../_data/startCopy";

export const metadata: Metadata = { ...startCopy.es.meta, robots: { index: false, follow: false } };

export default function StartEs() { return <StartPage locale="es" />; }
