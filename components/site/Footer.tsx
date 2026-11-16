"use client";

import { Mail, MessageCircle, Phone } from "lucide-react";

import { Cta } from "./blocks";
import { LocalizedLink as Link } from "./LocalizedLink";
import { Logo } from "./Logo";
import { COMMON } from "@/lib/content/common";
import type { NavMenus } from "@/lib/content/detail";
import type { Lang } from "@/lib/locales";
import { useCopy, useI18n } from "@/lib/i18n";
import { SITE, whatsappUrl } from "@/lib/site";

export function Footer({
  hasArticles = false,
  menus,
}: {
  hasArticles?: boolean;
  menus: Record<Lang, NavMenus>;
}) {
  const c = useCopy(COMMON);
  const { lang } = useI18n();
  const m = menus[lang];
  const toLinks = (list: NavMenus["services"]) =>
    list.map((l) => ({ href: l.href, label: l.name }));
  const columns = [
    { title: c.footer.services, links: toLinks(m.services) },
    { title: c.nav["/industries"], links: toLinks(m.industries) },
    {
      title: c.footer.products,
      links: [
        ...toLinks(m.products),
        { href: "/work", label: c.nav["/work"] },
        { href: "/portfolio", label: c.menu2.videos },
      ],
    },
    {
      title: c.footer.navigate,
      links: [
        { href: "/about", label: c.menu2.aboutIdrak },
        { href: "/how-we-work", label: c.menu2.howWeWork },
        ...(hasArticles ? [{ href: "/articles", label: c.nav["/articles"] }] : []),
        { href: "https://job.omanai.tech", label: c.menu2.careers },
        { href: "/contact", label: c.nav["/contact"] },
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-4 pb-28 pt-16 sm:px-6 lg:px-8 lg:pb-28">
        <div className="grid gap-12 xl:grid-cols-[0.8fr_3.2fr]">
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

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
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
          <div className="flex flex-col gap-2 sm:items-end">
            <p className="flex flex-wrap items-center gap-x-4 gap-y-2 font-medium text-foreground/70">
              <Link href="/privacy" className="whitespace-nowrap transition hover:text-primary">
                {lang === "ar" ? "سياسة الخصوصية" : "Privacy Policy"}
              </Link>
              <Link href="/terms" className="whitespace-nowrap transition hover:text-primary">
                {lang === "ar" ? "شروط الخدمة" : "Terms"}
              </Link>
            </p>
            <p>{c.footer.tagline}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
