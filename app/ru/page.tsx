import type { Metadata } from "next";
import { LandingPage } from "../_components/LandingPage";
import { landingMetadata } from "../_lib/landingMetadata";

export function generateMetadata(): Promise<Metadata> {
  return landingMetadata("ru");
}

export default function RussianHome() {
  return <LandingPage locale="ru" />;
}
