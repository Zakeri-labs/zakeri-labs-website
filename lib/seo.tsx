import type { Metadata } from "next";

import { ABOUT } from "@/lib/content/about";
import { COMMON } from "@/lib/content/common";
import { CONTACT } from "@/lib/content/contact";
import { HOW } from "@/lib/content/how";
import { DETAIL_PAGES } from "@/lib/content/detail";
import { PRODUCTS } from "@/lib/content/products";
import { SERVICES } from "@/lib/content/services";
import { LANGUAGES, localizePathname, type Lang } from "@/lib/locales";
import { PROJECTS } from "@/lib/projects";
import { SITE } from "@/lib/site";

export type PublicPage =
  | "home"
  | "services"
  | "products"
  | "industries"
  | "work"
  | "portfolio"
  | "about"
  | "how-we-work"
  | "contact"
  | "privacy"
  | "terms"
  | "deletion";

export const PUBLIC_PAGE_PATHS: Record<PublicPage, string> = {
  home: "/",
  services: "/services",
  products: "/products",
  industries: "/industries",
  work: "/work",
  portfolio: "/portfolio",
  about: "/about",
  "how-we-work": "/how-we-work",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
  deletion: "/deletion",
};

type SeoEntry = { title: string; description: string; ogTitle?: string; ogDescription?: string };

const SEO_COPY: Record<PublicPage, Record<Lang, SeoEntry>> = {
  home: {
    en: {
      title: "IDRAK Oman | Custom Software, AI Automation & WhatsApp AI",
      description:
        "IDRAK builds custom software, AI automation and WhatsApp AI for businesses in Oman: more sales, less manual work and better performance. Based in Muscat.",
      ogTitle: "IDRAK AI Solutions | AI That Creates Business Value",
      ogDescription:
        "Practical AI solutions for sales, automation, customer experience, content and business growth.",
    },
    ar: {
      title: "إدراك عُمان | برمجيات مخصّصة وأتمتة وواتساب بالذكاء الاصطناعي",
      description:
        "تبني إدراك برمجيات مخصّصة وأتمتة بالذكاء الاصطناعي ومساعدات واتساب للشركات في عُمان: مبيعات أكثر، وعمل يدوي أقل، وأداء أفضل. مقرّنا مسقط.",
      ogTitle: "إدراك للحلول الذكية | ذكاء اصطناعي يصنع قيمة للأعمال",
      ogDescription:
        "حلول ذكاء اصطناعي عملية للمبيعات والأتمتة وتجربة العملاء والمحتوى ونمو الأعمال.",
    },
  },
  services: {
    en: {
      title: "Software & AI Services in Oman: Automation, Video, Web | IDRAK",
      description:
        "IDRAK services in Oman: custom software development, AI business automation, WhatsApp AI agents, AI video production, content, web design and SEO & GEO.",
    },
    ar: {
      title: "خدمات البرمجيات والذكاء الاصطناعي في عُمان | تطوير وأتمتة | إدراك",
      description:
        "خدمات إدراك في عُمان: تطوير برمجيات مخصّصة، وأتمتة الأعمال بالذكاء الاصطناعي، ووكلاء واتساب الذكية، وإنتاج الفيديو، والمحتوى، وتصميم المواقع، وSEO وGEO.",
    },
  },
  products: {
    en: {
      title: "IDRAK Products: Construction Reporting & Clinic CRM | Oman",
      description:
        "Ready-made IDRAK software for Oman: construction supervision reporting priced per report, and a clinic CRM with a WhatsApp assistant for bookings and follow-up.",
    },
    ar: {
      title: "منتجات إدراك: تقارير الإشراف على البناء وCRM العيادات | عُمان",
      description:
        "منتجات إدراك الجاهزة في عُمان: نظام تقارير الإشراف على البناء بالدفع لكل تقرير، ونظام CRM للعيادات مع مساعد واتساب للحجز والتذكير والمتابعة.",
    },
  },
  industries: {
    en: {
      title: "Industry Solutions in Oman | Software & AI by Sector | IDRAK",
      description:
        "Custom software, WhatsApp AI, automation and AI video for real estate, healthcare, construction, distribution, facility management and logistics in Oman.",
    },
    ar: {
      title: "حلول القطاعات في عُمان | برمجيات وذكاء اصطناعي لكل قطاع | إدراك",
      description:
        "برمجيات مخصّصة وأتمتة وواتساب ذكي وفيديو بالذكاء الاصطناعي للعقارات والرعاية الصحية والمقاولات والتوزيع وإدارة المرافق والخدمات اللوجستية في عُمان.",
    },
  },
  work: {
    en: {
      title: "Our Work | Case Studies, Websites & Demos | IDRAK Oman",
      description:
        "Case studies of custom software, automation and WhatsApp AI built by IDRAK in Oman, plus our website portfolio and video demos across real estate and healthcare.",
    },
    ar: {
      title: "أعمالنا | دراسات حالة ومواقع وعروض | إدراك عُمان",
      description:
        "دراسات حالة لبرمجيات مخصّصة وأتمتة وواتساب ذكي نفّذتها إدراك في عُمان، إلى جانب معرض المواقع وعروض الفيديو في العقارات والرعاية الصحية وغيرها.",
    },
  },
  about: {
    en: {
      title: "About IDRAK AI Solutions | AI for Real Business Growth in Oman",
      description:
        "Meet IDRAK AI Solutions and founder Mohammadreza Zakeri: a Muscat company building practical AI, automation and custom software with measurable business value.",
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
        "How IDRAK works: we start from the business challenge, define scope, then deliver through pilots, defined projects, ongoing partnerships or usage-based pricing.",
    },
    ar: {
      title: "كيف نعمل | إدراك للحلول الذكية عُمان",
      description:
        "كيف تعمل إدراك: نبدأ من تحدي العمل ونحدّد النطاق، ثم ننفّذ عبر تجربة أولية أو مشروع محدّد أو شراكة مستمرة أو تسعير حسب الاستخدام.",
    },
  },
  portfolio: {
    en: {
      title: "Video Portfolio: Reels, Product Films & Pitch Videos | IDRAK Oman",
      description:
        "Watch reels, product tours and pitch films produced by IDRAK in Oman, and see what our video and content production service includes, from script to final cut.",
    },
    ar: {
      title: "معرض الفيديو: ريلز وأفلام منتجات وعروض | إدراك عُمان",
      description:
        "شاهد الريلز وجولات المنتجات وأفلام العروض التي أنتجتها إدراك في عُمان، وتعرّف على ما تشمله خدمة إنتاج الفيديو والمحتوى لدينا من النص إلى النسخة النهائية.",
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
  privacy: {
    en: {
      title: "Privacy Policy | IDRAK AI Solutions",
      description:
        "How IDRAK AI Solutions SPC collects, uses and protects personal information from its website, AI assistant and WhatsApp communication.",
    },
    ar: {
      title: "سياسة الخصوصية | إدراك للحلول الذكية",
      description:
        "كيف تجمع إدراك للحلول الذكية المعلومات الشخصية وتستخدمها وتحميها عبر موقعها ومساعدها الذكي ومحادثات واتساب، وما حقوقك في الوصول إليها وحذفها.",
    },
  },
  terms: {
    en: {
      title: "Terms of Service | IDRAK AI Solutions",
      description:
        "The terms that govern use of the IDRAK AI Solutions website, its AI assistant and WhatsApp services, including acceptable use, liability and governing law in Oman.",
    },
    ar: {
      title: "شروط الخدمة | إدراك للحلول الذكية",
      description:
        "الشروط التي تحكم استخدام موقع إدراك للحلول الذكية ومساعدها الذكي وخدمات واتساب، بما في ذلك الاستخدام المقبول والمسؤولية والقانون العُماني المطبّق.",
    },
  },
  deletion: {
    en: {
      title: "Data Deletion Instructions | IDRAK AI Solutions",
      description:
        "How to ask IDRAK AI Solutions to delete your personal data, including data received through Facebook, Instagram or WhatsApp.",
    },
    ar: {
      title: "تعليمات حذف البيانات | إدراك للحلول الذكية",
      description:
        "كيف تطلب من إدراك للحلول الذكية حذف بياناتك الشخصية، بما فيها البيانات الواردة عبر فيسبوك أو إنستغرام أو واتساب.",
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

export type SeoOverride = {
  title?: string;
  description?: string;
  noindex?: boolean;
  canonical?: string;
  /** Site path or absolute URL of a 1200×630 share image. */
  ogImage?: string;
};

/** Pages with their own default share image (1200×630, in /public/og). */
const PAGE_IMAGE: Partial<Record<PublicPage, string>> = { portfolio: "/og/portfolio.jpg" };

/** A share image picked in the admin panel, in the shape buildMetadata wants. */
export const shareImage = (url: string | undefined, alt: string) =>
  url
    ? { url: url.startsWith("http") ? url : absoluteUrl(url), width: 1200, height: 630, alt }
    : undefined;

export function createPageMetadata(
  page: PublicPage,
  lang: Lang,
  override: SeoOverride = {},
): Metadata {
  const e = SEO_COPY[page][lang];
  const title = override.title || e.title;
  const description = override.description || e.description;
  return buildMetadata({
    path: PUBLIC_PAGE_PATHS[page],
    lang,
    title,
    description,
    ogTitle: override.title || e.ogTitle,
    ogDescription: override.description || e.ogDescription,
    noindex: override.noindex,
    canonical: override.canonical,
    image: shareImage(override.ogImage ?? PAGE_IMAGE[page], title),
  });
}

/** Title, description, canonical, hreflang, robots and OG/Twitter for any path. */
export function buildMetadata({
  path,
  lang,
  title,
  description,
  ogTitle = title,
  ogDescription = description,
  image,
  type = "website",
  noindex = false,
  canonical: canonicalOverride,
  ogUrl,
}: {
  path: string;
  lang: Lang;
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  image?: { url: string; width: number; height: number; alt: string };
  type?: "website" | "article";
  noindex?: boolean;
  canonical?: string;
  /** Share URL when it must differ from the canonical (a portfolio sample keeps its own preview). */
  ogUrl?: string;
}): Metadata {
  const canonical = canonicalOverride || absoluteUrl(localizePathname(path, lang));
  const images = [image ?? SHARE_IMAGE];

  return {
    title: { absolute: title },
    description,
    robots: noindex ? { index: false, follow: true } : undefined,
    alternates: {
      canonical,
      // A canonical pointing elsewhere makes this page a duplicate, so it has no hreflang set.
      languages: canonicalOverride
        ? undefined
        : {
            ...Object.fromEntries(
              LANGUAGES.map((l) => [l, absoluteUrl(localizePathname(path, l))]),
            ),
            "x-default": absoluteUrl(path),
          },
    },
    openGraph: {
      siteName: SITE.name,
      type,
      title: ogTitle,
      description: ogDescription,
      url: ogUrl ?? canonical,
      locale: OG_LOCALES[lang],
      alternateLocale: LANGUAGES.filter((l) => l !== lang).map((l) => OG_LOCALES[l]),
      images,
    },
    twitter: { card: "summary_large_image", title: ogTitle, description: ogDescription, images },
  };
}

export function getBreadcrumbJsonLd(items: { name: string; path: string }[], lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(localizePathname(item.path, lang)),
    })),
  };
}

export function getWebSiteJsonLd(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    inLanguage: lang,
    publisher: { "@id": `${SITE.url}/#organization` },
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
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: SITE.name,
    alternateName: ["IDRAK", "إدراك للحلول الذكية"],
    legalName: SITE.legalName,
    url: SITE.url,
    logo: absoluteUrl("/icon.png"),
    image: absoluteUrl("/opengraph-image.jpg"),
    email: SITE.email,
    telephone: `+${SITE.phoneRaw}`,
    description: COMMON[lang].footer.description,
    foundingLocation: "Muscat, Oman",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Muscat",
      addressRegion: "Muscat Governorate",
      addressCountry: "OM",
    },
    // Local SEO: based in Muscat, serving Oman and the GCC.
    areaServed: [
      { "@type": "City", name: "Muscat", containedInPlace: { "@type": "Country", name: "Oman" } },
      { "@type": "Country", name: "Oman" },
      { "@type": "Place", name: "GCC" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: `+${SITE.phoneRaw}`,
      email: SITE.email,
      areaServed: "OM",
      availableLanguage: ["English", "Arabic"],
    },
    knowsLanguage: ["en", "ar"],
    knowsAbout: DETAIL_PAGES.services.map((e) => e.en.name),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: lang === "ar" ? "خدمات ومنتجات إدراك" : "IDRAK services and products",
      itemListElement: [...DETAIL_PAGES.services, ...DETAIL_PAGES.products].map((e) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: e[lang].name,
          url: absoluteUrl(localizePathname(`/${e.kind}/${e.slug}`, lang)),
        },
      })),
    },
    ...(SITE.sameAs.length ? { sameAs: SITE.sameAs } : {}),
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
  kind: "services" | "products" | "industries",
  lang: Lang,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    url,
    inLanguage: lang,
    itemListElement: DETAIL_PAGES[kind].map((e, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": kind === "products" ? "SoftwareApplication" : "Service",
        name: e[lang].name,
        description: e[lang].summary,
        url: absoluteUrl(localizePathname(`/${kind}/${e.slug}`, lang)),
        provider,
        areaServed: { "@type": "Country", name: "Oman" },
      },
    })),
  };
}

export function getServicesJsonLd(lang: Lang) {
  return serviceList(
    SEO_COPY.services[lang].title,
    absoluteUrl(localizePathname("/services", lang)),
    "services",
    lang,
  );
}

export function getProductsJsonLd(lang: Lang) {
  return serviceList(
    SEO_COPY.products[lang].title,
    absoluteUrl(localizePathname("/products", lang)),
    "products",
    lang,
  );
}

export function getIndustriesJsonLd(lang: Lang) {
  return serviceList(
    SEO_COPY.industries[lang].title,
    absoluteUrl(localizePathname("/industries", lang)),
    "industries",
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
    name: SEO_COPY.work[lang].title,
    url: absoluteUrl(localizePathname("/work", lang)),
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
