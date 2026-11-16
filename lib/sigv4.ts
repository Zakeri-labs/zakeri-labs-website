import { createHash, createHmac } from "node:crypto";

/**
 * AWS Signature V4 query-string presigning (what S3 and Cloudflare R2 accept), without the AWS SDK.
 * Headers listed in `headers` are signed, so the caller must send them unchanged.
 * Check: `node scripts/check-sigv4.mjs` (AWS's documented example).
 */
const hmac = (key: string | Buffer, data: string) =>
  createHmac("sha256", key).update(data).digest();
const sha = (data: string) => createHash("sha256").update(data).digest("hex");
const enc = (s: string) =>
  encodeURIComponent(s).replace(
    /[!'()*]/g,
    (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`,
  );

export function presignUrl(o: {
  method: "GET" | "PUT" | "DELETE";
  /** Full object URL: https://<host>/<bucket>/<key> (path-style) or https://<bucket-host>/<key>. */
  url: string;
  accessKeyId: string;
  secretAccessKey: string;
  region: string;
  expires: number;
  headers?: Record<string, string>;
  now?: Date;
}): string {
  const u = new URL(o.url);
  const amzDate = (o.now ?? new Date()).toISOString().replace(/[-:]|\.\d{3}/g, "");
  const scope = `${amzDate.slice(0, 8)}/${o.region}/s3/aws4_request`;
  const headers = Object.entries({ ...o.headers, host: u.host })
    .map(([k, v]) => [k.toLowerCase(), v.trim()] as const)
    .sort(([a], [b]) => (a < b ? -1 : 1));
  const signed = headers.map(([k]) => k).join(";");
  const query = [
    ["X-Amz-Algorithm", "AWS4-HMAC-SHA256"],
    ["X-Amz-Credential", `${o.accessKeyId}/${scope}`],
    ["X-Amz-Date", amzDate],
    ["X-Amz-Expires", String(o.expires)],
    ["X-Amz-SignedHeaders", signed],
  ]
    .map(([k, v]) => `${enc(k)}=${enc(v)}`)
    .join("&");
  const path = u.pathname
    .split("/")
    .map((p) => enc(decodeURIComponent(p)))
    .join("/");
  const canonical = [
    o.method,
    path,
    query,
    headers.map(([k, v]) => `${k}:${v}\n`).join(""),
    signed,
    "UNSIGNED-PAYLOAD",
  ].join("\n");
  const key = ["s3", "aws4_request"].reduce(
    (k, part) => hmac(k, part),
    hmac(hmac(`AWS4${o.secretAccessKey}`, amzDate.slice(0, 8)), o.region),
  );
  const signature = hmac(
    key,
    ["AWS4-HMAC-SHA256", amzDate, scope, sha(canonical)].join("\n"),
  ).toString("hex");
  return `${u.origin}${path}?${query}&X-Amz-Signature=${signature}`;
}
