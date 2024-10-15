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
        text: "manifest.json",
        link: "/reference/manifest.md",
      },
    ],
  },
];
