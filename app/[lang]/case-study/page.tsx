import { notFound } from "next/navigation";

import { CaseStudiesContent } from "@/components/site/pages/InsightsContent";
import { isLocalizedLang } from "@/lib/locales";
import { createPageMetadata, getProjectsJsonLd } from "@/lib/seo";

type PageProps = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocalizedLang(lang)) notFound();
  return createPageMetadata("case-study", lang);
}

export default async function LocalizedCaseStudyPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocalizedLang(lang)) notFound();
  const projectsJsonLd = getProjectsJsonLd(lang);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />
      <CaseStudiesContent />
    </>
  );
}
