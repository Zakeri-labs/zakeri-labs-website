# omanai.tech

Next.js 15 site for IDRAK AI Solutions. See `CLAUDE.md` for the architecture.

## Video portfolio (admin + API)

Public page: `/portfolio` (`/ar/portfolio`; `/videos` redirects to it). `/portfolio?v=<id>` opens one video.
Gallery (Mr Zakeri, 20 Nov 2026): a profile-style grid with industry tabs. Every sample has a short code
(`#C81`); `/portfolio/C81` (`/ar/portfolio/C81`) opens that sample and is the link sales and the WhatsApp AI
send (share preview = the sample's cover; canonical stays `/portfolio`). `/portfolio?industry=beauty` opens a
tab. `GET /api/portfolio` lists the published samples (code, industry, title, url) for the AI.
Codes: `C<cn.omanai.tech number>` for client reels, `S<n>` for our own films. Industries: `lib/industries.ts`,
labels in `lib/content/portfolio.ts`. Columns `code` and `industry` come from
`supabase/migrations/20261121000000_site_videos_gallery.sql` (the page works without it, with no codes or tabs).
A client reel is published only after the client agreed to be shown.
Admin: `/admin/videos` (password login, noindex).
Data: table `site_videos` in the CRM Supabase (migration: `supabase/migrations/20261022000000_site_videos.sql`).
Files: public Cloudflare R2 bucket `idrak-media` on Mr Zakeri's Cloudflare account, served at `https://media.zakeri.dev`
(long-lived cache headers; CORS allows GET from anywhere and PUT from the site). A row stores the file's full URL.
The pixel size is part of the file name (`video-1080x1920.mp4`): that is how the page tells a vertical reel from a wide film.
The bucket is public (needed for playback), so an uploaded file is reachable by URL even while unpublished.
Login only delays failed tries by 800 ms: add a Vercel Firewall rate limit on `/api/videos/login`.

Env on Vercel: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` (also used by `/api/pv` and the contact form),
`R2_ENDPOINT` (`https://<account id>.r2.cloudflarestorage.com`), `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY`,
`R2_BUCKET` (`idrak-media`), `VIDEOS_ADMIN_PASSWORD`, `VIDEOS_ADMIN_SECRET` (long random string, signs the login cookie),
`VIDEOS_API_TOKEN` (automation).

### Automation API

All calls send `x-api-key: <VIDEOS_API_TOKEN>`. Errors: `401` bad token, `400` invalid body, `404` unknown id, `502` storage or database problem.

1. Link only (YouTube or any https video URL): skip to step 3 with `external_url`.
2. Upload a file: `POST /api/videos/upload-url` with `{"content_type":"video/mp4","width":1080,"height":1920}`
   (also `image/jpeg|png|webp` for the cover; width and height are optional but give the page the right shape).
   Returns `{path, upload_url, headers}`. Then `PUT upload_url` with the raw file as the body and exactly those `headers`
   (the URL is valid for 15 minutes). `path` is the file's public URL.
3. `POST /api/videos` with JSON:
   `{"title_en":"...","title_ar":"...","description_en":"...","description_ar":"...",
"category":"promo|solution|project_demo","solution_slug":"optional-slug",
"storage_path":"<path from step 2>" | "external_url":"https://...","poster_path":"<cover path from step 2>",
"published":true,"sort_order":0}` -> `201 {video}`. Needs `title_en`, `category` and one of `storage_path`/`external_url`.
   Pages refresh within about 60 seconds.

Also: `GET /api/videos` (all, incl. unpublished), `PATCH /api/videos/{id}` (any subset of the fields above, plus `code` and `industry`; a taken code answers 409),
`DELETE /api/videos/{id}` (removes the row and its files).

## Contact form, CRM lead and tracking

`/api/contact` (the `LeadWizard`) creates a lead in the Idrak CRM (workspace `idrak-default`, source `Website`, tag `Website`)
through the CRM's `insert_lead` function, then emails the team through Resend. Either one succeeding counts as sent.
`lib/attribution.ts` keeps the visitor's first landing page, external referrer and the latest `utm_*` / `gclid` in the
first-party cookie `idrak_attr` (90 days); the form sends it along and it is written into the lead's notes, the email,
and (after `supabase/migrations/20261116000000_site_leads.sql` is applied) the `site_leads` table.
Abuse guards: honeypot field, server-side validation, 5 submissions per IP per 10 minutes.

## Google Tag Manager

Set `NEXT_PUBLIC_GTM_ID` (`GTM-XXXXXXX`) on Vercel and redeploy; without it nothing is loaded.
dataLayer events: `generate_lead` (contact form sent), `portfolio_video_play` (`video_id`, `video_title`, `video_kind`),
plus the older `contact_form_started`, `contact_form_submitted`, `whatsapp|email|phone_contact_clicked`.
