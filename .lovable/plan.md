
# Zakeri Labs — AI Website Growth Infrastructure (Demo)

A premium dark, visual-first marketing site closely matching the uploaded reference design. Built on TanStack Start with file-based routes.

## Design system

- Palette (added to `src/styles.css` as oklch tokens):
  - Background: deep navy `#070b18` → graphite `#0b1224`
  - Surface/cards: `#0e1730` with subtle border `rgba(99,140,255,0.12)`
  - Foreground: soft white `#e6ecff`, muted `#8a96b8`
  - Primary: electric blue `#3b82f6`, glow `#60a5fa`
  - Accent cyan `#22d3ee`; destructive ember `#f87171` (used sparingly on Problem cards)
  - Gradients: `--gradient-hero` radial navy→indigo glow; `--gradient-primary` blue→cyan; `--shadow-elegant` blue-tinted
- Typography: `Space Grotesk` (display headings) + `Inter` (body) via @fontsource. Tight tracking on H1, generous line-height on body.
- Components: shadcn Button, Card, Input, Textarea, Select, Accordion (FAQ), Sheet (mobile menu), Carousel (case studies), Sonner.
- Motion: Framer Motion fade/slide-in on section enter; marquee for trust bar; no heavy effects.

## Routes (TanStack file-based)

```
src/routes/
  __root.tsx          (shell, header, footer, mobile bottom nav, lang provider)
  index.tsx           (homepage — 7 sections)
  services.tsx
  pricing.tsx
  insights.tsx
  about.tsx
  contact.tsx
```

Each route gets unique `head()` meta (title, description, og:title/description, canonical, og:url).

## Homepage sections (match reference)

1. **Hero** — eyebrow chip, H1, sub, two CTAs, trust micro-copy + 4 support icons row. Right: layered "dashboard" mockup cards (Website Performance / Leads Generated / Search Visibility) over a faint wireframe-globe SVG. Built with pure CSS/SVG (no real charts), styled to mirror the reference.
2. **Trust bar** — centered eyebrow + sub, then 8 small icon tiles in a responsive grid (Website Strategy, Conversion Planning, SEO Structure, GEO/AEO, AI-Ready Content, Lead Capture, Web Applications, Analytics Path). Slim marquee fallback on mobile.
3. **Problem + Solution (side-by-side)** — two large cards on one row (stack on mobile), per reference: left "Growth Gaps" with 4 ember-tinted rows + outline CTA; right "Core Solution" with 6 rows + inset CTA panel. An arrow between cards on desktop.
4. **Services / Growth Engines** — 4 premium cards in a row with icon, title, short desc, inline CTA link.
5. **Case Studies** — "Proof of Execution" intro + 4 browser-mockup cards (industry chip overlay, placeholder image, title, short goal, View Case Study). Horizontal scroll on mobile via shadcn Carousel.
6. **Testimonials** — 3 quote cards beneath case studies, placeholder avatars and roles only.
7. **Final CTA** — split: left "Ready to Turn Your Website Into a Growth Engine?" with Book + WhatsApp buttons; right contact form (Name, Company, Website URL, WhatsApp/Phone, Main Goal select, Budget Range select, Message).

> Note: per brief the homepage is 7 sections. Problem + Solution are presented as a single combined row (matches the reference image exactly) but contain both distinct blocks. If you'd rather split them into separate stacked sections, say the word.

## Skeleton pages

- **Services**: headline + sub + 8 service cards in a 2-col grid + bottom CTA.
- **Pricing**: 3 package cards (Starter / Growth / Advanced + AI), feature lists, CTA each, pricing note.
- **Insights**: 6 article preview cards (placeholder cover, title, 1-line summary, "Read" link — non-functional).
- **About**: headline, positioning paragraph, 5 "Core Beliefs" cards, CTA.
- **Contact & FAQ**: full contact form + WhatsApp CTA + 6-item shadcn Accordion FAQ.

Each is short, premium, and visually consistent with the homepage cards.

## Header & nav

- Sticky translucent header with blur. Logo mark (small diamond SVG) + "Zakeri Labs". Desktop links: Home, Services, Pricing, Insights, About, Contact. Right: language switcher (EN / AR / FA) + primary CTA "Book a Growth Audit".
- Mobile: logo + tagline "AI Websites & Growth Infrastructure", hamburger opens right Sheet with all routes + section anchors + language switcher.
- **Bottom sticky mobile nav**: Home, Services, Case Studies, Contact, WhatsApp (links to `https://wa.me/971507158137`).

## Footer

Slogan, short description, link columns, Book a Growth Audit CTA, WhatsApp CTA, legal line with dynamic year and "Zakeri Labs".

## Multilingual (UI labels only)

- Lightweight `LanguageProvider` (React context, localStorage-persisted) with `en | ar | fa` and a `t()` lookup for nav, CTAs, section badges/headlines, form labels, footer.
- Long-form body copy stays English per user choice.
- On `ar`/`fa`: set `<html dir="rtl" lang="...">`, flip arrow icons, mirror marquee direction, swap left/right paddings via Tailwind logical utilities (`ps-*`, `pe-*`, `ms-*`, `me-*`). Mobile sheet slides from the start side.
- Switcher in header dropdown (shadcn DropdownMenu) and inside mobile sheet.

## Contact details

- WhatsApp number wired everywhere: `+971 50 715 8137` → `wa.me/971507158137`.
- Contact form is presentational (no backend) — submit shows a Sonner success toast; no fake metrics anywhere.

## SEO

- Homepage title: `Zakeri Labs | AI Website Growth Infrastructure Agency`
- Meta description as specified in brief.
- Semantic H1/H2/H3, descriptive alt placeholders, internal links, canonical + og:url on every route, Organization JSON-LD in `__root.tsx`, FAQPage JSON-LD on Contact page.

## Files to add/modify

- `src/styles.css` — palette, gradients, shadows, custom utilities (`.glass-card`, `.gradient-text`).
- `src/lib/i18n.tsx` — language context + dictionaries.
- `src/lib/site.ts` — agency constants (name, phone, wa link).
- `src/components/site/` — `Header.tsx`, `Footer.tsx`, `MobileBottomNav.tsx`, `LanguageSwitcher.tsx`, `SectionBadge.tsx`, `BrowserMockup.tsx`, `HeroVisual.tsx`, `IconTile.tsx`, `CaseStudyCard.tsx`, `TestimonialCard.tsx`, `ContactForm.tsx`.
- `src/routes/index.tsx` — 7 sections wired.
- `src/routes/{services,pricing,insights,about,contact}.tsx` — skeleton pages.
- `src/routes/__root.tsx` — extend with header/footer/mobile nav/lang provider; sitewide meta + JSON-LD.
- Fonts via `bun add @fontsource/space-grotesk @fontsource/inter` (imported in `src/start.ts`/root).

## Out of scope

- No real backend, no analytics, no real images (CSS/SVG placeholders + neutral gradient cover panels).
- No blog engine — Insights is static cards.
- No CMS, no payments.
