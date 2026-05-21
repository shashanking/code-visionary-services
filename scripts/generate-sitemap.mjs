import { createClient } from "@sanity/client";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const SITE_URL = "https://codevisionaryservices.com";

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID,
  dataset: process.env.VITE_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

const staticRoutes = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/services", changefreq: "weekly", priority: "0.9" },
  { path: "/portfolio", changefreq: "weekly", priority: "0.9" },
  { path: "/reviews", changefreq: "monthly", priority: "0.7" },
  { path: "/blogs", changefreq: "daily", priority: "0.9" },
  { path: "/contact", changefreq: "monthly", priority: "0.6" },
  { path: "/privacy-policy", changefreq: "yearly", priority: "0.3" },
  { path: "/terms-and-conditions", changefreq: "yearly", priority: "0.3" },
];

async function fetchPortfolioSlugs() {
  try {
    const data = await client.fetch(
      `*[_type == "portfolioItem"] { "slug": slug.current, date }`
    );
    return data;
  } catch (err) {
    console.warn("Could not fetch portfolio slugs:", err.message);
    return [];
  }
}

async function fetchBlogSlugs() {
  try {
    const data = await client.fetch(
      `*[_type == "blogItem"] { "slug": slug.current, date }`
    );
    return data;
  } catch (err) {
    console.warn("Could not fetch blog slugs:", err.message);
    return [];
  }
}

function formatDate(dateStr) {
  if (!dateStr) return new Date().toISOString().split("T")[0];
  return new Date(dateStr).toISOString().split("T")[0];
}

function buildUrl(path, changefreq, priority, lastmod) {
  return `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

async function generateSitemap() {
  const today = new Date().toISOString().split("T")[0];

  const [portfolioItems, blogItems] = await Promise.all([
    fetchPortfolioSlugs(),
    fetchBlogSlugs(),
  ]);

  const staticEntries = staticRoutes.map(({ path, changefreq, priority }) =>
    buildUrl(path, changefreq, priority, today)
  );

  const portfolioEntries = portfolioItems
    .filter((item) => item.slug)
    .map((item) =>
      buildUrl(
        `/portfolio/${item.slug}`,
        "monthly",
        "0.8",
        formatDate(item.date)
      )
    );

  const blogEntries = blogItems
    .filter((item) => item.slug)
    .map((item) =>
      buildUrl(`/blogs/${item.slug}`, "weekly", "0.8", formatDate(item.date))
    );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${[...staticEntries, ...portfolioEntries, ...blogEntries].join("\n\n")}

</urlset>`;

  const outputPath = join(__dirname, "../public/sitemap.xml");
  writeFileSync(outputPath, xml, "utf-8");

  console.log(
    `Sitemap generated: ${staticEntries.length} static + ${portfolioEntries.length} portfolio + ${blogEntries.length} blog routes`
  );
}

generateSitemap().catch((err) => {
  console.error("Sitemap generation failed:", err);
  process.exit(1);
});
