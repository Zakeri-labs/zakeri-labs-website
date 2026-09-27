import { SITE } from "@/lib/site";

type Block = { h: string; p: string[] };

const en = {
  eyebrow: "Legal",
  title: "Privacy Policy",
  updated: "Last updated: 27 September 2026",
  intro: `This policy explains how ${SITE.legalName} ("IDRAK", "we", "us"), Commercial Registration ${SITE.crNumber}, ${SITE.legalCity}, collects, uses and protects personal information when you use this website, message us on WhatsApp, or use services we provide.`,
  sections: [
    {
      h: "Information we collect",
      p: [
        "Information you give us: your name, phone or WhatsApp number, email address, company name, business size, the challenges you describe and any other details you share through our contact form, AI assistant, WhatsApp, email or phone.",
        "Messages: when you chat with us on WhatsApp or with the AI assistant on this website, we receive the content of those messages.",
        "Usage data: if analytics is enabled, standard technical data such as pages visited, device and browser type, approximate location and referral source, collected through Google Analytics cookies.",
      ],
    },
    {
      h: "How we use it",
      p: [
        "To reply to your enquiry, prepare proposals and deliver the services you request.",
        "To communicate with you about your project, including through WhatsApp.",
        "To improve our website and services and understand which pages are useful.",
        "To meet legal, accounting and security obligations.",
        "We do not sell your personal information and we do not use it for unrelated advertising.",
      ],
    },
    {
      h: "WhatsApp",
      p: [
        "If you contact us on WhatsApp, your messages are processed by WhatsApp (Meta Platforms) under its own terms and privacy policy. We use your number and messages only to respond to you and provide our services. You can ask us to stop messaging you at any time by replying STOP or telling us directly.",
      ],
    },
    {
      h: "Service providers",
      p: [
        "We share data only with providers that help us run this website and our services, and only as needed: website hosting (Vercel), email delivery for contact-form submissions (Resend), AI model providers that generate the assistant's replies (through Vercel AI Gateway), analytics (Google Analytics) and WhatsApp (Meta). These providers may process data outside Oman under their own safeguards.",
      ],
    },
    {
      h: "How long we keep it",
      p: [
        "We keep enquiry and project information for as long as needed to serve you and to meet legal obligations, and then delete or anonymise it. The website's AI assistant does not store your conversation on our servers after it replies.",
      ],
    },
    {
      h: "Security",
      p: [
        "We use reasonable technical and organisational measures, including encrypted connections (HTTPS), to protect your information. No method of transmission over the internet is completely secure.",
      ],
    },
    {
      h: "Your rights",
      p: [
        `You can ask to access, correct or delete the personal information we hold about you, or withdraw consent to being contacted, by emailing ${SITE.email}. We will respond within a reasonable time and in line with the Personal Data Protection Law of the Sultanate of Oman.`,
      ],
    },
    {
      h: "Cookies",
      p: [
        "This website uses only the cookies needed for it to work and, where enabled, Google Analytics cookies. You can block or delete cookies in your browser settings.",
      ],
    },
    {
      h: "Children",
      p: ["Our services are intended for businesses and are not directed at children under 18."],
    },
    {
      h: "Changes",
      p: [
        "We may update this policy from time to time. The date at the top shows when it last changed.",
      ],
    },
    {
      h: "Contact",
      p: [
        `${SITE.legalName}, ${SITE.legalCity}. Email: ${SITE.email}. Phone / WhatsApp: ${SITE.phone}.`,
      ],
    },
  ] as Block[],
};

const ar: typeof en = {
  eyebrow: "قانوني",
  title: "سياسة الخصوصية",
  updated: "آخر تحديث: 27 سبتمبر 2026",
  intro: `توضّح هذه السياسة كيف تجمع ${SITE.legalName} ("إدراك" أو "نحن")، سجل تجاري رقم ${SITE.crNumber}، مسقط، سلطنة عُمان، المعلومات الشخصية وتستخدمها وتحميها عند استخدامك هذا الموقع أو مراسلتنا عبر واتساب أو استخدام خدماتنا.`,
  sections: [
    {
      h: "المعلومات التي نجمعها",
      p: [
        "المعلومات التي تقدّمها لنا: الاسم ورقم الهاتف أو واتساب والبريد الإلكتروني واسم الشركة وحجمها والتحديات التي تصفها وأي تفاصيل أخرى تشاركها عبر نموذج التواصل أو المساعد الذكي أو واتساب أو البريد أو الهاتف.",
        "الرسائل: عند محادثتنا عبر واتساب أو مع المساعد الذكي في هذا الموقع، نستلم محتوى تلك الرسائل.",
        "بيانات الاستخدام: عند تفعيل التحليلات، بيانات تقنية معتادة مثل الصفحات التي زرتها ونوع الجهاز والمتصفح والموقع التقريبي ومصدر الزيارة، تُجمع عبر ملفات تعريف الارتباط الخاصة بـ Google Analytics.",
      ],
    },
    {
      h: "كيف نستخدمها",
      p: [
        "للرد على استفسارك وإعداد العروض وتقديم الخدمات التي تطلبها.",
        "للتواصل معك بشأن مشروعك، بما في ذلك عبر واتساب.",
        "لتحسين موقعنا وخدماتنا.",
        "للوفاء بالالتزامات القانونية والمحاسبية والأمنية.",
        "لا نبيع معلوماتك الشخصية ولا نستخدمها لإعلانات لا علاقة لها بخدماتنا.",
      ],
    },
    {
      h: "واتساب",
      p: [
        "عند تواصلك معنا عبر واتساب، تتم معالجة رسائلك من قِبل واتساب (Meta Platforms) وفق شروطها وسياسة خصوصيتها. نستخدم رقمك ورسائلك فقط للرد عليك وتقديم خدماتنا، ويمكنك طلب إيقاف الرسائل في أي وقت بالرد بكلمة STOP أو إبلاغنا مباشرة.",
      ],
    },
    {
      h: "مزوّدو الخدمات",
      p: [
        "نشارك البيانات فقط مع مزوّدين يساعدوننا في تشغيل الموقع وخدماتنا وبالقدر اللازم: استضافة الموقع (Vercel)، وإرسال رسائل نموذج التواصل (Resend)، ومزوّدو نماذج الذكاء الاصطناعي لردود المساعد (عبر Vercel AI Gateway)، والتحليلات (Google Analytics)، وواتساب (Meta). قد تتم معالجة البيانات خارج عُمان وفق ضمانات هؤلاء المزوّدين.",
      ],
    },
    {
      h: "مدة الاحتفاظ",
      p: [
        "نحتفظ بمعلومات الاستفسارات والمشاريع طالما احتجنا إليها لخدمتك وللوفاء بالالتزامات القانونية، ثم نحذفها أو نجعلها مجهولة الهوية. لا يحفظ المساعد الذكي في الموقع محادثتك على خوادمنا بعد الرد.",
      ],
    },
    {
      h: "الأمان",
      p: [
        "نستخدم تدابير تقنية وتنظيمية معقولة، منها الاتصالات المشفّرة (HTTPS)، لحماية معلوماتك. لا توجد وسيلة نقل عبر الإنترنت آمنة تماماً.",
      ],
    },
    {
      h: "حقوقك",
      p: [
        `يمكنك طلب الاطلاع على معلوماتك الشخصية لدينا أو تصحيحها أو حذفها، أو سحب موافقتك على التواصل، بمراسلة ${SITE.email}. سنرد خلال مدة معقولة ووفق قانون حماية البيانات الشخصية في سلطنة عُمان.`,
      ],
    },
    {
      h: "ملفات تعريف الارتباط",
      p: [
        "يستخدم هذا الموقع فقط الملفات اللازمة لعمله، وعند التفعيل ملفات Google Analytics. يمكنك حظرها أو حذفها من إعدادات المتصفح.",
      ],
    },
    {
      h: "الأطفال",
      p: ["خدماتنا موجّهة للشركات وليست موجّهة لمن هم دون 18 عاماً."],
    },
    {
      h: "التغييرات",
      p: ["قد نحدّث هذه السياسة من وقت لآخر، ويوضّح التاريخ أعلاه آخر تعديل."],
    },
    {
      h: "التواصل",
      p: [
        `${SITE.legalName}، مسقط، سلطنة عُمان. البريد: ${SITE.email}. الهاتف / واتساب: ${SITE.phone}.`,
      ],
    },
  ],
};

export const PRIVACY = { en, ar };
