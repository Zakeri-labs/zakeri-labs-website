import {
  CtaPair,
  FinalCta,
  PageHero,
  Section,
  SectionHeading,
  Visual,
} from "@/components/site/blocks";
import { DetailCards } from "@/components/site/pages/DetailPage";
import { IMG } from "@/lib/images";
import type { Lang } from "@/lib/locales";

const COPY = {
  en: {
    eyebrow: "Industries",
    title: "Software and AI Solutions for Your Industry in Oman.",
    intro:
      "Every sector loses time and sales in its own places. We build the systems, WhatsApp flows, automation and content that fix those exact gaps — for the industries we know best.",
    listTitle: "Industries We Serve",
    listIntro:
      "Choose your industry to see the specific problems we solve and the services behind each solution.",
    cta: "See solutions",
    finalTitle: "Your Industry Is Not Listed?",
    finalText:
      "We also work with manufacturing, car rental, hospitality and retail businesses. Tell us how your business runs and we will show you where software and AI can help first.",
  },
  ar: {
    eyebrow: "القطاعات",
    title: "حلول برمجية وذكاء اصطناعي لقطاعك في عُمان.",
    intro:
      "كل قطاع يخسر الوقت والمبيعات في مواضع خاصة به. نبني الأنظمة ومسارات واتساب والأتمتة والمحتوى التي تعالج هذه الفجوات بالتحديد، في القطاعات التي نعرفها جيداً.",
    listTitle: "القطاعات التي نخدمها",
    listIntro: "اختر قطاعك لترى المشكلات التي نحلّها والخدمات التي يقوم عليها كل حل.",
    cta: "اطّلع على الحلول",
    finalTitle: "قطاعك غير موجود في القائمة؟",
    finalText:
      "نعمل أيضاً مع شركات التصنيع وتأجير السيارات والضيافة والتجزئة. أخبرنا كيف يعمل نشاطك وسنوضح لك أين تفيد البرمجيات والذكاء الاصطناعي أولاً.",
  },
};

export function IndustriesPage({ lang }: { lang: Lang }) {
  const t = COPY[lang];
  return (
    <>
      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        intro={t.intro}
        actions={<CtaPair />}
        visual={<Visual src={IMG.oman} alt="" priority className="mx-auto max-w-md" />}
      />
      <Section tone="tint">
        <SectionHeading title={t.listTitle} intro={t.listIntro} />
        <div className="mt-12">
          <DetailCards kind="industries" lang={lang} cta={t.cta} />
        </div>
      </Section>
      <FinalCta eyebrow={t.eyebrow} title={t.finalTitle} text={t.finalText} />
    </>
  );
}
