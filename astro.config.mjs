import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import vue from "@astrojs/vue";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), vue()],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});
