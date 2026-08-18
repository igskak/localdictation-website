import type { Metadata } from "next";
import { LandingPage } from "../_components/LandingPage";
import { landingMetadata } from "../_lib/landingMetadata";

export function generateMetadata(): Promise<Metadata> {
  return landingMetadata("uk");
}

export default function UkrainianHome() {
  return <LandingPage locale="uk" />;
}
