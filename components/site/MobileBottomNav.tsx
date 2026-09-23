"use client";

import { Boxes, Briefcase, Home, Mail, MessageCircle } from "lucide-react";

import { LocalizedLink as Link } from "@/components/site/LocalizedLink";
import { COMMON } from "@/lib/content/common";
import { useCopy, useI18n } from "@/lib/i18n";
import { whatsappUrl } from "@/lib/site";

export function MobileBottomNav() {
  const c = useCopy(COMMON);
  const { lang } = useI18n();
  const items = [
    { to: "/", icon: Home, label: c.nav["/"] },
    { to: "/services", icon: Briefcase, label: c.nav["/services"] },
    { to: "/products", icon: Boxes, label: c.nav["/products"] },
    { to: "/contact", icon: Mail, label: c.nav["/contact"] },
  ];
  const cell = "flex flex-col items-center gap-1 px-1 py-2.5 text-[11px] font-medium";
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl lg:hidden">
      <ul className="mx-auto grid max-w-md grid-cols-5">
        {items.map((it) => (
          <li key={it.to}>
            <Link href={it.to} className={`${cell} text-foreground/70 active:text-primary`}>
              <it.icon className="h-5 w-5" />
              <span className="truncate">{it.label}</span>
            </Link>
          </li>
        ))}
        <li>
          <a
            href={whatsappUrl(lang)}
            target="_blank"
            rel="noreferrer"
            className={`${cell} text-primary`}
          >
            <MessageCircle className="h-5 w-5" />
            <span className="truncate">{c.cta.whatsappShort}</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
