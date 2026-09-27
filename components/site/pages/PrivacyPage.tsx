"use client";

import { PageHero, Section } from "@/components/site/blocks";
import { PRIVACY } from "@/lib/content/privacy";
import { useCopy } from "@/lib/i18n";

export function PrivacyPage() {
  const p = useCopy(PRIVACY);
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title} intro={p.intro} support={p.updated} />
      <Section className="pt-0 lg:pt-0">
        <div className="max-w-3xl space-y-10">
          {p.sections.map((s) => (
            <section key={s.h}>
              <h2 className="text-2xl font-bold">{s.h}</h2>
              <div className="mt-3 space-y-3 leading-relaxed text-muted-foreground">
                {s.p.map((t) => (
                  <p key={t}>{t}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Section>
    </>
  );
}
