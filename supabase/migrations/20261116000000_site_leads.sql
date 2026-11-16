-- One row per contact-form submission on omanai.tech, with where the visitor came from.
-- Written, NOT applied: run against the CRM Supabase project (sdgsdzevbaoftrysbfbu) only after approval.
-- Until then the site still creates the CRM lead and writes the same details into the lead's notes;
-- the insert into this table simply fails and is ignored (lib/crm-lead.ts).
-- Follow a lead to its contract by joining on (tenant_id, phone) with "Lead" / "Customer".
-- Access: service role only (RLS on, no policies), same as site_pageviews and site_videos.

create table if not exists public.site_leads (
  id            bigint generated always as identity primary key,
  created_at    timestamptz not null default now(),
  tenant_id     text not null,
  phone         numeric not null,
  name          text,
  email         text,
  company       text,
  lang          text,
  answers       text,          -- business size, goals, interest and the visitor's own message
  page_url      text,          -- page the form was sent from
  landing_page  text,          -- first page of the first visit
  referrer      text,          -- external referrer of the first visit
  first_seen    timestamptz,
  utm_source    text,
  utm_medium    text,
  utm_campaign  text,
  utm_term      text,
  utm_content   text,
  gclid         text
);

create index if not exists site_leads_phone_idx on public.site_leads (tenant_id, phone);
create index if not exists site_leads_created_idx on public.site_leads (created_at desc);

alter table public.site_leads enable row level security;
