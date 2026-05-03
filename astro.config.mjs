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
      name: "PP Mori",
      cssVariable: "--font-pp-mori",
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/PPMori-Regular.woff2"],
            weight: "400",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/PPMori-Italic.woff2"],
            weight: "400",
            style: "italic",
          },
          {
            src: ["./src/assets/fonts/PPMori-Semibold.woff2"],
            weight: "600",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/PPMori-SemiboldItalic.woff2"],
            weight: "600",
            style: "italic",
          },
          {
            src: ["./src/assets/fonts/PPMori-Black.woff2"],
            weight: "900",
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/PPMori-BlackItalic.woff2"],
            weight: "900",
            style: "italic",
          },
        ],
      },
    },
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
