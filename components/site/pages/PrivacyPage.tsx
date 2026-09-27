"use client";

import { PageHero, Section } from "@/components/site/blocks";
import { DELETION } from "@/lib/content/deletion";
import { PRIVACY } from "@/lib/content/privacy";
import { TERMS } from "@/lib/content/terms";
import { useCopy } from "@/lib/i18n";

type Legal = typeof PRIVACY;

function LegalPage({ content }: { content: Legal }) {
  const p = useCopy(content);
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

export const PrivacyPage = () => <LegalPage content={PRIVACY} />;
export const TermsPage = () => <LegalPage content={TERMS} />;
export const DeletionPage = () => <LegalPage content={DELETION} />;
