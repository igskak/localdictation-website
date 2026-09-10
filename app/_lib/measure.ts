/**
 * The one place an event on this site becomes a number, in both systems.
 *
 * Two products measure this page and they measure different things. The Google
 * tag exists so the ad account can be told a conversion happened; PostHog
 * exists so we can see where a reader came from and what they did. Both want
 * to hear about the same two moments, and if the moments were reported from
 * two different places they would drift -- one renamed, one forgotten, and a
 * funnel that disagrees with itself for a reason nobody can find.
 *
 * So the call sites report once, here, and this file fans out. `gtag.ts` and
 * `posthog.ts` stay the two implementations and neither knows about the other.
 */

import { type ConsentChoice, type GtagConfig, denyStorage, grantStorage, loadTags, reportDownload as reportDownloadToGoogle, reportLead as reportLeadToGoogle } from "./gtag";
import { type PosthogConfig, capturePosthog, denyPosthogStorage, grantPosthogStorage, startPosthog } from "./posthog";

export type MeasureConfig = GtagConfig & PosthogConfig;

/** How the reader got to the file: the download that starts itself, or the link that starts it again. */
export type DownloadMode = "auto" | "link";

/** Loads both, in whatever state the reader's answer leaves them. Idempotent in both. */
export function startMeasurement(config: MeasureConfig, consent: ConsentChoice | null): void {
  loadTags(config, consent);
  startPosthog(config, consent);
}

export function grantMeasurementStorage(config: MeasureConfig): void {
  grantStorage();
  grantPosthogStorage(config);
}

export function denyMeasurementStorage(config: MeasureConfig): void {
  denyStorage();
  denyPosthogStorage(config);
}

/** The conversion the campaign optimises on. The address reaches Google hashed, and PostHog not at all. */
export function reportLead(config: MeasureConfig, email: string): void {
  reportLeadToGoogle(config, email);
  capturePosthog(config, "lead_created");
}

/**
 * Reaching the page the file downloads from.
 *
 * `mode` is the property Google is not given: the ad account needs one number,
 * while the funnel question -- how many readers let the download start itself
 * and how many had to press the link again -- is a product question, and a
 * page where the second number grows is a page that is failing quietly.
 */
export function reportDownload(config: MeasureConfig, mode: DownloadMode, locale: string): void {
  reportDownloadToGoogle(config);
  capturePosthog(config, "download_started", { mode, locale });
}
