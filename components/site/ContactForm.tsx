"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useI18n } from "@/lib/i18n";

export function ContactForm() {
  const { t } = useI18n();
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      toast.success(t("form.toast"));
    }, 600);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <Input name="name" placeholder={t("form.name")} required className="bg-background/40" />
        <Input name="company" placeholder={t("form.company")} className="bg-background/40" />
        <Input
          name="website"
          placeholder={t("form.website")}
          type="url"
          className="bg-background/40"
        />
        <Input name="phone" placeholder={t("form.phone")} className="bg-background/40" />
        <Select name="goal">
          <SelectTrigger className="bg-background/40">
            <SelectValue placeholder={t("form.goal")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="traffic">{t("form.goal.traffic")}</SelectItem>
            <SelectItem value="leads">{t("form.goal.leads")}</SelectItem>
            <SelectItem value="trust">{t("form.goal.trust")}</SelectItem>
            <SelectItem value="ai">{t("form.goal.ai")}</SelectItem>
            <SelectItem value="rebuild">{t("form.goal.rebuild")}</SelectItem>
          </SelectContent>
        </Select>
        <Select name="budget">
          <SelectTrigger className="bg-background/40">
            <SelectValue placeholder={t("form.budget")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="s">{t("form.budget.s")}</SelectItem>
            <SelectItem value="m">{t("form.budget.m")}</SelectItem>
            <SelectItem value="l">{t("form.budget.l")}</SelectItem>
            <SelectItem value="xl">{t("form.budget.xl")}</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Textarea
        name="message"
        placeholder={t("form.message")}
        rows={4}
        className="bg-background/40"
      />
      <Button type="submit" disabled={loading} className="w-full">
        {loading ? t("cta.sending") : t("cta.send")}
        <Send className="ms-2 h-4 w-4" />
      </Button>
    </form>
  );
}
