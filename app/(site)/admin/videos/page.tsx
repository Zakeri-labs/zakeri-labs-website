import type { Metadata } from "next";
import { cookies } from "next/headers";

import { AdminVideos } from "@/components/site/AdminVideos";
import { Container } from "@/components/site/blocks";
import { isAdminCookie, listVideos } from "@/lib/videos";

export const metadata: Metadata = {
  title: "Videos admin",
  robots: { index: false, follow: false },
};
export const dynamic = "force-dynamic";

export default async function Page() {
  const authed = isAdminCookie((await cookies()).toString());
  return (
    <Container className="py-12">
      <AdminVideos authed={authed} initial={authed ? await listVideos(true) : []} />
    </Container>
  );
}
