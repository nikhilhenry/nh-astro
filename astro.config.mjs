import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { astroImageTools } from "astro-imagetools";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://nikhilhenry.vercel.app",
  integrations: [react(), svelte(), tailwind(), astroImageTools, sitemap()],
});
