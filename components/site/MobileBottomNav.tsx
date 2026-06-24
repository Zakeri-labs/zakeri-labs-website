"use client";

import Link from "next/link";
import { Home, Briefcase, LayoutGrid, Mail, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

export function MobileBottomNav() {
  const { t } = useI18n();
  const items = [
    { to: "/", icon: Home, label: t("nav.home") },
    { to: "/services", icon: Briefcase, label: t("nav.services") },
    { to: "/#case-studies", icon: LayoutGrid, label: t("nav.caseStudies") },
    { to: "/contact", icon: Mail, label: t("nav.contact") },
  ];
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-border bg-background/90 backdrop-blur-xl lg:hidden">
      <ul className="mx-auto grid max-w-md grid-cols-5">
        {items.map((it, i) => (
          <li key={i}>
            <Link
              href={it.to}
              className="flex flex-col items-center gap-1 px-2 py-2.5 text-[10px] text-muted-foreground transition active:text-primary"
            >
              <it.icon className="h-4 w-4" />
              <span className="truncate">{it.label}</span>
            </Link>
          </li>
        ))}
        <li>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-1 px-2 py-2.5 text-[10px] text-primary"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="truncate">{t("mobile.whatsapp")}</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
