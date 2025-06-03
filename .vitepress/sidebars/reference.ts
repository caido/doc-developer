import type { DefaultTheme } from "vitepress";
import { useSidebar } from "vitepress-openapi";

import spec from "../spec.json";

export const referenceSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Reference",
    items: [
      {
        text: "Introduction",
        link: "/reference/",
      },
    ],
  },
  {
    text: "SDKs",
    items: [
      {
        text: "Backend",
        link: "/reference/sdks/backend/",
      },
      {
        text: "Frontend",
        link: "/reference/sdks/frontend/",
      },
      {
        text: "Workflow",
        link: "/reference/sdks/workflow/",
      },
    ],
  },
  {
    text: "Runtime",
    items: [
      {
        text: "Backend Modules",
        link: "/reference/modules/",
      },
    ],
  },
  {
    text: "Cloud",
    items: [
      ...useSidebar({ spec })
        .itemsByPaths({
          collapsible: true,
          linkPrefix: "/reference/cloud/",
        })
        .map((i) => ({ ...i, collapsed: true, text: "API" })),
    ],
  },
  {
    text: "Files",
    items: [
      {
        text: "caido.config.ts",
        link: "/reference/config.md",
      },
      {
        text: "plugin_packages.json",
        link: "/reference/plugin_packages.md",
      },
      {
        text: "manifest.json",
        link: "/reference/manifest.md",
      },
    ],
  },
];
