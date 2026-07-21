"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site";

const NAV = [
  { to: "/", key: "nav.home" },
  { to: "/services", key: "nav.services" },
  { to: "/pricing", key: "nav.pricing" },
  { to: "/case-study", key: "nav.insights" },
  { to: "/about", key: "nav.about" },
  { to: "/contact", key: "nav.contact" },
] as const;

export function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname === href);

  return (
    <header className="sticky top-0 z-40 border-b border-border/30 bg-background/40 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 flex-col">
          <Logo />
          <span className="mt-0.5 hidden text-[10px] uppercase tracking-wider text-muted-foreground md:hidden">
            {SITE.tagline}
          </span>
          <span className="mt-0.5 text-[10px] uppercase tracking-wider text-muted-foreground md:hidden">
            {SITE.tagline}
          </span>
        </Link>

        <nav className="hidden items-center justify-center gap-7 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              href={n.to}
              className={`text-sm transition hover:text-foreground ${
                isActive(n.to) ? "font-medium text-foreground" : "text-muted-foreground"
              }`}
            >
              {t(n.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 justify-self-end">
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>
          <Button
            asChild
            size="sm"
            className="hidden bg-primary text-primary-foreground shadow-[var(--shadow-elegant)] hover:bg-primary/90 sm:inline-flex"
          >
            <Link href="/contact">
              {t("cta.audit")} <ArrowRight className="ms-1.5 h-4 w-4" />
            </Link>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="grid h-9 w-9 place-items-center rounded-md border border-border bg-surface/60 lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-4 w-4" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 border-border bg-background">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="flex flex-col gap-6 pt-2">
                <Logo />
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {SITE.tagline}
                </p>
                <nav className="flex flex-col gap-1">
                  {NAV.map((n) => (
                    <Link
                      key={n.to}
                      href={n.to}
                      onClick={() => setOpen(false)}
                      className={`rounded-md px-3 py-2.5 text-sm transition hover:bg-surface hover:text-foreground ${
                        isActive(n.to)
                          ? "bg-surface font-medium text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {t(n.key)}
                    </Link>
                  ))}
                </nav>
                <div className="space-y-3 border-t border-border pt-4">
                  <LanguageSwitcher />
                  <Button asChild className="w-full">
                    <Link href="/contact" onClick={() => setOpen(false)}>
                      {t("cta.audit")}
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
                      {t("cta.whatsapp")}
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
