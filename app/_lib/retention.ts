/**
 * How long the measurement keeps things, in one place.
 *
 * Section 8 of both privacy policies states these numbers, and `posthog.ts`
 * configures the browser with them. They live here, importable from both a
 * server component and a client one, so the sentence in the legal text and the
 * behaviour of the library cannot drift apart -- which is the whole claim the
 * notice at the top of those pages makes.
 *
 * `eventMonths` is not enforced by this code: it has to match the retention
 * set on the PostHog project itself.
 */
export const posthogCookieMonths = 12;
export const posthogEventMonths = 12;
