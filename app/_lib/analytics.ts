import "server-only";

/**
 * What the site is allowed to load, read from the environment.
 *
 * Nothing here is a default. With no identifiers configured the page renders
 * without a tag, without a banner, and the privacy policy drops the section
 * describing them -- the same shape `DOWNLOAD_URL` and `LEAD_ENDPOINT` already
 * have, and the reason section 8 of `/datenschutz` can keep claiming to be
 * written from the code rather than from an intention.
 */
export type AnalyticsConfig = {
  /** GA4 property, `G-` followed by the property's own characters. */
  measurementId: string | null;
  /** Google Ads conversion account, `AW-` followed by digits. */
  adsConversionId: string | null;
  /** The label of the one conversion this site reports: a submitted lead form. */
  adsLeadLabel: string | null;
};

const measurementPattern = /^G-[A-Z0-9]{4,20}$/i;
const adsPattern = /^AW-\d{6,20}$/;
const labelPattern = /^[A-Za-z0-9_-]{5,40}$/;

function matched(value: string | null | undefined, pattern: RegExp): string | null {
  const candidate = value?.trim();
  return candidate && pattern.test(candidate) ? candidate : null;
}

export function getAnalyticsConfig(): AnalyticsConfig {
  const adsConversionId = matched(process.env.ADS_CONVERSION_ID, adsPattern);
  const adsLeadLabel = matched(process.env.ADS_LEAD_CONVERSION_LABEL, labelPattern);
  return {
    measurementId: matched(process.env.GA4_MEASUREMENT_ID, measurementPattern),
    // A conversion account without a label reports nothing, so treat the pair
    // as one setting: half of it configured is a misconfiguration, not a mode.
    adsConversionId: adsLeadLabel ? adsConversionId : null,
    adsLeadLabel: adsConversionId ? adsLeadLabel : null,
  };
}

export function analyticsEnabled(config: AnalyticsConfig): boolean {
  return Boolean(config.measurementId || config.adsConversionId);
}

/**
 * Which of the two is actually running.
 *
 * The privacy policy names products, and naming one that is switched off is
 * the same failure as staying silent about one that is on -- so the sentence
 * is built from this rather than written out once and left to rot.
 */
export function analyticsProducts(config: AnalyticsConfig): { analytics: boolean; ads: boolean } {
  return { analytics: Boolean(config.measurementId), ads: Boolean(config.adsConversionId) };
}
