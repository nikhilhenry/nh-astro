import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import { astroImageTools } from "astro-imagetools";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://nikhilhenry.vercel.app",
  integrations: [
    svelte(),
    tailwind(),
    astroImageTools,
    sitemap(),
    mdx(),
    preact({ compat: true }),
  ],
});
