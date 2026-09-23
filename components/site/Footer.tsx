"use client";

import { Mail, MessageCircle, Phone } from "lucide-react";

import { Cta } from "./blocks";
import { LocalizedLink as Link } from "./LocalizedLink";
import { Logo } from "./Logo";
import { COMMON, NAV_PATHS } from "@/lib/content/common";
import { useCopy, useI18n } from "@/lib/i18n";
import { SITE, whatsappUrl } from "@/lib/site";

export function Footer() {
  const c = useCopy(COMMON);
  const { lang } = useI18n();
  const columns = [
    {
      title: c.footer.services,
      links: [
        { href: "/services#automation", label: c.services.automation },
        { href: "/services#ai-video", label: c.services.aiVideo },
        { href: "/services#content", label: c.services.content },
        { href: "/services#web", label: c.services.web },
      ],
    },
    {
      title: c.footer.products,
      links: [
        { href: "/products#construction-reporting", label: c.products.construction },
        { href: "/products#clinic-crm", label: c.products.clinic },
      ],
    },
    {
      title: c.footer.navigate,
      links: NAV_PATHS.map((path) => ({ href: path, label: c.nav[path] })),
    },
  ];

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 pb-28 pt-16 sm:px-6 lg:px-8 lg:pb-12">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div className="max-w-sm">
            <Logo className="h-11 w-auto" />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {c.footer.description}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Cta href="/contact" className="min-h-11 px-5 text-sm">
                {c.cta.discuss}
              </Cta>
              <Cta
                href={whatsappUrl(lang)}
                variant="outline"
                icon="whatsapp"
                className="min-h-11 px-5 text-sm"
              >
                {c.cta.whatsappShort}
              </Cta>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_0.8fr_1.3fr]">
            {columns.map((col) => (
              <div key={col.title}>
                <h2 className="text-sm font-bold text-foreground">{col.title}</h2>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h2 className="text-sm font-bold text-foreground">{c.footer.contact}</h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>
                  <a
                    href={`tel:+${SITE.phoneRaw}`}
                    dir="ltr"
                    className="inline-flex items-center gap-2 transition hover:text-primary"
                  >
                    <Phone className="h-4 w-4 text-primary" /> {SITE.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappUrl(lang)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 transition hover:text-primary"
                  >
                    <MessageCircle className="h-4 w-4 text-primary" /> {c.cta.whatsappShort}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="inline-flex items-center gap-2 whitespace-nowrap transition hover:text-primary"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-primary" /> {SITE.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. {c.footer.rights}
            <span className="mt-1 block" dir="ltr">
              {SITE.legalName} · CR {SITE.crNumber} · {SITE.legalCity}
            </span>
          </p>
          <p className="font-medium text-foreground/70">{c.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
