import { notFound } from "next/navigation";

import KeystaticApp from "../keystatic";

export const metadata = { robots: { index: false, follow: false } };

export default function Page() {
  // Hidden in production until the Keystatic GitHub App credentials are on Vercel.
  if (process.env.NODE_ENV === "production" && !process.env.KEYSTATIC_GITHUB_CLIENT_ID) notFound();
  return <KeystaticApp />;
}
