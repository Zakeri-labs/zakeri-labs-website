"use client";

import { MessageCircle } from "lucide-react";

import { COMMON } from "@/lib/content/common";
import { useCopy, useI18n } from "@/lib/i18n";
import { whatsappUrl } from "@/lib/site";

export function FloatingWhatsApp() {
  const c = useCopy(COMMON);
  const { lang } = useI18n();
  return (
    <a
      href={whatsappUrl(lang)}
      target="_blank"
      rel="noreferrer"
      aria-label={c.cta.whatsapp}
      className="fixed bottom-6 end-6 z-40 hidden items-center gap-2 rounded-full bg-[#25d366] py-2.5 pe-5 ps-2.5 text-sm font-semibold text-white shadow-[0_12px_32px_-8px_rgb(37_211_102/0.6)] transition hover:-translate-y-0.5 lg:inline-flex"
    >
      <span className="grid h-8 w-8 place-items-center rounded-full bg-white/20">
        <MessageCircle className="h-4 w-4" />
      </span>
      {c.cta.whatsappShort}
    </a>
  );
}
