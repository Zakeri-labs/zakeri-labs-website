import { createVideo, isAuthorized, listVideos, unauthorized, videoCreate } from "@/lib/videos";

export const dynamic = "force-dynamic";

/** GET: every video incl. unpublished. POST: create one. Auth: x-api-key or admin cookie. */
export async function GET(req: Request) {
  if (!isAuthorized(req)) return unauthorized();
  return Response.json({ videos: await listVideos(true) });
}

export async function POST(req: Request) {
  if (!isAuthorized(req)) return unauthorized();
  const parsed = videoCreate.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return Response.json({ error: "invalid", issues: parsed.error.flatten() }, { status: 400 });
  }
  const video = await createVideo(parsed.data);
  return video
    ? Response.json({ video }, { status: 201 })
    : Response.json({ error: "db" }, { status: 502 });
}
