"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { VideoRow } from "@/lib/videos";

const CATEGORY_LABELS = {
  promo: "Promo",
  solution: "Solution",
  project_demo: "Project demo",
} as const;

type Form = {
  title_en: string;
  title_ar: string;
  description_en: string;
  description_ar: string;
  category: VideoRow["category"];
  solution_slug: string;
  external_url: string;
  published: boolean;
  sort_order: number;
};
const EMPTY: Form = {
  title_en: "",
  title_ar: "",
  description_en: "",
  description_ar: "",
  category: "promo",
  solution_slug: "",
  external_url: "",
  published: false,
  sort_order: 0,
};

const api = (url: string, method: string, body?: unknown) =>
  fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: body === undefined ? undefined : JSON.stringify(body),
  });

/** Signed upload straight to Supabase Storage (videos are too big for a Vercel function). */
async function upload(file: File, onProgress: (pct: number) => void): Promise<string> {
  const res = await api("/api/videos/upload-url", "POST", {
    filename: file.name,
    content_type: file.type,
  });
  if (!res.ok) throw new Error(`Upload not allowed for ${file.type || "this file type"}`);
  const { path, upload_url, apikey } = (await res.json()) as {
    path: string;
    upload_url: string;
    apikey: string | null;
  };
  await new Promise<void>((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("PUT", upload_url);
    if (apikey) {
      xhr.setRequestHeader("apikey", apikey);
      xhr.setRequestHeader("Authorization", `Bearer ${apikey}`);
    }
    xhr.upload.onprogress = (e) =>
      e.lengthComputable && onProgress(Math.round((e.loaded / e.total) * 100));
    xhr.onload = () =>
      xhr.status < 300 ? resolve() : reject(new Error(`Upload failed (${xhr.status})`));
    xhr.onerror = () => reject(new Error("Upload failed (network)"));
    const fd = new FormData();
    fd.append("cacheControl", "3600");
    fd.append("", file);
    xhr.send(fd);
  });
  return path;
}

const field = "mt-1 block w-full rounded-md border border-border bg-background px-3 py-2 text-sm";

export function AdminVideos({ authed, initial }: { authed: boolean; initial: VideoRow[] }) {
  const [ok, setOk] = useState(authed);
  const [videos, setVideos] = useState(initial);
  const [password, setPassword] = useState("");
  const [form, setForm] = useState<Form>(EMPTY);
  const [editing, setEditing] = useState<VideoRow | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [poster, setPoster] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState(0);
  const [msg, setMsg] = useState("");

  const reload = async () => {
    const r = await fetch("/api/videos");
    if (r.status === 401) return setOk(false);
    setVideos(((await r.json()) as { videos: VideoRow[] }).videos);
  };

  async function login(e: FormEvent) {
    e.preventDefault();
    setMsg("");
    const r = await api("/api/videos/login", "POST", { password });
    if (!r.ok) return setMsg("Wrong password.");
    setPassword("");
    setOk(true);
    await reload();
  }

  function edit(v: VideoRow | null) {
    setEditing(v);
    setFile(null);
    setPoster(null);
    setMsg("");
    setForm(
      v
        ? {
            title_en: v.title_en,
            title_ar: v.title_ar ?? "",
            description_en: v.description_en ?? "",
            description_ar: v.description_ar ?? "",
            category: v.category,
            solution_slug: v.solution_slug ?? "",
            external_url: v.external_url ?? "",
            published: v.published,
            sort_order: v.sort_order,
          }
        : EMPTY,
    );
  }

  async function save(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMsg("");
    try {
      const body: Record<string, unknown> = {
        ...form,
        external_url: form.external_url.trim() || null,
        solution_slug: form.solution_slug.trim() || null,
      };
      if (file) body.storage_path = await upload(file, setProgress);
      if (poster) body.poster_path = await upload(poster, () => {});
      const r = editing
        ? await api(`/api/videos/${editing.id}`, "PATCH", body)
        : await api("/api/videos", "POST", body);
      if (!r.ok)
        throw new Error(
          r.status === 400
            ? "Check the fields: a title and a video file or URL are required."
            : "Save failed.",
        );
      edit(null);
      setProgress(0);
      setMsg("Saved.");
      await reload();
    } catch (err) {
      setMsg(err instanceof Error ? err.message : "Save failed.");
    } finally {
      setBusy(false);
    }
  }

  async function patch(v: VideoRow, change: Partial<VideoRow>) {
    const r = await api(`/api/videos/${v.id}`, "PATCH", change);
    if (!r.ok) setMsg(`Could not update "${v.title_en}". Try again.`);
    await reload();
  }

  async function remove(v: VideoRow) {
    if (!confirm(`Delete "${v.title_en}" and its files? This cannot be undone.`)) return;
    const r = await api(`/api/videos/${v.id}`, "DELETE");
    if (!r.ok) setMsg(`Could not delete "${v.title_en}". Try again.`);
    await reload();
  }

  if (!ok) {
    return (
      <form dir="ltr" onSubmit={login} className="card-surface mx-auto max-w-sm space-y-4 p-6">
        <h1 className="text-xl font-bold">Videos admin</h1>
        <label className="block text-sm font-medium">
          Password
          <Input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1"
          />
        </label>
        {msg && (
          <p role="alert" className="text-sm text-red-400">
            {msg}
          </p>
        )}
        <Button type="submit" className="w-full">
          Sign in
        </Button>
      </form>
    );
  }

  return (
    <div dir="ltr" className="space-y-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Videos</h1>
        <Button
          variant="outline"
          size="sm"
          onClick={async () => {
            await api("/api/videos/login", "DELETE");
            setOk(false);
          }}
        >
          Sign out
        </Button>
      </div>

      <form onSubmit={save} className="card-surface space-y-4 p-6">
        <h2 className="text-lg font-semibold">{editing ? "Edit video" : "Add a video"}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-medium">
            Title (English) *
            <Input
              required
              maxLength={200}
              value={form.title_en}
              onChange={(e) => setForm({ ...form, title_en: e.target.value })}
              className="mt-1"
            />
          </label>
          <label className="text-sm font-medium" dir="rtl">
            العنوان (عربي)
            <Input
              maxLength={200}
              value={form.title_ar}
              onChange={(e) => setForm({ ...form, title_ar: e.target.value })}
              className="mt-1"
            />
          </label>
          <label className="text-sm font-medium">
            Description (English)
            <Textarea
              maxLength={1000}
              value={form.description_en}
              onChange={(e) => setForm({ ...form, description_en: e.target.value })}
              className="mt-1"
            />
          </label>
          <label className="text-sm font-medium" dir="rtl">
            الوصف (عربي)
            <Textarea
              maxLength={1000}
              value={form.description_ar}
              onChange={(e) => setForm({ ...form, description_ar: e.target.value })}
              className="mt-1"
            />
          </label>
          <label className="text-sm font-medium">
            Category
            <select
              className={field}
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value as Form["category"] })}
            >
              {Object.entries(CATEGORY_LABELS).map(([k, l]) => (
                <option key={k} value={k}>
                  {l}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm font-medium">
            Linked solution (slug, optional)
            <Input
              value={form.solution_slug}
              pattern="[a-z0-9\-]{1,60}"
              placeholder="e.g. ai-receptionist"
              onChange={(e) => setForm({ ...form, solution_slug: e.target.value })}
              className="mt-1"
            />
          </label>
          <label className="text-sm font-medium">
            Video file (mp4, webm, mov){editing && " - leave empty to keep the current one"}
            <input
              type="file"
              accept="video/mp4,video/webm,video/quicktime"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
              className={field}
            />
          </label>
          <label className="text-sm font-medium">
            Or paste a YouTube / https link
            <Input
              type="url"
              placeholder="https://youtu.be/..."
              value={form.external_url}
              onChange={(e) => setForm({ ...form, external_url: e.target.value })}
              className="mt-1"
            />
          </label>
          <label className="text-sm font-medium">
            Poster image (jpg, png, webp)
            <input
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={(e) => setPoster(e.target.files?.[0] ?? null)}
              className={field}
            />
          </label>
          <label className="text-sm font-medium">
            Sort order (lower first)
            <Input
              type="number"
              value={form.sort_order}
              onChange={(e) => setForm({ ...form, sort_order: Number(e.target.value) || 0 })}
              className="mt-1"
            />
          </label>
        </div>
        <label className="flex items-center gap-2 text-sm font-medium">
          <input
            type="checkbox"
            checked={form.published}
            onChange={(e) => setForm({ ...form, published: e.target.checked })}
          />
          Published (visible on /videos)
        </label>
        {busy && file && (
          <div
            role="progressbar"
            aria-valuenow={progress}
            className="h-2 overflow-hidden rounded bg-secondary"
          >
            <div
              className="h-full bg-primary transition-[width]"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
        <p className="text-xs text-muted-foreground">
          A video needs either an uploaded file or a link.
        </p>
        {msg && (
          <p role="status" className="text-sm text-muted-foreground">
            {msg}
          </p>
        )}
        <div className="flex gap-3">
          <Button type="submit" disabled={busy}>
            {busy ? "Saving..." : editing ? "Save changes" : "Add video"}
          </Button>
          {editing && (
            <Button type="button" variant="outline" onClick={() => edit(null)}>
              Cancel
            </Button>
          )}
        </div>
      </form>

      <section>
        <h2 className="mb-4 text-lg font-semibold">All videos ({videos.length})</h2>
        {videos.length === 0 ? (
          <p className="text-sm text-muted-foreground">No videos yet. Add the first one above.</p>
        ) : (
          <ul className="space-y-3">
            {videos.map((v) => (
              <li key={v.id} className="card-surface flex flex-wrap items-center gap-3 p-4">
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold">{v.title_en}</p>
                  <p className="text-xs text-muted-foreground">
                    {CATEGORY_LABELS[v.category]}
                    {v.solution_slug && ` / ${v.solution_slug}`} /{" "}
                    {v.storage_path ? "uploaded file" : "link"}
                  </p>
                </div>
                <label className="flex items-center gap-1 text-xs">
                  Order
                  <input
                    type="number"
                    defaultValue={v.sort_order}
                    onBlur={(e) =>
                      Number(e.target.value) !== v.sort_order &&
                      patch(v, { sort_order: Number(e.target.value) || 0 })
                    }
                    className="w-16 rounded border border-border bg-background px-2 py-1"
                  />
                </label>
                <label className="flex items-center gap-1 text-xs">
                  <input
                    type="checkbox"
                    checked={v.published}
                    onChange={(e) => patch(v, { published: e.target.checked })}
                  />
                  Published
                </label>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => {
                    edit(v);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  aria-label={`Delete ${v.title_en}`}
                  className="border-red-400/40 text-red-400"
                  onClick={() => remove(v)}
                >
                  Delete
                </Button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
