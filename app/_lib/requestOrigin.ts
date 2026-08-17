import { headers } from "next/headers";

function firstHeaderValue(value: string | null) {
  return value?.split(",", 1)[0]?.trim() || null;
}

function safeHost(value: string | null) {
  const candidate = firstHeaderValue(value);
  if (!candidate || /[\s\\/?#@]/.test(candidate)) return null;

  try {
    const parsed = new URL(`http://${candidate}`);
    return parsed.username || parsed.password || parsed.pathname !== "/" ? null : parsed.host;
  } catch {
    return null;
  }
}

export async function requestOrigin() {
  const incoming = await headers();
  const host = safeHost(incoming.get("x-forwarded-host")) ?? safeHost(incoming.get("host")) ?? "localhost:3000";
  const forwardedProtocol = firstHeaderValue(incoming.get("x-forwarded-proto"));
  const protocol = forwardedProtocol === "http" || forwardedProtocol === "https"
    ? forwardedProtocol
    : host.startsWith("localhost")
      ? "http"
      : "https";
  return new URL(`${protocol}://${host}`);
}
