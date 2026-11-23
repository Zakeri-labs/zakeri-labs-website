"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Cta } from "./blocks";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { LocalizedLink as Link } from "./LocalizedLink";
import { Logo } from "./Logo";
import { COMMON, NAV_PATHS, type NavPath } from "@/lib/content/common";
import type { NavMenus } from "@/lib/content/detail";
import type { Lang } from "@/lib/locales";
import { useCopy, useI18n } from "@/lib/i18n";
import { stripLangFromPathname } from "@/lib/locales";
import { whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

const JOBS_URL = "https://job.omanai.tech";

type SubLink = { href: string; label: string; hint?: string };

/** Dropdown children of each top-level item (Sajjad's navigation, Nov 2026). */
function useSubmenus(menus: Record<Lang, NavMenus>): Partial<Record<NavPath, SubLink[]>> {
  const c = useCopy(COMMON);
  const { lang } = useI18n();
  const m = menus[lang];
  const map = (list: NavMenus["services"]) =>
    list.map((l) => ({ href: l.href, label: l.name, hint: l.summary }));
  return {
    "/services": [...map(m.services), { href: "/services", label: c.menu2.allServices }],
    "/products": [...map(m.products), { href: "/products", label: c.menu2.allProducts }],
    "/industries": [...map(m.industries), { href: "/industries", label: c.menu2.allIndustries }],
    "/work": [
      { href: "/work#case-studies", label: c.menu2.caseStudies },
      { href: "/work#portfolio", label: c.menu2.portfolio },
      { href: "/portfolio", label: c.menu2.videos },
    ],
    "/about": [
      { href: "/about", label: c.menu2.aboutIdrak },
      { href: "/how-we-work", label: c.menu2.howWeWork },
      { href: JOBS_URL, label: c.menu2.careers },
    ],
  };
}

function SubItem({ link, onClick }: { link: SubLink; onClick?: () => void }) {
  const cls = "block rounded-xl px-3 py-2.5 transition hover:bg-secondary";
  const body = (
    <>
      <span className="block text-sm font-semibold text-foreground">{link.label}</span>
      {link.hint && (
        <span className="mt-0.5 line-clamp-2 block text-xs leading-snug text-muted-foreground">
          {link.hint}
        </span>
      )}
    </>
  );
  return link.href.startsWith("http") ? (
    <a href={link.href} className={cls} onClick={onClick}>
      {body}
    </a>
  ) : (
    <Link href={link.href} className={cls} onClick={onClick}>
      {body}
    </Link>
  );
}

export function Header({
  menus,
  hasArticles = false,
}: {
  menus: Record<Lang, NavMenus>;
  hasArticles?: boolean;
}) {
  const c = useCopy(COMMON);
  const { lang } = useI18n();
  const sub = useSubmenus(menus);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const current = stripLangFromPathname(usePathname() || "/");
  const isActive = (href: string) =>
    href === "/"
      ? current === "/"
      : current.startsWith(href) ||
        (href === "/about" && current.startsWith("/how-we-work")) ||
        (href === "/work" && current.startsWith("/portfolio"));
  // Insights stays hidden until an article is published (an empty /articles is noindex).
  const navPaths = NAV_PATHS.filter((p) => p !== "/articles" || hasArticles);
  // Close a hover/focus dropdown after a pick or on Escape.
  const closeMenu = () => (document.activeElement as HTMLElement | null)?.blur();
  // On the contact page the header CTA jumps straight to the form.
  const ctaHref = current === "/contact" ? "#contact-form" : "/contact";

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-background/90 backdrop-blur-xl"
          : "border-transparent bg-background/60 backdrop-blur",
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-6">
          <Link href="/" aria-label="IDRAK AI Solutions" className="shrink-0 py-1">
            <Logo className="h-9 w-auto sm:h-10" />
          </Link>

          <nav aria-label={c.navigation} className="hidden items-center gap-0.5 xl:flex">
            {navPaths
              .filter((p) => p !== "/")
              .map((path) => {
                const children = sub[path];
                return (
                  <div
                    key={path}
                    className="group relative"
                    onKeyDown={(e) => e.key === "Escape" && closeMenu()}
                  >
                    <Link
                      href={path}
                      aria-current={isActive(path) ? "page" : undefined}
                      className={cn(
                        "inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition hover:text-primary",
                        isActive(path) ? "bg-secondary text-primary" : "text-foreground/75",
                      )}
                    >
                      {c.nav[path]}
                      {children && (
                        <ChevronDown className="h-3.5 w-3.5 opacity-60 transition group-hover:rotate-180 group-focus-within:rotate-180" />
                      )}
                    </Link>
                    {children && (
                      <div className="invisible absolute start-0 top-full z-50 pt-2 opacity-0 transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                        <div
                          className={cn(
                            // Opaque: a nested backdrop-blur does not blur in Chromium, so text behind showed through.
                            "grid gap-0.5 rounded-2xl border border-border bg-[#0b1022] p-2 shadow-[var(--shadow-lift)] ring-1 ring-white/5",
                            children.length > 5 ? "w-[40rem] grid-cols-2" : "w-72",
                          )}
                        >
                          {children.map((l, i) => (
                            <div
                              key={l.href + l.label}
                              className={cn(
                                children.length > 5 &&
                                  i === children.length - 1 &&
                                  "col-span-2 mt-1 border-t border-border pt-1",
                              )}
                            >
                              <SubItem link={l} onClick={closeMenu} />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <Cta
            href={ctaHref}
            icon="none"
            className="hidden min-h-10 px-5 py-2 text-sm md:inline-flex"
          >
            {c.cta.discuss}
          </Cta>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface xl:hidden"
                aria-label={c.menu}
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              side={lang === "ar" ? "left" : "right"}
              className="w-[85vw] max-w-sm border-border bg-background"
            >
              <SheetTitle className="sr-only">{c.navigation}</SheetTitle>
              <div className="flex h-full flex-col gap-6 overflow-y-auto p-6">
                <Logo className="h-9 w-auto self-start" />
                <nav aria-label={c.navigation} className="flex flex-col gap-1">
                  {navPaths.map((path) => {
                    const children = sub[path];
                    const item = cn(
                      "rounded-xl px-4 py-3 text-base font-medium transition hover:bg-secondary",
                      isActive(path) ? "bg-secondary text-primary" : "text-foreground/80",
                    );
                    return children ? (
                      <details key={path} className="group/m">
                        <summary
                          className={cn(
                            item,
                            "flex cursor-pointer list-none items-center justify-between [&::-webkit-details-marker]:hidden",
                          )}
                        >
                          {c.nav[path]}
                          <ChevronDown className="h-4 w-4 opacity-60 transition group-open/m:rotate-180" />
                        </summary>
                        <div className="ms-3 mt-1 border-s border-border ps-2">
                          {children.map((l) => (
                            <SubItem
                              key={l.href + l.label}
                              link={{ ...l, hint: undefined }}
                              onClick={() => setOpen(false)}
                            />
                          ))}
                        </div>
                      </details>
                    ) : (
                      <Link key={path} href={path} onClick={() => setOpen(false)} className={item}>
                        {c.nav[path]}
                      </Link>
                    );
                  })}
                </nav>
                <div
                  className="mt-auto flex flex-col gap-3 border-t border-border pt-6"
                  onClick={() => setOpen(false)}
                >
                  <Cta href="/contact">{c.cta.discuss}</Cta>
                  <Cta href={whatsappUrl(lang)} variant="outline" icon="whatsapp">
                    {c.cta.whatsappShort}
                  </Cta>
                  <LanguageSwitcher className="self-center" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
