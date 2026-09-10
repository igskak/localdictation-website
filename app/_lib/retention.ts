/**
 * How long the measurement keeps things, in one place.
 *
 * Section 8 of both privacy policies states this number, and `posthog.ts`
 * configures the browser with it. It lives here, importable from both a server
 * component and a client one, so the sentence in the legal text and the
 * behaviour of the library cannot drift apart -- which is the whole claim the
 * notice at the top of those pages makes.
 *
 * There is deliberately no figure for the events themselves. PostHog Cloud
 * offers no retention setting to configure: a plan comes with a guarantee that
 * data is *kept* for a year, which is the opposite of a promise that it is
 * deleted after one. A number here would therefore be a period nothing can
 * enforce, in a document whose first line says it is written from the code, so
 * the policies state the criterion and the deletion-on-request route instead.
 */
export const posthogCookieMonths = 12;
