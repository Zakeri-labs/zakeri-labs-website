// Run: node scripts/check-sigv4.mjs   (Node 23+ strips the TypeScript types)
// The presigned-GET example from the AWS Signature V4 documentation; fails if lib/sigv4.ts drifts.
import assert from "node:assert/strict";

import { presignUrl } from "../lib/sigv4.ts";

const url = presignUrl({
  method: "GET",
  url: "https://examplebucket.s3.amazonaws.com/test.txt",
  accessKeyId: "AKIAIOSFODNN7EXAMPLE",
  secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
  region: "us-east-1",
  expires: 86400,
  now: new Date("2013-05-24T00:00:00Z"),
});
assert.equal(
  new URL(url).searchParams.get("X-Amz-Signature"),
  "aeeed9bbccd4d02ee5c0109b86d86835f995330da4c265957d157751f604d404",
);
console.log("sigv4 ok");
