import type { DefaultTheme } from "vitepress";

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
      {
        text: "API",
        link: "/reference/cloud/api.md",
      },
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
