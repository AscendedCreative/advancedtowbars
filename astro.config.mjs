import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// 👉 If using GitHub Pages, set your repo name as the `base` path
const site = "https://your-username.github.io/your-repo-name"; // ✅ replace this with your actual repo URL

export default defineConfig({
  site,
  base: "/your-repo-name", // ✅ replace with your GitHub Pages repo name
  integrations: [
    tailwind(),
    sitemap(),
  ],
  output: "static",
  trailingSlash: "always", // optional: better for static hosting
});
