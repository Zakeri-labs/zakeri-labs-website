import { withOverrides } from "@/lib/content/overrides";

/**
 * /portfolio: the video and content-production portfolio (Mr Zakeri, 16 Nov 2026). Sellers send this page to
 * leads, so it also carries the content packages, the services menu and the office (Zakeri's sales meeting,
 * 28 Nov 2026). Package names, prices and contents are word for word from Zakeri's two images in Idrak Sales
 * Team (28 Nov 11:57); services from his «Our Services Menu» image. Change them only from a new image.
 */
const en = {
  hero: {
    eyebrow: "Video portfolio",
    title: "Films and reels that make a business easy to understand.",
    intro:
      "Reels, product tours and pitch films produced by IDRAK for our own products and for clients in Oman and the GCC. Pick your industry, press play, and send us the code of the one you like.",
  },
  industries: {
    food: "Restaurants & cafés",
    beauty: "Beauty & perfumes",
    fashion: "Fashion & tailoring",
    retail: "Shops & retail",
    automotive: "Cars & rental",
    "real-estate": "Real estate & construction",
    health: "Clinics & health",
    fitness: "Gyms & sports",
    hospitality: "Chalets & tourism",
    education: "Education",
    services: "Business services",
    tech: "Software & apps",
  },
  sample: {
    code: "Sample code",
    whatsapp: "I want one like this",
    whatsappText:
      "Hi IDRAK, I saw sample #{code} in your portfolio and I'd like a video like it for my business.",
    whatsappTextNoCode:
      "Hi IDRAK, I saw your video portfolio and I'd like a video for my business.",
    meeting: "Request a meeting",
    copy: "Copy link",
    copied: "Link copied",
    tapForSound: "Tap for sound",
    previous: "Previous sample",
    next: "Next sample",
    seoTitle: "{title} · Sample #{code} | IDRAK Video Portfolio",
  },
  filters: {
    all: "All",
    reel: "Reels",
    promo: "Brand & pitch films",
    solution: "Solution films",
    project_demo: "Product tours",
  },
  filterLabel: "Filter by industry",
  stats: "Samples: {samples} · Industries: {industries}",
  search: "Search business, industry or code",
  noResults: "No sample matches. Try another word or another tab.",
  empty: "New videos are on the way. Check back soon.",
  play: "Play video",
  close: "Close",
  packages: {
    eyebrow: "Social media content packages",
    title: "Content Packages for Small Businesses",
    intro: "From Idea to Published Content — Grow Your Business on Social Media",
    currency: "OMR",
    perMonth: "a month",
    recommended: "Recommended",
    was: "Was",
    order: "Order on WhatsApp",
    whatsappText: "Hi IDRAK, I'm interested in the {name} content package ({price} OMR a month).",
    items: [
      {
        name: "Starter",
        tagline: "Get Started",
        price: "50",
        was: "65",
        features: [
          "5 Videos (Edited & Ready)",
          "Basic Captions",
          "Cover Design",
          "Simple Editing & Branding",
        ],
      },
      {
        name: "Growth",
        tagline: "Build Consistency",
        price: "84",
        was: "",
        features: [
          "12 Videos (Edited & Ready)",
          "Captions & Copywriting",
          "Cover Design",
          "Content Plan (Ideas & Daily Scenarios)",
          "Publishing Guide (Best Time & Tips)",
        ],
      },
      {
        name: "Professional",
        tagline: "Training & Content",
        price: "97",
        was: "",
        features: [
          "12 Videos (Edited & Ready)",
          "Educational Videos (Social Media Training)",
          "Captions & Copywriting",
          "Cover Design",
          "Highlight Setup (Branded Highlights)",
          "Bio Optimization (Profile & Description)",
          "Content Plan (Monthly Plan)",
          "Publishing Guide (Best Time, Hashtags & Tips)",
        ],
      },
      {
        name: "Advanced",
        tagline: "Full Growth Solution",
        price: "150",
        was: "",
        features: [
          "Unlimited Videos (Monthly Plan)",
          "Educational Videos (Social Media Training)",
          "Captions & Copywriting",
          "Cover Design",
          "Highlight Setup (Branded Highlights)",
          "Bio Optimization (Profile & Description)",
          "Full Content Strategy & Calendar",
          "Performance Review & Growth Tips",
          "Priority Support (WhatsApp)",
        ],
      },
    ],
  },
  menu: {
    eyebrow: "Our services menu",
    title: "More than content: everything a business needs to grow.",
    more: "See all services",
    items: [
      { title: "Content Production", text: "Professional, engaging content for your brand." },
      { title: "Social Media Management", text: "Grow, engage and manage your presence." },
      {
        title: "Digital Advertising",
        text: "Get more leads, bookings and sales with targeted ads.",
      },
      { title: "Google Maps & Local SEO", text: "Be easily found by customers in your area." },
      {
        title: "Website & Digital Platforms",
        text: "A professional online presence that converts.",
      },
      { title: "AI & Automation", text: "Save time, reduce cost and serve customers 24/7." },
      {
        title: "CRM & Customer Retention",
        text: "Manage customers, increase repeat sales and loyalty.",
      },
      {
        title: "Strategy & Consulting",
        text: "Expert guidance to plan, improve and grow your business.",
      },
    ],
  },
  office: {
    eyebrow: "Visit or message us",
    title: "Our office in Muscat.",
    hours: "Office hours",
    whatsapp: "Message us on WhatsApp",
    whatsappText:
      "Hi IDRAK, I saw your portfolio and I'd like to talk about content for my business.",
    directions: "Get directions",
    showMap: "Show map",
    mapTitle: "IDRAK office location on Google Maps",
  },
  service: {
    eyebrow: "The content service",
    title: "What our video and content production includes.",
    intro:
      "One team takes the idea from a blank page to a finished film, so you do not have to manage a writer, a designer and an editor separately.",
    items: [
      {
        title: "Idea and script",
        text: "We start from your offer and your customer, then write a short script that says one thing clearly.",
      },
      {
        title: "Design and motion",
        text: "Screens, product shots, AI-generated scenes and motion graphics built in your brand's colours and type.",
      },
      {
        title: "Voice-over and sound",
        text: "Natural voice-over in Arabic or English, with music and sound design that fit the message.",
      },
      {
        title: "Every format you publish in",
        text: "Vertical reels for Instagram, TikTok and Shorts, and wide films for your website, proposals and meetings.",
      },
      {
        title: "Subtitles and language versions",
        text: "Subtitles and extra language versions, so one film works for every audience you sell to.",
      },
      {
        title: "Review before delivery",
        text: "You see the film before it is final, and we refine it until the message is right.",
      },
    ],
    note: "Scope and timing depend on the film. Tell us what you want to show and we will suggest the right format.",
  },
  final: {
    eyebrow: "Want a film like these?",
    title: "Let's plan your next video.",
    text: "Tell us what you want customers to understand. We will come back with an idea, a format and the next step.",
  },
};

const ar: typeof en = {
  hero: {
    eyebrow: "معرض الفيديو",
    title: "أفلام وريلز تجعل عملك سهل الفهم.",
    intro:
      "ريلز وجولات في المنتجات وأفلام عروض أنتجتها إدراك لمنتجاتها ولعملائها في عُمان والخليج. اختر مجال عملك واضغط تشغيل، ثم أرسل لنا رمز النموذج الذي أعجبك.",
  },
  industries: {
    food: "مطاعم ومقاهٍ",
    beauty: "تجميل وعطور",
    fashion: "أزياء وخياطة",
    retail: "متاجر وتجزئة",
    automotive: "سيارات وتأجير",
    "real-estate": "عقارات ومقاولات",
    health: "عيادات وصحة",
    fitness: "رياضة ولياقة",
    hospitality: "شاليهات وسياحة",
    education: "تعليم",
    services: "خدمات الأعمال",
    tech: "برمجيات وتطبيقات",
  },
  sample: {
    code: "رمز النموذج",
    whatsapp: "أريد فيديو مثل هذا",
    whatsappText:
      "مرحباً إدراك، شاهدت النموذج \u200E#{code} في معرض أعمالكم وأريد فيديو مثله لنشاطي.",
    whatsappTextNoCode: "مرحباً إدراك، شاهدت معرض الفيديو لديكم وأريد فيديو لنشاطي.",
    meeting: "اطلب اجتماعاً",
    copy: "نسخ الرابط",
    copied: "تم نسخ الرابط",
    tapForSound: "اضغط لتشغيل الصوت",
    previous: "النموذج السابق",
    next: "النموذج التالي",
    seoTitle: "{title} · نموذج \u200E#{code} | معرض فيديو إدراك",
  },
  filters: {
    all: "الكل",
    reel: "ريلز",
    promo: "أفلام العلامة والعروض",
    solution: "أفلام الحلول",
    project_demo: "جولات المنتجات",
  },
  filterLabel: "تصفية حسب المجال",
  stats: "النماذج: {samples} · المجالات: {industries}",
  search: "ابحث باسم النشاط أو المجال أو الرمز",
  noResults: "لا يوجد نموذج مطابق. جرّب كلمة أخرى أو مجالاً آخر.",
  empty: "فيديوهات جديدة قادمة قريباً. عاود الزيارة.",
  play: "تشغيل الفيديو",
  close: "إغلاق",
  packages: {
    eyebrow: "باقات محتوى للسوشيال ميديا",
    title: "باقات صناعة المحتوى للشركات الصغيرة",
    intro: "من الفكرة إلى محتوى جاهز للنشر — نمِّ أعمالك على منصات التواصل",
    currency: "ريال عماني",
    perMonth: "شهرياً",
    recommended: "الأكثر مناسبة",
    was: "السعر السابق",
    order: "اطلب عبر واتساب",
    whatsappText: "مرحباً إدراك، أرغب في الاشتراك في «{name}» ({price} ر.ع شهرياً).",
    items: [
      {
        name: "باقة البداية",
        tagline: "لبداية سريعة",
        price: "50",
        was: "65",
        features: [
          "5 فيديوهات (معدة وجاهزة للنشر)",
          "تعليقات أساسية",
          "تصميم الغلاف",
          "مونتاج بسيط وهوية أساسية",
        ],
      },
      {
        name: "باقة النمو",
        tagline: "بناء حضور ثابت",
        price: "84",
        was: "",
        features: [
          "12 فيديو (معد وجاهز للنشر)",
          "كتابة النصوص والتعليقات",
          "تصميم الغلاف",
          "خطة محتوى (أفكار وسيناريوهات يومية)",
          "دليل النشر (أفضل الأوقات والنصائح)",
        ],
      },
      {
        name: "الباقة الاحترافية",
        tagline: "تعليم ومحتوى متكامل",
        price: "97",
        was: "",
        features: [
          "12 فيديو (معد وجاهز للنشر)",
          "فيديوهات تعليمية (تدريب على السوشيال ميديا)",
          "كتابة النصوص والتعليقات",
          "تصميم الغلاف",
          "إعداد الهايلايت (بهوية العلامة)",
          "تحسين البايو (الملف التعريفي والوصف)",
          "خطة محتوى (شهرية)",
          "دليل النشر (أفضل الأوقات، الهاشتاقات، ونصائح عملية)",
        ],
      },
      {
        name: "الباقة المتقدمة",
        tagline: "حل متكامل للنمو",
        price: "150",
        was: "",
        features: [
          "فيديوهات غير محدودة (خطة شهرية)",
          "فيديوهات تعليمية (تدريب على السوشيال ميديا)",
          "كتابة النصوص والتعليقات",
          "تصميم الغلاف",
          "إعداد الهايلايت (بهوية العلامة)",
          "تحسين البايو (الملف التعريفي والوصف)",
          "استراتيجية محتوى وجدول نشر كامل",
          "مراجعة الأداء ونصائح للنمو",
          "دعم أولوية (عبر واتساب)",
        ],
      },
    ],
  },
  menu: {
    eyebrow: "قائمة خدماتنا",
    title: "أكثر من محتوى: كل ما يحتاجه عملك لينمو.",
    more: "كل الخدمات",
    items: [
      { title: "إنتاج المحتوى", text: "محتوى احترافي وجذّاب لعلامتك التجارية." },
      { title: "إدارة السوشيال ميديا", text: "نمِّ حضورك وتفاعل مع جمهورك وأدِر حساباتك." },
      { title: "الإعلانات الرقمية", text: "عملاء وحجوزات ومبيعات أكثر بإعلانات موجّهة." },
      { title: "خرائط جوجل والسيو المحلي", text: "ليجدك العملاء في منطقتك بسهولة." },
      { title: "المواقع والمنصات الرقمية", text: "حضور رقمي احترافي يحوّل الزوار إلى عملاء." },
      {
        title: "الذكاء الاصطناعي والأتمتة",
        text: "وفّر الوقت وقلّل التكاليف واخدم عملاءك على مدار الساعة.",
      },
      {
        title: "إدارة العملاء والاحتفاظ بهم",
        text: "نظّم بيانات عملائك وزِد المبيعات المتكررة وولاءهم.",
      },
      { title: "الاستراتيجية والاستشارات", text: "إرشاد متخصص لتخطيط عملك وتحسينه وتنميته." },
    ],
  },
  office: {
    eyebrow: "زورونا أو راسلونا",
    title: "مكتبنا في مسقط.",
    hours: "ساعات العمل",
    whatsapp: "راسلنا على واتساب",
    whatsappText: "مرحباً إدراك، شاهدت معرض أعمالكم وأرغب في الحديث عن المحتوى لنشاطي.",
    directions: "الاتجاهات إلى مكتبنا",
    showMap: "عرض الخريطة",
    mapTitle: "موقع مكتب إدراك على خرائط جوجل",
  },
  service: {
    eyebrow: "خدمة المحتوى",
    title: "ماذا تشمل خدمة إنتاج الفيديو والمحتوى لدينا.",
    intro:
      "فريق واحد يأخذ الفكرة من صفحة بيضاء إلى فيلم جاهز، فلا تحتاج إلى إدارة كاتب ومصمم ومونتير كلٌّ على حدة.",
    items: [
      {
        title: "الفكرة والنص",
        text: "نبدأ من عرضك ومن عميلك، ثم نكتب نصاً قصيراً يقول شيئاً واحداً بوضوح.",
      },
      {
        title: "التصميم والحركة",
        text: "شاشات ولقطات للمنتج ومشاهد مولّدة بالذكاء الاصطناعي ورسوم متحركة بألوان علامتك وخطوطها.",
      },
      {
        title: "التعليق الصوتي والصوت",
        text: "تعليق صوتي طبيعي بالعربية أو الإنجليزية، مع موسيقى وتصميم صوتي يناسبان الرسالة.",
      },
      {
        title: "كل صيغة تنشر بها",
        text: "ريلز عمودية لإنستغرام وتيك توك وشورتس، وأفلام عريضة لموقعك وعروضك واجتماعاتك.",
      },
      {
        title: "الترجمة ونسخ اللغات",
        text: "ترجمة مكتوبة ونسخ بلغات إضافية، ليعمل الفيلم الواحد مع كل جمهور تبيع له.",
      },
      {
        title: "مراجعة قبل التسليم",
        text: "تشاهد الفيلم قبل اعتماده، ونعدّله حتى تصل الرسالة كما تريد.",
      },
    ],
    note: "النطاق والمدة يعتمدان على الفيلم. أخبرنا بما تريد عرضه وسنقترح الصيغة المناسبة.",
  },
  final: {
    eyebrow: "تريد فيلماً مثل هذه؟",
    title: "لنخطّط لفيديوك القادم.",
    text: "أخبرنا بما تريد أن يفهمه عملاؤك، وسنعود إليك بفكرة وصيغة وخطوة تالية.",
  },
};

export const PORTFOLIO = withOverrides("portfolio", { en, ar });
