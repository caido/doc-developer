import { defineConfig } from "vitepress";
import llmstxt from "vitepress-plugin-llms";

import {
  conceptsSidebar,
  guidesSidebar,
  referenceSidebar,
  tutorialsSidebar,
} from "./sidebars";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Caido",
  titleTemplate: "Developer",
  description: "Official Caido Developer Documentation",

  srcDir: "src",
  appearance: "force-dark",
  sitemap: {
    hostname: "https://developer.caido.io",
  },

  vite: {
    plugins: [llmstxt()],
  },

  head: [
    ["link", { rel: "icon", href: "/favicon.png" }],
    [
      "script",
      {
        "data-api": "/stats/event",
        src: "/stats/script.js",
        defer: "",
        "data-domain": "developer.caido.io",
      },
    ],
  ],
  ignoreDeadLinks: "localhostLinks",

  themeConfig: {
    logo: {
      src: "/logo.png",
      "no-shadow": true,
    },

    search: {
      provider: "local",
    },

    nav: [
      { text: "Guides", link: "/guides/" },
      { text: "Tutorials", link: "/tutorials/" },
      { text: "Reference", link: "/reference/" },
      { text: "Concepts", link: "/concepts/" },
      { text: "Policy", link: "/policy.md" },
    ],

    sidebar: {
      "/reference/": referenceSidebar,
      "/guides/": guidesSidebar,
      "/concepts/": conceptsSidebar,
      "/tutorials/": tutorialsSidebar,
    },

    outline: {
      level: [2, 5],
    },

    socialLinks: [
      { icon: "discord", link: "https://links.caido.io/discord" },
      { icon: "twitter", link: "https://twitter.com/caidoio" },
      { icon: "github", link: "https://github.com/caido/caido" },
    ],
  },
});
