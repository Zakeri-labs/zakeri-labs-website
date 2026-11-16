# پیام‌های سجاد (کارشناس SEO) درباره‌ی معماری سایت omanai.tech
منبع: گروه واتس‌اپ «seo idrak»، سه‌شنبه ۱۲ آبان ۱۴۰۵. حسین ۱۸ آبان متن کامل را داد. متن تقریباً کلمه‌به‌کلمه، فقط تیترگذاری شده.

## مقدمه
سایت و ساختار منوها را کامل بررسی کردم. قبل از جدی شروع کردن سئو و تولید محتوا، **معماری سایت باید یک‌بار اصولی اصلاح شود.** از نظر فنی وضع بدی نیست و زیرساخت سئو تا حد خوبی پیاده شده؛ مشکل اصلی ساختار صفحات و Intentهای جستجوست: خیلی از خدمات مهم داخل یک صفحه‌ی `/services` جمع شده‌اند و گوگل برای سرویس‌های اصلی صفحه‌ی مستقل ندارد. این روی SEO، UX و فروش اثر دارد.
- ما Custom Software Development می‌فروشیم ولی صفحه‌ی مستقل ندارد و داخل Custom Business Automation گم شده؛ طبق تارگت‌بندی، پروژه‌های Custom Software برای شرکت‌های متوسط و بزرگ **۹۰۰ تا ۵۰۰۰+ ریال**اند.
- SaaS از مسیرهای اصلی فروش است ولی نباید داخل Services باشد؛ باید Product دیده شود.
- معماری بر سه بخش اصلی: **Services، Products، Industries**؛ و Work / Insights / About / Contact لایه‌های مکمل.

## منوی اصلی
- Header: **Services · Products · Industries · Work · Insights · About · Contact**، سمت راست زبان عربی و یک CTA مشخص: **Discuss Your Project** یا **Book a Consultation** (به‌جای Boost Your Business که برای B2B و Custom Software کمتر مستقیم است).
- Home لازم نیست در منو باشد (لوگو لینک می‌دهد)؛ ماندنش هم اشکال ندارد.

## Services — هر سرویس صفحه‌ی مستقل (نه section/anchor در /services)
1. **Custom Software Development** — `/services/custom-software-development` — از مهم‌ترین صفحات. Custom Business Software، Internal Tools، CRM Systems، Dashboards، Portals، Workflow Systems، Custom Web Applications، Business Platforms، API Integrations، SaaS Platforms، Operations Systems. باید Offer مستقل باشد، نه زیرمجموعه‌ی Automation.
2. **AI & Business Automation** — `/services/ai-business-automation` — فقط اتوماسیون فرایندهای داخلی و عملیاتی: Workflow Automation، Business Process Automation، Approval Flows، Back-office Automation، Document Processing، Data Transfer، System Integrations، AI-assisted Workflows، Operational Automation.
3. **AI Agents & WhatsApp Automation** — `/services/whatsapp-ai-automation` یا بزرگ‌تر `/services/ai-agents` با WhatsApp به‌عنوان Use Case اصلی: WhatsApp AI Assistant، Lead Qualification، Customer Support، Product Recommendation، Automated Replies، CRM Integration، Follow-up Automation، Arabic/English Conversations، Sales Handoff. (در Home مسیر اصلی است ولی در Services زیر Automation رفته.)
4. **AI Video Production** — `/services/ai-video-production` — Use Caseها: Real Estate، Hotels، Interior Design، Healthcare، Luxury Products، Industrial Products، Social Media Campaigns، Promotional Videos. Positioning خوب برای عمان.
5. **Content & Social Media** — `/services/content-social-media` — Content Strategy، Social Media Management، Content Production، Campaign Content، AI-assisted Content، Brand Communication.
6. **Web Design** — `/services/web-design` (جدا از SEO؛ Intent متفاوت) — Corporate/Business Websites، Landing Pages، Custom Web Design، Conversion-focused Design، Responsive Development، Performance.
7. **SEO & GEO** — `/services/seo-geo` — Technical/Local/Content/On-page SEO، Search Strategy، GEO، AI Search Optimization، AEO. اگر بعداً دیتا نشان داد GEO تقاضای مستقل دارد، صفحه‌ی جدا.

**تناقض فعلی:** Home می‌گوید «One team. Five ways to create value» و Services می‌گوید «Four Ways We Help Businesses…». باید یکدست شود؛ هر کارت Home به صفحه‌ی مستقل خودش لینک دهد، نه `/services#…`.

## Products (SaaS)
SaaS داخل Services نباشد. `/products` فقط Hub. دو محصول فعلی:
- `/products/construction-supervision-reporting`
- `/products/clinic-crm-whatsapp-assistant`
محصولات بعدی هم صفحه‌ی خودشان، مثلاً `/products/car-rental-management`، `/products/property-management-platform`. Products = آماده و اشتراکی؛ Services = Custom و Consulting.

## Industries
دو گزارش ارسالی (صنایع هدف SaaS و صنایع هدف Custom Software) لیست خدمات نیستند. ۲۵ مورد را مستقیم صفحه نکنیم؛ overlap دارند (مثلاً Real Estate Agencies/Developers/Property Management؛ Dental/Aesthetic/Dermatology/Private Healthcare؛ Wholesale/Distribution/Food Distribution؛ HVAC/Facility/Property Management).
**فاز اول — ۶ صفحه:**
1. Real Estate & Property — `/industries/real-estate` (تارگت SaaS و Custom، AI Video، سایت و Lead، CRM و واتس‌اپ؛ نمونه‌کار داریم)
2. Healthcare & Clinics — `/industries/healthcare` (Dental، Aesthetic، Dermatology، Private Healthcare Groups؛ محصول Clinic CRM داریم)
3. Construction & Contracting — `/industries/construction` (Custom Software + محصول Construction Reporting)
4. Wholesale & Distribution — `/industries/wholesale-distribution` (Inventory، Orders، Sales Teams، Dashboards، Workflow، CRM، Distribution Systems)
5. Facility & Property Management — `/industries/facility-property-management` (Facility، HVAC، Property Management)
6. Logistics & Transport — `/industries/logistics-transport` (Operations، Tracking، Dashboards، Automation، Fleet Systems، Workflow، Reporting)
**بعداً با دیتا:** Manufacturing & Industrial، Automotive & Car Rental، Hospitality & Travel، Retail.
**محتوای Industry Page:** نه پاراگراف کلی («AI is transforming…»)؛ دقیقاً کارهایی که برای آن صنعت می‌کنیم (مثلاً Real Estate: Lead Capture، WhatsApp Follow-up، Property CRM، Broker Dashboards، Custom Portals، PMS، AI Video for Off-plan، Web Design، SEO، Automation) و از هر Use Case لینک به سرویس مرتبط. هم SEO Page، هم Sales Page.

## Work
Selected Work فعلی بیشتر Website Portfolio است و برای فروش Custom Software و Automation کافی نیست. تبدیل به **Work** با: **Case Studies · Website Portfolio · Videos & Demos**.
ساختار هر Case Study: Problem، Existing Process، Solution، What We Built، Result، Technologies/Capabilities، Related Service. «حتی ۳ Case Study درست از ۲۰ نمونه سایت ساده ارزشمندتر است.»
- Videos زیر Work → Videos & Demos (در منوی اصلی نباشد).
- How We Work بماند ولی زیر About → How We Work (Discovery، Pilot، Defined Project، Ongoing Partnership).
- Jobs → About → Careers + لینک در Footer.
- **Insights** وارد منوی اصلی شود (Articles و Guides). Clusterها: AI Automation، Custom Software، WhatsApp & CRM، AI Agents، Industry Automation، AI Video، Web Design، SEO/GEO. هر مقاله به Money Page مرتبط لینک دهد؛ مثلاً «AI Automation for Real Estate Companies in Oman» → `/services/ai-business-automation` و `/industries/real-estate`.

## Navigation نهایی
- Services: Custom Software Development، AI & Business Automation، AI Agents & WhatsApp Automation، AI Video Production، Content & Social Media، Web Design، SEO & GEO
- Products: Construction Supervision Reporting، Clinic CRM & WhatsApp Assistant، محصولات بعدی
- Industries: همان ۶ مورد
- Work: Case Studies، Website Portfolio، Videos & Demos
- About: About IDRAK، How We Work، Careers
- CTA: Discuss Your Project / Book a Consultation

## Homepage
بازطراحی کامل لازم نیست؛ پیام More Sales / Lower Costs / Better Performance خوب است. بخش Services با معماری جدید هماهنگ شود (هر سرویس کارت و لینک خودش)، **Custom Software Development کاملاً دیده شود**، و معرفی کوتاه «Solutions by Industry» و «Our Products».

## نسخه‌ی عربی
همین معماری، نه فقط ترجمه. هر URL انگلیسی نسخه‌ی عربی متناظر. کلیدواژه‌ی عربی بعد از Keyword Research (مثلاً برای Custom Software: تطوير البرمجيات / تطوير برامج مخصصة / حلول برمجية للشركات).

## Internal Linking
Service ↔ Industry، Product → Industry، Article → Service و Industry، Case Study → Service (و Industry و Product مرتبط). مثال: Case Study ساخت‌وساز → Construction Industry + Custom Software Development + AI Automation (+ Product).

## ترتیب اجرا
- **P0:** معماری Services نهایی؛ صفحه‌ی مستقل Custom Software Development، AI & Business Automation، AI Agents/WhatsApp؛ بقیه‌ی سرویس‌ها URL مستقل؛ Header و Navigation جدید؛ لینک Home به صفحات جدید.
- **P1:** Products Hub + دو صفحه‌ی محصول؛ Industries Hub + ۶ صفحه؛ Selected Work → Work + Case Studies؛ Videos زیر Work؛ How We Work زیر About؛ Jobs → Careers زیر About؛ Insights در منوی اصلی.
- **P2:** نسخه‌ی عربی کامل؛ hreflang و canonical همه‌ی صفحات جدید؛ Sitemap؛ Internal Linking کامل. بعد Keyword Research هر Service و Industry، و بعد Title/H1/Meta/Content نهایی.

## نکته‌ی مهم درباره‌ی مقاله‌ها
**فعلاً مقاله‌ی جدید منتشر نکنیم.** اول Money Pageها. اگر الان ۲۰–۳۰ مقاله منتشر کنیم همه به یک `/services` عمومی لینک می‌دهند. اول ساختار Commercial، بعد Content Clusterها.

## جمع‌بندی سجاد
Services = Custom · Products = SaaS · Industries = راهکار صنعتی · Work = Proof و Case Study · Insights = محتوا و SEO · About = اعتماد و Process. مهم‌ترین مورد: **Custom Software Development از دل Automation بیرون بیاید و ستون اصلی IDRAK شود.** قبل از تولید محتوای جدی این معماری کامل پیاده شود تا مجبور نشویم URL، منو و لینک‌دهی داخلی را دوباره عوض کنیم.

## درخواست سجاد
«حسین جان لطفاً **دسترسی فول** به من بده که بتونم به همه صفحات دسترسی داشته باشم.» (ایمیل گوگلش: `ehsanfar94@gmail.com`؛ یوزر GitHub را باید از او بگیریم.)
