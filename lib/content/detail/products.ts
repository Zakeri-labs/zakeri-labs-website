import type { DetailEntry } from "./types";

/**
 * /products/<slug> — IDRAK's ready-made (SaaS) products. Facts come from lib/content/products.ts;
 * no prices, timelines or numbers beyond what IDRAK has confirmed.
 */
export const PRODUCT_PAGES: DetailEntry[] = [
  {
    kind: "products",
    slug: "construction-supervision-reporting",
    image: "construction",
    interest: "construction-reporting",
    related: {
      industries: ["construction", "facility-property-management"],
      services: ["custom-software-development", "ai-business-automation"],
    },
    en: {
      seo: {
        title: "Construction Supervision Reporting Software Oman | IDRAK",
        description:
          "Ready-made construction supervision reporting software for consultancy firms in Oman. Deployment, team training and pay per report produced. Talk to IDRAK.",
      },
      name: "Construction Supervision Reporting",
      summary:
        "A ready-to-deploy product that makes supervision reports simpler and more organised, priced per report produced.",
      hero: {
        eyebrow: "Product · Construction supervision",
        title: "Construction Supervision Reporting Software, Ready to Deploy in Oman.",
        intro:
          "Supervision reports are a repetitive and essential part of every consultancy’s week. IDRAK’s ready-made product makes producing them simpler and more organised, so engineers spend less time on paperwork and more time on site.",
        support:
          "We deploy the system, train your team, and you pay for the reports you actually produce.",
      },
      problem: {
        eyebrow: "The problem",
        title: "Reporting Takes Time Your Engineers Should Spend on Site.",
        points: [
          "Site engineers rewrite the same report structure for every visit, project and client.",
          "Photos, notes and observations sit on phones and in chat groups before anyone turns them into a report.",
          "Every engineer formats reports differently, so the firm’s output looks inconsistent to clients.",
          "Finding an older report, or the status of a past observation, means searching folders and emails.",
          "Traditional software licences charge the same whether you produce five reports or five hundred.",
        ],
      },
      offer: {
        eyebrow: "What’s inside",
        title: "One Organised Place to Produce Supervision Reports.",
        intro:
          "The product is built around the daily reporting work of construction supervision firms in Oman.",
        items: [
          {
            title: "Structured report production",
            text: "Engineers produce supervision reports in a consistent structure instead of starting from a blank document each time.",
          },
          {
            title: "Less repetitive work",
            text: "Recurring project details and report sections do not have to be retyped for every visit.",
          },
          {
            title: "Consistent output for clients",
            text: "Reports leave the firm in one organised format, whichever engineer prepared them.",
          },
          {
            title: "Organised report history",
            text: "Reports are kept together by project, so past work is easier to find and review.",
          },
          {
            title: "Set up for your team",
            text: "Deployment includes preparing the system for your firm and the people who will use it.",
          },
          {
            title: "Usage-based cost",
            text: "You pay per report produced, so cost follows real use rather than a fixed seat count.",
          },
        ],
      },
      chips: {
        label: "Built for",
        items: [
          "Construction supervision firms",
          "Engineering consultancies",
          "Site engineers",
          "Project managers",
          "Firms working across several projects",
        ],
      },
      process: {
        eyebrow: "How it starts",
        title: "Three Steps From First Call to Daily Use.",
        steps: [
          {
            title: "System deployment",
            text: "We set up the system and prepare it for your firm and your projects.",
          },
          {
            title: "Initial staff training",
            text: "Your team is trained to use it in their daily reporting work.",
          },
          {
            title: "Pay per report produced",
            text: "Once you are working with it, costs follow the reports you actually produce.",
          },
        ],
      },
      outcomes: {
        eyebrow: "What changes",
        title: "An Easier Start and Value in Daily Work.",
        items: [
          {
            title: "Less time on paperwork",
            text: "Engineers spend less time assembling reports and more time on supervision itself.",
          },
          {
            title: "A more professional image",
            text: "Clients receive reports in a consistent, organised format from every engineer.",
          },
          {
            title: "Easier to find past work",
            text: "Reports are organised by project rather than scattered across devices and inboxes.",
          },
          {
            title: "Cost aligned with use",
            text: "A firm can try the product in its real workflow and match spending to its level of use.",
          },
        ],
      },
      faq: [
        {
          q: "How is the construction reporting product priced?",
          a: "It starts with an initial deployment and staff training, then you pay per report produced. Exact terms are confirmed once we understand your firm, team size and projects.",
        },
        {
          q: "How long does it take to get started?",
          a: "It depends on your report formats and how many people will use the system. We agree the deployment and training plan with you before starting, so the timeline is clear from day one.",
        },
        {
          q: "Does it support Arabic?",
          a: "IDRAK works in Arabic and English. We confirm the language your reports and team need during deployment.",
        },
        {
          q: "Who owns the reports and project data?",
          a: "Your reports and project information belong to your firm. Access, hosting and export are agreed with you as part of deployment.",
        },
        {
          q: "Can it work with the tools we already use?",
          a: "Deployment covers setting the product up for your team. If you need connections to other systems or features beyond the product’s scope, we can scope them as a custom software or automation project.",
        },
      ],
      cta: {
        title: "See How It Fits Your Firm.",
        text: "Tell us how your engineers produce reports today. We’ll show you how the product fits and what deployment looks like.",
        button: "Discuss Construction Reporting",
      },
    },
    ar: {
      seo: {
        title: "برنامج تقارير الإشراف على البناء في سلطنة عُمان | إدراك",
        description:
          "برنامج جاهز لتقارير الإشراف على البناء لشركات الاستشارات الهندسية في عُمان: تجهيز النظام وتدريب الفريق والدفع مقابل كل تقرير. تواصل مع إدراك اليوم.",
      },
      name: "تقارير الإشراف على البناء",
      summary:
        "منتج جاهز للإطلاق يجعل تقارير الإشراف أبسط وأكثر تنظيماً، وتُحتسب تكلفته عن كل تقرير يُعدّ.",
      hero: {
        eyebrow: "منتج · الإشراف على البناء",
        title: "برنامج تقارير الإشراف على البناء، جاهز للإطلاق في عُمان.",
        intro:
          "تقارير الإشراف جزء متكرر وأساسي من أسبوع كل شركة استشارات هندسية. منتج إدراك الجاهز يجعل إعدادها أبسط وأكثر تنظيماً، ليقضي المهندسون وقتاً أقل في الأوراق ووقتاً أطول في الموقع.",
        support: "نجهّز النظام، وندرّب فريقك، وتدفع مقابل التقارير التي تُعدّها فعلاً.",
      },
      problem: {
        eyebrow: "التحدي",
        title: "إعداد التقارير يستهلك وقتاً مكانه الموقع.",
        points: [
          "يعيد مهندسو الموقع كتابة هيكل التقرير نفسه لكل زيارة ومشروع وعميل.",
          "تبقى الصور والملاحظات على الهواتف وفي مجموعات المحادثة قبل أن تتحول إلى تقرير.",
          "لكل مهندس طريقته في تنسيق التقرير، فتصل مخرجات الشركة إلى العملاء بشكل غير موحّد.",
          "الوصول إلى تقرير قديم أو حالة ملاحظة سابقة يعني البحث في المجلدات والبريد.",
          "تراخيص البرامج التقليدية تُحتسب بالسعر نفسه سواء أعددتَ خمسة تقارير أم خمسمئة.",
        ],
      },
      offer: {
        eyebrow: "ماذا يتضمن",
        title: "مكان واحد منظّم لإعداد تقارير الإشراف.",
        intro: "صُمّم المنتج حول العمل اليومي لشركات الإشراف على البناء في عُمان.",
        items: [
          {
            title: "إعداد تقارير بهيكل موحّد",
            text: "يُعدّ المهندسون تقارير الإشراف ضمن هيكل ثابت بدلاً من البدء من مستند فارغ في كل مرة.",
          },
          {
            title: "عمل متكرر أقل",
            text: "لا حاجة لإعادة كتابة بيانات المشروع والأقسام المتكررة في كل زيارة.",
          },
          {
            title: "مخرجات موحّدة للعملاء",
            text: "تخرج التقارير من الشركة بتنسيق واحد منظّم أياً كان المهندس الذي أعدّها.",
          },
          {
            title: "أرشيف تقارير منظّم",
            text: "تُحفظ التقارير حسب المشروع، فيسهل الرجوع إلى الأعمال السابقة ومراجعتها.",
          },
          {
            title: "تهيئة لفريقك",
            text: "يشمل الإطلاق والتجهيز إعداد النظام لشركتك وللأشخاص الذين سيستخدمونه.",
          },
          {
            title: "تكلفة حسب الاستخدام",
            text: "تدفع مقابل كل تقرير يُعدّ، فترتبط التكلفة بالاستخدام الفعلي لا عدد المستخدمين.",
          },
        ],
      },
      chips: {
        label: "مصمّم لـ",
        items: [
          "شركات الإشراف على البناء",
          "مكاتب الاستشارات الهندسية",
          "مهندسو المواقع",
          "مديرو المشاريع",
          "الشركات التي تعمل على عدة مشاريع",
        ],
      },
      process: {
        eyebrow: "كيف نبدأ",
        title: "ثلاث خطوات من أول اتصال إلى الاستخدام اليومي.",
        steps: [
          { title: "تجهيز النظام", text: "نجهّز النظام ونهيّئه لشركتك ومشاريعك." },
          {
            title: "تدريب أوّلي للفريق",
            text: "يتدرّب فريقك على استخدامه في إعداد التقارير اليومية.",
          },
          {
            title: "الدفع مقابل كل تقرير",
            text: "بعد بدء الاستخدام، ترتبط التكلفة بعدد التقارير التي تُعدّها فعلاً.",
          },
        ],
      },
      outcomes: {
        eyebrow: "ما الذي يتغيّر",
        title: "بداية أسهل وقيمة في العمل اليومي.",
        items: [
          {
            title: "وقت أقل في الأوراق",
            text: "يقضي المهندسون وقتاً أقل في تجميع التقارير ووقتاً أطول في الإشراف نفسه.",
          },
          {
            title: "صورة أكثر احترافية",
            text: "يستلم العملاء تقارير بتنسيق موحّد ومنظّم من كل مهندس.",
          },
          {
            title: "وصول أسهل إلى الأعمال السابقة",
            text: "التقارير منظّمة حسب المشروع بدلاً من تشتتها بين الأجهزة والبريد.",
          },
          {
            title: "تكلفة مرتبطة بالاستخدام",
            text: "تستطيع الشركة تجربة المنتج ضمن سير عملها الحقيقي وربط الإنفاق بمستوى استخدامها.",
          },
        ],
      },
      faq: [
        {
          q: "كيف يُسعَّر منتج تقارير الإشراف؟",
          a: "يبدأ بتجهيز أوّلي للنظام وتدريب للفريق، ثم تدفع مقابل كل تقرير يُعدّ. نؤكد الشروط بعد فهم شركتك وحجم فريقك ومشاريعك.",
        },
        {
          q: "كم يستغرق البدء؟",
          a: "يعتمد ذلك على نماذج تقاريركم وعدد المستخدمين. نتفق معك على خطة الإطلاق والتجهيز والتدريب قبل البدء، ليكون الجدول الزمني واضحاً من اليوم الأول.",
        },
        {
          q: "هل يدعم اللغة العربية؟",
          a: "تعمل إدراك بالعربية والإنجليزية، ونؤكد اللغة التي تحتاجها تقاريركم وفريقكم أثناء تجهيز النظام.",
        },
        {
          q: "لمن تعود ملكية التقارير وبيانات المشاريع؟",
          a: "التقارير وبيانات المشاريع ملك لشركتك. ونتفق معك على صلاحيات الوصول والاستضافة والتصدير ضمن تجهيز النظام.",
        },
        {
          q: "هل يعمل مع الأدوات التي نستخدمها حالياً؟",
          a: "يشمل تجهيز النظام تهيئة المنتج لفريقك. وإذا احتجت إلى ربط بأنظمة أخرى أو وظائف تتجاوز نطاق المنتج، نحدّدها كمشروع برمجيات أو أتمتة مخصّص.",
        },
      ],
      cta: {
        title: "اكتشف كيف يناسب شركتك.",
        text: "حدّثنا عن طريقة إعداد مهندسيك للتقارير اليوم، وسنوضّح لك كيف يناسبك المنتج وكيف يبدو الإطلاق والتجهيز.",
        button: "ناقش نظام تقارير الإشراف",
      },
    },
  },
  {
    kind: "products",
    slug: "clinic-crm-whatsapp-assistant",
    image: "clinic",
    interest: "clinic-crm",
    related: {
      industries: ["healthcare"],
      services: ["whatsapp-ai-automation", "custom-software-development", "ai-business-automation"],
    },
    en: {
      seo: {
        title: "Clinic CRM & WhatsApp Booking Assistant in Oman | IDRAK",
        description:
          "Clinic CRM and WhatsApp assistant for clinics in Oman: answer questions, book visits, send reminders, track attendance, follow up and collect reviews.",
      },
      name: "Clinic CRM & WhatsApp Assistant",
      summary:
        "A clinic CRM with a WhatsApp assistant, from the first question to booking, attendance, follow-up and reviews.",
      hero: {
        eyebrow: "Product · Clinics and medical centres",
        title: "Clinic CRM & WhatsApp Assistant for Clinics in Oman.",
        intro:
          "Many patient relationships begin with a simple WhatsApp message about a service, a fee or visiting hours. The assistant answers in the WhatsApp your patients already use and keeps every interaction organised in one CRM for the clinic team.",
        support: "From the first question to booking, attendance and follow-up.",
      },
      problem: {
        eyebrow: "The problem",
        title: "A Late Reply Can Lose the First Opportunity.",
        points: [
          "Reception answers the same questions about services, fees and timings all day on WhatsApp.",
          "Messages that arrive after hours or at busy times wait too long, and the patient books elsewhere.",
          "People who asked but did not book are rarely followed up.",
          "Missed appointments and rescheduling are handled manually, one chat at a time.",
          "Feedback and online reviews depend on someone remembering to ask after the visit.",
        ],
      },
      offer: {
        eyebrow: "What’s inside",
        title: "One Connected Journey, Before and After the Visit.",
        items: [
          {
            title: "Answers to common questions",
            text: "The assistant answers frequent questions about services, fees and appointment times on WhatsApp.",
          },
          {
            title: "Booking support",
            text: "Patients can move from a question to a booking request in the same conversation.",
          },
          {
            title: "Reminders",
            text: "Appointment reminders are sent on WhatsApp to support attendance.",
          },
          {
            title: "Clinic CRM",
            text: "Every interaction is recorded in one CRM, so the team sees each patient’s history in one place.",
          },
          {
            title: "Follow-up on enquiries",
            text: "People who enquired but have not booked yet are followed up consistently.",
          },
          {
            title: "Rescheduling and missed visits",
            text: "Rescheduling is managed and missed visits are followed up instead of forgotten.",
          },
          {
            title: "Feedback and review links",
            text: "Feedback is collected after the visit and satisfied patients receive review links.",
          },
          {
            title: "Handover to your team",
            text: "Concerns and cases that need a person are routed to the clinic team for resolution.",
          },
        ],
      },
      chips: {
        label: "Built for",
        items: [
          "Dental clinics",
          "Aesthetic and dermatology clinics",
          "Medical centres",
          "Private healthcare groups",
          "Reception and patient-care teams",
        ],
      },
      process: {
        eyebrow: "How it starts",
        title: "Set Up Around How Your Clinic Works.",
        steps: [
          {
            title: "Understand your clinic",
            text: "We review your services, booking process, common questions and how your team handles WhatsApp today.",
          },
          {
            title: "Deploy the assistant and CRM",
            text: "We set up the assistant’s answers, the booking and reminder flow, and the CRM for your team.",
          },
          {
            title: "Train the team",
            text: "Reception and patient-care staff learn how to work with the CRM and take over conversations when needed.",
          },
          {
            title: "Refine and expand",
            text: "We review real conversations, improve answers and add follow-up steps where they help.",
          },
        ],
      },
      outcomes: {
        eyebrow: "What changes",
        title: "Fewer Lost Enquiries and a More Organised Front Desk.",
        items: [
          {
            title: "Faster first replies",
            text: "Common questions are answered without waiting for a free moment at reception.",
          },
          {
            title: "Consistent follow-up",
            text: "Enquiries, missed visits and rescheduling are followed up as part of the flow.",
          },
          {
            title: "One view of each patient",
            text: "Conversations and bookings are kept together in the CRM instead of scattered across phones.",
          },
          {
            title: "More feedback and reviews",
            text: "Asking for feedback and reviews becomes a routine step after every visit.",
          },
        ],
      },
      faq: [
        {
          q: "How is the clinic assistant priced?",
          a: "Commercial terms depend on the deployment and your clinic’s requirements, such as the number of branches, services and flows you need. We confirm them once we understand your setup.",
        },
        {
          q: "How long does setup take?",
          a: "It depends on your services, booking process and how much the assistant should handle. We agree the scope and timeline with you before deployment.",
        },
        {
          q: "Does the assistant speak Arabic?",
          a: "Yes. The assistant is set up for Arabic and English conversations, so patients can write in the language they prefer.",
        },
        {
          q: "Who owns the patient data?",
          a: "Patient records and conversations belong to your clinic. Access, hosting and export are agreed in writing as part of deployment.",
        },
        {
          q: "Can it connect to our existing booking or clinic system?",
          a: "Where your current system allows it, connections can be scoped during deployment. Deeper integrations can be delivered as a custom software or automation project.",
        },
        {
          q: "What happens when a patient needs a person?",
          a: "Concerns and cases that need human input are routed to your team, so the assistant supports the conversation instead of blocking it.",
        },
      ],
      cta: {
        title: "See the Assistant Working for Your Clinic.",
        text: "Tell us how your clinic handles WhatsApp, booking and follow-up today. We’ll show you how the product fits and what the first step looks like.",
        button: "Discuss the Clinic Assistant",
      },
    },
    ar: {
      seo: {
        title: "نظام إدارة العيادات ومساعد واتساب للحجز في عُمان | إدراك",
        description:
          "نظام CRM ومساعد واتساب للعيادات في عُمان: الرد على الاستفسارات، حجز المواعيد، التذكير، متابعة الحضور والمراجعين، وجمع آراء المراجعين وتقييمات Google في رحلة واحدة مترابطة.",
      },
      name: "نظام CRM ومساعد واتساب للعيادات",
      summary:
        "نظام CRM للعيادات مع مساعد واتساب، من أول سؤال إلى الحجز والحضور والمتابعة وآراء المراجعين.",
      hero: {
        eyebrow: "منتج · العيادات والمراكز الطبية",
        title: "نظام CRM ومساعد واتساب للعيادات في عُمان.",
        intro:
          "تبدأ علاقات كثيرة مع المراجعين برسالة واتساب بسيطة عن خدمة أو سعر أو مواعيد الزيارة. يرد المساعد عبر واتساب الذي يستخدمه المراجعون بالفعل، ويحفظ كل تفاعل منظّماً في نظام CRM واحد لفريق العيادة.",
        support: "من أول سؤال إلى الحجز والحضور والمتابعة.",
      },
      problem: {
        eyebrow: "التحدي",
        title: "الرد المتأخر قد يضيّع الفرصة الأولى.",
        points: [
          "يجيب الاستقبال طوال اليوم عن الأسئلة نفسها حول الخدمات والأسعار والمواعيد عبر واتساب.",
          "الرسائل التي تصل بعد الدوام أو في أوقات الذروة تنتظر طويلاً، فيحجز المراجع في مكان آخر.",
          "نادراً ما تتم متابعة من استفسروا ولم يحجزوا.",
          "تُدار المواعيد الفائتة وإعادة الجدولة يدوياً، محادثة بعد محادثة.",
          "طلب آراء المراجعين وتقييمات Google بعد الزيارة يعتمد على أن يتذكّره أحد.",
        ],
      },
      offer: {
        eyebrow: "ماذا يتضمن",
        title: "رحلة واحدة مترابطة قبل الزيارة وبعدها.",
        items: [
          {
            title: "الرد على الأسئلة الشائعة",
            text: "يجيب المساعد عبر واتساب عن الأسئلة المتكررة حول الخدمات والأسعار ومواعيد الحجز.",
          },
          {
            title: "دعم الحجز",
            text: "ينتقل المراجع من السؤال إلى طلب الحجز في المحادثة نفسها.",
          },
          { title: "التذكير بالمواعيد", text: "تُرسل تذكيرات المواعيد عبر واتساب لدعم الحضور." },
          {
            title: "نظام CRM للعيادة",
            text: "يُسجَّل كل تفاعل في نظام CRM واحد، فيرى الفريق سجل كل مراجع في مكان واحد.",
          },
          {
            title: "متابعة الاستفسارات",
            text: "تتم متابعة من استفسروا ولم يحجزوا بعد بشكل منتظم.",
          },
          {
            title: "إعادة الجدولة والمواعيد الفائتة",
            text: "تُدار إعادة الجدولة وتُتابع المواعيد الفائتة بدلاً من نسيانها.",
          },
          {
            title: "آراء المراجعين وتقييمات Google",
            text: "تُجمع آراء المراجعين بعد الزيارة، ويستلم المراجعون الراضون رابط التقييم على Google.",
          },
          {
            title: "التحويل إلى فريقك",
            text: "تُحال الملاحظات والحالات التي تحتاج إلى شخص إلى فريق العيادة لمعالجتها.",
          },
        ],
      },
      chips: {
        label: "مصمّم لـ",
        items: [
          "عيادات الأسنان",
          "عيادات التجميل والجلدية",
          "المراكز الطبية",
          "مجموعات الرعاية الصحية الخاصة",
          "فرق الاستقبال وخدمة المراجعين",
        ],
      },
      process: {
        eyebrow: "كيف نبدأ",
        title: "تهيئة حول طريقة عمل عيادتك.",
        steps: [
          {
            title: "فهم عيادتك",
            text: "نراجع خدماتك وطريقة الحجز والأسئلة الشائعة وكيف يتعامل فريقك مع واتساب اليوم.",
          },
          {
            title: "تجهيز المساعد والنظام",
            text: "نجهّز ردود المساعد ومسار الحجز والتذكير ونظام CRM لفريقك.",
          },
          {
            title: "تدريب الفريق",
            text: "يتعلّم فريق الاستقبال وخدمة المراجعين العمل على النظام وتولّي المحادثة عند الحاجة.",
          },
          {
            title: "التحسين والتوسّع",
            text: "نراجع المحادثات الحقيقية، ونحسّن الردود، ونضيف خطوات متابعة حيث تفيد.",
          },
        ],
      },
      outcomes: {
        eyebrow: "ما الذي يتغيّر",
        title: "استفسارات ضائعة أقل واستقبال أكثر تنظيماً.",
        items: [
          {
            title: "رد أول أسرع",
            text: "تُجاب الأسئلة الشائعة دون انتظار لحظة فراغ في الاستقبال.",
          },
          {
            title: "متابعة منتظمة",
            text: "تتم متابعة الاستفسارات والمواعيد الفائتة وإعادة الجدولة ضمن المسار نفسه.",
          },
          {
            title: "صورة كاملة لكل مراجع",
            text: "تبقى المحادثات والحجوزات معاً في النظام بدلاً من تشتتها بين الهواتف.",
          },
          {
            title: "تقييمات Google أكثر",
            text: "يصبح طلب آراء المراجعين وتقييمات Google خطوة ثابتة بعد كل زيارة.",
          },
        ],
      },
      faq: [
        {
          q: "كيف يُسعَّر مساعد العيادات؟",
          a: "تعتمد الشروط التجارية على طريقة الإطلاق والتجهيز ومتطلبات عيادتك، مثل عدد الفروع والخدمات والمسارات المطلوبة. نؤكدها بعد فهم وضعك.",
        },
        {
          q: "كم تستغرق التهيئة؟",
          a: "يعتمد ذلك على خدماتك وطريقة الحجز وحجم ما سيتولاه المساعد. نتفق معك على النطاق والجدول الزمني قبل الإطلاق.",
        },
        {
          q: "هل يتحدث المساعد بالعربية؟",
          a: "نعم. يُهيّأ المساعد للمحادثة بالعربية والإنجليزية، ليكتب المراجع باللغة التي يفضّلها.",
        },
        {
          q: "لمن تعود ملكية بيانات المراجعين؟",
          a: "سجلات المراجعين ومحادثاتهم ملك لعيادتك. ونتفق كتابياً على صلاحيات الوصول والاستضافة والتصدير ضمن تجهيز النظام.",
        },
        {
          q: "هل يمكن ربطه بنظام الحجز أو نظام العيادة الحالي؟",
          a: "حيث يسمح نظامك الحالي بذلك، نحدّد الربط أثناء تجهيز النظام. أما التكاملات الأعمق فيمكن تنفيذها كمشروع برمجيات أو أتمتة مخصّص.",
        },
        {
          q: "ماذا يحدث عندما يحتاج المراجع إلى موظف؟",
          a: "تُحال الملاحظات والحالات التي تحتاج إلى تدخّل بشري إلى فريقك، فيدعم المساعد المحادثة بدلاً من أن يعيقها.",
        },
      ],
      cta: {
        title: "شاهد المساعد يعمل لعيادتك.",
        text: "حدّثنا عن طريقة تعامل عيادتك مع واتساب والحجز والمتابعة اليوم، وسنوضّح لك كيف يناسبك المنتج وكيف تبدو الخطوة الأولى.",
        button: "ناقش مساعد العيادات",
      },
    },
  },
];
