import type { DetailEntry } from "./types";

/**
 * Case studies (/work/<slug>). Built only from IDRAK's own project docs: no client names that are
 * not already public, no invented numbers. Figures quoted here come from the projects' written analysis.
 */
export const CASE_PAGES: DetailEntry[] = [
  {
    kind: "work",
    slug: "ai-hiring-platform-voice-interviews",
    image: "agent",
    interest: "automation",
    related: {
      services: ["custom-software-development", "ai-business-automation", "whatsapp-ai-automation"],
      work: ["sales-crm-lead-distribution-whatsapp"],
    },
    en: {
      seo: {
        title: "Case Study: AI Hiring Platform with Voice Interviews | IDRAK",
        description:
          "How IDRAK built an online hiring platform for its own sales team: a mobile application, a live AI voice role-play call and a scored report for every candidate.",
      },
      name: "AI Hiring Platform with Voice Interviews",
      summary:
        "Telemarketer hiring for IDRAK's own team: mobile application, live AI role-play call, scored report.",
      hero: {
        eyebrow: "Case Study · Custom Software + AI",
        title: "An Online Hiring Platform Where Every Candidate Makes a Live Call to an AI Client.",
        intro:
          "IDRAK hires telemarketers in Muscat to call businesses and book meetings. We built our own hiring platform so every applicant is tested on the one skill that matters, a real sales call, before anyone on the team spends time on an interview.",
        support: "Live at job.omanai.tech, used for IDRAK's own recruitment.",
      },
      problem: {
        eyebrow: "Problem & existing process",
        title: "CVs Did Not Show Who Could Actually Sell on the Phone.",
        intro:
          "Before the platform, applicants sent CVs and the hiring manager screened them by hand, then called people one by one to see how they handled a conversation.",
        points: [
          "A CV says little about how someone handles an objection on a cold call.",
          "Every first-round call took the manager's time, including for candidates who were clearly not ready.",
          "There was no common yardstick, so two candidates were never judged on the same questions.",
          "Results lived in chats and notes, with no history when the same person applied again.",
        ],
      },
      offer: {
        eyebrow: "Solution & what we built",
        title: "A Mobile Application, a Live AI Call and a Report the Manager Can Trust.",
        intro:
          "The candidate completes a short mobile wizard, then makes a timed cold call to an AI business owner. The call is analysed against the hiring manager's own questions, and the admin panel shows a full report.",
        items: [
          {
            title: "Mobile-first application wizard",
            text: "Profile, availability, languages, experience, visa status, expected calls and meetings, and a required CV, in English or Arabic, with progress saved if the page is refreshed.",
          },
          {
            title: "Live AI role-play call",
            text: "A five-minute call with an AI business owner. Each attempt gets a different scenario (car rental, restaurant, dental clinic, furniture, beauty salon, contracting), and in some the person who answers is not the decision-maker.",
          },
          {
            title: "Audio that works on local networks",
            text: "Call audio runs through our own server over the standard web port, because some mobile networks in Oman block the usual browser voice traffic. The server also keeps the transcript, so it cannot be edited by the candidate.",
          },
          {
            title: "Scoring against the manager's questions",
            text: "Ten questions written by the hiring manager, each scored 1 to 5 with a short quote from the call. The interview counts double next to the CV and profile scores in the overall result.",
          },
          {
            title: "Admin report and candidate history",
            text: "Summary, call analysis, CV analysis and profile analysis tabs, the recording and full transcript, and every earlier attempt by the same phone number with its date and score.",
          },
          {
            title: "WhatsApp follow-through",
            text: "Candidates receive a short result page to share, interview times are confirmed on WhatsApp, and a cancelled interview sends a ready message automatically.",
          },
        ],
      },
      chips: {
        label: "Technologies & capabilities",
        items: [
          "Next.js",
          "Supabase / PostgreSQL",
          "Realtime AI voice",
          "AI scoring with structured output",
          "WhatsApp Business API",
          "English / Arabic",
          "Mobile-first PWA",
        ],
      },
      process: {
        eyebrow: "How we delivered",
        title: "Built With the Hiring Manager, Changed by Real Calls.",
        steps: [
          {
            title: "Design session",
            text: "We mapped the application steps, the call scenario and the ten questions with the hiring manager.",
          },
          {
            title: "First version in days",
            text: "A working wizard, AI call and report were live quickly, so real candidates could use it.",
          },
          {
            title: "Feedback rounds",
            text: "Each round of manager feedback changed the form, the AI client's behaviour, the timer and the report.",
          },
          {
            title: "Fixes from the field",
            text: "When calls dropped on local mobile networks, we moved the audio to our own server and re-tested.",
          },
        ],
      },
      outcomes: {
        eyebrow: "Result",
        title: "The First Interview Now Happens Without the Team.",
        items: [
          {
            title: "Every applicant is tested the same way",
            text: "Same questions, same scoring, a different client each time, so results can be compared fairly.",
          },
          {
            title: "Managers read reports, not CV piles",
            text: "The panel shows who is ready to hire, who to invite to an interview and who to invite to training.",
          },
          {
            title: "Progress over time",
            text: "Internal sales staff can retake the test, so the team sees how scores change before and after training.",
          },
          {
            title: "Less manual messaging",
            text: "Interview confirmations and cancellations go out on WhatsApp from the panel.",
          },
        ],
      },
      faq: [
        {
          q: "Can the AI call be set up for roles other than telemarketing?",
          a: "Yes. The questions are stored per position, and the scenarios and AI persona can be written for any role where a conversation shows skill, such as customer service or sales.",
        },
        {
          q: "Can candidates learn the test by repeating it?",
          a: "External candidates get one attempt, and each attempt uses a different scenario. Reconnects after a dropped line are allowed, and suspicious early hang-ups are flagged in the report.",
        },
        {
          q: "Does the candidate see their full score?",
          a: "No. Candidates see a short, positive summary. The full analysis, recording and transcript are only in the admin panel.",
        },
        {
          q: "Can a similar platform be built for our company?",
          a: "Yes. This is custom software, so the form, questions, scenarios, languages and WhatsApp messages are built around your hiring process.",
        },
      ],
      cta: {
        title: "Want to Screen Candidates Before They Reach Your Team?",
        text: "Tell us how you hire today and we will show you what an AI-assisted process could look like.",
        button: "Discuss Your Project",
      },
    },
    ar: {
      seo: {
        title: "دراسة حالة: منصة توظيف بمقابلات صوتية بالذكاء الاصطناعي",
        description:
          "كيف بنت إدراك منصة توظيف إلكترونية لفريق مبيعاتها: طلب عبر الجوال، ومكالمة تمثيل أدوار صوتية مباشرة مع الذكاء الاصطناعي، وتقرير مُقيَّم لكل مرشح.",
      },
      name: "منصة توظيف بمقابلات صوتية بالذكاء الاصطناعي",
      summary: "توظيف موظفي التسويق الهاتفي لفريق إدراك: طلب عبر الجوال، ومكالمة حيّة مع الذكاء الاصطناعي، وتقرير بالدرجات.",
      hero: {
        eyebrow: "دراسة حالة · برمجيات مخصّصة + ذكاء اصطناعي",
        title: "منصة توظيف يُجري فيها كل مرشح مكالمة حيّة مع عميل افتراضي بالذكاء الاصطناعي.",
        intro:
          "توظّف إدراك موظفي تسويق هاتفي في مسقط للتواصل مع الشركات وحجز الاجتماعات. بنينا منصة التوظيف الخاصة بنا ليُختبر كل متقدّم في المهارة الأهم، وهي مكالمة بيع حقيقية، قبل أن يصرف أحد من الفريق وقته على مقابلة.",
        support: "تعمل على job.omanai.tech لتوظيف فريق إدراك.",
      },
      problem: {
        eyebrow: "التحدي وطريقة العمل السابقة",
        title: "السيرة الذاتية لا تكشف من يستطيع البيع فعلاً عبر الهاتف.",
        intro:
          "قبل المنصة كان المتقدمون يرسلون سيرهم الذاتية، فيفرزها مدير التوظيف يدوياً، ثم يتصل بهم واحداً تلو الآخر ليرى كيف يديرون الحديث.",
        points: [
          "السيرة الذاتية لا تبيّن كيف يتعامل الشخص مع اعتراض العميل في مكالمة باردة.",
          "كل مكالمة في الجولة الأولى كانت تستهلك وقت المدير، حتى مع مرشحين غير جاهزين بوضوح.",
          "لم يكن هناك معيار موحّد، فلا يُقيَّم مرشحان على الأسئلة نفسها.",
          "النتائج متفرقة بين المحادثات والملاحظات، ولا سجلّ حين يتقدّم الشخص نفسه مرة أخرى.",
        ],
      },
      offer: {
        eyebrow: "الحل وما بنيناه",
        title: "طلب عبر الجوال، ومكالمة حيّة مع الذكاء الاصطناعي، وتقرير يعتمد عليه المدير.",
        intro:
          "يكمل المرشح نموذجاً قصيراً على الجوال، ثم يجري مكالمة بيع محدّدة الوقت مع صاحب عمل افتراضي. تُحلَّل المكالمة وفق أسئلة مدير التوظيف نفسه، وتعرض لوحة الإدارة تقريراً كاملاً.",
        items: [
          {
            title: "نموذج طلب مصمَّم للجوال أولاً",
            text: "الملف الشخصي والتوفّر واللغات والخبرة ووضع التأشيرة وعدد المكالمات والاجتماعات المتوقع وسيرة ذاتية إلزامية، بالعربية أو الإنجليزية، مع حفظ التقدّم عند تحديث الصفحة.",
          },
          {
            title: "مكالمة تمثيل أدوار حيّة",
            text: "مكالمة لخمس دقائق مع صاحب عمل افتراضي. كل محاولة بسيناريو مختلف (تأجير سيارات، مطعم، عيادة أسنان، أثاث، صالون تجميل، مقاولات)، وفي بعضها من يردّ ليس صاحب القرار.",
          },
          {
            title: "صوت يعمل على الشبكات المحلية",
            text: "يمرّ صوت المكالمة عبر خادمنا على منفذ الويب المعتاد، لأن بعض شبكات الجوال في عُمان تحجب حركة الصوت المعتادة في المتصفح. ويحفظ الخادم نص المكالمة فلا يستطيع المرشح تعديله.",
          },
          {
            title: "تقييم وفق أسئلة المدير",
            text: "عشرة أسئلة كتبها مدير التوظيف، لكلٍّ منها درجة من ١ إلى ٥ مع اقتباس قصير من المكالمة. وللمقابلة وزن مضاعف إلى جانب درجتي السيرة الذاتية والملف الشخصي.",
          },
          {
            title: "تقرير إداري وسجلّ لكل مرشح",
            text: "تبويبات للملخص وتحليل المكالمة والسيرة الذاتية والملف الشخصي، مع التسجيل الصوتي والنص الكامل، وكل المحاولات السابقة لرقم الهاتف نفسه بتاريخها ودرجتها.",
          },
          {
            title: "متابعة عبر واتساب",
            text: "يحصل المرشح على صفحة نتيجة مختصرة يشاركها، وتُؤكَّد مواعيد المقابلات عبر واتساب، وعند إلغاء مقابلة تُرسَل رسالة جاهزة تلقائياً.",
          },
        ],
      },
      chips: {
        label: "التقنيات والقدرات",
        items: [
          "Next.js",
          "Supabase / PostgreSQL",
          "صوت ذكاء اصطناعي فوري",
          "تقييم آلي بمخرجات منظَّمة",
          "WhatsApp Business API",
          "عربي / إنجليزي",
          "تطبيق ويب للجوال (PWA)",
        ],
      },
      process: {
        eyebrow: "كيف نفّذنا المشروع",
        title: "بُنيت مع مدير التوظيف وتطوّرت مع المكالمات الحقيقية.",
        steps: [
          {
            title: "جلسة تصميم",
            text: "رسمنا مع مدير التوظيف خطوات الطلب وسيناريو المكالمة والأسئلة العشرة.",
          },
          {
            title: "نسخة أولى خلال أيام",
            text: "أُطلق النموذج والمكالمة والتقرير بسرعة ليستخدمها مرشحون حقيقيون.",
          },
          {
            title: "جولات ملاحظات",
            text: "كل جولة ملاحظات من المدير عدّلت النموذج وسلوك العميل الافتراضي والمؤقّت والتقرير.",
          },
          {
            title: "إصلاحات من الميدان",
            text: "حين انقطعت المكالمات على شبكات الجوال المحلية نقلنا الصوت إلى خادمنا وأعدنا الاختبار.",
          },
        ],
      },
      outcomes: {
        eyebrow: "النتيجة",
        title: "المقابلة الأولى تتم الآن دون تدخّل الفريق.",
        items: [
          {
            title: "اختبار موحّد لكل متقدّم",
            text: "الأسئلة نفسها والتقييم نفسه مع عميل مختلف كل مرة، فتصبح المقارنة بين المرشحين عادلة.",
          },
          {
            title: "المدير يقرأ تقارير لا أكوام سير ذاتية",
            text: "تعرض اللوحة من هو جاهز للتعيين، ومن يُدعى إلى مقابلة، ومن يُدعى إلى دورة تدريبية.",
          },
          {
            title: "متابعة التطوّر مع الوقت",
            text: "يمكن لفريق المبيعات الداخلي إعادة الاختبار، فيرى الفريق تغيّر الدرجات قبل التدريب وبعده.",
          },
          {
            title: "رسائل يدوية أقل",
            text: "تأكيد المقابلات وإلغاؤها يُرسَلان عبر واتساب من اللوحة مباشرة.",
          },
        ],
      },
      faq: [
        {
          q: "هل يمكن إعداد المكالمة لوظائف غير التسويق الهاتفي؟",
          a: "نعم. الأسئلة محفوظة لكل وظيفة، ويمكن كتابة السيناريوهات وشخصية العميل الافتراضي لأي دور تُظهر فيه المحادثة المهارة، مثل خدمة العملاء أو المبيعات.",
        },
        {
          q: "هل يستطيع المرشح حفظ الاختبار بتكراره؟",
          a: "للمرشح الخارجي محاولة واحدة، وكل محاولة بسيناريو مختلف. يُسمح بإعادة الاتصال عند انقطاع الخط، ويُعلَّم في التقرير أي إنهاء مبكر مثير للشك.",
        },
        {
          q: "هل يرى المرشح درجته الكاملة؟",
          a: "لا. يرى المرشح ملخصاً قصيراً إيجابياً، أما التحليل الكامل والتسجيل والنص فمتاحة في لوحة الإدارة فقط.",
        },
        {
          q: "هل يمكن بناء منصة مشابهة لشركتنا؟",
          a: "نعم. هذه برمجيات مخصّصة، فيُبنى النموذج والأسئلة والسيناريوهات واللغات ورسائل واتساب حول طريقة التوظيف لديكم.",
        },
      ],
      cta: {
        title: "هل تريد فرز المرشحين قبل أن يصلوا إلى فريقك؟",
        text: "أخبرنا كيف توظّفون اليوم، ونُريك كيف يمكن أن تبدو العملية بمساعدة الذكاء الاصطناعي.",
        button: "ناقش مشروعك",
      },
    },
  },
  {
    kind: "work",
    slug: "sales-crm-lead-distribution-whatsapp",
    image: "automation",
    interest: "automation",
    related: {
      services: ["custom-software-development", "ai-business-automation", "whatsapp-ai-automation"],
      work: ["ai-hiring-platform-voice-interviews"],
    },
    en: {
      seo: {
        title: "Case Study: Sales CRM with Lead Routing & WhatsApp | IDRAK",
        description:
          "How IDRAK built a sales CRM for its cold-calling team in Muscat: lead bank and assignment, a meeting calendar with booking links, WhatsApp and reports.",
      },
      name: "Sales CRM with Lead Distribution & WhatsApp",
      summary:
        "The CRM IDRAK's sales team works in every day: lead assignment, meeting calendar, WhatsApp and reports.",
      hero: {
        eyebrow: "Case Study · Custom Software + WhatsApp",
        title: "A Sales CRM Built Around How a Cold-Calling Team Really Works.",
        intro:
          "IDRAK's sales team in Muscat calls Oman businesses every day to book meetings. We built the CRM they work in: who calls whom, when meetings happen, what was said and what comes next, in one place.",
        support: "In daily use by IDRAK's own sales team, in English and Arabic.",
      },
      problem: {
        eyebrow: "Problem & existing process",
        title: "Leads, Calls and Meetings Were Spread Across Sheets and Chats.",
        intro:
          "Lead lists came from spreadsheets, reps tracked their calls on their own, and meetings were agreed in chat and then copied into calendars by hand.",
        points: [
          "No clear owner for each lead, so the same business could be called twice or not at all.",
          "Meetings were double-booked or set without time to travel between clients.",
          "After a meeting, the outcome and the next step were often not written down.",
          "Managers had no single view of activity per rep or results per industry.",
        ],
      },
      offer: {
        eyebrow: "Solution & what we built",
        title: "One System From First Call to Meeting Report.",
        intro:
          "A web CRM, installable on the phone, where each rep sees only their own leads and meetings, and managers see the whole picture.",
        items: [
          {
            title: "Lead bank and assignment",
            text: "More than 5,000 Oman businesses across ten industries were imported. Managers hand out leads from a lead bank, and each lead has one owner.",
          },
          {
            title: "Meeting calendar",
            text: "A week view where reps draw a slot to book. The database blocks overlaps, keeps travel time around on-site visits and enforces a minimum notice.",
          },
          {
            title: "Public booking links",
            text: "A link clients use to pick a free 30-minute slot themselves, with checks against spam and repeated bookings.",
          },
          {
            title: "WhatsApp and online meetings",
            text: "Message a lead on WhatsApp from the CRM, create an online meeting link in one click, and copy a client brief before the call.",
          },
          {
            title: "Meeting reports that cannot be skipped",
            text: "When a meeting is marked as held, the rep must record the outcome, the next stage and the follow-up date before closing it.",
          },
          {
            title: "Reports and team training",
            text: "Results by industry, rep activity by hour in Muscat time, profile completeness per lead, and a training section with progress per person.",
          },
        ],
      },
      chips: {
        label: "Technologies & capabilities",
        items: [
          "React",
          "Supabase / PostgreSQL",
          "Row-level security",
          "WhatsApp Business API",
          "Google Meet integration",
          "English / Arabic",
          "PWA",
          "Multi-workspace",
        ],
      },
      process: {
        eyebrow: "How we delivered",
        title: "Small Releases, Driven by the Sales Manager's Feedback.",
        steps: [
          {
            title: "Start from a working base",
            text: "We adapted an existing CRM codebase instead of starting from zero, then shaped it for sales instead of clinics.",
          },
          {
            title: "Load the real leads",
            text: "Business lists were cleaned, phone numbers normalised and imported per industry.",
          },
          {
            title: "Weekly change rounds",
            text: "Each round of manager feedback was released as a numbered set of changes, with database scripts run before the new screens.",
          },
          {
            title: "Lock it down",
            text: "Every request needs a valid session, and a second company's workspace runs in the same system, kept apart at database level.",
          },
        ],
      },
      outcomes: {
        eyebrow: "Result",
        title: "The Team Works From One Place.",
        items: [
          {
            title: "Every lead has an owner",
            text: "Reps see their own queue, and managers decide who gets more leads.",
          },
          {
            title: "No more double-booked meetings",
            text: "The calendar refuses overlaps and keeps travel time, so the schedule can be trusted.",
          },
          {
            title: "Every held meeting has a next step",
            text: "Outcome, stage and follow-up date are recorded every time, so nothing is left in someone's memory.",
          },
          {
            title: "Managers see activity and results",
            text: "Reports by industry and by rep replace manual counting in spreadsheets.",
          },
        ],
      },
      faq: [
        {
          q: "Why build a CRM instead of buying one?",
          a: "Off-the-shelf CRMs fit general sales. This team needed lead banks, travel-time rules, Muscat-time reports and WhatsApp in the same screen, and the freedom to change them every week.",
        },
        {
          q: "Can sales reps see each other's leads?",
          a: "No. Reps only see their own pages and leads in the interface. Admins see everything.",
        },
        {
          q: "Can one system serve more than one company?",
          a: "Yes. This CRM runs two separate workspaces, each with its own brand, domain and users, kept apart in the database.",
        },
        {
          q: "Does it include an AI assistant?",
          a: "An AI WhatsApp sales assistant was added as an optional module. It is switched off by default and turned on only when the team is ready.",
        },
      ],
      cta: {
        title: "Is Your Sales Team Working From Spreadsheets?",
        text: "Show us how your team sells today and we will map what a CRM built for that process would look like.",
        button: "Discuss Your Project",
      },
    },
    ar: {
      seo: {
        title: "دراسة حالة: نظام CRM للمبيعات بتوزيع العملاء وواتساب | إدراك",
        description:
          "كيف بنت إدراك نظام CRM لفريق الاتصال في مسقط: بنك للعملاء المحتملين وتوزيعهم، وتقويم اجتماعات بروابط حجز، وتكامل مع واتساب، وتقارير أداء واضحة.",
      },
      name: "نظام CRM للمبيعات بتوزيع العملاء وواتساب",
      summary: "النظام الذي يعمل عليه فريق مبيعات إدراك يومياً: توزيع العملاء، وتقويم الاجتماعات، وواتساب، والتقارير.",
      hero: {
        eyebrow: "دراسة حالة · برمجيات مخصّصة + واتساب",
        title: "نظام CRM للمبيعات مبنيّ على طريقة عمل فريق الاتصال الفعلية.",
        intro:
          "يتصل فريق مبيعات إدراك في مسقط بالشركات العُمانية يومياً لحجز الاجتماعات. بنينا النظام الذي يعملون عليه: من يتصل بمن، ومتى الاجتماعات، وماذا قيل، وما الخطوة التالية، في مكان واحد.",
        support: "يستخدمه فريق مبيعات إدراك يومياً بالعربية والإنجليزية.",
      },
      problem: {
        eyebrow: "التحدي وطريقة العمل السابقة",
        title: "العملاء والمكالمات والاجتماعات كانت موزّعة بين الجداول والمحادثات.",
        intro:
          "كانت قوائم العملاء المحتملين في جداول بيانات، وكل مندوب يتابع مكالماته بطريقته، وتُتفق الاجتماعات في المحادثات ثم تُنقل إلى التقويم يدوياً.",
        points: [
          "لا مسؤول واضح عن كل عميل، فقد يُتصل بالشركة نفسها مرتين أو لا يُتصل بها أبداً.",
          "اجتماعات متداخلة أو محجوزة دون وقت للتنقّل بين العملاء.",
          "بعد الاجتماع لم تكن النتيجة والخطوة التالية تُسجَّل في كثير من الأحيان.",
          "لا رؤية موحّدة للإدارة لنشاط كل مندوب أو للنتائج حسب القطاع.",
        ],
      },
      offer: {
        eyebrow: "الحل وما بنيناه",
        title: "نظام واحد من أول مكالمة حتى تقرير الاجتماع.",
        intro:
          "نظام CRM على الويب يُثبَّت على الجوال، يرى فيه كل مندوب عملاءه واجتماعاته فقط، وترى الإدارة الصورة الكاملة.",
        items: [
          {
            title: "بنك العملاء المحتملين وتوزيعهم",
            text: "استوردنا أكثر من ٥٠٠٠ شركة عُمانية في عشرة قطاعات. توزّع الإدارة العملاء من البنك، ولكل عميل مسؤول واحد.",
          },
          {
            title: "تقويم الاجتماعات",
            text: "عرض أسبوعي يحدّد فيه المندوب الموعد بالسحب. تمنع قاعدة البيانات التداخل، وتحفظ وقت التنقّل حول الزيارات الميدانية، وتفرض مهلة إشعار مسبقة.",
          },
          {
            title: "روابط حجز للعملاء",
            text: "رابط يختار منه العميل بنفسه موعداً متاحاً لثلاثين دقيقة، مع حماية من الرسائل المزعجة والحجوزات المتكررة.",
          },
          {
            title: "واتساب والاجتماعات عن بُعد",
            text: "مراسلة العميل عبر واتساب من داخل النظام، وإنشاء رابط اجتماع عن بُعد بنقرة، ونسخ ملخص العميل قبل المكالمة.",
          },
          {
            title: "تقرير اجتماع لا يمكن تجاوزه",
            text: "عند تسجيل الاجتماع كمنعقد، يجب على المندوب إدخال النتيجة والمرحلة التالية وموعد المتابعة قبل الإغلاق.",
          },
          {
            title: "تقارير وتدريب الفريق",
            text: "النتائج حسب القطاع، ونشاط المندوبين بالساعة بتوقيت مسقط، ونسبة اكتمال ملف كل عميل، وقسم تدريب يعرض تقدّم كل شخص.",
          },
        ],
      },
      chips: {
        label: "التقنيات والقدرات",
        items: [
          "React",
          "Supabase / PostgreSQL",
          "أمان على مستوى الصفوف",
          "WhatsApp Business API",
          "تكامل Google Meet",
          "عربي / إنجليزي",
          "PWA",
          "مساحات عمل متعددة",
        ],
      },
      process: {
        eyebrow: "كيف نفّذنا المشروع",
        title: "إصدارات صغيرة تقودها ملاحظات مدير المبيعات.",
        steps: [
          {
            title: "البدء من أساس جاهز",
            text: "طوّعنا قاعدة كود CRM قائمة بدل البدء من الصفر، ثم كيّفناها للمبيعات بدل العيادات.",
          },
          {
            title: "تحميل العملاء الحقيقيين",
            text: "نُظّفت قوائم الشركات ووُحّدت أرقام الهواتف واستُوردت حسب القطاع.",
          },
          {
            title: "جولات تعديل أسبوعية",
            text: "صدرت كل جولة ملاحظات من المدير كمجموعة تعديلات مرقّمة، مع تشغيل سكربتات قاعدة البيانات قبل الشاشات الجديدة.",
          },
          {
            title: "إحكام الأمان",
            text: "كل طلب يحتاج جلسة صالحة، ومساحة عمل شركة ثانية تعمل في النظام نفسه ومفصولة على مستوى قاعدة البيانات.",
          },
        ],
      },
      outcomes: {
        eyebrow: "النتيجة",
        title: "الفريق يعمل من مكان واحد.",
        items: [
          {
            title: "لكل عميل مسؤول",
            text: "يرى المندوب قائمته الخاصة، وتقرّر الإدارة من يحصل على عملاء إضافيين.",
          },
          {
            title: "لا اجتماعات متداخلة بعد الآن",
            text: "يرفض التقويم التداخل ويحفظ وقت التنقّل، فيصبح الجدول موثوقاً.",
          },
          {
            title: "لكل اجتماع منعقد خطوة تالية",
            text: "تُسجَّل النتيجة والمرحلة وموعد المتابعة في كل مرة، فلا يبقى شيء في ذاكرة أحد.",
          },
          {
            title: "الإدارة ترى النشاط والنتائج",
            text: "تقارير حسب القطاع وحسب المندوب تحلّ محلّ العدّ اليدوي في الجداول.",
          },
        ],
      },
      faq: [
        {
          q: "لماذا بناء CRM بدل شراء نظام جاهز؟",
          a: "الأنظمة الجاهزة تناسب المبيعات العامة. احتاج هذا الفريق إلى بنك عملاء وقواعد لوقت التنقّل وتقارير بتوقيت مسقط وواتساب في الشاشة نفسها، مع حرية تعديلها كل أسبوع.",
        },
        {
          q: "هل يرى المندوبون عملاء بعضهم؟",
          a: "لا. يرى المندوب صفحاته وعملاءه فقط في الواجهة، بينما يرى المسؤولون كل شيء.",
        },
        {
          q: "هل يخدم نظام واحد أكثر من شركة؟",
          a: "نعم. يشغّل هذا النظام مساحتي عمل منفصلتين، لكلٍّ منهما علامتها ونطاقها ومستخدموها، ومفصولتين في قاعدة البيانات.",
        },
        {
          q: "هل يتضمّن مساعداً بالذكاء الاصطناعي؟",
          a: "أُضيف مساعد مبيعات بالذكاء الاصطناعي عبر واتساب كوحدة اختيارية، مُطفأ افتراضياً ولا يُفعَّل إلا حين يكون الفريق جاهزاً.",
        },
      ],
      cta: {
        title: "هل يعمل فريق مبيعاتك من جداول البيانات؟",
        text: "أرِنا كيف يبيع فريقك اليوم، ونرسم لك شكل نظام CRM مبني على هذه الطريقة.",
        button: "ناقش مشروعك",
      },
    },
  },
  {
    kind: "work",
    slug: "whatsapp-ai-sales-assistant-carpet-retailer",
    image: "whatsapp",
    interest: "whatsapp",
    related: {
      services: ["whatsapp-ai-automation", "custom-software-development", "ai-business-automation"],
      work: ["sales-crm-lead-distribution-whatsapp"],
    },
    en: {
      seo: {
        title: "Case Study: WhatsApp AI Sales Assistant for Retail | IDRAK",
        description:
          "How IDRAK built a WhatsApp AI sales assistant and staff panel for a Muscat carpet trader: Arabic replies from shop data, voice notes and human handoff.",
      },
      name: "WhatsApp AI Sales Assistant for a Carpet Trader",
      summary:
        "A Muscat carpet trader's WhatsApp: AI answers from the shop's own data, staff take over in one panel.",
      hero: {
        eyebrow: "Case Study · WhatsApp AI",
        title: "A WhatsApp Sales Assistant That Answers in Gulf Arabic and Knows When to Hand Over.",
        intro:
          "A carpet trading company in Muscat sells mostly on WhatsApp. We built an AI assistant that answers the repetitive questions from the shop's own data, and a panel where staff see every chat and take over when a person is needed.",
      },
      problem: {
        eyebrow: "Problem & existing process",
        title: "Hundreds of Messages a Day, Answered One by One.",
        intro:
          "Before the project, staff answered every WhatsApp message by hand. We analysed more than 44,000 past messages from the shop's export to see what customers actually ask.",
        points: [
          "Around 1,000 messages a day across the shop's numbers, about 90% of them in Arabic.",
          "The most common message was simply “how much?”, sent right after a product photo.",
          "Most messages were images, because the shop sells from photo albums.",
          "Some conversations were never answered at all, which is where sales were lost.",
        ],
      },
      offer: {
        eyebrow: "Solution & what we built",
        title: "An AI Assistant on WhatsApp, and a Panel the Staff Work From.",
        intro:
          "The assistant handles price, size, availability, hours, payment and delivery questions. Anything else goes to a person with the full chat history.",
        items: [
          {
            title: "Prices from the system, never from the AI",
            text: "Prices, discounts and bank details come from the shop's data and settings. The AI writes the reply, but it cannot make up a number.",
          },
          {
            title: "Product data synced from the shop's inventory",
            text: "Products and photos sync automatically from the shop's existing inventory system, so answers follow the current catalogue.",
          },
          {
            title: "Guided sales flow",
            text: "Size, then matching designs, then the customer's choice, price, delivery address and an order summary, all inside the WhatsApp chat.",
          },
          {
            title: "Voice notes understood",
            text: "Customers' voice messages are transcribed so the assistant can reply to them like text.",
          },
          {
            title: "Human handoff and shadow mode",
            text: "Clear rules send a chat to an operator, who is alerted on WhatsApp. In shadow mode the AI only drafts replies for staff to approve or edit.",
          },
          {
            title: "Staff panel in three languages",
            text: "Inbox, customers and leads, products, pricing by country, FAQs, sales playbook, blocklist and reports, in Arabic, English and Persian, built for phones.",
          },
        ],
      },
      chips: {
        label: "Technologies & capabilities",
        items: [
          "WhatsApp Business API",
          "AI assistant (LLM)",
          "Voice-to-text",
          "Next.js",
          "Supabase / PostgreSQL",
          "Inventory sync",
          "Gulf Arabic / English",
          "PWA",
        ],
      },
      process: {
        eyebrow: "How we delivered",
        title: "Data First, Then a Careful Rollout.",
        steps: [
          {
            title: "Analyse real conversations",
            text: "We studied the shop's message history to learn the questions, the language and the gaps before writing any bot logic.",
          },
          {
            title: "Full panel on sample data",
            text: "Staff could see and test every screen before the live WhatsApp line was touched.",
          },
          {
            title: "Connect the shop's own accounts",
            text: "WhatsApp, database and AI run on accounts owned by the client, not by us.",
          },
          {
            title: "Test number, then shadow, then live",
            text: "The bot first talked only to a test number while real customers went to operators, so it could be checked safely.",
          },
        ],
      },
      outcomes: {
        eyebrow: "Result",
        title: "Repetitive Questions Answered, Staff Focused on Real Sales.",
        items: [
          {
            title: "Every message is captured",
            text: "All chats land in one inbox with the customer's profile, so none are lost between phones.",
          },
          {
            title: "Prices stay correct",
            text: "Because numbers come from the system, the assistant cannot quote a wrong price or an unapproved discount.",
          },
          {
            title: "The team stays in control",
            text: "Staff decide when the bot replies on its own, when it only drafts, and when a person takes over.",
          },
          {
            title: "A clear picture of demand",
            text: "Reports show what customers ask most, which questions go unanswered and how chats move toward an order.",
          },
        ],
      },
      faq: [
        {
          q: "Does the AI decide prices or discounts?",
          a: "No. Prices, discounts and bank details always come from the shop's system and settings. The AI only phrases the reply.",
        },
        {
          q: "What happens when a customer needs a person?",
          a: "The chat is handed to an operator with the full history, and the operator gets a WhatsApp alert. The bot stays quiet in that chat until staff hand it back.",
        },
        {
          q: "Can it reply in Gulf Arabic?",
          a: "Yes. The replies were designed from the shop's real Arabic conversations, and it also answers in English.",
        },
        {
          q: "Who owns the WhatsApp number and data?",
          a: "The client. The WhatsApp line, database and AI accounts are in the client's name.",
        },
      ],
      cta: {
        title: "Is Your WhatsApp Busier Than Your Team Can Handle?",
        text: "Send us a description of your WhatsApp sales today and we will show you what an assistant could take off your team's hands.",
        button: "Discuss Your Project",
      },
    },
    ar: {
      seo: {
        title: "دراسة حالة: مساعد مبيعات ذكي على واتساب لتاجر سجاد | إدراك",
        description:
          "كيف بنت إدراك مساعد مبيعات بالذكاء الاصطناعي على واتساب ولوحة للموظفين لتاجر سجاد في مسقط: ردود عربية من بيانات المتجر، وفهم الرسائل الصوتية، وتحويل للموظف.",
      },
      name: "مساعد مبيعات واتساب بالذكاء الاصطناعي لتاجر سجاد",
      summary: "واتساب تاجر سجاد في مسقط: الذكاء الاصطناعي يجيب من بيانات المتجر، والموظفون يتولّون المحادثة من لوحة واحدة.",
      hero: {
        eyebrow: "دراسة حالة · ذكاء اصطناعي على واتساب",
        title: "مساعد مبيعات على واتساب يردّ باللهجة الخليجية ويعرف متى يحوّل المحادثة.",
        intro:
          "شركة لتجارة السجاد في مسقط تبيع معظم منتجاتها عبر واتساب. بنينا مساعداً بالذكاء الاصطناعي يجيب عن الأسئلة المتكررة من بيانات المتجر نفسه، ولوحة يرى فيها الموظفون كل المحادثات ويتولّونها حين يلزم تدخّل بشري.",
      },
      problem: {
        eyebrow: "التحدي وطريقة العمل السابقة",
        title: "مئات الرسائل يومياً، والردّ عليها واحدة تلو الأخرى.",
        intro:
          "قبل المشروع كان الموظفون يردّون على كل رسالة واتساب يدوياً. حلّلنا أكثر من ٤٤ ألف رسالة سابقة من سجلّ المتجر لنعرف ما يسأل عنه العملاء فعلاً.",
        points: [
          "نحو ١٠٠٠ رسالة يومياً على أرقام المتجر، قرابة ٩٠٪ منها بالعربية.",
          "أكثر رسالة تكراراً كانت «بكم؟» بعد صورة منتج مباشرة.",
          "معظم الرسائل صور، لأن المتجر يبيع من ألبومات الصور.",
          "بعض المحادثات لم يُردّ عليها أبداً، وهناك كانت المبيعات تضيع.",
        ],
      },
      offer: {
        eyebrow: "الحل وما بنيناه",
        title: "مساعد ذكاء اصطناعي على واتساب، ولوحة يعمل منها الموظفون.",
        intro:
          "يتولّى المساعد أسئلة السعر والمقاس والتوفّر وساعات العمل والدفع والتوصيل، وكل ما عدا ذلك يُحوَّل إلى موظف مع سجلّ المحادثة كاملاً.",
        items: [
          {
            title: "الأسعار من النظام لا من الذكاء الاصطناعي",
            text: "الأسعار والخصومات وبيانات الحساب البنكي تأتي من بيانات المتجر وإعداداته. الذكاء الاصطناعي يصوغ الردّ لكنه لا يخترع رقماً.",
          },
          {
            title: "مزامنة المنتجات مع مخزون المتجر",
            text: "تُزامَن المنتجات وصورها تلقائياً من نظام المخزون الذي يستخدمه المتجر، فتتبع الإجابات الكتالوج الحالي.",
          },
          {
            title: "مسار بيع موجَّه",
            text: "المقاس، ثم التصاميم المناسبة، ثم اختيار العميل، فالسعر، فعنوان التوصيل، ثم ملخص الطلب، وكل ذلك داخل محادثة واتساب.",
          },
          {
            title: "فهم الرسائل الصوتية",
            text: "تُحوَّل رسائل العملاء الصوتية إلى نص ليردّ عليها المساعد كأنها رسائل مكتوبة.",
          },
          {
            title: "التحويل للموظف ووضع الظل",
            text: "قواعد واضحة تحوّل المحادثة إلى موظف يصله تنبيه على واتساب. وفي وضع الظل يكتب الذكاء الاصطناعي مسودة الردّ فقط ليوافق عليها الموظف أو يعدّلها.",
          },
          {
            title: "لوحة موظفين بثلاث لغات",
            text: "صندوق الرسائل، والعملاء والعملاء المحتملون، والمنتجات، والأسعار حسب الدولة، والأسئلة الشائعة، وسيناريوهات البيع، وقائمة الحظر، والتقارير، بالعربية والإنجليزية والفارسية، ومصمَّمة للجوال.",
          },
        ],
      },
      chips: {
        label: "التقنيات والقدرات",
        items: [
          "WhatsApp Business API",
          "مساعد ذكاء اصطناعي (LLM)",
          "تحويل الصوت إلى نص",
          "Next.js",
          "Supabase / PostgreSQL",
          "مزامنة المخزون",
          "عربي خليجي / إنجليزي",
          "PWA",
        ],
      },
      process: {
        eyebrow: "كيف نفّذنا المشروع",
        title: "البيانات أولاً، ثم إطلاق حذِر.",
        steps: [
          {
            title: "تحليل المحادثات الحقيقية",
            text: "درسنا سجلّ رسائل المتجر لنفهم الأسئلة واللغة والثغرات قبل كتابة أي منطق للمساعد.",
          },
          {
            title: "لوحة كاملة على بيانات تجريبية",
            text: "رأى الموظفون كل شاشة وجرّبوها قبل لمس خط واتساب الفعلي.",
          },
          {
            title: "ربط حسابات المتجر نفسه",
            text: "واتساب وقاعدة البيانات والذكاء الاصطناعي تعمل على حسابات يملكها العميل لا نحن.",
          },
          {
            title: "رقم تجريبي، ثم وضع الظل، ثم التشغيل",
            text: "تحدّث المساعد أولاً مع رقم تجريبي فقط بينما ذهب العملاء الحقيقيون إلى الموظفين، ليُختبر بأمان.",
          },
        ],
      },
      outcomes: {
        eyebrow: "النتيجة",
        title: "الأسئلة المتكررة لها إجابة، والموظفون يركّزون على البيع الفعلي.",
        items: [
          {
            title: "لا رسالة تضيع",
            text: "كل المحادثات في صندوق واحد مع ملف العميل، فلا يضيع شيء بين الهواتف.",
          },
          {
            title: "أسعار صحيحة دائماً",
            text: "لأن الأرقام تأتي من النظام، لا يستطيع المساعد ذكر سعر خاطئ أو خصم غير معتمد.",
          },
          {
            title: "الفريق يبقى صاحب القرار",
            text: "يقرّر الموظفون متى يردّ المساعد وحده، ومتى يكتب مسودة فقط، ومتى يتولّى شخص المحادثة.",
          },
          {
            title: "صورة واضحة عن الطلب",
            text: "تعرض التقارير أكثر ما يسأل عنه العملاء، والأسئلة التي بقيت بلا إجابة، وكيف تتقدّم المحادثات نحو الطلب.",
          },
        ],
      },
      faq: [
        {
          q: "هل يحدّد الذكاء الاصطناعي الأسعار أو الخصومات؟",
          a: "لا. الأسعار والخصومات وبيانات الحساب البنكي تأتي دائماً من نظام المتجر وإعداداته، والذكاء الاصطناعي يصوغ الردّ فقط.",
        },
        {
          q: "ماذا يحدث حين يحتاج العميل إلى موظف؟",
          a: "تُحوَّل المحادثة إلى موظف مع سجلّها كاملاً، ويصله تنبيه على واتساب، ويبقى المساعد صامتاً في تلك المحادثة حتى يعيدها الموظف إليه.",
        },
        {
          q: "هل يردّ باللهجة الخليجية؟",
          a: "نعم. صُمّمت الردود انطلاقاً من محادثات المتجر العربية الحقيقية، ويجيب بالإنجليزية أيضاً.",
        },
        {
          q: "من يملك رقم واتساب والبيانات؟",
          a: "العميل. خط واتساب وقاعدة البيانات وحسابات الذكاء الاصطناعي كلها باسم العميل.",
        },
      ],
      cta: {
        title: "هل واتساب متجرك أكثر انشغالاً مما يستطيع فريقك؟",
        text: "صِف لنا كيف تبيعون عبر واتساب اليوم، ونُريك ما يمكن أن يرفعه المساعد عن كاهل فريقك.",
        button: "ناقش مشروعك",
      },
    },
  },
];
