/** Copy shared by every page: navigation, CTAs, footer and the contact form. */

export const INTERESTS = [
  "automation",
  "whatsapp",
  "ai-video",
  "content",
  "web",
  "construction-reporting",
  "clinic-crm",
  "not-sure",
] as const;
export type Interest = (typeof INTERESTS)[number];

export const SIZES = ["small", "medium", "large"] as const;
export type Size = (typeof SIZES)[number];

export const CHALLENGES = [
  "costs",
  "revenue",
  "productivity",
  "followup",
  "value",
  "visibility",
] as const;
export type Challenge = (typeof CHALLENGES)[number];

export const NAV_PATHS = [
  "/",
  "/services",
  "/products",
  "/selected-work",
  "/about",
  "/how-we-work",
  "/contact",
] as const;
export type NavPath = (typeof NAV_PATHS)[number];

const en = {
  nav: {
    "/": "Home",
    "/services": "Services",
    "/products": "Products",
    "/selected-work": "Selected Work",
    "/about": "About",
    "/how-we-work": "How We Work",
    "/contact": "Contact",
  } satisfies Record<NavPath, string>,
  menu: "Open menu",
  navigation: "Navigation",
  language: "Language",
  switchTo: "العربية",
  cta: {
    discuss: "Boost Your Business",
    discussShort: "Let’s Talk",
    explore: "Explore Solutions",
    whatsapp: "Contact on WhatsApp",
    whatsappShort: "WhatsApp",
    services: "Explore Services",
    allServices: "Explore All Services",
    products: "Explore Products",
    idrakProducts: "Explore IDRAK Products",
    howWeWork: "See How We Work",
    viewProject: "View Project",
  },
  advantage: "The IDRAK Advantage",
  productTag: "Product",
  serviceTag: "Service",
  services: {
    automation: "Custom Business Automation",
    aiVideo: "AI Video Production",
    content: "Content & Social Media Management",
    web: "Web Design, SEO & GEO",
  },
  products: {
    construction: "Construction Supervision Reporting",
    clinic: "Clinic CRM & WhatsApp Assistant",
  },
  footer: {
    description:
      "AI solutions designed to create real business value through automation, customer experience, content, video and digital products.",
    services: "Services",
    products: "Products",
    navigate: "Navigate",
    contact: "Contact",
    rights: "All rights reserved.",
    tagline: "AI That Creates Business Value.",
  },
  form: {
    stepOf: "Step {n} of {total}",
    next: "Next",
    back: "Back",
    submit: "Send to IDRAK",
    sending: "Sending…",
    optional: "optional",
    size: {
      q: "How big is your business?",
      hint: "So we suggest something that fits.",
      options: {
        small: ["Small", "1–10 people"],
        medium: ["Medium", "11–100 people"],
        large: ["Large", "100+ people"],
      } satisfies Record<Size, [string, string]>,
    },
    challenge: {
      q: "What do you want to change first?",
      hint: "Pick one or more.",
      options: {
        costs: "Reduce costs",
        revenue: "Grow revenue",
        productivity: "Boost productivity",
        followup: "Reply & follow up faster",
        value: "Show my product’s value",
        visibility: "Get found online",
      } satisfies Record<Challenge, string>,
    },
    focus: {
      q: "Anything we should know?",
      hint: "Optional — pick an area if you already have one in mind.",
      note: "Tell us in a sentence",
      notePlaceholder: "e.g. We lose leads on WhatsApp after working hours.",
    },
    contact: {
      q: "Where can we reach you?",
      hint: "We’ll get back to you on WhatsApp.",
      name: "Your name",
      phone: "WhatsApp number",
      company: "Company",
      email: "Email",
    },
    successTitle: "You’re in. 🚀",
    successText:
      "We’ve received your answers and will contact you on WhatsApp to discuss the most practical next step.",
    successWhatsapp: "Say hi on WhatsApp now",
    sendAnother: "Start over",
    errorTitle: "Your message could not be sent.",
    errorText: "Please try again, or reach us directly:",
    interests: {
      automation: "Custom Business Automation",
      whatsapp: "WhatsApp & CRM Automation",
      "ai-video": "AI Video Production",
      content: "Content & Social Media Management",
      web: "Web Design, SEO & GEO",
      "construction-reporting": "Construction Supervision Reporting",
      "clinic-crm": "Clinic CRM & WhatsApp Assistant",
      "not-sure": "Not Sure Yet",
    } satisfies Record<Interest, string>,
  },
  agent: {
    open: "Ask IDRAK AI",
    teaser: "Hi 👋 Ask me how AI can grow your business.",
    title: "IDRAK AI",
    status: "Online · replies instantly",
    greeting:
      "Hi! I’m IDRAK’s AI assistant. Tell me about your business or ask anything about our solutions — I’ll point you to the right next step.",
    placeholder: "Ask about automation, AI video, pricing…",
    send: "Send",
    close: "Close chat",
    suggestions: [
      "What can AI do for my business?",
      "How does WhatsApp sales automation work?",
      "How is pricing decided?",
    ],
    human: "Prefer a human? Continue on WhatsApp",
    error: "I couldn’t answer just now. Our team is one tap away on WhatsApp.",
    disclaimer: "AI assistant · answers can be imperfect",
  },
  notFound: {
    title: "Page not found",
    text: "The page you’re looking for doesn’t exist or has been moved.",
    home: "Go home",
  },
};

export type CommonCopy = typeof en;

const ar: CommonCopy = {
  nav: {
    "/": "الرئيسية",
    "/services": "الخدمات",
    "/products": "المنتجات",
    "/selected-work": "أعمال مختارة",
    "/about": "من نحن",
    "/how-we-work": "كيف نعمل",
    "/contact": "تواصل معنا",
  },
  menu: "فتح القائمة",
  navigation: "التنقّل",
  language: "اللغة",
  switchTo: "English",
  cta: {
    discuss: "عزّز أعمالك",
    discussShort: "لنتحدث",
    explore: "استكشف الحلول",
    whatsapp: "تواصل عبر واتساب",
    whatsappShort: "واتساب",
    services: "استكشف الخدمات",
    allServices: "استكشف جميع الخدمات",
    products: "استكشف المنتجات",
    idrakProducts: "استكشف منتجات إدراك",
    howWeWork: "تعرّف على طريقة عملنا",
    viewProject: "عرض المشروع",
  },
  advantage: "ميزة إدراك",
  productTag: "منتج",
  serviceTag: "خدمة",
  services: {
    automation: "أتمتة الأعمال المخصّصة",
    aiVideo: "إنتاج الفيديو بالذكاء الاصطناعي",
    content: "إدارة المحتوى ووسائل التواصل الاجتماعي",
    web: "تصميم المواقع وSEO وGEO",
  },
  products: {
    construction: "نظام تقارير الإشراف على البناء",
    clinic: "نظام CRM ومساعد واتساب للعيادات",
  },
  footer: {
    description:
      "حلول ذكاء اصطناعي مصمّمة لتحقيق قيمة حقيقية للأعمال من خلال الأتمتة وتجربة العملاء والمحتوى والفيديو والمنتجات الرقمية.",
    services: "الخدمات",
    products: "المنتجات",
    navigate: "روابط",
    contact: "التواصل",
    rights: "جميع الحقوق محفوظة.",
    tagline: "ذكاء اصطناعي يصنع قيمة للأعمال.",
  },
  form: {
    stepOf: "الخطوة {n} من {total}",
    next: "التالي",
    back: "رجوع",
    submit: "أرسل إلى إدراك",
    sending: "جارٍ الإرسال…",
    optional: "اختياري",
    size: {
      q: "ما حجم عملك؟",
      hint: "لنقترح ما يناسبك فعلاً.",
      options: {
        small: ["صغير", "1–10 أشخاص"],
        medium: ["متوسط", "11–100 شخص"],
        large: ["كبير", "أكثر من 100 شخص"],
      },
    },
    challenge: {
      q: "ما الذي تريد تغييره أولاً؟",
      hint: "اختر خياراً أو أكثر.",
      options: {
        costs: "خفض التكاليف",
        revenue: "زيادة الإيرادات",
        productivity: "رفع الإنتاجية",
        followup: "رد ومتابعة أسرع للعملاء",
        value: "إظهار قيمة منتجي",
        visibility: "الظهور أكثر على الإنترنت",
      },
    },
    focus: {
      q: "هل هناك ما يجب أن نعرفه؟",
      hint: "اختياري — اختر مجالاً إن كان في ذهنك.",
      note: "أخبرنا بجملة واحدة",
      notePlaceholder: "مثال: نخسر عملاء على واتساب بعد ساعات العمل.",
    },
    contact: {
      q: "كيف نتواصل معك؟",
      hint: "سنعود إليك عبر واتساب.",
      name: "اسمك",
      phone: "رقم واتساب",
      company: "الشركة",
      email: "البريد الإلكتروني",
    },
    successTitle: "تم الاستلام. 🚀",
    successText: "وصلتنا إجاباتك، وسنتواصل معك عبر واتساب لمناقشة الخطوة التالية الأكثر عملية.",
    successWhatsapp: "راسلنا على واتساب الآن",
    sendAnother: "ابدأ من جديد",
    errorTitle: "تعذّر إرسال رسالتك.",
    errorText: "يرجى المحاولة مرة أخرى، أو التواصل معنا مباشرة:",
    interests: {
      automation: "أتمتة الأعمال المخصّصة",
      whatsapp: "أتمتة واتساب وCRM",
      "ai-video": "إنتاج الفيديو بالذكاء الاصطناعي",
      content: "إدارة المحتوى ووسائل التواصل الاجتماعي",
      web: "تصميم المواقع وSEO وGEO",
      "construction-reporting": "نظام تقارير الإشراف على البناء",
      "clinic-crm": "نظام CRM ومساعد واتساب للعيادات",
      "not-sure": "لست متأكداً بعد",
    },
  },
  agent: {
    open: "اسأل مساعد إدراك",
    teaser: "مرحباً 👋 اسألني كيف يمكن للذكاء الاصطناعي أن ينمّي عملك.",
    title: "مساعد إدراك الذكي",
    status: "متصل · يرد فوراً",
    greeting:
      "مرحباً! أنا المساعد الذكي لإدراك. حدّثني عن عملك أو اسألني أي شيء عن حلولنا، وسأدلّك على الخطوة التالية المناسبة.",
    placeholder: "اسأل عن الأتمتة أو الفيديو أو التسعير…",
    send: "إرسال",
    close: "إغلاق المحادثة",
    suggestions: [
      "ماذا يمكن للذكاء الاصطناعي أن يقدّم لعملي؟",
      "كيف تعمل أتمتة المبيعات عبر واتساب؟",
      "كيف يتم تحديد التكلفة؟",
    ],
    human: "تفضّل التحدث مع شخص؟ تابع عبر واتساب",
    error: "تعذّر الرد الآن. فريقنا على بُعد لمسة عبر واتساب.",
    disclaimer: "مساعد ذكاء اصطناعي · قد لا تكون الإجابات دقيقة دائماً",
  },
  notFound: {
    title: "الصفحة غير موجودة",
    text: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
    home: "العودة إلى الرئيسية",
  },
};

export const COMMON = { en, ar };
