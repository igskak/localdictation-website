import type { NextConfig } from "next";

// htmlLimitedBots matches every User-Agent, so every response carries its title,
// description and canonical in <head>. By default only a short list of crawlers
// (Bingbot, Twitterbot, ...) got that; browsers, Googlebot and the AI crawlers
// (GPTBot, ClaudeBot, PerplexityBot) got the tags streamed into a hidden <div> in
// <body>, which a crawler that does not run JavaScript never moves into <head>.
//
// VINEXT_PLATFORM=node builds a self-hosting bundle at dist/standalone/server.js
// (for serving the site without Cloudflare). The default build stays Cloudflare Workers.
const nextConfig: NextConfig = {
  htmlLimitedBots: /.*/,
  ...(process.env.VINEXT_PLATFORM === "node" ? { output: "standalone" as const } : {}),
};

export default nextConfig;
