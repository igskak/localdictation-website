import { NextResponse } from "next/server";
import { addressFromForm, forwardCancellation } from "./cancelSubscription";
import { cancelPaths, type StartLocale } from "../_data/startCopy";

/** The form handler both languages share. A 303 so a reload does not cancel twice. */
export async function handleCancellation(request: Request, locale: StartLocale) {
  const back = (status: "done" | "failed") => {
    const target = new URL(cancelPaths[locale], request.url);
    target.searchParams.set("status", status);
    const response = NextResponse.redirect(target, 303);
    response.headers.set("cache-control", "private, no-store");
    response.headers.set("x-robots-tag", "noindex, nofollow, noarchive");
    return response;
  };

  let email: string | null = null;
  try {
    email = addressFromForm(await request.formData());
  } catch {
    email = null;
  }
  if (!email) return back("failed");
  return back(await forwardCancellation(email));
}
