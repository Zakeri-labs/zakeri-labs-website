"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Cta } from "./blocks";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { LocalizedLink as Link } from "./LocalizedLink";
import { Logo } from "./Logo";
import { COMMON, NAV_PATHS } from "@/lib/content/common";
import { useCopy, useI18n } from "@/lib/i18n";
import { stripLangFromPathname } from "@/lib/locales";
import { whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const c = useCopy(COMMON);
  const { lang } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const current = stripLangFromPathname(usePathname() || "/");
  const isActive = (href: string) => (href === "/" ? current === "/" : current.startsWith(href));
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
        <Link href="/" aria-label="IDRAK AI Solutions" className="shrink-0">
          <Logo className="h-9 w-auto sm:h-10" />
        </Link>

        <nav aria-label={c.navigation} className="hidden items-center gap-1 xl:flex">
          {NAV_PATHS.map((path) => (
            <Link
              key={path}
              href={path}
              aria-current={isActive(path) ? "page" : undefined}
              className={cn(
                "rounded-full px-3 py-2 text-sm font-medium transition hover:text-primary",
                isActive(path) ? "bg-secondary text-primary" : "text-foreground/75",
              )}
            >
              {c.nav[path]}
            </Link>
          ))}
        </nav>

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
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface xl:hidden"
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
                  {NAV_PATHS.map((path) => (
                    <Link
                      key={path}
                      href={path}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-xl px-4 py-3 text-base font-medium transition hover:bg-secondary",
                        isActive(path) ? "bg-secondary text-primary" : "text-foreground/80",
                      )}
                    >
                      {c.nav[path]}
                    </Link>
                  ))}
                </nav>
                <div
                  className="mt-auto flex flex-col gap-3 border-t border-border pt-6"
                  onClick={() => setOpen(false)}
                >
                  <Cta href="/contact">{c.cta.discuss}</Cta>
                  <Cta href={whatsappUrl(lang)} variant="outline" icon="whatsapp">
                    {c.cta.whatsapp}
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
