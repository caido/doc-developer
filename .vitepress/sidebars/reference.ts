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
  {
    text: "Types",
    items: [
      {
        text: "Workflow Data Types",
        link: "/reference/workflow_types.md",
      },
    ],
  },
];
