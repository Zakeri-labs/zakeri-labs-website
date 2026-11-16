import { z } from "zod";

import { isAuthorized, signUpload, UPLOAD_TYPES, unauthorized } from "@/lib/videos";

export const dynamic = "force-dynamic";

const px = z.number().int().min(16).max(8192).optional();
const body = z.object({ content_type: z.string(), width: px, height: px });

/**
 * Returns a presigned Cloudflare R2 URL (valid 15 minutes). PUT the raw file there with the returned
 * `headers`, then save `path` (its public media.zakeri.dev URL) through POST or PATCH /api/videos.
 */
export async function POST(req: Request) {
  if (!isAuthorized(req)) return unauthorized();
  const parsed = body.safeParse(await req.json().catch(() => null));
  if (!parsed.success || !UPLOAD_TYPES[parsed.data.content_type]) {
    return Response.json({ error: "unsupported content_type" }, { status: 400 });
  }
  const { content_type, width, height } = parsed.data;
  const signed = signUpload(content_type, width, height);
  return signed ? Response.json(signed) : Response.json({ error: "storage" }, { status: 502 });
}
