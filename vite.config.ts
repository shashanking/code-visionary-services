import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { createRequire } from "module";
import { createClient } from "@sanity/client";

const require = createRequire(import.meta.url);
const VitePrerender = require("vite-plugin-prerender");
const { PuppeteerRenderer } = VitePrerender;

const staticRoutes = [
  "/",
  "/about",
  "/services",
  "/portfolio",
  "/reviews",
  "/blogs",
  "/contact",
  "/privacy-policy",
  "/terms-and-conditions",
];

async function getDynamicRoutes(): Promise<string[]> {
  const projectId = process.env.VITE_SANITY_PROJECT_ID;
  const dataset = process.env.VITE_SANITY_DATASET || "production";

  if (!projectId) {
    console.warn(
      "[prerender] VITE_SANITY_PROJECT_ID not set — skipping dynamic routes"
    );
    return [];
  }

  try {
    const client = createClient({
      projectId,
      dataset,
      apiVersion: "2024-01-01",
      useCdn: false,
    });

    const [portfolios, blogs] = await Promise.all([
      client.fetch<{ slug: string }[]>(
        `*[_type == "portfolioItem"]{ "slug": slug.current }`
      ),
      client.fetch<{ slug: string }[]>(
        `*[_type == "blogItem"]{ "slug": slug.current }`
      ),
    ]);

    const portfolioRoutes = portfolios
      .filter((p) => p.slug)
      .map((p) => `/portfolio/${p.slug}`);

    const blogRoutes = blogs
      .filter((b) => b.slug)
      .map((b) => `/blogs/${b.slug}`);

    return [...portfolioRoutes, ...blogRoutes];
  } catch (err) {
    console.warn("[prerender] Could not fetch dynamic routes from Sanity:", err);
    return [];
  }
}

// https://vite.dev/config/
export default defineConfig(async () => {
  const dynamicRoutes = await getDynamicRoutes();
  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  return {
    plugins: [
      react(),
      tailwindcss(),
      VitePrerender({
        staticDir: path.join(__dirname, "dist"),
        routes: allRoutes,
        renderer: new PuppeteerRenderer({
          renderAfterTime: 5000,
        }),
      }),
    ],
    build: {
      outDir: "dist",
    },
  };
});
