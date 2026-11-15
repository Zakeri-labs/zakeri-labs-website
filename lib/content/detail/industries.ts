import type { DetailEntry } from "./types";

/**
 * /industries/<slug> — phase-one industry pages from Sajjad's architecture. Each offer item is a
 * concrete thing IDRAK builds for that industry and maps to a service in `related.services`.
 * No invented clients, numbers or prices.
 */
export const INDUSTRY_PAGES: DetailEntry[] = [
  {
    kind: "industries",
    slug: "real-estate",
    image: "aiVideo",
    related: {
      services: [
        "custom-software-development",
        "whatsapp-ai-automation",
        "ai-video-production",
        "web-design",
        "seo-geo",
        "ai-business-automation",
        "content-social-media",
      ],
      industries: ["facility-property-management", "construction"],
      work: [],
    },
    en: {
      seo: {
        title: "Real Estate CRM, Software & AI Video in Oman | IDRAK",
        description:
          "Real estate software for developers and agencies in Oman: lead capture, WhatsApp follow-up, property CRM, broker dashboards, portals and AI video for off-plan.",
      },
      name: "Real Estate & Property",
      summary:
        "Lead capture, WhatsApp follow-up, property CRM, broker dashboards and AI video for developers and agencies.",
      hero: {
        eyebrow: "Industries · Real estate & property",
        title: "Real Estate Software, CRM and AI Video for Developers and Agencies in Oman.",
        intro:
          "Buyers and tenants ask on WhatsApp, compare projects online and expect fast answers. IDRAK builds the systems that capture every lead, follow it up and show the project clearly, from the first enquiry to the signed deal.",
        support: "For developers, brokerages, agencies and property owners.",
      },
      problem: {
        eyebrow: "What we hear from real estate teams",
        title: "Leads Arrive From Everywhere and Slip Away Quietly.",
        points: [
          "Enquiries come from portals, social media, WhatsApp and calls, and no one sees them all in one list.",
          "Brokers follow up from their own phones, so the company loses the history when someone leaves.",
          "Management cannot see which campaign, project or broker is producing real deals.",
          "Off-plan units are hard to sell from floor plans and renders alone.",
          "Listings, availability and prices are updated in spreadsheets and shared by hand.",
        ],
      },
      offer: {
        eyebrow: "What we build for real estate",
        title: "What We Build, and the Service Behind It.",
        items: [
          {
            title: "Lead capture",
            text: "Forms, landing pages and portal leads flow into one place with source and project attached. (Web Design · AI & Business Automation)",
          },
          {
            title: "WhatsApp follow-up",
            text: "An AI assistant answers project questions in Arabic and English, qualifies the buyer and hands hot leads to a broker. (AI Agents & WhatsApp Automation)",
          },
          {
            title: "Property CRM",
            text: "A CRM built around your projects, units and sales stages, not a generic sales template. (Custom Software Development)",
          },
          {
            title: "Broker dashboards",
            text: "Each broker sees their leads and tasks; management sees pipeline, sources and follow-up by project. (Custom Software Development)",
          },
          {
            title: "Custom portals",
            text: "Buyer, investor or agent portals for units, documents, payments and updates. (Custom Software Development)",
          },
          {
            title: "Property management system (PMS)",
            text: "Leases, tenants, rent schedules and maintenance requests in one system for portfolios you manage. (Custom Software Development)",
          },
          {
            title: "AI video for off-plan projects",
            text: "Show spaces, views and lifestyle before construction is complete, for launches, ads and social media. (AI Video Production)",
          },
          {
            title: "Project websites and landing pages",
            text: "Fast, bilingual project sites designed to turn visits into enquiries and WhatsApp chats. (Web Design)",
          },
          {
            title: "SEO & GEO for property searches",
            text: "Help buyers find your projects on Google and in AI-generated answers. (SEO & GEO)",
          },
          {
            title: "Back-office automation",
            text: "Automate reservations, approvals, reminders and reports between sales, finance and operations. (AI & Business Automation)",
          },
        ],
      },
      chips: {
        label: "Who we work with",
        items: [
          "Real estate developers",
          "Brokerages and agencies",
          "Off-plan project sales teams",
          "Property owners and landlords",
          "Property management companies",
        ],
      },
      outcomes: {
        eyebrow: "What changes",
        title: "A Clear Path From Enquiry to Deal.",
        items: [
          {
            title: "No lead without an owner",
            text: "Every enquiry is captured, assigned and followed up, wherever it came from.",
          },
          {
            title: "Faster replies on WhatsApp",
            text: "Common project questions are answered at any hour, and brokers step in where it matters.",
          },
          {
            title: "Visibility for management",
            text: "See which projects, sources and brokers move deals forward.",
          },
          {
            title: "Projects buyers can picture",
            text: "AI video and clear project pages make off-plan units easier to understand and sell.",
          },
        ],
      },
      faq: [
        {
          q: "Do you offer a ready-made real estate CRM?",
          a: "We build the property CRM around your projects, units and sales process as a custom software project, so it fits how your team actually sells.",
        },
        {
          q: "Can the WhatsApp assistant talk about our projects in Arabic?",
          a: "Yes. The assistant is set up with your project information and works in Arabic and English, with handover to a broker when a person is needed.",
        },
        {
          q: "Can AI video be used before construction starts?",
          a: "Yes. It is one of its strongest uses: showing spaces, views and lifestyle for off-plan projects that cannot be filmed yet.",
        },
        {
          q: "Can we start with one piece, such as lead capture or video?",
          a: "Yes. Many teams start with one practical step, such as WhatsApp follow-up or a launch video, and expand from there.",
        },
      ],
      cta: {
        title: "Tell Us Where Your Leads Get Lost.",
        text: "Share how enquiries reach your team today and what you are selling next. We’ll suggest the most practical first step.",
        button: "Discuss a Real Estate Project",
      },
    },
    ar: {
      seo: {
        title: "نظام CRM عقاري وبرمجيات للمطورين والوسطاء في عُمان | إدراك",
        description:
          "برمجيات للمطورين والوسطاء العقاريين في عُمان: التقاط العملاء، المتابعة عبر واتساب، CRM عقاري، لوحات للوسطاء، وفيديو بالذكاء الاصطناعي للبيع على الخارطة.",
      },
      name: "العقارات والتطوير العقاري",
      summary:
        "التقاط العملاء والمتابعة عبر واتساب ونظام CRM عقاري ولوحات للوسطاء وفيديو بالذكاء الاصطناعي.",
      hero: {
        eyebrow: "القطاعات · العقارات والتطوير العقاري",
        title: "برمجيات وCRM وفيديو بالذكاء الاصطناعي للمطورين والوسطاء العقاريين في عُمان.",
        intro:
          "يسأل المشترون والمستأجرون عبر واتساب، ويقارنون المشاريع عبر الإنترنت، وينتظرون رداً سريعاً. تبني إدراك الأنظمة التي تلتقط كل عميل محتمل وتتابعه وتعرض المشروع بوضوح، من أول استفسار حتى توقيع الصفقة.",
        support: "للمطورين العقاريين ومكاتب الوساطة والوكالات وملّاك العقارات.",
      },
      problem: {
        eyebrow: "ما نسمعه من فرق العقارات",
        title: "العملاء يصلون من كل اتجاه ويضيعون بصمت.",
        points: [
          "تصل الاستفسارات من المنصات العقارية ووسائل التواصل وواتساب والمكالمات، ولا توجد قائمة واحدة تجمعها.",
          "يتابع الوسطاء من هواتفهم الشخصية، فتفقد الشركة سجل العميل عند مغادرة أي وسيط.",
          "لا ترى الإدارة أي حملة أو مشروع أو وسيط يحقق صفقات فعلية.",
          "بيع الوحدات على الخارطة صعب بالمخططات والصور الثابتة وحدها.",
          "تُحدَّث الوحدات المتاحة والأسعار في جداول Excel وتُرسل يدوياً.",
        ],
      },
      offer: {
        eyebrow: "ماذا نبني لقطاع العقارات",
        title: "ما نبنيه، والخدمة التي تتولّاه.",
        items: [
          {
            title: "التقاط العملاء المحتملين",
            text: "تتدفق النماذج وصفحات الهبوط وعملاء المنصات إلى مكان واحد مع المصدر والمشروع. (تصميم المواقع · أتمتة الأعمال بالذكاء الاصطناعي)",
          },
          {
            title: "المتابعة عبر واتساب",
            text: "مساعد ذكي يجيب عن أسئلة المشروع بالعربية والإنجليزية، ويؤهّل المشتري، ويحوّل العميل الجاد إلى وسيط. (وكلاء الذكاء الاصطناعي وأتمتة واتساب)",
          },
          {
            title: "نظام CRM عقاري",
            text: "نظام مبني حول مشاريعك ووحداتك ومراحل البيع لديك، لا قالب مبيعات عام. (تطوير البرمجيات المخصّصة)",
          },
          {
            title: "لوحات متابعة للوسطاء",
            text: "يرى كل وسيط عملاءه ومهامه، وترى الإدارة المبيعات والمصادر والمتابعة لكل مشروع. (تطوير البرمجيات المخصّصة)",
          },
          {
            title: "بوابات مخصّصة",
            text: "بوابات للمشترين أو المستثمرين أو الوكلاء للوحدات والمستندات والدفعات والتحديثات. (تطوير البرمجيات المخصّصة)",
          },
          {
            title: "نظام إدارة الأملاك (PMS)",
            text: "العقود والمستأجرون وجداول الإيجار وطلبات الصيانة في نظام واحد للمحافظ التي تديرها. (تطوير البرمجيات المخصّصة)",
          },
          {
            title: "فيديو بالذكاء الاصطناعي للبيع على الخارطة",
            text: "اعرض المساحات والإطلالات ونمط الحياة قبل اكتمال البناء، للإطلاق والإعلانات ووسائل التواصل. (إنتاج الفيديو بالذكاء الاصطناعي)",
          },
          {
            title: "مواقع المشاريع وصفحات الهبوط",
            text: "مواقع سريعة بلغتين مصمّمة لتحويل الزيارة إلى استفسار أو محادثة واتساب. (تصميم المواقع)",
          },
          {
            title: "SEO وGEO للبحث العقاري",
            text: "ساعد المشترين على إيجاد مشاريعك في Google وفي إجابات الذكاء الاصطناعي. (SEO وGEO)",
          },
          {
            title: "أتمتة الأعمال الإدارية",
            text: "أتمتة الحجوزات والموافقات والتذكيرات والتقارير بين المبيعات والمالية والعمليات. (أتمتة الأعمال بالذكاء الاصطناعي)",
          },
        ],
      },
      chips: {
        label: "من نعمل معهم",
        items: [
          "المطورون العقاريون",
          "مكاتب الوساطة والوكالات",
          "فرق بيع المشاريع على الخارطة",
          "ملّاك العقارات",
          "شركات إدارة الأملاك",
        ],
      },
      outcomes: {
        eyebrow: "ما الذي يتغيّر",
        title: "مسار واضح من الاستفسار إلى الصفقة.",
        items: [
          {
            title: "لا عميل بلا مسؤول",
            text: "يُلتقط كل استفسار ويُسند ويُتابع، أياً كان مصدره.",
          },
          {
            title: "رد أسرع عبر واتساب",
            text: "تُجاب أسئلة المشروع الشائعة في أي وقت، ويتدخّل الوسيط حيث يلزم.",
          },
          {
            title: "رؤية أوضح للإدارة",
            text: "اعرف أي المشاريع والمصادر والوسطاء يدفعون الصفقات إلى الأمام.",
          },
          {
            title: "مشاريع يستطيع المشتري تخيّلها",
            text: "الفيديو بالذكاء الاصطناعي وصفحات المشاريع الواضحة تجعل الوحدات على الخارطة أسهل فهماً وبيعاً.",
          },
        ],
      },
      faq: [
        {
          q: "هل تقدّمون نظام CRM عقارياً جاهزاً؟",
          a: "نبني نظام CRM العقاري حول مشاريعك ووحداتك وطريقة البيع لديك كمشروع برمجيات مخصّص، ليناسب طريقة عمل فريقك فعلاً.",
        },
        {
          q: "هل يستطيع مساعد واتساب التحدث عن مشاريعنا بالعربية؟",
          a: "نعم. يُهيّأ المساعد بمعلومات مشاريعك ويعمل بالعربية والإنجليزية، مع التحويل إلى وسيط عند الحاجة إلى شخص.",
        },
        {
          q: "هل يمكن استخدام الفيديو بالذكاء الاصطناعي قبل بدء البناء؟",
          a: "نعم، وهذا من أقوى استخداماته: عرض المساحات والإطلالات ونمط الحياة لمشاريع على الخارطة لا يمكن تصويرها بعد.",
        },
        {
          q: "هل يمكن البدء بجزء واحد، مثل التقاط العملاء أو الفيديو؟",
          a: "نعم. تبدأ فرق كثيرة بخطوة عملية واحدة، مثل المتابعة عبر واتساب أو فيديو إطلاق، ثم تتوسّع.",
        },
      ],
      cta: {
        title: "أخبرنا أين يضيع عملاؤك.",
        text: "حدّثنا كيف تصل الاستفسارات إلى فريقك اليوم وما المشروع القادم الذي تبيعه، وسنقترح الخطوة الأولى الأكثر عملية.",
        button: "ناقش مشروعاً عقارياً",
      },
    },
  },
  {
    kind: "industries",
    slug: "healthcare",
    image: "clinic",
    interest: "clinic-crm",
    related: {
      products: ["clinic-crm-whatsapp-assistant"],
      services: [
        "whatsapp-ai-automation",
        "custom-software-development",
        "ai-business-automation",
        "ai-video-production",
        "content-social-media",
        "web-design",
        "seo-geo",
      ],
      work: [],
    },
    en: {
      seo: {
        title: "Healthcare Software & AI for Clinics in Oman | IDRAK",
        description:
          "Clinic CRM, WhatsApp booking assistant, patient follow-up and custom healthcare software for dental, aesthetic and private clinics in Oman. Talk to IDRAK today.",
      },
      name: "Healthcare & Clinics",
      summary:
        "Clinic CRM and WhatsApp assistant, patient follow-up, custom clinic systems and content for private healthcare.",
      hero: {
        eyebrow: "Industries · Healthcare & clinics",
        title: "Healthcare Software, AI and WhatsApp Automation for Clinics in Oman.",
        intro:
          "Patients ask on WhatsApp, book on the phone and leave reviews online. IDRAK connects those steps into one organised journey, with a ready-made Clinic CRM & WhatsApp Assistant and custom systems for clinic groups.",
        support: "For dental, aesthetic, dermatology and private healthcare groups.",
      },
      problem: {
        eyebrow: "What we hear from clinics",
        title: "The Front Desk Is Doing Too Much by Hand.",
        points: [
          "Reception answers the same WhatsApp questions about services, fees and timings all day.",
          "Messages after hours wait until morning, and some patients book elsewhere.",
          "No-shows and rescheduling are chased one chat at a time.",
          "Patients who enquired but did not book are never followed up.",
          "Branches use different spreadsheets, so management cannot see bookings and follow-up in one place.",
        ],
      },
      offer: {
        eyebrow: "What we build for healthcare",
        title: "What We Build, and the Service Behind It.",
        items: [
          {
            title: "Clinic CRM & WhatsApp Assistant",
            text: "Our ready-made product: answers, booking, reminders, attendance, follow-up and reviews in one flow. (Product)",
          },
          {
            title: "WhatsApp booking and reminders",
            text: "Patients move from a question to a booking request and receive reminders in the same chat. (AI Agents & WhatsApp Automation)",
          },
          {
            title: "Patient follow-up and reviews",
            text: "Follow up on enquiries and missed visits, collect feedback and send review links to satisfied patients. (AI Agents & WhatsApp Automation)",
          },
          {
            title: "Custom clinic systems",
            text: "Multi-branch dashboards, internal tools and patient-care workflows for clinic groups. (Custom Software Development)",
          },
          {
            title: "Front-desk and back-office automation",
            text: "Automate reports, approvals and data transfer between booking, CRM and finance. (AI & Business Automation)",
          },
          {
            title: "Clinic websites and booking pages",
            text: "Clear service pages that turn visits into WhatsApp chats and booking requests. (Web Design)",
          },
          {
            title: "Local SEO for clinics",
            text: "Help patients in your area find your services on Google and in AI answers. (SEO & GEO)",
          },
          {
            title: "Healthcare video and content",
            text: "Present services, treatments and the clinic environment through AI video and social content. (AI Video Production · Content & Social Media)",
          },
        ],
      },
      chips: {
        label: "Who we work with",
        items: [
          "Dental clinics",
          "Aesthetic clinics",
          "Dermatology clinics",
          "Medical centres",
          "Private healthcare groups",
        ],
      },
      outcomes: {
        eyebrow: "What changes",
        title: "A Calmer Front Desk and Fewer Lost Patients.",
        items: [
          {
            title: "Faster answers",
            text: "Common questions are answered on WhatsApp without waiting for reception.",
          },
          {
            title: "Consistent follow-up",
            text: "Enquiries, missed visits and rescheduling become part of a routine flow.",
          },
          {
            title: "One view across branches",
            text: "Bookings and patient interactions are kept together in one system.",
          },
          {
            title: "More reviews",
            text: "Asking for feedback and reviews happens after every visit, not only when someone remembers.",
          },
        ],
      },
      faq: [
        {
          q: "Is there a ready-made product for clinics?",
          a: "Yes. The Clinic CRM & WhatsApp Assistant covers questions, booking, reminders, attendance, follow-up and reviews. Clinic groups with wider needs can add custom software around it.",
        },
        {
          q: "Does the assistant replace our reception team?",
          a: "No. It handles common questions and routine steps, and routes concerns and cases that need a person to your team.",
        },
        {
          q: "Does it work in Arabic?",
          a: "Yes. Conversations are set up for Arabic and English.",
        },
        {
          q: "Who owns patient data?",
          a: "Your clinic does. Access, hosting and export are agreed in writing as part of deployment.",
        },
      ],
      cta: {
        title: "Tell Us How Your Clinic Handles WhatsApp Today.",
        text: "Share your booking process and where patients drop off. We’ll show you whether the product fits or a custom system makes more sense.",
        button: "Discuss Your Clinic",
      },
    },
    ar: {
      seo: {
        title: "برمجيات وذكاء اصطناعي للعيادات والمراكز الطبية في عُمان | إدراك",
        description:
          "نظام CRM للعيادات ومساعد واتساب للحجز ومتابعة المراجعين وبرمجيات مخصّصة لعيادات الأسنان والتجميل والعيادات الخاصة في عُمان. تواصل مع إدراك اليوم.",
      },
      name: "الرعاية الصحية والعيادات",
      summary:
        "نظام CRM ومساعد واتساب للعيادات، ومتابعة المراجعين، وأنظمة مخصّصة، ومحتوى للرعاية الصحية الخاصة.",
      hero: {
        eyebrow: "القطاعات · الرعاية الصحية والعيادات",
        title: "حلول برمجية وذكاء اصطناعي وأتمتة واتساب للعيادات والمراكز الطبية في عُمان.",
        intro:
          "يسأل المراجعون عبر واتساب، ويحجزون بالهاتف، ويكتبون تقييماتهم على Google. تربط إدراك هذه الخطوات في رحلة واحدة منظّمة، عبر منتج جاهز لنظام CRM ومساعد واتساب، وأنظمة مخصّصة لمجموعات العيادات.",
        support: "لعيادات الأسنان والتجميل والجلدية ومجموعات الرعاية الصحية الخاصة.",
      },
      problem: {
        eyebrow: "ما نسمعه من العيادات",
        title: "الاستقبال يؤدي أعمالاً كثيرة يدوياً.",
        points: [
          "يجيب الاستقبال طوال اليوم عن أسئلة واتساب نفسها حول الخدمات والأسعار والمواعيد.",
          "الرسائل بعد الدوام تنتظر حتى الصباح، وبعض المراجعين يحجزون في مكان آخر.",
          "تُلاحق المواعيد الفائتة وإعادة الجدولة محادثة بعد محادثة.",
          "لا تتم متابعة من استفسروا ولم يحجزوا.",
          "تستخدم الفروع جداول مختلفة، فلا ترى الإدارة الحجوزات والمتابعة في مكان واحد.",
        ],
      },
      offer: {
        eyebrow: "ماذا نبني لقطاع الرعاية الصحية",
        title: "ما نبنيه، والخدمة التي تتولّاه.",
        items: [
          {
            title: "نظام CRM ومساعد واتساب للعيادات",
            text: "منتجنا الجاهز: الرد والحجز والتذكير والحضور والمتابعة وآراء المراجعين في مسار واحد. (منتج)",
          },
          {
            title: "الحجز والتذكير عبر واتساب",
            text: "ينتقل المراجع من السؤال إلى طلب الحجز ويستلم التذكير في المحادثة نفسها. (وكلاء الذكاء الاصطناعي وأتمتة واتساب)",
          },
          {
            title: "متابعة المراجعين وتقييمات Google",
            text: "متابعة الاستفسارات والمواعيد الفائتة، وجمع آراء المراجعين، وإرسال روابط تقييمات Google للمراجعين الراضين. (وكلاء الذكاء الاصطناعي وأتمتة واتساب)",
          },
          {
            title: "أنظمة مخصّصة للعيادات",
            text: "لوحات متابعة متعددة الفروع وأدوات داخلية وسير عمل لخدمة المراجعين لمجموعات العيادات. (تطوير البرمجيات المخصّصة)",
          },
          {
            title: "أتمتة الاستقبال والأعمال الإدارية",
            text: "أتمتة التقارير والموافقات ونقل البيانات بين الحجز وCRM والمالية. (أتمتة الأعمال بالذكاء الاصطناعي)",
          },
          {
            title: "مواقع العيادات وصفحات الحجز",
            text: "صفحات خدمات واضحة تحوّل الزيارة إلى محادثة واتساب أو طلب حجز. (تصميم المواقع)",
          },
          {
            title: "SEO محلي للعيادات",
            text: "ساعد المراجعين في منطقتك على إيجاد خدماتك في Google وفي إجابات الذكاء الاصطناعي. (SEO وGEO)",
          },
          {
            title: "فيديو ومحتوى للرعاية الصحية",
            text: "اعرض الخدمات والعلاجات وبيئة العيادة عبر الفيديو بالذكاء الاصطناعي ومحتوى التواصل الاجتماعي. (إنتاج الفيديو بالذكاء الاصطناعي · المحتوى ووسائل التواصل الاجتماعي)",
          },
        ],
      },
      chips: {
        label: "من نعمل معهم",
        items: [
          "عيادات الأسنان",
          "عيادات التجميل",
          "عيادات الجلدية",
          "المراكز الطبية",
          "مجموعات الرعاية الصحية الخاصة",
        ],
      },
      outcomes: {
        eyebrow: "ما الذي يتغيّر",
        title: "استقبال أهدأ ومراجعون ضائعون أقل.",
        items: [
          { title: "ردود أسرع", text: "تُجاب الأسئلة الشائعة عبر واتساب دون انتظار الاستقبال." },
          {
            title: "متابعة منتظمة",
            text: "تصبح متابعة الاستفسارات والمواعيد الفائتة وإعادة الجدولة جزءاً من مسار ثابت.",
          },
          {
            title: "صورة واحدة لكل الفروع",
            text: "تبقى الحجوزات وتفاعلات المراجعين معاً في نظام واحد.",
          },
          {
            title: "تقييمات Google أكثر",
            text: "تُطلب آراء المراجعين وتقييمات Google بعد كل زيارة، لا فقط حين يتذكّر أحد.",
          },
        ],
      },
      faq: [
        {
          q: "هل يوجد منتج جاهز للعيادات؟",
          a: "نعم. يغطي نظام CRM ومساعد واتساب للعيادات الأسئلة والحجز والتذكير والحضور والمتابعة وآراء المراجعين. ويمكن لمجموعات العيادات ذات الاحتياجات الأوسع إضافة برمجيات مخصّصة حوله.",
        },
        {
          q: "هل يحل المساعد محل فريق الاستقبال؟",
          a: "لا. يتولى الأسئلة الشائعة والخطوات الروتينية، ويحيل الملاحظات والحالات التي تحتاج إلى شخص إلى فريقك.",
        },
        { q: "هل يعمل بالعربية؟", a: "نعم. تُهيّأ المحادثات بالعربية والإنجليزية." },
        {
          q: "لمن تعود ملكية بيانات المراجعين؟",
          a: "لعيادتك. ونتفق كتابياً على صلاحيات الوصول والاستضافة والتصدير ضمن تجهيز النظام.",
        },
      ],
      cta: {
        title: "حدّثنا كيف تتعامل عيادتك مع واتساب اليوم.",
        text: "شاركنا طريقة الحجز لديك وأين يتوقف المراجعون، وسنوضّح لك هل يناسبك المنتج الجاهز أم نظام مخصّص.",
        button: "ناقش عيادتك",
      },
    },
  },
  {
    kind: "industries",
    slug: "construction",
    image: "construction",
    interest: "construction-reporting",
    related: {
      products: ["construction-supervision-reporting"],
      services: [
        "custom-software-development",
        "ai-business-automation",
        "whatsapp-ai-automation",
        "ai-video-production",
        "web-design",
      ],
      industries: ["real-estate", "facility-property-management"],
      work: [],
    },
    en: {
      seo: {
        title: "Construction & Contracting Software in Oman | IDRAK",
        description:
          "Construction supervision reporting, custom project software, site dashboards and workflow automation for contractors and consultants in Oman. Talk to IDRAK.",
      },
      name: "Construction & Contracting",
      summary:
        "Supervision reporting, custom project systems, site dashboards and workflow automation for contractors and consultants.",
      hero: {
        eyebrow: "Industries · Construction & contracting",
        title: "Construction Software and Reporting for Contractors and Consultants in Oman.",
        intro:
          "Construction runs on reports, approvals and updates that move between site and office. IDRAK offers a ready-made supervision reporting product and builds custom systems around how your projects are actually run.",
        support: "For supervision consultants, contractors and project management teams.",
      },
      problem: {
        eyebrow: "What we hear from construction teams",
        title: "Site and Office Work From Different Versions of the Truth.",
        points: [
          "Supervision and daily reports take hours to assemble from photos, notes and chat messages.",
          "Approvals, variations and requests move by email and WhatsApp, with no clear status.",
          "Management cannot see progress and open issues across all projects in one view.",
          "Subcontractor, material and site information is spread across spreadsheets.",
          "Project data is retyped between site reports, finance and client updates.",
        ],
      },
      offer: {
        eyebrow: "What we build for construction",
        title: "What We Build, and the Service Behind It.",
        items: [
          {
            title: "Construction Supervision Reporting",
            text: "Our ready-made product for supervision firms, with deployment, training and pay per report produced. (Product)",
          },
          {
            title: "Project management systems",
            text: "Custom systems for projects, sites, tasks, issues and documents, built around your workflow. (Custom Software Development)",
          },
          {
            title: "Progress and site dashboards",
            text: "One view of progress, open issues and reports across every project for management. (Custom Software Development)",
          },
          {
            title: "Approval and request workflows",
            text: "Material requests, variations and approvals with clear owners and status. (AI & Business Automation)",
          },
          {
            title: "Document and data automation",
            text: "Move data between site reports, spreadsheets, finance and client updates without retyping. (AI & Business Automation)",
          },
          {
            title: "Client portals",
            text: "Give clients and owners a portal for reports, progress and documents. (Custom Software Development)",
          },
          {
            title: "WhatsApp updates and enquiries",
            text: "Capture enquiries and send structured updates on WhatsApp, connected to your CRM. (AI Agents & WhatsApp Automation)",
          },
          {
            title: "Project visualisation video",
            text: "Present finished projects or future buildings with AI video for tenders and marketing. (AI Video Production)",
          },
          {
            title: "Company websites",
            text: "A clear company website that presents projects, capabilities and contact paths. (Web Design)",
          },
        ],
      },
      chips: {
        label: "Who we work with",
        items: [
          "Supervision consultants",
          "Main contractors",
          "Subcontractors",
          "Project management teams",
          "Developers running their own projects",
        ],
      },
      outcomes: {
        eyebrow: "What changes",
        title: "Less Paperwork, Clearer Projects.",
        items: [
          {
            title: "Faster reporting",
            text: "Reports are produced in a consistent structure with less repetitive work.",
          },
          {
            title: "Clear approval status",
            text: "Everyone can see what is waiting, who owns it and what was decided.",
          },
          {
            title: "One view of all projects",
            text: "Management sees progress and issues without collecting updates by phone.",
          },
          {
            title: "Information entered once",
            text: "Site data flows to the office and the client without being retyped.",
          },
        ],
      },
      faq: [
        {
          q: "Do you have a ready-made product for construction?",
          a: "Yes. Construction Supervision Reporting is ready to deploy for supervision firms in Oman, with deployment, staff training and payment per report produced.",
        },
        {
          q: "Can you build a system for contractors, not only consultants?",
          a: "Yes. Contractors usually need custom project, approval and reporting systems, which we build as custom software around their workflow.",
        },
        {
          q: "Can it work with our existing spreadsheets and tools?",
          a: "Yes. Custom systems and automation can work around existing spreadsheets, forms and tools where appropriate.",
        },
        {
          q: "Where do we start?",
          a: "Usually with the most repetitive step, often reporting or approvals, then we expand to what creates the next most value.",
        },
      ],
      cta: {
        title: "Show Us How Your Projects Are Reported Today.",
        text: "Tell us how reports, approvals and updates move between site and office. We’ll suggest the product or custom system that fits.",
        button: "Discuss a Construction Project",
      },
    },
    ar: {
      seo: {
        title: "برامج إدارة مشاريع البناء والمقاولات في عُمان | إدراك",
        description:
          "تقارير الإشراف على البناء، وبرمجيات مشاريع مخصّصة، ولوحات متابعة المواقع، وأتمتة سير العمل للمقاولين والاستشاريين في عُمان. تواصل مع إدراك اليوم.",
      },
      name: "البناء والمقاولات",
      summary:
        "تقارير الإشراف، وأنظمة مشاريع مخصّصة، ولوحات متابعة المواقع، وأتمتة سير العمل للمقاولين والاستشاريين.",
      hero: {
        eyebrow: "القطاعات · البناء والمقاولات",
        title: "برمجيات وتقارير البناء للمقاولين والاستشاريين في عُمان.",
        intro:
          "يعتمد البناء على تقارير وموافقات وتحديثات تتنقل بين الموقع والمكتب. تقدّم إدراك منتجاً جاهزاً لتقارير الإشراف، وتبني أنظمة مخصّصة حول طريقة إدارة مشاريعك فعلاً.",
        support: "للاستشاريين المشرفين والمقاولين وفرق إدارة المشاريع.",
      },
      problem: {
        eyebrow: "ما نسمعه من فرق البناء",
        title: "الموقع والمكتب يعملان بنسختين مختلفتين من الواقع.",
        points: [
          "تقارير الإشراف واليومية تستغرق ساعات لتجميعها من الصور والملاحظات والمحادثات.",
          "تتنقل الموافقات وأوامر التغيير والطلبات عبر البريد وواتساب دون حالة واضحة.",
          "لا ترى الإدارة التقدم والملاحظات المفتوحة لكل المشاريع في شاشة واحدة.",
          "بيانات المقاولين من الباطن والمواد والمواقع موزّعة على جداول Excel.",
          "يُعاد إدخال بيانات المشروع بين تقارير الموقع والمالية وتحديثات العميل.",
        ],
      },
      offer: {
        eyebrow: "ماذا نبني لقطاع البناء",
        title: "ما نبنيه، والخدمة التي تتولّاه.",
        items: [
          {
            title: "تقارير الإشراف على البناء",
            text: "منتجنا الجاهز لشركات الإشراف، مع تجهيز النظام والتدريب والدفع مقابل كل تقرير. (منتج)",
          },
          {
            title: "أنظمة إدارة المشاريع",
            text: "أنظمة مخصّصة للمشاريع والمواقع والمهام والملاحظات والمستندات، مبنية حول سير عملك. (تطوير البرمجيات المخصّصة)",
          },
          {
            title: "لوحات متابعة التقدم والمواقع",
            text: "شاشة واحدة للإدارة تعرض التقدم والملاحظات المفتوحة والتقارير لكل المشاريع. (تطوير البرمجيات المخصّصة)",
          },
          {
            title: "سير عمل الموافقات والطلبات",
            text: "طلبات المواد وأوامر التغيير والموافقات مع مسؤول وحالة واضحين. (أتمتة الأعمال بالذكاء الاصطناعي)",
          },
          {
            title: "أتمتة المستندات والبيانات",
            text: "نقل البيانات بين تقارير الموقع والجداول والمالية وتحديثات العميل دون إعادة إدخال. (أتمتة الأعمال بالذكاء الاصطناعي)",
          },
          {
            title: "بوابات العملاء",
            text: "بوابة للعملاء والملّاك تعرض التقارير والتقدم والمستندات. (تطوير البرمجيات المخصّصة)",
          },
          {
            title: "التحديثات والاستفسارات عبر واتساب",
            text: "التقاط الاستفسارات وإرسال تحديثات منظّمة عبر واتساب، مرتبطة بنظام CRM. (وكلاء الذكاء الاصطناعي وأتمتة واتساب)",
          },
          {
            title: "فيديو لعرض المشاريع",
            text: "اعرض المشاريع المنجزة أو المباني المستقبلية بفيديو الذكاء الاصطناعي للمناقصات والتسويق. (إنتاج الفيديو بالذكاء الاصطناعي)",
          },
          {
            title: "مواقع الشركات",
            text: "موقع واضح يعرض المشاريع والقدرات وطرق التواصل. (تصميم المواقع)",
          },
        ],
      },
      chips: {
        label: "من نعمل معهم",
        items: [
          "الاستشاريون المشرفون",
          "المقاولون الرئيسيون",
          "المقاولون من الباطن",
          "فرق إدارة المشاريع",
          "المطورون الذين يديرون مشاريعهم",
        ],
      },
      outcomes: {
        eyebrow: "ما الذي يتغيّر",
        title: "أوراق أقل ومشاريع أوضح.",
        items: [
          { title: "تقارير أسرع", text: "تُعدّ التقارير بهيكل موحّد وعمل متكرر أقل." },
          {
            title: "حالة موافقات واضحة",
            text: "يرى الجميع ما ينتظر، ومن المسؤول، وما الذي تقرّر.",
          },
          {
            title: "رؤية واحدة لكل المشاريع",
            text: "ترى الإدارة التقدم والملاحظات دون جمع التحديثات بالهاتف.",
          },
          {
            title: "بيانات تُدخل مرة واحدة",
            text: "تنتقل بيانات الموقع إلى المكتب والعميل دون إعادة كتابتها.",
          },
        ],
      },
      faq: [
        {
          q: "هل لديكم منتج جاهز لقطاع البناء؟",
          a: "نعم. «تقارير الإشراف على البناء» منتج جاهز لشركات الإشراف في عُمان، مع تجهيز النظام وتدريب الفريق والدفع مقابل كل تقرير.",
        },
        {
          q: "هل تبنون أنظمة للمقاولين، لا للاستشاريين فقط؟",
          a: "نعم. يحتاج المقاولون عادةً إلى أنظمة مخصّصة للمشاريع والموافقات والتقارير، نبنيها كبرمجيات مخصّصة حول سير عملهم.",
        },
        {
          q: "هل تعمل مع جداولنا وأدواتنا الحالية؟",
          a: "نعم. يمكن أن تعمل الأنظمة المخصّصة والأتمتة مع الجداول والنماذج والأدوات الحالية حيث يكون ذلك مناسباً.",
        },
        {
          q: "من أين نبدأ؟",
          a: "عادةً من الخطوة الأكثر تكراراً، وغالباً ما تكون التقارير أو الموافقات، ثم نتوسّع إلى ما يصنع القيمة التالية.",
        },
      ],
      cta: {
        title: "أرنا كيف تُعدّ تقارير مشاريعك اليوم.",
        text: "حدّثنا كيف تتنقل التقارير والموافقات والتحديثات بين الموقع والمكتب، وسنقترح المنتج أو النظام المخصّص الأنسب.",
        button: "ناقش مشروع بناء",
      },
    },
  },
  {
    kind: "industries",
    slug: "wholesale-distribution",
    image: "automation",
    interest: "automation",
    related: {
      services: [
        "custom-software-development",
        "ai-business-automation",
        "whatsapp-ai-automation",
        "web-design",
      ],
      industries: ["logistics-transport"],
      work: ["whatsapp-ai-sales-assistant-carpet-retailer"],
    },
    en: {
      seo: {
        title: "Wholesale & Distribution Software and CRM in Oman | IDRAK",
        description:
          "Custom software for wholesalers and distributors in Oman: inventory, orders, sales team CRM, WhatsApp ordering, dashboards and workflow automation.",
      },
      name: "Wholesale & Distribution",
      summary:
        "Inventory and order systems, sales team CRM, WhatsApp ordering, dashboards and workflow automation for distributors.",
      hero: {
        eyebrow: "Industries · Wholesale & distribution",
        title: "Wholesale and Distribution Software Built Around How You Sell in Oman.",
        intro:
          "Orders arrive by WhatsApp and phone, stock lives in spreadsheets and the sales team reports at the end of the week. IDRAK builds the inventory, order, CRM and reporting systems that connect it all.",
        support: "For wholesalers, distributors, importers and food distribution companies.",
      },
      problem: {
        eyebrow: "What we hear from distributors",
        title: "Orders, Stock and Sales Live in Different Places.",
        points: [
          "Customers order by WhatsApp, phone and email, and orders are retyped into the system.",
          "Stock levels across warehouses are not visible to the sales team in real time.",
          "Salespeople visit customers but their activity and follow-up are not recorded.",
          "Management waits for spreadsheets to see sales, collections and top customers.",
          "Price lists and product information are shared manually and go out of date.",
        ],
      },
      offer: {
        eyebrow: "What we build for distribution",
        title: "What We Build, and the Service Behind It.",
        items: [
          {
            title: "Inventory and warehouse system",
            text: "Stock, warehouses, transfers and reorder points in one system built around your products. (Custom Software Development)",
          },
          {
            title: "Order management",
            text: "Orders from every channel in one list, from entry to picking, delivery and invoice. (Custom Software Development)",
          },
          {
            title: "Sales team CRM",
            text: "Customer accounts, visits, follow-up and targets for field and office sales. (Custom Software Development)",
          },
          {
            title: "WhatsApp ordering and product questions",
            text: "An assistant answers product and price questions and captures orders on WhatsApp, with handover to sales. (AI Agents & WhatsApp Automation)",
          },
          {
            title: "Sales and operations dashboards",
            text: "Sales, stock, collections and customer activity in one view for management. (Custom Software Development)",
          },
          {
            title: "Workflow automation",
            text: "Automate approvals, credit checks, reorder alerts and reports between sales, warehouse and finance. (AI & Business Automation)",
          },
          {
            title: "System integrations",
            text: "Connect your accounting system, spreadsheets and new tools so data is entered once. (AI & Business Automation)",
          },
          {
            title: "B2B catalogue and ordering portal",
            text: "A portal or website where trade customers browse products and place orders. (Web Design · Custom Software Development)",
          },
        ],
      },
      chips: {
        label: "Who we work with",
        items: [
          "Wholesalers",
          "Distributors",
          "Importers and trading companies",
          "Food and FMCG distribution",
          "Field sales teams",
        ],
      },
      outcomes: {
        eyebrow: "What changes",
        title: "One Picture of Orders, Stock and Sales.",
        items: [
          {
            title: "Orders entered once",
            text: "Orders from WhatsApp, phone and portal flow into one system.",
          },
          {
            title: "Stock the team can trust",
            text: "Sales sees what is available before promising a delivery.",
          },
          {
            title: "Visible sales activity",
            text: "Visits, follow-up and customer history are recorded, not lost in phones.",
          },
          {
            title: "Faster decisions",
            text: "Management sees sales and stock without waiting for weekly spreadsheets.",
          },
        ],
      },
      faq: [
        {
          q: "Do we have to replace our accounting system?",
          a: "Not necessarily. We can build around it and connect it to the new inventory, order or CRM system where it allows integration.",
        },
        {
          q: "Can customers order on WhatsApp?",
          a: "Yes. A WhatsApp assistant can answer product questions, capture orders and pass them to your team and system.",
        },
        {
          q: "Is this a ready-made product?",
          a: "No. For distribution we build custom software around your products, channels and approval rules.",
        },
        {
          q: "Where do we start?",
          a: "Usually with the step that costs the most manual work today, such as order entry or stock visibility, then we expand.",
        },
      ],
      cta: {
        title: "Tell Us Where Orders and Stock Get Stuck.",
        text: "Share how orders, stock and sales are managed today. We’ll suggest the most practical first system to build.",
        button: "Discuss a Distribution Project",
      },
    },
    ar: {
      seo: {
        title: "برنامج إدارة التوزيع والجملة وCRM للمبيعات في عُمان | إدراك",
        description:
          "برمجيات مخصّصة لشركات الجملة والتوزيع في عُمان: إدارة المخزون والطلبات، CRM لفريق المبيعات، الطلب عبر واتساب، لوحات المتابعة وأتمتة سير العمل.",
      },
      name: "تجارة الجملة والتوزيع",
      summary:
        "أنظمة المخزون والطلبات، وCRM لفريق المبيعات، والطلب عبر واتساب، ولوحات المتابعة والأتمتة لشركات التوزيع.",
      hero: {
        eyebrow: "القطاعات · الجملة والتوزيع",
        title: "برمجيات الجملة والتوزيع مبنية حول طريقة بيعك في عُمان.",
        intro:
          "تصل الطلبات عبر واتساب والهاتف، ويبقى المخزون في جداول Excel، ويرفع فريق المبيعات تقاريره نهاية الأسبوع. تبني إدراك أنظمة المخزون والطلبات وCRM والتقارير التي تربط ذلك كله.",
        support: "لشركات الجملة والتوزيع والاستيراد وتوزيع المواد الغذائية.",
      },
      problem: {
        eyebrow: "ما نسمعه من شركات التوزيع",
        title: "الطلبات والمخزون والمبيعات في أماكن مختلفة.",
        points: [
          "يطلب العملاء عبر واتساب والهاتف والبريد، ثم يُعاد إدخال الطلب في النظام.",
          "لا يرى فريق المبيعات مستوى المخزون في المستودعات لحظة بلحظة.",
          "يزور المندوبون العملاء لكن لا يُسجَّل نشاطهم ومتابعتهم.",
          "تنتظر الإدارة جداول Excel لترى المبيعات والتحصيل وأهم العملاء.",
          "تُرسل قوائم الأسعار وبيانات المنتجات يدوياً وتصبح قديمة بسرعة.",
        ],
      },
      offer: {
        eyebrow: "ماذا نبني لقطاع التوزيع",
        title: "ما نبنيه، والخدمة التي تتولّاه.",
        items: [
          {
            title: "نظام المخزون والمستودعات",
            text: "المخزون والمستودعات والتحويلات وحدود إعادة الطلب في نظام واحد مبني حول منتجاتك. (تطوير البرمجيات المخصّصة)",
          },
          {
            title: "إدارة الطلبات",
            text: "طلبات كل القنوات في قائمة واحدة، من الإدخال إلى التجهيز والتوصيل والفاتورة. (تطوير البرمجيات المخصّصة)",
          },
          {
            title: "CRM لفريق المبيعات",
            text: "حسابات العملاء والزيارات والمتابعة والأهداف لمندوبي الميدان والمكتب. (تطوير البرمجيات المخصّصة)",
          },
          {
            title: "الطلب والاستفسار عبر واتساب",
            text: "مساعد يجيب عن أسئلة المنتجات والأسعار ويسجّل الطلبات عبر واتساب، مع التحويل إلى المبيعات. (وكلاء الذكاء الاصطناعي وأتمتة واتساب)",
          },
          {
            title: "لوحات متابعة المبيعات والعمليات",
            text: "المبيعات والمخزون والتحصيل ونشاط العملاء في شاشة واحدة للإدارة. (تطوير البرمجيات المخصّصة)",
          },
          {
            title: "أتمتة سير العمل",
            text: "أتمتة الموافقات والتحقق من الائتمان وتنبيهات إعادة الطلب والتقارير بين المبيعات والمستودع والمالية. (أتمتة الأعمال بالذكاء الاصطناعي)",
          },
          {
            title: "تكامل الأنظمة",
            text: "ربط نظامك المحاسبي والجداول والأدوات الجديدة لتُدخل البيانات مرة واحدة. (أتمتة الأعمال بالذكاء الاصطناعي)",
          },
          {
            title: "كتالوج وبوابة طلبات للتجار",
            text: "بوابة أو موقع يتصفح فيه عملاء الجملة المنتجات ويرسلون طلباتهم. (تصميم المواقع · تطوير البرمجيات المخصّصة)",
          },
        ],
      },
      chips: {
        label: "من نعمل معهم",
        items: [
          "شركات الجملة",
          "شركات التوزيع",
          "شركات الاستيراد والتجارة",
          "توزيع المواد الغذائية والسلع الاستهلاكية",
          "فرق المبيعات الميدانية",
        ],
      },
      outcomes: {
        eyebrow: "ما الذي يتغيّر",
        title: "صورة واحدة للطلبات والمخزون والمبيعات.",
        items: [
          {
            title: "طلبات تُدخل مرة واحدة",
            text: "تتدفق الطلبات من واتساب والهاتف والبوابة إلى نظام واحد.",
          },
          {
            title: "مخزون يثق به الفريق",
            text: "يعرف فريق المبيعات المتاح قبل أن يَعِد بموعد توصيل.",
          },
          {
            title: "نشاط مبيعات واضح",
            text: "تُسجَّل الزيارات والمتابعة وسجل العميل بدلاً من ضياعها في الهواتف.",
          },
          {
            title: "قرارات أسرع",
            text: "ترى الإدارة المبيعات والمخزون دون انتظار جداول الأسبوع.",
          },
        ],
      },
      faq: [
        {
          q: "هل يجب أن نستبدل نظامنا المحاسبي؟",
          a: "ليس بالضرورة. يمكننا البناء حوله وربطه بنظام المخزون أو الطلبات أو CRM الجديد حيث يسمح بالتكامل.",
        },
        {
          q: "هل يستطيع العملاء الطلب عبر واتساب؟",
          a: "نعم. يمكن لمساعد واتساب أن يجيب عن أسئلة المنتجات ويسجّل الطلبات ويمرّرها إلى فريقك ونظامك.",
        },
        {
          q: "هل هذا منتج جاهز؟",
          a: "لا. لقطاع التوزيع نبني برمجيات مخصّصة حول منتجاتك وقنواتك وقواعد الموافقة لديك.",
        },
        {
          q: "من أين نبدأ؟",
          a: "عادةً من الخطوة التي تستهلك أكبر قدر من العمل اليدوي اليوم، مثل إدخال الطلبات أو رؤية المخزون، ثم نتوسّع.",
        },
      ],
      cta: {
        title: "أخبرنا أين تتعطل الطلبات والمخزون.",
        text: "حدّثنا كيف تُدار الطلبات والمخزون والمبيعات اليوم، وسنقترح أول نظام عملي يستحق البناء.",
        button: "ناقش مشروع توزيع",
      },
    },
  },
  {
    kind: "industries",
    slug: "facility-property-management",
    image: "approach",
    interest: "automation",
    related: {
      services: [
        "custom-software-development",
        "ai-business-automation",
        "whatsapp-ai-automation",
        "web-design",
        "seo-geo",
      ],
      industries: ["real-estate", "construction"],
      work: [],
      products: ["construction-supervision-reporting"],
    },
    en: {
      seo: {
        title: "Facility & Property Management Software in Oman | IDRAK",
        description:
          "Custom facility and property management software in Oman: work orders, maintenance, HVAC service, tenant requests on WhatsApp, contracts and dashboards.",
      },
      name: "Facility & Property Management",
      summary:
        "Work orders, maintenance and HVAC service systems, tenant requests on WhatsApp, contracts and dashboards.",
      hero: {
        eyebrow: "Industries · Facility & property management",
        title: "Facility and Property Management Software for Service Teams in Oman.",
        intro:
          "Requests come in by phone and WhatsApp, technicians report by voice note, and contracts renew in spreadsheets. IDRAK builds the systems that turn every request into a tracked job, from report to completion.",
        support: "For facility management, HVAC and maintenance companies and property managers.",
      },
      problem: {
        eyebrow: "What we hear from facility teams",
        title: "Requests Get Lost Between the Call and the Technician.",
        points: [
          "Tenants and clients report issues by phone and WhatsApp, and requests are not logged consistently.",
          "Supervisors assign jobs by message, so no one sees what is open, late or done.",
          "Preventive maintenance and service visits are tracked on paper or in spreadsheets.",
          "Contract renewals, rent schedules and service levels are easy to miss.",
          "Clients ask for proof of work, and photos and reports are scattered across phones.",
        ],
      },
      offer: {
        eyebrow: "What we build for facility & property management",
        title: "What We Build, and the Service Behind It.",
        items: [
          {
            title: "Work order and maintenance system",
            text: "Requests, assignments, status, photos and completion reports in one system. (Custom Software Development)",
          },
          {
            title: "Preventive maintenance and HVAC service",
            text: "Schedules for planned visits, assets and service history, with reminders before they are due. (Custom Software Development)",
          },
          {
            title: "Tenant and client requests on WhatsApp",
            text: "An assistant logs requests, asks for details and photos and confirms the visit on WhatsApp. (AI Agents & WhatsApp Automation)",
          },
          {
            title: "Technician app and job reports",
            text: "Technicians see their jobs and submit completion reports with photos from site. (Custom Software Development)",
          },
          {
            title: "Property management system",
            text: "Units, tenants, leases, rent schedules and renewals for portfolios you manage. (Custom Software Development)",
          },
          {
            title: "Contract and service-level dashboards",
            text: "See open jobs, response times and contract renewals across every client and building. (Custom Software Development)",
          },
          {
            title: "Workflow and report automation",
            text: "Automate approvals, client reports, renewal reminders and data transfer to finance. (AI & Business Automation)",
          },
          {
            title: "Company website and request page",
            text: "A clear website with service pages and a direct request path. (Web Design)",
          },
        ],
      },
      chips: {
        label: "Who we work with",
        items: [
          "Facility management companies",
          "HVAC and maintenance contractors",
          "Property management companies",
          "Building and community managers",
          "Property owners with several buildings",
        ],
      },
      outcomes: {
        eyebrow: "What changes",
        title: "Every Request Becomes a Tracked Job.",
        items: [
          {
            title: "Nothing falls through",
            text: "Every request is logged, assigned and followed to completion.",
          },
          {
            title: "Planned work on time",
            text: "Preventive visits and renewals come up before they are missed.",
          },
          {
            title: "Proof of work for clients",
            text: "Completion reports with photos are ready to share.",
          },
          {
            title: "Clear view for management",
            text: "Open jobs, workload and contracts are visible in one place.",
          },
        ],
      },
      faq: [
        {
          q: "Is this a ready-made CAFM product?",
          a: "No. We build the system around your services, contracts and team as custom software, so it fits how you actually operate.",
        },
        {
          q: "Can tenants report issues on WhatsApp?",
          a: "Yes. A WhatsApp assistant can log the request, collect details and photos, and pass it to the right team.",
        },
        {
          q: "Can technicians use it on their phones?",
          a: "Yes. Technician views can be built for mobile use on site.",
        },
        {
          q: "Where do we start?",
          a: "Usually with request intake and work orders, then preventive maintenance, contracts and dashboards.",
        },
      ],
      cta: {
        title: "Tell Us How Requests Reach Your Team Today.",
        text: "Share how jobs are reported, assigned and closed. We’ll suggest the most practical first system to build.",
        button: "Discuss a Facility Project",
      },
    },
    ar: {
      seo: {
        title: "برنامج إدارة المرافق والأملاك والصيانة في عُمان | إدراك",
        description:
          "برمجيات مخصّصة لإدارة المرافق والأملاك في عُمان: أوامر العمل، الصيانة الدورية، خدمات التكييف، طلبات المستأجرين عبر واتساب، العقود ولوحات المتابعة.",
      },
      name: "إدارة المرافق والأملاك",
      summary:
        "أوامر العمل والصيانة وخدمات التكييف، وطلبات المستأجرين عبر واتساب، والعقود ولوحات المتابعة.",
      hero: {
        eyebrow: "القطاعات · إدارة المرافق والأملاك",
        title: "برمجيات إدارة المرافق والأملاك لفرق الخدمة في عُمان.",
        intro:
          "تصل الطلبات بالهاتف وواتساب، ويرسل الفنيون تقاريرهم برسائل صوتية، وتُجدَّد العقود في جداول Excel. تبني إدراك الأنظمة التي تحوّل كل طلب إلى مهمة متابَعة، من البلاغ حتى الإنجاز.",
        support: "لشركات إدارة المرافق والتكييف والصيانة ومديري العقارات.",
      },
      problem: {
        eyebrow: "ما نسمعه من فرق المرافق",
        title: "الطلبات تضيع بين المكالمة والفني.",
        points: [
          "يبلّغ المستأجرون والعملاء عن الأعطال بالهاتف وواتساب، ولا تُسجَّل الطلبات بشكل منتظم.",
          "يوزّع المشرفون المهام برسائل، فلا يعرف أحد ما المفتوح والمتأخر والمنجز.",
          "تُتابَع الصيانة الوقائية وزيارات الخدمة على الورق أو في جداول.",
          "يسهل تفويت تجديد العقود وجداول الإيجار ومستويات الخدمة.",
          "يطلب العملاء إثبات العمل، والصور والتقارير موزّعة على الهواتف.",
        ],
      },
      offer: {
        eyebrow: "ماذا نبني لإدارة المرافق والأملاك",
        title: "ما نبنيه، والخدمة التي تتولّاه.",
        items: [
          {
            title: "نظام أوامر العمل والصيانة",
            text: "الطلبات والإسناد والحالة والصور وتقارير الإنجاز في نظام واحد. (تطوير البرمجيات المخصّصة)",
          },
          {
            title: "الصيانة الوقائية وخدمات التكييف",
            text: "جداول للزيارات المخطّطة والأصول وسجل الخدمة، مع تذكير قبل موعدها. (تطوير البرمجيات المخصّصة)",
          },
          {
            title: "طلبات المستأجرين والعملاء عبر واتساب",
            text: "مساعد يسجّل الطلب ويطلب التفاصيل والصور ويؤكد موعد الزيارة عبر واتساب. (وكلاء الذكاء الاصطناعي وأتمتة واتساب)",
          },
          {
            title: "تطبيق الفنيين وتقارير المهام",
            text: "يرى الفنيون مهامهم ويرسلون تقارير الإنجاز مع الصور من الموقع. (تطوير البرمجيات المخصّصة)",
          },
          {
            title: "نظام إدارة الأملاك",
            text: "الوحدات والمستأجرون والعقود وجداول الإيجار والتجديد للمحافظ التي تديرها. (تطوير البرمجيات المخصّصة)",
          },
          {
            title: "لوحات العقود ومستويات الخدمة",
            text: "اعرض المهام المفتوحة وأوقات الاستجابة وتجديد العقود لكل عميل ومبنى. (تطوير البرمجيات المخصّصة)",
          },
          {
            title: "أتمتة سير العمل والتقارير",
            text: "أتمتة الموافقات وتقارير العملاء وتذكيرات التجديد ونقل البيانات إلى المالية. (أتمتة الأعمال بالذكاء الاصطناعي)",
          },
          {
            title: "موقع الشركة وصفحة الطلبات",
            text: "موقع واضح بصفحات الخدمات ومسار مباشر لتقديم الطلب. (تصميم المواقع)",
          },
        ],
      },
      chips: {
        label: "من نعمل معهم",
        items: [
          "شركات إدارة المرافق",
          "مقاولو التكييف والصيانة",
          "شركات إدارة الأملاك",
          "مديرو المباني والمجمّعات",
          "ملّاك العقارات متعددة المباني",
        ],
      },
      outcomes: {
        eyebrow: "ما الذي يتغيّر",
        title: "كل طلب يصبح مهمة متابَعة.",
        items: [
          { title: "لا شيء يضيع", text: "يُسجَّل كل طلب ويُسند ويُتابع حتى الإنجاز." },
          {
            title: "العمل المخطّط في موعده",
            text: "تظهر الزيارات الوقائية والتجديدات قبل أن تفوت.",
          },
          {
            title: "إثبات العمل للعملاء",
            text: "تقارير الإنجاز مع الصور جاهزة للمشاركة.",
          },
          {
            title: "رؤية واضحة للإدارة",
            text: "المهام المفتوحة وضغط العمل والعقود ظاهرة في مكان واحد.",
          },
        ],
      },
      faq: [
        {
          q: "هل هذا منتج CAFM جاهز؟",
          a: "لا. نبني النظام حول خدماتك وعقودك وفريقك كبرمجيات مخصّصة، ليناسب طريقة عملك فعلاً.",
        },
        {
          q: "هل يستطيع المستأجرون الإبلاغ عن الأعطال عبر واتساب؟",
          a: "نعم. يمكن لمساعد واتساب تسجيل الطلب وجمع التفاصيل والصور وتمريره إلى الفريق المناسب.",
        },
        {
          q: "هل يستطيع الفنيون استخدامه من هواتفهم؟",
          a: "نعم. يمكن بناء شاشات الفنيين للاستخدام عبر الهاتف في الموقع.",
        },
        {
          q: "من أين نبدأ؟",
          a: "عادةً من استقبال الطلبات وأوامر العمل، ثم الصيانة الوقائية والعقود ولوحات المتابعة.",
        },
      ],
      cta: {
        title: "حدّثنا كيف تصل الطلبات إلى فريقك اليوم.",
        text: "شاركنا كيف تُبلَّغ المهام وتُسند وتُغلق، وسنقترح أول نظام عملي يستحق البناء.",
        button: "ناقش مشروع إدارة مرافق",
      },
    },
  },
  {
    kind: "industries",
    slug: "logistics-transport",
    image: "agent",
    interest: "automation",
    related: {
      services: [
        "custom-software-development",
        "ai-business-automation",
        "whatsapp-ai-automation",
        "web-design",
      ],
      industries: ["wholesale-distribution"],
      work: [],
    },
    en: {
      seo: {
        title: "Logistics & Fleet Operations Software in Oman | IDRAK",
        description:
          "Custom logistics software in Oman: operations and fleet systems, shipment tracking, driver apps, customer updates on WhatsApp, dashboards and reporting.",
      },
      name: "Logistics & Transport",
      summary:
        "Operations and fleet systems, shipment tracking, customer updates on WhatsApp, dashboards and reporting automation.",
      hero: {
        eyebrow: "Industries · Logistics & transport",
        title: "Logistics and Fleet Operations Software for Transport Companies in Oman.",
        intro:
          "Jobs are booked by phone, drivers update by WhatsApp and customers call to ask where their shipment is. IDRAK builds the operations, tracking and reporting systems that keep dispatch, drivers and customers on the same page.",
        support: "For transport, freight, last-mile delivery and fleet operators.",
      },
      problem: {
        eyebrow: "What we hear from logistics teams",
        title: "Dispatch Runs on Calls and Chat Groups.",
        points: [
          "Bookings arrive by phone, email and WhatsApp, and are copied into spreadsheets.",
          "Dispatchers assign trips by message, with no single view of who is where.",
          "Customers call repeatedly to ask for shipment status.",
          "Proof of delivery, trip sheets and expenses are collected on paper.",
          "Vehicle maintenance, documents and renewals are tracked by memory.",
        ],
      },
      offer: {
        eyebrow: "What we build for logistics",
        title: "What We Build, and the Service Behind It.",
        items: [
          {
            title: "Operations and dispatch system",
            text: "Bookings, trips, assignments and status in one system built around your routes and services. (Custom Software Development)",
          },
          {
            title: "Fleet management system",
            text: "Vehicles, drivers, maintenance schedules, documents and renewals in one place. (Custom Software Development)",
          },
          {
            title: "Driver app and proof of delivery",
            text: "Drivers see their trips and submit status, photos and proof of delivery from the road. (Custom Software Development)",
          },
          {
            title: "Shipment updates on WhatsApp",
            text: "Customers ask for status and receive updates on WhatsApp, with handover to your team. (AI Agents & WhatsApp Automation)",
          },
          {
            title: "Operations dashboards",
            text: "Trips, delays, utilisation and customer activity in one view for management. (Custom Software Development)",
          },
          {
            title: "Reporting and back-office automation",
            text: "Automate trip reports, invoicing data, expense approvals and transfers to finance. (AI & Business Automation)",
          },
          {
            title: "Customer portal",
            text: "Let business customers book jobs, track shipments and download documents. (Custom Software Development)",
          },
          {
            title: "Company website and quote requests",
            text: "A clear website with services and a direct quote request path. (Web Design)",
          },
        ],
      },
      chips: {
        label: "Who we work with",
        items: [
          "Transport and freight companies",
          "Last-mile delivery operators",
          "Fleet operators",
          "Freight forwarders",
          "Companies running their own delivery fleet",
        ],
      },
      outcomes: {
        eyebrow: "What changes",
        title: "Dispatch, Drivers and Customers on the Same Page.",
        items: [
          {
            title: "One view of every trip",
            text: "Dispatch sees bookings, assignments and status in one place.",
          },
          {
            title: "Fewer status calls",
            text: "Customers get updates on WhatsApp instead of calling the office.",
          },
          {
            title: "Paperwork goes digital",
            text: "Proof of delivery, trip sheets and expenses are captured on the road.",
          },
          {
            title: "Fleet kept on schedule",
            text: "Maintenance and document renewals come up before they are missed.",
          },
        ],
      },
      faq: [
        {
          q: "Is this a ready-made fleet tracking product?",
          a: "No. We build operations and fleet systems around your services and workflow. Where you already use a tracking device or platform, it can be connected where it allows integration.",
        },
        {
          q: "Can customers get shipment updates on WhatsApp?",
          a: "Yes. A WhatsApp assistant can answer status questions and send updates, with handover to your team when needed.",
        },
        {
          q: "Can drivers use it on their phones?",
          a: "Yes. Driver views can be built for mobile use on the road.",
        },
        {
          q: "Where do we start?",
          a: "Usually with bookings and dispatch, then driver updates, customer notifications and reporting.",
        },
      ],
      cta: {
        title: "Tell Us How Jobs Move Through Your Operation.",
        text: "Share how bookings, dispatch and delivery work today. We’ll suggest the most practical first system to build.",
        button: "Discuss a Logistics Project",
      },
    },
    ar: {
      seo: {
        title: "برنامج إدارة الأسطول والعمليات اللوجستية في عُمان | إدراك",
        description:
          "برمجيات لوجستية مخصّصة في عُمان: أنظمة العمليات والأسطول، تتبّع الشحنات، تطبيق للسائقين، تحديثات العملاء عبر واتساب، لوحات المتابعة والتقارير.",
      },
      name: "الخدمات اللوجستية والنقل",
      summary:
        "أنظمة العمليات والأسطول، وتتبّع الشحنات، وتحديثات العملاء عبر واتساب، ولوحات المتابعة وأتمتة التقارير.",
      hero: {
        eyebrow: "القطاعات · الخدمات اللوجستية والنقل",
        title: "برمجيات العمليات اللوجستية وإدارة الأسطول لشركات النقل في عُمان.",
        intro:
          "تُحجز الرحلات بالهاتف، ويحدّث السائقون عبر واتساب، ويتصل العملاء ليسألوا أين شحنتهم. تبني إدراك أنظمة العمليات والتتبّع والتقارير التي تجمع فريق التشغيل والسائقين والعملاء على صورة واحدة.",
        support: "لشركات النقل والشحن والتوصيل للميل الأخير ومشغّلي الأساطيل.",
      },
      problem: {
        eyebrow: "ما نسمعه من فرق اللوجستيات",
        title: "التشغيل يعتمد على المكالمات ومجموعات المحادثة.",
        points: [
          "تصل الحجوزات بالهاتف والبريد وواتساب، ثم تُنسخ إلى جداول Excel.",
          "يوزّع فريق التشغيل الرحلات برسائل، دون رؤية واحدة لمكان كل سائق.",
          "يتصل العملاء مراراً للسؤال عن حالة الشحنة.",
          "تُجمع إثباتات التسليم وكشوف الرحلات والمصاريف على الورق.",
          "تُتابَع صيانة المركبات ووثائقها وتجديداتها بالذاكرة.",
        ],
      },
      offer: {
        eyebrow: "ماذا نبني لقطاع اللوجستيات",
        title: "ما نبنيه، والخدمة التي تتولّاه.",
        items: [
          {
            title: "نظام العمليات والتشغيل",
            text: "الحجوزات والرحلات والإسناد والحالة في نظام واحد مبني حول مساراتك وخدماتك. (تطوير البرمجيات المخصّصة)",
          },
          {
            title: "نظام إدارة الأسطول",
            text: "المركبات والسائقون وجداول الصيانة والوثائق والتجديدات في مكان واحد. (تطوير البرمجيات المخصّصة)",
          },
          {
            title: "تطبيق السائقين وإثبات التسليم",
            text: "يرى السائقون رحلاتهم ويرسلون الحالة والصور وإثبات التسليم من الطريق. (تطوير البرمجيات المخصّصة)",
          },
          {
            title: "تحديثات الشحنات عبر واتساب",
            text: "يسأل العملاء عن الحالة ويستلمون التحديثات عبر واتساب، مع التحويل إلى فريقك. (وكلاء الذكاء الاصطناعي وأتمتة واتساب)",
          },
          {
            title: "لوحات متابعة العمليات",
            text: "الرحلات والتأخيرات ومعدل استخدام الأسطول ونشاط العملاء في شاشة واحدة للإدارة. (تطوير البرمجيات المخصّصة)",
          },
          {
            title: "أتمتة التقارير والأعمال الإدارية",
            text: "أتمتة تقارير الرحلات وبيانات الفوترة وموافقات المصاريف ونقلها إلى المالية. (أتمتة الأعمال بالذكاء الاصطناعي)",
          },
          {
            title: "بوابة العملاء",
            text: "تتيح لعملاء الشركات حجز الرحلات وتتبّع الشحنات وتنزيل المستندات. (تطوير البرمجيات المخصّصة)",
          },
          {
            title: "موقع الشركة وطلبات عروض الأسعار",
            text: "موقع واضح بالخدمات ومسار مباشر لطلب عرض سعر. (تصميم المواقع)",
          },
        ],
      },
      chips: {
        label: "من نعمل معهم",
        items: [
          "شركات النقل والشحن",
          "مشغّلو التوصيل للميل الأخير",
          "مشغّلو الأساطيل",
          "وكلاء الشحن",
          "الشركات التي تدير أسطول توصيل خاصاً",
        ],
      },
      outcomes: {
        eyebrow: "ما الذي يتغيّر",
        title: "التشغيل والسائقون والعملاء على صورة واحدة.",
        items: [
          {
            title: "رؤية واحدة لكل رحلة",
            text: "يرى فريق التشغيل الحجوزات والإسناد والحالة في مكان واحد.",
          },
          {
            title: "مكالمات استفسار أقل",
            text: "يستلم العملاء التحديثات عبر واتساب بدلاً من الاتصال بالمكتب.",
          },
          {
            title: "أوراق أقل، وسجلات رقمية",
            text: "تُسجَّل إثباتات التسليم وكشوف الرحلات والمصاريف من الطريق.",
          },
          {
            title: "صيانة الأسطول في موعدها",
            text: "تظهر الصيانة وتجديد الوثائق قبل أن تفوت.",
          },
        ],
      },
      faq: [
        {
          q: "هل هذا منتج جاهز لتتبّع الأسطول؟",
          a: "لا. نبني أنظمة العمليات والأسطول حول خدماتك وسير عملك. وإذا كنت تستخدم جهاز تتبّع أو منصة تتبّع، يمكن ربطها حيث تسمح بالتكامل.",
        },
        {
          q: "هل يستلم العملاء تحديثات الشحنات عبر واتساب؟",
          a: "نعم. يمكن لمساعد واتساب الإجابة عن أسئلة الحالة وإرسال التحديثات، مع التحويل إلى فريقك عند الحاجة.",
        },
        {
          q: "هل يستطيع السائقون استخدامه من هواتفهم؟",
          a: "نعم. يمكن بناء شاشات السائقين للاستخدام عبر الهاتف على الطريق.",
        },
        {
          q: "من أين نبدأ؟",
          a: "عادةً من الحجوزات والتشغيل، ثم تحديثات السائقين وإشعارات العملاء والتقارير.",
        },
      ],
      cta: {
        title: "حدّثنا كيف تتحرك المهام في عملياتك.",
        text: "شاركنا كيف تعمل الحجوزات والتشغيل والتسليم اليوم، وسنقترح أول نظام عملي يستحق البناء.",
        button: "ناقش مشروعاً لوجستياً",
      },
    },
  },
];
