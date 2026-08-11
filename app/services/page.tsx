import { ServicesContent } from "@/components/site/pages/ServicesContent";
import { createPageMetadata, getServicesJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata("services", "en");

const servicesJsonLd = getServicesJsonLd("en");

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <ServicesContent />
    </>
  );
}
