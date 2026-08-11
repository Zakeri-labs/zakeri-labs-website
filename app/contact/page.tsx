import { ContactContent } from "@/components/site/pages/ContactContent";
import { createPageMetadata, getFaqJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata("contact", "en");

const faqJsonLd = getFaqJsonLd("en");

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ContactContent />
    </>
  );
}
