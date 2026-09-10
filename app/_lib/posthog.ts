/**
 * The product-analytics half of the measurement, and the only place that talks
 * to PostHog.
 *
 * Same shape as `gtag.ts`, for the same reason: consent governs storage, not
 * measurement. Before a reader agrees, PostHog runs with `memory` persistence
 * -- nothing is written to their device and nothing is read from it, which is
 * what § 25 TDDDG is about -- and events still arrive, tied together only for
 * as long as the tab is open. After they agree, the same library stores an
 * identifier and links visits normally.
 *
 * Why PostHog next to Google at all: the Google tag exists to feed the ad
 * account a conversion, and it is shaped like that. This one answers where
 * readers came from and what they did on the page, and it answers it without
 * a hand-written event per click, because autocapture is on.
 *
 * Session replay is deliberately off. `disable_session_recording` is set here
 * rather than left to the project's dashboard, so that turning it on is a
 * commit that has to travel past the privacy pages this file feeds.
 */

import posthog from "posthog-js";
import type { ConsentChoice } from "./gtag";
import { posthogCookieMonths } from "./retention";

/**
 * The half of the measurement configuration this file reads.
 *
 * Declared here rather than imported from `analytics.ts` for the same reason
 * `GtagConfig` is: that module is server-only, and this one runs in a browser.
 */
export type PosthogConfig = {
  posthogKey: string | null;
};

/**
 * Requests go to our own domain, not to `eu.i.posthog.com`.
 *
 * `worker/index.ts` forwards this prefix. A third-party analytics host is the
 * first thing a blocklist stops, and a measurement that is missing exactly the
 * readers who block things is a measurement that flatters itself.
 */
export const ingestPath = "/ingest";

/** Where PostHog's own dashboard lives, so its in-app links point at the right region. */
export const uiHost = "https://eu.posthog.com";

/**
 * How long a stored identifier may live, in days.
 *
 * Derived from the month figure section 8 states, because a number in a legal
 * text has to come from the code that produces it rather than beside it.
 */
export const cookieDays = Math.round(posthogCookieMonths * 30.44);

let started = false;

/**
 * Idempotent, and called once per page load whatever the reader has decided.
 *
 * The library is loaded either way. What the answer changes is where it is
 * allowed to keep the identifier -- and, on a refusal, whether an identifier
 * kept earlier is deleted.
 */
export function startPosthog(config: PosthogConfig, consent: ConsentChoice | null): void {
  const key = config.posthogKey;
  if (!key || started) return;
  started = true;

  posthog.init(key, {
    api_host: ingestPath,
    ui_host: uiHost,
    persistence: consent === "granted" ? "localStorage+cookie" : "memory",
    cookie_expiration: cookieDays,
    autocapture: true,
    capture_pageview: true,
    capture_pageleave: true,
    disable_session_recording: true,
    // A reader who has not agreed gets no profile built for them: events still
    // count, but PostHog is not asked to remember a person between visits.
    person_profiles: consent === "granted" ? "always" : "identified_only",
  });
}

/** Lets the identifier be stored, after the reader has said it may be. */
export function grantPosthogStorage(config: PosthogConfig): void {
  if (!config.posthogKey || !started) return;
  posthog.set_config({ persistence: "localStorage+cookie" });
}

/**
 * Stops storing, and removes what was stored.
 *
 * `set_config` alone would only stop writing. A reader who agreed yesterday
 * and refuses today would keep an identifier on their device, and section 8
 * says plainly that a refusal means nothing is stored -- so the two keys
 * PostHog writes under this project are deleted here, by name.
 */
export function denyPosthogStorage(config: PosthogConfig): void {
  const key = config.posthogKey;
  if (!key || !started) return;
  posthog.set_config({ persistence: "memory" });
  const name = `ph_${key}_posthog`;
  try {
    window.localStorage.removeItem(name);
  } catch {
    // A browser that refuses storage never had anything to remove.
  }
  document.cookie = `${name}=; path=/; max-age=0; SameSite=Lax`;
}

/**
 * One event, named the same as its Google counterpart.
 *
 * The two systems are asked the same question and must not answer it with two
 * different words, or a disagreement between them reads as a bug in the funnel
 * rather than as the two different things they measure.
 */
export function capturePosthog(config: PosthogConfig, event: string, properties?: Record<string, unknown>): void {
  if (!config.posthogKey || !started) return;
  posthog.capture(event, properties);
}
