"use client";

import { toast } from "sonner";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/site";

type ContactFormProps = {
  variant?: "contact" | "operations";
};

const fieldClassName = "bg-background/40";

export function ContactForm({ variant = "contact" }: ContactFormProps) {
  const { t } = useI18n();
  const isOperations = variant === "operations";

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast.error(t("form.notConnected"), {
      description: (
        <div className="mt-2 flex flex-col gap-1">
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-primary hover:underline"
          >
            {t("cta.whatsapp")}: {SITE.phone}
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="break-all font-medium text-primary hover:underline"
          >
            {SITE.email}
          </a>
        </div>
      ),
      duration: 10000,
    });
  }

  if (!isOperations) {
    return (
      <form onSubmit={onSubmit} className="space-y-5" aria-describedby="contact-required-note">
        <fieldset className="space-y-4">
          <legend className="sr-only">{t("form.legend")}</legend>
          <p id="contact-required-note" className="text-xs text-muted-foreground">
            {t("form.requiredNote")}
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="contact-name">{t("form.name")} *</Label>
              <Input
                id="contact-name"
                name="name"
                autoComplete="name"
                required
                className={fieldClassName}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-company">{t("form.company")} *</Label>
              <Input
                id="contact-company"
                name="company"
                autoComplete="organization"
                required
                className={fieldClassName}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-email">{t("form.email")} *</Label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={fieldClassName}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-phone">{t("form.contactPhone")}</Label>
              <Input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className={fieldClassName}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-role">{t("form.role")} *</Label>
              <Select name="role" required>
                <SelectTrigger id="contact-role" className={fieldClassName} aria-required="true">
                  <SelectValue placeholder={t("form.role")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="founder-owner">{t("form.role.founder")}</SelectItem>
                  <SelectItem value="ceo-general-manager">{t("form.role.executive")}</SelectItem>
                  <SelectItem value="operations">{t("form.role.operations")}</SelectItem>
                  <SelectItem value="sales">{t("form.role.sales")}</SelectItem>
                  <SelectItem value="admin-finance">{t("form.role.admin")}</SelectItem>
                  <SelectItem value="other">{t("form.role.other")}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-company-size">{t("form.companySize")}</Label>
              <Select name="companySize">
                <SelectTrigger id="contact-company-size" className={fieldClassName}>
                  <SelectValue placeholder={t("form.companySize")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-9">{t("form.companySize.1")}</SelectItem>
                  <SelectItem value="10-25">{t("form.companySize.2")}</SelectItem>
                  <SelectItem value="26-50">{t("form.companySize.3")}</SelectItem>
                  <SelectItem value="51-100">{t("form.companySize.4")}</SelectItem>
                  <SelectItem value="100-plus">{t("form.companySize.5")}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="contact-challenge">{t("form.challenge")} *</Label>
              <Select name="challenge" required>
                <SelectTrigger
                  id="contact-challenge"
                  className={fieldClassName}
                  aria-required="true"
                >
                  <SelectValue placeholder={t("form.challenge")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="manual-follow-up">{t("form.challenge.followup")}</SelectItem>
                  <SelectItem value="project-task-visibility">
                    {t("form.challenge.visibility")}
                  </SelectItem>
                  <SelectItem value="sales-lead-follow-up">{t("form.challenge.sales")}</SelectItem>
                  <SelectItem value="approval-delays">{t("form.challenge.approvals")}</SelectItem>
                  <SelectItem value="manual-reporting">{t("form.challenge.reporting")}</SelectItem>
                  <SelectItem value="crm-erp-workflow">{t("form.challenge.crm")}</SelectItem>
                  <SelectItem value="scattered-information">
                    {t("form.challenge.scattered")}
                  </SelectItem>
                  <SelectItem value="key-person-dependency">
                    {t("form.challenge.dependency")}
                  </SelectItem>
                  <SelectItem value="business-process-automation">
                    {t("form.challenge.automation")}
                  </SelectItem>
                  <SelectItem value="other">{t("form.challenge.other")}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="contact-tools">{t("form.tools")}</Label>
              <Input
                id="contact-tools"
                name="tools"
                placeholder={t("form.toolsPlaceholder")}
                className={fieldClassName}
              />
            </div>

            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="contact-message">{t("form.message")} *</Label>
              <Textarea
                id="contact-message"
                name="message"
                placeholder={t("form.messagePlaceholder")}
                rows={5}
                required
                className={fieldClassName}
              />
            </div>
          </div>
        </fieldset>

        <Button
          type="submit"
          className="h-auto w-full whitespace-normal py-2 text-center leading-snug"
        >
          {t("form.submitAssessment")}
          <Send className="ms-2 h-4 w-4" />
        </Button>
      </form>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <Input name="name" placeholder={t("form.name")} required className={fieldClassName} />
        <Input name="company" placeholder={t("form.company")} className={fieldClassName} />
        <Input name="systems" placeholder={t("homeForm.systems")} className={fieldClassName} />
        <Input name="phone" placeholder={t("form.phone")} className={fieldClassName} />
        <Select name="challenge">
          <SelectTrigger className={fieldClassName}>
            <SelectValue placeholder={t("homeForm.challenge")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="followup">{t("homeForm.challenge.followup")}</SelectItem>
            <SelectItem value="visibility">{t("homeForm.challenge.visibility")}</SelectItem>
            <SelectItem value="leads">{t("homeForm.challenge.leads")}</SelectItem>
            <SelectItem value="approvals">{t("homeForm.challenge.approvals")}</SelectItem>
            <SelectItem value="reporting">{t("homeForm.challenge.reporting")}</SelectItem>
          </SelectContent>
        </Select>
        <Select name="teamSize">
          <SelectTrigger className={fieldClassName}>
            <SelectValue placeholder={t("homeForm.teamSize")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="under-10">{t("homeForm.teamSize.1")}</SelectItem>
            <SelectItem value="10-25">{t("homeForm.teamSize.2")}</SelectItem>
            <SelectItem value="26-50">{t("homeForm.teamSize.3")}</SelectItem>
            <SelectItem value="51-100">{t("homeForm.teamSize.4")}</SelectItem>
            <SelectItem value="100-plus">{t("homeForm.teamSize.5")}</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Textarea
        name="message"
        placeholder={t("homeForm.message")}
        rows={4}
        className={fieldClassName}
      />
      <Button
        type="submit"
        className="h-auto w-full whitespace-normal py-2 text-center leading-snug"
      >
        {t("homeForm.send")}
        <Send className="ms-2 h-4 w-4" />
      </Button>
    </form>
  );
}
