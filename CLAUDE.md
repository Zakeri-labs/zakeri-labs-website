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

This is a **Next.js 15 App Router** site (React 19, TypeScript). It was recently migrated from TanStack Start — ignore the stale `AGENTS.md` which still references the old `src/` layout.

### Directory layout

- `app/` — Next.js App Router pages (`layout.tsx`, `page.tsx`, `providers.tsx`, route folders)
- `components/site/` — site-specific sections and layout parts (Header, Footer, HeroVisual, etc.)
- `components/ui/` — shadcn/ui primitives (Radix UI + class-variance-authority); do not edit these unless upgrading
- `lib/` — shared utilities: `site.ts` (global SITE config), `i18n.tsx` (language provider), `utils.ts` (cn helper)
- `hooks/` — custom React hooks

### i18n

`lib/i18n.tsx` exports a `LanguageProvider` and `useI18n()` hook with three locales: `en`, `ar`, `fa`. Arabic and Farsi are RTL — the provider sets `document.documentElement.dir` and persists the choice to `localStorage`. All translation strings live directly in that file as flat key/value dictionaries.

### Routing

Each `app/<route>/page.tsx` is a thin shell that renders a heavy client component from `components/site/`. The root layout (`app/layout.tsx`) mounts `<Header>`, `<Footer>`, and `<MobileBottomNav>` around `{children}`.

### Styling

Tailwind CSS v4 with `@import "tailwindcss"`. The dark-only theme is defined entirely in `app/globals.css` as CSS custom properties (oklch colors). Key custom utilities also live there:

- `.glass-card` — frosted-glass card style
- `.gradient-text` — primary gradient applied as text clip
- `.animate-marquee` / `.animate-float-slow` — keyframe animations

Headings use **Space Grotesk** (`font-display`), body uses **Inter** (`font-sans`). Both are self-hosted via `@fontsource`.

### Site config

`lib/site.ts` holds the single source of truth for the brand name, URL, phone, WhatsApp link, and email. Import `SITE` from there rather than hard-coding values.

### Path alias

Use `@/` to import from the project root (e.g. `@/lib/site`, `@/components/ui/button`).
