"use client";

import { Mail, MessageCircle, Phone } from "lucide-react";

import { ContactForm } from "@/components/site/ContactForm";
import { LocalizedLink } from "@/components/site/LocalizedLink";
import { SectionBadge } from "@/components/site/SectionBadge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getContactFaqs } from "@/lib/contact";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site";

const NEXT_STEP_KEYS = ["contact.next.1", "contact.next.2", "contact.next.3", "contact.next.4"];

export function ContactContent() {
  const { lang, t } = useI18n();
  const faqs = getContactFaqs(lang);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <section aria-labelledby="contact-page-title" className="max-w-3xl">
        <SectionBadge>{t("contact.badge")}</SectionBadge>
        <h1 id="contact-page-title" className="mt-3 font-display text-4xl font-bold lg:text-5xl">
          {t("contact.title")}
        </h1>
        <p className="mt-4 text-base text-muted-foreground">{t("contact.desc")}</p>
      </section>

      <section aria-labelledby="contact-form-title" className="mt-12">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Card className="glass-card min-w-0 border-0 p-6 lg:p-8">
            <h2 id="contact-form-title" className="text-lg font-semibold">
              {t("contact.formTitle")}
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">{t("contact.formDesc")}</p>
            <div className="mt-6">
              <ContactForm variant="contact" />
            </div>
          </Card>

          <aside aria-labelledby="direct-contact-title" className="min-w-0 space-y-4">
            <Card className="glass-card min-w-0 border-0 p-6">
              <h2 id="direct-contact-title" className="text-sm font-semibold">
                {t("contact.directChannels")}
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href={`tel:+${SITE.phoneRaw}`}
                    className="flex items-center gap-3 text-foreground/90 transition-colors hover:text-primary"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-primary/10">
                      <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                    </span>
                    <span>{SITE.phone}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-center gap-3 text-foreground/90 transition-colors hover:text-primary"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-primary/10">
                      <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                    </span>
                    <span className="break-all">{SITE.email}</span>
                  </a>
                </li>
              </ul>
              <p className="mt-5 text-xs text-muted-foreground">{t("contact.whatsappDesc")}</p>
              <Button
                asChild
                className="mt-4 h-auto w-full whitespace-normal py-2 text-center leading-snug"
                variant="outline"
              >
                <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
                  <MessageCircle className="me-2 h-4 w-4" aria-hidden="true" />
                  {t("contact.whatsappCta")}
                </a>
              </Button>
            </Card>
          </aside>
        </div>
      </section>

      <section aria-labelledby="contact-next-title" className="mt-16">
        <SectionBadge>{t("contact.nextBadge")}</SectionBadge>
        <h2 id="contact-next-title" className="mt-3 font-display text-3xl font-bold lg:text-4xl">
          {t("contact.nextTitle")}
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">{t("contact.nextDesc")}</p>

        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {NEXT_STEP_KEYS.map((key, index) => (
            <li key={key}>
              <Card className="glass-card h-full border-0 p-5">
                <span className="text-sm font-semibold text-primary" aria-hidden="true">
                  {index + 1}
                </span>
                <h3 className="mt-2 text-base font-semibold">{t(`${key}.title`)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t(`${key}.desc`)}</p>
              </Card>
            </li>
          ))}
        </ol>

        <nav aria-label={t("contact.explore")} className="mt-7">
          <p className="text-sm text-muted-foreground">{t("contact.explore")}</p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
            <LocalizedLink href="/services" className="text-primary hover:underline">
              {t("contact.explore.services")}
            </LocalizedLink>
            <LocalizedLink href="/about" className="text-primary hover:underline">
              {t("contact.explore.about")}
            </LocalizedLink>
            <LocalizedLink href="/" className="text-primary hover:underline">
              {t("contact.explore.home")}
            </LocalizedLink>
          </div>
        </nav>
      </section>

      <section aria-labelledby="contact-faq-title" className="mt-16">
        <SectionBadge>{t("contact.faqBadge")}</SectionBadge>
        <h2 id="contact-faq-title" className="mt-3 font-display text-3xl font-bold lg:text-4xl">
          {t("contact.faqTitle")}
        </h2>
        <Card className="glass-card mt-6 border-0 p-2 sm:p-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-start text-sm font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </section>
    </div>
  );
}
