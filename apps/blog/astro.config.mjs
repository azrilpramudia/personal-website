import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://blog.meowhx.my.id",
  integrations: [mdx()],
  vite: { plugins: [tailwindcss()] },
});
