/**
 * The 7 standalone service pages of Sajjad's architecture (/services/<slug>), in menu order.
 * Keywords per page come from a light Oman/GCC search (Nov 2026); Arabic is written for Gulf
 * buyers, not translated. No prices, stats, clients or guarantees: commercial answers follow
 * how.ts ("scope before price", pilot / defined project / ongoing partnership).
 */
import type { DetailEntry } from "./types";

export const SERVICE_PAGES: DetailEntry[] = [
  // 1 ───────────────────────────────────────────── Custom Software Development (main pillar)
  {
    kind: "services",
    slug: "custom-software-development",
    image: "automation",
    interest: "automation",
    related: {
      services: ["ai-business-automation", "whatsapp-ai-automation", "web-design"],
      industries: [
        "construction",
        "wholesale-distribution",
        "facility-property-management",
        "logistics-transport",
        "real-estate",
        "healthcare",
      ],
      products: ["construction-supervision-reporting", "clinic-crm-whatsapp-assistant"],
      work: [
        "sales-crm-lead-distribution-whatsapp",
        "ai-hiring-platform-voice-interviews",
        "whatsapp-ai-sales-assistant-carpet-retailer",
      ],
    },
    en: {
      seo: {
        title: "Custom Software Development Company in Muscat, Oman | IDRAK",
        description:
          "Custom software development in Oman: internal tools, CRM systems, dashboards, portals and business platforms built around how your Muscat company works.",
      },
      name: "Custom Software Development",
      summary:
        "Business software, CRM systems, dashboards and portals built around the way your company actually works.",
      hero: {
        eyebrow: "Custom software development · Oman",
        title: "Custom Software Development for Companies in Oman.",
        intro:
          "IDRAK designs and builds custom business software for medium and large companies in Muscat and across Oman: internal tools, CRM systems, dashboards, portals and operations platforms shaped around your real workflows, teams and data.",
        support:
          "Instead of bending your business around generic software, we build the system around the business, using AI-assisted development to deliver it faster.",
      },
      problem: {
        eyebrow: "Sound familiar?",
        title: "When Off-the-Shelf Software Stops Fitting the Business.",
        intro:
          "Most companies do not start by asking for custom software. They start with daily friction that keeps growing.",
        points: [
          "The real work runs on spreadsheets, WhatsApp groups and email chains that only a few people understand.",
          "You pay for several tools that do not talk to each other, so the same data is typed in again and again.",
          "Management cannot see sales, operations or project status without asking someone to prepare a report.",
          "Ready-made systems force your team into a process that does not match how you actually sell, deliver or approve.",
          "Customers, suppliers or field staff have no simple way to submit requests, check status or upload documents.",
          "An existing system is outdated, but replacing it feels risky because the whole operation depends on it.",
        ],
      },
      offer: {
        eyebrow: "What we build",
        title: "Software Built Around How Your Company Works.",
        intro:
          "Each system is scoped from your process, not from a feature list. Typical projects include:",
        items: [
          {
            title: "Custom business software",
            text: "Core systems for the way you run sales, projects, service or operations, with the screens, rules and roles your teams need.",
          },
          {
            title: "Custom CRM systems",
            text: "A CRM shaped around your sales pipeline, follow-up rules and reporting, connected to WhatsApp, forms and your other tools.",
          },
          {
            title: "Dashboards and reporting",
            text: "Live management dashboards that pull data from your systems, so decisions do not wait for a manual report.",
          },
          {
            title: "Customer, supplier and staff portals",
            text: "Secure portals where people can submit requests, track status, upload documents and get answers without calling your team.",
          },
          {
            title: "Workflow and operations systems",
            text: "Task, approval, inspection, dispatch and job-tracking systems that replace scattered spreadsheets and messages.",
          },
          {
            title: "Custom web applications and business platforms",
            text: "Browser-based applications for internal teams or your clients, built to work on desktop and mobile.",
          },
          {
            title: "API integrations",
            text: "Connections between your new system and existing ERP, accounting, CRM, payment, WhatsApp or third-party platforms.",
          },
          {
            title: "SaaS platforms",
            text: "Multi-tenant platforms for companies that want to turn their own know-how into a subscription product for other businesses.",
          },
        ],
      },
      chips: {
        label: "Common systems we build",
        items: [
          "Internal tools",
          "CRM systems",
          "Management dashboards",
          "Client portals",
          "Approval workflows",
          "Inventory & orders",
          "Field and site reporting",
          "Booking systems",
          "API integrations",
          "SaaS platforms",
          "AI-assisted features",
        ],
      },
      process: {
        eyebrow: "How we deliver",
        title: "From Your Current Process to a Working System.",
        steps: [
          {
            title: "Discovery and scope",
            text: "We review how the work happens today, who is involved and what the system must change, then agree a clear scope.",
          },
          {
            title: "Design the workflow and screens",
            text: "We map the process, roles and data, and show you the key screens before heavy development starts.",
          },
          {
            title: "Build in stages",
            text: "We develop the system in usable stages with AI-assisted development, so your team can review real software early.",
          },
          {
            title: "Launch and onboarding",
            text: "We move data where needed, connect your existing tools and help your team start using the system in daily work.",
          },
          {
            title: "Improve and expand",
            text: "Once it is in use, we refine what matters and add modules or integrations where more value can be created.",
          },
        ],
      },
      outcomes: {
        eyebrow: "What changes",
        title: "What a Well-Fitted System Gives You.",
        items: [
          {
            title: "Less manual work",
            text: "Fewer copied spreadsheets, repeated data entry and hand-offs that depend on one person.",
          },
          {
            title: "One source of truth",
            text: "Customers, projects, orders and approvals live in one organised system instead of many tools.",
          },
          {
            title: "Visibility for management",
            text: "Status and performance are visible on a dashboard instead of being collected by hand.",
          },
          {
            title: "Software that can grow with you",
            text: "New modules, users and integrations can be added as the business changes.",
          },
        ],
      },
      faq: [
        {
          q: "How much does custom software development cost in Oman?",
          a: "It depends on the scope: the number of workflows and user roles, integrations with existing systems, data migration and the delivery model. We define the scope first, so the proposal reflects the real work rather than a generic package.",
        },
        {
          q: "How long does a custom software project take?",
          a: "Timelines depend on the size of the system. Many projects start with a focused first version or pilot that your team can use, then expand in stages. The timeline is agreed as part of the scope before development starts.",
        },
        {
          q: "Can the new system work with our existing tools?",
          a: "Yes. We can integrate with existing CRM, ERP, accounting, spreadsheets, forms, WhatsApp and other systems through APIs or data imports, where those systems allow it.",
        },
        {
          q: "Who owns the software and the data?",
          a: "Ownership of the source code, data and any licences is set out in the project agreement before work begins, so it is clear from the start.",
        },
        {
          q: "Do you support Arabic and English interfaces?",
          a: "Yes. Systems can be built in Arabic, English or both, including right-to-left layouts for Arabic users.",
        },
        {
          q: "What happens after launch?",
          a: "We can continue with support, improvements and new modules as an ongoing engagement, so the system keeps up with how your business works.",
        },
        {
          q: "Custom software or a ready-made product: which is right for us?",
          a: "If many companies in your industry share the same need, a ready-made IDRAK product can be faster to start. If your process is specific to your business, custom software usually fits better. We will tell you honestly which makes sense.",
        },
      ],
      cta: {
        title: "Tell Us Which Process Needs a Better System.",
        text: "Describe how the work runs today and where it breaks. We will suggest the most practical first version to build.",
        button: "Discuss Your Software Project",
      },
    },
    ar: {
      seo: {
        title: "تطوير برمجيات مخصّصة للشركات في عُمان ومسقط | إدراك",
        description:
          "شركة برمجة في مسقط لتطوير برمجيات مخصّصة للشركات في عُمان: أنظمة CRM ولوحات متابعة وبوابات وأدوات داخلية وأنظمة تشغيل مبنية حول طريقة عملك الفعلية.",
      },
      name: "تطوير البرمجيات المخصّصة",
      summary:
        "برمجيات أعمال وأنظمة CRM ولوحات متابعة وبوابات مبنية حول الطريقة التي تعمل بها شركتك فعلاً.",
      hero: {
        eyebrow: "تطوير البرمجيات المخصّصة · عُمان",
        title: "تطوير برمجيات مخصّصة للشركات في عُمان.",
        intro:
          "تصمّم إدراك وتبني حلولاً برمجية للشركات المتوسطة والكبيرة في مسقط وسائر عُمان: أدوات داخلية وأنظمة CRM ولوحات متابعة وبوابات وأنظمة تشغيل، مبنية حول سير عملك وفرقك وبياناتك الفعلية.",
        support:
          "بدلاً من أن تتكيّف شركتك مع برنامج جاهز لا يناسبها، نبني النظام حول عملك، ونستفيد من التطوير المدعوم بالذكاء الاصطناعي لتسليمه أسرع.",
      },
      problem: {
        eyebrow: "هل يبدو هذا مألوفاً؟",
        title: "عندما لا تعود البرامج الجاهزة مناسبة لعملك.",
        intro: "نادراً ما تبدأ الشركات بطلب برمجيات مخصّصة؛ تبدأ بمشكلات يومية تكبر مع الوقت.",
        points: [
          "العمل الفعلي يدار عبر جداول Excel ومجموعات واتساب ورسائل بريد لا يفهمها إلا عدد قليل من الموظفين.",
          "تدفع اشتراكات عدة أنظمة لا يتصل بعضها ببعض، فتُدخَل البيانات نفسها مرة بعد أخرى.",
          "لا ترى الإدارة وضع المبيعات أو العمليات أو المشاريع إلا بعد أن يجهّز أحدهم تقريراً يدوياً.",
          "الأنظمة الجاهزة تفرض على فريقك إجراءات لا تطابق طريقة البيع أو التنفيذ أو الاعتماد لديكم.",
          "لا يملك العملاء أو الموردون أو فرق الميدان طريقة سهلة لتقديم الطلبات أو متابعة حالتها أو رفع المستندات.",
          "لديكم نظام قديم يحتاج إلى استبدال، لكن تغييره يبدو مخاطرة لأن العمليات كلها تعتمد عليه.",
        ],
      },
      offer: {
        eyebrow: "ماذا نبني",
        title: "حلول برمجية مبنية حول طريقة عمل شركتك.",
        intro:
          "نحدّد نطاق كل نظام انطلاقاً من إجراءات عملك، لا من قائمة ميزات جاهزة. من المشاريع المعتادة:",
        items: [
          {
            title: "برمجيات أعمال مخصّصة",
            text: "أنظمة أساسية لإدارة المبيعات أو المشاريع أو الخدمات أو العمليات، بالشاشات والصلاحيات والقواعد التي تحتاجها فرقك.",
          },
          {
            title: "أنظمة CRM مخصّصة",
            text: "نظام CRM مصمّم حول مسار مبيعاتك وقواعد المتابعة والتقارير، ومرتبط بواتساب والنماذج وأدواتك الأخرى.",
          },
          {
            title: "لوحات المتابعة والتقارير",
            text: "لوحات إدارية مباشرة تسحب البيانات من أنظمتك، فلا تنتظر القرارات تقريراً يدوياً.",
          },
          {
            title: "بوابات للعملاء والموردين والموظفين",
            text: "بوابات آمنة لتقديم الطلبات ومتابعة حالتها ورفع المستندات والحصول على الإجابات دون الاتصال بفريقك.",
          },
          {
            title: "أنظمة سير العمل والتشغيل",
            text: "أنظمة للمهام والموافقات والتفتيش وتوزيع الأعمال ومتابعة التنفيذ، بدلاً من الجداول والرسائل المتفرقة.",
          },
          {
            title: "تطبيقات ويب ومنصات أعمال مخصّصة",
            text: "تطبيقات تعمل من المتصفح لفرقك الداخلية أو لعملائك، مهيأة للحاسوب والجوال.",
          },
          {
            title: "تكامل الأنظمة عبر API",
            text: "ربط النظام الجديد بأنظمة ERP والمحاسبة وCRM والدفع وواتساب والمنصات الأخرى التي تستخدمونها.",
          },
          {
            title: "منصات SaaS",
            text: "منصات متعددة المستأجرين للشركات التي تريد تحويل خبرتها إلى منتج اشتراكي تقدّمه لشركات أخرى.",
          },
        ],
      },
      chips: {
        label: "أنظمة نبنيها كثيراً",
        items: [
          "أدوات داخلية",
          "أنظمة CRM",
          "لوحات متابعة إدارية",
          "بوابات العملاء",
          "مسارات الموافقات",
          "المخزون والطلبات",
          "تقارير الميدان والمواقع",
          "أنظمة الحجز",
          "تكامل API",
          "منصات SaaS",
          "ميزات بالذكاء الاصطناعي",
        ],
      },
      process: {
        eyebrow: "كيف نسلّم المشروع",
        title: "من إجراءاتك الحالية إلى نظام يعمل فعلاً.",
        steps: [
          {
            title: "الاستكشاف وتحديد النطاق",
            text: "نراجع كيف يتم العمل اليوم ومن المعنيون به وما الذي يجب أن يغيّره النظام، ثم نتفق على نطاق واضح.",
          },
          {
            title: "تصميم سير العمل والشاشات",
            text: "نرسم الإجراءات والأدوار والبيانات، ونعرض عليك الشاشات الرئيسية قبل بدء التطوير الكامل.",
          },
          {
            title: "البناء على مراحل",
            text: "نطوّر النظام على مراحل قابلة للاستخدام بمساعدة الذكاء الاصطناعي، ليراجع فريقك برنامجاً حقيقياً مبكراً.",
          },
          {
            title: "الإطلاق وتهيئة الفريق",
            text: "ننقل البيانات عند الحاجة، ونربط أدواتكم الحالية، ونساعد فريقك على استخدام النظام في العمل اليومي.",
          },
          {
            title: "التحسين والتوسّع",
            text: "بعد التشغيل نحسّن ما يهم، ونضيف وحدات أو تكاملات جديدة حيث تصنع قيمة إضافية.",
          },
        ],
      },
      outcomes: {
        eyebrow: "ما الذي يتغيّر",
        title: "ما يمنحك إياه نظام مصمّم على مقاس عملك.",
        items: [
          {
            title: "عمل يدوي أقل",
            text: "نسخ أقل للجداول، وإدخال أقل للبيانات المكررة، واعتماد أقل على شخص واحد في نقل العمل.",
          },
          {
            title: "مصدر واحد للمعلومة",
            text: "العملاء والمشاريع والطلبات والموافقات في نظام واحد منظّم بدلاً من أدوات كثيرة.",
          },
          {
            title: "رؤية أوضح للإدارة",
            text: "الحالة والأداء يظهران على لوحة متابعة بدلاً من جمعهما يدوياً.",
          },
          {
            title: "برمجيات تنمو مع شركتك",
            text: "يمكن إضافة وحدات ومستخدمين وتكاملات جديدة كلما تغيّر العمل.",
          },
        ],
      },
      faq: [
        {
          q: "كم تكلفة تطوير برمجيات مخصّصة في عُمان؟",
          a: "تعتمد على النطاق: عدد الإجراءات وأدوار المستخدمين، والتكامل مع الأنظمة الحالية، ونقل البيانات، ونموذج التنفيذ. نحدّد النطاق أولاً حتى يعكس العرض العمل الفعلي لا باقة عامة.",
        },
        {
          q: "كم يستغرق مشروع البرمجيات المخصّصة؟",
          a: "تختلف المدة بحسب حجم النظام. كثير من المشاريع يبدأ بنسخة أولى مركّزة أو تجربة أولية يستخدمها فريقك، ثم يتوسّع على مراحل. نتفق على الجدول الزمني ضمن النطاق قبل بدء التطوير.",
        },
        {
          q: "هل يمكن أن يعمل النظام الجديد مع أدواتنا الحالية؟",
          a: "نعم. يمكن الربط مع أنظمة CRM وERP والمحاسبة وجداول البيانات والنماذج وواتساب وغيرها عبر واجهات API أو استيراد البيانات، متى سمحت تلك الأنظمة بذلك.",
        },
        {
          q: "من يملك البرنامج والبيانات؟",
          a: "تُحدَّد ملكية الشيفرة المصدرية والبيانات وأي تراخيص في اتفاقية المشروع قبل بدء العمل، لتكون واضحة من البداية.",
        },
        {
          q: "هل تدعمون الواجهات باللغتين العربية والإنجليزية؟",
          a: "نعم. يمكن بناء الأنظمة بالعربية أو الإنجليزية أو بكلتيهما، مع واجهات من اليمين إلى اليسار للمستخدمين العرب.",
        },
        {
          q: "ماذا يحدث بعد الإطلاق؟",
          a: "يمكننا الاستمرار في الدعم والتحسين وإضافة وحدات جديدة ضمن تعاون مستمر، ليبقى النظام مواكباً لطريقة عملكم.",
        },
        {
          q: "برمجيات مخصّصة أم منتج جاهز: أيهما يناسبنا؟",
          a: "إذا كانت حاجتكم مشتركة بين شركات كثيرة في قطاعكم، فقد يكون منتج إدراك الجاهز أسرع في البدء. وإذا كانت إجراءاتكم خاصة بشركتكم، فالبرمجيات المخصّصة عادةً أنسب. سنخبرك بصراحة بما يناسبك.",
        },
      ],
      cta: {
        title: "أخبرنا أي عملية تحتاج إلى نظام أفضل.",
        text: "صف لنا كيف يسير العمل اليوم وأين يتعثّر، وسنقترح أنسب نسخة أولى يمكن بناؤها.",
        button: "ناقش مشروعك البرمجي",
      },
    },
  },

  // 2 ───────────────────────────────────────────── AI & Business Automation (internal ops only)
  {
    kind: "services",
    slug: "ai-business-automation",
    image: "approach",
    interest: "automation",
    related: {
      services: ["custom-software-development", "whatsapp-ai-automation"],
      industries: [
        "wholesale-distribution",
        "logistics-transport",
        "facility-property-management",
        "construction",
        "real-estate",
        "healthcare",
      ],
      products: ["construction-supervision-reporting", "clinic-crm-whatsapp-assistant"],
      work: [
        "ai-hiring-platform-voice-interviews",
        "sales-crm-lead-distribution-whatsapp",
        "whatsapp-ai-sales-assistant-carpet-retailer",
      ],
    },
    en: {
      seo: {
        title: "Business Process Automation in Oman with AI | IDRAK",
        description:
          "AI and business process automation in Oman: approval flows, back-office tasks, document processing and system integrations that cut manual work in Muscat.",
      },
      name: "AI & Business Automation",
      summary:
        "Automate approvals, back-office tasks, documents and data transfer between your systems, with AI where it helps.",
      hero: {
        eyebrow: "AI & business automation · Oman",
        title: "Business Process Automation and AI Workflows in Oman.",
        intro:
          "We automate the internal, repetitive work that slows your operations down: approvals, back-office tasks, document handling and moving data between systems. AI is added where it genuinely saves time, such as reading documents or drafting routine outputs.",
        support:
          "The aim is simple: your team spends less time copying, chasing and checking, and more time on work that needs people.",
      },
      problem: {
        eyebrow: "Where time is lost",
        title: "Operational Work That Should Not Need People.",
        points: [
          "Approvals wait in inboxes and WhatsApp chats, and nobody knows who is holding the request.",
          "Staff copy the same data from emails, PDFs and forms into spreadsheets and other systems every day.",
          "Invoices, purchase orders, delivery notes or reports are checked and re-typed by hand.",
          "Routine reports take hours to prepare because the data sits in several places.",
          "Processes depend on one experienced employee, and stall when that person is away.",
        ],
      },
      offer: {
        eyebrow: "What we automate",
        title: "Automation for Internal and Operational Processes.",
        items: [
          {
            title: "Workflow automation",
            text: "Multi-step processes that move work from one person or team to the next automatically, with reminders and status tracking.",
          },
          {
            title: "Approval flows",
            text: "Purchase, leave, expense, quotation or document approvals with clear rules, levels and an audit trail.",
          },
          {
            title: "Back-office automation",
            text: "Recurring administrative tasks such as data entry, record updates, notifications and routine reporting.",
          },
          {
            title: "Document processing with AI",
            text: "Reading and extracting data from invoices, forms, PDFs and scanned documents, with human review where accuracy matters.",
          },
          {
            title: "Data transfer and system integrations",
            text: "Connecting CRM, ERP, accounting, spreadsheets and other tools so data moves between them without re-typing.",
          },
          {
            title: "AI-assisted workflows",
            text: "AI steps inside a process, such as classifying requests, summarising information or drafting routine documents for review.",
          },
          {
            title: "Operational reporting",
            text: "Automatic reports and alerts built from your live data, sent to the right people on schedule.",
          },
        ],
      },
      chips: {
        label: "Processes we often automate",
        items: [
          "Purchase approvals",
          "Invoice processing",
          "Data entry",
          "Document extraction",
          "Daily and weekly reports",
          "Task assignment",
          "Reminders and escalations",
          "ERP and CRM sync",
          "Spreadsheet to system",
        ],
      },
      process: {
        eyebrow: "How it runs",
        title: "Start With One Process, Then Expand.",
        steps: [
          {
            title: "Map the process",
            text: "We follow one process from start to finish and identify where time, errors and delays actually happen.",
          },
          {
            title: "Focused pilot",
            text: "We automate a clearly defined part of the process first, so you can see real results before wider rollout.",
          },
          {
            title: "Connect and roll out",
            text: "We connect the systems involved, train the team and move the automated flow into daily use.",
          },
          {
            title: "Measure and extend",
            text: "We review what works, refine it and automate the next process where the value is clear.",
          },
        ],
      },
      outcomes: {
        eyebrow: "What changes",
        title: "What Automation Gives Your Operations.",
        items: [
          {
            title: "Less repetitive work",
            text: "Staff stop copying data and chasing approvals, and focus on work that needs judgement.",
          },
          {
            title: "Fewer errors",
            text: "Data entered once and moved automatically reduces mistakes from manual re-typing.",
          },
          {
            title: "Faster processing",
            text: "Requests and documents move to the next step without waiting for someone to notice them.",
          },
          {
            title: "Clear accountability",
            text: "Every step has an owner, a status and a record, so delays are visible.",
          },
        ],
      },
      faq: [
        {
          q: "Which processes should we automate first?",
          a: "Usually the ones that are frequent, rule-based and time-consuming, such as approvals, data entry and routine reports. We help you pick a process where the value is clear and start there.",
        },
        {
          q: "Do we need to replace our current systems?",
          a: "Not necessarily. Automation can often work around your existing CRM, ERP, accounting software, forms and spreadsheets. If a missing system is the real problem, we will say so.",
        },
        {
          q: "How is an automation project priced?",
          a: "Pricing depends on the workflow, the systems involved, integrations and the implementation scope. Many projects begin with a focused pilot before expanding.",
        },
        {
          q: "Can AI read Arabic documents?",
          a: "AI can extract information from Arabic and English documents. Accuracy depends on document quality, so we build in human review for steps where errors would be costly.",
        },
        {
          q: "What is the difference between this and custom software development?",
          a: "Automation removes manual steps from processes you already run, often by connecting existing tools. Custom software development builds a new system when your business needs one. Many projects combine both.",
        },
        {
          q: "Who maintains the automations after launch?",
          a: "We can maintain, adjust and extend them as an ongoing engagement, so they keep working as your processes and systems change.",
        },
      ],
      cta: {
        title: "Which Process Takes Too Much of Your Team’s Time?",
        text: "Tell us about one process that is slow, manual or error-prone. We will show you what can be automated first.",
        button: "Discuss an Automation Project",
      },
    },
    ar: {
      seo: {
        title: "أتمتة العمليات والأعمال بالذكاء الاصطناعي في عُمان | إدراك",
        description:
          "أتمتة العمليات الإدارية والتشغيلية في عُمان: الموافقات ومعالجة المستندات ونقل البيانات وربط الأنظمة بالذكاء الاصطناعي لتقليل العمل اليدوي في مسقط.",
      },
      name: "أتمتة الأعمال بالذكاء الاصطناعي",
      summary:
        "أتمتة الموافقات والأعمال الإدارية والمستندات ونقل البيانات بين أنظمتك، مع الذكاء الاصطناعي حيث يفيد.",
      hero: {
        eyebrow: "أتمتة الأعمال بالذكاء الاصطناعي · عُمان",
        title: "أتمتة العمليات وسير العمل بالذكاء الاصطناعي في عُمان.",
        intro:
          "نؤتمت العمل الداخلي المتكرر الذي يبطئ عملياتك: الموافقات، والأعمال الإدارية، ومعالجة المستندات، ونقل البيانات بين الأنظمة. ونضيف الذكاء الاصطناعي حيث يوفّر الوقت فعلاً، مثل قراءة المستندات أو إعداد المخرجات الروتينية.",
        support:
          "الهدف واضح: وقت أقل في النسخ والملاحقة والتدقيق، ووقت أكثر للعمل الذي يحتاج إلى الناس.",
      },
      problem: {
        eyebrow: "أين يضيع الوقت",
        title: "أعمال تشغيلية لا ينبغي أن تحتاج إلى موظف.",
        points: [
          "الموافقات عالقة في البريد ومحادثات واتساب، ولا أحد يعرف عند من توقّف الطلب.",
          "الموظفون ينسخون البيانات نفسها يومياً من الرسائل وملفات PDF والنماذج إلى الجداول والأنظمة الأخرى.",
          "الفواتير وأوامر الشراء ومذكرات التسليم والتقارير تُراجع وتُعاد كتابتها يدوياً.",
          "إعداد التقارير الدورية يستغرق ساعات لأن البيانات موزّعة في أكثر من مكان.",
          "العمليات تعتمد على موظف واحد ذي خبرة، وتتوقف عند غيابه.",
        ],
      },
      offer: {
        eyebrow: "ماذا نؤتمت",
        title: "أتمتة للعمليات الداخلية والتشغيلية.",
        items: [
          {
            title: "أتمتة سير العمل",
            text: "إجراءات متعددة الخطوات تنتقل تلقائياً من شخص أو فريق إلى التالي، مع تذكيرات ومتابعة للحالة.",
          },
          {
            title: "مسارات الموافقات",
            text: "موافقات المشتريات والإجازات والمصروفات وعروض الأسعار والمستندات بقواعد ومستويات واضحة وسجل كامل.",
          },
          {
            title: "أتمتة الأعمال الإدارية",
            text: "المهام الإدارية المتكررة مثل إدخال البيانات وتحديث السجلات والإشعارات والتقارير الروتينية.",
          },
          {
            title: "معالجة المستندات بالذكاء الاصطناعي",
            text: "قراءة البيانات واستخراجها من الفواتير والنماذج وملفات PDF والمستندات الممسوحة، مع مراجعة بشرية حيث تهم الدقة.",
          },
          {
            title: "نقل البيانات وتكامل الأنظمة",
            text: "ربط CRM وERP والمحاسبة وجداول البيانات وغيرها لتنتقل البيانات بينها دون إعادة إدخال.",
          },
          {
            title: "سير عمل مدعوم بالذكاء الاصطناعي",
            text: "خطوات ذكية داخل الإجراء، مثل تصنيف الطلبات أو تلخيص المعلومات أو إعداد مسودات المستندات الروتينية للمراجعة.",
          },
          {
            title: "تقارير تشغيلية تلقائية",
            text: "تقارير وتنبيهات تُبنى من بياناتك المباشرة وتصل إلى الأشخاص المعنيين في موعدها.",
          },
        ],
      },
      chips: {
        label: "عمليات نؤتمتها كثيراً",
        items: [
          "موافقات المشتريات",
          "معالجة الفواتير",
          "إدخال البيانات",
          "استخراج بيانات المستندات",
          "التقارير اليومية والأسبوعية",
          "توزيع المهام",
          "التذكير والتصعيد",
          "مزامنة ERP وCRM",
          "من الجدول إلى النظام",
        ],
      },
      process: {
        eyebrow: "كيف نعمل",
        title: "ابدأ بعملية واحدة، ثم توسّع.",
        steps: [
          {
            title: "رسم العملية",
            text: "نتتبّع عملية واحدة من بدايتها إلى نهايتها، ونحدّد أين يضيع الوقت وتقع الأخطاء والتأخير فعلاً.",
          },
          {
            title: "تجربة أولية مركّزة",
            text: "نؤتمت جزءاً محدداً من العملية أولاً، لترى نتائج حقيقية قبل التعميم.",
          },
          {
            title: "الربط والتشغيل",
            text: "نربط الأنظمة المعنية، وندرّب الفريق، وننقل المسار المؤتمت إلى العمل اليومي.",
          },
          {
            title: "القياس والتوسّع",
            text: "نراجع ما ينجح ونحسّنه، ثم نؤتمت العملية التالية حيث تكون القيمة واضحة.",
          },
        ],
      },
      outcomes: {
        eyebrow: "ما الذي يتغيّر",
        title: "ما تمنحه الأتمتة لعملياتك.",
        items: [
          {
            title: "عمل متكرر أقل",
            text: "يتوقف الموظفون عن نسخ البيانات وملاحقة الموافقات، ويركّزون على ما يحتاج إلى تقدير.",
          },
          {
            title: "أخطاء أقل",
            text: "بيانات تُدخَل مرة واحدة وتنتقل تلقائياً، فتقلّ أخطاء إعادة الكتابة اليدوية.",
          },
          {
            title: "معالجة أسرع",
            text: "الطلبات والمستندات تنتقل إلى الخطوة التالية دون انتظار أن ينتبه لها أحد.",
          },
          {
            title: "مسؤولية واضحة",
            text: "لكل خطوة مسؤول وحالة وسجل، فيظهر التأخير بوضوح.",
          },
        ],
      },
      faq: [
        {
          q: "ما العمليات التي نبدأ بأتمتتها؟",
          a: "عادةً العمليات المتكررة القائمة على قواعد واضحة والتي تستهلك وقتاً، مثل الموافقات وإدخال البيانات والتقارير الروتينية. نساعدك على اختيار عملية قيمتها واضحة والبدء بها.",
        },
        {
          q: "هل نحتاج إلى استبدال أنظمتنا الحالية؟",
          a: "ليس بالضرورة. كثيراً ما تعمل الأتمتة حول أنظمة CRM وERP والمحاسبة والنماذج وجداول البيانات الحالية. وإذا كانت المشكلة الحقيقية غياب نظام مناسب، فسنخبرك بذلك.",
        },
        {
          q: "كيف يُسعَّر مشروع الأتمتة؟",
          a: "يعتمد السعر على سير العمل والأنظمة المعنية والتكاملات ونطاق التنفيذ. يبدأ كثير من المشاريع بتجربة أولية مركّزة قبل التوسّع.",
        },
        {
          q: "هل يستطيع الذكاء الاصطناعي قراءة المستندات العربية؟",
          a: "نعم، يمكنه استخراج المعلومات من المستندات العربية والإنجليزية. تعتمد الدقة على جودة المستند، لذلك نضيف مراجعة بشرية في الخطوات التي يكون فيها الخطأ مكلفاً.",
        },
        {
          q: "ما الفرق بين الأتمتة وتطوير البرمجيات المخصّصة؟",
          a: "الأتمتة تزيل الخطوات اليدوية من عمليات تديرونها حالياً، غالباً بربط الأدوات الموجودة. أما تطوير البرمجيات المخصّصة فيبني نظاماً جديداً عندما يحتاجه عملكم. وكثير من المشاريع يجمع بين الاثنين.",
        },
        {
          q: "من يتولى صيانة الأتمتة بعد الإطلاق؟",
          a: "يمكننا صيانتها وتعديلها وتوسيعها ضمن تعاون مستمر، لتبقى فعّالة مع تغيّر إجراءاتكم وأنظمتكم.",
        },
      ],
      cta: {
        title: "أي عملية تأخذ من وقت فريقك أكثر مما يجب؟",
        text: "أخبرنا عن عملية بطيئة أو يدوية أو كثيرة الأخطاء، وسنوضح لك ما يمكن أتمتته أولاً.",
        button: "ناقش مشروع أتمتة",
      },
    },
  },

  // 3 ───────────────────────────────────────────── AI Agents & WhatsApp Automation
  {
    kind: "services",
    slug: "whatsapp-ai-automation",
    image: "whatsapp",
    interest: "whatsapp",
    related: {
      services: ["custom-software-development", "ai-business-automation", "web-design"],
      industries: [
        "real-estate",
        "healthcare",
        "wholesale-distribution",
        "construction",
        "facility-property-management",
        "logistics-transport",
      ],
      products: ["clinic-crm-whatsapp-assistant"],
      work: [
        "whatsapp-ai-sales-assistant-carpet-retailer",
        "sales-crm-lead-distribution-whatsapp",
        "ai-hiring-platform-voice-interviews",
      ],
    },
    en: {
      seo: {
        title: "WhatsApp AI Chatbot & Sales Automation in Oman | IDRAK",
        description:
          "WhatsApp AI chatbot and sales automation in Oman: an Arabic and English AI agent that answers, qualifies leads, updates your CRM and hands over to your team.",
      },
      name: "AI Agents & WhatsApp Automation",
      summary:
        "An Arabic and English AI assistant on WhatsApp that answers, qualifies leads, updates your CRM and follows up.",
      hero: {
        eyebrow: "AI agents & WhatsApp automation · Oman",
        title: "WhatsApp AI Chatbot and Sales Automation for Oman.",
        intro:
          "Your customers in Oman already ask questions, request prices and decide on WhatsApp. We build AI agents that answer in Arabic and English, qualify leads, recommend products, record every request in your CRM and follow up, then hand the conversation to your sales team when a person is needed.",
        support: "Automation supports the conversation instead of blocking it.",
      },
      problem: {
        eyebrow: "Where sales are lost",
        title: "When WhatsApp Is Busy but Sales Are Not Organised.",
        points: [
          "Messages arrive after hours or at busy times, and customers move on before anyone replies.",
          "Your team answers the same questions about prices, availability and location all day.",
          "Leads stay inside personal phones, so management cannot see who asked what or what happened next.",
          "Follow-up depends on memory, so interested customers are forgotten after the first chat.",
          "Serious buyers and casual enquiries get the same attention, and sales time is spent in the wrong place.",
        ],
      },
      offer: {
        eyebrow: "What we build",
        title: "AI Agents That Work Inside Your WhatsApp Sales Flow.",
        items: [
          {
            title: "WhatsApp AI assistant",
            text: "An assistant on the official WhatsApp Business Platform that answers common questions using your approved information.",
          },
          {
            title: "Lead qualification",
            text: "Asks the right questions about need, budget, timing or location, and tags each lead so your team knows who to call first.",
          },
          {
            title: "Product and service recommendation",
            text: "Introduces relevant products, units, services or packages from your catalogue based on what the customer asks.",
          },
          {
            title: "Customer support replies",
            text: "Handles routine support questions such as order status, opening hours and documents required.",
          },
          {
            title: "CRM integration",
            text: "Every conversation, lead and request is recorded in your CRM, whether it is your current system or one we build.",
          },
          {
            title: "Follow-up automation",
            text: "Scheduled follow-ups and reminders for leads that have not decided yet, within WhatsApp’s messaging rules.",
          },
          {
            title: "Arabic and English conversations",
            text: "Replies in the customer’s language, with tone and wording set for Gulf customers.",
          },
          {
            title: "Human sales handoff",
            text: "Clear rules for when the conversation moves to a person, with the full chat history passed to your team.",
          },
        ],
      },
      chips: {
        label: "Typical use cases",
        items: [
          "Property enquiries",
          "Clinic bookings",
          "Price requests",
          "Product catalogue",
          "Order status",
          "Lead scoring",
          "Appointment reminders",
          "After-sales follow-up",
          "Review requests",
        ],
      },
      process: {
        eyebrow: "How it runs",
        title: "From First Message to Sales Handoff.",
        steps: [
          {
            title: "Map your conversations",
            text: "We review real customer chats, common questions, sales steps and the points where a person must step in.",
          },
          {
            title: "Prepare knowledge and rules",
            text: "We set up approved answers, product information, qualification questions and handoff rules with your team.",
          },
          {
            title: "Connect WhatsApp and CRM",
            text: "We connect the WhatsApp Business number to your CRM and test the flow with real scenarios before launch.",
          },
          {
            title: "Launch, review, improve",
            text: "After launch we review conversations, fix weak answers and refine the flow as your offers change.",
          },
        ],
      },
      outcomes: {
        eyebrow: "What changes",
        title: "What an Organised WhatsApp Sales Flow Gives You.",
        items: [
          {
            title: "Faster first replies",
            text: "Customers get an answer when they ask, including outside working hours.",
          },
          {
            title: "Fewer lost leads",
            text: "Every enquiry is captured, tagged and followed up instead of staying in someone’s phone.",
          },
          {
            title: "Sales time on serious buyers",
            text: "Your team receives qualified conversations with the context already collected.",
          },
          {
            title: "Visibility for management",
            text: "Leads, conversations and follow-up status are visible in the CRM.",
          },
        ],
      },
      faq: [
        {
          q: "Does the WhatsApp AI chatbot reply in Arabic?",
          a: "Yes. It can reply in Arabic and English and follow the customer’s language. We set the wording and tone with you so it suits your brand and your customers.",
        },
        {
          q: "Will the AI give customers wrong prices or promises?",
          a: "The assistant answers from the information you approve, such as prices, products and policies. Sensitive cases, negotiations and anything outside those rules are handed to your team.",
        },
        {
          q: "Can it connect to our existing CRM?",
          a: "Yes, where your CRM allows integration. If you do not have a suitable CRM, we can build one around your sales process.",
        },
        {
          q: "Do we need the WhatsApp Business API?",
          a: "Yes. A reliable AI assistant runs on the official WhatsApp Business Platform. We help you set up the number and connect it, and the account belongs to your business.",
        },
        {
          q: "How is a WhatsApp automation project priced?",
          a: "It depends on the conversation flows, integrations and message volume. WhatsApp’s own messaging fees are separate. We confirm the scope before the commercial proposal, and many projects start with a focused pilot.",
        },
        {
          q: "When does a person take over the conversation?",
          a: "You decide the rules, for example when a customer asks for a call, is ready to buy, has a complaint or asks something the assistant should not answer. Your team receives the full chat history.",
        },
        {
          q: "Do you have a ready-made solution for clinics?",
          a: "Yes. The IDRAK Clinic CRM & WhatsApp Assistant covers enquiries, booking, reminders and follow-up for clinics and medical centres.",
        },
      ],
      cta: {
        title: "Turn Your WhatsApp Chats Into an Organised Sales Flow.",
        text: "Tell us what customers usually ask on WhatsApp and how your team follows up today. We will map the first flow to automate.",
        button: "Discuss WhatsApp Automation",
      },
    },
    ar: {
      seo: {
        title: "شات بوت واتساب بالذكاء الاصطناعي للمبيعات في عُمان | إدراك",
        description:
          "شات بوت واتساب بالذكاء الاصطناعي في عُمان يرد بالعربية والإنجليزية، ويؤهّل العملاء المحتملين، ويحدّث نظام CRM، ويحيل المحادثة إلى فريق المبيعات عند الحاجة.",
      },
      name: "وكلاء الذكاء الاصطناعي وأتمتة واتساب",
      summary:
        "مساعد ذكي على واتساب يرد بالعربية والإنجليزية، ويؤهّل العملاء، ويحدّث CRM، ويتابع تلقائياً.",
      hero: {
        eyebrow: "وكلاء الذكاء الاصطناعي وأتمتة واتساب · عُمان",
        title: "شات بوت واتساب بالذكاء الاصطناعي لأتمتة المبيعات في عُمان.",
        intro:
          "عملاؤك في عُمان يسألون ويطلبون الأسعار ويتخذون قرار الشراء على واتساب. نبني وكلاء ذكاء اصطناعي يردّون بالعربية والإنجليزية، ويؤهّلون العملاء المحتملين، ويقترحون المنتجات، ويسجّلون كل طلب في نظام CRM ويتابعونه، ثم يحيلون المحادثة إلى فريق المبيعات عندما يلزم تدخّل بشري.",
        support: "الأتمتة تدعم المحادثة بدلاً من أن تعيقها.",
      },
      problem: {
        eyebrow: "أين تضيع المبيعات",
        title: "واتساب مزدحم، لكن المبيعات غير منظّمة.",
        points: [
          "تصل الرسائل بعد الدوام أو في أوقات الذروة، فينصرف العميل قبل أن يردّ عليه أحد.",
          "فريقك يجيب طوال اليوم عن الأسئلة نفسها حول الأسعار والتوفر والموقع.",
          "العملاء المحتملون يبقون في هواتف الموظفين، فلا ترى الإدارة من سأل وماذا حدث بعدها.",
          "المتابعة تعتمد على الذاكرة، فيُنسى العميل المهتم بعد المحادثة الأولى.",
          "المشتري الجاد والاستفسار العابر يحصلان على الاهتمام نفسه، فيضيع وقت المبيعات في غير مكانه.",
        ],
      },
      offer: {
        eyebrow: "ماذا نبني",
        title: "وكلاء ذكاء اصطناعي يعملون داخل مسار مبيعاتك على واتساب.",
        items: [
          {
            title: "مساعد واتساب بالذكاء الاصطناعي",
            text: "مساعد على منصة WhatsApp Business الرسمية يجيب عن الأسئلة الشائعة من المعلومات التي تعتمدها أنت.",
          },
          {
            title: "تأهيل العملاء المحتملين",
            text: "يطرح الأسئلة المناسبة عن الحاجة والميزانية والتوقيت والموقع، ويصنّف كل عميل ليعرف فريقك بمن يتصل أولاً.",
          },
          {
            title: "اقتراح المنتجات والخدمات",
            text: "يعرّف العميل بالمنتجات أو الوحدات أو الخدمات أو الباقات المناسبة من كتالوجك بحسب سؤاله.",
          },
          {
            title: "ردود خدمة العملاء",
            text: "يتعامل مع أسئلة الدعم الروتينية مثل حالة الطلب ومواعيد العمل والمستندات المطلوبة.",
          },
          {
            title: "الربط مع نظام CRM",
            text: "تُسجَّل كل محادثة وكل عميل وكل طلب في نظام CRM، سواء نظامك الحالي أو نظام نبنيه لك.",
          },
          {
            title: "أتمتة المتابعة",
            text: "متابعات وتذكيرات مجدولة للعملاء الذين لم يقرّروا بعد، ضمن قواعد المراسلة في واتساب.",
          },
          {
            title: "محادثات بالعربية والإنجليزية",
            text: "يردّ بلغة العميل، بصياغة ونبرة مناسبة لعملاء الخليج.",
          },
          {
            title: "الإحالة إلى فريق المبيعات",
            text: "قواعد واضحة لانتقال المحادثة إلى موظف، مع تمرير سجل المحادثة كاملاً إلى فريقك.",
          },
        ],
      },
      chips: {
        label: "حالات استخدام شائعة",
        items: [
          "استفسارات العقارات",
          "حجوزات العيادات",
          "طلبات الأسعار",
          "كتالوج المنتجات",
          "حالة الطلب",
          "تصنيف العملاء المحتملين",
          "تذكير المواعيد",
          "متابعة ما بعد البيع",
          "طلب التقييمات",
        ],
      },
      process: {
        eyebrow: "كيف يعمل",
        title: "من أول رسالة إلى الإحالة لفريق المبيعات.",
        steps: [
          {
            title: "دراسة محادثاتكم",
            text: "نراجع محادثات حقيقية مع العملاء، والأسئلة المتكررة، وخطوات البيع، والنقاط التي يجب أن يتدخّل فيها موظف.",
          },
          {
            title: "إعداد المعرفة والقواعد",
            text: "نجهّز مع فريقك الإجابات المعتمدة ومعلومات المنتجات وأسئلة التأهيل وقواعد الإحالة.",
          },
          {
            title: "ربط واتساب وCRM",
            text: "نربط رقم واتساب للأعمال بنظام CRM، ونختبر المسار بسيناريوهات حقيقية قبل الإطلاق.",
          },
          {
            title: "الإطلاق والمراجعة والتحسين",
            text: "بعد الإطلاق نراجع المحادثات، ونصحّح الإجابات الضعيفة، ونحدّث المسار مع تغيّر عروضكم.",
          },
        ],
      },
      outcomes: {
        eyebrow: "ما الذي يتغيّر",
        title: "ما يمنحك إياه مسار مبيعات منظّم على واتساب.",
        items: [
          {
            title: "ردّ أول أسرع",
            text: "يحصل العميل على إجابة وقت سؤاله، حتى خارج ساعات الدوام.",
          },
          {
            title: "فرص ضائعة أقل",
            text: "كل استفسار يُسجَّل ويُصنَّف ويُتابَع بدلاً من أن يبقى في هاتف أحد الموظفين.",
          },
          {
            title: "وقت المبيعات للمشترين الجادين",
            text: "يستلم فريقك محادثات مؤهّلة ومعها المعلومات اللازمة مسبقاً.",
          },
          {
            title: "رؤية أوضح للإدارة",
            text: "العملاء المحتملون والمحادثات وحالة المتابعة ظاهرة في نظام CRM.",
          },
        ],
      },
      faq: [
        {
          q: "هل يردّ شات بوت واتساب بالعربية؟",
          a: "نعم. يردّ بالعربية والإنجليزية ويتبع لغة العميل. ونحدّد معك الصياغة والنبرة لتناسب علامتك وعملاءك.",
        },
        {
          q: "هل قد يعطي الذكاء الاصطناعي العملاء أسعاراً أو وعوداً خاطئة؟",
          a: "يجيب المساعد من المعلومات التي تعتمدها، مثل الأسعار والمنتجات والسياسات. أما الحالات الحساسة والتفاوض وكل ما يخرج عن هذه القواعد فيُحال إلى فريقك.",
        },
        {
          q: "هل يمكن ربطه بنظام CRM الحالي لدينا؟",
          a: "نعم، متى سمح نظامكم بالتكامل. وإذا لم يكن لديكم نظام مناسب، يمكننا بناء CRM حول مسار مبيعاتكم.",
        },
        {
          q: "هل نحتاج إلى WhatsApp Business API؟",
          a: "نعم. المساعد الموثوق يعمل على منصة WhatsApp Business الرسمية. نساعدك في تجهيز الرقم وربطه، ويبقى الحساب ملكاً لشركتك.",
        },
        {
          q: "كيف يُسعَّر مشروع أتمتة واتساب؟",
          a: "يعتمد على مسارات المحادثة والتكاملات وحجم الرسائل، ورسوم المراسلة الخاصة بواتساب منفصلة. نحدّد النطاق قبل العرض التجاري، وكثير من المشاريع يبدأ بتجربة أولية مركّزة.",
        },
        {
          q: "متى يتولى موظف المحادثة؟",
          a: "أنت من يحدّد القواعد، مثلاً عندما يطلب العميل اتصالاً، أو يكون جاهزاً للشراء، أو لديه شكوى، أو يسأل عما لا ينبغي للمساعد الإجابة عنه. ويستلم فريقك سجل المحادثة كاملاً.",
        },
        {
          q: "هل لديكم حل جاهز للعيادات؟",
          a: "نعم. منتج إدراك «CRM العيادات ومساعد واتساب» يغطي الاستفسارات والحجز والتذكير والمتابعة للعيادات والمراكز الطبية.",
        },
      ],
      cta: {
        title: "حوّل محادثات واتساب إلى مسار مبيعات منظّم.",
        text: "أخبرنا بما يسأل عنه عملاؤك عادةً على واتساب وكيف يتابع فريقك اليوم، وسنرسم أول مسار يمكن أتمتته.",
        button: "ناقش أتمتة واتساب",
      },
    },
  },

  // 4 ───────────────────────────────────────────── AI Video Production
  {
    kind: "services",
    slug: "ai-video-production",
    image: "aiVideo",
    interest: "ai-video",
    related: {
      services: ["content-social-media", "web-design"],
      industries: ["real-estate", "healthcare", "construction"],
      work: [],
    },
    en: {
      seo: {
        title: "AI Video Production in Oman for Real Estate & Brands | IDRAK",
        description:
          "AI video production in Oman for off-plan real estate, hotels, interiors, healthcare and luxury brands. Cinematic promo videos from Muscat without a full shoot.",
      },
      name: "AI Video Production",
      summary:
        "Cinematic AI videos that show your product, project or space before traditional filming is practical.",
      hero: {
        eyebrow: "AI video production · Oman",
        title: "AI Video Production for Real Estate, Hospitality and Brands in Oman.",
        intro:
          "We produce AI-assisted promotional videos for companies in Oman that need to show a product, a space or an experience: off-plan real estate, hotels, interiors, clinics, luxury and industrial products, and social media campaigns.",
        support:
          "Advertising storytelling and cinematic visuals, with less reliance on actors, locations, equipment and physical sets.",
      },
      problem: {
        eyebrow: "Why it is hard to show",
        title: "When Your Product Is Hard to Film or Hard to Imagine.",
        points: [
          "Your project is off-plan, so there is nothing to film yet, but buyers need to imagine living there.",
          "A traditional shoot needs crews, locations, actors and permits, and the budget does not fit every campaign.",
          "Renders and brochures look the same as every competitor’s and do not create emotion.",
          "Social media needs a steady flow of fresh video, not one expensive film a year.",
          "Your product is technical or industrial, and its value is hard to explain with photos.",
        ],
      },
      offer: {
        eyebrow: "What we produce",
        title: "AI Video for the Use Cases That Sell.",
        items: [
          {
            title: "Real estate and off-plan projects",
            text: "Lifestyle and walkthrough-style films that show spaces, views and the experience of living there before construction is complete.",
          },
          {
            title: "Hotels and hospitality",
            text: "Atmosphere films for rooms, restaurants, spa and guest experiences, for campaigns and booking pages.",
          },
          {
            title: "Interior design",
            text: "Visualise a design concept as a finished space, from mood and materials to light and movement.",
          },
          {
            title: "Healthcare and clinics",
            text: "Calm, trustworthy videos that present services, environments and the patient experience.",
          },
          {
            title: "Luxury and consumer products",
            text: "Distinctive product stories with cinematic scenes that would be costly to stage traditionally.",
          },
          {
            title: "Industrial products",
            text: "Explain complex equipment, materials and processes in a clearer, more engaging way.",
          },
          {
            title: "Social media campaigns and promo videos",
            text: "Short vertical videos and campaign variations for Instagram, TikTok, Snapchat and YouTube.",
          },
        ],
      },
      chips: {
        label: "Formats",
        items: [
          "Project launch films",
          "Vertical reels",
          "Product films",
          "Campaign variations",
          "Arabic and English voice-over",
          "Subtitled versions",
          "Website hero videos",
        ],
      },
      process: {
        eyebrow: "How we produce",
        title: "From Brief to Finished Video.",
        steps: [
          {
            title: "Creative brief",
            text: "We agree the audience, the message, the platform and the feeling the video must create.",
          },
          {
            title: "Script and storyboard",
            text: "We write the story and plan each scene, using your plans, renders, photos or product references.",
          },
          {
            title: "AI production and editing",
            text: "We generate, edit and finish the scenes with music, voice-over and on-screen text in Arabic or English.",
          },
          {
            title: "Review and delivery",
            text: "You review, we refine, and you receive versions sized for each platform you use.",
          },
        ],
      },
      outcomes: {
        eyebrow: "What you get",
        title: "What AI Video Makes Possible.",
        items: [
          {
            title: "Show it before it exists",
            text: "Present projects, spaces and products that cannot be filmed yet.",
          },
          {
            title: "Fewer production constraints",
            text: "Less dependence on crews, locations, actors and physical sets.",
          },
          {
            title: "More creative range",
            text: "Scenes and concepts that would be difficult or costly to stage with a camera.",
          },
          {
            title: "Content for every channel",
            text: "Versions for social media, the website, sales presentations and campaigns.",
          },
        ],
      },
      faq: [
        {
          q: "Can AI video show an off-plan project accurately?",
          a: "We build scenes from your approved plans, renders and materials, and the video is presented as a visualisation. You review every scene so it reflects the project honestly and does not over-promise.",
        },
        {
          q: "How much does an AI video cost?",
          a: "It depends on the length, the number of scenes and versions, the creative complexity and whether voice-over is needed. Each video project starts with a creative brief and a defined scope.",
        },
        {
          q: "What do you need from us to start?",
          a: "A short brief, your target audience and any references you have: plans, renders, product photos, brand guidelines or past campaigns.",
        },
        {
          q: "Can the video be in Arabic?",
          a: "Yes. Voice-over, subtitles and on-screen text can be in Arabic, English or both.",
        },
        {
          q: "Does AI video replace a real film shoot?",
          a: "Not always. It is strongest when filming is costly, difficult or not yet possible. For some projects, mixing real footage with AI scenes works best.",
        },
        {
          q: "Who can use the finished video?",
          a: "The usage rights for the finished video are confirmed in the project agreement, so you know where and how you can publish it.",
        },
      ],
      cta: {
        title: "What Do You Want Your Customers to See?",
        text: "Tell us about the project, product or space you need to present. We will suggest a video concept and format.",
        button: "Discuss an AI Video Project",
      },
    },
    ar: {
      seo: {
        title: "إنتاج فيديو بالذكاء الاصطناعي للعقارات في عُمان | إدراك",
        description:
          "إنتاج فيديو بالذكاء الاصطناعي في عُمان لمشاريع البيع على الخارطة والفنادق والتصميم الداخلي والرعاية الصحية والعلامات الفاخرة، بجودة سينمائية ودون تصوير كامل.",
      },
      name: "إنتاج الفيديو بالذكاء الاصطناعي",
      summary:
        "فيديوهات سينمائية بالذكاء الاصطناعي تعرض منتجك أو مشروعك أو مساحتك قبل أن يصبح التصوير التقليدي ممكناً.",
      hero: {
        eyebrow: "إنتاج الفيديو بالذكاء الاصطناعي · عُمان",
        title: "إنتاج فيديو بالذكاء الاصطناعي للعقارات والضيافة والعلامات التجارية في عُمان.",
        intro:
          "ننتج فيديوهات ترويجية بالذكاء الاصطناعي للشركات في عُمان التي تحتاج إلى عرض منتج أو مساحة أو تجربة: مشاريع البيع على الخارطة، والفنادق، والتصميم الداخلي، والعيادات، والمنتجات الفاخرة والصناعية، وحملات وسائل التواصل.",
        support:
          "سرد إعلاني ومشاهد سينمائية، مع اعتماد أقل على الممثلين ومواقع التصوير والمعدات والديكورات.",
      },
      problem: {
        eyebrow: "لماذا يصعب العرض",
        title: "عندما يصعب تصوير منتجك أو تخيّله.",
        points: [
          "مشروعك على الخارطة، فلا يوجد ما يمكن تصويره بعد، بينما يحتاج المشتري إلى أن يتخيّل حياته فيه.",
          "التصوير التقليدي يحتاج إلى فريق ومواقع وممثلين وتصاريح، والميزانية لا تناسب كل حملة.",
          "الصور ثلاثية الأبعاد والكتيّبات تشبه ما يقدّمه المنافسون ولا تصنع أثراً عاطفياً.",
          "وسائل التواصل تحتاج إلى فيديوهات جديدة باستمرار، لا إلى فيلم واحد مكلف كل عام.",
          "منتجك تقني أو صناعي، ويصعب شرح قيمته بالصور فقط.",
        ],
      },
      offer: {
        eyebrow: "ماذا ننتج",
        title: "فيديو بالذكاء الاصطناعي لحالات الاستخدام التي تبيع.",
        items: [
          {
            title: "المشاريع العقارية والبيع على الخارطة",
            text: "أفلام لنمط الحياة وجولات داخل المشروع تعرض المساحات والإطلالات وتجربة السكن قبل اكتمال البناء.",
          },
          {
            title: "الفنادق والضيافة",
            text: "أفلام تنقل أجواء الغرف والمطاعم والسبا وتجربة الضيف، للحملات وصفحات الحجز.",
          },
          {
            title: "التصميم الداخلي",
            text: "تجسيد فكرة التصميم في مساحة مكتملة، من الأجواء والخامات إلى الإضاءة والحركة.",
          },
          {
            title: "الرعاية الصحية والعيادات",
            text: "فيديوهات هادئة تبعث على الثقة تعرض الخدمات والبيئة وتجربة المراجع.",
          },
          {
            title: "المنتجات الفاخرة والاستهلاكية",
            text: "قصص مميّزة للمنتج بمشاهد سينمائية يكلف تنفيذها كثيراً بالتصوير التقليدي.",
          },
          {
            title: "المنتجات الصناعية",
            text: "شرح المعدات والمواد والعمليات المعقّدة بطريقة أوضح وأكثر جاذبية.",
          },
          {
            title: "حملات التواصل الاجتماعي والفيديو الترويجي",
            text: "فيديوهات عمودية قصيرة ونسخ متعددة للحملات على إنستغرام وتيك توك وسناب شات ويوتيوب.",
          },
        ],
      },
      chips: {
        label: "الصيغ",
        items: [
          "أفلام إطلاق المشاريع",
          "ريلز عمودية",
          "أفلام المنتجات",
          "نسخ متعددة للحملات",
          "تعليق صوتي بالعربية والإنجليزية",
          "نسخ مترجمة",
          "فيديو واجهة الموقع",
        ],
      },
      process: {
        eyebrow: "كيف ننتج",
        title: "من الفكرة إلى الفيديو النهائي.",
        steps: [
          {
            title: "الموجز الإبداعي",
            text: "نتفق على الجمهور والرسالة والمنصة والإحساس الذي يجب أن يتركه الفيديو.",
          },
          {
            title: "السيناريو ولوحة المشاهد",
            text: "نكتب القصة ونخطط لكل مشهد اعتماداً على مخططاتك وصورك ومراجع منتجك.",
          },
          {
            title: "الإنتاج بالذكاء الاصطناعي والمونتاج",
            text: "نولّد المشاهد ونحرّرها ونكملها بالموسيقى والتعليق الصوتي والنصوص بالعربية أو الإنجليزية.",
          },
          {
            title: "المراجعة والتسليم",
            text: "تراجع الفيديو ونعدّله، ثم تستلم نسخاً بمقاسات كل منصة تستخدمها.",
          },
        ],
      },
      outcomes: {
        eyebrow: "ما الذي تحصل عليه",
        title: "ما يتيحه فيديو الذكاء الاصطناعي.",
        items: [
          {
            title: "اعرضه قبل أن يوجد",
            text: "قدّم مشاريع ومساحات ومنتجات لا يمكن تصويرها بعد.",
          },
          {
            title: "قيود إنتاج أقل",
            text: "اعتماد أقل على فرق التصوير والمواقع والممثلين والديكورات.",
          },
          {
            title: "مساحة إبداعية أوسع",
            text: "مشاهد وأفكار يصعب تنفيذها بالكاميرا أو تكون مكلفة.",
          },
          {
            title: "محتوى لكل قناة",
            text: "نسخ لوسائل التواصل والموقع وعروض المبيعات والحملات.",
          },
        ],
      },
      faq: [
        {
          q: "هل يعرض الفيديو مشروع البيع على الخارطة بدقة؟",
          a: "نبني المشاهد من مخططاتك وصورك وخاماتك المعتمدة، ويُقدَّم الفيديو بوصفه تصوّراً للمشروع. تراجع كل مشهد ليعكس المشروع بصدق دون مبالغة.",
        },
        {
          q: "كم تكلفة فيديو الذكاء الاصطناعي؟",
          a: "تعتمد على المدة وعدد المشاهد والنسخ ودرجة التعقيد الإبداعي والحاجة إلى تعليق صوتي. يبدأ كل مشروع فيديو بموجز إبداعي ونطاق محدد.",
        },
        {
          q: "ماذا تحتاجون منا للبدء؟",
          a: "موجز قصير، والجمهور المستهدف، وأي مراجع لديك: مخططات أو صور ثلاثية الأبعاد أو صور المنتج أو دليل العلامة أو حملات سابقة.",
        },
        {
          q: "هل يمكن أن يكون الفيديو بالعربية؟",
          a: "نعم. التعليق الصوتي والترجمة والنصوص على الشاشة يمكن أن تكون بالعربية أو الإنجليزية أو بكلتيهما.",
        },
        {
          q: "هل يغني فيديو الذكاء الاصطناعي عن التصوير الحقيقي؟",
          a: "ليس دائماً. يكون في أقوى حالاته عندما يكون التصوير مكلفاً أو صعباً أو غير ممكن بعد. وفي بعض المشاريع يكون الدمج بين لقطات حقيقية ومشاهد ذكاء اصطناعي هو الأنسب.",
        },
        {
          q: "من يحق له استخدام الفيديو النهائي؟",
          a: "تُحدَّد حقوق استخدام الفيديو النهائي في اتفاقية المشروع، لتعرف أين وكيف يمكنك نشره.",
        },
      ],
      cta: {
        title: "ماذا تريد أن يرى عملاؤك؟",
        text: "أخبرنا عن المشروع أو المنتج أو المساحة التي تريد عرضها، وسنقترح فكرة الفيديو وصيغته.",
        button: "ناقش مشروع فيديو بالذكاء الاصطناعي",
      },
    },
  },

  // 5 ───────────────────────────────────────────── Content & Social Media
  {
    kind: "services",
    slug: "content-social-media",
    image: "content",
    interest: "content",
    related: {
      services: ["ai-video-production", "seo-geo", "web-design"],
      industries: ["real-estate", "healthcare"],
      work: [],
    },
    en: {
      seo: {
        title: "Social Media Management & Content Creation in Oman | IDRAK",
        description:
          "Social media management and content creation in Oman: strategy, Arabic and English content, AI-assisted production and campaign content for Muscat brands.",
      },
      name: "Content & Social Media",
      summary:
        "Content strategy, production and social media management tied to what your business needs to sell.",
      hero: {
        eyebrow: "Content & social media · Oman",
        title: "Social Media Management and Content Creation in Oman.",
        intro:
          "We plan, produce and manage content for businesses in Oman: a clear content strategy, Arabic and English posts, reels and campaign content, produced with AI assistance and guided by your commercial goals.",
        support:
          "Visual creativity within a consistent plan, so attention turns into interest and enquiries.",
      },
      problem: {
        eyebrow: "The usual gaps",
        title: "When Posting Is Busy but the Brand Is Not Moving.",
        points: [
          "Posts go out when someone has time, without a plan or a clear message.",
          "Content looks nice but does not explain what you sell or why customers should choose you.",
          "Arabic and English versions feel like translations instead of speaking to each audience.",
          "Campaigns start from zero every time, with no reusable ideas, templates or assets.",
          "Nobody connects content to enquiries, so it is hard to know what is working.",
        ],
      },
      offer: {
        eyebrow: "What is included",
        title: "From Content Strategy to Publishing.",
        items: [
          {
            title: "Content strategy",
            text: "Audience, key messages, content pillars and formats chosen around your products and commercial goals.",
          },
          {
            title: "Social media management",
            text: "Monthly content calendars, publishing and management of your brand’s presence on the platforms that matter to you.",
          },
          {
            title: "Content production",
            text: "Posts, carousels, reels, short videos and captions, in Arabic, English or both.",
          },
          {
            title: "Campaign content",
            text: "Concepts and assets for launches, offers, seasons and events, ready for organic and paid use.",
          },
          {
            title: "AI-assisted content",
            text: "AI helps us generate more ideas and distinctive visuals, while strategy and brand direction lead the work.",
          },
          {
            title: "Brand communication",
            text: "A consistent tone, visual style and message across channels, so every post feels like the same brand.",
          },
        ],
      },
      chips: {
        label: "Channels and formats",
        items: [
          "Instagram",
          "TikTok",
          "LinkedIn",
          "Snapchat",
          "YouTube Shorts",
          "Reels",
          "Carousels",
          "Content calendars",
          "Arabic and English copy",
        ],
      },
      process: {
        eyebrow: "How it runs",
        title: "Ideation, Production, Publishing.",
        steps: [
          {
            title: "Goals and content review",
            text: "We look at your current channels, audience and goals, and agree what the content must achieve.",
          },
          {
            title: "Plan",
            text: "We set the content pillars, formats and a monthly calendar for your approval.",
          },
          {
            title: "Produce",
            text: "We create the posts, visuals, videos and copy, and share them with you for review.",
          },
          {
            title: "Publish and refine",
            text: "We publish, review what performs, and adjust the next month’s plan.",
          },
        ],
      },
      outcomes: {
        eyebrow: "What changes",
        title: "What a Consistent Content Plan Gives You.",
        items: [
          {
            title: "A steady presence",
            text: "Regular, planned publishing instead of random posts.",
          },
          {
            title: "Clearer value",
            text: "Content that explains what you offer and why it matters to your customers.",
          },
          {
            title: "Stronger brand recognition",
            text: "One recognisable tone and visual style across channels.",
          },
          {
            title: "Content that supports sales",
            text: "Topics and campaigns chosen around products, offers and enquiries.",
          },
        ],
      },
      faq: [
        {
          q: "Do you provide both strategy and production?",
          a: "Yes. The work can cover ideation, planning, production, publishing and ongoing management, depending on the scope.",
        },
        {
          q: "Do you write content in Arabic?",
          a: "Yes. We write Arabic for Gulf audiences and English separately, rather than translating one into the other.",
        },
        {
          q: "How is social media management priced?",
          a: "It depends on the number of channels, publishing frequency, content volume and production requirements. It is usually structured as an ongoing monthly engagement around an agreed scope.",
        },
        {
          q: "Do we approve content before it is published?",
          a: "Yes. The calendar and the content are shared for your review before publishing.",
        },
        {
          q: "Can you also produce AI videos for our channels?",
          a: "Yes. AI video production can be part of the content plan, for reels, product films and campaigns.",
        },
        {
          q: "Do you run paid ads?",
          a: "Our focus is content, campaigns and channel management. Paid campaign needs can be discussed as part of the scope.",
        },
      ],
      cta: {
        title: "What Should Your Brand Be Known For?",
        text: "Tell us about your products, audience and current channels. We will suggest a content direction and a practical monthly plan.",
        button: "Discuss Your Content",
      },
    },
    ar: {
      seo: {
        title: "إدارة حسابات التواصل الاجتماعي والمحتوى في عُمان | إدراك",
        description:
          "إدارة حسابات التواصل الاجتماعي وصناعة المحتوى في عُمان: استراتيجية ومحتوى عربي وإنجليزي وإنتاج بمساعدة الذكاء الاصطناعي ومحتوى حملات للعلامات في مسقط.",
      },
      name: "المحتوى ووسائل التواصل الاجتماعي",
      summary: "استراتيجية المحتوى وإنتاجه وإدارة حسابات التواصل، مرتبطة بما يحتاج عملك إلى بيعه.",
      hero: {
        eyebrow: "المحتوى ووسائل التواصل الاجتماعي · عُمان",
        title: "إدارة حسابات التواصل الاجتماعي وصناعة المحتوى في عُمان.",
        intro:
          "نخطط المحتوى وننتجه وندير حسابات الشركات في عُمان: استراتيجية محتوى واضحة، ومنشورات وريلز ومحتوى حملات بالعربية والإنجليزية، تُنتَج بمساعدة الذكاء الاصطناعي وتقودها أهدافك التجارية.",
        support: "إبداع بصري ضمن خطة متسقة، ليتحوّل الانتباه إلى اهتمام واستفسارات.",
      },
      problem: {
        eyebrow: "الثغرات المعتادة",
        title: "نشر كثير، لكن العلامة لا تتقدّم.",
        points: [
          "المنشورات تُنشر عندما يتوفر وقت لأحدهم، دون خطة أو رسالة واضحة.",
          "المحتوى جميل، لكنه لا يشرح ما تبيعه ولماذا يختارك العميل.",
          "النسخة العربية والإنجليزية تبدوان ترجمة لا خطاباً موجّهاً لكل جمهور.",
          "كل حملة تبدأ من الصفر، دون أفكار أو قوالب أو مواد قابلة لإعادة الاستخدام.",
          "لا أحد يربط المحتوى بالاستفسارات، فيصعب معرفة ما ينجح.",
        ],
      },
      offer: {
        eyebrow: "ما يشمله العمل",
        title: "من استراتيجية المحتوى إلى النشر.",
        items: [
          {
            title: "استراتيجية المحتوى",
            text: "الجمهور والرسائل الأساسية ومحاور المحتوى والصيغ، مختارة حول منتجاتك وأهدافك التجارية.",
          },
          {
            title: "إدارة حسابات التواصل الاجتماعي",
            text: "تقويم محتوى شهري، ونشر، وإدارة حضور علامتك على المنصات التي تهمك.",
          },
          {
            title: "صناعة المحتوى",
            text: "منشورات وكاروسيل وريلز وفيديوهات قصيرة ونصوص، بالعربية أو الإنجليزية أو بكلتيهما.",
          },
          {
            title: "محتوى الحملات",
            text: "أفكار ومواد للإطلاقات والعروض والمواسم والفعاليات، جاهزة للنشر العادي والممول.",
          },
          {
            title: "محتوى بمساعدة الذكاء الاصطناعي",
            text: "يساعدنا الذكاء الاصطناعي على توليد أفكار أكثر ومرئيات مميّزة، بينما تقود الاستراتيجية وتوجّه العلامة العمل.",
          },
          {
            title: "التواصل باسم العلامة",
            text: "نبرة وأسلوب بصري ورسالة متسقة عبر القنوات، ليبدو كل منشور من العلامة نفسها.",
          },
        ],
      },
      chips: {
        label: "القنوات والصيغ",
        items: [
          "إنستغرام",
          "تيك توك",
          "لينكدإن",
          "سناب شات",
          "يوتيوب شورتس",
          "ريلز",
          "كاروسيل",
          "تقويم المحتوى",
          "نصوص عربية وإنجليزية",
        ],
      },
      process: {
        eyebrow: "كيف نعمل",
        title: "الفكرة، الإنتاج، النشر.",
        steps: [
          {
            title: "مراجعة الأهداف والمحتوى",
            text: "ننظر إلى قنواتك الحالية وجمهورك وأهدافك، ونتفق على ما يجب أن يحققه المحتوى.",
          },
          {
            title: "التخطيط",
            text: "نحدّد محاور المحتوى والصيغ وتقويماً شهرياً لاعتمادك.",
          },
          {
            title: "الإنتاج",
            text: "ننتج المنشورات والمرئيات والفيديوهات والنصوص ونشاركها معك للمراجعة.",
          },
          {
            title: "النشر والتحسين",
            text: "ننشر، ونراجع ما يحقق أداءً أفضل، ونعدّل خطة الشهر التالي.",
          },
        ],
      },
      outcomes: {
        eyebrow: "ما الذي يتغيّر",
        title: "ما تمنحه خطة محتوى متسقة.",
        items: [
          {
            title: "حضور منتظم",
            text: "نشر مخطط ومنتظم بدلاً من منشورات عشوائية.",
          },
          {
            title: "قيمة أوضح",
            text: "محتوى يشرح ما تقدّمه ولماذا يهم عملاءك.",
          },
          {
            title: "علامة يسهل تمييزها",
            text: "نبرة وأسلوب بصري واحد يمكن التعرف عليه عبر القنوات.",
          },
          {
            title: "محتوى يدعم المبيعات",
            text: "مواضيع وحملات مختارة حول المنتجات والعروض والاستفسارات.",
          },
        ],
      },
      faq: [
        {
          q: "هل تقدّمون الاستراتيجية والإنتاج معاً؟",
          a: "نعم. يمكن أن يشمل العمل توليد الأفكار والتخطيط والإنتاج والنشر والإدارة المستمرة بحسب النطاق.",
        },
        {
          q: "هل تكتبون المحتوى بالعربية؟",
          a: "نعم. نكتب العربية لجمهور الخليج، والإنجليزية بشكل مستقل، بدلاً من ترجمة إحداهما عن الأخرى.",
        },
        {
          q: "كيف تُسعَّر إدارة حسابات التواصل؟",
          a: "يعتمد السعر على عدد القنوات وتكرار النشر وحجم المحتوى ومتطلبات الإنتاج، وعادةً يكون تعاوناً شهرياً مستمراً حول نطاق متفق عليه.",
        },
        {
          q: "هل نعتمد المحتوى قبل نشره؟",
          a: "نعم. نشارك التقويم والمحتوى معك للمراجعة قبل النشر.",
        },
        {
          q: "هل يمكنكم إنتاج فيديوهات بالذكاء الاصطناعي لقنواتنا؟",
          a: "نعم. يمكن أن يكون إنتاج الفيديو بالذكاء الاصطناعي جزءاً من خطة المحتوى، للريلز وأفلام المنتجات والحملات.",
        },
        {
          q: "هل تديرون الإعلانات الممولة؟",
          a: "تركيزنا على المحتوى والحملات وإدارة القنوات، ويمكن مناقشة احتياجات الحملات الممولة ضمن النطاق.",
        },
      ],
      cta: {
        title: "بماذا تريد أن تُعرَف علامتك؟",
        text: "أخبرنا عن منتجاتك وجمهورك وقنواتك الحالية، وسنقترح توجّهاً للمحتوى وخطة شهرية عملية.",
        button: "ناقش محتواك",
      },
    },
  },

  // 6 ───────────────────────────────────────────── Web Design (separate intent from SEO)
  {
    kind: "services",
    slug: "web-design",
    image: "web",
    interest: "web",
    related: {
      services: [
        "seo-geo",
        "custom-software-development",
        "whatsapp-ai-automation",
        "ai-video-production",
        "content-social-media",
      ],
      industries: [
        "real-estate",
        "healthcare",
        "construction",
        "wholesale-distribution",
        "facility-property-management",
        "logistics-transport",
      ],
      work: [],
    },
    en: {
      seo: {
        title: "Website Design & Development in Muscat, Oman | IDRAK",
        description:
          "Website design in Muscat, Oman: fast, mobile-first corporate websites and landing pages in Arabic and English, built to turn visits into enquiries.",
      },
      name: "Web Design",
      summary:
        "Corporate websites and landing pages designed to load fast, work on mobile and turn visits into enquiries.",
      hero: {
        eyebrow: "Web design · Muscat, Oman",
        title: "Website Design in Muscat for Companies That Need Enquiries.",
        intro:
          "We design and build corporate websites and landing pages for businesses in Oman: aligned with your brand, fast on mobile, in Arabic and English, and structured so visitors understand your offer and contact you.",
        support:
          "A website should do more than look good. It should lead people to a call, an enquiry or an order.",
      },
      problem: {
        eyebrow: "Common problems",
        title: "When Your Website Looks Fine but Does Not Bring Enquiries.",
        points: [
          "The site is slow or broken on phones, where most of your visitors arrive.",
          "Visitors cannot quickly tell what you offer, for whom, or what to do next.",
          "There is no clear WhatsApp, call or form action on the pages that matter.",
          "The Arabic version is missing, incomplete or reads like a machine translation.",
          "Updating content needs a developer, so the site falls out of date.",
          "Campaigns send traffic to the home page instead of a focused landing page.",
        ],
      },
      offer: {
        eyebrow: "What we build",
        title: "Websites Designed Around the Customer Journey.",
        items: [
          {
            title: "Corporate and business websites",
            text: "Clear company websites that present your services, products, projects and credibility.",
          },
          {
            title: "Landing pages",
            text: "Focused pages for campaigns, launches and offers, with one message and one clear action.",
          },
          {
            title: "Custom web design",
            text: "A design built around your brand and audience, not a generic template.",
          },
          {
            title: "Conversion-focused design",
            text: "Page structure, calls to action, WhatsApp buttons and forms placed where visitors are ready to act.",
          },
          {
            title: "Responsive development",
            text: "Built to work properly on phones, tablets and desktops, in Arabic right-to-left and English.",
          },
          {
            title: "Performance and technical foundations",
            text: "Fast loading, optimised images, clean structure and search-ready technical basics from day one.",
          },
        ],
      },
      chips: {
        label: "Typically included",
        items: [
          "Arabic and English",
          "Mobile-first",
          "WhatsApp and call buttons",
          "Enquiry forms",
          "Fast loading",
          "SEO-ready structure",
          "Analytics setup",
        ],
      },
      process: {
        eyebrow: "How we deliver",
        title: "From Requirements to Launch.",
        steps: [
          {
            title: "Requirements",
            text: "We review your business, audience, competitors and what the website must achieve.",
          },
          {
            title: "Structure and design",
            text: "We plan the pages and content flow, then design the key pages for your review.",
          },
          {
            title: "Build",
            text: "We develop the site, connect forms and WhatsApp, and test it on real devices.",
          },
          {
            title: "Launch and handover",
            text: "We launch, set up analytics and show your team how to keep the content current.",
          },
        ],
      },
      outcomes: {
        eyebrow: "What you get",
        title: "What a Well-Built Website Gives You.",
        items: [
          {
            title: "A clearer first impression",
            text: "Visitors quickly understand who you are and what you offer.",
          },
          {
            title: "More ways to make contact",
            text: "Clear WhatsApp, call and form actions on the pages where people decide.",
          },
          {
            title: "Works on every device",
            text: "A fast, responsive experience in Arabic and English.",
          },
          {
            title: "A base for search visibility",
            text: "Technical foundations that support SEO and GEO work later.",
          },
        ],
      },
      faq: [
        {
          q: "How much does website design cost in Oman?",
          a: "It depends on the number of pages, languages, custom design and features such as forms, integrations or content management. We confirm the scope before the proposal.",
        },
        {
          q: "How long does it take to build a website?",
          a: "It depends on the size of the site and how ready your content is. A landing page is quicker than a full corporate website. The timeline is agreed in the scope.",
        },
        {
          q: "Will the website be in Arabic and English?",
          a: "Yes, if you need both. We build proper right-to-left Arabic pages, not just a translated copy of the English layout.",
        },
        {
          q: "Can we update the website ourselves?",
          a: "Yes, where it fits the project we set up a way for your team to update key content.",
        },
        {
          q: "Is SEO included?",
          a: "Every site is built with SEO-ready technical foundations. Ongoing SEO and GEO work, such as content and local search, is a separate service.",
        },
        {
          q: "Do you redesign existing websites?",
          a: "Yes. We review what is not working on the current site and redesign or rebuild it around your goals.",
        },
      ],
      cta: {
        title: "Is Your Website Bringing You Enquiries?",
        text: "Share your current site or your idea. We will tell you what should change and propose the right scope.",
        button: "Discuss Your Website",
      },
    },
    ar: {
      seo: {
        title: "شركة تصميم مواقع إلكترونية في مسقط، سلطنة عُمان | إدراك",
        description:
          "تصميم مواقع إلكترونية في مسقط وسلطنة عُمان: مواقع شركات وصفحات هبوط سريعة ومتجاوبة مع الجوال، بالعربية والإنجليزية، مصمّمة لتحويل الزيارات إلى استفسارات.",
      },
      name: "تصميم المواقع",
      summary:
        "مواقع شركات وصفحات هبوط سريعة ومتجاوبة مع الجوال، مصمّمة لتحويل الزيارات إلى استفسارات.",
      hero: {
        eyebrow: "تصميم المواقع · مسقط، عُمان",
        title: "تصميم مواقع إلكترونية في مسقط للشركات التي تريد استفسارات.",
        intro:
          "نصمّم ونطوّر مواقع الشركات وصفحات الهبوط للأعمال في عُمان: متوافقة مع علامتك، سريعة على الجوال، بالعربية والإنجليزية، ومبنية ليفهم الزائر عرضك ويتواصل معك.",
        support:
          "الموقع يجب أن يفعل أكثر من أن يبدو جميلاً؛ عليه أن يقود الزائر إلى اتصال أو استفسار أو طلب.",
      },
      problem: {
        eyebrow: "مشكلات شائعة",
        title: "موقعك يبدو جيداً، لكنه لا يجلب استفسارات.",
        points: [
          "الموقع بطيء أو لا يعمل جيداً على الجوال، حيث يصل معظم زوارك.",
          "لا يعرف الزائر بسرعة ماذا تقدّم، ولمن، وما الخطوة التالية.",
          "لا يوجد زر واضح لواتساب أو الاتصال أو نموذج تواصل في الصفحات المهمة.",
          "النسخة العربية غير موجودة أو ناقصة أو تبدو ترجمة آلية.",
          "تحديث المحتوى يحتاج إلى مبرمج، فيتقادم الموقع.",
          "الحملات ترسل الزوار إلى الصفحة الرئيسية بدلاً من صفحة هبوط مركّزة.",
        ],
      },
      offer: {
        eyebrow: "ماذا نبني",
        title: "مواقع مصمّمة حول رحلة العميل.",
        items: [
          {
            title: "مواقع الشركات والأعمال",
            text: "مواقع واضحة تعرض خدماتك ومنتجاتك ومشاريعك وما يبني الثقة بشركتك.",
          },
          {
            title: "صفحات الهبوط",
            text: "صفحات مركّزة للحملات والإطلاقات والعروض، برسالة واحدة وإجراء واحد واضح.",
          },
          {
            title: "تصميم مواقع مخصص",
            text: "تصميم مبني حول علامتك وجمهورك، لا قالب جاهز عام.",
          },
          {
            title: "تصميم يركّز على التحويل",
            text: "بنية الصفحات وأزرار الدعوة لاتخاذ إجراء وأزرار واتساب والنماذج في المكان الذي يكون فيه الزائر مستعداً.",
          },
          {
            title: "تطوير متجاوب",
            text: "يعمل بشكل صحيح على الجوال والأجهزة اللوحية والحاسوب، بالعربية من اليمين إلى اليسار وبالإنجليزية.",
          },
          {
            title: "الأداء والأساس التقني",
            text: "تحميل سريع وصور محسّنة وبنية نظيفة وأساسيات تقنية جاهزة لمحركات البحث من اليوم الأول.",
          },
        ],
      },
      chips: {
        label: "يشمل عادةً",
        items: [
          "العربية والإنجليزية",
          "الجوال أولاً",
          "أزرار واتساب والاتصال",
          "نماذج الاستفسار",
          "تحميل سريع",
          "بنية جاهزة لـ SEO",
          "إعداد التحليلات",
        ],
      },
      process: {
        eyebrow: "كيف نسلّم المشروع",
        title: "من المتطلبات إلى الإطلاق.",
        steps: [
          {
            title: "المتطلبات",
            text: "نراجع عملك وجمهورك ومنافسيك وما يجب أن يحققه الموقع.",
          },
          {
            title: "البنية والتصميم",
            text: "نخطط الصفحات وتسلسل المحتوى، ثم نصمّم الصفحات الرئيسية لمراجعتك.",
          },
          {
            title: "التطوير",
            text: "نطوّر الموقع، ونربط النماذج وواتساب، ونختبره على أجهزة حقيقية.",
          },
          {
            title: "الإطلاق والتسليم",
            text: "نطلق الموقع، ونجهّز التحليلات، ونوضّح لفريقك كيف يحدّث المحتوى.",
          },
        ],
      },
      outcomes: {
        eyebrow: "ما الذي تحصل عليه",
        title: "ما يمنحك إياه موقع مبني جيداً.",
        items: [
          {
            title: "انطباع أول أوضح",
            text: "يفهم الزائر بسرعة من أنتم وماذا تقدّمون.",
          },
          {
            title: "طرق أكثر للتواصل",
            text: "أزرار واضحة لواتساب والاتصال والنماذج في الصفحات التي يتخذ فيها الزائر قراره.",
          },
          {
            title: "يعمل على كل جهاز",
            text: "تجربة سريعة ومتجاوبة بالعربية والإنجليزية.",
          },
          {
            title: "أساس للظهور في البحث",
            text: "بنية تقنية تدعم أعمال SEO وGEO لاحقاً.",
          },
        ],
      },
      faq: [
        {
          q: "كم تكلفة تصميم موقع إلكتروني في عُمان؟",
          a: "تعتمد على عدد الصفحات واللغات ودرجة تخصيص التصميم والميزات مثل النماذج والتكاملات وإدارة المحتوى. نحدّد النطاق قبل تقديم العرض.",
        },
        {
          q: "كم يستغرق إنشاء الموقع؟",
          a: "تعتمد المدة على حجم الموقع وجاهزية المحتوى. صفحة الهبوط أسرع من موقع شركة متكامل، ونتفق على الجدول الزمني ضمن النطاق.",
        },
        {
          q: "هل يكون الموقع بالعربية والإنجليزية؟",
          a: "نعم، إذا كنت تحتاج إلى اللغتين. نبني صفحات عربية حقيقية من اليمين إلى اليسار، لا مجرد نسخة مترجمة من التصميم الإنجليزي.",
        },
        {
          q: "هل يمكننا تحديث الموقع بأنفسنا؟",
          a: "نعم، حيث يناسب المشروع نجهّز طريقة يستطيع بها فريقك تحديث المحتوى الأساسي.",
        },
        {
          q: "هل خدمة SEO مشمولة؟",
          a: "كل موقع يُبنى على أساس تقني جاهز لمحركات البحث. أما أعمال SEO وGEO المستمرة، مثل المحتوى والبحث المحلي، فهي خدمة منفصلة.",
        },
        {
          q: "هل تعيدون تصميم المواقع الحالية؟",
          a: "نعم. نراجع ما لا يعمل في موقعك الحالي، ثم نعيد تصميمه أو بناءه حول أهدافك.",
        },
      ],
      cta: {
        title: "هل يجلب لك موقعك استفسارات؟",
        text: "شاركنا موقعك الحالي أو فكرتك، وسنخبرك بما يجب أن يتغيّر ونقترح النطاق المناسب.",
        button: "ناقش موقعك الإلكتروني",
      },
    },
  },

  // 7 ───────────────────────────────────────────── SEO & GEO
  {
    kind: "services",
    slug: "seo-geo",
    image: "agent",
    interest: "web",
    related: {
      services: ["web-design", "content-social-media"],
      industries: ["real-estate", "healthcare", "facility-property-management"],
      work: [],
    },
    en: {
      seo: {
        title: "SEO Services in Oman: Local SEO, GEO & AI Search | IDRAK",
        description:
          "SEO services in Oman: technical, local and on-page SEO plus GEO and AEO, so Muscat businesses appear on Google, Maps and in AI answers like ChatGPT.",
      },
      name: "SEO & GEO",
      summary:
        "Technical, local and content SEO, plus GEO so your business appears in Google and in AI-generated answers.",
      hero: {
        eyebrow: "SEO & GEO · Oman",
        title: "SEO Services in Oman, Built for Google and AI Search.",
        intro:
          "We help businesses in Muscat and across Oman get found: technical, local, on-page and content SEO for Google, plus GEO and AEO so your business can appear in AI-generated answers from tools like ChatGPT, Gemini and Google AI Overviews.",
        support:
          "Visibility is the goal, but enquiries are the point. We focus on the searches your buyers actually make.",
      },
      problem: {
        eyebrow: "Why you are not found",
        title: "When Customers Search and Find Your Competitors.",
        points: [
          "Your business does not appear when people in Oman search for what you sell, in Arabic or English.",
          "Your Google Business Profile is incomplete, so you are missing from local and map results.",
          "Technical issues such as slow pages, missing Arabic versions or poor indexing hold the site back.",
          "Service pages are thin or combined into one page, so Google cannot match them to specific searches.",
          "AI assistants answer questions about your industry without mentioning your company.",
        ],
      },
      offer: {
        eyebrow: "What is included",
        title: "Search Visibility for Google and AI Answers.",
        items: [
          {
            title: "Technical SEO",
            text: "Site speed, indexing, structured data, hreflang for Arabic and English, sitemaps and fixing crawl issues.",
          },
          {
            title: "Local SEO",
            text: "Google Business Profile, Maps visibility, local pages and consistent business details for Muscat and other cities.",
          },
          {
            title: "On-page SEO",
            text: "Titles, headings, page structure and internal links aligned to the searches each page should win.",
          },
          {
            title: "Content SEO",
            text: "Service, industry and guide content in Arabic and English, written around real buyer questions.",
          },
          {
            title: "Search strategy and keyword research",
            text: "Which searches matter in Oman, which pages you need, and the order to build them in.",
          },
          {
            title: "GEO and AI search optimisation",
            text: "Structuring content so AI tools can understand, trust and cite your business in their answers.",
          },
          {
            title: "AEO (answer engine optimisation)",
            text: "Clear, well-structured answers and FAQ content that search engines and assistants can quote directly.",
          },
        ],
      },
      chips: {
        label: "What we work on",
        items: [
          "Google Business Profile",
          "Arabic keyword research",
          "Structured data",
          "hreflang",
          "Core Web Vitals",
          "Internal linking",
          "FAQ and answer content",
          "AI Overviews",
          "ChatGPT and Gemini visibility",
        ],
      },
      process: {
        eyebrow: "How it runs",
        title: "Audit, Fix, Build, Measure.",
        steps: [
          {
            title: "Audit",
            text: "We review your site, technical health, local presence, competitors and current visibility in search and AI answers.",
          },
          {
            title: "Strategy",
            text: "We choose the target searches in Arabic and English and plan the pages and fixes needed.",
          },
          {
            title: "Fix and build",
            text: "We resolve technical issues, optimise existing pages and create the content that is missing.",
          },
          {
            title: "Measure and refine",
            text: "We track rankings, traffic and enquiries, and adjust the plan month by month.",
          },
        ],
      },
      outcomes: {
        eyebrow: "What you get",
        title: "What Consistent SEO and GEO Work Builds.",
        items: [
          {
            title: "Visibility for the right searches",
            text: "Pages that match what your buyers in Oman actually search for.",
          },
          {
            title: "A stronger local presence",
            text: "Better presence in Maps and local results where nearby customers look.",
          },
          {
            title: "A chance to appear in AI answers",
            text: "Content structured so AI assistants can find and reference your business.",
          },
          {
            title: "Traffic that can turn into enquiries",
            text: "Search visitors land on pages designed to lead them to contact you.",
          },
        ],
      },
      faq: [
        {
          q: "What is GEO?",
          a: "Generative Engine Optimisation focuses on structuring and improving content so it can be discovered and understood in AI-generated answers and AI-driven search experiences.",
        },
        {
          q: "How long does SEO take to show results?",
          a: "SEO builds over time. Technical fixes and local profile work can help sooner, while content and rankings grow over months. Nobody can honestly guarantee a specific ranking.",
        },
        {
          q: "Do you do SEO in Arabic?",
          a: "Yes. We research Arabic search terms separately from English ones, because people in Oman do not search in direct translations.",
        },
        {
          q: "How are SEO services priced?",
          a: "It depends on the size of the site, the technical work needed, the number of target pages and the content volume. SEO and GEO are usually structured as an ongoing engagement.",
        },
        {
          q: "Can you work on a website you did not build?",
          a: "Yes, as long as we have the access needed to make changes. If the site itself is the main obstacle, we will tell you.",
        },
        {
          q: "Is SEO different from web design?",
          a: "Yes. Web design builds the site and its experience. SEO and GEO are ongoing work to make the right pages discoverable in search and AI answers.",
        },
      ],
      cta: {
        title: "Do Your Customers Find You When They Search?",
        text: "Share your website and the services you want to be found for. We will tell you where you stand and what to fix first.",
        button: "Discuss SEO & GEO",
      },
    },
    ar: {
      seo: {
        title: "خدمات السيو وتحسين محركات البحث في مسقط وعُمان | إدراك",
        description:
          "خدمات السيو وتحسين محركات البحث في عُمان: SEO تقني ومحلي وتحسين المحتوى، مع GEO وAEO ليظهر نشاطك في مسقط على Google والخرائط وإجابات الذكاء الاصطناعي.",
      },
      name: "SEO وGEO",
      summary:
        "تحسين محركات البحث التقني والمحلي والمحتوى، مع GEO ليظهر نشاطك في Google وفي إجابات الذكاء الاصطناعي.",
      hero: {
        eyebrow: "SEO وGEO · عُمان",
        title: "خدمات السيو في عُمان لمحركات البحث والذكاء الاصطناعي.",
        intro:
          "نساعد الشركات في مسقط وسائر عُمان على الظهور: تحسين محركات البحث التقني والمحلي وتحسين الصفحات والمحتوى في Google، إضافة إلى GEO وAEO ليظهر نشاطك في الإجابات التي تولّدها أدوات مثل ChatGPT وGemini وملخصات Google بالذكاء الاصطناعي.",
        support:
          "الظهور هو الوسيلة، والاستفسارات هي الهدف. نركّز على عمليات البحث التي يجريها عملاؤك فعلاً.",
      },
      problem: {
        eyebrow: "لماذا لا يجدونك",
        title: "العميل يبحث، فيجد منافسيك.",
        points: [
          "لا يظهر نشاطك عندما يبحث الناس في عُمان عما تبيعه، بالعربية أو الإنجليزية.",
          "ملف نشاطك التجاري على Google غير مكتمل، فتغيب عن نتائج البحث المحلي والخرائط.",
          "مشكلات تقنية مثل بطء الصفحات أو غياب النسخة العربية أو ضعف الفهرسة تعيق الموقع.",
          "صفحات الخدمات ضعيفة أو مجمّعة في صفحة واحدة، فلا يستطيع Google ربطها بعمليات بحث محددة.",
          "مساعدات الذكاء الاصطناعي تجيب عن أسئلة قطاعك دون أن تذكر شركتك.",
        ],
      },
      offer: {
        eyebrow: "ما يشمله العمل",
        title: "الظهور في Google وفي إجابات الذكاء الاصطناعي.",
        items: [
          {
            title: "SEO تقني",
            text: "سرعة الموقع والفهرسة والبيانات المنظّمة وhreflang للعربية والإنجليزية وخرائط الموقع وإصلاح مشكلات الزحف.",
          },
          {
            title: "SEO محلي",
            text: "ملف النشاط التجاري على Google والظهور في الخرائط والصفحات المحلية وتوحيد بيانات النشاط لمسقط والمدن الأخرى.",
          },
          {
            title: "تحسين الصفحات (On-page)",
            text: "العناوين والترويسات وبنية الصفحة والروابط الداخلية بما يتوافق مع عمليات البحث المستهدفة لكل صفحة.",
          },
          {
            title: "تحسين المحتوى",
            text: "محتوى للخدمات والقطاعات والأدلة بالعربية والإنجليزية، مكتوب حول أسئلة المشترين الحقيقية.",
          },
          {
            title: "استراتيجية البحث وتحليل الكلمات المفتاحية",
            text: "أي عمليات البحث تهم في عُمان، وأي الصفحات تحتاجها، وبأي ترتيب تُبنى.",
          },
          {
            title: "GEO وتحسين الظهور في البحث بالذكاء الاصطناعي",
            text: "هيكلة المحتوى لتتمكن أدوات الذكاء الاصطناعي من فهم نشاطك والثقة به والإشارة إليه في إجاباتها.",
          },
          {
            title: "AEO (تحسين محركات الإجابة)",
            text: "إجابات واضحة ومحتوى أسئلة شائعة منظّم يمكن لمحركات البحث والمساعدات اقتباسه مباشرة.",
          },
        ],
      },
      chips: {
        label: "ما نعمل عليه",
        items: [
          "ملف النشاط التجاري على Google",
          "كلمات مفتاحية عربية",
          "البيانات المنظّمة",
          "hreflang",
          "مؤشرات أداء الويب الأساسية",
          "الروابط الداخلية",
          "محتوى الأسئلة والإجابات",
          "ملخصات Google بالذكاء الاصطناعي",
          "الظهور في ChatGPT وGemini",
        ],
      },
      process: {
        eyebrow: "كيف نعمل",
        title: "تدقيق، إصلاح، بناء، قياس.",
        steps: [
          {
            title: "التدقيق",
            text: "نراجع موقعك وسلامته التقنية وحضورك المحلي ومنافسيك وظهورك الحالي في البحث وإجابات الذكاء الاصطناعي.",
          },
          {
            title: "الاستراتيجية",
            text: "نختار عمليات البحث المستهدفة بالعربية والإنجليزية ونخطط للصفحات والإصلاحات المطلوبة.",
          },
          {
            title: "الإصلاح والبناء",
            text: "نعالج المشكلات التقنية، ونحسّن الصفحات الحالية، وننشئ المحتوى الناقص.",
          },
          {
            title: "القياس والتحسين",
            text: "نتابع الترتيب والزيارات والاستفسارات، ونعدّل الخطة شهراً بعد شهر.",
          },
        ],
      },
      outcomes: {
        eyebrow: "ما الذي تحصل عليه",
        title: "ما يبنيه العمل المستمر على SEO وGEO.",
        items: [
          {
            title: "ظهور في عمليات البحث الصحيحة",
            text: "صفحات تطابق ما يبحث عنه عملاؤك في عُمان فعلاً.",
          },
          {
            title: "حضور محلي أقوى",
            text: "ظهور أفضل في الخرائط ونتائج البحث المحلي حيث يبحث العملاء القريبون.",
          },
          {
            title: "فرصة للظهور في إجابات الذكاء الاصطناعي",
            text: "محتوى منظّم يمكّن مساعدات الذكاء الاصطناعي من إيجاد نشاطك والإشارة إليه.",
          },
          {
            title: "زيارات يمكن أن تتحوّل إلى استفسارات",
            text: "زوار البحث يصلون إلى صفحات مصمّمة لتقودهم إلى التواصل معك.",
          },
        ],
      },
      faq: [
        {
          q: "ما هو GEO؟",
          a: "تحسين الظهور في محركات الذكاء الاصطناعي التوليدي (GEO) يركّز على هيكلة المحتوى وتحسينه ليُكتشف ويُفهم في الإجابات التي يولّدها الذكاء الاصطناعي وتجارب البحث المعتمدة عليه.",
        },
        {
          q: "متى تظهر نتائج السيو؟",
          a: "السيو يتراكم مع الوقت. الإصلاحات التقنية وتحسين الملف المحلي قد تساعد أسرع، بينما ينمو المحتوى والترتيب على مدى أشهر. ولا يمكن لأحد أن يضمن بصدق ترتيباً محدداً.",
        },
        {
          q: "هل تقدّمون السيو باللغة العربية؟",
          a: "نعم. نبحث الكلمات المفتاحية العربية بشكل مستقل عن الإنجليزية، لأن الناس في عُمان لا يبحثون بترجمات حرفية.",
        },
        {
          q: "كيف تُسعَّر خدمات السيو؟",
          a: "يعتمد السعر على حجم الموقع والعمل التقني المطلوب وعدد الصفحات المستهدفة وحجم المحتوى. وعادةً يكون SEO وGEO تعاوناً مستمراً.",
        },
        {
          q: "هل تعملون على موقع لم تبنوه؟",
          a: "نعم، ما دامت لدينا الصلاحيات اللازمة لإجراء التعديلات. وإذا كان الموقع نفسه هو العائق الرئيسي، فسنخبرك بذلك.",
        },
        {
          q: "هل يختلف السيو عن تصميم المواقع؟",
          a: "نعم. تصميم المواقع يبني الموقع وتجربته، أما SEO وGEO فعمل مستمر لجعل الصفحات الصحيحة قابلة للاكتشاف في البحث وإجابات الذكاء الاصطناعي.",
        },
      ],
      cta: {
        title: "هل يجدك عملاؤك عندما يبحثون؟",
        text: "شاركنا موقعك والخدمات التي تريد الظهور بها، وسنخبرك بوضعك الحالي وما يجب إصلاحه أولاً.",
        button: "ناقش SEO وGEO",
      },
    },
  },
];
