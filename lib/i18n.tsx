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

type Dict = Record<string, string>;

const en: Dict = {
  "nav.home": "Home",
  "nav.services": "Services",
  "nav.pricing": "Pricing",
  "nav.insights": "Insights",
  "nav.about": "About",
  "nav.contact": "Contact",
  "nav.caseStudies": "Case Studies",
  "cta.audit": "Book a Growth Audit",
  "cta.whatsapp": "Contact on WhatsApp",
  "cta.system": "See the System",
  "cta.find": "Find the Gaps",
  "cta.build": "Build Your Growth Engine",
  "cta.explore": "Explore Services",
  "cta.view": "View Case Study",
  "cta.send": "Send Request",
  "cta.work": "Work With Us",
  "lang.label": "Language",
  "footer.slogan": "Websites built as growth infrastructure.",
  "footer.desc":
    "Premium AI-ready websites, SEO structure, GEO/AEO visibility, lead capture, and conversion-focused web systems.",
  "footer.rights": "All rights reserved.",
  "form.name": "Name",
  "form.company": "Company",
  "form.website": "Website URL",
  "form.phone": "WhatsApp / Phone",
  "form.goal": "Main Goal",
  "form.budget": "Budget Range",
  "form.message": "Message",
  "mobile.whatsapp": "WhatsApp",
};

const ar: Dict = {
  "nav.home": "الرئيسية",
  "nav.services": "الخدمات",
  "nav.pricing": "الأسعار",
  "nav.insights": "الرؤى",
  "nav.about": "من نحن",
  "nav.contact": "تواصل",
  "nav.caseStudies": "أعمالنا",
  "cta.audit": "احجز تدقيق نمو",
  "cta.whatsapp": "تواصل عبر واتساب",
  "cta.system": "اكتشف النظام",
  "cta.find": "اكتشف الفجوات",
  "cta.build": "ابنِ محرك النمو",
  "cta.explore": "استكشف الخدمات",
  "cta.view": "عرض الدراسة",
  "cta.send": "إرسال الطلب",
  "cta.work": "اعمل معنا",
  "lang.label": "اللغة",
  "footer.slogan": "مواقع مبنية كبنية نمو.",
  "footer.desc":
    "مواقع متميزة جاهزة للذكاء الاصطناعي، بنية SEO، رؤية GEO/AEO، التقاط العملاء، وأنظمة ويب تركز على التحويل.",
  "footer.rights": "جميع الحقوق محفوظة.",
  "form.name": "الاسم",
  "form.company": "الشركة",
  "form.website": "رابط الموقع",
  "form.phone": "واتساب / هاتف",
  "form.goal": "الهدف الرئيسي",
  "form.budget": "الميزانية",
  "form.message": "الرسالة",
  "mobile.whatsapp": "واتساب",
};

const fa: Dict = {
  "nav.home": "خانه",
  "nav.services": "خدمات",
  "nav.pricing": "قیمت‌ها",
  "nav.insights": "بینش",
  "nav.about": "درباره ما",
  "nav.contact": "تماس",
  "nav.caseStudies": "نمونه‌کارها",
  "cta.audit": "رزرو ممیزی رشد",
  "cta.whatsapp": "تماس از طریق واتساپ",
  "cta.system": "مشاهده سیستم",
  "cta.find": "شناسایی شکاف‌ها",
  "cta.build": "موتور رشد بسازید",
  "cta.explore": "مشاهده خدمات",
  "cta.view": "مشاهده نمونه",
  "cta.send": "ارسال درخواست",
  "cta.work": "همکاری با ما",
  "lang.label": "زبان",
  "footer.slogan": "وب‌سایت‌هایی به‌عنوان زیرساخت رشد.",
  "footer.desc":
    "وب‌سایت‌های پریمیوم آماده‌ی هوش مصنوعی، ساختار SEO، دیده‌شدن GEO/AEO، جذب لید، و سیستم‌های تبدیل‌محور.",
  "footer.rights": "تمام حقوق محفوظ است.",
  "form.name": "نام",
  "form.company": "شرکت",
  "form.website": "آدرس وب‌سایت",
  "form.phone": "واتساپ / تلفن",
  "form.goal": "هدف اصلی",
  "form.budget": "بازه بودجه",
  "form.message": "پیام",
  "mobile.whatsapp": "واتساپ",
};

const DICT: Record<Lang, Dict> = { en, ar, fa };
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
      t: (k) => DICT[lang][k] ?? DICT.en[k] ?? k,
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
