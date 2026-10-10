import { makeRouteHandler } from "@keystatic/next/route-handler";

import config from "../../../../keystatic.config";

// In production the panel signs in through the Keystatic GitHub App. Until its
// credentials are on Vercel the API stays closed instead of failing the build.
const ready =
  process.env.NODE_ENV !== "production" ||
  Boolean(
    process.env.KEYSTATIC_GITHUB_CLIENT_ID &&
    process.env.KEYSTATIC_GITHUB_CLIENT_SECRET &&
    process.env.KEYSTATIC_SECRET,
  );

const notReady = () => new Response("Content panel is not configured yet.", { status: 503 });

export const { POST, GET } = ready
  ? makeRouteHandler({ config })
  : { POST: notReady, GET: notReady };
