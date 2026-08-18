import type { NextConfig } from "next";

// VINEXT_PLATFORM=node builds a self-hosting bundle at dist/standalone/server.js
// (used for the Render Web Service). The default build stays Cloudflare Workers.
const nextConfig: NextConfig =
  process.env.VINEXT_PLATFORM === "node" ? { output: "standalone" } : {};

export default nextConfig;
