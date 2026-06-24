# Repository Guidelines

## Project Structure & Module Organization
This is a TanStack Start + Vite + React 19 app. Application code lives in `src/`. Route files are in `src/routes`; each `.tsx` file maps to a URL, and `src/routes/__root.tsx` is the shared app shell. Reusable UI primitives live in `src/components/ui`, while site-specific sections belong in `src/components/site`. Shared helpers are in `src/lib`, hooks in `src/hooks`, global styles in `src/styles.css`, and the SSR entry wrapper in `src/server.ts`. Do not edit `src/routeTree.gen.ts`; it is generated.

## Build, Test, and Development Commands
Use npm because the repo includes `package-lock.json`.

- `npm install` installs dependencies.
- `npm run dev` starts the Vite dev server for local work.
- `npm run build` creates the production build.
- `npm run build:dev` builds using development mode for debugging build issues.
- `npm run preview` serves the built app locally.
- `npm run lint` runs ESLint across the repo.
- `npm run format` applies Prettier formatting.

## Coding Style & Naming Conventions
Write TypeScript with strict typing in mind and use the `@/*` path alias for imports from `src/`. Prettier enforces 100-character lines, semicolons, double quotes, and trailing commas. Use 2-space indentation to match the existing codebase. Prefer PascalCase for React components (`ContactForm.tsx`), camelCase for utilities (`errorCapture.ts`-style names), and route filenames that follow TanStack Start conventions such as `index.tsx`, `$id.tsx`, and `__root.tsx`.

## Testing Guidelines
There is currently no automated test suite configured. Before opening a PR, run `npm run lint`, `npm run build`, and manually verify key routes in `npm run dev`. If you add tests, keep them close to the feature as `*.test.ts` or `*.test.tsx` and favor React-focused integration coverage over brittle implementation tests.

## Commit & Pull Request Guidelines
Recent history uses short, imperative commit subjects such as `remove agents file for lovable` and `Built full demo with 7 sections`. Prefer concise, descriptive subjects under 72 characters and avoid vague messages like `Changes`. PRs should include a brief summary, note any route or UI areas affected, link related issues, and attach screenshots for visible frontend updates.
