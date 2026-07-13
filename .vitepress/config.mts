import { defineConfig } from "vitepress";
import llmstxt from "vitepress-plugin-llms";

import type { DefaultTheme } from "vitepress";

import {
  clientSdkNavbar,
  pluginsNavbar,
  quickstartNavbar,
} from "./navbars";
import { clientSdkSidebars, pluginsSidebars } from "./sidebars";

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
      {
        component: "NavItem",
        props: {
          text: "Get Started",
          link: "/quickstart/",
          activeMatch: "^/quickstart(/|$)",
          items: quickstartNavbar,
        },
      },
      {
        component: "NavItem",
        props: {
          text: "Plugins",
          link: "/plugins/guides/",
          activeMatch: "^/plugins(/.*)?$",
          items: pluginsNavbar,
        },
      },
      {
        component: "NavItem",
        props: {
          text: "Client SDK",
          link: "/client-sdk/guides/",
          activeMatch: "^/client-sdk(/|$)",
          items: clientSdkNavbar,
        },
      },
      {
        component: "NavItem",
        props: {
          text: "Policy",
          link: "/policy.md",
          activeMatch: "^/policy",
        },
      },
    ] satisfies DefaultTheme.NavItem[],

    sidebar: {
      "/plugins/guides/": pluginsSidebars.guidesSidebar,
      "/plugins/tutorials/": pluginsSidebars.tutorialsSidebar,
      "/plugins/reference/": pluginsSidebars.referenceSidebar,
      "/plugins/concepts/": pluginsSidebars.conceptsSidebar,
      "/client-sdk/guides/": clientSdkSidebars.guidesSidebar,
      "/client-sdk/tutorials/": clientSdkSidebars.tutorialsSidebar,
      "/client-sdk/reference/": clientSdkSidebars.referenceSidebar,
      "/client-sdk/concepts/": clientSdkSidebars.conceptsSidebar,
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
