import type { Metadata } from "next";

import { getCaseStudies } from "@/lib/case-studies";
import { getContactFaqs } from "@/lib/contact";
import { localizePathname, type Lang } from "@/lib/locales";
import { SITE } from "@/lib/site";

export type PublicPage = "home" | "services" | "pricing" | "case-study" | "about" | "contact";

export const PUBLIC_PAGE_PATHS: Record<PublicPage, string> = {
  home: "/",
  services: "/services",
  pricing: "/pricing",
  "case-study": "/case-study",
  about: "/about",
  contact: "/contact",
};

type SeoEntry = {
  title: string;
  description: string;
  openGraphDescription?: string;
};

const SEO_COPY: Record<PublicPage, Record<Lang, SeoEntry>> = {
  home: {
    en: {
      title: "Business Systems & Automation Consultant in Oman | Zakeri Labs",
      description:
        "I help growing businesses in Oman replace manual follow-up and scattered operations with visible, trackable, and automated business systems.",
      openGraphDescription:
        "Turn scattered, manual operations into clear workflows, management visibility, and practical automation for your business in Oman.",
    },
    ar: {
      title: "مستشار أنظمة الأعمال والأتمتة في عُمان | Zakeri Labs",
      description:
        "أساعد الشركات النامية في عُمان على استبدال المتابعة اليدوية والعمليات المبعثرة بأنظمة أعمال واضحة وقابلة للتتبّع ومؤتمتة.",
      openGraphDescription:
        "حوّل العمليات المبعثرة واليدوية إلى سير عمل واضح ورؤية إدارية وأتمتة عملية لشركتك في عُمان.",
    },
    fa: {
      title: "مشاور سیستم‌های کسب‌وکار و اتوماسیون در عمان | Zakeri Labs",
      description:
        "به کسب‌وکارهای در حال رشد در عمان کمک می‌کنم پیگیری دستی و عملیات پراکنده را به سیستم‌های شفاف، قابل پیگیری و خودکار تبدیل کنند.",
      openGraphDescription:
        "عملیات پراکنده و دستی را به گردش‌کار روشن، دید مدیریتی و اتوماسیون کاربردی برای کسب‌وکار خود در عمان تبدیل کنید.",
    },
  },
  services: {
    en: {
      title: "Business Systems & Automation Services in Oman",
      description:
        "Business automation services in Oman for growing companies: process assessment, workflow systems, CRM improvement, dashboards, integration, and practical AI.",
      openGraphDescription:
        "Improve recurring operations with clearer processes, visible workflow systems, management dashboards, and practical automation in Oman.",
    },
    ar: {
      title: "خدمات أنظمة الأعمال والأتمتة في عُمان",
      description:
        "خدمات أتمتة الأعمال في عُمان تشمل تقييم العمليات وأنظمة سير العمل وتحسين CRM ولوحات الإدارة والتكامل والذكاء الاصطناعي العملي.",
      openGraphDescription:
        "حسّن العمليات المتكررة من خلال عمليات أوضح وأنظمة سير عمل مرئية ولوحات إدارية وأتمتة عملية في عُمان.",
    },
    fa: {
      title: "خدمات سیستم‌های کسب‌وکار و اتوماسیون در عمان",
      description:
        "خدمات اتوماسیون کسب‌وکار در عمان شامل ارزیابی فرایند، سیستم گردش‌کار، بهبود CRM، داشبورد مدیریتی، یکپارچه‌سازی و هوش مصنوعی کاربردی.",
      openGraphDescription:
        "عملیات تکرارشونده را با فرایندهای روشن‌تر، سیستم گردش‌کار قابل‌مشاهده، داشبورد مدیریتی و اتوماسیون کاربردی در عمان بهبود دهید.",
    },
  },
  pricing: {
    en: {
      title: "Business Automation Pricing & Engagement Options in Oman",
      description:
        "Explore business automation consulting options in Oman, from an Operations Assessment or Paid Pilot to scoped implementation and ongoing optimization.",
      openGraphDescription:
        "Start with an Operations Assessment or focused Paid Pilot, then scope implementation around the workflow, integrations, and operational value.",
    },
    ar: {
      title: "أسعار أتمتة الأعمال وخيارات التعاون في عُمان",
      description:
        "استكشف خيارات استشارات أتمتة الأعمال في عُمان، من تقييم العمليات أو مشروع تجريبي مدفوع إلى التنفيذ المحدد والتحسين المستمر.",
      openGraphDescription:
        "ابدأ بتقييم العمليات أو مشروع تجريبي مدفوع ومحدد، ثم حدّد نطاق التنفيذ وفق سير العمل والتكاملات والقيمة التشغيلية.",
    },
    fa: {
      title: "هزینه اتوماسیون کسب‌وکار و گزینه‌های همکاری در عمان",
      description:
        "گزینه‌های مشاوره اتوماسیون کسب‌وکار در عمان را از ارزیابی عملیات یا پایلوت پولی تا پیاده‌سازی هدفمند و بهینه‌سازی مستمر بررسی کنید.",
      openGraphDescription:
        "با ارزیابی عملیات یا یک پایلوت پولی متمرکز شروع کنید و دامنه اجرا را بر اساس گردش‌کار، یکپارچه‌سازی‌ها و ارزش عملیاتی مشخص کنید.",
    },
  },
  "case-study": {
    en: {
      title: "Selected Work & Digital Projects by Zakeri",
      description:
        "Explore selected websites and digital projects by Zakeri across legal, real estate, healthcare, beauty, and agency contexts.",
      openGraphDescription:
        "Selected business-facing websites and digital projects demonstrating practical interface and technology delivery by Zakeri.",
    },
    ar: {
      title: "أعمال مختارة ومشاريع رقمية من زاكري",
      description:
        "استكشف مواقع ومشاريع رقمية مختارة من زاكري في مجالات القانون والعقارات والرعاية الصحية والتجميل والوكالات.",
      openGraphDescription:
        "مجموعة مختارة من المواقع والمشاريع الرقمية الموجّهة للأعمال، وتعرض خبرة زاكري في تنفيذ الواجهات والحلول التقنية العملية.",
    },
    fa: {
      title: "گزیده کارها و پروژه‌های دیجیتال زاکری",
      description:
        "وب‌سایت‌ها و پروژه‌های دیجیتال منتخب زاکری را در حوزه‌های حقوقی، املاک، سلامت، زیبایی و آژانس‌ها مشاهده کنید.",
      openGraphDescription:
        "گزیده‌ای از وب‌سایت‌ها و پروژه‌های دیجیتال کسب‌وکارمحور که تجربه زاکری در اجرای رابط‌ها و راهکارهای عملی فناوری را نشان می‌دهند.",
    },
  },
  about: {
    en: {
      title: "About Zakeri — Systems & Automation Consultant in Oman",
      description:
        "Learn how Zakeri approaches business systems and automation in Oman: diagnose operational problems, map workflows, improve visibility, and use AI only when useful.",
      openGraphDescription:
        "A process-first approach to clearer workflows, better management visibility, practical automation, and selective AI for growing businesses in Oman.",
    },
    ar: {
      title: "عن زاكري — مستشار الأنظمة والأتمتة في عُمان",
      description:
        "تعرّف على منهج زاكري في أنظمة الأعمال والأتمتة في عُمان: تشخيص المشكلات التشغيلية ورسم سير العمل وتحسين وضوح الإدارة واستخدام AI عند الحاجة.",
      openGraphDescription:
        "منهج يبدأ بالعملية لبناء سير عمل أوضح ورؤية إدارية أفضل وأتمتة عملية وAI انتقائي للشركات النامية في عُمان.",
    },
    fa: {
      title: "درباره زاکری — مشاور سیستم و اتوماسیون در عمان",
      description:
        "با رویکرد زاکری به سیستم‌های کسب‌وکار و اتوماسیون در عمان آشنا شوید: تشخیص مسئله عملیاتی، ترسیم گردش‌کار، بهبود دید مدیریت و استفاده از AI در صورت نیاز.",
      openGraphDescription:
        "رویکردی فرایندمحور برای گردش‌کار شفاف‌تر، دید مدیریتی بهتر، اتوماسیون کاربردی و استفاده انتخابی از AI در کسب‌وکارهای در حال رشد در عمان.",
    },
  },
  contact: {
    en: {
      title: "Business Automation Consultation in Oman",
      description:
        "Discuss an Operations Assessment in Oman for manual follow-up, workflow visibility, CRM or ERP adoption, reporting, approvals, and practical automation.",
      openGraphDescription:
        "Describe one operational workflow and identify whether an Assessment or focused Paid Pilot is the right next step for your business in Oman.",
    },
    ar: {
      title: "استشارة أتمتة الأعمال في عُمان",
      description:
        "ناقش تقييماً للعمليات في عُمان لتحسين المتابعة اليدوية ووضوح سير العمل واستخدام CRM أو ERP والتقارير والموافقات والأتمتة العملية.",
      openGraphDescription:
        "صِف سير عمل تشغيلياً واحداً وحدّد ما إذا كان تقييم العمليات أو تجربة مدفوعة محددة هو الخطوة المناسبة لشركتك في عُمان.",
    },
    fa: {
      title: "مشاوره اتوماسیون کسب‌وکار در عمان",
      description:
        "برای ارزیابی عملیات در عمان درباره پیگیری دستی، شفافیت گردش‌کار، استفاده از CRM یا ERP، گزارش‌دهی، تأییدها و اتوماسیون کاربردی گفت‌وگو کنید.",
      openGraphDescription:
        "یک گردش‌کار عملیاتی را شرح دهید و مشخص کنید آیا ارزیابی عملیات یا یک پایلوت پولی متمرکز، گام مناسب بعدی برای کسب‌وکار شما در عمان است.",
    },
  },
};

const OPEN_GRAPH_LOCALES: Record<Lang, string> = {
  en: "en_OM",
  ar: "ar_OM",
  fa: "fa_IR",
};

export function absoluteUrl(pathname: string): string {
  return new URL(pathname, SITE.url).toString();
}

export function createPageMetadata(page: PublicPage, lang: Lang): Metadata {
  const path = PUBLIC_PAGE_PATHS[page];
  const localizedPath = localizePathname(path, lang);
  const canonical = absoluteUrl(localizedPath);
  const entry = SEO_COPY[page][lang];
  const title = page === "home" ? { absolute: entry.title } : entry.title;
  const socialTitle = page === "home" ? entry.title : `${entry.title} — ${SITE.name}`;
  const socialDescription = entry.openGraphDescription ?? entry.description;

  return {
    title,
    description: entry.description,
    alternates: {
      canonical,
      languages: {
        en: absoluteUrl(localizePathname(path, "en")),
        ar: absoluteUrl(localizePathname(path, "ar")),
        fa: absoluteUrl(localizePathname(path, "fa")),
        "x-default": absoluteUrl(localizePathname(path, "en")),
      },
    },
    openGraph: {
      siteName: SITE.name,
      type: "website",
      title: socialTitle,
      description: socialDescription,
      url: canonical,
      locale: OPEN_GRAPH_LOCALES[lang],
      alternateLocale: Object.values(OPEN_GRAPH_LOCALES).filter(
        (locale) => locale !== OPEN_GRAPH_LOCALES[lang],
      ),
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: socialDescription,
    },
  };
}

const SERVICE_SCHEMA_COPY: Record<
  Lang,
  {
    name: string;
    country: string;
    services: { name: string; description: string }[];
  }
> = {
  en: {
    name: "Business Systems & Automation Services in Oman",
    country: "Oman",
    services: [
      {
        name: "Business Systems Assessment",
        description:
          "A practical review of workflows, bottlenecks, ownership gaps, reporting gaps, and automation opportunities.",
      },
      {
        name: "Workflow & Operations System Design",
        description:
          "Design visible recurring workflows with clear ownership, status, deadlines, approvals, escalations, and exceptions.",
      },
      {
        name: "CRM & Sales Process Improvement",
        description:
          "Improve lead ownership, customer and quotation follow-up, response tracking, and sales visibility.",
      },
      {
        name: "Management Dashboards & Reporting",
        description:
          "Improve management visibility into delays, approvals, follow-up gaps, operational exceptions, and relevant KPIs.",
      },
      {
        name: "Business Process Automation",
        description:
          "Automate measurable rule-based work such as reminders, approvals, notifications, escalation, and recurring reporting.",
      },
      {
        name: "System Integration & Data Flow",
        description:
          "Connect useful parts of existing systems so information does not need to be copied manually.",
      },
      {
        name: "Practical AI for Business",
        description:
          "Apply AI selectively to information extraction, classification, summarization, document processing, and assisted decisions.",
      },
      {
        name: "Ongoing System Optimization",
        description:
          "Improve workflow adoption, remove new bottlenecks, refine automation, and expand useful systems over time.",
      },
    ],
  },
  ar: {
    name: "خدمات أنظمة الأعمال والأتمتة في عُمان",
    country: "عُمان",
    services: [
      {
        name: "تقييم أنظمة الأعمال",
        description: "مراجعة عملية لسير العمل والاختناقات وفجوات المسؤولية والتقارير وفرص الأتمتة.",
      },
      {
        name: "تصميم أنظمة سير العمل والعمليات",
        description:
          "تصميم سير عمل متكرر ومرئي مع مسؤولية وحالة ومواعيد وموافقات وتصعيدات واستثناءات واضحة.",
      },
      {
        name: "تحسين CRM وعمليات المبيعات",
        description: "تحسين مسؤولية العملاء ومتابعة عروض الأسعار والاستجابة ووضوح مسار المبيعات.",
      },
      {
        name: "لوحات المعلومات الإدارية والتقارير",
        description:
          "تحسين رؤية الإدارة للتأخيرات والموافقات وفجوات المتابعة والاستثناءات التشغيلية وKPIs المهمة.",
      },
      {
        name: "أتمتة عمليات الأعمال",
        description:
          "أتمتة الأعمال القابلة للقياس مثل التذكيرات والموافقات والإشعارات والتصعيد والتقارير المتكررة.",
      },
      {
        name: "تكامل الأنظمة وتدفّق البيانات",
        description: "ربط الأجزاء المفيدة من الأنظمة الحالية لتقليل نسخ المعلومات يدوياً.",
      },
      {
        name: "ذكاء اصطناعي عملي للأعمال",
        description:
          "استخدام الذكاء الاصطناعي بشكل انتقائي لاستخراج المعلومات وتصنيفها وتلخيصها ومعالجة المستندات ودعم القرار.",
      },
      {
        name: "التحسين المستمر للأنظمة",
        description:
          "تحسين تبنّي سير العمل وإزالة الاختناقات وتطوير الأتمتة وتوسيع الأنظمة المفيدة مع الوقت.",
      },
    ],
  },
  fa: {
    name: "خدمات سیستم‌های کسب‌وکار و اتوماسیون در عمان",
    country: "عمان",
    services: [
      {
        name: "ارزیابی سیستم‌های کسب‌وکار",
        description:
          "بررسی کاربردی گردش‌کارها، گلوگاه‌ها، شکاف‌های مسئولیت و گزارش‌دهی و فرصت‌های اتوماسیون.",
      },
      {
        name: "طراحی سیستم گردش‌کار و عملیات",
        description:
          "طراحی گردش‌کارهای تکرارشونده و قابل‌مشاهده با مسئولیت، وضعیت، موعد، تأیید، ارجاع و استثنای روشن.",
      },
      {
        name: "بهبود CRM و فرایند فروش",
        description: "بهبود مالکیت لید، پیگیری مشتری و پیش‌فاکتور، پاسخ‌گویی و دید قیف فروش.",
      },
      {
        name: "داشبوردهای مدیریتی و گزارش‌دهی",
        description:
          "بهبود دید مدیریت نسبت به تأخیرها، تأییدها، شکاف‌های پیگیری، استثناهای عملیاتی و KPIهای مرتبط.",
      },
      {
        name: "اتوماسیون فرایندهای کسب‌وکار",
        description:
          "خودکارسازی کارهای قابل‌اندازه‌گیری مانند یادآوری، تأیید، اعلان، ارجاع و گزارش‌دهی دوره‌ای.",
      },
      {
        name: "یکپارچه‌سازی سیستم و جریان داده",
        description: "اتصال بخش‌های مفید سیستم‌های موجود برای کاهش کپی دستی اطلاعات.",
      },
      {
        name: "هوش مصنوعی کاربردی برای کسب‌وکار",
        description:
          "استفاده انتخابی از هوش مصنوعی برای استخراج، دسته‌بندی و خلاصه‌سازی اطلاعات، پردازش اسناد و کمک به تصمیم‌گیری.",
      },
      {
        name: "بهینه‌سازی مستمر سیستم",
        description:
          "بهبود استفاده از گردش‌کار، رفع گلوگاه‌ها، اصلاح اتوماسیون و گسترش سیستم‌های مفید در طول زمان.",
      },
    ],
  },
};

export function getServicesJsonLd(lang: Lang) {
  const copy = SERVICE_SCHEMA_COPY[lang];
  const pageUrl = absoluteUrl(localizePathname(PUBLIC_PAGE_PATHS.services, lang));

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: copy.name,
    inLanguage: lang,
    url: pageUrl,
    itemListElement: copy.services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: `${pageUrl}#service-${index + 1}`,
        areaServed: {
          "@type": "Country",
          name: copy.country,
        },
        provider: {
          "@type": "Organization",
          name: SITE.name,
          url: SITE.url,
        },
      },
    })),
  };
}

const PRICING_SCHEMA_COPY: Record<
  Lang,
  {
    name: string;
    country: string;
    engagements: { name: string; description: string }[];
  }
> = {
  en: {
    name: "Business Systems & Automation Engagement Options in Oman",
    country: "Oman",
    engagements: [
      {
        name: "Operations Assessment",
        description:
          "Review a current workflow, operational bottlenecks, ownership, reporting gaps, system use, and prioritized improvement opportunities.",
      },
      {
        name: "Paid Pilot",
        description:
          "Solve or improve one clearly defined workflow with an agreed scope and practical success criteria before a larger implementation.",
      },
      {
        name: "Implementation Project",
        description:
          "Build or improve the operational system around a defined business problem, workflow, and implementation scope.",
      },
      {
        name: "Ongoing Optimization",
        description:
          "Continue improving workflow adoption, automation, integrations, reporting, and operational systems after implementation.",
      },
    ],
  },
  ar: {
    name: "خيارات التعاون لأنظمة الأعمال والأتمتة في عُمان",
    country: "عُمان",
    engagements: [
      {
        name: "تقييم العمليات",
        description:
          "مراجعة سير العمل الحالي والاختناقات التشغيلية والمسؤوليات وفجوات التقارير واستخدام الأنظمة وفرص التحسين ذات الأولوية.",
      },
      {
        name: "مشروع تجريبي مدفوع",
        description:
          "حل أو تحسين سير عمل واحد محدد بنطاق متفق عليه ومعايير نجاح عملية قبل تنفيذ أوسع.",
      },
      {
        name: "مشروع التنفيذ",
        description: "بناء النظام التشغيلي أو تحسينه حول مشكلة أعمال وسير عمل ونطاق تنفيذ محددة.",
      },
      {
        name: "التحسين المستمر",
        description:
          "مواصلة تحسين تبنّي سير العمل والأتمتة والتكاملات والتقارير والأنظمة التشغيلية بعد التنفيذ.",
      },
    ],
  },
  fa: {
    name: "گزینه‌های همکاری برای سیستم‌های کسب‌وکار و اتوماسیون در عمان",
    country: "عمان",
    engagements: [
      {
        name: "ارزیابی عملیات",
        description:
          "بررسی گردش‌کار فعلی، گلوگاه‌های عملیاتی، مسئولیت‌ها، شکاف‌های گزارش‌دهی، استفاده از سیستم و فرصت‌های بهبود اولویت‌دار.",
      },
      {
        name: "پایلوت پولی",
        description:
          "حل یا بهبود یک گردش‌کار مشخص با دامنه توافق‌شده و معیارهای موفقیت عملی، پیش از اجرای گسترده‌تر.",
      },
      {
        name: "پروژه پیاده‌سازی",
        description:
          "ساخت یا بهبود سیستم عملیاتی بر اساس مسئله کسب‌وکار، گردش‌کار و دامنه اجرای مشخص.",
      },
      {
        name: "بهینه‌سازی مستمر",
        description:
          "ادامه بهبود پذیرش گردش‌کار، اتوماسیون، یکپارچه‌سازی، گزارش‌دهی و سیستم‌های عملیاتی پس از اجرا.",
      },
    ],
  },
};

export function getPricingJsonLd(lang: Lang) {
  const copy = PRICING_SCHEMA_COPY[lang];
  const pageUrl = absoluteUrl(localizePathname(PUBLIC_PAGE_PATHS.pricing, lang));

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: copy.name,
    inLanguage: lang,
    url: pageUrl,
    numberOfItems: copy.engagements.length,
    itemListElement: copy.engagements.map((engagement, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: engagement.name,
        description: engagement.description,
        url: `${pageUrl}#engagement-${index + 1}`,
        areaServed: {
          "@type": "Country",
          name: copy.country,
        },
        provider: {
          "@type": "Organization",
          name: SITE.name,
          url: SITE.url,
        },
      },
    })),
  };
}

const ORGANIZATION_DESCRIPTIONS: Record<Lang, string> = {
  en: "Business systems and automation consulting in Oman for growing companies that need clearer workflows, better management visibility, and less manual follow-up.",
  ar: "استشارات أنظمة الأعمال والأتمتة في عُمان للشركات النامية التي تحتاج إلى سير عمل أوضح ورؤية إدارية أفضل ومتابعة يدوية أقل.",
  fa: "مشاوره سیستم‌های کسب‌وکار و اتوماسیون در عمان برای شرکت‌های در حال رشد که به گردش‌کار روشن‌تر، دید مدیریتی بهتر و پیگیری دستی کمتر نیاز دارند.",
};

export function getOrganizationJsonLd(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    telephone: `+${SITE.phoneRaw}`,
    email: SITE.email,
    description: ORGANIZATION_DESCRIPTIONS[lang],
    inLanguage: lang,
  };
}

export function getFaqJsonLd(lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: lang,
    mainEntity: getContactFaqs(lang).map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function getProjectsJsonLd(lang: Lang) {
  const pageUrl = absoluteUrl(localizePathname(PUBLIC_PAGE_PATHS["case-study"], lang));

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: SEO_COPY["case-study"][lang].title,
    inLanguage: lang,
    url: pageUrl,
    numberOfItems: getCaseStudies(lang).length,
    itemListElement: getCaseStudies(lang).map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.name,
      url: project.url,
      image: absoluteUrl(project.image),
    })),
  };
}
