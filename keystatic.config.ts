import { collection, config, fields, singleton } from "@keystatic/core";

/**
 * Content panel at /keystatic. Locally it edits files on disk; in production
 * it commits to the GitHub repo (which redeploys the site). Editors need a
 * GitHub account with write access to Zakeri-labs/zakeri-labs-website.
 */
const PAGES = {
  home: "Home",
  services: "Services",
  products: "Products",
  "selected-work": "Selected Work",
  about: "About",
  "how-we-work": "How We Work",
  contact: "Contact",
  privacy: "Privacy Policy",
  terms: "Terms",
  deletion: "Data Deletion",
} as const;

const seoFields = (lang: string) =>
  fields.object(
    {
      title: fields.text({
        label: `SEO title (${lang})`,
        description: "Leave empty to keep the default.",
      }),
      description: fields.text({
        label: `Meta description (${lang})`,
        multiline: true,
        description: "Leave empty to keep the default.",
      }),
    },
    { label: lang },
  );

const articleLang = (lang: "en" | "ar") =>
  fields.object(
    {
      title: fields.text({ label: "Title / H1", validation: { length: { min: 1 } } }),
      description: fields.text({ label: "Summary (also the meta description)", multiline: true }),
      seoTitle: fields.text({ label: "SEO title", description: "Defaults to the title." }),
      imageAlt: fields.text({ label: "Featured image alt text" }),
      body: fields.markdoc.inline({
        label: "Body",
        options: {
          image: { directory: "public/images/articles", publicPath: "/images/articles/" },
        },
      }),
    },
    { label: lang === "en" ? "English" : "Arabic (العربية)" },
  );

export default config({
  storage:
    process.env.NODE_ENV === "production"
      ? { kind: "github", repo: "Zakeri-labs/zakeri-labs-website" }
      : { kind: "local" },
  ui: { brand: { name: "IDRAK SEO panel" } },
  collections: {
    articles: collection({
      label: "Articles",
      slugField: "slug",
      path: "content/articles/*",
      format: { data: "json" },
      columns: ["status", "date"],
      schema: {
        slug: fields.slug({
          name: { label: "Internal name", description: "Only used in this panel." },
          slug: {
            label: "Slug",
            description: "URL: /articles/<slug>. Changing it changes the URL.",
          },
        }),
        status: fields.select({
          label: "Status",
          description:
            "Drafts are reachable by URL for review but hidden from Google, the list and the sitemap.",
          options: [
            { label: "Draft", value: "draft" },
            { label: "Published", value: "published" },
          ],
          defaultValue: "draft",
        }),
        date: fields.date({ label: "Date", validation: { isRequired: true } }),
        image: fields.image({
          label: "Featured image (also the social preview)",
          directory: "public/images/articles",
          publicPath: "/images/articles/",
          validation: { isRequired: true },
        }),
        canonical: fields.url({
          label: "Canonical override",
          description: "Leave empty to use the article's own URL.",
        }),
        noindex: fields.checkbox({ label: "Force noindex", defaultValue: false }),
        related: fields.array(
          fields.object({
            href: fields.text({ label: "Internal path, e.g. /services" }),
            en: fields.text({ label: "Label (English)" }),
            ar: fields.text({ label: "Label (Arabic)" }),
          }),
          { label: "Related links", itemLabel: (p) => p.fields.href.value || "Link" },
        ),
        en: articleLang("en"),
        ar: articleLang("ar"),
      },
    }),
  },
  singletons: {
    seo: singleton({
      label: "Page SEO",
      path: "content/seo",
      format: { data: "json" },
      schema: {
        pages: fields.object(
          Object.fromEntries(
            Object.entries(PAGES).map(([key, label]) => [
              key,
              fields.object(
                {
                  en: seoFields("English"),
                  ar: seoFields("Arabic"),
                  noindex: fields.checkbox({ label: "noindex", defaultValue: false }),
                },
                { label },
              ),
            ]),
          ),
          { label: "Pages" },
        ),
      },
    }),
    redirects: singleton({
      label: "Redirects",
      path: "content/redirects",
      format: { data: "json" },
      schema: {
        items: fields.array(
          fields.object({
            from: fields.text({
              label: "From path",
              description: "e.g. /old-page",
              validation: {
                pattern: {
                  regex: /^\/[\w\-/.]*$/,
                  message: "Starts with / ; letters, numbers, - . / only",
                },
              },
            }),
            to: fields.text({
              label: "To path or URL",
              description: "e.g. /services or https://…",
              validation: {
                pattern: {
                  regex: /^(\/|https?:\/\/)\S*$/,
                  message: "A path starting with / or a full URL",
                },
              },
            }),
            permanent: fields.checkbox({ label: "Permanent (301/308)", defaultValue: true }),
          }),
          { label: "Redirects", itemLabel: (p) => `${p.fields.from.value} → ${p.fields.to.value}` },
        ),
      },
    }),
  },
});
