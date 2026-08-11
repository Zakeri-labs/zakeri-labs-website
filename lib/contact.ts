import type { Lang } from "@/lib/locales";

export type ContactFaq = {
  question: string;
  answer: string;
};

const CONTACT_FAQS: Record<Lang, ContactFaq[]> = {
  en: [
    {
      question: "Do we need AI for this?",
      answer:
        "No. Many operational problems can be solved through clearer process design, workflow rules, integration, and automation without AI. AI is considered only when it creates measurable value.",
    },
    {
      question: "We already use a CRM or ERP. Can you still help?",
      answer:
        "Yes. Existing software may remain in place. The issue may be the workflow design, team adoption, management visibility, or how information moves between systems.",
    },
    {
      question: "Our business process is very specific. Will this work?",
      answer:
        "The real process is mapped before any technology is proposed. That makes it possible to design around your responsibilities, approvals, exceptions, and operating reality.",
    },
    {
      question: "Do we have to replace our current software?",
      answer:
        "Not automatically. Existing tools should be retained when they are suitable. The first priority is improving the process and deciding what actually needs to change.",
    },
    {
      question: "Can we start with one workflow?",
      answer:
        "Yes. Starting with one high-value workflow is often more practical than beginning with a large transformation project. A defined Paid Pilot may be recommended when appropriate.",
    },
    {
      question: "What happens during an Operations Assessment?",
      answer:
        "I review the current process, bottlenecks, ownership, manual work, visibility gaps, and useful automation opportunities, then identify a practical priority for action.",
    },
    {
      question: "What types of businesses do you work with?",
      answer:
        "The work is intended for growing businesses operating in Oman with recurring operational workflows, especially where follow-up, reporting, approvals, or information flow are difficult to manage.",
    },
  ],
  ar: [
    {
      question: "هل نحتاج إلى الذكاء الاصطناعي؟",
      answer:
        "لا. يمكن حل كثير من المشكلات التشغيلية عبر تصميم أوضح للعمليات وقواعد سير العمل والتكامل والأتمتة من دون ذكاء اصطناعي. نلجأ إليه فقط عندما يحقق قيمة قابلة للقياس.",
    },
    {
      question: "نستخدم بالفعل CRM أو ERP. هل ما زال بإمكانك مساعدتنا؟",
      answer:
        "نعم. قد تبقى الأنظمة الحالية كما هي، لأن المشكلة قد تكون في تصميم سير العمل أو تبنّي الفريق أو وضوح المعلومات للإدارة أو انتقال البيانات بين الأنظمة.",
    },
    {
      question: "عمليات شركتنا خاصة جداً. هل سيناسبنا هذا النهج؟",
      answer:
        "نرسم العملية الفعلية قبل اقتراح أي تقنية، وبذلك يمكن تصميم الحل وفق المسؤوليات والموافقات والاستثناءات وطبيعة التشغيل في شركتك.",
    },
    {
      question: "هل يجب أن نستبدل برامجنا الحالية؟",
      answer:
        "ليس بالضرورة. نُبقي الأدوات الحالية عندما تكون مناسبة. الأولوية هي تحسين العملية وتحديد ما يحتاج فعلاً إلى التغيير.",
    },
    {
      question: "هل يمكن أن نبدأ بسير عمل واحد؟",
      answer:
        "نعم. غالباً ما يكون البدء بسير عمل واحد عالي القيمة أكثر عملية من إطلاق مشروع تحوّل كبير. وقد نوصي بتجربة مدفوعة محددة النطاق عندما يكون ذلك مناسباً.",
    },
    {
      question: "ماذا يحدث خلال تقييم العمليات؟",
      answer:
        "أراجع العملية الحالية والاختناقات والمسؤوليات والعمل اليدوي وفجوات الرؤية وفرص الأتمتة المفيدة، ثم أحدد أولوية عملية للخطوة التالية.",
    },
    {
      question: "ما أنواع الشركات التي تعمل معها؟",
      answer:
        "هذا العمل مناسب للشركات النامية في عُمان التي لديها عمليات تشغيلية متكررة، خصوصاً عندما يصعب إدارة المتابعة أو التقارير أو الموافقات أو تدفّق المعلومات.",
    },
  ],
  fa: [
    {
      question: "آیا برای این کار به هوش مصنوعی نیاز داریم؟",
      answer:
        "خیر. بسیاری از مسائل عملیاتی با طراحی بهتر فرایند، قواعد گردش‌کار، یکپارچه‌سازی و اتوماسیون و بدون هوش مصنوعی حل می‌شوند. هوش مصنوعی فقط زمانی بررسی می‌شود که ارزش قابل‌اندازه‌گیری ایجاد کند.",
    },
    {
      question: "ما از CRM یا ERP استفاده می‌کنیم. باز هم می‌توانید کمک کنید؟",
      answer:
        "بله. ممکن است نرم‌افزار فعلی حفظ شود و مسئله اصلی در طراحی گردش‌کار، پذیرش تیم، دید مدیریتی یا نحوه جریان اطلاعات میان سیستم‌ها باشد.",
    },
    {
      question: "فرایند کسب‌وکار ما بسیار خاص است. آیا این رویکرد مناسب است؟",
      answer:
        "پیش از پیشنهاد هر فناوری، فرایند واقعی بررسی و ترسیم می‌شود تا راهکار با مسئولیت‌ها، تأییدها، استثناها و واقعیت عملیاتی شما هماهنگ باشد.",
    },
    {
      question: "آیا باید نرم‌افزار فعلی خود را عوض کنیم؟",
      answer:
        "نه لزوماً. هرجا ابزارهای فعلی مناسب باشند حفظ می‌شوند. اولویت نخست، بهبود فرایند و مشخص‌کردن بخش‌هایی است که واقعاً نیاز به تغییر دارند.",
    },
    {
      question: "آیا می‌توانیم با یک گردش‌کار شروع کنیم؟",
      answer:
        "بله. شروع با یک گردش‌کار ارزشمند معمولاً عملی‌تر از آغاز یک پروژه تحول بزرگ است. در صورت مناسب‌بودن، ممکن است یک پایلوت پولی با محدوده مشخص پیشنهاد شود.",
    },
    {
      question: "در ارزیابی عملیات چه اتفاقی می‌افتد؟",
      answer:
        "فرایند فعلی، گلوگاه‌ها، مسئولیت‌ها، کارهای دستی، شکاف‌های دید مدیریتی و فرصت‌های مفید اتوماسیون را بررسی می‌کنم و سپس یک اولویت عملی برای اقدام مشخص می‌کنم.",
    },
    {
      question: "با چه نوع کسب‌وکارهایی کار می‌کنید؟",
      answer:
        "این خدمات برای کسب‌وکارهای در حال رشد در عمان با گردش‌کارهای عملیاتی تکرارشونده مناسب است؛ به‌ویژه زمانی که مدیریت پیگیری، گزارش‌دهی، تأییدها یا جریان اطلاعات دشوار باشد.",
    },
  ],
};

export function getContactFaqs(lang: Lang): ContactFaq[] {
  return CONTACT_FAQS[lang];
}
