"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { SITE } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border bg-background/60">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">{t("footer.slogan")}</p>
            <p className="mt-2 max-w-sm text-xs text-muted-foreground/80">{t("footer.desc")}</p>
          </div>
          <FooterCol
            title={t("footer.col.navigate")}
            items={[
              { to: "/", label: t("nav.home") },
              { to: "/services", label: t("nav.services") },
              { to: "/pricing", label: t("nav.pricing") },
              { to: "/insights", label: t("nav.insights") },
              { to: "/about", label: t("nav.about") },
              { to: "/contact", label: t("nav.contact") },
            ]}
          />
          <FooterCol
            title={t("footer.col.services")}
            items={[
              { to: "/services", label: t("footer.svc.strategy") },
              { to: "/services", label: t("footer.svc.seo") },
              { to: "/services", label: t("footer.svc.geo") },
              { to: "/services", label: t("footer.svc.ai") },
              { to: "/services", label: t("footer.svc.webapp") },
            ]}
          />
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
        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
          <p>
            © {year} {SITE.name}. {t("footer.rights")}
          </p>
          <p>{SITE.tagline}</p>
        </div>
      </div>
    </footer>
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
