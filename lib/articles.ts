import type { StaticImageData } from "next/image";

import { IMG } from "@/lib/images";
import type { Lang } from "@/lib/locales";

/**
 * Articles live here as typed data (no CMS yet). `draft` articles are
 * reachable by URL for review but are noindex and left out of the list and
 * the sitemap. Flip to `published` only after Zakeri approves the text.
 */
export type ArticleCopy = {
  title: string;
  description: string;
  sections: { h: string; p: string[] }[];
};

export type Article = {
  slug: string;
  status: "draft" | "published";
  date: string;
  image: StaticImageData;
  imageAlt: Record<Lang, string>;
  /** Internal links shown under the article. */
  related: { href: string; label: Record<Lang, string> }[];
} & Record<Lang, ArticleCopy>;

export const ARTICLES: Article[] = [
  {
    slug: "whatsapp-ai-assistant-oman",
    status: "draft",
    date: "2026-10-10",
    image: IMG.whatsapp,
    imageAlt: {
      en: "AI assistant answering customers on WhatsApp",
      ar: "مساعد ذكي يرد على العملاء عبر واتساب",
    },
    related: [
      { href: "/services", label: { en: "AI automation services", ar: "خدمات الأتمتة الذكية" } },
      { href: "/products", label: { en: "IDRAK WhatsApp CRM", ar: "منصة إدراك لواتساب" } },
    ],
    en: {
      title: "How Omani Businesses Can Answer Every WhatsApp Message With AI",
      description:
        "Outline: why WhatsApp is the main sales channel in Oman, what an AI assistant can and cannot do, and how to launch one without losing the human touch.",
      sections: [
        {
          h: "Why WhatsApp decides sales in Oman",
          p: [
            "Customers in Oman expect a reply on WhatsApp within minutes, including evenings and weekends.",
            "Slow or missed replies are lost sales that never show up in any report.",
          ],
        },
        {
          h: "What an AI assistant actually does",
          p: [
            "Answers common questions in Arabic and English from your own price list and FAQs.",
            "Qualifies the lead and hands the conversation to a salesperson at the right moment.",
          ],
        },
        {
          h: "What it should not do",
          p: ["Promise prices or deals it was not given, or replace your team on complex cases."],
        },
        {
          h: "A simple way to start",
          p: [
            "Collect your top 30 customer questions, connect the official WhatsApp Business API, and review the first two weeks of conversations.",
          ],
        },
        {
          h: "Measuring the result",
          p: ["Response time, number of qualified leads, and sales closed from WhatsApp."],
        },
      ],
    },
    ar: {
      title: "كيف ترد الشركات العُمانية على كل رسالة واتساب بالذكاء الاصطناعي",
      description:
        "مخطط: لماذا واتساب هو قناة البيع الأولى في عُمان، وما الذي يستطيعه المساعد الذكي وما لا يستطيعه، وكيف تطلقه دون أن تفقد اللمسة البشرية.",
      sections: [
        {
          h: "لماذا يحسم واتساب المبيعات في عُمان",
          p: [
            "يتوقع العملاء في عُمان رداً على واتساب خلال دقائق، حتى في المساء وعطلة نهاية الأسبوع.",
            "الردود المتأخرة أو الضائعة مبيعات مفقودة لا تظهر في أي تقرير.",
          ],
        },
        {
          h: "ما الذي يفعله المساعد الذكي فعلاً",
          p: [
            "يجيب عن الأسئلة المتكررة بالعربية والإنجليزية من قائمة أسعارك وأسئلتك الشائعة.",
            "يؤهّل العميل المحتمل ويحوّل المحادثة إلى موظف المبيعات في الوقت المناسب.",
          ],
        },
        {
          h: "ما الذي لا يجب أن يفعله",
          p: ["أن يَعِد بأسعار أو عروض لم تُعطَ له، أو أن يحل محل فريقك في الحالات المعقدة."],
        },
        {
          h: "طريقة بسيطة للبدء",
          p: [
            "اجمع أهم 30 سؤالاً من عملائك، واربط واجهة واتساب للأعمال الرسمية، وراجع محادثات أول أسبوعين.",
          ],
        },
        {
          h: "قياس النتيجة",
          p: ["زمن الرد، وعدد العملاء المؤهَّلين، والمبيعات المغلقة من واتساب."],
        },
      ],
    },
  },
  {
    slug: "ai-video-marketing-oman",
    status: "draft",
    date: "2026-10-10",
    image: IMG.aiVideo,
    imageAlt: {
      en: "AI-generated marketing video frames",
      ar: "لقطات فيديو تسويقي مولّد بالذكاء الاصطناعي",
    },
    related: [
      {
        href: "/services",
        label: { en: "AI video production", ar: "إنتاج الفيديو بالذكاء الاصطناعي" },
      },
      { href: "/selected-work", label: { en: "Selected work", ar: "أعمال مختارة" } },
    ],
    en: {
      title: "AI Video for Businesses in Oman: More Content, Less Cost",
      description:
        "Outline: where AI video fits in a marketing plan, real use cases for Omani brands, costs compared with a traditional shoot, and how to keep quality and brand control.",
      sections: [
        {
          h: "The content problem",
          p: [
            "Social platforms need new video every week; a traditional shoot for each one is slow and expensive.",
          ],
        },
        {
          h: "Where AI video works well",
          p: [
            "Product showcases, real-estate and project visualisations, ads in Arabic and English, and short explainers.",
          ],
        },
        {
          h: "Where a real shoot is still better",
          p: [
            "Testimonials, founders on camera, and anything that must show real people and places.",
          ],
        },
        {
          h: "Cost and timeline compared",
          p: [
            "Days instead of weeks, and a fraction of a production-crew budget (figures to be confirmed by IDRAK).",
          ],
        },
        {
          h: "Keeping it on brand",
          p: [
            "Brand guide, approved scripts, human review before publishing, and clear rights to every asset.",
          ],
        },
      ],
    },
    ar: {
      title: "فيديو الذكاء الاصطناعي للشركات في عُمان: محتوى أكثر وتكلفة أقل",
      description:
        "مخطط: أين يناسب فيديو الذكاء الاصطناعي خطة التسويق، واستخدامات حقيقية للعلامات العُمانية، والتكلفة مقارنة بالتصوير التقليدي، وكيف تحافظ على الجودة والهوية.",
      sections: [
        {
          h: "مشكلة المحتوى",
          p: [
            "تحتاج المنصات الاجتماعية فيديو جديداً كل أسبوع، والتصوير التقليدي لكل فيديو بطيء ومكلف.",
          ],
        },
        {
          h: "أين ينجح فيديو الذكاء الاصطناعي",
          p: [
            "عرض المنتجات، وتصوّر المشاريع العقارية، والإعلانات بالعربية والإنجليزية، والفيديوهات التوضيحية القصيرة.",
          ],
        },
        {
          h: "أين يبقى التصوير الحقيقي أفضل",
          p: [
            "شهادات العملاء، وظهور المؤسسين أمام الكاميرا، وكل ما يجب أن يُظهر أشخاصاً وأماكن حقيقية.",
          ],
        },
        {
          h: "مقارنة التكلفة والمدة",
          p: ["أيام بدلاً من أسابيع، وجزء من ميزانية فريق التصوير (الأرقام تؤكدها إدراك)."],
        },
        {
          h: "الحفاظ على الهوية",
          p: ["دليل الهوية، ونصوص معتمدة، ومراجعة بشرية قبل النشر، وحقوق واضحة لكل مادة."],
        },
      ],
    },
  },
  {
    slug: "ai-automation-first-30-days",
    status: "draft",
    date: "2026-10-10",
    image: IMG.automation,
    imageAlt: { en: "Business workflow automated with AI", ar: "سير عمل مؤتمت بالذكاء الاصطناعي" },
    related: [
      { href: "/how-we-work", label: { en: "How we work", ar: "كيف نعمل" } },
      { href: "/contact", label: { en: "Talk to IDRAK", ar: "تواصل مع إدراك" } },
    ],
    en: {
      title: "Where to Start With AI in Your Omani Business: A 30-Day Plan",
      description:
        "Outline: a practical first month with AI for business owners in Oman, from finding the most expensive manual task to measuring the result.",
      sections: [
        {
          h: "Week 1: find the costly manual work",
          p: ["List the tasks your team repeats every day and estimate the hours each one takes."],
        },
        {
          h: "Week 2: pick one process",
          p: [
            "Choose the task with the clearest cost and the lowest risk, such as replying to enquiries or preparing quotes.",
          ],
        },
        {
          h: "Week 3: build and test",
          p: ["Automate that one process with real data and keep a person approving the output."],
        },
        {
          h: "Week 4: measure and decide",
          p: ["Compare hours saved and errors avoided, then decide whether to scale or adjust."],
        },
        {
          h: "Common mistakes",
          p: [
            "Starting with tools instead of problems, automating everything at once, and skipping measurement.",
          ],
        },
      ],
    },
    ar: {
      title: "من أين تبدأ بالذكاء الاصطناعي في شركتك العُمانية: خطة 30 يوماً",
      description:
        "مخطط: شهر أول عملي مع الذكاء الاصطناعي لأصحاب الأعمال في عُمان، من تحديد أكثر المهام اليدوية تكلفة إلى قياس النتيجة.",
      sections: [
        {
          h: "الأسبوع 1: حدّد العمل اليدوي المكلف",
          p: ["اكتب المهام التي يكررها فريقك يومياً وقدّر الساعات التي تستهلكها كل مهمة."],
        },
        {
          h: "الأسبوع 2: اختر عملية واحدة",
          p: [
            "اختر المهمة ذات التكلفة الأوضح والمخاطرة الأقل، مثل الرد على الاستفسارات أو إعداد عروض الأسعار.",
          ],
        },
        {
          h: "الأسبوع 3: ابنِ واختبر",
          p: ["أتمت تلك العملية ببيانات حقيقية مع إبقاء شخص يعتمد النتيجة."],
        },
        {
          h: "الأسبوع 4: قِس وقرّر",
          p: ["قارن الساعات الموفَّرة والأخطاء المتجنَّبة، ثم قرّر التوسع أو التعديل."],
        },
        {
          h: "أخطاء شائعة",
          p: ["البدء بالأدوات بدل المشكلات، وأتمتة كل شيء دفعة واحدة، وإهمال القياس."],
        },
      ],
    },
  },
];

export const publishedArticles = () => ARTICLES.filter((a) => a.status === "published");
export const findArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);
