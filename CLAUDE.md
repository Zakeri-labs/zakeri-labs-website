# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Use `npm` (the repo has `package-lock.json`).

```bash
npm install          # install dependencies
npm run dev          # start Next.js dev server
npm run build        # production build
npm run lint         # ESLint
npm run format       # Prettier
```

No automated test suite exists. Before committing, run `npm run lint && npm run build` and verify key routes in the dev server.

## Architecture

This is a **Next.js 15 App Router** site (React 19, TypeScript). It was migrated from TanStack Start — ignore the stale `AGENTS.md` which still references the old `src/` layout.

### Directory layout

- `app/` — routes. English lives at the root (`/services`), Arabic under `app/[lang]` (`/ar/services`). Each `page.tsx` is three lines that hand its page component to `lib/pages.tsx` (metadata + JSON-LD).
- `app/api/contact/route.ts` — contact form endpoint; validates with zod and emails `SITE.email` through Resend (`RESEND_API_KEY` env var, sender `website@omanai.tech`).
- `components/site/pages/` — one client component per page (Home, Services, Products, Work, About, HowWeWork, Contact).
- `components/site/blocks.tsx` — shared building blocks (Section, SectionHeading, Cta, Advantage, Flow, Steps, Faq, Visual, Split, FinalCta, PageHero, ProductsBanner). Build new sections from these.
- `components/ui/` — shadcn/ui primitives; do not edit these unless upgrading
- `lib/content/*.ts` — all page copy, one module per page, each exporting `{ en, ar }`. `ar` is typed as `typeof en`, so a missing Arabic string is a type error.
- `lib/projects.ts` — Selected Work projects; `FEATURED_NAMES` picks the six shown on the homepage.
- `lib/images.ts` + `assets/` — statically imported visuals (cropped from the IDRAK presentation) and project screenshots.
- `lib/seo.tsx` — per-page titles/descriptions, hreflang, JSON-LD builders.

### i18n

Two languages: `en` (default, no prefix) and `ar` (RTL, `/ar/...`). Farsi was retired; `/fa/*` 301s to English in `next.config.ts`, alongside `/pricing → /how-we-work` and `/case-study → /selected-work`. In components: `const c = useCopy(HOME)` returns the current language's copy; `useI18n()` gives `lang`, `dir`, `setLang`.

### Styling

Tailwind CSS v4, light theme defined in `app/globals.css` (brand tokens: `ink`, `cyan`, `blue`, `violet`; utilities `bg-brand`, `gradient-text`, `card-surface`, `hero-glow`). Fonts via `next/font`: Plus Jakarta Sans (display), Inter (body), IBM Plex Sans Arabic (all Arabic text).

### Analytics

`lib/track.ts` sends conversion events (`contact_form_started`, `contact_form_submitted` with `interest_type`, `whatsapp|email|phone_contact_clicked`) to gtag/dataLayer. GA4 loads only when `NEXT_PUBLIC_GA_ID` is set.

### Site config

`lib/site.ts` holds the brand name, legal entity, phone, email and `whatsappUrl(lang)` (prefilled greeting). Import from there rather than hard-coding values.

### Path alias

Use `@/` to import from the project root (e.g. `@/lib/site`, `@/components/ui/button`).
