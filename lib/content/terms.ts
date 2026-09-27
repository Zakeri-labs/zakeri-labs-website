import { SITE } from "@/lib/site";

import type { PRIVACY } from "./privacy";

type Legal = (typeof PRIVACY)["en"];

const en: Legal = {
  eyebrow: "Legal",
  title: "Terms of Service",
  updated: "Last updated: 27 September 2026",
  intro: `These terms govern your use of this website, the IDRAK AI assistant and our WhatsApp and messaging services, provided by ${SITE.legalName}, Commercial Registration ${SITE.crNumber}, ${SITE.legalCity}. By using them you agree to these terms.`,
  sections: [
    {
      h: "Our services",
      p: [
        "IDRAK provides AI automation, AI video, content, web and digital solutions and related business products. Specific projects are governed by a separate written proposal or agreement, which takes priority over these terms where they differ.",
      ],
    },
    {
      h: "Using the website and assistant",
      p: [
        "You agree to use the website, the AI assistant and our messaging channels lawfully and not to misuse, disrupt, scrape or attempt to gain unauthorised access to them.",
        "The AI assistant gives general information generated automatically. It may be incomplete or inaccurate and is not professional, legal or financial advice. Prices, timelines and scope are confirmed only in a written proposal.",
      ],
    },
    {
      h: "WhatsApp and messaging",
      p: [
        "When you message us on WhatsApp or through Meta platforms, we may reply manually or with automated or AI-assisted messages about your enquiry or project. You can stop messages at any time by replying STOP or telling us. Use of WhatsApp is also subject to Meta's own terms.",
      ],
    },
    {
      h: "Intellectual property",
      p: [
        "The website's content, design, logos and materials belong to IDRAK or its licensors and may not be copied or reused without permission. Ownership of work we deliver for clients is set out in the relevant agreement.",
      ],
    },
    {
      h: "Third-party services",
      p: [
        "Our services rely on third parties such as WhatsApp (Meta), hosting and AI model providers. We are not responsible for their availability or for their own terms and policies.",
      ],
    },
    {
      h: "Limitation of liability",
      p: [
        'The website and assistant are provided "as is". To the extent permitted by law, IDRAK is not liable for indirect or consequential losses arising from their use. Nothing in these terms limits liability that cannot be limited under the laws of Oman.',
      ],
    },
    {
      h: "Privacy",
      p: [
        "Our use of personal information is described in our Privacy Policy at omanai.tech/privacy.",
      ],
    },
    {
      h: "Changes and governing law",
      p: [
        "We may update these terms from time to time; the date above shows the latest version. These terms are governed by the laws of the Sultanate of Oman, and disputes fall under the courts of Muscat.",
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
  title: "شروط الخدمة",
  updated: "آخر تحديث: 27 سبتمبر 2026",
  intro: `تحكم هذه الشروط استخدامك لهذا الموقع والمساعد الذكي لإدراك وخدمات واتساب والمراسلة المقدّمة من ${SITE.legalName}، سجل تجاري رقم ${SITE.crNumber}، مسقط، سلطنة عُمان. باستخدامك لها فإنك توافق على هذه الشروط.`,
  sections: [
    {
      h: "خدماتنا",
      p: [
        "تقدّم إدراك حلول الأتمتة بالذكاء الاصطناعي والفيديو والمحتوى والمواقع والحلول الرقمية ومنتجات أعمال ذات صلة. تخضع المشاريع المحددة لعرض أو اتفاقية مكتوبة منفصلة تُقدَّم على هذه الشروط عند الاختلاف.",
      ],
    },
    {
      h: "استخدام الموقع والمساعد",
      p: [
        "توافق على استخدام الموقع والمساعد الذكي وقنوات المراسلة بشكل قانوني وعدم إساءة استخدامها أو تعطيلها أو محاولة الوصول غير المصرّح به إليها.",
        "يقدّم المساعد الذكي معلومات عامة مولّدة آلياً قد تكون ناقصة أو غير دقيقة، وليست استشارة مهنية أو قانونية أو مالية. تُعتمد الأسعار والمدد والنطاق فقط في عرض مكتوب.",
      ],
    },
    {
      h: "واتساب والمراسلة",
      p: [
        "عند مراسلتنا عبر واتساب أو منصات Meta، قد نرد يدوياً أو برسائل آلية أو مدعومة بالذكاء الاصطناعي تتعلق باستفسارك أو مشروعك. يمكنك إيقاف الرسائل في أي وقت بالرد بكلمة STOP أو إبلاغنا. يخضع استخدام واتساب أيضاً لشروط Meta.",
      ],
    },
    {
      h: "الملكية الفكرية",
      p: [
        "محتوى الموقع وتصميمه وشعاراته ومواده ملك لإدراك أو المرخّصين لها ولا يجوز نسخها أو إعادة استخدامها دون إذن. تُحدَّد ملكية الأعمال المسلَّمة للعملاء في الاتفاقية الخاصة بها.",
      ],
    },
    {
      h: "خدمات الأطراف الثالثة",
      p: [
        "تعتمد خدماتنا على أطراف ثالثة مثل واتساب (Meta) ومزوّدي الاستضافة ونماذج الذكاء الاصطناعي، ولسنا مسؤولين عن توفّرها أو عن شروطها وسياساتها.",
      ],
    },
    {
      h: "حدود المسؤولية",
      p: [
        'يُقدَّم الموقع والمساعد "كما هما". وفي الحدود التي يسمح بها القانون، لا تتحمّل إدراك مسؤولية الخسائر غير المباشرة أو التبعية الناتجة عن استخدامهما. لا يحدّ أي شيء هنا من المسؤولية التي لا يجوز تحديدها وفق قوانين سلطنة عُمان.',
      ],
    },
    {
      h: "الخصوصية",
      p: ["يوضّح استخدامنا للمعلومات الشخصية في سياسة الخصوصية على omanai.tech/privacy."],
    },
    {
      h: "التغييرات والقانون الحاكم",
      p: [
        "قد نحدّث هذه الشروط من وقت لآخر، ويوضّح التاريخ أعلاه أحدث نسخة. تخضع هذه الشروط لقوانين سلطنة عُمان، وتختص محاكم مسقط بالنزاعات.",
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

export const TERMS = { en, ar };
