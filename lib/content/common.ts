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

export const TIMELINES = ["asap", "1-month", "1-3-months", "exploring"] as const;
export type Timeline = (typeof TIMELINES)[number];

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
    discuss: "Let’s Discuss Your Business",
    discussShort: "Let’s Talk",
    explore: "Explore Services & Products",
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
    requiredNote: "Fields marked * are required.",
    name: "Name",
    company: "Company",
    email: "Work Email",
    phone: "WhatsApp / Phone",
    country: "Country",
    interest: "What are you interested in?",
    interestPlaceholder: "Choose an area",
    message: "What would you like to improve?",
    messagePlaceholder:
      "Tell us briefly what is happening today, what you would like to improve, and what a useful result would look like.",
    timeline: "When are you looking to start?",
    timelinePlaceholder: "Optional",
    optional: "optional",
    submit: "Discuss My Business",
    sending: "Sending…",
    successTitle: "Thank You.",
    successText:
      "We’ve received your message. We’ll review your business challenge and get back to you to discuss the most practical next step.",
    sendAnother: "Send another message",
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
    timelines: {
      asap: "As soon as possible",
      "1-month": "Within 1 month",
      "1-3-months": "Within 1–3 months",
      exploring: "Later / Exploring",
    } satisfies Record<Timeline, string>,
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
    discuss: "لنتحدث عن عملك",
    discussShort: "لنتحدث",
    explore: "استكشف الخدمات والمنتجات",
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
    requiredNote: "الحقول المميّزة بعلامة * إلزامية.",
    name: "الاسم",
    company: "الشركة",
    email: "البريد الإلكتروني للعمل",
    phone: "واتساب / الهاتف",
    country: "الدولة",
    interest: "ما المجال الذي يهمّك؟",
    interestPlaceholder: "اختر مجالاً",
    message: "ما الذي تودّ تحسينه؟",
    messagePlaceholder:
      "أخبرنا باختصار بما يحدث اليوم، وما الذي تودّ تحسينه، وكيف تبدو النتيجة المفيدة بالنسبة لك.",
    timeline: "متى تودّ البدء؟",
    timelinePlaceholder: "اختياري",
    optional: "اختياري",
    submit: "لنناقش عملي",
    sending: "جارٍ الإرسال…",
    successTitle: "شكراً لك.",
    successText:
      "وصلتنا رسالتك. سنراجع التحدي الذي تواجهه ونعود إليك لمناقشة الخطوة التالية الأكثر عملية.",
    sendAnother: "إرسال رسالة أخرى",
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
    timelines: {
      asap: "في أقرب وقت ممكن",
      "1-month": "خلال شهر",
      "1-3-months": "خلال شهر إلى ثلاثة أشهر",
      exploring: "لاحقاً / أستكشف الخيارات",
    },
  },
  notFound: {
    title: "الصفحة غير موجودة",
    text: "الصفحة التي تبحث عنها غير موجودة أو تم نقلها.",
    home: "العودة إلى الرئيسية",
  },
};

export const COMMON = { en, ar };
