import { SITE } from "@/lib/site";

import type { PRIVACY } from "./privacy";

type Legal = (typeof PRIVACY)["en"];

const en: Legal = {
  eyebrow: "Legal",
  title: "Data Deletion Instructions",
  updated: "Last updated: 27 September 2026",
  intro: `You can ask ${SITE.legalName} to delete the personal data we hold about you at any time, including data we received through Facebook, Instagram, WhatsApp or the "Idrak AI" app.`,
  sections: [
    {
      h: "How to request deletion",
      p: [
        `Email ${SITE.email} with the subject "Data deletion request", or send "Delete my data" on WhatsApp to ${SITE.phone}.`,
        "Include the name, phone number or email address you used with us so we can find your data. If your request relates to Facebook or Instagram, include the name of the Page or account you interacted with.",
      ],
    },
    {
      h: "What happens next",
      p: [
        "We confirm we received your request within 3 business days and may ask you to verify that the data is yours.",
        "We then delete your contact details, messages, enquiries and any data received from Meta platforms from our systems within 30 days and confirm by email or WhatsApp once it is done.",
        "We may keep limited records only where the law requires it, for example invoices, and only for as long as required.",
      ],
    },
    {
      h: "Removing app access on Facebook",
      p: [
        "You can also remove the Idrak AI app's access yourself: on Facebook go to Settings & privacy → Settings → Apps and websites, select Idrak AI and choose Remove. This stops future access; to delete data we already hold, send us a request as described above.",
      ],
    },
    {
      h: "Contact",
      p: [
        `${SITE.legalName}, ${SITE.legalCity}. Email: ${SITE.email}. Phone / WhatsApp: ${SITE.phone}.`,
      ],
    },
  ],
};

const ar: Legal = {
  eyebrow: "قانوني",
  title: "تعليمات حذف البيانات",
  updated: "آخر تحديث: 27 سبتمبر 2026",
  intro: `يمكنك في أي وقت أن تطلب من ${SITE.legalName} حذف بياناتك الشخصية لدينا، بما فيها البيانات الواردة عبر فيسبوك أو إنستغرام أو واتساب أو تطبيق "Idrak AI".`,
  sections: [
    {
      h: "كيف تطلب الحذف",
      p: [
        `راسلنا على ${SITE.email} بعنوان "طلب حذف البيانات"، أو أرسل "احذف بياناتي" عبر واتساب إلى ${SITE.phone}.`,
        "اذكر الاسم أو رقم الهاتف أو البريد الذي استخدمته معنا لنجد بياناتك. إن كان طلبك متعلقاً بفيسبوك أو إنستغرام، فاذكر اسم الصفحة أو الحساب الذي تواصلت معه.",
      ],
    },
    {
      h: "ماذا يحدث بعد ذلك",
      p: [
        "نؤكّد استلام طلبك خلال 3 أيام عمل وقد نطلب التحقق من أن البيانات تخصّك.",
        "ثم نحذف بيانات التواصل والرسائل والاستفسارات وأي بيانات واردة من منصات Meta من أنظمتنا خلال 30 يوماً، ونؤكّد ذلك بالبريد أو واتساب.",
        "قد نحتفظ بسجلات محدودة فقط حين يلزمنا القانون بذلك، مثل الفواتير، وللمدة المطلوبة فقط.",
      ],
    },
    {
      h: "إزالة وصول التطبيق في فيسبوك",
      p: [
        "يمكنك أيضاً إزالة وصول تطبيق Idrak AI بنفسك: في فيسبوك اذهب إلى الإعدادات والخصوصية ← الإعدادات ← التطبيقات والمواقع، واختر Idrak AI ثم إزالة. يوقف هذا الوصول مستقبلاً؛ ولحذف البيانات التي لدينا أرسل طلباً كما هو موضّح أعلاه.",
      ],
    },
    {
      h: "التواصل",
      p: [
        `${SITE.legalName}، مسقط، سلطنة عُمان. البريد: ${SITE.email}. الهاتف / واتساب: ${SITE.phone}.`,
      ],
    },
  ],
};

export const DELETION = { en, ar };
