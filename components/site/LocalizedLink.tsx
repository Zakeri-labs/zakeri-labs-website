"use client";

import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes } from "react";

import { useI18n } from "@/lib/i18n";
import { localizePathname } from "@/lib/locales";

type LocalizedLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    href: string;
  };

export function LocalizedLink({ href, ...props }: LocalizedLinkProps) {
  const { lang } = useI18n();
  const localizedHref = href.startsWith("/") ? localizePathname(href, lang) : href;

  return <Link href={localizedHref} {...props} />;
}
