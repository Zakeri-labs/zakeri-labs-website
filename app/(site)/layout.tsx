import type { ReactNode } from "react";

import { SiteShell } from "@/components/site/SiteShell";
import { rootMetadata, rootViewport } from "@/lib/root-metadata";

export const metadata = rootMetadata;
export const viewport = rootViewport;

/** Root layout for English (no URL prefix). Static: no request headers are read. */
export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <SiteShell lang="en">{children}</SiteShell>;
}
