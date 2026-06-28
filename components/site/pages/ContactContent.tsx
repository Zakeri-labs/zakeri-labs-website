"use client";

import { MessageCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionBadge } from "@/components/site/SectionBadge";
import { ContactForm } from "@/components/site/ContactForm";
import { SITE } from "@/lib/site";
import { useI18n } from "@/lib/i18n";

const FAQ_KEYS = [
  "contact.faq.1",
  "contact.faq.2",
  "contact.faq.3",
  "contact.faq.4",
  "contact.faq.5",
  "contact.faq.6",
];

export function ContactContent() {
  const { t } = useI18n();
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-3xl">
        <SectionBadge>{t("contact.badge")}</SectionBadge>
        <h1 className="mt-3 font-display text-4xl font-bold lg:text-5xl">{t("contact.title")}</h1>
        <p className="mt-4 text-base text-muted-foreground">{t("contact.desc")}</p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <Card className="glass-card border-0 p-6 lg:p-8">
          <h2 className="text-lg font-semibold">{t("contact.formTitle")}</h2>
          <p className="mt-1 text-xs text-muted-foreground">{t("contact.formDesc")}</p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </Card>

        <div className="space-y-4">
          <Card className="glass-card border-0 p-6">
            <h3 className="text-sm font-semibold">{t("contact.directChannels")}</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-md bg-primary/10">
                  <Phone className="h-4 w-4 text-primary" />
                </span>
                <span className="text-foreground/90">{SITE.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-md bg-primary/10">
                  <Mail className="h-4 w-4 text-primary" />
                </span>
                <span className="text-foreground/90">{SITE.email}</span>
              </li>
            </ul>
            <Button asChild className="mt-5 w-full" variant="outline">
              <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle className="me-2 h-4 w-4" /> {t("cta.whatsapp")}
              </a>
            </Button>
          </Card>
          <Card className="glass-card border-0 p-6">
            <h3 className="text-sm font-semibold">{t("contact.responseTitle")}</h3>
            <p className="mt-2 text-xs text-muted-foreground">{t("contact.responseDesc")}</p>
          </Card>
        </div>
      </div>

      <div className="mt-16">
        <SectionBadge>{t("contact.faqBadge")}</SectionBadge>
        <h2 className="mt-3 font-display text-3xl font-bold lg:text-4xl">
          {t("contact.faqTitle")}
        </h2>
        <Card className="glass-card mt-6 border-0 p-2 sm:p-4">
          <Accordion type="single" collapsible className="w-full">
            {FAQ_KEYS.map((k, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-sm font-semibold">
                  {t(`${k}.q`)}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {t(`${k}.a`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </section>
  );
}
