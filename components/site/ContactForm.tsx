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
      toast.success("Request received — we'll be in touch shortly.");
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
            <SelectItem value="traffic">More Qualified Traffic</SelectItem>
            <SelectItem value="leads">Generate More Leads</SelectItem>
            <SelectItem value="trust">Build Trust & Authority</SelectItem>
            <SelectItem value="ai">AI / Search Visibility</SelectItem>
            <SelectItem value="rebuild">Rebuild Existing Website</SelectItem>
          </SelectContent>
        </Select>
        <Select name="budget">
          <SelectTrigger className="bg-background/40">
            <SelectValue placeholder={t("form.budget")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="s">Under $3K</SelectItem>
            <SelectItem value="m">$3K – $8K</SelectItem>
            <SelectItem value="l">$8K – $20K</SelectItem>
            <SelectItem value="xl">$20K+</SelectItem>
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
        {loading ? "Sending..." : t("cta.send")}
        <Send className="ms-2 h-4 w-4" />
      </Button>
    </form>
  );
}
