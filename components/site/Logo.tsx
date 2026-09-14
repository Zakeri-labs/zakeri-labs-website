import Image from "next/image";

import { SITE } from "@/lib/site";
import idrakMark from "./idrak-mark.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Image src={idrakMark} alt="" width={32} height={32} aria-hidden className="h-8 w-8" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-base font-semibold tracking-tight">
          {SITE.personName}
        </span>
        <span className="mt-1 text-[11px] font-medium tracking-wide text-muted-foreground">
          {SITE.companyName}
        </span>
      </span>
    </span>
  );
}
