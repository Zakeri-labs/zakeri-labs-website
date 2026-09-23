import Image from "next/image";

import { SITE } from "@/lib/site";

/** The IDRAK lockup (mark + wordmark) from the brand SVG. */
export function Logo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/brand/idrak-logo-white.svg"
      alt={SITE.name}
      width={208}
      height={90}
      priority
      className={className}
    />
  );
}
