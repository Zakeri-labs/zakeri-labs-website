import { getPublishedArticles } from "@/lib/articles";
import { DETAIL_PAGES, type DetailKind } from "@/lib/content/detail";
import { PORTFOLIO } from "@/lib/content/portfolio";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

/** llms.txt (https://llmstxt.org): a plain map of the site for AI assistants and AI search (GEO). */
export async function GET() {
  const section = (kind: DetailKind, title: string) =>
    [
      `## ${title}`,
      ...DETAIL_PAGES[kind].map(
        (e) => `- [${e.en.name}](${SITE.url}/${kind}/${e.slug}): ${e.en.summary}`,
      ),
    ].join("\n");

  const articles = await getPublishedArticles();
  const body = [
    `# ${SITE.name}`,
    `> ${SITE.name} (${SITE.legalName}, CR ${SITE.crNumber}) is an Oman company based in Al Khoudh, Al Seeb, Muscat, that builds custom software, AI business automation, WhatsApp AI agents, AI video, content, websites and SEO/GEO for businesses in Oman and the GCC. Founder: ${SITE.founder}. Every page is available in English and in Arabic under ${SITE.url}/ar.`,
    `Office: ${SITE.office.address.en} (map: ${SITE.office.mapUrl}). Hours: ${SITE.office.hours.en}.`,
    `Contact: ${SITE.phone} (WhatsApp), ${SITE.email}, ${SITE.url}/contact. Monthly content packages (social media videos): ${PORTFOLIO.en.packages.items.map((x) => `${x.name} ${x.price} OMR`).join(", ")} a month, details at ${SITE.url}/portfolio#packages. Other work is priced by scope.`,
    section("services", "Services"),
    section("products", "Products"),
    section("industries", "Industries"),
    section("work", "Case studies"),
    articles.length
      ? [
          "## Articles",
          ...articles.map((a) => `- [${a.en.title}](${SITE.url}/articles/${a.slug})`),
        ].join("\n")
      : "",
    [
      "## Company",
      `- [About IDRAK](${SITE.url}/about)`,
      `- [How we work](${SITE.url}/how-we-work)`,
      `- [Work and portfolio](${SITE.url}/work)`,
      `- [Video portfolio: reels, product films and pitch videos](${SITE.url}/portfolio)`,
    ].join("\n"),
  ]
    .filter(Boolean)
    .join("\n\n");

  return new Response(body + "\n", { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
