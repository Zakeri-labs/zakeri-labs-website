/** Key visuals generated for IDRAK (gpt-image-2 / Gemini), all on the site navy. */
import { IMAGE_OVERRIDES } from "@/lib/content/overrides";

import agent from "@/assets/images/agent.webp";
import aiVideo from "@/assets/images/ai-video.webp";
import approach from "@/assets/images/approach.webp";
import automation from "@/assets/images/automation.webp";
import clinic from "@/assets/images/clinic.webp";
import construction from "@/assets/images/construction.webp";
import content from "@/assets/images/content.webp";
import founder from "@/assets/images/founder.webp";
import hero from "@/assets/images/hero.webp";
import oman from "@/assets/images/oman.webp";
import products from "@/assets/images/products.webp";
import web from "@/assets/images/web.webp";
import whatsapp from "@/assets/images/whatsapp.webp";

const BUILT_IN = {
  agent,
  aiVideo,
  approach,
  automation,
  clinic,
  construction,
  content,
  founder,
  hero,
  oman,
  products,
  web,
  whatsapp,
};

/** The images as built into the site, before any replacement from the admin panel. */
export const DEFAULT_IMG = BUILT_IN;

// A replacement uploaded in the admin panel (admin.omanai.tech → صفحه‌های سایت → عکس‌های سایت) takes the place of
// the built-in file everywhere it is used; it has no blur placeholder, so it is passed as a plain src with its size.
// some places ask for a blur placeholder: one navy pixel stands in for it
const NAVY = "data:image/gif;base64,R0lGODlhAQABAIAAAAoNHQAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";

export const IMG = Object.fromEntries(
  Object.entries(BUILT_IN).map(([k, v]) => [
    k,
    IMAGE_OVERRIDES[k] ? { ...IMAGE_OVERRIDES[k], blurDataURL: NAVY } : v,
  ]),
) as unknown as typeof BUILT_IN;
