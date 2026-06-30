"use client";

import { MessageCircle } from "lucide-react";

import { SITE } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

export function FloatingWhatsApp() {
  const { t } = useI18n();

  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label={t("cta.whatsapp")}
      className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full border border-primary/35 bg-background/75 px-4 py-3 text-sm font-semibold text-foreground shadow-[var(--shadow-elegant)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-primary/70 hover:bg-primary/15 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 rtl:left-6 rtl:right-auto lg:inline-flex"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-primary/15 blur-md" />
      <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)]">
        <MessageCircle className="h-4 w-4" />
      </span>
      <span>{t("cta.whatsapp")}</span>
    </a>
  );
}
