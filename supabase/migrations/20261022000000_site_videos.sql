-- Videos shown on omanai.tech/videos and managed at /admin/videos.
-- Written, NOT applied: run against the CRM Supabase project only after approval.
-- Access: service role only (RLS on, no policies). The site reads/writes through
-- lib/videos.ts with SUPABASE_SERVICE_ROLE_KEY, same as /api/pv.

create table if not exists public.site_videos (
  id             uuid primary key default gen_random_uuid(),
  title_en       text not null check (char_length(title_en) between 1 and 200),
  title_ar       text check (char_length(title_ar) <= 200),
  description_en text check (char_length(description_en) <= 1000),
  description_ar text check (char_length(description_ar) <= 1000),
  category       text not null check (category in ('promo', 'solution', 'project_demo')),
  solution_slug  text check (solution_slug ~ '^[a-z0-9-]{1,60}$'),
  storage_path   text,   -- object path inside the site-videos bucket
  external_url   text check (external_url ~ '^https://'),   -- YouTube or direct https video URL
  poster_path    text,   -- image path inside the site-videos bucket
  published      boolean not null default false,
  sort_order     integer not null default 0,
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now(),
  check (storage_path is not null or external_url is not null)
);

create index if not exists site_videos_public_idx
  on public.site_videos (published, sort_order, created_at desc);

alter table public.site_videos enable row level security;

-- Public bucket: playback needs a plain URL. Uploads go through signed upload URLs
-- minted by the site after an admin/API-token check. The bucket limit cannot exceed
-- the project-wide upload limit (Storage settings); raise that for files over 50 MB.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'site-videos', 'site-videos', true, 524288000,
  array['video/mp4', 'video/webm', 'video/quicktime', 'image/jpeg', 'image/png', 'image/webp']
)
on conflict (id) do nothing;
