import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const english = request.nextUrl.pathname.startsWith("/en") || request.nextUrl.searchParams.get("lang") === "en";
  requestHeaders.set("x-page-locale", english ? "en" : "de");
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|og.png).*)"],
};
