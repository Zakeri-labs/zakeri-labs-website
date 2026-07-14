"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "ar" | "fa";

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
  "nav.pricing": { en: "Pricing", ar: "الأسعار", fa: "قیمت‌گذاری" },
  "nav.insights": { en: "Insights", ar: "رؤى", fa: "بینش‌ها" },
  "nav.about": { en: "About", ar: "من نحن", fa: "درباره ما" },
  "nav.contact": { en: "Contact", ar: "تواصل معنا", fa: "تماس" },
  "nav.caseStudies": { en: "Case Studies", ar: "دراسات الحالة", fa: "نمونه‌کارها" },

  /* ---------- Shared CTAs ---------- */
  "cta.audit": {
    en: "Book a Growth Audit",
    ar: "احجز جلسة تدقيق للنمو",
    fa: "رزرو ممیزی رشد",
  },
  "cta.whatsapp": {
    en: "Contact on WhatsApp",
    ar: "تواصل عبر واتساب",
    fa: "تماس از طریق واتساپ",
  },
  "cta.system": { en: "See the System", ar: "شاهد النظام", fa: "مشاهده‌ی سیستم" },
  "cta.send": { en: "Send Request", ar: "إرسال الطلب", fa: "ارسال درخواست" },
  "cta.sending": { en: "Sending...", ar: "جارٍ الإرسال...", fa: "در حال ارسال..." },
  "cta.work": { en: "Work With Us", ar: "اعمل معنا", fa: "همکاری با ما" },
  "lang.label": { en: "Language", ar: "اللغة", fa: "زبان" },

  /* ---------- Hero ---------- */
  "hero.badge": {
    en: "AI Website Growth Infrastructure",
    ar: "بنية نمو المواقع بالذكاء الاصطناعي",
    fa: "زیرساخت رشد وب‌سایت با هوش مصنوعی",
  },
  "hero.titlePre": {
    en: "Websites Built to Drive ",
    ar: "مواقع مصمّمة لتحقيق ",
    fa: "وب‌سایت‌هایی برای جذب ",
  },
  "hero.titleHl": {
    en: "Traffic, Trust, Leads",
    ar: "الزيارات والثقة والعملاء",
    fa: "ترافیک، اعتماد و لید",
  },
  "hero.titlePost": {
    en: " & Search Visibility.",
    ar: " وظهور أقوى في البحث.",
    fa: " و دیده‌شدن در جستجو.",
  },
  "hero.desc": {
    en: "We design premium websites as growth systems, combining strategy, SEO, AI-ready content, conversion flow, and lead capture.",
    ar: "نصمّم مواقع متميزة كأنظمة نمو متكاملة، تجمع بين الاستراتيجية وتحسين محركات البحث والمحتوى الجاهز للذكاء الاصطناعي ومسار التحويل والتقاط العملاء.",
    fa: "ما وب‌سایت‌های پریمیوم را به‌عنوان سیستم رشد طراحی می‌کنیم، ترکیبی از استراتژی، سئو، محتوای آماده‌ی هوش مصنوعی، مسیر تبدیل و جذب لید.",
  },
  "hero.note": {
    en: "For businesses that need more than a beautiful website.",
    ar: "لأصحاب الأعمال الذين يحتاجون أكثر من مجرد موقع جميل.",
    fa: "برای کسب‌وکارهایی که به چیزی فراتر از یک وب‌سایت زیبا نیاز دارند.",
  },

  /* ---------- Trust Bar ---------- */
  "trust.badge": {
    en: "Built for Visibility, Trust, and Conversion",
    ar: "مبني للظهور والثقة والتحويل",
    fa: "ساخته‌شده برای دیده‌شدن، اعتماد و تبدیل",
  },
  "trust.title": {
    en: "Built for Growth, Not Decoration",
    ar: "مصمّم للنمو، لا للزينة",
    fa: "ساخته‌شده برای رشد، نه تزئین",
  },
  "trust.desc": {
    en: "Every page, section, and CTA is planned to help your website attract, explain, and convert.",
    ar: "كل صفحة وقسم ودعوة لاتخاذ إجراء مخطّطة لمساعدة موقعك على الجذب والتوضيح والتحويل.",
    fa: "هر صفحه، بخش و دکمه‌ی اقدام طوری طراحی شده که وب‌سایت شما جذب کند، توضیح دهد و تبدیل کند.",
  },
  "trust.foot": {
    en: "Every section, page, and CTA is planned around business growth, not decoration.",
    ar: "كل قسم وصفحة ودعوة لاتخاذ إجراء مخطّطة حول نمو الأعمال، لا الزينة.",
    fa: "هر بخش، صفحه و دکمه‌ی اقدام حول رشد کسب‌وکار طراحی شده، نه تزئین.",
  },
  "trust.item.strategy": {
    en: "Website Strategy",
    ar: "استراتيجية الموقع",
    fa: "استراتژی وب‌سایت",
  },
  "trust.item.conversion": {
    en: "Conversion Strategy & Planning",
    ar: "استراتيجية التحويل والتخطيط",
    fa: "استراتژی و برنامه‌ریزی تبدیل",
  },
  "trust.item.seo": { en: "SEO-Ready Structure", ar: "بنية جاهزة للسيو", fa: "ساختار آماده‌ی سئو" },
  "trust.item.aiSearch": {
    en: "AI Search / GEO / AEO Visibility",
    ar: "ظهور في بحث الذكاء الاصطناعي / GEO / AEO",
    fa: "دیده‌شدن در جستجوی هوش مصنوعی / GEO / AEO",
  },
  "trust.item.aiContent": {
    en: "AI-Ready Content",
    ar: "محتوى جاهز للذكاء الاصطناعي",
    fa: "محتوای آماده‌ی هوش مصنوعی",
  },
  "trust.item.lead": {
    en: "Lead Generation & Capture",
    ar: "توليد العملاء والتقاطهم",
    fa: "تولید و جذب لید",
  },
  "trust.item.webapp": { en: "Web Applications", ar: "تطبيقات الويب", fa: "اپلیکیشن‌های وب" },
  "trust.item.analytics": { en: "Analytics Path", ar: "مسار التحليلات", fa: "مسیر تحلیل داده" },

  /* ---------- Problem ---------- */
  "problem.badge": { en: "Growth Gaps", ar: "فجوات النمو", fa: "شکاف‌های رشد" },
  "problem.title1": {
    en: "Most Websites Look Fine,",
    ar: "معظم المواقع تبدو جيدة،",
    fa: "بیشتر وب‌سایت‌ها خوب به نظر می‌رسند،",
  },
  "problem.title2": {
    en: "But Don't Create Growth.",
    ar: "لكنها لا تحقّق نموًا.",
    fa: "اما رشدی ایجاد نمی‌کنند.",
  },
  "problem.1.title": {
    en: "No Qualified Traffic",
    ar: "لا زيارات مؤهّلة",
    fa: "بدون ترافیک هدفمند",
  },
  "problem.1.desc": {
    en: "The right people are not finding you.",
    ar: "الأشخاص المناسبون لا يجدونك.",
    fa: "افراد مناسب شما را پیدا نمی‌کنند.",
  },
  "problem.2.title": { en: "No Trust Architecture", ar: "لا بنية للثقة", fa: "بدون معماری اعتماد" },
  "problem.2.desc": {
    en: "Visitors do not see enough proof to believe.",
    ar: "الزوّار لا يرون دليلاً كافياً ليثقوا.",
    fa: "بازدیدکنندگان شواهد کافی برای اعتماد نمی‌بینند.",
  },
  "problem.3.title": { en: "No Conversion Path", ar: "لا مسار للتحويل", fa: "بدون مسیر تبدیل" },
  "problem.3.desc": {
    en: "Interest disappears without a clear next step.",
    ar: "يتلاشى الاهتمام دون خطوة تالية واضحة.",
    fa: "علاقه بدون یک گام بعدی روشن از بین می‌رود.",
  },
  "problem.4.title": {
    en: "No AI/Search Visibility",
    ar: "لا ظهور في الذكاء الاصطناعي/البحث",
    fa: "بدون دیده‌شدن در هوش مصنوعی/جستجو",
  },
  "problem.4.desc": {
    en: "Your business is not structured for modern discovery.",
    ar: "نشاطك التجاري غير مهيكل للاكتشاف الحديث.",
    fa: "کسب‌وکار شما برای کشف‌شدن مدرن ساختاربندی نشده است.",
  },
  "problem.cta": {
    en: "Find the Gaps in My Website",
    ar: "اكتشف فجوات موقعي",
    fa: "شکاف‌های وب‌سایت من را پیدا کن",
  },

  /* ---------- Solution ---------- */
  "solution.badge": { en: "Core Solution", ar: "الحل الأساسي", fa: "راه‌حل اصلی" },
  "solution.title": {
    en: "Website as Growth Infrastructure",
    ar: "الموقع كبنية تحتية للنمو",
    fa: "وب‌سایت به‌عنوان زیرساخت رشد",
  },
  "solution.1.title": {
    en: "Conversion-Focused Structure",
    ar: "بنية تركّز على التحويل",
    fa: "ساختار تبدیل‌محور",
  },
  "solution.1.desc": {
    en: "Planned around visitor intent, decision flow and clear CTAs.",
    ar: "مخطّطة حول نية الزائر ومسار القرار ودعوات واضحة لاتخاذ إجراء.",
    fa: "طراحی‌شده حول نیت بازدیدکننده، مسیر تصمیم و دکمه‌های اقدام روشن.",
  },
  "solution.2.title": {
    en: "SEO-Ready Architecture",
    ar: "بنية جاهزة للسيو",
    fa: "معماری آماده‌ی سئو",
  },
  "solution.2.desc": {
    en: "Structured for long-term search performance.",
    ar: "مهيكلة لأداء بحث طويل الأمد.",
    fa: "ساختاربندی‌شده برای عملکرد جستجوی بلندمدت.",
  },
  "solution.3.title": {
    en: "AI-Ready Content",
    ar: "محتوى جاهز للذكاء الاصطناعي",
    fa: "محتوای آماده‌ی هوش مصنوعی",
  },
  "solution.3.desc": {
    en: "Organized to be understood and surfaced by AI and search engines.",
    ar: "منظّم ليُفهَم ويظهر عبر الذكاء الاصطناعي ومحركات البحث.",
    fa: "سازمان‌یافته تا توسط هوش مصنوعی و موتورهای جستجو فهمیده و نمایش داده شود.",
  },
  "solution.4.title": {
    en: "Trust-Building Sections",
    ar: "أقسام تبني الثقة",
    fa: "بخش‌های اعتمادساز",
  },
  "solution.4.desc": {
    en: "Proof, positioning, case studies, FAQs and authority signals.",
    ar: "أدلة وتموضع ودراسات حالة وأسئلة شائعة وإشارات مصداقية.",
    fa: "شواهد، جایگاه‌سازی، نمونه‌کار، پرسش‌های متداول و نشانه‌های اعتبار.",
  },
  "solution.5.title": {
    en: "Lead Capture System",
    ar: "نظام التقاط العملاء",
    fa: "سیستم جذب لید",
  },
  "solution.5.desc": {
    en: "Forms, WhatsApp, offers and clear inquiry paths.",
    ar: "نماذج وواتساب وعروض ومسارات استفسار واضحة.",
    fa: "فرم‌ها، واتساپ، پیشنهادها و مسیرهای پرس‌وجوی روشن.",
  },
  "solution.6.title": {
    en: "Analytics & Improvement Path",
    ar: "مسار التحليلات والتحسين",
    fa: "مسیر تحلیل و بهبود",
  },
  "solution.6.desc": {
    en: "Measurement, review and optimization for continuous growth.",
    ar: "قياس ومراجعة وتحسين من أجل نمو مستمر.",
    fa: "سنجش، بازبینی و بهینه‌سازی برای رشد مداوم.",
  },
  "solution.cta": {
    en: "Let's Build Your Growth Engine",
    ar: "لنبنِ محرك نموك",
    fa: "بیایید موتور رشد شما را بسازیم",
  },

  /* ---------- Bridge ---------- */
  "bridge.diagnose": { en: "Diagnose", ar: "تشخيص", fa: "تشخیص" },
  "bridge.structure": { en: "Structure", ar: "هيكلة", fa: "ساختار" },
  "bridge.convert": { en: "Convert", ar: "تحويل", fa: "تبدیل" },

  /* ---------- Growth Engines (home services) ---------- */
  "engines.badge": { en: "Growth Engines", ar: "محركات النمو", fa: "موتورهای رشد" },
  "engines.title": {
    en: "The Engines Behind Every High-Performing Website",
    ar: "المحركات وراء كل موقع عالي الأداء",
    fa: "موتورهای پشت هر وب‌سایت پُربازده",
  },
  "engines.desc": {
    en: "Strategy, technology, and visibility working together to help your business attract the right audience, build trust faster, and turn visitors into leads.",
    ar: "استراتيجية وتقنية وظهور تعمل معاً لمساعدة عملك على جذب الجمهور المناسب وبناء الثقة بسرعة وتحويل الزوّار إلى عملاء.",
    fa: "استراتژی، فناوری و دیده‌شدن دست‌به‌دست هم می‌دهند تا کسب‌وکار شما مخاطب درست را جذب کند، سریع‌تر اعتماد بسازد و بازدیدکننده را به لید تبدیل کند.",
  },
  "engines.1.title": { en: "GEO & AEO Ranking", ar: "تصنيف GEO و AEO", fa: "رتبه‌بندی GEO و AEO" },
  "engines.1.desc": {
    en: "Improve how your business appears in Google, AI search, answer engines, and modern discovery platforms.",
    ar: "حسّن طريقة ظهور عملك في جوجل وبحث الذكاء الاصطناعي ومحركات الإجابة ومنصات الاكتشاف الحديثة.",
    fa: "نحوه‌ی نمایش کسب‌وکار شما در گوگل، جستجوی هوش مصنوعی، موتورهای پاسخ و پلتفرم‌های کشف مدرن را بهبود دهید.",
  },
  "engines.1.cta": { en: "Improve Visibility", ar: "حسّن الظهور", fa: "بهبود دیده‌شدن" },
  "engines.2.title": { en: "AI Solution", ar: "حلول الذكاء الاصطناعي", fa: "راهکار هوش مصنوعی" },
  "engines.2.desc": {
    en: "Add practical AI workflows, automation systems, content processes, and customer-facing tools.",
    ar: "أضف تدفقات عمل عملية بالذكاء الاصطناعي وأنظمة أتمتة وعمليات محتوى وأدوات موجّهة للعملاء.",
    fa: "گردش‌کارهای کاربردی هوش مصنوعی، سیستم‌های اتوماسیون، فرایندهای محتوا و ابزارهای رو به مشتری اضافه کنید.",
  },
  "engines.2.cta": {
    en: "Explore AI Systems",
    ar: "استكشف أنظمة الذكاء الاصطناعي",
    fa: "کاوش سیستم‌های هوش مصنوعی",
  },
  "engines.3.title": {
    en: "Website & Web Application",
    ar: "موقع وتطبيق ويب",
    fa: "وب‌سایت و اپلیکیشن وب",
  },
  "engines.3.desc": {
    en: "Build premium websites, landing pages, portals, and lightweight web applications tailored to your offer.",
    ar: "ابنِ مواقع متميزة وصفحات هبوط وبوابات وتطبيقات ويب خفيفة مصمّمة لعرضك.",
    fa: "وب‌سایت‌های پریمیوم، صفحات فرود، پورتال‌ها و اپلیکیشن‌های وب سبک متناسب با پیشنهاد خود بسازید.",
  },
  "engines.3.cta": { en: "Build the Platform", ar: "ابنِ المنصة", fa: "ساخت پلتفرم" },
  "engines.4.title": {
    en: "AI Visibility",
    ar: "ظهور الذكاء الاصطناعي",
    fa: "دیده‌شدن در هوش مصنوعی",
  },
  "engines.4.desc": {
    en: "Make your business easier for AI systems to understand, categorize, recommend, and explain.",
    ar: "اجعل عملك أسهل على أنظمة الذكاء الاصطناعي لفهمه وتصنيفه والتوصية به وشرحه.",
    fa: "کسب‌وکار خود را برای سیستم‌های هوش مصنوعی ساده‌تر کنید تا آن را بفهمند، دسته‌بندی کنند، توصیه کنند و توضیح دهند.",
  },
  "engines.4.cta": {
    en: "Get AI-Ready",
    ar: "كن جاهزاً للذكاء الاصطناعي",
    fa: "آماده‌ی هوش مصنوعی شوید",
  },
  "engines.cta": {
    en: "Explore All Services",
    ar: "استكشف كل الخدمات",
    fa: "مشاهده‌ی همه‌ی خدمات",
  },

  /* ---------- Case Studies ---------- */
  "cases.badge": { en: "Proof of Execution", ar: "دليل التنفيذ", fa: "گواه اجرا" },
  "cases.title": {
    en: "Websites We've Designed and Deployed",
    ar: "مواقع صمّمناها وأطلقناها",
    fa: "وب‌سایت‌هایی که طراحی و راه‌اندازی کرده‌ایم",
  },
  "cases.desc": {
    en: "Real projects, clear execution, and practical growth systems for businesses that need stronger websites, better positioning, and smarter search visibility.",
    ar: "مشاريع حقيقية وتنفيذ واضح وأنظمة نمو عملية لأعمال تحتاج مواقع أقوى وتموضعاً أفضل وظهوراً أذكى في البحث.",
    fa: "پروژه‌های واقعی، اجرای روشن و سیستم‌های رشد کاربردی برای کسب‌وکارهایی که به وب‌سایت قوی‌تر، جایگاه بهتر و دیده‌شدن هوشمندتر در جستجو نیاز دارند.",
  },
  "cases.viewAll": {
    en: "View All Case Studies",
    ar: "عرض كل دراسات الحالة",
    fa: "مشاهده‌ی همه‌ی نمونه‌کارها",
  },
  "cases.view": { en: "View Case Study", ar: "عرض الدراسة", fa: "مشاهده‌ی نمونه‌کار" },
  "cases.1.industry": {
    en: "Commercial Disputes & Asset Recovery",
    ar: "النزاعات التجارية واسترداد الأصول",
    fa: "دعاوی تجاری و بازیابی دارایی",
  },
  "cases.1.title": {
    en: "Legal Website for Commercial Disputes and Asset Recovery",
    ar: "موقع قانوني للنزاعات التجارية واسترداد الأصول",
    fa: "وب‌سایت حقوقی برای دعاوی تجاری و بازیابی دارایی",
  },
  "cases.1.desc": {
    en: "Built to present commercial disputes, debt recovery, and asset recovery services for Iranian clients in the UAE.",
    ar: "مصمّم لعرض خدمات النزاعات التجارية واسترداد الديون والأصول للعملاء الإيرانيين في الإمارات.",
    fa: "ساخته‌شده برای معرفی خدمات دعاوی تجاری، وصول بدهی و بازیابی دارایی برای مشتریان ایرانی در امارات.",
  },
  "cases.2.industry": {
    en: "Luxury Real Estate Advisory",
    ar: "استشارات العقارات الفاخرة",
    fa: "مشاوره املاک لوکس",
  },
  "cases.2.title": {
    en: "Dubai Luxury Advisor Website for High-Value Property Decisions",
    ar: "موقع مستشار عقارات فاخرة في دبي لاتخاذ قرارات عقارية عالية القيمة",
    fa: "وب‌سایت مشاور املاک لوکس دبی برای تصمیم‌های ارزشمند ملکی",
  },
  "cases.2.desc": {
    en: "Designed for discreet guidance on Dubai residence, real estate, and strategic moves for high-value clients.",
    ar: "مصمّم لتقديم إرشاد خاص حول الإقامة والعقارات والتحركات الاستراتيجية في دبي للعملاء ذوي القيمة العالية.",
    fa: "طراحی‌شده برای ارائه‌ی مشاوره محرمانه درباره اقامت، املاک و تصمیم‌های استراتژیک در دبی برای مشتریان ارزشمند.",
  },
  "cases.3.industry": {
    en: "Luxury Cosmetic Dentistry",
    ar: "طب الأسنان التجميلي الفاخر",
    fa: "دندان‌پزشکی زیبایی لوکس",
  },
  "cases.3.title": {
    en: "Cosmetic Dentistry Website for Smile Transformations",
    ar: "موقع طب أسنان تجميلي لتحويلات الابتسامة",
    fa: "وب‌سایت دندان‌پزشکی زیبایی برای تحول لبخند",
  },
  "cases.3.desc": {
    en: "Created for a Dubai cosmetic dentist to present natural-looking smile transformations and consultation paths.",
    ar: "أُنشئ لطبيب أسنان تجميلي في دبي لعرض تحولات ابتسامة طبيعية ومسارات الاستشارة.",
    fa: "ساخته‌شده برای دندان‌پزشک زیبایی در دبی با تمرکز بر تحول طبیعی لبخند و مسیرهای مشاوره.",
  },
  "cases.4.industry": {
    en: "Bridal Makeup Artist",
    ar: "خبيرة مكياج العرائس",
    fa: "میکاپ آرتیست عروس",
  },
  "cases.4.title": {
    en: "Bridal Makeup Website for Dubai and Abu Dhabi Weddings",
    ar: "موقع مكياج عرائس لحفلات الزفاف في دبي وأبوظبي",
    fa: "وب‌سایت میکاپ عروس برای مراسم‌های دبی و ابوظبی",
  },
  "cases.4.desc": {
    en: "Designed to showcase refined bridal beauty, editorial style, and availability for premium wedding bookings.",
    ar: "مصمّم لعرض جمال العرائس الراقي والأسلوب التحريري وإتاحة الحجوزات لحفلات الزفاف المتميزة.",
    fa: "طراحی‌شده برای نمایش زیبایی ظریف عروس، سبک ادیتوریال و رزرو مراسم‌های پریمیوم.",
  },
  "cases.5.industry": {
    en: "Dubai Property Advisory",
    ar: "استشارات عقارية في دبي",
    fa: "مشاوره املاک دبی",
  },
  "cases.5.title": {
    en: "Property Advisory Website for Smarter Dubai Buying Decisions",
    ar: "موقع استشارات عقارية لقرارات شراء أذكى في دبي",
    fa: "وب‌سایت مشاوره املاک برای تصمیم‌های هوشمندانه‌تر خرید در دبی",
  },
  "cases.5.desc": {
    en: "Created for Persian-speaking buyers, sellers, and investors comparing Dubai property opportunities.",
    ar: "أُنشئ للمشترين والبائعين والمستثمرين الناطقين بالفارسية لمقارنة فرص العقارات في دبي.",
    fa: "ساخته‌شده برای خریداران، فروشندگان و سرمایه‌گذاران فارسی‌زبان در حال بررسی فرصت‌های ملکی دبی.",
  },
  "cases.6.industry": {
    en: "Dubai Real Estate Consulting",
    ar: "استشارات عقارية في دبي",
    fa: "مشاوره املاک در دبی",
  },
  "cases.6.title": {
    en: "Real Estate Website for Smarter Dubai Property Purchases",
    ar: "موقع عقاري لعمليات شراء عقارية أذكى في دبي",
    fa: "وب‌سایت املاک برای خرید هوشمندانه‌تر ملک در دبی",
  },
  "cases.6.desc": {
    en: "Designed for a Persian-speaking Dubai real estate consultant helping clients make confident purchase decisions.",
    ar: "مصمّم لمستشار عقاري ناطق بالفارسية في دبي لمساعدة العملاء على اتخاذ قرارات شراء واثقة.",
    fa: "طراحی‌شده برای مشاور املاک فارسی‌زبان در دبی با هدف کمک به تصمیم‌گیری مطمئن برای خرید.",
  },
  "cases.7.industry": {
    en: "Kurdish-Speaking Real Estate",
    ar: "استشارات عقارية باللغة الكردية",
    fa: "مشاوره املاک به زبان کردی",
  },
  "cases.7.title": {
    en: "Real Estate Advisor Website for Kurdish-Speaking Clients in Dubai",
    ar: "موقع مستشار عقاري للعملاء الناطقين بالكردية في دبي",
    fa: "وب‌سایت مشاور املاک برای مشتریان کردزبان در دبی",
  },
  "cases.7.desc": {
    en: "Built to present clear Dubai property guidance for Kurdish-speaking clients and investors.",
    ar: "أُنشئ لتقديم إرشاد واضح حول عقارات دبي للعملاء والمستثمرين الناطقين بالكردية.",
    fa: "ساخته‌شده برای ارائه‌ی مشاوره روشن درباره املاک دبی به مشتریان و سرمایه‌گذاران کردزبان.",
  },
  "cases.8.industry": {
    en: "Dubai Real Estate Consulting",
    ar: "استشارات عقارية في دبي",
    fa: "مشاوره املاک دبی",
  },
  "cases.8.title": {
    en: "Real Estate Consultant Website for Property Investment in Dubai",
    ar: "موقع مستشار عقاري للاستثمار العقاري في دبي",
    fa: "وب‌سایت مشاور املاک برای سرمایه‌گذاری ملکی در دبی",
  },
  "cases.8.desc": {
    en: "Built to present luxury property, off-plan projects, investment opportunities, and UAE residency guidance.",
    ar: "مصمّم لعرض العقارات الفاخرة والمشاريع قيد الإنشاء وفرص الاستثمار وإرشادات الإقامة في الإمارات.",
    fa: "ساخته‌شده برای معرفی املاک لوکس، پروژه‌های پیش‌فروش، فرصت‌های سرمایه‌گذاری و مشاوره اقامت امارات.",
  },

  /* ---------- Testimonials ---------- */
  "testimonials.1.quote": {
    en: "The website finally explains what we do clearly and gives visitors a reason to contact us.",
    ar: "أخيراً يشرح الموقع ما نقدّمه بوضوح ويمنح الزوّار سبباً للتواصل معنا.",
    fa: "بالاخره وب‌سایت به‌روشنی توضیح می‌دهد چه کاری انجام می‌دهیم و به بازدیدکننده دلیلی برای تماس می‌دهد.",
  },
  "testimonials.1.role": {
    en: "Founder / Managing Director",
    ar: "مؤسّس / مدير عام",
    fa: "بنیان‌گذار / مدیرعامل",
  },
  "testimonials.2.quote": {
    en: "The structure helped us move from a basic online presence to a more serious lead-generation system.",
    ar: "ساعدتنا البنية على الانتقال من حضور إلكتروني بسيط إلى نظام أكثر جدية لتوليد العملاء.",
    fa: "این ساختار کمک کرد از یک حضور آنلاین ساده به یک سیستم جدی‌تر تولید لید برسیم.",
  },
  "testimonials.2.role": { en: "Marketing Lead", ar: "مسؤول التسويق", fa: "مسئول بازاریابی" },
  "testimonials.3.quote": {
    en: "The process was strategic, clear, and focused on business outcomes instead of just design.",
    ar: "كانت العملية استراتيجية وواضحة وركّزت على نتائج العمل بدلاً من التصميم وحده.",
    fa: "فرایند، استراتژیک، روشن و متمرکز بر نتایج کسب‌وکار بود، نه صرفاً طراحی.",
  },
  "testimonials.3.role": { en: "Business Owner", ar: "صاحب عمل", fa: "صاحب کسب‌وکار" },
  "testimonials.namePlaceholder": {
    en: "Client Name Placeholder",
    ar: "اسم العميل",
    fa: "نام مشتری",
  },
  "testimonials.companyPlaceholder": {
    en: "Company Placeholder",
    ar: "اسم الشركة",
    fa: "نام شرکت",
  },

  /* ---------- Final CTA ---------- */
  "finalcta.badge": { en: "Start the Growth Audit", ar: "ابدأ تدقيق النمو", fa: "شروع ممیزی رشد" },
  "finalcta.title": {
    en: "Ready to Turn Your Website Into a Growth Engine?",
    ar: "جاهز لتحويل موقعك إلى محرك نمو؟",
    fa: "آماده‌اید وب‌سایتتان را به یک موتور رشد تبدیل کنید؟",
  },
  "finalcta.desc": {
    en: "If your current website is not bringing qualified traffic, building trust, generating leads, or supporting search and AI visibility, it may be time to rebuild it as a business system.",
    ar: "إذا كان موقعك الحالي لا يجلب زيارات مؤهّلة ولا يبني ثقة ولا يولّد عملاء ولا يدعم الظهور في البحث والذكاء الاصطناعي، فقد حان الوقت لإعادة بنائه كنظام عمل.",
    fa: "اگر وب‌سایت فعلی شما ترافیک هدفمند نمی‌آورد، اعتماد نمی‌سازد، لید تولید نمی‌کند یا از دیده‌شدن در جستجو و هوش مصنوعی پشتیبانی نمی‌کند، شاید وقت آن است که آن را به‌عنوان یک سیستم کسب‌وکار بازسازی کنید.",
  },
  "finalcta.note": {
    en: "Best for businesses that need a premium website, stronger positioning, better search visibility, and a clear path to more qualified inquiries.",
    ar: "الأنسب للأعمال التي تحتاج موقعاً متميزاً وتموضعاً أقوى وظهوراً أفضل في البحث ومساراً واضحاً لمزيد من الاستفسارات المؤهّلة.",
    fa: "مناسب کسب‌وکارهایی که به وب‌سایت پریمیوم، جایگاه قوی‌تر، دیده‌شدن بهتر در جستجو و مسیری روشن به سمت پرس‌وجوهای هدفمندتر نیاز دارند.",
  },
  "finalcta.formTitle": {
    en: "Tell Us About Your Website",
    ar: "أخبرنا عن موقعك",
    fa: "درباره‌ی وب‌سایتتان به ما بگویید",
  },
  "finalcta.formDesc": {
    en: "Share your current website, business goal, and the growth problem you want to solve. We'll review the opportunity and suggest the best next step.",
    ar: "شاركنا موقعك الحالي وهدف عملك ومشكلة النمو التي تريد حلّها. سنراجع الفرصة ونقترح أفضل خطوة تالية.",
    fa: "وب‌سایت فعلی، هدف کسب‌وکار و مشکل رشدی که می‌خواهید حل کنید را با ما در میان بگذارید. فرصت را بررسی می‌کنیم و بهترین گام بعدی را پیشنهاد می‌دهیم.",
  },

  /* ---------- Footer ---------- */
  "footer.slogan": {
    en: "Websites built as growth infrastructure.",
    ar: "مواقع مبنية كبنية تحتية للنمو.",
    fa: "وب‌سایت‌هایی ساخته‌شده به‌عنوان زیرساخت رشد.",
  },
  "footer.desc": {
    en: "Premium AI-ready websites, SEO structure, GEO/AEO visibility, lead capture, and conversion-focused web systems.",
    ar: "مواقع متميزة جاهزة للذكاء الاصطناعي، وبنية سيو، وظهور GEO/AEO، والتقاط العملاء، وأنظمة ويب تركّز على التحويل.",
    fa: "وب‌سایت‌های پریمیوم آماده‌ی هوش مصنوعی، ساختار سئو، دیده‌شدن GEO/AEO، جذب لید و سیستم‌های وب تبدیل‌محور.",
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
  "footer.svc.strategy": {
    en: "Website Strategy",
    ar: "استراتيجية الموقع",
    fa: "استراتژی وب‌سایت",
  },
  "footer.svc.seo": { en: "SEO Structure", ar: "بنية السيو", fa: "ساختار سئو" },
  "footer.svc.geo": { en: "GEO / AEO", ar: "GEO / AEO", fa: "GEO / AEO" },
  "footer.svc.ai": {
    en: "AI Visibility",
    ar: "ظهور الذكاء الاصطناعي",
    fa: "دیده‌شدن در هوش مصنوعی",
  },
  "footer.svc.webapp": { en: "Web Applications", ar: "تطبيقات الويب", fa: "اپلیکیشن‌های وب" },

  /* ---------- Contact form ---------- */
  "form.name": { en: "Name", ar: "الاسم", fa: "نام" },
  "form.company": { en: "Company", ar: "الشركة", fa: "شرکت" },
  "form.website": { en: "Website URL", ar: "رابط الموقع", fa: "آدرس وب‌سایت" },
  "form.phone": { en: "WhatsApp / Phone", ar: "واتساب / هاتف", fa: "واتساپ / تلفن" },
  "form.goal": { en: "Main Goal", ar: "الهدف الرئيسي", fa: "هدف اصلی" },
  "form.budget": { en: "Budget Range", ar: "نطاق الميزانية", fa: "بازه‌ی بودجه" },
  "form.message": { en: "Message", ar: "الرسالة", fa: "پیام" },
  "form.goal.traffic": {
    en: "More Qualified Traffic",
    ar: "زيارات مؤهّلة أكثر",
    fa: "ترافیک هدفمند بیشتر",
  },
  "form.goal.leads": { en: "Generate More Leads", ar: "توليد عملاء أكثر", fa: "تولید لید بیشتر" },
  "form.goal.trust": {
    en: "Build Trust & Authority",
    ar: "بناء الثقة والمصداقية",
    fa: "ساخت اعتماد و اعتبار",
  },
  "form.goal.ai": {
    en: "AI / Search Visibility",
    ar: "ظهور في الذكاء الاصطناعي / البحث",
    fa: "دیده‌شدن در هوش مصنوعی / جستجو",
  },
  "form.goal.rebuild": {
    en: "Rebuild Existing Website",
    ar: "إعادة بناء موقع قائم",
    fa: "بازسازی وب‌سایت موجود",
  },
  "form.budget.s": { en: "Under $3K", ar: "أقل من 3 آلاف دولار", fa: "زیر ۳ هزار دلار" },
  "form.budget.m": { en: "$3K – $8K", ar: "3 – 8 آلاف دولار", fa: "۳ تا ۸ هزار دلار" },
  "form.budget.l": { en: "$8K – $20K", ar: "8 – 20 ألف دولار", fa: "۸ تا ۲۰ هزار دلار" },
  "form.budget.xl": { en: "$20K+", ar: "أكثر من 20 ألف دولار", fa: "بیش از ۲۰ هزار دلار" },
  "form.toast": {
    en: "Request received, we'll be in touch shortly.",
    ar: "تم استلام طلبك، سنتواصل معك قريباً.",
    fa: "درخواست شما دریافت شد، به‌زودی با شما در تماس خواهیم بود.",
  },
  "mobile.whatsapp": { en: "WhatsApp", ar: "واتساب", fa: "واتساپ" },

  /* ---------- Services page ---------- */
  "servicesPage.badge": { en: "Services", ar: "الخدمات", fa: "خدمات" },
  "servicesPage.title": {
    en: "Website, AI, and Search Systems for Modern Businesses",
    ar: "أنظمة المواقع والذكاء الاصطناعي والبحث للأعمال الحديثة",
    fa: "سیستم‌های وب‌سایت، هوش مصنوعی و جستجو برای کسب‌وکارهای مدرن",
  },
  "servicesPage.desc": {
    en: "Choose the capabilities your business needs to turn its website into a growth system.",
    ar: "اختر القدرات التي يحتاجها عملك لتحويل موقعه إلى نظام نمو.",
    fa: "قابلیت‌هایی را که کسب‌وکارتان برای تبدیل وب‌سایت به یک سیستم رشد نیاز دارد انتخاب کنید.",
  },
  "servicesPage.1.title": {
    en: "Website Strategy",
    ar: "استراتيجية الموقع",
    fa: "استراتژی وب‌سایت",
  },
  "servicesPage.1.desc": {
    en: "Plan the right structure, message, and conversion path.",
    ar: "خطّط للبنية والرسالة ومسار التحويل الصحيح.",
    fa: "ساختار، پیام و مسیر تبدیل درست را برنامه‌ریزی کنید.",
  },
  "servicesPage.2.title": {
    en: "Website Design & Development",
    ar: "تصميم وتطوير المواقع",
    fa: "طراحی و توسعه‌ی وب‌سایت",
  },
  "servicesPage.2.desc": {
    en: "Build a premium, responsive, conversion-focused website.",
    ar: "ابنِ موقعاً متميزاً ومتجاوباً يركّز على التحويل.",
    fa: "یک وب‌سایت پریمیوم، واکنش‌گرا و تبدیل‌محور بسازید.",
  },
  "servicesPage.3.title": { en: "Web Applications", ar: "تطبيقات الويب", fa: "اپلیکیشن‌های وب" },
  "servicesPage.3.desc": {
    en: "Create portals, dashboards, booking systems, and custom tools.",
    ar: "أنشئ بوابات ولوحات تحكّم وأنظمة حجز وأدوات مخصّصة.",
    fa: "پورتال‌ها، داشبوردها، سیستم‌های رزرو و ابزارهای سفارشی بسازید.",
  },
  "servicesPage.4.title": { en: "SEO Structure", ar: "بنية السيو", fa: "ساختار سئو" },
  "servicesPage.4.desc": {
    en: "Prepare your site for search visibility from the start.",
    ar: "هيّئ موقعك للظهور في البحث منذ البداية.",
    fa: "وب‌سایتتان را از همان ابتدا برای دیده‌شدن در جستجو آماده کنید.",
  },
  "servicesPage.5.title": {
    en: "GEO / AEO Optimization",
    ar: "تحسين GEO / AEO",
    fa: "بهینه‌سازی GEO / AEO",
  },
  "servicesPage.5.desc": {
    en: "Structure content for AI search and answer engines.",
    ar: "هيكل المحتوى لبحث الذكاء الاصطناعي ومحركات الإجابة.",
    fa: "محتوا را برای جستجوی هوش مصنوعی و موتورهای پاسخ ساختاربندی کنید.",
  },
  "servicesPage.6.title": {
    en: "AI Visibility",
    ar: "ظهور الذكاء الاصطناعي",
    fa: "دیده‌شدن در هوش مصنوعی",
  },
  "servicesPage.6.desc": {
    en: "Help AI systems understand and recommend your business.",
    ar: "ساعد أنظمة الذكاء الاصطناعي على فهم عملك والتوصية به.",
    fa: "به سیستم‌های هوش مصنوعی کمک کنید کسب‌وکارتان را بفهمند و توصیه کنند.",
  },
  "servicesPage.7.title": {
    en: "AI Workflow Solutions",
    ar: "حلول سير عمل الذكاء الاصطناعي",
    fa: "راهکارهای گردش‌کار هوش مصنوعی",
  },
  "servicesPage.7.desc": {
    en: "Use AI to improve content, operations, and lead handling.",
    ar: "استخدم الذكاء الاصطناعي لتحسين المحتوى والعمليات والتعامل مع العملاء.",
    fa: "از هوش مصنوعی برای بهبود محتوا، عملیات و مدیریت لید استفاده کنید.",
  },
  "servicesPage.8.title": {
    en: "Lead Capture Systems",
    ar: "أنظمة التقاط العملاء",
    fa: "سیستم‌های جذب لید",
  },
  "servicesPage.8.desc": {
    en: "Create clear paths from visitor interest to inquiry.",
    ar: "أنشئ مسارات واضحة من اهتمام الزائر إلى الاستفسار.",
    fa: "مسیرهای روشنی از علاقه‌ی بازدیدکننده تا پرس‌وجو بسازید.",
  },

  /* ---------- Pricing page ---------- */
  "pricing.badge": { en: "Pricing", ar: "الأسعار", fa: "قیمت‌گذاری" },
  "pricing.title": {
    en: "Website Growth Packages Built Around Scope",
    ar: "باقات نمو المواقع مبنية حسب النطاق",
    fa: "بسته‌های رشد وب‌سایت بر اساس دامنه‌ی کار",
  },
  "pricing.desc": {
    en: "Start simple or build a full growth infrastructure system.",
    ar: "ابدأ ببساطة أو ابنِ نظام بنية نمو متكاملاً.",
    fa: "ساده شروع کنید یا یک سیستم زیرساخت رشد کامل بسازید.",
  },
  "pricing.popular": { en: "Most Popular", ar: "الأكثر شيوعاً", fa: "محبوب‌ترین" },
  "pricing.bestFor": { en: "Best for:", ar: "الأنسب لـ:", fa: "مناسب برای:" },
  "pricing.foot": {
    en: "Final pricing depends on scope, content, integrations, languages, and timeline.",
    ar: "السعر النهائي يعتمد على النطاق والمحتوى والتكاملات واللغات والجدول الزمني.",
    fa: "قیمت نهایی به دامنه‌ی کار، محتوا، یکپارچه‌سازی‌ها، زبان‌ها و زمان‌بندی بستگی دارد.",
  },
  "pricing.1.name": {
    en: "Starter Website Demo",
    ar: "نسخة موقع تجريبية للبداية",
    fa: "دموی وب‌سایت استارتر",
  },
  "pricing.1.best": {
    en: "Fast validation and premium first impression.",
    ar: "تحقّق سريع وانطباع أول متميز.",
    fa: "اعتبارسنجی سریع و اولین برداشت پریمیوم.",
  },
  "pricing.1.cta": {
    en: "Request Starter Scope",
    ar: "اطلب نطاق البداية",
    fa: "درخواست دامنه‌ی استارتر",
  },
  "pricing.1.f1": { en: "Landing page", ar: "صفحة هبوط", fa: "صفحه‌ی فرود" },
  "pricing.1.f2": { en: "Basic structure", ar: "بنية أساسية", fa: "ساختار پایه" },
  "pricing.1.f3": { en: "Mobile layout", ar: "تصميم للجوال", fa: "چیدمان موبایل" },
  "pricing.1.f4": { en: "Contact CTA", ar: "دعوة للتواصل", fa: "دکمه‌ی تماس" },
  "pricing.2.name": { en: "Growth Website", ar: "موقع النمو", fa: "وب‌سایت رشد" },
  "pricing.2.best": {
    en: "Positioning, SEO, trust, and conversion.",
    ar: "تموضع وسيو وثقة وتحويل.",
    fa: "جایگاه‌سازی، سئو، اعتماد و تبدیل.",
  },
  "pricing.2.cta": { en: "Plan My Website", ar: "خطّط لموقعي", fa: "برنامه‌ریزی وب‌سایت من" },
  "pricing.2.f1": {
    en: "Homepage + core pages",
    ar: "صفحة رئيسية + صفحات أساسية",
    fa: "صفحه‌ی اصلی + صفحات اصلی",
  },
  "pricing.2.f2": { en: "Service structure", ar: "بنية الخدمات", fa: "ساختار خدمات" },
  "pricing.2.f3": { en: "Proof sections", ar: "أقسام إثبات", fa: "بخش‌های اثبات" },
  "pricing.2.f4": { en: "Lead capture system", ar: "نظام التقاط العملاء", fa: "سیستم جذب لید" },
  "pricing.3.name": {
    en: "Advanced Website + AI",
    ar: "موقع متقدّم + ذكاء اصطناعي",
    fa: "وب‌سایت پیشرفته + هوش مصنوعی",
  },
  "pricing.3.best": {
    en: "Web apps, AI workflows, advanced integrations.",
    ar: "تطبيقات ويب وتدفقات ذكاء اصطناعي وتكاملات متقدّمة.",
    fa: "اپلیکیشن‌های وب، گردش‌کار هوش مصنوعی، یکپارچه‌سازی‌های پیشرفته.",
  },
  "pricing.3.cta": {
    en: "Discuss Advanced Scope",
    ar: "ناقش النطاق المتقدّم",
    fa: "گفت‌وگو درباره‌ی دامنه‌ی پیشرفته",
  },
  "pricing.3.f1": { en: "Custom structure", ar: "بنية مخصّصة", fa: "ساختار سفارشی" },
  "pricing.3.f2": { en: "AI planning", ar: "تخطيط الذكاء الاصطناعي", fa: "برنامه‌ریزی هوش مصنوعی" },
  "pricing.3.f3": { en: "GEO/AEO content", ar: "محتوى GEO/AEO", fa: "محتوای GEO/AEO" },
  "pricing.3.f4": { en: "Analytics path", ar: "مسار التحليلات", fa: "مسیر تحلیل داده" },

  /* ---------- About page ---------- */
  "about.badge": { en: "About Us", ar: "من نحن", fa: "درباره ما" },
  "about.title": {
    en: "We Build Websites as Growth Infrastructure",
    ar: "نبني المواقع كبنية تحتية للنمو",
    fa: "ما وب‌سایت‌ها را به‌عنوان زیرساخت رشد می‌سازیم",
  },
  "about.desc": {
    en: "We combine strategy, design, technology, AI, search structure, and conversion thinking.",
    ar: "نجمع بين الاستراتيجية والتصميم والتقنية والذكاء الاصطناعي وبنية البحث وتفكير التحويل.",
    fa: "ما استراتژی، طراحی، فناوری، هوش مصنوعی، ساختار جستجو و تفکر تبدیل را با هم ترکیب می‌کنیم.",
  },
  "about.intro": {
    en: "We are not a traditional website provider. We build structured digital systems that help businesses explain value, earn trust, improve visibility, and generate inquiries.",
    ar: "نحن لسنا مزوّد مواقع تقليدياً. نبني أنظمة رقمية مهيكلة تساعد الأعمال على شرح قيمتها وكسب الثقة وتحسين الظهور وتوليد الاستفسارات.",
    fa: "ما یک ارائه‌دهنده‌ی وب‌سایت سنتی نیستیم. ما سیستم‌های دیجیتال ساختارمند می‌سازیم که به کسب‌وکارها کمک می‌کنند ارزش خود را توضیح دهند، اعتماد به دست آورند، دیده‌شدن را بهبود دهند و پرس‌وجو تولید کنند.",
  },
  "about.beliefs": { en: "Core Beliefs", ar: "قناعاتنا الأساسية", fa: "باورهای بنیادین" },
  "about.1.title": {
    en: "Strategy Before Design",
    ar: "الاستراتيجية قبل التصميم",
    fa: "استراتژی پیش از طراحی",
  },
  "about.1.desc": {
    en: "Start with the business goal.",
    ar: "ابدأ من هدف العمل.",
    fa: "از هدف کسب‌وکار شروع کنید.",
  },
  "about.2.title": {
    en: "Clarity Before Complexity",
    ar: "الوضوح قبل التعقيد",
    fa: "وضوح پیش از پیچیدگی",
  },
  "about.2.desc": {
    en: "Make the offer easy to understand.",
    ar: "اجعل العرض سهل الفهم.",
    fa: "پیشنهاد را آسان‌فهم کنید.",
  },
  "about.3.title": {
    en: "Conversion Before Decoration",
    ar: "التحويل قبل الزينة",
    fa: "تبدیل پیش از تزئین",
  },
  "about.3.desc": {
    en: "Design should support action.",
    ar: "ينبغي أن يدعم التصميم اتخاذ الإجراء.",
    fa: "طراحی باید از اقدام پشتیبانی کند.",
  },
  "about.4.title": {
    en: "Search Before Publishing",
    ar: "البحث قبل النشر",
    fa: "جستجو پیش از انتشار",
  },
  "about.4.desc": {
    en: "Visibility must be planned early.",
    ar: "يجب التخطيط للظهور مبكراً.",
    fa: "دیده‌شدن باید زود برنامه‌ریزی شود.",
  },
  "about.5.title": {
    en: "Improvement After Launch",
    ar: "التحسين بعد الإطلاق",
    fa: "بهبود پس از راه‌اندازی",
  },
  "about.5.desc": {
    en: "Growth continues after the site goes live.",
    ar: "يستمر النمو بعد إطلاق الموقع.",
    fa: "رشد پس از آنلاین‌شدن سایت ادامه می‌یابد.",
  },

  /* ---------- Insights page ---------- */
  "insights.badge": { en: "Insights", ar: "رؤى", fa: "بینش‌ها" },
  "insights.title": {
    en: "Ideas on Websites, AI Search, and Growth Systems",
    ar: "أفكار حول المواقع وبحث الذكاء الاصطناعي وأنظمة النمو",
    fa: "ایده‌هایی درباره‌ی وب‌سایت، جستجوی هوش مصنوعی و سیستم‌های رشد",
  },
  "insights.desc": {
    en: "Short strategic insights for business owners who want better website performance.",
    ar: "رؤى استراتيجية قصيرة لأصحاب الأعمال الراغبين في أداء أفضل لمواقعهم.",
    fa: "بینش‌های استراتژیک کوتاه برای صاحبان کسب‌وکار که عملکرد بهتر وب‌سایت می‌خواهند.",
  },
  "insights.tag": { en: "Insight", ar: "رؤية", fa: "بینش" },
  "insights.read": { en: "Read", ar: "اقرأ", fa: "خواندن" },
  "insights.1.title": {
    en: "Why a Website Needs a Growth System",
    ar: "لماذا يحتاج الموقع إلى نظام نمو",
    fa: "چرا یک وب‌سایت به سیستم رشد نیاز دارد",
  },
  "insights.1.excerpt": {
    en: "Design alone does not create leads.",
    ar: "التصميم وحده لا يولّد العملاء.",
    fa: "طراحی به‌تنهایی لید نمی‌سازد.",
  },
  "insights.2.title": {
    en: "What AI Search Means for Business Websites",
    ar: "ماذا يعني بحث الذكاء الاصطناعي لمواقع الأعمال",
    fa: "جستجوی هوش مصنوعی برای وب‌سایت کسب‌وکارها چه معنایی دارد",
  },
  "insights.2.excerpt": {
    en: "Discovery is changing.",
    ar: "الاكتشاف يتغيّر.",
    fa: "شیوه‌ی کشف‌شدن در حال تغییر است.",
  },
  "insights.3.title": {
    en: "How to Build Trust on a Landing Page",
    ar: "كيف تبني الثقة في صفحة هبوط",
    fa: "چگونه در یک صفحه‌ی فرود اعتماد بسازیم",
  },
  "insights.3.excerpt": {
    en: "Trust comes from clarity and proof.",
    ar: "الثقة تأتي من الوضوح والدليل.",
    fa: "اعتماد از وضوح و شواهد می‌آید.",
  },
  "insights.4.title": {
    en: "SEO vs AEO vs GEO",
    ar: "السيو مقابل AEO مقابل GEO",
    fa: "سئو در برابر AEO و GEO",
  },
  "insights.4.excerpt": {
    en: "Modern visibility needs more than keywords.",
    ar: "الظهور الحديث يحتاج أكثر من الكلمات المفتاحية.",
    fa: "دیده‌شدن مدرن به چیزی بیش از کلمات کلیدی نیاز دارد.",
  },
  "insights.5.title": {
    en: "Why Most Websites Don't Convert",
    ar: "لماذا لا تحقّق معظم المواقع تحويلاً",
    fa: "چرا بیشتر وب‌سایت‌ها تبدیل نمی‌کنند",
  },
  "insights.5.excerpt": {
    en: "Weak offers and unclear CTAs lose leads.",
    ar: "العروض الضعيفة والدعوات غير الواضحة تفقد العملاء.",
    fa: "پیشنهادهای ضعیف و دکمه‌های نامشخص لید را از دست می‌دهند.",
  },
  "insights.6.title": {
    en: "Plan Before You Design",
    ar: "خطّط قبل أن تصمّم",
    fa: "پیش از طراحی برنامه‌ریزی کنید",
  },
  "insights.6.excerpt": {
    en: "Strategy creates better websites than decoration.",
    ar: "الاستراتيجية تصنع مواقع أفضل من الزينة.",
    fa: "استراتژی وب‌سایت‌های بهتری از تزئین می‌سازد.",
  },

  /* ---------- Contact page ---------- */
  "contact.badge": { en: "Contact", ar: "تواصل معنا", fa: "تماس" },
  "contact.title": {
    en: "Let's Discuss Your Website Growth System",
    ar: "لنناقش نظام نمو موقعك",
    fa: "بیایید درباره‌ی سیستم رشد وب‌سایتتان صحبت کنیم",
  },
  "contact.desc": {
    en: "Share your current website, goal, and main growth challenge.",
    ar: "شاركنا موقعك الحالي وهدفك وتحدّي النمو الرئيسي.",
    fa: "وب‌سایت فعلی، هدف و چالش اصلی رشد خود را با ما در میان بگذارید.",
  },
  "contact.formTitle": {
    en: "Tell Us About Your Website",
    ar: "أخبرنا عن موقعك",
    fa: "درباره‌ی وب‌سایتتان به ما بگویید",
  },
  "contact.formDesc": {
    en: "We'll review the opportunity and suggest the best next step.",
    ar: "سنراجع الفرصة ونقترح أفضل خطوة تالية.",
    fa: "فرصت را بررسی می‌کنیم و بهترین گام بعدی را پیشنهاد می‌دهیم.",
  },
  "contact.directChannels": { en: "Direct Channels", ar: "قنوات مباشرة", fa: "کانال‌های مستقیم" },
  "contact.responseTitle": { en: "Response Time", ar: "وقت الرد", fa: "زمان پاسخ‌گویی" },
  "contact.responseDesc": {
    en: "We typically respond within one business day with a short growth opportunity review.",
    ar: "نردّ عادةً خلال يوم عمل واحد بمراجعة قصيرة لفرصة النمو.",
    fa: "معمولاً ظرف یک روز کاری با یک بررسی کوتاه از فرصت رشد پاسخ می‌دهیم.",
  },
  "contact.faqBadge": { en: "FAQ", ar: "الأسئلة الشائعة", fa: "پرسش‌های متداول" },
  "contact.faqTitle": { en: "Common Questions", ar: "أسئلة شائعة", fa: "پرسش‌های رایج" },
  "contact.faq.1.q": {
    en: "Do you only design websites?",
    ar: "هل تصمّمون المواقع فقط؟",
    fa: "آیا فقط وب‌سایت طراحی می‌کنید؟",
  },
  "contact.faq.1.a": {
    en: "No. We build websites with strategy, SEO, AI visibility, conversion flow, and lead capture.",
    ar: "لا. نبني مواقع بالاستراتيجية والسيو وظهور الذكاء الاصطناعي ومسار التحويل والتقاط العملاء.",
    fa: "خیر. ما وب‌سایت‌ها را همراه با استراتژی، سئو، دیده‌شدن در هوش مصنوعی، مسیر تبدیل و جذب لید می‌سازیم.",
  },
  "contact.faq.2.q": {
    en: "Can you redesign an existing website?",
    ar: "هل يمكنكم إعادة تصميم موقع قائم؟",
    fa: "آیا می‌توانید یک وب‌سایت موجود را بازطراحی کنید؟",
  },
  "contact.faq.2.a": {
    en: "Yes. We can audit and rebuild the parts that affect trust, visibility, and conversion.",
    ar: "نعم. يمكننا تدقيق وإعادة بناء الأجزاء التي تؤثّر في الثقة والظهور والتحويل.",
    fa: "بله. می‌توانیم بخش‌هایی را که بر اعتماد، دیده‌شدن و تبدیل اثر می‌گذارند ممیزی و بازسازی کنیم.",
  },
  "contact.faq.3.q": {
    en: "Do you support multilingual websites?",
    ar: "هل تدعمون المواقع متعدّدة اللغات؟",
    fa: "آیا از وب‌سایت‌های چندزبانه پشتیبانی می‌کنید؟",
  },
  "contact.faq.3.a": {
    en: "Yes. We support English, Arabic, and Persian with proper LTR and RTL layouts.",
    ar: "نعم. ندعم الإنجليزية والعربية والفارسية بتخطيطات صحيحة من اليسار لليمين ومن اليمين لليسار.",
    fa: "بله. از انگلیسی، عربی و فارسی با چیدمان درست چپ‌به‌راست و راست‌به‌چپ پشتیبانی می‌کنیم.",
  },
  "contact.faq.4.q": {
    en: "Can you help with SEO and AI visibility?",
    ar: "هل يمكنكم المساعدة في السيو وظهور الذكاء الاصطناعي؟",
    fa: "آیا می‌توانید در سئو و دیده‌شدن در هوش مصنوعی کمک کنید؟",
  },
  "contact.faq.4.a": {
    en: "Yes. We structure content for search engines, answer engines, and AI-assisted discovery.",
    ar: "نعم. نهيكل المحتوى لمحركات البحث ومحركات الإجابة والاكتشاف المدعوم بالذكاء الاصطناعي.",
    fa: "بله. محتوا را برای موتورهای جستجو، موتورهای پاسخ و کشف به‌کمک هوش مصنوعی ساختاربندی می‌کنیم.",
  },
  "contact.faq.5.q": {
    en: "Is this suitable for small businesses?",
    ar: "هل هذا مناسب للأعمال الصغيرة؟",
    fa: "آیا این برای کسب‌وکارهای کوچک مناسب است؟",
  },
  "contact.faq.5.a": {
    en: "Yes, if the business needs better positioning, trust, and lead generation.",
    ar: "نعم، إذا كان العمل يحتاج تموضعاً أفضل وثقة وتوليد عملاء.",
    fa: "بله، اگر کسب‌وکار به جایگاه بهتر، اعتماد و تولید لید نیاز داشته باشد.",
  },
  "contact.faq.6.q": { en: "How do we start?", ar: "كيف نبدأ؟", fa: "چطور شروع کنیم؟" },
  "contact.faq.6.a": {
    en: "Start with a growth audit. We review your current website and define the best structure.",
    ar: "ابدأ بتدقيق النمو. نراجع موقعك الحالي ونحدّد أفضل بنية.",
    fa: "با یک ممیزی رشد شروع کنید. وب‌سایت فعلی شما را بررسی و بهترین ساختار را تعیین می‌کنیم.",
  },
} satisfies Record<string, Entry>;

export type MessageKey = keyof typeof M;

const RTL: Lang[] = ["ar", "fa"];

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: string) => string;
  dir: "ltr" | "rtl";
};

const LangCtx = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang") as Lang | null;
      if (saved && (saved === "en" || saved === "ar" || saved === "fa")) {
        setLangState(saved);
      }
    } catch {
      // Ignore unavailable storage in locked-down browser contexts.
    }
  }, []);

  useEffect(() => {
    const dir = RTL.includes(lang) ? "rtl" : "ltr";
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = dir;
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {
      // Ignore unavailable storage in locked-down browser contexts.
    }
  }, []);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      setLang,
      t: (k) => {
        const entry = (M as Record<string, Entry>)[k];
        return entry ? (entry[lang] ?? entry.en) : k;
      },
      dir: RTL.includes(lang) ? "rtl" : "ltr",
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
