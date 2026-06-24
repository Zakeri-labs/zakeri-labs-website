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
            <div className="mt-5 flex flex-wrap gap-2">
              <Button asChild size="sm">
                <Link href="/contact">
                  {t("cta.audit")} <ArrowRight className="ms-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="sm" variant="outline">
                <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
                  <MessageCircle className="me-1.5 h-4 w-4" /> {t("cta.whatsapp")}
                </a>
              </Button>
            </div>
          </div>
          <FooterCol
            title="Navigate"
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
            title="Services"
            items={[
              { to: "/services", label: "Website Strategy" },
              { to: "/services", label: "SEO Structure" },
              { to: "/services", label: "GEO / AEO" },
              { to: "/services", label: "AI Visibility" },
              { to: "/services", label: "Web Applications" },
            ]}
          />
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>{SITE.phone}</li>
              <li>{SITE.email}</li>
              <li>
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
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
