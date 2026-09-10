/** Cloudflare Worker entry point for the vinext-starter template. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface AssetFetcher {
  fetch(request: Request): Promise<Response>;
}

interface Env {
  ASSETS: AssetFetcher;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

/**
 * PostHog, reached through this domain instead of through its own.
 *
 * A third-party analytics hostname is the first thing a blocklist stops, and a
 * measurement missing exactly the readers who block things is a measurement
 * that flatters itself. `app/_lib/posthog.ts` points the browser at `/ingest`;
 * this is the other half.
 *
 * Two upstreams, because PostHog serves its own bundles from a second host and
 * routing everything at the API host returns 404s for them.
 */
const POSTHOG_PREFIX = "/ingest";
const POSTHOG_API = "https://eu.i.posthog.com";
const POSTHOG_ASSETS = "https://eu-assets.i.posthog.com";

async function proxyToPostHog(request: Request, url: URL): Promise<Response> {
  const path = url.pathname.slice(POSTHOG_PREFIX.length) || "/";
  const target = new URL(path + url.search, path.startsWith("/static/") ? POSTHOG_ASSETS : POSTHOG_API);

  const headers = new Headers(request.headers);
  // Our cookies are ours. PostHog carries the identifier in the request body,
  // so forwarding the jar would hand a processor data it has no use for --
  // including the consent answer, which is nobody's business but this site's.
  headers.delete("cookie");
  // Without this the only address PostHog ever sees is Cloudflare's, and every
  // reader resolves to one place. Section 8 of both privacy pages says the
  // address is passed on for exactly this, so it is passed on visibly.
  const clientIP = request.headers.get("cf-connecting-ip");
  if (clientIP) headers.set("x-forwarded-for", clientIP);

  const idempotent = request.method === "GET" || request.method === "HEAD";
  // `duplex` is required wherever a streaming body is passed on: workerd
  // tolerates its absence, Node's fetch throws outright -- and `build:node`
  // runs this same file. Events arrive by POST, so the throwing path is the
  // only one that matters.
  const init: RequestInit & { duplex?: "half" } = { method: request.method, headers, redirect: "follow" };
  if (!idempotent) {
    init.body = request.body;
    init.duplex = "half";
  }
  return fetch(new Request(target, init));
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === POSTHOG_PREFIX || url.pathname.startsWith(`${POSTHOG_PREFIX}/`)) {
      return proxyToPostHog(request, url);
    }

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
    }

    return handler.fetch(request, env, ctx);
  },
};

export default worker;
