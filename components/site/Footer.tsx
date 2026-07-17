"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  const navigateItems = [
    { to: "/", label: t("nav.home") },
    { to: "/services", label: t("nav.services") },
    { to: "/pricing", label: t("nav.pricing") },
    { to: "/insights", label: t("nav.insights") },
    { to: "/about", label: t("nav.about") },
    { to: "/contact", label: t("nav.contact") },
  ];
  const serviceItems = [
    { to: "/services", label: t("footer.svc.strategy") },
    { to: "/services", label: t("footer.svc.seo") },
    { to: "/services", label: t("footer.svc.geo") },
    { to: "/services", label: t("footer.svc.ai") },
    { to: "/services", label: t("footer.svc.webapp") },
  ];

  return (
    <footer className="mt-24 border-t border-border bg-background/60">
      <div className="mx-auto max-w-7xl px-4 py-8 pb-24 sm:px-6 lg:px-8 lg:py-14">
        <div className="lg:hidden">
          <Logo />
          <p className="mt-3 max-w-sm text-xs leading-relaxed text-muted-foreground">
            {t("footer.slogan")}
          </p>

          <div className="mt-5 flex gap-2">
            <Button asChild size="sm" className="min-w-0 flex-1">
              <Link href="/contact">
                <span className="truncate">{t("cta.audit")}</span>
                <ArrowRight className="ms-1.5 h-4 w-4 shrink-0" />
              </Link>
            </Button>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-md border border-primary/35 bg-background/75 px-3 text-xs font-semibold text-foreground transition hover:border-primary/70 hover:bg-primary/15 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
            >
              <MessageCircle className="h-3.5 w-3.5 shrink-0 text-primary" />
              <span className="truncate">{t("mobile.whatsapp")}</span>
            </a>
          </div>

          <div className="mt-6 divide-y border-y border-border">
            <MobileFooterGroup title={t("footer.col.navigate")} items={navigateItems} />
            <MobileFooterGroup title={t("footer.col.services")} items={serviceItems} />
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between py-3.5 text-sm font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                <span>{t("footer.col.contact")}</span>
                <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
              </summary>
              <ul className="space-y-2 pb-4 ps-1 text-xs text-muted-foreground">
                <li>
                  <a href={`tel:+${SITE.phoneRaw}`} className="transition hover:text-foreground">
                    {SITE.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${SITE.email}`} className="transition hover:text-foreground">
                    {SITE.email}
                  </a>
                </li>
              </ul>
            </details>
          </div>
        </div>

        <div className="hidden gap-10 lg:grid lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">{t("footer.slogan")}</p>
            <p className="mt-2 max-w-sm text-xs text-muted-foreground/80">{t("footer.desc")}</p>
          </div>
          <FooterCol title={t("footer.col.navigate")} items={navigateItems} />
          <FooterCol title={t("footer.col.services")} items={serviceItems} />
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">
              {t("footer.col.contact")}
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href={`tel:+${SITE.phoneRaw}`}
                  className="transition hover:text-foreground hover:underline"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition hover:text-foreground hover:underline"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              <Button asChild size="sm" className="w-full sm:w-[200px]">
                <Link href="/contact">
                  {t("cta.audit")} <ArrowRight className="ms-1.5 h-4 w-4" />
                </Link>
              </Button>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="relative inline-flex h-8 w-full items-center justify-center gap-2 rounded-full border border-primary/35 bg-background/75 px-3 text-xs font-semibold text-foreground shadow-[var(--shadow-elegant)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-primary/70 hover:bg-primary/15 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 sm:w-[200px]"
              >
                <span className="absolute inset-0 -z-10 rounded-full bg-primary/15 blur-md" />
                <span className="grid h-5 w-5 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)]">
                  <MessageCircle className="h-3 w-3" />
                </span>
                <span>{t("cta.whatsapp")}</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-border pt-5 text-xs text-muted-foreground lg:mt-12 lg:pt-6 sm:flex-row sm:justify-between">
          <p>
            © {year} {SITE.name}. {t("footer.rights")}
          </p>
          <p className="hidden sm:block">{SITE.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

function MobileFooterGroup({
  title,
  items,
}: {
  title: string;
  items: { to: string; label: string }[];
}) {
  return (
    <details className="group">
      <summary className="flex cursor-pointer list-none items-center justify-between py-3.5 text-sm font-semibold text-foreground [&::-webkit-details-marker]:hidden">
        <span>{title}</span>
        <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
      </summary>
      <ul className="space-y-2 pb-4 ps-1">
        {items.map((item) => (
          <li key={`${item.to}-${item.label}`}>
            <Link
              href={item.to}
              className="text-xs text-muted-foreground transition hover:text-foreground"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}

function FooterCol({ title, items }: { title: string; items: { to: string; label: string }[] }) {
  return (
    <div>
      <h4 className="mb-3 text-sm font-semibold text-foreground">{title}</h4>
      <ul className="space-y-2">
        {items.map((it, i) => (
          <li key={i}>
            <Link
              href={it.to}
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
