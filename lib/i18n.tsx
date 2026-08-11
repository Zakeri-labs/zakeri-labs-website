"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";

import { getDirection, getLangFromPathname, localizePathname, type Lang } from "@/lib/locales";

export type { Lang } from "@/lib/locales";

type Entry = { en: string; ar: string; fa: string };

/**
 * All site copy lives here, co-located per key so the three languages stay in
 * sync (no key drift). English is the source / default. Arabic and Farsi use
 * natural marketing phrasing rather than literal translation.
 */
const M = {
  /* ---------- Nav ---------- */
  "nav.home": { en: "Home", ar: "الرئيسية", fa: "خانه" },
  "nav.services": { en: "Services", ar: "الخدمات", fa: "خدمات" },
  "nav.pricing": {
    en: "Engagement Options",
    ar: "خيارات التعاون",
    fa: "گزینه‌های همکاری",
  },
  "nav.insights": { en: "Selected Work", ar: "أعمال مختارة", fa: "گزیده پروژه‌ها" },
  "nav.about": { en: "About", ar: "عن زاكري", fa: "درباره زاکری" },
  "nav.contact": { en: "Contact", ar: "تواصل معنا", fa: "تماس" },
  "nav.caseStudies": { en: "Selected Work", ar: "أعمال مختارة", fa: "گزیده پروژه‌ها" },
  "nav.openMenu": { en: "Open menu", ar: "افتح القائمة", fa: "باز کردن منو" },
  "nav.navigation": { en: "Navigation", ar: "التنقّل", fa: "پیمایش" },

  /* ---------- Shared CTAs ---------- */
  "cta.whatsapp": {
    en: "Contact on WhatsApp",
    ar: "تواصل عبر واتساب",
    fa: "تماس از طریق واتساپ",
  },
  "cta.system": { en: "See the System", ar: "شاهد النظام", fa: "مشاهده‌ی سیستم" },
  "cta.send": { en: "Send Request", ar: "إرسال الطلب", fa: "ارسال درخواست" },
  "cta.work": { en: "Work With Us", ar: "اعمل معنا", fa: "همکاری با ما" },
  "lang.label": { en: "Language", ar: "اللغة", fa: "زبان" },

  /* ---------- Homepage CTAs ---------- */
  "home.cta.assessment": {
    en: "Book an Operations Assessment",
    ar: "احجز تقييماً للعمليات",
    fa: "رزرو ارزیابی عملیات",
  },
  "home.cta.services": {
    en: "See How I Help",
    ar: "تعرّف على طريقة العمل",
    fa: "ببینید چگونه کمک می‌کنم",
  },
  "home.cta.workflow": {
    en: "Discuss the First Workflow",
    ar: "ناقش أول سير عمل",
    fa: "گفت‌وگو درباره اولین گردش‌کار",
  },
  "home.cta.approach": {
    en: "Learn About the Approach",
    ar: "تعرّف على منهجية العمل",
    fa: "آشنایی با رویکرد کاری",
  },
  "site.tagline": {
    en: "Business Systems & Automation in Oman",
    ar: "أنظمة الأعمال والأتمتة في عُمان",
    fa: "سیستم‌های کسب‌وکار و اتوماسیون در عمان",
  },

  /* ---------- Hero ---------- */
  "hero.badge": {
    en: "Business Systems & Automation Consultant in Oman",
    ar: "مستشار أنظمة الأعمال والأتمتة في عُمان",
    fa: "مشاور سیستم‌های کسب‌وکار و اتوماسیون در عمان",
  },
  "hero.titlePre": {
    en: "Turn Manual Operations Into ",
    ar: "حوّل العمليات اليدوية إلى ",
    fa: "عملیات دستی را به ",
  },
  "hero.titleHl": {
    en: "Visible, Automated Business Systems",
    ar: "أنظمة أعمال واضحة ومؤتمتة",
    fa: "سیستم‌های شفاف و خودکار کسب‌وکار",
  },
  "hero.titlePost": {
    en: " in Oman.",
    ar: " في عُمان.",
    fa: " در عمان تبدیل کنید.",
  },
  "hero.desc": {
    en: "I help growing businesses replace scattered information, manual follow-up, and unclear workflows with systems that make work visible, trackable, and easier to manage.",
    ar: "أساعد الشركات النامية على استبدال المعلومات المبعثرة والمتابعة اليدوية وسير العمل غير الواضح بأنظمة تجعل العمل مرئياً وقابلاً للتتبّع وأسهل في الإدارة.",
    fa: "به کسب‌وکارهای در حال رشد کمک می‌کنم اطلاعات پراکنده، پیگیری دستی و گردش‌کارهای نامشخص را با سیستم‌هایی جایگزین کنند که کار را شفاف، قابل پیگیری و آسان‌تر برای مدیریت می‌کند.",
  },
  "hero.note": {
    en: "For founders and managers who need better control as the business grows.",
    ar: "للمؤسسين والمديرين الذين يحتاجون تحكّماً أفضل مع نمو الشركة.",
    fa: "برای بنیان‌گذاران و مدیرانی که هم‌زمان با رشد شرکت به کنترل بیشتری نیاز دارند.",
  },
  "hero.imageAlt": {
    en: "Business operations dashboard showing connected workflows and status visibility",
    ar: "لوحة عمليات أعمال تعرض سير العمل المترابط ووضوح الحالات",
    fa: "داشبورد عملیات کسب‌وکار با نمایش گردش‌کارهای متصل و وضعیت‌ها",
  },

  /* ---------- Trust Bar ---------- */
  "trust.badge": {
    en: "Core Capabilities",
    ar: "القدرات الأساسية",
    fa: "توانمندی‌های اصلی",
  },
  "trust.title": {
    en: "The Capabilities Behind Better-Controlled Operations",
    ar: "القدرات اللازمة لعمليات أكثر وضوحاً وتحكّماً",
    fa: "توانمندی‌های لازم برای عملیات شفاف‌تر و قابل‌کنترل‌تر",
  },
  "trust.desc": {
    en: "A practical mix of process design, systems, automation, and management visibility—applied to the operational problem that matters most.",
    ar: "مزيج عملي من تصميم العمليات والأنظمة والأتمتة ووضوح الإدارة، يُطبّق على المشكلة التشغيلية الأكثر أهمية.",
    fa: "ترکیبی کاربردی از طراحی فرایند، سیستم، اتوماسیون و دید مدیریتی که روی مهم‌ترین مسئله عملیاتی تمرکز می‌کند.",
  },
  "trust.foot": {
    en: "Start with the business problem. Improve the process. Build the system. Automate only what creates value.",
    ar: "ابدأ بمشكلة العمل، ثم حسّن العملية، وابنِ النظام، وأتمت فقط ما يخلق قيمة.",
    fa: "از مسئله کسب‌وکار شروع کنید، فرایند را بهبود دهید، سیستم را بسازید و فقط چیزی را خودکار کنید که ارزش ایجاد می‌کند.",
  },
  "trust.item.strategy": {
    en: "Business Process",
    ar: "عمليات الأعمال",
    fa: "فرایند کسب‌وکار",
  },
  "trust.item.conversion": {
    en: "Workflow Systems",
    ar: "أنظمة سير العمل",
    fa: "سیستم‌های گردش‌کار",
  },
  "trust.item.seo": {
    en: "Automation",
    ar: "الأتمتة",
    fa: "اتوماسیون",
  },
  "trust.item.aiSearch": {
    en: "Management Visibility",
    ar: "وضوح الإدارة",
    fa: "دید مدیریتی",
  },
  "trust.item.aiContent": {
    en: "CRM Workflows",
    ar: "سير عمل CRM",
    fa: "گردش‌کار CRM",
  },
  "trust.item.lead": {
    en: "Dashboards & KPIs",
    ar: "لوحات المعلومات وKPIs",
    fa: "داشبورد و KPI",
  },
  "trust.item.webapp": {
    en: "System Integration",
    ar: "تكامل الأنظمة",
    fa: "یکپارچه‌سازی سیستم‌ها",
  },
  "trust.item.analytics": {
    en: "Practical AI",
    ar: "ذكاء اصطناعي عملي",
    fa: "هوش مصنوعی کاربردی",
  },

  /* ---------- Problem ---------- */
  "problem.badge": { en: "Operational Friction", ar: "احتكاك تشغيلي", fa: "اصطکاک عملیاتی" },
  "problem.title1": {
    en: "Growth Becomes Harder When",
    ar: "يصبح النمو أصعب عندما",
    fa: "رشد سخت‌تر می‌شود وقتی",
  },
  "problem.title2": {
    en: "Work Depends on Manual Follow-Up.",
    ar: "يعتمد العمل على المتابعة اليدوية.",
    fa: "کار به پیگیری دستی وابسته است.",
  },
  "problem.1.title": {
    en: "Scattered Information",
    ar: "معلومات مبعثرة",
    fa: "اطلاعات پراکنده",
  },
  "problem.1.desc": {
    en: "Important details live across WhatsApp, Excel, email, and individual employees.",
    ar: "توجد التفاصيل المهمة بين واتساب وExcel والبريد الإلكتروني والموظفين.",
    fa: "جزئیات مهم بین واتساپ، Excel، ایمیل و افراد مختلف پراکنده است.",
  },
  "problem.2.title": { en: "Status Chasing", ar: "ملاحقة حالة العمل", fa: "پیگیری مداوم وضعیت" },
  "problem.2.desc": {
    en: "Management must ask several people before understanding what is happening.",
    ar: "تضطر الإدارة إلى سؤال عدة أشخاص قبل معرفة ما يحدث.",
    fa: "مدیریت برای فهمیدن وضعیت باید از چند نفر سؤال کند.",
  },
  "problem.3.title": { en: "Hidden Approvals", ar: "موافقات غير واضحة", fa: "تأییدهای پنهان" },
  "problem.3.desc": {
    en: "Decisions and approvals wait inside messages and inboxes without clear ownership.",
    ar: "تنتظر القرارات والموافقات داخل الرسائل دون مسؤول واضح عنها.",
    fa: "تصمیم‌ها و تأییدها بدون مسئول مشخص در پیام‌ها و صندوق‌های ورودی متوقف می‌مانند.",
  },
  "problem.4.title": {
    en: "Key-Person Dependency",
    ar: "الاعتماد على شخص محوري",
    fa: "وابستگی به فرد کلیدی",
  },
  "problem.4.desc": {
    en: "The workflow slows down when the person who remembers everything is unavailable.",
    ar: "يتباطأ سير العمل عند غياب الشخص الذي يتذكّر كل التفاصيل.",
    fa: "وقتی فردی که همه جزئیات را به خاطر دارد حضور ندارد، کار کند می‌شود.",
  },
  "problem.cta": {
    en: "Identify the Operational Bottleneck",
    ar: "حدّد عنق الزجاجة التشغيلي",
    fa: "شناسایی گلوگاه عملیاتی",
  },

  /* ---------- Solution ---------- */
  "solution.badge": { en: "Operational Control", ar: "تحكّم تشغيلي", fa: "کنترل عملیاتی" },
  "solution.title": {
    en: "Systems That Bring the Right Information to Management",
    ar: "أنظمة توصل المعلومات الصحيحة إلى الإدارة",
    fa: "سیستم‌هایی که اطلاعات درست را به مدیریت می‌رسانند",
  },
  "solution.1.title": {
    en: "Clear Ownership",
    ar: "مسؤولية واضحة",
    fa: "مسئولیت روشن",
  },
  "solution.1.desc": {
    en: "Every important task has an owner, deadline, and visible status.",
    ar: "لكل عمل مهم مسؤول وموعد نهائي وحالة واضحة.",
    fa: "هر کار مهم، مسئول، موعد و وضعیت مشخص دارد.",
  },
  "solution.2.title": {
    en: "Structured Workflows",
    ar: "سير عمل منظّم",
    fa: "گردش‌کار ساختاریافته",
  },
  "solution.2.desc": {
    en: "Work moves through defined steps instead of depending on memory.",
    ar: "ينتقل العمل عبر خطوات محددة بدلاً من الاعتماد على الذاكرة.",
    fa: "کار به‌جای وابستگی به حافظه، از مراحل مشخص عبور می‌کند.",
  },
  "solution.3.title": {
    en: "Reminders & Escalations",
    ar: "تذكيرات وتصعيدات",
    fa: "یادآوری و ارجاع",
  },
  "solution.3.desc": {
    en: "The system follows up before deadlines, approvals, or leads are missed.",
    ar: "يتابع النظام قبل فوات المواعيد أو الموافقات أو العملاء المحتملين.",
    fa: "سیستم پیش از فراموش‌شدن موعدها، تأییدها یا لیدها پیگیری می‌کند.",
  },
  "solution.4.title": {
    en: "Management Dashboards",
    ar: "لوحات معلومات إدارية",
    fa: "داشبوردهای مدیریتی",
  },
  "solution.4.desc": {
    en: "Important status, exceptions, and delays become visible in one place.",
    ar: "تظهر الحالات المهمة والاستثناءات والتأخيرات في مكان واحد.",
    fa: "وضعیت‌های مهم، استثناها و تأخیرها در یک محل دیده می‌شوند.",
  },
  "solution.5.title": {
    en: "Consistent Reporting",
    ar: "تقارير منتظمة",
    fa: "گزارش‌دهی منظم",
  },
  "solution.5.desc": {
    en: "Reports come from live workflow data instead of manual assembly.",
    ar: "تأتي التقارير من بيانات سير العمل الفعلية بدلاً من إعدادها يدوياً.",
    fa: "گزارش‌ها به‌جای آماده‌سازی دستی، از داده‌های زنده گردش‌کار تولید می‌شوند.",
  },
  "solution.6.title": {
    en: "Practical Automation",
    ar: "أتمتة عملية",
    fa: "اتوماسیون کاربردی",
  },
  "solution.6.desc": {
    en: "Integrations, automation, and AI are used only where they improve the process.",
    ar: "تُستخدم التكاملات والأتمتة والذكاء الاصطناعي فقط عندما تحسّن العملية.",
    fa: "یکپارچه‌سازی، اتوماسیون و هوش مصنوعی فقط جایی استفاده می‌شوند که فرایند را بهتر کنند.",
  },
  "solution.cta": {
    en: "Discuss the First Workflow",
    ar: "ناقش أول سير عمل",
    fa: "گفت‌وگو درباره اولین گردش‌کار",
  },

  /* ---------- Bridge ---------- */
  "bridge.diagnose": { en: "Problem", ar: "المشكلة", fa: "مسئله" },
  "bridge.structure": { en: "Process", ar: "العملية", fa: "فرایند" },
  "bridge.convert": { en: "System", ar: "النظام", fa: "سیستم" },

  /* ---------- Growth Engines (home services) ---------- */
  "engines.badge": { en: "How I Help", ar: "كيف أساعدك", fa: "چگونه کمک می‌کنم" },
  "engines.title": {
    en: "A Practical Path From Operational Problem to Working System",
    ar: "مسار عملي من المشكلة التشغيلية إلى نظام يعمل",
    fa: "مسیری کاربردی از مسئله عملیاتی تا سیستم قابل‌استفاده",
  },
  "engines.desc": {
    en: "Start small, prove value, then expand what works. The technology follows the process—not the other way around.",
    ar: "ابدأ بنطاق صغير، وأثبت القيمة، ثم وسّع ما ينجح. التقنية تتبع العملية، وليس العكس.",
    fa: "کوچک شروع کنید، ارزش را ثابت کنید و سپس بخش‌های موفق را گسترش دهید. فناوری از فرایند پیروی می‌کند، نه برعکس.",
  },
  "engines.1.title": { en: "Operational Assessment", ar: "تقييم العمليات", fa: "ارزیابی عملیات" },
  "engines.1.desc": {
    en: "Map the current workflow, identify the real bottleneck, and define the first improvement worth making.",
    ar: "ارسم سير العمل الحالي، وحدّد عنق الزجاجة الحقيقي، واختر أول تحسين يستحق التنفيذ.",
    fa: "گردش‌کار فعلی را ترسیم کنید، گلوگاه واقعی را بیابید و اولین بهبود ارزشمند را مشخص کنید.",
  },
  "engines.1.cta": { en: "Start With Assessment", ar: "ابدأ بالتقييم", fa: "شروع با ارزیابی" },
  "engines.2.title": { en: "Paid Pilot", ar: "مشروع تجريبي مدفوع", fa: "پایلوت پولی" },
  "engines.2.desc": {
    en: "Choose one high-value workflow and build a limited solution that can be tested with the real team.",
    ar: "اختر سير عمل عالي القيمة وابنِ حلاً محدود النطاق يمكن اختباره مع الفريق الفعلي.",
    fa: "یک گردش‌کار باارزش را انتخاب کنید و راهکاری محدود بسازید که با تیم واقعی قابل‌آزمایش باشد.",
  },
  "engines.2.cta": {
    en: "Plan a Pilot",
    ar: "خطّط للمشروع التجريبي",
    fa: "برنامه‌ریزی پایلوت",
  },
  "engines.3.title": {
    en: "Implementation",
    ar: "التنفيذ",
    fa: "پیاده‌سازی",
  },
  "engines.3.desc": {
    en: "Expand the proven workflow into dashboards, CRM improvements, integrations, automation, and reporting.",
    ar: "وسّع سير العمل المثبت إلى لوحات معلومات وتحسينات CRM وتكاملات وأتمتة وتقارير.",
    fa: "گردش‌کار اثبات‌شده را به داشبورد، بهبود CRM، یکپارچه‌سازی، اتوماسیون و گزارش‌دهی گسترش دهید.",
  },
  "engines.3.cta": { en: "Build the System", ar: "ابنِ النظام", fa: "ساخت سیستم" },
  "engines.4.title": {
    en: "Ongoing Optimization",
    ar: "التحسين المستمر",
    fa: "بهینه‌سازی مستمر",
  },
  "engines.4.desc": {
    en: "Review adoption, refine the workflow, improve reporting, and add automation only when it creates more value.",
    ar: "راجع التبنّي، وحسّن سير العمل والتقارير، وأضف الأتمتة فقط عندما تحقق قيمة أكبر.",
    fa: "میزان استفاده را بررسی کنید، گردش‌کار و گزارش‌دهی را بهبود دهید و فقط در صورت ایجاد ارزش بیشتر اتوماسیون اضافه کنید.",
  },
  "engines.4.cta": {
    en: "Improve Over Time",
    ar: "حسّن باستمرار",
    fa: "بهبود مستمر",
  },
  "engines.cta": {
    en: "Explore Services",
    ar: "استكشف الخدمات",
    fa: "مشاهده خدمات",
  },

  /* ---------- Case Studies ---------- */
  "homeCases.badge": { en: "Selected Work", ar: "أعمال مختارة", fa: "گزیده پروژه‌ها" },
  "homeCases.title": {
    en: "Selected Digital Projects",
    ar: "مشاريع رقمية مختارة",
    fa: "پروژه‌های دیجیتال منتخب",
  },
  "homeCases.desc": {
    en: "A selection of website and digital delivery projects completed for businesses and professionals.",
    ar: "مجموعة من مشاريع المواقع والتنفيذ الرقمي التي أُنجزت للشركات والمهنيين.",
    fa: "گزیده‌ای از پروژه‌های وب‌سایت و اجرای دیجیتال برای کسب‌وکارها و متخصصان.",
  },
  "homeCases.viewAll": {
    en: "View Selected Work",
    ar: "شاهد الأعمال المختارة",
    fa: "مشاهده پروژه‌های منتخب",
  },
  "homeCases.view": { en: "View Project", ar: "شاهد المشروع", fa: "مشاهده پروژه" },
  "homeCases.previous": {
    en: "Previous projects",
    ar: "المشاريع السابقة",
    fa: "پروژه‌های قبلی",
  },
  "homeCases.next": {
    en: "Next projects",
    ar: "المشاريع التالية",
    fa: "پروژه‌های بعدی",
  },
  "cases.badge": { en: "Selected Work", ar: "أعمال مختارة", fa: "گزیده پروژه‌ها" },
  "cases.pageTitle": {
    en: "Selected Work & Digital Systems",
    ar: "أعمال مختارة وأنظمة رقمية",
    fa: "گزیده پروژه‌ها و سیستم‌های دیجیتال",
  },
  "cases.desc": {
    en: "A selection of business-facing websites and digital projects that reflect a practical approach to solving communication and interface needs through technology.",
    ar: "مجموعة من المواقع والمشاريع الرقمية الموجّهة للأعمال، وتعكس منهجاً عملياً لحل احتياجات التواصل والواجهات باستخدام التقنية.",
    fa: "گزیده‌ای از وب‌سایت‌ها و پروژه‌های دیجیتال کسب‌وکارمحور که رویکردی عملی به حل نیازهای ارتباطی و رابط کاربری با فناوری را نشان می‌دهند.",
  },
  "cases.projectsTitle": {
    en: "Selected Digital Projects",
    ar: "مشاريع رقمية مختارة",
    fa: "پروژه‌های دیجیتال منتخب",
  },
  "cases.view": { en: "View Project", ar: "شاهد المشروع", fa: "مشاهده پروژه" },
  "cases.ctaBadge": {
    en: "Current Consulting Focus",
    ar: "التركيز الاستشاري الحالي",
    fa: "تمرکز فعلی مشاوره",
  },
  "cases.ctaTitle": {
    en: "Have an Operational Workflow That Needs Better Visibility or Automation?",
    ar: "هل لديك سير عمل تشغيلي يحتاج إلى وضوح أو أتمتة أفضل؟",
    fa: "آیا یک گردش‌کار عملیاتی دارید که به شفافیت یا اتوماسیون بهتری نیاز دارد؟",
  },
  "cases.ctaDesc": {
    en: "The selected work above reflects digital delivery. For Business Systems and Automation consulting, start with one defined operational problem.",
    ar: "تعكس الأعمال المختارة أعلاه خبرة في التنفيذ الرقمي. وللاستشارات في أنظمة الأعمال والأتمتة، ابدأ بمشكلة تشغيلية واحدة محددة.",
    fa: "پروژه‌های بالا تجربه اجرای دیجیتال را نشان می‌دهند. برای مشاوره سیستم‌های کسب‌وکار و اتوماسیون، با یک مسئله عملیاتی مشخص شروع کنید.",
  },
  "cases.ctaPrimary": {
    en: "Book an Operations Assessment",
    ar: "احجز تقييماً للعمليات",
    fa: "رزرو ارزیابی عملیات",
  },
  "cases.ctaSecondary": {
    en: "Explore Services",
    ar: "استكشف الخدمات",
    fa: "مشاهده خدمات",
  },
  "cases.relatedLinks": {
    en: "Related pages",
    ar: "صفحات ذات صلة",
    fa: "صفحه‌های مرتبط",
  },
  "cases.linkAbout": {
    en: "About the Approach",
    ar: "عن منهجية العمل",
    fa: "درباره رویکرد کاری",
  },
  "cases.linkHome": {
    en: "Homepage",
    ar: "الصفحة الرئيسية",
    fa: "صفحه اصلی",
  },
  /* ---------- Homepage industries ---------- */
  "industries.badge": {
    en: "Priority Industries",
    ar: "القطاعات ذات الأولوية",
    fa: "صنایع اولویت‌دار",
  },
  "industries.title": {
    en: "Built Around Real Operational Work",
    ar: "حلول مبنية حول العمل التشغيلي الفعلي",
    fa: "متمرکز بر عملیات واقعی کسب‌وکار",
  },
  "industries.desc": {
    en: "Most relevant for growing companies with recurring workflows, multiple handoffs, and a constant need for accurate status visibility.",
    ar: "الأكثر ملاءمة للشركات النامية التي لديها أعمال متكررة وتسليمات بين عدة أطراف وحاجة مستمرة إلى وضوح الحالة.",
    fa: "مناسب‌تر برای شرکت‌های در حال رشدی که گردش‌کارهای تکرارشونده، تحویل کار بین چند نفر و نیاز دائمی به وضعیت دقیق دارند.",
  },
  "industries.1.title": {
    en: "Construction & Engineering",
    ar: "الإنشاءات والهندسة",
    fa: "ساخت‌وساز و مهندسی",
  },
  "industries.1.desc": {
    en: "Project handoffs, approvals, site updates, deadlines, and commercial follow-up.",
    ar: "تسليمات المشاريع والموافقات وتحديثات المواقع والمواعيد والمتابعة التجارية.",
    fa: "تحویل مراحل پروژه، تأییدها، گزارش‌های کارگاه، موعدها و پیگیری تجاری.",
  },
  "industries.2.title": {
    en: "Trading & Distribution",
    ar: "التجارة والتوزيع",
    fa: "تجارت و توزیع",
  },
  "industries.2.desc": {
    en: "Lead handling, quotations, orders, delivery coordination, and management reporting.",
    ar: "إدارة العملاء المحتملين وعروض الأسعار والطلبات وتنسيق التسليم وتقارير الإدارة.",
    fa: "مدیریت لید، پیش‌فاکتور، سفارش، هماهنگی تحویل و گزارش‌دهی مدیریتی.",
  },
  "industries.3.title": {
    en: "Real Estate",
    ar: "العقارات",
    fa: "املاک و مستغلات",
  },
  "industries.3.desc": {
    en: "Lead assignment, viewing follow-up, approvals, pipeline status, and management visibility.",
    ar: "توزيع العملاء ومتابعة المعاينات والموافقات وحالة مسار المبيعات ووضوح الإدارة.",
    fa: "تخصیص لید، پیگیری بازدید، تأییدها، وضعیت قیف فروش و دید مدیریتی.",
  },
  "industries.foot": {
    en: "Also relevant to logistics, fleet and car rental operations, and multi-doctor clinics with repeatable workflows.",
    ar: "مناسب أيضاً للخدمات اللوجستية وإدارة الأساطيل وتأجير السيارات والعيادات متعددة الأطباء ذات سير العمل المتكرر.",
    fa: "همچنین مناسب لجستیک، عملیات ناوگان و اجاره خودرو و کلینیک‌های چندپزشکه با گردش‌کارهای تکرارشونده.",
  },

  /* ---------- Final CTA ---------- */
  "finalcta.badge": {
    en: "Start With One Real Workflow",
    ar: "ابدأ بسير عمل حقيقي واحد",
    fa: "با یک گردش‌کار واقعی شروع کنید",
  },
  "finalcta.title": {
    en: "Growing Team, Too Much Manual Follow-Up?",
    ar: "فريقك ينمو، لكن المتابعة اليدوية ما زالت كثيرة؟",
    fa: "تیم در حال رشد است، اما پیگیری دستی هنوز زیاد است؟",
  },
  "finalcta.desc": {
    en: "If your operations still depend on checking messages, chasing updates, and assembling reports manually, let’s identify the first workflow worth fixing.",
    ar: "إذا كانت عملياتك ما زالت تعتمد على مراجعة الرسائل وملاحقة التحديثات وإعداد التقارير يدوياً، فلنحدّد أول سير عمل يستحق التحسين.",
    fa: "اگر عملیات شما هنوز به بررسی پیام‌ها، پیگیری وضعیت و آماده‌سازی دستی گزارش‌ها وابسته است، بیایید اولین گردش‌کار ارزشمند برای بهبود را مشخص کنیم.",
  },
  "finalcta.note": {
    en: "The first conversation focuses on the business problem, current process, and whether a system or automation can create measurable value.",
    ar: "تركّز المحادثة الأولى على مشكلة العمل والعملية الحالية وما إذا كان النظام أو الأتمتة يمكن أن يحقق قيمة قابلة للقياس.",
    fa: "گفت‌وگوی اول روی مسئله کسب‌وکار، فرایند فعلی و این‌که آیا سیستم یا اتوماسیون ارزش قابل‌اندازه‌گیری ایجاد می‌کند تمرکز دارد.",
  },
  "finalcta.formTitle": {
    en: "Describe the Workflow You Want to Improve",
    ar: "صف سير العمل الذي تريد تحسينه",
    fa: "گردش‌کاری را که می‌خواهید بهتر کنید شرح دهید",
  },
  "finalcta.formDesc": {
    en: "Share where information gets lost, follow-up slows down, or management lacks visibility.",
    ar: "وضّح أين تضيع المعلومات أو تتأخر المتابعة أو تفتقد الإدارة إلى الوضوح.",
    fa: "توضیح دهید اطلاعات کجا گم می‌شود، پیگیری کجا کند است یا مدیریت در کدام بخش دید کافی ندارد.",
  },

  /* ---------- Footer ---------- */
  "footer.slogan": {
    en: "Business systems for clearer, more controlled operations.",
    ar: "أنظمة أعمال لعمليات أوضح وأكثر تحكّماً.",
    fa: "سیستم‌های کسب‌وکار برای عملیات شفاف‌تر و قابل‌کنترل‌تر.",
  },
  "footer.desc": {
    en: "Process improvement, workflow systems, dashboards, integrations, and practical automation for growing businesses in Oman.",
    ar: "تحسين العمليات وأنظمة سير العمل ولوحات المعلومات والتكاملات والأتمتة العملية للشركات النامية في عُمان.",
    fa: "بهبود فرایند، سیستم‌های گردش‌کار، داشبورد، یکپارچه‌سازی و اتوماسیون کاربردی برای کسب‌وکارهای در حال رشد در عمان.",
  },
  "footer.rights": {
    en: "All rights reserved.",
    ar: "جميع الحقوق محفوظة.",
    fa: "تمام حقوق محفوظ است.",
  },
  "footer.col.navigate": { en: "Navigate", ar: "تصفّح", fa: "پیمایش" },
  "footer.col.services": { en: "Services", ar: "الخدمات", fa: "خدمات" },
  "footer.col.contact": { en: "Contact", ar: "تواصل", fa: "تماس" },
  "footer.whatsappUs": { en: "WhatsApp Us", ar: "راسلنا على واتساب", fa: "در واتساپ پیام دهید" },
  "footer.svc.systems": {
    en: "Business Systems & Workflow Design",
    ar: "أنظمة الأعمال وتصميم سير العمل",
    fa: "سیستم‌های کسب‌وکار و طراحی گردش‌کار",
  },
  "footer.svc.automation": {
    en: "Business Automation",
    ar: "أتمتة الأعمال",
    fa: "اتوماسیون کسب‌وکار",
  },
  "footer.svc.crm": {
    en: "CRM / Process Improvement",
    ar: "تحسين CRM والعمليات",
    fa: "بهبود CRM و فرایند",
  },
  "footer.svc.dashboards": {
    en: "Management Dashboards & Integration",
    ar: "لوحات الإدارة والتكامل",
    fa: "داشبورد مدیریتی و یکپارچه‌سازی",
  },
  "footer.svc.ai": {
    en: "Practical AI",
    ar: "ذكاء اصطناعي عملي",
    fa: "هوش مصنوعی کاربردی",
  },

  /* ---------- Homepage assessment form ---------- */
  "homeForm.systems": {
    en: "Main Tools Used (CRM, Excel, WhatsApp…)",
    ar: "الأدوات المستخدمة (CRM، Excel، واتساب…)",
    fa: "ابزارهای اصلی (CRM، Excel، واتساپ و…)",
  },
  "homeForm.challenge": {
    en: "Main Operational Challenge",
    ar: "التحدّي التشغيلي الرئيسي",
    fa: "چالش اصلی عملیاتی",
  },
  "homeForm.challenge.followup": {
    en: "Manual Follow-Up",
    ar: "المتابعة اليدوية",
    fa: "پیگیری دستی",
  },
  "homeForm.challenge.visibility": {
    en: "Poor Management Visibility",
    ar: "ضعف وضوح الإدارة",
    fa: "دید مدیریتی ضعیف",
  },
  "homeForm.challenge.leads": {
    en: "Lost Leads or Sales Follow-Up",
    ar: "فقدان العملاء أو متابعة المبيعات",
    fa: "از دست رفتن لید یا پیگیری فروش",
  },
  "homeForm.challenge.approvals": {
    en: "Delayed Approvals",
    ar: "تأخر الموافقات",
    fa: "تأخیر در تأییدها",
  },
  "homeForm.challenge.reporting": {
    en: "Manual Reporting",
    ar: "إعداد التقارير يدوياً",
    fa: "گزارش‌دهی دستی",
  },
  "homeForm.teamSize": { en: "Team Size", ar: "حجم الفريق", fa: "اندازه تیم" },
  "homeForm.teamSize.1": { en: "Under 10", ar: "أقل من 10", fa: "کمتر از ۱۰ نفر" },
  "homeForm.teamSize.2": { en: "10–25", ar: "10–25", fa: "۱۰ تا ۲۵ نفر" },
  "homeForm.teamSize.3": { en: "26–50", ar: "26–50", fa: "۲۶ تا ۵۰ نفر" },
  "homeForm.teamSize.4": { en: "51–100", ar: "51–100", fa: "۵۱ تا ۱۰۰ نفر" },
  "homeForm.teamSize.5": { en: "100+", ar: "+100", fa: "بیش از ۱۰۰ نفر" },
  "homeForm.message": {
    en: "Describe the workflow, follow-up, approval, or report you want to improve",
    ar: "صف سير العمل أو المتابعة أو الموافقة أو التقرير الذي تريد تحسينه",
    fa: "گردش‌کار، پیگیری، تأیید یا گزارشی را که می‌خواهید بهتر کنید شرح دهید",
  },
  "homeForm.send": {
    en: "Request an Assessment",
    ar: "اطلب تقييماً",
    fa: "درخواست ارزیابی",
  },

  /* ---------- Contact form ---------- */
  "form.legend": {
    en: "Operations assessment details",
    ar: "تفاصيل تقييم العمليات",
    fa: "اطلاعات ارزیابی عملیات",
  },
  "form.requiredNote": {
    en: "Fields marked * are required.",
    ar: "الحقول المعلّمة بـ * مطلوبة.",
    fa: "فیلدهای دارای * الزامی هستند.",
  },
  "form.name": { en: "Name", ar: "الاسم", fa: "نام" },
  "form.company": { en: "Company", ar: "الشركة", fa: "شرکت" },
  "form.email": { en: "Work Email", ar: "البريد الإلكتروني للعمل", fa: "ایمیل کاری" },
  "form.phone": {
    en: "WhatsApp / Phone",
    ar: "واتساب / هاتف",
    fa: "واتساپ / تلفن",
  },
  "form.contactPhone": {
    en: "Phone / WhatsApp (optional)",
    ar: "الهاتف / واتساب (اختياري)",
    fa: "تلفن / واتساپ (اختیاری)",
  },
  "form.role": { en: "Role", ar: "الدور الوظيفي", fa: "سمت" },
  "form.role.founder": {
    en: "Founder / Owner",
    ar: "المؤسس / المالك",
    fa: "بنیان‌گذار / مالک",
  },
  "form.role.executive": {
    en: "CEO / General Manager",
    ar: "الرئيس التنفيذي / المدير العام",
    fa: "مدیرعامل / مدیر عمومی",
  },
  "form.role.operations": { en: "Operations", ar: "العمليات", fa: "عملیات" },
  "form.role.sales": { en: "Sales", ar: "المبيعات", fa: "فروش" },
  "form.role.admin": {
    en: "Admin / Finance",
    ar: "الإدارة / المالية",
    fa: "اداری / مالی",
  },
  "form.role.other": { en: "Other", ar: "أخرى", fa: "سایر" },
  "form.companySize": { en: "Company Size", ar: "حجم الشركة", fa: "اندازه شرکت" },
  "form.companySize.1": { en: "1–9", ar: "1–9", fa: "۱ تا ۹ نفر" },
  "form.companySize.2": { en: "10–25", ar: "10–25", fa: "۱۰ تا ۲۵ نفر" },
  "form.companySize.3": { en: "26–50", ar: "26–50", fa: "۲۶ تا ۵۰ نفر" },
  "form.companySize.4": { en: "51–100", ar: "51–100", fa: "۵۱ تا ۱۰۰ نفر" },
  "form.companySize.5": { en: "100+", ar: "+100", fa: "بیش از ۱۰۰ نفر" },
  "form.challenge": {
    en: "Main Operational Challenge",
    ar: "التحدّي التشغيلي الرئيسي",
    fa: "چالش اصلی عملیات",
  },
  "form.challenge.followup": {
    en: "Manual follow-up",
    ar: "المتابعة اليدوية",
    fa: "پیگیری دستی",
  },
  "form.challenge.visibility": {
    en: "Project / task visibility",
    ar: "وضوح المشاريع / المهام",
    fa: "شفافیت پروژه / وظایف",
  },
  "form.challenge.sales": {
    en: "Sales / lead follow-up",
    ar: "متابعة المبيعات / العملاء المحتملين",
    fa: "پیگیری فروش / لید",
  },
  "form.challenge.approvals": {
    en: "Approval delays",
    ar: "تأخّر الموافقات",
    fa: "تأخیر در تأییدها",
  },
  "form.challenge.reporting": {
    en: "Manual reporting",
    ar: "التقارير اليدوية",
    fa: "گزارش‌دهی دستی",
  },
  "form.challenge.crm": {
    en: "CRM / ERP workflow",
    ar: "سير العمل في CRM / ERP",
    fa: "گردش‌کار CRM / ERP",
  },
  "form.challenge.scattered": {
    en: "Information scattered across tools",
    ar: "تشتّت المعلومات بين الأدوات",
    fa: "پراکندگی اطلاعات میان ابزارها",
  },
  "form.challenge.dependency": {
    en: "Key-person dependency",
    ar: "الاعتماد على شخص رئيسي",
    fa: "وابستگی به فرد کلیدی",
  },
  "form.challenge.automation": {
    en: "Business process automation",
    ar: "أتمتة عمليات الأعمال",
    fa: "اتوماسیون فرایند کسب‌وکار",
  },
  "form.challenge.other": { en: "Other", ar: "أخرى", fa: "سایر" },
  "form.tools": {
    en: "Current Tools / Systems",
    ar: "الأدوات / الأنظمة الحالية",
    fa: "ابزارها / سیستم‌های فعلی",
  },
  "form.toolsPlaceholder": {
    en: "For example: WhatsApp, Excel, CRM, ERP, email",
    ar: "مثال: واتساب، Excel، CRM، ERP، البريد الإلكتروني",
    fa: "برای مثال: واتساپ، Excel، CRM، ERP، ایمیل",
  },
  "form.message": {
    en: "Workflow Description",
    ar: "وصف سير العمل",
    fa: "شرح گردش‌کار",
  },
  "form.messagePlaceholder": {
    en: "Describe what happens today, where work gets delayed, and what management needs to see.",
    ar: "صِف ما يحدث حالياً وأين يتأخّر العمل وما الذي تحتاج الإدارة إلى رؤيته.",
    fa: "شرح دهید امروز کار چگونه انجام می‌شود، کجا تأخیر ایجاد می‌شود و مدیریت باید چه چیزی را ببیند.",
  },
  "form.submitAssessment": {
    en: "Request an Operations Assessment",
    ar: "اطلب تقييماً للعمليات",
    fa: "درخواست ارزیابی عملیات",
  },
  "form.notConnected": {
    en: "Online form delivery is not connected yet. Please use WhatsApp or email so your request is not lost.",
    ar: "إرسال النموذج عبر الموقع غير متصل حالياً. يرجى استخدام واتساب أو البريد الإلكتروني حتى لا يضيع طلبك.",
    fa: "ارسال آنلاین فرم هنوز متصل نیست. لطفاً از واتساپ یا ایمیل استفاده کنید تا درخواست شما از دست نرود.",
  },
  "mobile.whatsapp": { en: "WhatsApp", ar: "واتساب", fa: "واتساپ" },

  /* ---------- Services page ---------- */
  "servicesPage.badge": { en: "Services", ar: "الخدمات", fa: "خدمات" },
  "servicesPage.title": {
    en: "Business Systems & Automation Services in Oman",
    ar: "خدمات أنظمة الأعمال والأتمتة في عُمان",
    fa: "خدمات سیستم‌های کسب‌وکار و اتوماسیون در عمان",
  },
  "servicesPage.desc": {
    en: "I help growing businesses improve recurring operations by clarifying the process, building visible systems, and automating only what creates measurable value.",
    ar: "أساعد الشركات النامية على تحسين العمليات المتكررة من خلال توضيح العملية وبناء أنظمة مرئية وأتمتة ما يحقق قيمة قابلة للقياس فقط.",
    fa: "به کسب‌وکارهای در حال رشد کمک می‌کنم با شفاف‌کردن فرایند، ساخت سیستم‌های قابل‌مشاهده و خودکارسازی فقط بخش‌های ارزشمند، عملیات تکرارشونده را بهتر مدیریت کنند.",
  },
  "servicesPage.breadcrumbHome": { en: "Home", ar: "الرئيسية", fa: "خانه" },
  "servicesPage.breadcrumbCurrent": { en: "Services", ar: "الخدمات", fa: "خدمات" },
  "servicesPage.breadcrumbLabel": {
    en: "Breadcrumb",
    ar: "مسار التنقّل",
    fa: "مسیر راهنما",
  },
  "servicesPage.servicesTitle": {
    en: "What I Help You Improve",
    ar: "ما الذي أساعدك على تحسينه",
    fa: "چه بخش‌هایی را بهبود می‌دهم",
  },
  "servicesPage.servicesDesc": {
    en: "The work begins with the business problem and the real workflow—not with a software product.",
    ar: "يبدأ العمل من مشكلة العمل وسير العمل الفعلي، وليس من منتج برمجي.",
    fa: "کار از مسئله کسب‌وکار و گردش‌کار واقعی شروع می‌شود، نه از یک محصول نرم‌افزاری.",
  },
  "servicesPage.1.title": {
    en: "Business Systems Assessment",
    ar: "تقييم أنظمة الأعمال",
    fa: "ارزیابی سیستم‌های کسب‌وکار",
  },
  "servicesPage.1.desc": {
    en: "A practical review of where time, information, control, and opportunities are being lost.",
    ar: "مراجعة عملية لمواضع فقدان الوقت والمعلومات والتحكّم والفرص.",
    fa: "بررسی کاربردی نقاطی که زمان، اطلاعات، کنترل و فرصت‌ها در آن از دست می‌روند.",
  },
  "servicesPage.1.p1": {
    en: "Current workflow and hand-offs",
    ar: "سير العمل الحالي ونقاط التسليم",
    fa: "گردش‌کار فعلی و نقاط تحویل کار",
  },
  "servicesPage.1.p2": {
    en: "Bottlenecks, ownership, and reporting gaps",
    ar: "الاختناقات وفجوات المسؤولية والتقارير",
    fa: "گلوگاه‌ها و شکاف‌های مسئولیت و گزارش‌دهی",
  },
  "servicesPage.1.p3": {
    en: "Prioritized improvements and automation opportunities",
    ar: "تحسينات وفرص أتمتة مرتبة حسب الأولوية",
    fa: "بهبودها و فرصت‌های اتوماسیون اولویت‌بندی‌شده",
  },
  "servicesPage.2.title": {
    en: "Workflow & Operations System Design",
    ar: "تصميم أنظمة سير العمل والعمليات",
    fa: "طراحی سیستم گردش‌کار و عملیات",
  },
  "servicesPage.2.desc": {
    en: "Define how recurring work should move so it becomes visible, consistent, and manageable.",
    ar: "تحديد كيفية انتقال العمل المتكرر ليصبح واضحاً ومتسقاً وقابلاً للإدارة.",
    fa: "تعریف نحوه حرکت کارهای تکرارشونده برای ایجاد شفافیت، ثبات و مدیریت‌پذیری.",
  },
  "servicesPage.2.p1": {
    en: "Owner, status, and deadline",
    ar: "المسؤول والحالة والموعد النهائي",
    fa: "مسئول، وضعیت و موعد",
  },
  "servicesPage.2.p2": {
    en: "Rules, hand-offs, and approval points",
    ar: "القواعد ونقاط التسليم والموافقة",
    fa: "قواعد، نقاط تحویل و تأیید",
  },
  "servicesPage.2.p3": {
    en: "Escalations and exception handling",
    ar: "التصعيدات ومعالجة الاستثناءات",
    fa: "ارجاع و مدیریت استثناها",
  },
  "servicesPage.3.title": {
    en: "CRM & Sales Process Improvement",
    ar: "تحسين CRM وعمليات المبيعات",
    fa: "بهبود CRM و فرایند فروش",
  },
  "servicesPage.3.desc": {
    en: "Improve lead ownership, follow-up, quotations, and sales visibility before changing the tool.",
    ar: "تحسين مسؤولية العملاء والمتابعة وعروض الأسعار ووضوح المبيعات قبل تغيير الأداة.",
    fa: "بهبود مالکیت لید، پیگیری، پیش‌فاکتور و دید فروش پیش از تغییر ابزار.",
  },
  "servicesPage.3.p1": {
    en: "Lead assignment and ownership",
    ar: "توزيع العملاء وتحديد المسؤولية",
    fa: "تخصیص لید و مسئولیت آن",
  },
  "servicesPage.3.p2": {
    en: "Quotation and customer follow-up",
    ar: "متابعة عروض الأسعار والعملاء",
    fa: "پیگیری پیش‌فاکتور و مشتری",
  },
  "servicesPage.3.p3": {
    en: "Pipeline and response visibility",
    ar: "وضوح مسار المبيعات والاستجابة",
    fa: "دید قیف فروش و پاسخ‌گویی",
  },
  "servicesPage.4.title": {
    en: "Management Dashboards & Reporting",
    ar: "لوحات المعلومات الإدارية والتقارير",
    fa: "داشبوردهای مدیریتی و گزارش‌دهی",
  },
  "servicesPage.4.desc": {
    en: "Give management a clearer view of delays, approvals, follow-up gaps, exceptions, and relevant KPIs.",
    ar: "منح الإدارة رؤية أوضح للتأخيرات والموافقات وفجوات المتابعة والاستثناءات وKPIs المهمة.",
    fa: "ارائه دید روشن‌تر از تأخیرها، تأییدها، شکاف‌های پیگیری، استثناها و KPIهای مرتبط.",
  },
  "servicesPage.4.p1": {
    en: "Late work and items needing attention",
    ar: "الأعمال المتأخرة وما يحتاج إلى انتباه",
    fa: "کارهای عقب‌افتاده و موارد نیازمند توجه",
  },
  "servicesPage.4.p2": {
    en: "Approvals and operational exceptions",
    ar: "الموافقات والاستثناءات التشغيلية",
    fa: "تأییدها و استثناهای عملیاتی",
  },
  "servicesPage.4.p3": {
    en: "Consistent management reporting",
    ar: "تقارير إدارية منتظمة",
    fa: "گزارش‌دهی منظم مدیریتی",
  },
  "servicesPage.5.title": {
    en: "Business Process Automation",
    ar: "أتمتة عمليات الأعمال",
    fa: "اتوماسیون فرایندهای کسب‌وکار",
  },
  "servicesPage.5.desc": {
    en: "Automate repetitive, rule-based work where the result can be measured and controlled.",
    ar: "أتمتة الأعمال المتكررة والقائمة على قواعد عندما تكون النتيجة قابلة للقياس والتحكّم.",
    fa: "خودکارسازی کارهای تکراری و قانون‌محور در جایی که نتیجه قابل‌اندازه‌گیری و کنترل باشد.",
  },
  "servicesPage.5.p1": {
    en: "Reminders, notifications, and status updates",
    ar: "التذكيرات والإشعارات وتحديثات الحالة",
    fa: "یادآوری، اعلان و به‌روزرسانی وضعیت",
  },
  "servicesPage.5.p2": {
    en: "Approvals, task creation, and escalation",
    ar: "الموافقات وإنشاء المهام والتصعيد",
    fa: "تأیید، ایجاد وظیفه و ارجاع",
  },
  "servicesPage.5.p3": {
    en: "Follow-up and recurring reporting",
    ar: "المتابعة والتقارير المتكررة",
    fa: "پیگیری و گزارش‌دهی دوره‌ای",
  },
  "servicesPage.6.title": {
    en: "System Integration & Data Flow",
    ar: "تكامل الأنظمة وتدفّق البيانات",
    fa: "یکپارچه‌سازی سیستم و جریان داده",
  },
  "servicesPage.6.desc": {
    en: "Connect useful parts of existing systems so information does not need to be copied manually.",
    ar: "ربط الأجزاء المفيدة من الأنظمة الحالية حتى لا تُنسخ المعلومات يدوياً.",
    fa: "اتصال بخش‌های مفید سیستم‌های موجود تا اطلاعات به‌صورت دستی کپی نشوند.",
  },
  "servicesPage.6.p1": {
    en: "CRM, forms, email, and spreadsheets",
    ar: "CRM والنماذج والبريد الإلكتروني والجداول",
    fa: "CRM، فرم، ایمیل و فایل‌های جدولی",
  },
  "servicesPage.6.p2": {
    en: "Dashboards and internal tools",
    ar: "لوحات المعلومات والأدوات الداخلية",
    fa: "داشبورد و ابزارهای داخلی",
  },
  "servicesPage.6.p3": {
    en: "APIs and controlled data transfer",
    ar: "واجهات API ونقل البيانات بشكل منضبط",
    fa: "API و انتقال کنترل‌شده داده",
  },
  "servicesPage.7.title": {
    en: "Practical AI for Business",
    ar: "ذكاء اصطناعي عملي للأعمال",
    fa: "هوش مصنوعی کاربردی برای کسب‌وکار",
  },
  "servicesPage.7.desc": {
    en: "Use AI only when it creates measurable value. Many operational improvements do not require it.",
    ar: "استخدام الذكاء الاصطناعي فقط عندما يحقق قيمة قابلة للقياس؛ فكثير من التحسينات لا تحتاج إليه.",
    fa: "استفاده از هوش مصنوعی فقط زمانی که ارزش قابل‌اندازه‌گیری ایجاد کند؛ بسیاری از بهبودها به آن نیاز ندارند.",
  },
  "servicesPage.7.p1": {
    en: "Information extraction and classification",
    ar: "استخراج المعلومات وتصنيفها",
    fa: "استخراج و دسته‌بندی اطلاعات",
  },
  "servicesPage.7.p2": {
    en: "Summarization and document processing",
    ar: "التلخيص ومعالجة المستندات",
    fa: "خلاصه‌سازی و پردازش اسناد",
  },
  "servicesPage.7.p3": {
    en: "Assisted decision workflows",
    ar: "سير عمل مساعد لاتخاذ القرار",
    fa: "گردش‌کارهای کمک‌تصمیم‌گیری",
  },
  "servicesPage.8.title": {
    en: "Ongoing System Optimization",
    ar: "التحسين المستمر للأنظمة",
    fa: "بهینه‌سازی مستمر سیستم",
  },
  "servicesPage.8.desc": {
    en: "Improve adoption, remove new bottlenecks, refine automation, and expand useful workflows over time.",
    ar: "تحسين التبنّي وإزالة الاختناقات الجديدة وتطوير الأتمتة وتوسيع سير العمل المفيد مع الوقت.",
    fa: "بهبود استفاده تیم، رفع گلوگاه‌های جدید، اصلاح اتوماسیون و گسترش گردش‌کارهای مفید در طول زمان.",
  },
  "servicesPage.8.p1": {
    en: "Workflow and adoption review",
    ar: "مراجعة سير العمل ومدى التبنّي",
    fa: "بازبینی گردش‌کار و میزان استفاده",
  },
  "servicesPage.8.p2": {
    en: "Bottleneck and automation refinement",
    ar: "تحسين الاختناقات والأتمتة",
    fa: "اصلاح گلوگاه و اتوماسیون",
  },
  "servicesPage.8.p3": {
    en: "New workflows and better management visibility",
    ar: "سير عمل جديد ورؤية إدارية أفضل",
    fa: "گردش‌کارهای جدید و دید مدیریتی بهتر",
  },

  "servicesPage.engagementBadge": {
    en: "Engagement Model",
    ar: "نموذج التعاون",
    fa: "مدل همکاری",
  },
  "servicesPage.engagementTitle": {
    en: "Start With One Meaningful Business Problem",
    ar: "ابدأ بمشكلة عمل واحدة ذات أهمية",
    fa: "با یک مسئله مهم کسب‌وکار شروع کنید",
  },
  "servicesPage.engagementDesc": {
    en: "I do not begin by replacing the whole company system. I identify one valuable workflow, prove the approach, and expand from evidence.",
    ar: "لا أبدأ باستبدال نظام الشركة بالكامل. أحدد سير عمل ذا قيمة وأختبر النهج ثم أتوسع بناءً على الدليل.",
    fa: "کار را با جایگزینی کل سیستم شرکت آغاز نمی‌کنم. یک گردش‌کار ارزشمند را انتخاب می‌کنم، رویکرد را می‌آزمایم و بر اساس شواهد گسترش می‌دهم.",
  },
  "servicesPage.engagement.1.title": { en: "Assessment", ar: "التقييم", fa: "ارزیابی" },
  "servicesPage.engagement.1.desc": {
    en: "Understand the current process, define the bottleneck, and choose the first outcome worth pursuing.",
    ar: "فهم العملية الحالية وتحديد عنق الزجاجة واختيار أول نتيجة تستحق العمل عليها.",
    fa: "فرایند فعلی را بشناسید، گلوگاه را مشخص کنید و اولین نتیجه ارزشمند را انتخاب کنید.",
  },
  "servicesPage.engagement.2.title": {
    en: "Paid Pilot",
    ar: "مشروع تجريبي مدفوع",
    fa: "پایلوت پولی",
  },
  "servicesPage.engagement.2.desc": {
    en: "Build and test one limited workflow with the real team before committing to a larger implementation.",
    ar: "بناء واختبار سير عمل محدود مع الفريق الفعلي قبل الالتزام بتنفيذ أكبر.",
    fa: "یک گردش‌کار محدود را با تیم واقعی بسازید و آزمایش کنید، پیش از آن‌که وارد اجرای بزرگ‌تر شوید.",
  },
  "servicesPage.engagement.3.title": { en: "Implementation", ar: "التنفيذ", fa: "پیاده‌سازی" },
  "servicesPage.engagement.3.desc": {
    en: "Expand the proven solution into the required workflows, dashboards, integrations, and automation.",
    ar: "توسيع الحل المثبت إلى سير العمل ولوحات المعلومات والتكاملات والأتمتة المطلوبة.",
    fa: "راهکار اثبات‌شده را به گردش‌کارها، داشبوردها، یکپارچه‌سازی و اتوماسیون موردنیاز گسترش دهید.",
  },
  "servicesPage.engagement.4.title": {
    en: "Ongoing Optimization",
    ar: "التحسين المستمر",
    fa: "بهینه‌سازی مستمر",
  },
  "servicesPage.engagement.4.desc": {
    en: "Review adoption and results, remove new bottlenecks, and improve the system as the business changes.",
    ar: "مراجعة التبنّي والنتائج وإزالة الاختناقات الجديدة وتحسين النظام مع تغيّر العمل.",
    fa: "استفاده و نتایج را بررسی کنید، گلوگاه‌های جدید را برطرف کنید و هم‌زمان با تغییر کسب‌وکار سیستم را بهبود دهید.",
  },

  "servicesPage.industriesBadge": {
    en: "Industry Relevance",
    ar: "القطاعات المناسبة",
    fa: "کاربرد در صنایع",
  },
  "servicesPage.industriesTitle": {
    en: "Designed for Businesses With Recurring Operational Work",
    ar: "مصمّم للشركات ذات العمليات التشغيلية المتكررة",
    fa: "مناسب کسب‌وکارهای دارای عملیات تکرارشونده",
  },
  "servicesPage.industriesDesc": {
    en: "These are examples of sectors where hand-offs, approvals, follow-up, and management visibility are often important.",
    ar: "هذه أمثلة لقطاعات تكون فيها نقاط التسليم والموافقات والمتابعة ووضوح الإدارة مهمة غالباً.",
    fa: "این‌ها نمونه‌هایی از صنایعی هستند که تحویل کار، تأیید، پیگیری و دید مدیریتی در آن‌ها اهمیت زیادی دارد.",
  },
  "servicesPage.industry.1.title": {
    en: "Construction & Engineering",
    ar: "الإنشاءات والهندسة",
    fa: "ساخت‌وساز و مهندسی",
  },
  "servicesPage.industry.1.desc": {
    en: "Project hand-offs, site updates, approvals, deadlines, and commercial follow-up.",
    ar: "تسليمات المشاريع وتحديثات المواقع والموافقات والمواعيد والمتابعة التجارية.",
    fa: "تحویل مراحل پروژه، گزارش‌های کارگاه، تأییدها، موعدها و پیگیری تجاری.",
  },
  "servicesPage.industry.2.title": {
    en: "Trading & Distribution",
    ar: "التجارة والتوزيع",
    fa: "تجارت و توزیع",
  },
  "servicesPage.industry.2.desc": {
    en: "Leads, quotations, orders, delivery coordination, inventory hand-offs, and reporting.",
    ar: "العملاء وعروض الأسعار والطلبات وتنسيق التسليم وتسليمات المخزون والتقارير.",
    fa: "لید، پیش‌فاکتور، سفارش، هماهنگی تحویل، گردش موجودی و گزارش‌دهی.",
  },
  "servicesPage.industry.3.title": { en: "Real Estate", ar: "العقارات", fa: "املاک و مستغلات" },
  "servicesPage.industry.3.desc": {
    en: "Lead assignment, viewing follow-up, approvals, pipeline status, and sales visibility.",
    ar: "توزيع العملاء ومتابعة المعاينات والموافقات وحالة مسار المبيعات ووضوحها.",
    fa: "تخصیص لید، پیگیری بازدید، تأییدها، وضعیت قیف و دید فروش.",
  },
  "servicesPage.industriesSecondary": {
    en: "The same approach can also support logistics, fleet and car rental operations, and multi-doctor clinics with repeatable workflows.",
    ar: "يمكن للنهج نفسه دعم الخدمات اللوجستية وإدارة الأساطيل وتأجير السيارات والعيادات متعددة الأطباء ذات سير العمل المتكرر.",
    fa: "همین رویکرد می‌تواند برای لجستیک، عملیات ناوگان و اجاره خودرو و کلینیک‌های چندپزشکه با گردش‌کارهای تکرارشونده نیز مفید باشد.",
  },

  "servicesPage.objectionsBadge": {
    en: "Common Questions",
    ar: "أسئلة شائعة",
    fa: "پرسش‌های رایج",
  },
  "servicesPage.objectionsTitle": {
    en: "The Process Comes Before the Tool",
    ar: "العملية تسبق الأداة",
    fa: "فرایند پیش از ابزار قرار می‌گیرد",
  },
  "servicesPage.objection.1.q": {
    en: "We already have a CRM or ERP.",
    ar: "لدينا بالفعل CRM أو ERP.",
    fa: "ما از قبل CRM یا ERP داریم.",
  },
  "servicesPage.objection.1.a": {
    en: "Software alone does not guarantee a clear workflow, consistent adoption, or useful management visibility. The process and usage still need to work.",
    ar: "البرنامج وحده لا يضمن سير عمل واضحاً أو استخداماً منتظماً أو رؤية إدارية مفيدة. يجب أن تعمل العملية وطريقة الاستخدام فعلياً.",
    fa: "نرم‌افزار به‌تنهایی گردش‌کار روشن، استفاده منظم یا دید مدیریتی مفید ایجاد نمی‌کند. فرایند و نحوه استفاده نیز باید درست کار کنند.",
  },
  "servicesPage.objection.2.q": {
    en: "Our business is very specific.",
    ar: "طبيعة عملنا خاصة جداً.",
    fa: "کسب‌وکار ما بسیار خاص است.",
  },
  "servicesPage.objection.2.a": {
    en: "The real process is mapped before recommending or changing tools, so the system reflects how the work actually operates.",
    ar: "تُرسم العملية الفعلية قبل اقتراح الأدوات أو تغييرها حتى يعكس النظام طريقة العمل الحقيقية.",
    fa: "پیش از پیشنهاد یا تغییر ابزار، فرایند واقعی ترسیم می‌شود تا سیستم با نحوه انجام واقعی کار هماهنگ باشد.",
  },
  "servicesPage.objection.3.q": {
    en: "Our team will not use another system.",
    ar: "فريقنا لن يستخدم نظاماً آخر.",
    fa: "تیم ما از سیستم دیگری استفاده نمی‌کند.",
  },
  "servicesPage.objection.3.a": {
    en: "Adoption is part of workflow design. The aim is to reduce unnecessary steps and make the system useful in daily work.",
    ar: "التبنّي جزء من تصميم سير العمل. الهدف هو تقليل الخطوات غير الضرورية وجعل النظام مفيداً في العمل اليومي.",
    fa: "پذیرش تیم بخشی از طراحی گردش‌کار است. هدف، حذف مراحل غیرضروری و مفیدکردن سیستم در کار روزانه است.",
  },
  "servicesPage.objection.4.q": {
    en: "Do we need AI?",
    ar: "هل نحتاج إلى الذكاء الاصطناعي؟",
    fa: "آیا به هوش مصنوعی نیاز داریم؟",
  },
  "servicesPage.objection.4.a": {
    en: "Not necessarily. Better process design, rules, integrations, and automation often solve the problem without AI.",
    ar: "ليس بالضرورة. غالباً ما يحل تصميم العمليات والقواعد والتكاملات والأتمتة المشكلة دون ذكاء اصطناعي.",
    fa: "لزومی ندارد. طراحی بهتر فرایند، قواعد، یکپارچه‌سازی و اتوماسیون اغلب بدون هوش مصنوعی مسئله را حل می‌کنند.",
  },

  "servicesPage.ctaBadge": {
    en: "First Step",
    ar: "الخطوة الأولى",
    fa: "گام اول",
  },
  "servicesPage.ctaTitle": {
    en: "Start With the Operational Problem, Not the Software",
    ar: "ابدأ بالمشكلة التشغيلية، لا بالبرنامج",
    fa: "از مسئله عملیاتی شروع کنید، نه نرم‌افزار",
  },
  "servicesPage.ctaDesc": {
    en: "Book an assessment to identify the workflow worth improving first and the practical next step for your business.",
    ar: "احجز تقييماً لتحديد سير العمل الذي يستحق التحسين أولاً والخطوة العملية التالية لشركتك.",
    fa: "برای شناسایی اولین گردش‌کار ارزشمند برای بهبود و گام عملی بعدی کسب‌وکار، یک ارزیابی رزرو کنید.",
  },
  "servicesPage.ctaPrimary": {
    en: "Book an Operations Assessment",
    ar: "احجز تقييماً للعمليات",
    fa: "رزرو ارزیابی عملیات",
  },
  "servicesPage.linkHome": {
    en: "View the Overview",
    ar: "شاهد النظرة العامة",
    fa: "مشاهده نمای کلی",
  },
  "servicesPage.linkAbout": {
    en: "About the Approach",
    ar: "عن منهجية العمل",
    fa: "درباره رویکرد کاری",
  },
  "servicesPage.linkCases": {
    en: "View Selected Work",
    ar: "شاهد الأعمال المختارة",
    fa: "مشاهده پروژه‌های منتخب",
  },
  "servicesPage.relatedLinks": {
    en: "Related pages",
    ar: "صفحات ذات صلة",
    fa: "صفحه‌های مرتبط",
  },

  /* ---------- Pricing page ---------- */
  "pricing.badge": {
    en: "Engagement Options",
    ar: "خيارات التعاون",
    fa: "گزینه‌های همکاری",
  },
  "pricing.title": {
    en: "Engagement Options for Business Systems & Automation",
    ar: "خيارات التعاون لأنظمة الأعمال والأتمتة",
    fa: "گزینه‌های همکاری برای سیستم‌های کسب‌وکار و اتوماسیون",
  },
  "pricing.desc": {
    en: "Every business has different processes, systems, and bottlenecks. Work starts by identifying the operational problem and defining the smallest useful next step—not by forcing a predefined software package.",
    ar: "لكل شركة عمليات وأنظمة واختناقات مختلفة. يبدأ العمل بتحديد المشكلة التشغيلية وأصغر خطوة عملية مفيدة، لا بفرض باقة برمجية جاهزة.",
    fa: "هر کسب‌وکار فرایندها، سیستم‌ها و گلوگاه‌های متفاوتی دارد. همکاری با شناسایی مسئله عملیاتی و تعریف کوچک‌ترین گام مفید آغاز می‌شود، نه با تحمیل یک بسته نرم‌افزاری از پیش تعیین‌شده.",
  },
  "pricing.options.title": {
    en: "Ways to Work Together",
    ar: "طرق التعاون",
    fa: "روش‌های همکاری",
  },
  "pricing.options.desc": {
    en: "Begin with the level of clarity your business has today, then expand only when the value and next scope are clear.",
    ar: "ابدأ من مستوى الوضوح المتاح في شركتك اليوم، ثم وسّع العمل فقط عندما تتضح القيمة والخطوة التالية.",
    fa: "از سطح شفافیتی که امروز در کسب‌وکار وجود دارد شروع کنید و فقط زمانی دامنه را گسترش دهید که ارزش و گام بعدی روشن باشد.",
  },
  "pricing.engagement.1.title": {
    en: "Operations Assessment",
    ar: "تقييم العمليات",
    fa: "ارزیابی عملیات",
  },
  "pricing.engagement.1.purpose": {
    en: "Understand the current workflow and identify the highest-value improvement opportunities.",
    ar: "فهم سير العمل الحالي وتحديد فرص التحسين الأعلى قيمة.",
    fa: "درک گردش‌کار فعلی و شناسایی ارزشمندترین فرصت‌های بهبود.",
  },
  "pricing.engagement.1.p1": {
    en: "Review the workflow, owners, handoffs, and recurring delays",
    ar: "مراجعة سير العمل والمسؤوليات ونقاط التسليم والتأخيرات المتكررة",
    fa: "بررسی گردش‌کار، مسئولیت‌ها، تحویل کار و تأخیرهای تکرارشونده",
  },
  "pricing.engagement.1.p2": {
    en: "Identify manual follow-up and operational bottlenecks",
    ar: "تحديد المتابعة اليدوية والاختناقات التشغيلية",
    fa: "شناسایی پیگیری دستی و گلوگاه‌های عملیاتی",
  },
  "pricing.engagement.1.p3": {
    en: "Review reporting and management visibility gaps",
    ar: "مراجعة فجوات التقارير ووضوح المعلومات للإدارة",
    fa: "بررسی شکاف‌های گزارش‌دهی و دید مدیریتی",
  },
  "pricing.engagement.1.p4": {
    en: "Examine how current systems and tools are being used",
    ar: "فحص كيفية استخدام الأنظمة والأدوات الحالية",
    fa: "بررسی نحوه استفاده از سیستم‌ها و ابزارهای فعلی",
  },
  "pricing.engagement.1.p5": {
    en: "Prioritize practical system and automation opportunities",
    ar: "ترتيب فرص تحسين الأنظمة والأتمتة العملية حسب الأولوية",
    fa: "اولویت‌بندی فرصت‌های عملی برای بهبود سیستم و اتوماسیون",
  },
  "pricing.engagement.1.outcome": {
    en: "Outcome: a clear view of what should be improved first.",
    ar: "النتيجة: رؤية واضحة لما ينبغي تحسينه أولاً.",
    fa: "نتیجه: تصویری روشن از اینکه ابتدا چه چیزی باید بهبود یابد.",
  },
  "pricing.engagement.1.pricing": {
    en: "The assessment scope is defined around the workflow and teams that need review.",
    ar: "يُحدّد نطاق التقييم وفق سير العمل والفرق التي تحتاج إلى المراجعة.",
    fa: "دامنه ارزیابی بر اساس گردش‌کار و تیم‌هایی که نیاز به بررسی دارند تعیین می‌شود.",
  },
  "pricing.engagement.2.title": {
    en: "Paid Pilot",
    ar: "مشروع تجريبي مدفوع",
    fa: "پایلوت پولی",
  },
  "pricing.engagement.2.purpose": {
    en: "Solve or improve one clearly defined workflow before committing to a larger implementation.",
    ar: "حل أو تحسين سير عمل واحد محدد بوضوح قبل الالتزام بتنفيذ أوسع.",
    fa: "حل یا بهبود یک گردش‌کار مشخص، پیش از تعهد به اجرای گسترده‌تر.",
  },
  "pricing.engagement.2.p1": {
    en: "Focus on one meaningful business problem",
    ar: "التركيز على مشكلة أعمال واحدة ذات قيمة",
    fa: "تمرکز بر یک مسئله مهم کسب‌وکار",
  },
  "pricing.engagement.2.p2": {
    en: "Define the workflow, scope, owners, and boundaries",
    ar: "تحديد سير العمل والنطاق والمسؤوليات والحدود",
    fa: "تعریف گردش‌کار، دامنه، مسئولیت‌ها و مرزهای کار",
  },
  "pricing.engagement.2.p3": {
    en: "Set measurable success criteria where practical",
    ar: "وضع معايير نجاح قابلة للقياس حيثما كان ذلك عملياً",
    fa: "تعیین معیارهای موفقیت قابل‌اندازه‌گیری در صورت امکان",
  },
  "pricing.engagement.2.p4": {
    en: "Test lead follow-up, approvals, reporting, reminders, or visibility",
    ar: "اختبار متابعة العملاء أو الموافقات أو التقارير أو التذكيرات أو وضوح الحالة",
    fa: "آزمودن پیگیری لید، تأییدها، گزارش‌دهی، یادآوری‌ها یا شفافیت وضعیت",
  },
  "pricing.engagement.2.p5": {
    en: "Use the result to decide whether and how to expand",
    ar: "استخدام النتيجة لتحديد ما إذا كان التوسع مناسباً وكيف يتم",
    fa: "استفاده از نتیجه برای تصمیم‌گیری درباره ضرورت و نحوه گسترش",
  },
  "pricing.engagement.2.outcome": {
    en: "Outcome: evidence from a useful workflow—not a company-wide rebuild from day one.",
    ar: "النتيجة: دليل عملي من سير عمل مفيد، لا إعادة بناء الشركة كاملة من اليوم الأول.",
    fa: "نتیجه: شواهد واقعی از یک گردش‌کار مفید، نه بازسازی کل شرکت از روز اول.",
  },
  "pricing.engagement.2.pricing": {
    en: "The pilot is scoped and priced before work begins, based on the defined workflow.",
    ar: "يُحدّد نطاق المشروع التجريبي وتكلفته قبل البدء وفق سير العمل المتفق عليه.",
    fa: "دامنه و هزینه پایلوت پیش از شروع و بر اساس گردش‌کار تعریف‌شده مشخص می‌شود.",
  },
  "pricing.engagement.3.title": {
    en: "Implementation Project",
    ar: "مشروع التنفيذ",
    fa: "پروژه پیاده‌سازی",
  },
  "pricing.engagement.3.purpose": {
    en: "Build or improve the operational system once the problem and workflow are clear.",
    ar: "بناء النظام التشغيلي أو تحسينه بعد وضوح المشكلة وسير العمل.",
    fa: "ساخت یا بهبود سیستم عملیاتی پس از روشن‌شدن مسئله و گردش‌کار.",
  },
  "pricing.engagement.3.p1": {
    en: "Workflow systems, CRM, or process improvements",
    ar: "أنظمة سير العمل أو تحسين CRM أو العمليات",
    fa: "سیستم گردش‌کار، CRM یا بهبود فرایند",
  },
  "pricing.engagement.3.p2": {
    en: "Management dashboards and operational reporting",
    ar: "لوحات الإدارة والتقارير التشغيلية",
    fa: "داشبوردهای مدیریتی و گزارش‌دهی عملیاتی",
  },
  "pricing.engagement.3.p3": {
    en: "Integrations and practical automation",
    ar: "التكاملات والأتمتة العملية",
    fa: "یکپارچه‌سازی و اتوماسیون کاربردی",
  },
  "pricing.engagement.3.p4": {
    en: "Internal tools or selective AI where useful",
    ar: "أدوات داخلية أو AI انتقائي عندما يكون مفيداً",
    fa: "ابزارهای داخلی یا استفاده انتخابی از AI در صورت مفیدبودن",
  },
  "pricing.engagement.3.p5": {
    en: "Team onboarding and adoption support where needed",
    ar: "تهيئة الفريق ودعم التبنّي عند الحاجة",
    fa: "آموزش اولیه تیم و پشتیبانی از پذیرش سیستم در صورت نیاز",
  },
  "pricing.engagement.3.outcome": {
    en: "Outcome: an operational system designed around the agreed business problem and scope.",
    ar: "النتيجة: نظام تشغيلي مصمم حول مشكلة الأعمال والنطاق المتفق عليهما.",
    fa: "نتیجه: یک سیستم عملیاتی متناسب با مسئله کسب‌وکار و دامنه مورد توافق.",
  },
  "pricing.engagement.3.pricing": {
    en: "Project pricing depends on the actual components, integrations, and implementation needs—not a generic package.",
    ar: "تعتمد تكلفة المشروع على المكونات والتكاملات واحتياجات التنفيذ الفعلية، لا على باقة عامة.",
    fa: "هزینه پروژه به اجزا، یکپارچه‌سازی‌ها و نیازهای واقعی اجرا بستگی دارد، نه یک بسته عمومی.",
  },
  "pricing.engagement.4.title": {
    en: "Ongoing Optimization",
    ar: "التحسين المستمر",
    fa: "بهینه‌سازی مستمر",
  },
  "pricing.engagement.4.purpose": {
    en: "Continue improving the system after implementation as the business and workflows evolve.",
    ar: "مواصلة تحسين النظام بعد التنفيذ مع تطور الشركة وسير العمل.",
    fa: "ادامه بهبود سیستم پس از پیاده‌سازی، هم‌زمان با تغییر کسب‌وکار و گردش‌کارها.",
  },
  "pricing.engagement.4.p1": {
    en: "Monitor workflows and remove new bottlenecks",
    ar: "مراقبة سير العمل وإزالة الاختناقات الجديدة",
    fa: "پایش گردش‌کار و رفع گلوگاه‌های جدید",
  },
  "pricing.engagement.4.p2": {
    en: "Refine automation and integrations",
    ar: "تحسين الأتمتة والتكاملات",
    fa: "بهبود اتوماسیون و یکپارچه‌سازی‌ها",
  },
  "pricing.engagement.4.p3": {
    en: "Add new workflows when the value is clear",
    ar: "إضافة سير عمل جديد عندما تكون القيمة واضحة",
    fa: "افزودن گردش‌کارهای جدید زمانی که ارزش آن روشن است",
  },
  "pricing.engagement.4.p4": {
    en: "Improve team adoption and day-to-day use",
    ar: "تحسين تبنّي الفريق والاستخدام اليومي",
    fa: "بهبود پذیرش تیم و استفاده روزمره",
  },
  "pricing.engagement.4.p5": {
    en: "Refine dashboards and operational reporting",
    ar: "تطوير لوحات المعلومات والتقارير التشغيلية",
    fa: "اصلاح داشبوردها و گزارش‌دهی عملیاتی",
  },
  "pricing.engagement.4.outcome": {
    en: "Outcome: a system that continues to support changing operational needs.",
    ar: "النتيجة: نظام يواصل دعم الاحتياجات التشغيلية المتغيرة.",
    fa: "نتیجه: سیستمی که همچنان از نیازهای عملیاتی در حال تغییر پشتیبانی می‌کند.",
  },
  "pricing.engagement.4.pricing": {
    en: "Where appropriate, this can be structured as an ongoing retainer with an agreed scope—without a fixed public package price.",
    ar: "عند الحاجة، يمكن تنظيم ذلك كتعاون مستمر بنطاق متفق عليه من دون سعر باقة عام وثابت.",
    fa: "در صورت مناسب‌بودن، این همکاری می‌تواند به‌صورت قرارداد مستمر با دامنه توافق‌شده تعریف شود، بدون قیمت ثابت عمومی.",
  },
  "pricing.cost.badge": {
    en: "Pricing Approach",
    ar: "منهجية التسعير",
    fa: "رویکرد قیمت‌گذاری",
  },
  "pricing.cost.title": {
    en: "What Determines the Cost?",
    ar: "ما الذي يحدد التكلفة؟",
    fa: "چه عواملی هزینه را تعیین می‌کنند؟",
  },
  "pricing.cost.desc": {
    en: "The scope is defined before implementation begins. These practical factors determine the work involved:",
    ar: "يُحدّد النطاق قبل بدء التنفيذ. وتوضح هذه العوامل العملية حجم العمل المطلوب:",
    fa: "دامنه کار پیش از شروع پیاده‌سازی مشخص می‌شود. این عوامل عملی حجم کار موردنیاز را تعیین می‌کنند:",
  },
  "pricing.cost.1": { en: "Workflow complexity", ar: "تعقيد سير العمل", fa: "پیچیدگی گردش‌کار" },
  "pricing.cost.2": {
    en: "Number of teams involved",
    ar: "عدد الفرق المشاركة",
    fa: "تعداد تیم‌های درگیر",
  },
  "pricing.cost.3": {
    en: "Number of system integrations",
    ar: "عدد عمليات تكامل الأنظمة",
    fa: "تعداد یکپارچه‌سازی‌های سیستمی",
  },
  "pricing.cost.4": {
    en: "Condition of existing systems",
    ar: "حالة الأنظمة الحالية",
    fa: "وضعیت سیستم‌های موجود",
  },
  "pricing.cost.5": { en: "Data availability", ar: "توفر البيانات", fa: "دسترسی به داده" },
  "pricing.cost.6": { en: "Automation scope", ar: "نطاق الأتمتة", fa: "دامنه اتوماسیون" },
  "pricing.cost.7": {
    en: "Custom software requirements",
    ar: "متطلبات البرامج المخصصة",
    fa: "نیازهای نرم‌افزاری سفارشی",
  },
  "pricing.cost.8": {
    en: "Dashboard and reporting requirements",
    ar: "متطلبات لوحات المعلومات والتقارير",
    fa: "نیازهای داشبورد و گزارش‌دهی",
  },
  "pricing.cost.9": {
    en: "Implementation and adoption needs",
    ar: "احتياجات التنفيذ وتبنّي الفريق",
    fa: "نیازهای پیاده‌سازی و پذیرش تیم",
  },
  "pricing.why.badge": {
    en: "Scope Before Price",
    ar: "النطاق قبل السعر",
    fa: "دامنه پیش از قیمت",
  },
  "pricing.why.title": {
    en: "Why Pricing Depends on the Workflow",
    ar: "لماذا تعتمد التكلفة على سير العمل؟",
    fa: "چرا هزینه به گردش‌کار بستگی دارد؟",
  },
  "pricing.why.desc": {
    en: "A business with one broken follow-up workflow should not pay for the same scope as a company that needs several departments, integrations, and reporting systems connected. Pricing follows the actual business problem and the implementation needed to solve it.",
    ar: "لا ينبغي لشركة لديها مشكلة في سير متابعة واحد أن تتحمل نطاق شركة تحتاج إلى ربط عدة أقسام وتكاملات وأنظمة تقارير. لذلك تتبع التكلفة مشكلة الأعمال الفعلية والتنفيذ اللازم لحلها.",
    fa: "کسب‌وکاری که تنها یک گردش‌کار پیگیری ناکارآمد دارد نباید هزینه دامنه‌ای را بپردازد که برای اتصال چند واحد، یکپارچه‌سازی و سیستم گزارش‌دهی لازم است. قیمت‌گذاری بر اساس مسئله واقعی کسب‌وکار و اجرای موردنیاز برای حل آن انجام می‌شود.",
  },
  "pricing.fit.badge": { en: "Engagement Fit", ar: "مدى الملاءمة", fa: "تناسب همکاری" },
  "pricing.fit.title": {
    en: "Is This the Right Fit?",
    ar: "هل هذا التعاون مناسب؟",
    fa: "آیا این همکاری مناسب است؟",
  },
  "pricing.fit.desc": {
    en: "The strongest engagements begin with a real operational problem, an involved process owner, and willingness to improve how the work is done.",
    ar: "تبدأ أفضل حالات التعاون بمشكلة تشغيلية حقيقية ومسؤول عن العملية واستعداد لتحسين طريقة العمل.",
    fa: "بهترین همکاری‌ها با یک مسئله عملیاتی واقعی، حضور مسئول فرایند و آمادگی برای بهبود روش انجام کار آغاز می‌شوند.",
  },
  "pricing.fit.yes.title": {
    en: "A good fit when",
    ar: "يكون مناسباً عندما",
    fa: "همکاری مناسب است وقتی",
  },
  "pricing.fit.yes.1": {
    en: "Your business in Oman has recurring workflows and measurable operational pain",
    ar: "لدى شركتك في عُمان سير عمل متكرر ومشكلة تشغيلية يمكن قياسها",
    fa: "کسب‌وکار شما در عمان گردش‌کارهای تکرارشونده و یک مسئله عملیاتی قابل‌اندازه‌گیری دارد",
  },
  "pricing.fit.yes.2": {
    en: "Manual follow-up or limited management visibility causes delays or lost work",
    ar: "تسبب المتابعة اليدوية أو ضعف وضوح المعلومات للإدارة تأخيراً أو فقداناً للعمل",
    fa: "پیگیری دستی یا دید محدود مدیریت باعث تأخیر یا از‌دست‌رفتن کار می‌شود",
  },
  "pricing.fit.yes.3": {
    en: "Several people or teams are involved and someone can own the process",
    ar: "يشارك عدة أشخاص أو فرق ويوجد شخص يمكنه تحمّل مسؤولية العملية",
    fa: "چند نفر یا تیم درگیر هستند و فردی می‌تواند مسئولیت فرایند را بر عهده بگیرد",
  },
  "pricing.fit.no.title": {
    en: "May not be the right fit when",
    ar: "قد لا يكون مناسباً عندما",
    fa: "ممکن است مناسب نباشد وقتی",
  },
  "pricing.fit.no.1": {
    en: "There is no defined operational problem beyond a general request for AI",
    ar: "لا توجد مشكلة تشغيلية محددة سوى طلب عام لاستخدام AI",
    fa: "مسئله عملیاتی مشخصی فراتر از درخواست کلی برای AI وجود ندارد",
  },
  "pricing.fit.no.2": {
    en: "No one can own the process or support a change in the workflow",
    ar: "لا يوجد من يملك العملية أو يدعم تغيير سير العمل",
    fa: "هیچ‌کس نمی‌تواند مسئول فرایند باشد یا از تغییر گردش‌کار پشتیبانی کند",
  },
  "pricing.fit.no.3": {
    en: "The value of solving the problem is likely lower than the implementation effort",
    ar: "من المرجح أن تكون قيمة حل المشكلة أقل من جهد التنفيذ",
    fa: "احتمالاً ارزش حل مسئله کمتر از تلاش لازم برای پیاده‌سازی است",
  },
  "pricing.cta.badge": { en: "First Step", ar: "الخطوة الأولى", fa: "گام اول" },
  "pricing.cta.title": {
    en: "Start With the Operational Problem",
    ar: "ابدأ بالمشكلة التشغيلية",
    fa: "از مسئله عملیاتی شروع کنید",
  },
  "pricing.cta.desc": {
    en: "Discuss the workflow that is creating delays, lost follow-up, or limited visibility and define the most useful next step.",
    ar: "ناقش سير العمل الذي يسبب التأخير أو فقدان المتابعة أو ضعف الرؤية، وحدد الخطوة التالية الأكثر فائدة.",
    fa: "درباره گردش‌کاری که باعث تأخیر، پیگیری ازدست‌رفته یا دید محدود شده گفت‌وگو کنید و مفیدترین گام بعدی را مشخص کنید.",
  },
  "pricing.cta.primary": {
    en: "Book an Operations Assessment",
    ar: "احجز تقييماً للعمليات",
    fa: "رزرو ارزیابی عملیات",
  },
  "pricing.cta.secondary": {
    en: "Explore Services",
    ar: "استكشف الخدمات",
    fa: "مشاهده خدمات",
  },
  "pricing.cta.about": {
    en: "Learn about the approach",
    ar: "تعرّف على منهجية العمل",
    fa: "آشنایی با رویکرد کاری",
  },

  /* ---------- About page ---------- */
  "about.badge": {
    en: "About the Approach",
    ar: "عن منهجية العمل",
    fa: "درباره رویکرد کاری",
  },
  "about.title": {
    en: "About Zakeri — Business Systems & Automation Consultant in Oman",
    ar: "عن زاكري — مستشار أنظمة الأعمال والأتمتة في عُمان",
    fa: "درباره زاکری — مشاور سیستم‌های کسب‌وکار و اتوماسیون در عمان",
  },
  "about.desc": {
    en: "I work with growing businesses in Oman to turn manual, scattered operations into systems that are easier to see, manage, and improve.",
    ar: "أعمل مع الشركات النامية في عُمان لتحويل العمليات اليدوية والمبعثرة إلى أنظمة أسهل في الرؤية والإدارة والتحسين.",
    fa: "با کسب‌وکارهای در حال رشد در عمان همکاری می‌کنم تا عملیات دستی و پراکنده را به سیستم‌هایی تبدیل کنند که مشاهده، مدیریت و بهبودشان آسان‌تر است.",
  },
  "about.actual.badge": {
    en: "The Work",
    ar: "طبيعة العمل",
    fa: "ماهیت کار",
  },
  "about.actual.title": {
    en: "What I Actually Do",
    ar: "ما الذي أفعله عملياً",
    fa: "در عمل چه کاری انجام می‌دهم",
  },
  "about.actual.desc": {
    en: "I examine how recurring work moves through people and tools: who owns it, where it waits, what management can see, and what still depends on manual follow-up.",
    ar: "أفحص كيف ينتقل العمل المتكرر بين الأشخاص والأدوات: من المسؤول عنه، وأين يتوقّف، وما الذي تستطيع الإدارة رؤيته، وما الذي ما زال يعتمد على المتابعة اليدوية.",
    fa: "بررسی می‌کنم کارهای تکرارشونده چگونه میان افراد و ابزارها جریان دارند: چه کسی مسئول است، کار کجا متوقف می‌شود، مدیریت چه چیزی را می‌بیند و چه بخش‌هایی هنوز به پیگیری دستی وابسته‌اند.",
  },
  "about.actual.response": {
    en: "Only after that diagnosis do I determine whether the right response is workflow redesign, CRM or ERP process improvement, a Dashboard, integration, Automation, software, or selective AI.",
    ar: "بعد هذا التشخيص فقط أحدّد ما إذا كانت الاستجابة المناسبة هي إعادة تصميم Workflow أو تحسين عمليات CRM أو ERP أو Dashboard أو التكامل أو Automation أو برنامج مخصص أو استخدام انتقائي للذكاء الاصطناعي.",
    fa: "فقط پس از این بررسی مشخص می‌کنم که پاسخ مناسب، بازطراحی Workflow، بهبود فرایند CRM یا ERP، داشبورد، یکپارچه‌سازی، Automation، نرم‌افزار یا استفاده انتخابی از AI است.",
  },
  "about.actual.note": {
    en: "Technology comes after the operational problem is understood.",
    ar: "تأتي التقنية بعد فهم المشكلة التشغيلية.",
    fa: "فناوری پس از درک مسئله عملیاتی انتخاب می‌شود.",
  },
  "about.approach.badge": {
    en: "Method",
    ar: "المنهجية",
    fa: "روش کار",
  },
  "about.approach.title": {
    en: "A Practical Approach to Better Operations",
    ar: "منهج عملي لتحسين العمليات",
    fa: "رویکردی عملی برای عملیات بهتر",
  },
  "about.approach.desc": {
    en: "The sequence matters: understand the business first, then improve the process and introduce the right level of technology.",
    ar: "الترتيب مهم: نفهم العمل أولاً، ثم نحسّن العملية ونستخدم المستوى المناسب من التقنية.",
    fa: "ترتیب مراحل مهم است: ابتدا کسب‌وکار درک می‌شود، سپس فرایند بهبود می‌یابد و سطح مناسب فناوری به کار گرفته می‌شود.",
  },
  "about.approach.1.title": {
    en: "Diagnose the real problem",
    ar: "تشخيص المشكلة الحقيقية",
    fa: "تشخیص مسئله واقعی",
  },
  "about.approach.1.desc": {
    en: "Identify where time, information, control, or opportunities are being lost.",
    ar: "تحديد أين يضيع الوقت أو المعلومات أو التحكّم أو الفرص.",
    fa: "مشخص‌کردن محل اتلاف زمان، اطلاعات، کنترل یا فرصت‌ها.",
  },
  "about.approach.2.title": {
    en: "Map the workflow",
    ar: "رسم سير العمل",
    fa: "ترسیم گردش‌کار",
  },
  "about.approach.2.desc": {
    en: "Clarify ownership, status, hand-offs, approvals, exceptions, and reporting needs.",
    ar: "توضيح المسؤولية والحالة ونقاط التسليم والموافقات والاستثناءات واحتياجات التقارير.",
    fa: "شفاف‌کردن مسئولیت، وضعیت، تحویل کار، تأییدها، استثناها و نیازهای گزارش‌دهی.",
  },
  "about.approach.3.title": {
    en: "Design the system",
    ar: "تصميم النظام",
    fa: "طراحی سیستم",
  },
  "about.approach.3.desc": {
    en: "Build a visible, manageable structure around the way the business needs to operate.",
    ar: "بناء هيكل واضح وقابل للإدارة حول الطريقة التي يجب أن يعمل بها النشاط.",
    fa: "ساختاری شفاف و قابل‌مدیریت متناسب با شیوه‌ای که کسب‌وکار باید عمل کند.",
  },
  "about.approach.4.title": {
    en: "Automate measurable work",
    ar: "أتمتة العمل القابل للقياس",
    fa: "خودکارسازی کار قابل‌اندازه‌گیری",
  },
  "about.approach.4.desc": {
    en: "Automate repetitive, rule-based steps where the benefit can be observed.",
    ar: "أتمتة الخطوات المتكررة والقائمة على قواعد عندما تكون الفائدة واضحة.",
    fa: "خودکارسازی مراحل تکراری و قاعده‌مند در جایی که نتیجه آن قابل‌مشاهده باشد.",
  },
  "about.approach.5.title": {
    en: "Use AI selectively",
    ar: "استخدام AI بشكل انتقائي",
    fa: "استفاده انتخابی از AI",
  },
  "about.approach.5.desc": {
    en: "Apply AI only when it improves a defined workflow and creates practical value.",
    ar: "استخدام AI فقط عندما يحسّن سير عمل محدداً ويخلق قيمة عملية.",
    fa: "استفاده از AI فقط زمانی که یک گردش‌کار مشخص را بهتر کند و ارزش عملی بسازد.",
  },
  "about.approach.6.title": {
    en: "Measure and improve",
    ar: "القياس والتحسين",
    fa: "اندازه‌گیری و بهبود",
  },
  "about.approach.6.desc": {
    en: "Review adoption, bottlenecks, exceptions, and management visibility over time.",
    ar: "مراجعة التبنّي والاختناقات والاستثناءات ووضوح المعلومات للإدارة مع الوقت.",
    fa: "بررسی پذیرش، گلوگاه‌ها، استثناها و دید مدیریتی در طول زمان.",
  },
  "about.principles.badge": {
    en: "Principles",
    ar: "المبادئ",
    fa: "اصول",
  },
  "about.principles.title": {
    en: "The Principles Behind the Work",
    ar: "المبادئ التي تقود العمل",
    fa: "اصولی که مسیر کار را مشخص می‌کنند",
  },
  "about.principles.1.title": {
    en: "Business problem before technology",
    ar: "مشكلة العمل قبل التقنية",
    fa: "مسئله کسب‌وکار پیش از فناوری",
  },
  "about.principles.1.desc": {
    en: "Choose tools only after the operational need is clear.",
    ar: "اختيار الأدوات بعد وضوح الحاجة التشغيلية فقط.",
    fa: "ابزار فقط پس از روشن‌شدن نیاز عملیاتی انتخاب می‌شود.",
  },
  "about.principles.2.title": {
    en: "Process before automation",
    ar: "العملية قبل الأتمتة",
    fa: "فرایند پیش از اتوماسیون",
  },
  "about.principles.2.desc": {
    en: "Automating a weak process usually makes the weakness move faster.",
    ar: "أتمتة عملية ضعيفة غالباً ما تجعل الضعف ينتقل بشكل أسرع.",
    fa: "خودکارسازی یک فرایند ضعیف معمولاً فقط ضعف آن را سریع‌تر می‌کند.",
  },
  "about.principles.3.title": {
    en: "Visibility before more management",
    ar: "الوضوح قبل إضافة مزيد من الإدارة",
    fa: "شفافیت پیش از مدیریت بیشتر",
  },
  "about.principles.3.desc": {
    en: "Managers should focus on decisions, not spend their time collecting status.",
    ar: "ينبغي أن يركّز المديرون على القرارات بدلاً من قضاء الوقت في جمع الحالات.",
    fa: "مدیران باید بر تصمیم‌گیری تمرکز کنند، نه جمع‌آوری مداوم وضعیت‌ها.",
  },
  "about.principles.4.title": {
    en: "Simple systems people actually use",
    ar: "أنظمة بسيطة يستخدمها الناس فعلاً",
    fa: "سیستم‌های ساده‌ای که واقعاً استفاده می‌شوند",
  },
  "about.principles.4.desc": {
    en: "Practical adoption matters more than unnecessary complexity.",
    ar: "التبنّي العملي أهم من التعقيد غير الضروري.",
    fa: "پذیرش عملی از پیچیدگی غیرضروری مهم‌تر است.",
  },
  "about.principles.5.title": {
    en: "Automation must reduce measurable work",
    ar: "يجب أن تقلّل الأتمتة عملاً قابلاً للقياس",
    fa: "اتوماسیون باید کار قابل‌اندازه‌گیری را کاهش دهد",
  },
  "about.principles.5.desc": {
    en: "Automate where time, delay, errors, or manual effort can be reduced.",
    ar: "تُستخدم الأتمتة حيث يمكن تقليل الوقت أو التأخير أو الأخطاء أو الجهد اليدوي.",
    fa: "اتوماسیون باید زمان، تأخیر، خطا یا تلاش دستی را کاهش دهد.",
  },
  "about.principles.6.title": {
    en: "AI is optional",
    ar: "AI خيار وليس شرطاً",
    fa: "AI اختیاری است",
  },
  "about.principles.6.desc": {
    en: "Many meaningful improvements do not require AI at all.",
    ar: "كثير من التحسينات المهمة لا تحتاج إلى AI أساساً.",
    fa: "بسیاری از بهبودهای مهم اصلاً به AI نیاز ندارند.",
  },
  "about.principles.7.title": {
    en: "Adoption is part of the design",
    ar: "التبنّي جزء من التصميم",
    fa: "پذیرش بخشی از طراحی است",
  },
  "about.principles.7.desc": {
    en: "Responsibilities, usability, training, and exceptions must be considered from the start.",
    ar: "يجب مراعاة المسؤوليات وسهولة الاستخدام والتدريب والاستثناءات منذ البداية.",
    fa: "مسئولیت‌ها، سهولت استفاده، آموزش و استثناها باید از ابتدا در نظر گرفته شوند.",
  },
  "about.difference.badge": {
    en: "The Difference",
    ar: "الفرق",
    fa: "تفاوت رویکرد",
  },
  "about.difference.title": {
    en: "The Process Comes Before the Tool",
    ar: "العملية تأتي قبل الأداة",
    fa: "فرایند پیش از ابزار قرار می‌گیرد",
  },
  "about.difference.desc": {
    en: "The objective is not to force a company into a particular platform. It is to design the right operating workflow, then use suitable technology around it.",
    ar: "الهدف ليس فرض منصة محددة على الشركة، بل تصميم سير التشغيل المناسب ثم استخدام التقنية الملائمة حوله.",
    fa: "هدف، وادارکردن شرکت به استفاده از یک پلتفرم خاص نیست؛ هدف، طراحی گردش‌کار عملیاتی درست و سپس استفاده از فناوری مناسب پیرامون آن است.",
  },
  "about.difference.1.title": {
    en: "Business Process",
    ar: "عملية الأعمال",
    fa: "فرایند کسب‌وکار",
  },
  "about.difference.1.desc": {
    en: "Understand the real operating sequence, ownership, and exceptions.",
    ar: "فهم تسلسل التشغيل الفعلي والمسؤوليات والاستثناءات.",
    fa: "درک توالی واقعی عملیات، مسئولیت‌ها و استثناها.",
  },
  "about.difference.2.title": {
    en: "Software Understanding",
    ar: "فهم البرمجيات",
    fa: "درک نرم‌افزار",
  },
  "about.difference.2.desc": {
    en: "Use the capabilities of CRM, ERP, dashboards, and internal tools appropriately.",
    ar: "استخدام إمكانات CRM وERP ولوحات المعلومات والأدوات الداخلية بالشكل المناسب.",
    fa: "استفاده درست از قابلیت‌های CRM، ERP، داشبورد و ابزارهای داخلی.",
  },
  "about.difference.3.title": {
    en: "Automation",
    ar: "Automation",
    fa: "Automation",
  },
  "about.difference.3.desc": {
    en: "Apply clear rules and integrations to repetitive, measurable work.",
    ar: "تطبيق قواعد واضحة وتكاملات على العمل المتكرر والقابل للقياس.",
    fa: "اعمال قواعد روشن و یکپارچه‌سازی برای کارهای تکراری و قابل‌اندازه‌گیری.",
  },
  "about.difference.4.title": {
    en: "Practical AI",
    ar: "AI عملي",
    fa: "AI کاربردی",
  },
  "about.difference.4.desc": {
    en: "Use AI selectively where it supports a defined business result.",
    ar: "استخدام AI بشكل انتقائي عندما يدعم نتيجة عمل محددة.",
    fa: "استفاده انتخابی از AI در جایی که از یک نتیجه مشخص کسب‌وکار پشتیبانی کند.",
  },
  "about.oman.badge": {
    en: "Oman Focus",
    ar: "التركيز على عُمان",
    fa: "تمرکز بر عمان",
  },
  "about.oman.title": {
    en: "For Businesses Operating and Growing in Oman",
    ar: "للشركات التي تعمل وتنمو في عُمان",
    fa: "برای کسب‌وکارهایی که در عمان فعالیت و رشد می‌کنند",
  },
  "about.oman.desc": {
    en: "The work is focused on growing companies in Oman with recurring operational workflows, scattered information, manual coordination, or limited management visibility.",
    ar: "يركّز العمل على الشركات النامية في عُمان التي لديها عمليات تشغيلية متكررة أو معلومات مبعثرة أو تنسيق يدوي أو وضوح إداري محدود.",
    fa: "تمرکز کار بر شرکت‌های در حال رشد در عمان است که گردش‌کارهای عملیاتی تکرارشونده، اطلاعات پراکنده، هماهنگی دستی یا دید مدیریتی محدود دارند.",
  },
  "about.oman.primary": {
    en: "Priority industries",
    ar: "القطاعات ذات الأولوية",
    fa: "صنایع اولویت‌دار",
  },
  "about.oman.primaryList": {
    en: "Construction & Engineering · Trading & Distribution · Real Estate",
    ar: "الإنشاءات والهندسة · التجارة والتوزيع · العقارات",
    fa: "ساخت‌وساز و مهندسی · تجارت و توزیع · املاک",
  },
  "about.oman.secondary": {
    en: "Other relevant examples",
    ar: "أمثلة أخرى ذات صلة",
    fa: "نمونه‌های مرتبط دیگر",
  },
  "about.oman.secondaryList": {
    en: "Logistics & Fleet · Clinics",
    ar: "الخدمات اللوجستية وإدارة الأساطيل · العيادات",
    fa: "لجستیک و ناوگان · کلینیک‌ها",
  },
  "about.cta.badge": {
    en: "Start with the Operation",
    ar: "ابدأ من العملية",
    fa: "از عملیات شروع کنید",
  },
  "about.cta.title": {
    en: "Start with One Business Problem Worth Solving",
    ar: "ابدأ بمشكلة عمل واحدة تستحق الحل",
    fa: "با یک مسئله کسب‌وکار که ارزش حل‌کردن دارد شروع کنید",
  },
  "about.cta.desc": {
    en: "Describe the workflow, follow-up, approval, or reporting problem that is limiting visibility or consuming unnecessary time.",
    ar: "صِف مشكلة سير العمل أو المتابعة أو الموافقات أو التقارير التي تحدّ من الوضوح أو تستهلك وقتاً غير ضروري.",
    fa: "مسئله گردش‌کار، پیگیری، تأیید یا گزارش‌دهی را که دید را محدود می‌کند یا زمان غیرضروری می‌گیرد شرح دهید.",
  },
  "about.cta.primary": {
    en: "Book an Operations Assessment",
    ar: "احجز تقييماً للعمليات",
    fa: "رزرو ارزیابی عملیات",
  },
  "about.cta.secondary": {
    en: "Explore Services",
    ar: "استكشف الخدمات",
    fa: "مشاهده خدمات",
  },
  "about.cta.home": {
    en: "Return to the homepage",
    ar: "العودة إلى الصفحة الرئيسية",
    fa: "بازگشت به صفحه اصلی",
  },

  /* ---------- Contact page ---------- */
  "contact.badge": {
    en: "Operations Assessment",
    ar: "تقييم العمليات",
    fa: "ارزیابی عملیات",
  },
  "contact.title": {
    en: "Let's Identify the First Workflow Worth Fixing",
    ar: "لنحدّد أول سير عمل يستحق التحسين",
    fa: "بیایید اولین گردش‌کار ارزشمند برای بهبود را پیدا کنیم",
  },
  "contact.desc": {
    en: "If growth still depends on manual follow-up, scattered information, or constant status checking, describe the workflow so I can determine whether an Assessment or Pilot makes sense.",
    ar: "إذا كان نمو العمل ما زال يعتمد على المتابعة اليدوية أو المعلومات المبعثرة أو السؤال المستمر عن الحالة، فصِف سير العمل لأحدد ما إذا كان التقييم أو التجربة المحددة مناسباً.",
    fa: "اگر رشد کسب‌وکار هنوز به پیگیری دستی، اطلاعات پراکنده یا بررسی مداوم وضعیت وابسته است، گردش‌کار را شرح دهید تا بتوانم مشخص کنم ارزیابی یا پایلوت مناسب است یا نه.",
  },
  "contact.formTitle": {
    en: "Describe the Operational Problem",
    ar: "صِف المشكلة التشغيلية",
    fa: "مسئله عملیاتی را شرح دهید",
  },
  "contact.formDesc": {
    en: "You do not need to choose the technology. Explain the current workflow and where control, time, or information is being lost.",
    ar: "لا تحتاج إلى اختيار التقنية. اشرح سير العمل الحالي وأين يُفقد الوقت أو التحكّم أو المعلومات.",
    fa: "لازم نیست فناوری را انتخاب کنید. گردش‌کار فعلی و محل اتلاف زمان، کنترل یا اطلاعات را توضیح دهید.",
  },
  "contact.directChannels": {
    en: "Direct Contact",
    ar: "التواصل المباشر",
    fa: "تماس مستقیم",
  },
  "contact.whatsappDesc": {
    en: "Prefer WhatsApp? Send a short description of the workflow or operational problem.",
    ar: "تفضّل واتساب؟ أرسل وصفاً مختصراً لسير العمل أو المشكلة التشغيلية.",
    fa: "واتساپ را ترجیح می‌دهید؟ شرح کوتاهی از گردش‌کار یا مسئله عملیاتی ارسال کنید.",
  },
  "contact.whatsappCta": {
    en: "Describe the Workflow on WhatsApp",
    ar: "صِف سير العمل عبر واتساب",
    fa: "شرح گردش‌کار در واتساپ",
  },
  "contact.nextBadge": {
    en: "The Process",
    ar: "مسار العمل",
    fa: "روند کار",
  },
  "contact.nextTitle": {
    en: "What Happens Next",
    ar: "ماذا يحدث بعد ذلك",
    fa: "بعد از ارسال چه اتفاقی می‌افتد",
  },
  "contact.nextDesc": {
    en: "The first conversation is about understanding the operation—not selling software.",
    ar: "المحادثة الأولى هدفها فهم العملية، وليس بيع البرامج.",
    fa: "گفت‌وگوی اول برای درک عملیات است، نه فروش نرم‌افزار.",
  },
  "contact.next.1.title": {
    en: "Describe the issue",
    ar: "صِف المشكلة",
    fa: "مسئله را شرح دهید",
  },
  "contact.next.1.desc": {
    en: "Share where work depends on manual follow-up, scattered information, or unclear ownership.",
    ar: "وضّح أين يعتمد العمل على المتابعة اليدوية أو المعلومات المبعثرة أو المسؤولية غير الواضحة.",
    fa: "بگویید کار کجا به پیگیری دستی، اطلاعات پراکنده یا مسئولیت نامشخص وابسته است.",
  },
  "contact.next.2.title": {
    en: "Suitability review",
    ar: "مراجعة مدى الملاءمة",
    fa: "بررسی تناسب",
  },
  "contact.next.2.desc": {
    en: "I review whether the issue is suitable for an Operations Assessment.",
    ar: "أراجع ما إذا كانت المشكلة مناسبة لتقييم العمليات.",
    fa: "بررسی می‌کنم که آیا مسئله برای ارزیابی عملیات مناسب است یا نه.",
  },
  "contact.next.3.title": {
    en: "Workflow discussion",
    ar: "مناقشة سير العمل",
    fa: "گفت‌وگو درباره گردش‌کار",
  },
  "contact.next.3.desc": {
    en: "If relevant, I discuss the current workflow with you and identify a practical first improvement.",
    ar: "إذا كان مناسباً، أناقش معك سير العمل الحالي وأحدد أول تحسين عملي.",
    fa: "در صورت تناسب، گردش‌کار فعلی را با شما بررسی می‌کنم و اولین بهبود عملی را مشخص می‌کنم.",
  },
  "contact.next.4.title": {
    en: "Define the next step",
    ar: "تحديد الخطوة التالية",
    fa: "تعیین گام بعدی",
  },
  "contact.next.4.desc": {
    en: "A focused Assessment or a Paid Pilot for one defined workflow may be recommended.",
    ar: "قد نوصي بتقييم مركّز أو تجربة مدفوعة لسير عمل واحد محدد.",
    fa: "ممکن است یک ارزیابی متمرکز یا پایلوت پولی برای یک گردش‌کار مشخص پیشنهاد شود.",
  },
  "contact.explore": {
    en: "Before getting in touch, you can review the services, learn about the approach, or return to the homepage.",
    ar: "قبل التواصل، يمكنك مراجعة الخدمات أو التعرّف على منهجية العمل أو العودة إلى الصفحة الرئيسية.",
    fa: "پیش از تماس می‌توانید خدمات را بررسی کنید، با رویکرد کاری آشنا شوید یا به صفحه اصلی برگردید.",
  },
  "contact.explore.services": { en: "services", ar: "الخدمات", fa: "خدمات" },
  "contact.explore.about": {
    en: "the approach",
    ar: "منهجية العمل",
    fa: "رویکرد کاری",
  },
  "contact.explore.home": { en: "homepage", ar: "الصفحة الرئيسية", fa: "صفحه اصلی" },
  "contact.faqBadge": {
    en: "Before We Talk",
    ar: "قبل أن نتحدث",
    fa: "پیش از گفت‌وگو",
  },
  "contact.faqTitle": {
    en: "Questions About the First Step",
    ar: "أسئلة حول الخطوة الأولى",
    fa: "پرسش‌هایی درباره گام اول",
  },
} satisfies Record<string, Entry>;

export type MessageKey = keyof typeof M;

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: string) => string;
  dir: "ltr" | "rtl";
};

const LangCtx = createContext<Ctx | null>(null);

export function LanguageProvider({
  children,
  initialLang,
}: {
  children: ReactNode;
  initialLang: Lang;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const lang = pathname ? getLangFromPathname(pathname) : initialLang;

  useEffect(() => {
    const dir = getDirection(lang);
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = dir;
    }
    try {
      localStorage.setItem("lang", lang);
    } catch {
      // Ignore unavailable storage in locked-down browser contexts.
    }
  }, [lang]);

  const setLang = useCallback(
    (l: Lang) => {
      try {
        localStorage.setItem("lang", l);
      } catch {
        // Ignore unavailable storage in locked-down browser contexts.
      }

      const suffix =
        typeof window === "undefined" ? "" : `${window.location.search}${window.location.hash}`;
      router.push(`${localizePathname(pathname || "/", l)}${suffix}`);
    },
    [pathname, router],
  );

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang,
      t: (k) => {
        const entry = (M as Record<string, Entry>)[k];
        return entry ? (entry[lang] ?? entry.en) : k;
      },
      dir: getDirection(lang),
    }),
    [lang, setLang],
  );

  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}
