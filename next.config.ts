import type { NextConfig } from "next";

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
  async redirects() {
    return [
      // omanai.tech is the canonical host; every other host the deployment answers on folds into it.
      ...["www.omanai.tech", "zakeri.dev", "www.zakeri.dev"].map((host) => ({
        source: "/:path*",
        has: [{ type: "host" as const, value: host }],
        destination: "https://omanai.tech/:path*",
        permanent: true,
      })),
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
