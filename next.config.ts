import type { NextConfig } from "next";

// VINEXT_PLATFORM=node builds a self-hosting bundle at dist/standalone/server.js
// (for serving the site without Cloudflare). The default build stays Cloudflare Workers.
const nextConfig: NextConfig =
  process.env.VINEXT_PLATFORM === "node" ? { output: "standalone" } : {};

export default nextConfig;
