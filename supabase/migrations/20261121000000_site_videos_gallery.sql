-- Portfolio gallery (Mr Zakeri, 20 Nov 2026): every sample gets a short code (#C81) that sales
-- and the WhatsApp AI send as a link (omanai.tech/portfolio/C81), and an industry for the tabs.
-- Written, NOT applied: run against the CRM Supabase project only after approval.
-- Additive only; the site works before this runs (code and industry simply stay empty).

alter table public.site_videos
  add column if not exists code     text check (code ~ '^[A-Z][0-9]{1,4}$'),
  add column if not exists industry text check (industry ~ '^[a-z0-9-]{1,40}$');

create unique index if not exists site_videos_code_key on public.site_videos (code);

-- Rows that exist today (site demo reels, product tours) get S1, S2, ... in their current order.
-- Client reels take C1, C2, ... (added from /admin/videos or the API).
with numbered as (
  select id, row_number() over (order by sort_order, created_at) as n
  from public.site_videos
  where code is null
    -- first run only: a second run must not restart at S1 and hit the unique index
    and not exists (select 1 from public.site_videos where code is not null)
)
update public.site_videos v
set code = 'S' || numbered.n
from numbered
where v.id = numbered.id;
