import type { Lang } from "@/lib/locales";

type ProjectCategory = "legal" | "real-estate" | "healthcare" | "beauty" | "agency";

type ProjectRecord = {
  image: string;
  url: string;
  category: ProjectCategory;
  name: string;
};

export type CaseStudy = {
  image: string;
  url: string;
  category: string;
  name: string;
  alt: string;
};

const CATEGORY_LABELS: Record<ProjectCategory, Record<Lang, string>> = {
  legal: {
    en: "Legal Website",
    ar: "موقع قانوني",
    fa: "وب‌سایت حقوقی",
  },
  "real-estate": {
    en: "Real Estate Website",
    ar: "موقع عقاري",
    fa: "وب‌سایت املاک",
  },
  healthcare: {
    en: "Healthcare Website",
    ar: "موقع للرعاية الصحية",
    fa: "وب‌سایت حوزه سلامت",
  },
  beauty: {
    en: "Beauty Website",
    ar: "موقع لخدمات التجميل",
    fa: "وب‌سایت خدمات زیبایی",
  },
  agency: {
    en: "Agency Website",
    ar: "موقع وكالة",
    fa: "وب‌سایت آژانس",
  },
};

const ALT_TEMPLATES: Record<Lang, (name: string) => string> = {
  en: (name) => `Desktop preview of the ${name} website homepage`,
  ar: (name) => `معاينة سطح المكتب للصفحة الرئيسية لموقع ${name}`,
  fa: (name) => `پیش‌نمایش دسکتاپ صفحه اصلی وب‌سایت ${name}`,
};

const PROJECTS: ProjectRecord[] = [
  {
    image: "/case-17.png",
    url: "https://rahil-mostafaee.zakeri.dev/",
    category: "legal",
    name: "Rahil Mostafaee",
  },
  {
    image: "/case-2.png",
    url: "https://anfal-saleh.zakeri.dev/",
    category: "real-estate",
    name: "Anfal Saleh",
  },
  {
    image: "/case-3.png",
    url: "https://farhad-lotfi.zakeri.dev/",
    category: "real-estate",
    name: "Farhad Lotfi",
  },
  {
    image: "/case-4.png",
    url: "https://siyavush-hashemi.zakeri.dev/",
    category: "real-estate",
    name: "Siyavush Hashemi",
  },
  {
    image: "/case-5.png",
    url: "https://soha.zakeri.dev/",
    category: "real-estate",
    name: "Soha",
  },
  {
    image: "/case-6.png",
    url: "https://dr-arefeh-lotfi.zakeri.dev/",
    category: "healthcare",
    name: "Dr. Arefeh Lotfi",
  },
  {
    image: "/case-7.png",
    url: "https://iman-attabaei.zakeri.dev/",
    category: "real-estate",
    name: "Iman Attabaei",
  },
  {
    image: "/case-10.png",
    url: "https://mahmud-haghzade.zakeri.dev/",
    category: "real-estate",
    name: "Mahmud Haghzade",
  },
  {
    image: "/case-8.png",
    url: "https://kaveh-bahman.zakeri.dev/",
    category: "real-estate",
    name: "Kaveh Bahman",
  },
  {
    image: "/case-9.png",
    url: "https://tabasom.zakeri.dev/",
    category: "beauty",
    name: "Tabasom",
  },
  {
    image: "/case-11.png",
    url: "https://mohammad-amiri.zakeri.dev/",
    category: "real-estate",
    name: "Mohammad Amiri",
  },
  {
    image: "/case-12.png",
    url: "https://negar-derakhshan.zakeri.dev/",
    category: "real-estate",
    name: "Negar Derakhshan",
  },
  {
    image: "/case-13.png",
    url: "https://dr-katayoon-homayoon.zakeri.dev/",
    category: "healthcare",
    name: "Dr. Katayoon Homayoon",
  },
  {
    image: "/case-14.png",
    url: "https://gellari-realstate.zakeri.dev/",
    category: "real-estate",
    name: "Gellari Real Estate",
  },
  {
    image: "/case-15.png",
    url: "https://dr-zahra-salehi.zakeri.dev/",
    category: "healthcare",
    name: "Dr. Zahra Salehi",
  },
  {
    image: "/case-16.png",
    url: "https://maryam-albluchi.zakeri.dev/bal",
    category: "real-estate",
    name: "Maryam Albluchi",
  },
  {
    image: "/case-18.png",
    url: "https://amirzafel-realestate.zakeri.dev/",
    category: "real-estate",
    name: "Amirzafel Real Estate",
  },
  {
    image: "/case-19.png",
    url: "https://sadaf-rezai.zakeri.dev/",
    category: "agency",
    name: "Sadaf Rezai",
  },
  {
    image: "/case-21.png",
    url: "https://dr-amineh-razavian.zakeri.dev/",
    category: "healthcare",
    name: "Dr. Amineh Razavian",
  },
  {
    image: "/case-22.png",
    url: "https://jasem-realestate.zakeri.dev/",
    category: "real-estate",
    name: "Jasem Real Estate",
  },
];

export function getCaseStudies(lang: Lang): CaseStudy[] {
  return PROJECTS.map((project) => ({
    image: project.image,
    url: project.url,
    name: project.name,
    category: CATEGORY_LABELS[project.category][lang],
    alt: ALT_TEMPLATES[lang](project.name),
  }));
}
