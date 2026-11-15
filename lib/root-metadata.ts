import type { Metadata, Viewport } from "next";

import { SITE } from "@/lib/site";

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.name, template: `%s | ${SITE.name}` },
  authors: [{ name: SITE.name }],
  applicationName: SITE.name,
};

export const rootViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070b1a",
};
