import { readFileSync } from "node:fs";

import type { NextConfig } from "next";

// Redirects added in the Keystatic panel (content/redirects.json); applied on the next deploy.
const panelRedirects = (
  JSON.parse(readFileSync("content/redirects.json", "utf8")) as {
    items: { from: string; to: string; permanent: boolean }[];
  }
).items.filter((r) => /^\/[\w\-/.]*$/.test(r.from) && /^(\/|https?:\/\/)\S*$/.test(r.to));

// 301s for the old URLs. Farsi was retired; its pages fold into English.
const moved: [string, string][] = [
  ["/pricing", "/how-we-work"],
  ["/case-study", "/selected-work"],
  ["/insights", "/selected-work"],
  ["/policy", "/privacy"],
  ["/privacy-policy", "/privacy"],
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: import.meta.dirname,
  // The content panel's JSON is read at request time.
  outputFileTracingIncludes: { "/**": ["./content/**/*"] },
  // Sajjad (SEO): keep zakeri.dev out of the index. robots.txt stays open so Google can see this header.
  async headers() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host" as const, value: "(.*\\.)?zakeri\\.dev" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
  async redirects() {
    return [
      // omanai.tech is the SEO host. zakeri.dev keeps serving the site (Zakeri's call), but every
      // page's canonical points at omanai.tech so Google indexes only that domain.
      {
        source: "/:path*",
        has: [{ type: "host" as const, value: "www.omanai.tech" }],
        destination: "https://omanai.tech/:path*",
        permanent: true,
      },
      ...panelRedirects.map((r) => ({ source: r.from, destination: r.to, permanent: r.permanent })),
      ...moved.flatMap(([from, to]) => [
        { source: from, destination: to, statusCode: 301 as const },
        { source: `/ar${from}`, destination: `/ar${to}`, statusCode: 301 as const },
        { source: `/fa${from}`, destination: to, statusCode: 301 as const },
      ]),
      { source: "/fa", destination: "/", statusCode: 301 as const },
      { source: "/fa/:path*", destination: "/:path*", statusCode: 301 as const },
    ];
  },
};

export default nextConfig;
