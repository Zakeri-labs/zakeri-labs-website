import { CaseStudiesContent } from "@/components/site/pages/InsightsContent";
import { createPageMetadata, getProjectsJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata("case-study", "en");

const projectsJsonLd = getProjectsJsonLd("en");

export default function CaseStudyPage() {
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
