// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), sitemap()],

  fonts: [
    {
      name: "Atkinson Hyperlegible Next",
      cssVariable: "--font-hyperlegible",
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/AtkinsonHyperlegibleNext.woff2"],
            weight: "100 900",
            style: "normal",
          },
        ],
      },
    },
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
