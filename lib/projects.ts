import type { StaticImageData } from "next/image";

import type { Lang } from "@/lib/locales";
import case17 from "@/assets/work/case-17.webp";
import case2 from "@/assets/work/case-2.webp";
import case3 from "@/assets/work/case-3.webp";
import case4 from "@/assets/work/case-4.webp";
import case5 from "@/assets/work/case-5.webp";
import case6 from "@/assets/work/case-6.webp";
import case7 from "@/assets/work/case-7.webp";
import case10 from "@/assets/work/case-10.webp";
import case8 from "@/assets/work/case-8.webp";
import case9 from "@/assets/work/case-9.webp";
import case12 from "@/assets/work/case-12.webp";
import case13 from "@/assets/work/case-13.webp";
import case14 from "@/assets/work/case-14.webp";
import case15 from "@/assets/work/case-15.webp";
import case16 from "@/assets/work/case-16.webp";
import case18 from "@/assets/work/case-18.webp";
import case19 from "@/assets/work/case-19.webp";
import case21 from "@/assets/work/case-21.webp";
import case22 from "@/assets/work/case-22.webp";
import case11 from "@/assets/work/case-11.webp";

export type Industry = "real-estate" | "healthcare" | "legal" | "beauty" | "agency";
/** Filter groups on /selected-work — kept to the sectors we actually have. */
export type IndustryGroup = "real-estate" | "healthcare" | "professional" | "other";

export type Project = {
  image: StaticImageData;
  url: string;
  industry: Industry;
  name: string;
};

/** Every delivered project, in display order. All are web design work. */
export const PROJECTS: Project[] = [
  {
    image: case17,
    url: "https://rahil-mostafaee.zakeri.dev/",
    industry: "legal",
    name: "Rahil Mostafaee",
  },
  {
    image: case2,
    url: "https://anfal-saleh.zakeri.dev/",
    industry: "real-estate",
    name: "Anfal Saleh",
  },
  {
    image: case3,
    url: "https://farhad-lotfi.zakeri.dev/",
    industry: "real-estate",
    name: "Farhad Lotfi",
  },
  {
    image: case4,
    url: "https://siyavush-hashemi.zakeri.dev/",
    industry: "real-estate",
    name: "Siyavush Hashemi",
  },
  { image: case5, url: "https://soha.zakeri.dev/", industry: "real-estate", name: "Soha" },
  {
    image: case6,
    url: "https://dr-arefeh-lotfi.zakeri.dev/",
    industry: "healthcare",
    name: "Dr. Arefeh Lotfi",
  },
  {
    image: case7,
    url: "https://iman-attabaei.zakeri.dev/",
    industry: "real-estate",
    name: "Iman Attabaei",
  },
  {
    image: case10,
    url: "https://mahmud-haghzade.zakeri.dev/",
    industry: "real-estate",
    name: "Mahmud Haghzade",
  },
  {
    image: case8,
    url: "https://kaveh-bahman.zakeri.dev/",
    industry: "real-estate",
    name: "Kaveh Bahman",
  },
  { image: case9, url: "https://tabasom.zakeri.dev/", industry: "beauty", name: "Tabasom" },
  {
    image: case12,
    url: "https://negar-derakhshan.zakeri.dev/",
    industry: "real-estate",
    name: "Negar Derakhshan",
  },
  {
    image: case13,
    url: "https://dr-katayoon-homayoon.zakeri.dev/",
    industry: "healthcare",
    name: "Dr. Katayoon Homayoon",
  },
  {
    image: case14,
    url: "https://gellari-realstate.zakeri.dev/",
    industry: "real-estate",
    name: "Gellari Real Estate",
  },
  {
    image: case15,
    url: "https://dr-zahra-salehi.zakeri.dev/",
    industry: "healthcare",
    name: "Dr. Zahra Salehi",
  },
  {
    image: case16,
    url: "https://maryam-albluchi.zakeri.dev/bal",
    industry: "real-estate",
    name: "Maryam Albluchi",
  },
  {
    image: case18,
    url: "https://amirzafel-realestate.zakeri.dev/",
    industry: "real-estate",
    name: "Amirzafel Real Estate",
  },
  {
    image: case19,
    url: "https://sadaf-rezai.zakeri.dev/",
    industry: "agency",
    name: "Sadaf Rezai",
  },
  {
    image: case21,
    url: "https://dr-amineh-razavian.zakeri.dev/",
    industry: "healthcare",
    name: "Dr. Amineh Razavian",
  },
  {
    image: case22,
    url: "https://jasem-realestate.zakeri.dev/",
    industry: "real-estate",
    name: "Jasem Real Estate",
  },
  {
    image: case11,
    url: "https://mohammad-amiri.zakeri.dev/",
    industry: "real-estate",
    name: "Mohammad Amiri",
  },
];

/**
 * Shown first on /selected-work and (all six) on the homepage. Chosen for
 * sector variety so the portfolio does not read as "a real-estate web shop".
 * Edit this list to change the selection.
 */
export const FEATURED_NAMES = [
  "Anfal Saleh",
  "Dr. Arefeh Lotfi",
  "Rahil Mostafaee",
  "Tabasom",
  "Sadaf Rezai",
  "Dr. Katayoon Homayoon",
];

export const FEATURED = FEATURED_NAMES.map((name) => PROJECTS.find((p) => p.name === name)!);
export const MORE = PROJECTS.filter((p) => !FEATURED_NAMES.includes(p.name));

export const GROUP_OF: Record<Industry, IndustryGroup> = {
  "real-estate": "real-estate",
  healthcare: "healthcare",
  legal: "professional",
  agency: "professional",
  beauty: "other",
};

export const INDUSTRY_LABELS: Record<Industry, Record<Lang, string>> = {
  "real-estate": { en: "Real Estate", ar: "العقارات" },
  healthcare: { en: "Healthcare", ar: "الرعاية الصحية" },
  legal: { en: "Legal Services", ar: "الخدمات القانونية" },
  beauty: { en: "Beauty", ar: "التجميل" },
  agency: { en: "Marketing Agency", ar: "وكالة تسويق" },
};
