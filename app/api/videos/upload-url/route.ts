import { z } from "zod";

import { isAuthorized, signUpload, UPLOAD_TYPES, unauthorized } from "@/lib/videos";

export const dynamic = "force-dynamic";

const body = z.object({ filename: z.string().min(1).max(200), content_type: z.string() });

/** Returns a one-time signed URL; PUT the file there (multipart field "" = file), then POST /api/videos. */
export async function POST(req: Request) {
  if (!isAuthorized(req)) return unauthorized();
  const parsed = body.safeParse(await req.json().catch(() => null));
  if (!parsed.success || !UPLOAD_TYPES[parsed.data.content_type]) {
    return Response.json({ error: "unsupported content_type" }, { status: 400 });
  }
  const signed = await signUpload(parsed.data.content_type, parsed.data.filename);
  return signed ? Response.json(signed) : Response.json({ error: "storage" }, { status: 502 });
}
