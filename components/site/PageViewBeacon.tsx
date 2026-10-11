"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/** Sends one first-party page view per route change to /api/pv. */
export function PageViewBeacon() {
  const pathname = usePathname();
  const first = useRef(true);
  useEffect(() => {
    if (!pathname) return;
    // External referrer only matters on the landing page; later navigations are internal.
    const ref = first.current ? document.referrer : "";
    first.current = false;
    const sameSite = ref && new URL(ref).host === location.host;
    const data = JSON.stringify({ path: pathname, referrer: sameSite ? "" : ref });
    if (!navigator.sendBeacon?.("/api/pv", data)) {
      fetch("/api/pv", { method: "POST", body: data, keepalive: true }).catch(() => {});
    }
  }, [pathname]);
  return null;
}
