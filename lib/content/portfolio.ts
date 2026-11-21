import { withOverrides } from "@/lib/content/overrides";

/** /portfolio: the video and content-production portfolio (Mr Zakeri, 16 Nov 2026). No prices here. */
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
  empty: "New videos are on the way. Check back soon.",
  play: "Play video",
  close: "Close",
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
    fitness: "نوادٍ ورياضة",
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
  empty: "فيديوهات جديدة قادمة قريباً. عاود الزيارة.",
  play: "تشغيل الفيديو",
  close: "إغلاق",
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
