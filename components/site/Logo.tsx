import Image from "next/image";

import { SITE } from "@/lib/site";
import idrakMark from "./idrak-mark.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <Image src={idrakMark} alt="" width={32} height={32} aria-hidden className="h-8 w-8" />
      <span className="font-display text-base font-semibold tracking-tight">{SITE.brand}</span>
    </span>
  );
}
