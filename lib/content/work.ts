import type { IndustryGroup } from "@/lib/projects";

const en = {
  hero: {
    eyebrow: "Our work",
    title: "Case Studies, Websites and Demos.",
    intro:
      "Custom software, automation and WhatsApp AI we have built and run, alongside the websites and digital projects delivered for businesses across real estate, healthcare and other sectors.",
    support:
      "The work shown here primarily reflects our web design and digital delivery experience. IDRAK’s current capabilities now extend across business automation, AI video, content and digital growth solutions.",
    primary: "Read the Case Studies",
    secondary: "Explore IDRAK Services",
  },
  cases: {
    eyebrow: "Case studies",
    title: "Systems We Built and Run.",
    intro:
      "Each case shows the problem, the old process, what we built and what changed — the proof behind our custom software and automation work.",
    tag: "Case study",
    read: "Read the case study",
    videos: "Watch videos & demos",
  },
  intro: {
    eyebrow: "Website portfolio",
    title: "Digital Work Built Around Real Business Needs.",
    paragraphs: [
      "Good digital work starts with understanding what the business needs people to see, understand or do.",
      "The projects below represent selected website and digital delivery work across sectors including real estate, healthcare, legal services, beauty and professional services.",
    ],
  },
  featured: {
    eyebrow: "Featured",
    title: "Featured Projects",
  },
  more: {
    title: "More Selected Projects",
    filterLabel: "Filter by industry",
    filters: {
      all: "All",
      "real-estate": "Real Estate",
      healthcare: "Healthcare",
      professional: "Professional Services",
      other: "Other",
    } satisfies Record<IndustryGroup | "all", string>,
    loadMore: "Load More",
    count: (shown: number, total: number) => `Showing ${shown} of ${total}`,
  },
  bridge: {
    eyebrow: "From digital delivery to business value",
    title: "The Technology Changes. The Starting Point Does Not.",
    paragraphs: [
      "Our work has evolved beyond website delivery, but the principle remains the same: start with the business need and use technology where it creates practical value.",
      "Today, IDRAK applies that approach across custom business automation, AI video production, content and social media, and web design, SEO and GEO.",
    ],
  },
  today: {
    eyebrow: "IDRAK today",
    title: "More Than Web Design.",
    cards: [
      {
        title: "Custom Business Automation",
        text: "Custom software and automation built around real business workflows.",
        href: "/services/custom-software-development",
      },
      {
        title: "AI Video Production",
        text: "Visual storytelling for products, projects and experiences that are costly or difficult to film.",
        href: "/services/ai-video-production",
      },
      {
        title: "Content & Social Media Management",
        text: "Strategy, production and publishing built around audience and commercial goals.",
        href: "/services/content-social-media",
      },
      {
        title: "Web Design, SEO & GEO",
        text: "Digital experiences designed for visibility, discovery and customer acquisition.",
        href: "/services/web-design",
      },
    ],
  },
  products: {
    eyebrow: "Ready-made products",
    title: "Looking for a Ready-Made Solution?",
    text: "IDRAK also develops ready-made products for specific business needs.",
  },
  final: {
    eyebrow: "What are you trying to improve?",
    title: "Start With Your Business Challenge.",
    text: "You may need a better website, stronger product presentation, more consistent customer follow-up or less manual work. The right starting point depends on the business problem.",
  },
};

export type WorkCopy = typeof en;

const ar: WorkCopy = {
  hero: {
    eyebrow: "أعمالنا",
    title: "دراسات حالة ومواقع وعروض.",
    intro:
      "برمجيات مخصّصة وأتمتة ومساعدات واتساب ذكية بنيناها ونشغّلها، إلى جانب المواقع والمشاريع الرقمية المنفّذة لشركات في العقارات والرعاية الصحية وقطاعات أخرى.",
    support:
      "تعكس الأعمال المعروضة هنا أساساً خبرتنا في تصميم المواقع والتنفيذ الرقمي. أما قدرات إدراك اليوم فتمتد إلى أتمتة الأعمال وفيديو الذكاء الاصطناعي والمحتوى وحلول النمو الرقمي.",
    primary: "اقرأ دراسات الحالة",
    secondary: "استكشف خدمات إدراك",
  },
  cases: {
    eyebrow: "دراسات حالة",
    title: "أنظمة بنيناها ونشغّلها.",
    intro:
      "كل دراسة تعرض المشكلة، وطريقة العمل السابقة، وما بنيناه، وما الذي تغيّر؛ وهي الدليل على عملنا في البرمجيات المخصّصة والأتمتة.",
    tag: "دراسة حالة",
    read: "اقرأ دراسة الحالة",
    videos: "شاهد الفيديوهات والعروض",
  },
  intro: {
    eyebrow: "معرض المواقع",
    title: "أعمال رقمية مبنية حول احتياجات العمل الحقيقية.",
    paragraphs: [
      "يبدأ العمل الرقمي الجيد بفهم ما يحتاج العمل من الناس أن يروه أو يفهموه أو يفعلوه.",
      "تمثّل المشاريع أدناه أعمالاً مختارة في تصميم المواقع والتنفيذ الرقمي في قطاعات تشمل العقارات والرعاية الصحية والخدمات القانونية والتجميل والخدمات المهنية.",
    ],
  },
  featured: {
    eyebrow: "مختارات",
    title: "مشاريع مميّزة",
  },
  more: {
    title: "مزيد من المشاريع المختارة",
    filterLabel: "تصفية حسب القطاع",
    filters: {
      all: "الكل",
      "real-estate": "العقارات",
      healthcare: "الرعاية الصحية",
      professional: "الخدمات المهنية",
      other: "أخرى",
    },
    loadMore: "عرض المزيد",
    count: (shown: number, total: number) => `عرض ${shown} من ${total}`,
  },
  bridge: {
    eyebrow: "من التنفيذ الرقمي إلى قيمة العمل",
    title: "التقنية تتغيّر. ونقطة البداية لا تتغيّر.",
    paragraphs: [
      "تطوّر عملنا إلى ما هو أبعد من تنفيذ المواقع، لكن المبدأ بقي كما هو: ابدأ من حاجة العمل، واستخدم التقنية حيث تصنع قيمة عملية.",
      "واليوم تطبّق إدراك هذا النهج في أتمتة الأعمال المخصّصة، وإنتاج الفيديو بالذكاء الاصطناعي، والمحتوى ووسائل التواصل، وتصميم المواقع وSEO وGEO.",
    ],
  },
  today: {
    eyebrow: "إدراك اليوم",
    title: "أكثر من تصميم مواقع.",
    cards: [
      {
        title: "أتمتة الأعمال المخصّصة",
        text: "برمجيات وأتمتة مخصّصة مبنية حول سير العمل الحقيقي.",
        href: "/services/custom-software-development",
      },
      {
        title: "إنتاج الفيديو بالذكاء الاصطناعي",
        text: "سرد بصري للمنتجات والمشاريع والتجارب التي يصعب أو يكلف تصويرها.",
        href: "/services/ai-video-production",
      },
      {
        title: "إدارة المحتوى ووسائل التواصل الاجتماعي",
        text: "استراتيجية وإنتاج ونشر مبني حول الجمهور والأهداف التجارية.",
        href: "/services/content-social-media",
      },
      {
        title: "تصميم المواقع وSEO وGEO",
        text: "تجارب رقمية مصمّمة للظهور والاكتشاف واستقطاب العملاء.",
        href: "/services/web-design",
      },
    ],
  },
  products: {
    eyebrow: "منتجات جاهزة",
    title: "تبحث عن حل جاهز؟",
    text: "تطوّر إدراك أيضاً منتجات جاهزة لاحتياجات عمل محددة.",
  },
  final: {
    eyebrow: "ما الذي تسعى إلى تحسينه؟",
    title: "ابدأ من تحدي عملك.",
    text: "قد تحتاج إلى موقع أفضل، أو عرض أقوى لمنتجك، أو متابعة أكثر انتظاماً لعملائك، أو عمل يدوي أقل. نقطة البداية المناسبة تعتمد على مشكلة العمل.",
  },
};

export const WORK = { en, ar };
