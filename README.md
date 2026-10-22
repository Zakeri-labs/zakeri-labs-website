# omanai.tech

Next.js 15 site for IDRAK AI Solutions. See `CLAUDE.md` for the architecture.

## Videos (admin + API)

Public page: `/videos` (`/ar/videos`). Admin: `/admin/videos` (password login, noindex).
Data: table `site_videos` + public Storage bucket `site-videos` in the CRM Supabase
(migration: `supabase/migrations/20261022000000_site_videos.sql`, apply once before first use).
The bucket is public (needed for playback), so an uploaded file is reachable by URL even while unpublished.
Login only delays failed tries by 800 ms: add a Vercel Firewall rate limit on `/api/videos/login`.
Files above 50 MB need the Supabase project upload limit raised (Storage settings).

Env on Vercel: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` (already used by `/api/pv`),
`SUPABASE_ANON_KEY` (public key, sent with signed uploads), `VIDEOS_ADMIN_PASSWORD`,
`VIDEOS_ADMIN_SECRET` (long random string, signs the login cookie), `VIDEOS_API_TOKEN` (automation).

### Automation API

All calls send `x-api-key: <VIDEOS_API_TOKEN>`. Errors: `401` bad token, `400` invalid body, `404` unknown id, `502` Supabase problem.

1. Link only (YouTube or any https video URL): skip to step 3 with `external_url`.
2. Upload a file: `POST /api/videos/upload-url` with `{"filename":"demo.mp4","content_type":"video/mp4"}`
   (also `image/jpeg|png|webp` for the poster). Returns `{path, upload_url, apikey}`.
   Then `PUT upload_url` with multipart form: field `cacheControl=3600` and the file under the empty field name `""`
   (if `apikey` is not null, also send headers `apikey` and `Authorization: Bearer <apikey>`).
3. `POST /api/videos` with JSON:
   `{"title_en":"...","title_ar":"...","description_en":"...","description_ar":"...",
"category":"promo|solution|project_demo","solution_slug":"optional-slug",
"storage_path":"<path from step 2>" | "external_url":"https://...","poster_path":"<poster path>",
"published":true,"sort_order":0}` -> `201 {video}`. Needs `title_en`, `category` and one of `storage_path`/`external_url`.
   Pages refresh within about 60 seconds.

Also: `GET /api/videos` (all, incl. unpublished), `PATCH /api/videos/{id}` (any subset of the fields above),
`DELETE /api/videos/{id}` (removes the row and its files).
