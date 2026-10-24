import { deleteVideo, isAuthorized, patchVideo, unauthorized, videoPatch } from "@/lib/videos";

export const dynamic = "force-dynamic";

const UUID = /^[0-9a-f-]{36}$/i;
type Ctx = { params: Promise<{ id: string }> };

export async function PATCH(req: Request, { params }: Ctx) {
  if (!isAuthorized(req)) return unauthorized();
  const { id } = await params;
  const parsed = videoPatch.safeParse(await req.json().catch(() => null));
  if (!UUID.test(id) || !parsed.success)
    return Response.json({ error: "invalid" }, { status: 400 });
  const r = await patchVideo(id, parsed.data);
  return "row" in r
    ? Response.json({ video: r.row })
    : Response.json({ error: r.status === 404 ? "not_found" : "rejected" }, { status: r.status });
}

export async function DELETE(req: Request, { params }: Ctx) {
  if (!isAuthorized(req)) return unauthorized();
  const { id } = await params;
  if (!UUID.test(id)) return Response.json({ error: "invalid" }, { status: 400 });
  return (await deleteVideo(id))
    ? Response.json({ ok: true })
    : Response.json({ error: "not_found" }, { status: 404 });
}
