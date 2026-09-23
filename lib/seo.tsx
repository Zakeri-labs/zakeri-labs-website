import type { Metadata } from "next";

import { ABOUT } from "@/lib/content/about";
import { COMMON } from "@/lib/content/common";
import { CONTACT } from "@/lib/content/contact";
import { HOW } from "@/lib/content/how";
import { PRODUCTS } from "@/lib/content/products";
import { SERVICES } from "@/lib/content/services";
import { LANGUAGES, localizePathname, type Lang } from "@/lib/locales";
import { PROJECTS } from "@/lib/projects";
import { SITE } from "@/lib/site";

export type PublicPage =
  | "home"
  | "services"
  | "products"
  | "selected-work"
  | "about"
  | "how-we-work"
  | "contact";

export const PUBLIC_PAGE_PATHS: Record<PublicPage, string> = {
  home: "/",
  services: "/services",
  products: "/products",
  "selected-work": "/selected-work",
  about: "/about",
  "how-we-work": "/how-we-work",
  contact: "/contact",
};

type SeoEntry = { title: string; description: string; ogTitle?: string; ogDescription?: string };

const SEO_COPY: Record<PublicPage, Record<Lang, SeoEntry>> = {
  home: {
    en: {
      title: "IDRAK AI Solutions Oman | AI Automation, Video & Digital Solutions",
      description:
        "IDRAK AI Solutions helps businesses in Oman use AI to increase sales, reduce manual work and improve performance through automation, AI video, WhatsApp CRM, content and digital solutions.",
      ogTitle: "IDRAK AI Solutions | AI That Creates Business Value",
      ogDescription:
        "Practical AI solutions for sales, automation, customer experience, content and business growth.",
    },
    ar: {
      title: "إدراك للحلول الذكية عُمان | أتمتة وفيديو وحلول رقمية بالذكاء الاصطناعي",
      description:
        "تساعد إدراك للحلول الذكية الشركات في عُمان على توظيف الذكاء الاصطناعي لزيادة المبيعات وتقليل العمل اليدوي وتحسين الأداء عبر الأتمتة وفيديو الذكاء الاصطناعي وCRM واتساب والمحتوى والحلول الرقمية.",
      ogTitle: "إدراك للحلول الذكية | ذكاء اصطناعي يصنع قيمة للأعمال",
      ogDescription:
        "حلول ذكاء اصطناعي عملية للمبيعات والأتمتة وتجربة العملاء والمحتوى ونمو الأعمال.",
    },
  },
  services: {
    en: {
      title: "AI Services in Oman | Automation, AI Video, Content & Web | IDRAK",
      description:
        "Explore IDRAK AI Solutions services in Oman, including custom business automation, AI video production, content and social media management, web design, SEO and GEO.",
    },
    ar: {
      title: "خدمات الذكاء الاصطناعي في عُمان | الأتمتة والفيديو والمحتوى والويب | إدراك",
      description:
        "استكشف خدمات إدراك للحلول الذكية في عُمان: أتمتة الأعمال المخصّصة، وإنتاج الفيديو بالذكاء الاصطناعي، وإدارة المحتوى ووسائل التواصل، وتصميم المواقع وSEO وGEO.",
    },
  },
  products: {
    en: {
      title: "IDRAK Products | Construction Supervision Reporting & Clinic CRM in Oman",
      description:
        "Ready-made IDRAK products for Oman: a construction supervision reporting system with pay-per-report pricing, and a clinic CRM with a WhatsApp assistant for booking, reminders and follow-up.",
    },
    ar: {
      title: "منتجات إدراك | نظام تقارير الإشراف على البناء وCRM العيادات في عُمان",
      description:
        "منتجات إدراك الجاهزة في عُمان: نظام تقارير الإشراف على البناء بالدفع لكل تقرير، ونظام CRM للعيادات مع مساعد واتساب للحجز والتذكير والمتابعة.",
    },
  },
  "selected-work": {
    en: {
      title: "Selected Work | Digital Projects by IDRAK AI Solutions",
      description:
        "Explore selected digital work by IDRAK AI Solutions across real estate, healthcare and professional services, including websites and digital experiences.",
    },
    ar: {
      title: "أعمال مختارة | مشاريع رقمية من إدراك للحلول الذكية",
      description:
        "استكشف أعمالاً رقمية مختارة من إدراك للحلول الذكية في العقارات والرعاية الصحية والخدمات المهنية، تشمل مواقع وتجارب رقمية.",
    },
  },
  about: {
    en: {
      title: "About IDRAK AI Solutions | AI for Real Business Growth in Oman",
      description:
        "Learn about IDRAK AI Solutions and founder Mohammadreza Zakeri, an Oman-based company focused on practical AI, automation, digital solutions and measurable business value.",
    },
    ar: {
      title: "عن إدراك للحلول الذكية | ذكاء اصطناعي لنمو حقيقي في عُمان",
      description:
        "تعرّف على إدراك للحلول الذكية ومؤسسها محمد رضا ذاكري؛ شركة مقرّها عُمان تركّز على الذكاء الاصطناعي العملي والأتمتة والحلول الرقمية والقيمة القابلة للقياس.",
    },
  },
  "how-we-work": {
    en: {
      title: "How We Work | IDRAK AI Solutions Oman",
      description:
        "Learn how IDRAK AI Solutions approaches business challenges, defines project scope and works through pilots, custom projects, ongoing partnerships and usage-based models.",
    },
    ar: {
      title: "كيف نعمل | إدراك للحلول الذكية عُمان",
      description:
        "تعرّف على كيف تتعامل إدراك للحلول الذكية مع تحديات الأعمال، وتحدّد نطاق المشاريع، وتعمل عبر التجارب الأولية والمشاريع المخصّصة والشراكات المستمرة والنماذج حسب الاستخدام.",
    },
  },
  contact: {
    en: {
      title: "Contact IDRAK AI Solutions | Oman",
      description:
        "Contact IDRAK AI Solutions in Oman to discuss business automation, AI video production, content, web design, SEO, GEO and IDRAK business products.",
    },
    ar: {
      title: "تواصل مع إدراك للحلول الذكية | عُمان",
      description:
        "تواصل مع إدراك للحلول الذكية في عُمان لمناقشة أتمتة الأعمال، وإنتاج الفيديو بالذكاء الاصطناعي، والمحتوى، وتصميم المواقع، وSEO وGEO، ومنتجات إدراك.",
    },
  },
};

const OG_LOCALES: Record<Lang, string> = { en: "en_OM", ar: "ar_OM" };

export function absoluteUrl(pathname: string): string {
  return new URL(pathname, SITE.url).toString();
}

/** app/opengraph-image.jpg, set explicitly: per-page `openGraph` objects replace the inherited one. */
const SHARE_IMAGE = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "IDRAK AI Solutions — Beyond the AI hype. Real results for real business.",
  type: "image/jpeg",
};

export function createPageMetadata(page: PublicPage, lang: Lang): Metadata {
  const path = PUBLIC_PAGE_PATHS[page];
  const canonical = absoluteUrl(localizePathname(path, lang));
  const e = SEO_COPY[page][lang];
  const ogTitle = e.ogTitle ?? e.title;
  const ogDescription = e.ogDescription ?? e.description;

  return {
    title: { absolute: e.title },
    description: e.description,
    alternates: {
      canonical,
      languages: {
        ...Object.fromEntries(LANGUAGES.map((l) => [l, absoluteUrl(localizePathname(path, l))])),
        "x-default": absoluteUrl(path),
      },
    },
    openGraph: {
      siteName: SITE.name,
      type: "website",
      title: ogTitle,
      description: ogDescription,
      url: canonical,
      locale: OG_LOCALES[lang],
      alternateLocale: LANGUAGES.filter((l) => l !== lang).map((l) => OG_LOCALES[l]),
      images: [SHARE_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [SHARE_IMAGE],
    },
  };
}

/* ---------- Structured data ---------- */

export function jsonLdScript(data: object) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe apart from "</script>"; escape "<" to be sure.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

const ORG_ID = `${SITE.url}/#organization`;
const provider = { "@id": ORG_ID };

export function getOrganizationJsonLd(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    alternateName: ["IDRAK", "إدراك للحلول الذكية"],
    legalName: SITE.legalName,
    url: SITE.url,
    logo: absoluteUrl("/icon.png"),
    email: SITE.email,
    telephone: `+${SITE.phoneRaw}`,
    description: COMMON[lang].footer.description,
    foundingLocation: "Muscat, Oman",
    address: { "@type": "PostalAddress", addressLocality: "Muscat", addressCountry: "OM" },
    areaServed: { "@type": "Country", name: "Oman" },
    founder: { "@type": "Person", name: SITE.founder, jobTitle: "Founder & CEO" },
    identifier: {
      "@type": "PropertyValue",
      propertyID: "Commercial Registration (Oman)",
      value: SITE.crNumber,
    },
  };
}

function serviceList(
  name: string,
  url: string,
  items: { name: string; description: string; anchor: string }[],
  lang: Lang,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    url,
    inLanguage: lang,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: item.name,
        description: item.description,
        url: `${url}#${item.anchor}`,
        provider,
        areaServed: { "@type": "Country", name: "Oman" },
      },
    })),
  };
}

export function getServicesJsonLd(lang: Lang) {
  const s = SERVICES[lang];
  const anchors = ["automation", "ai-video", "content", "web"];
  return serviceList(
    s.overview.title,
    absoluteUrl(localizePathname("/services", lang)),
    s.overview.cards.map((card, i) => ({
      name: card.title,
      description: card.text,
      anchor: anchors[i],
    })),
    lang,
  );
}

export function getProductsJsonLd(lang: Lang) {
  const p = PRODUCTS[lang];
  return serviceList(
    p.hero.title,
    absoluteUrl(localizePathname("/products", lang)),
    [
      {
        name: p.construction.title,
        description: p.construction.lead,
        anchor: "construction-reporting",
      },
      { name: p.clinic.title, description: p.clinic.subtitle, anchor: "clinic-crm" },
    ],
    lang,
  );
}

export function getFaqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export const FAQS = {
  services: (lang: Lang) => SERVICES[lang].faq.items,
  products: (lang: Lang) => PRODUCTS[lang].faq.items,
  "how-we-work": (lang: Lang) => HOW[lang].faq.items,
  contact: (lang: Lang) => CONTACT[lang].faq.items,
};

export function getProjectsJsonLd(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: SEO_COPY["selected-work"][lang].title,
    url: absoluteUrl(localizePathname("/selected-work", lang)),
    itemListElement: PROJECTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: { "@type": "CreativeWork", name: p.name, url: p.url, creator: provider },
    })),
  };
}

export function getAboutJsonLd(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url: absoluteUrl(localizePathname("/about", lang)),
    about: provider,
    mainEntity: {
      "@type": "Person",
      name: SITE.founder,
      jobTitle: "Founder & CEO",
      worksFor: provider,
      description: ABOUT[lang].founder.paragraphs[0],
    },
  };
}
