
/**
 * Forwards a cancellation to the activation service and says how it went.
 *
 * The form posts to this site rather than to `api.witnessmac.com` so it works
 * without JavaScript, passes the same-origin form policy the pages carry, and
 * needs no cross-origin permission on the service. Nothing is stored here.
 */
export async function forwardCancellation(
  email: string,
  fetcher: typeof fetch = fetch,
  endpoint = "https://api.witnessmac.com/v1/subscriptions/cancel",
): Promise<"done" | "failed"> {
  try {
    const response = await fetcher(endpoint, {
      method: "POST",
      headers: { "content-type": "application/json", accept: "application/json", "user-agent": "witnessmac.com" },
      body: JSON.stringify({ email }),
      signal: AbortSignal.timeout(15_000),
    });
    return response.ok ? "done" : "failed";
  } catch {
    return "failed";
  }
}

/** The address from a submitted form, or `null` when it is not one. */
export function addressFromForm(form: FormData): string | null {
  const value = form.get("email");
  if (typeof value !== "string") return null;
  const email = value.trim();
  return email.length > 0 && email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : null;
}
