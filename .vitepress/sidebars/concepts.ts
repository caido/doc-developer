import type { DefaultTheme } from "vitepress";

export const conceptsSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Concepts",
    items: [
      {
        text: "Introduction",
        link: "/concepts/",
      },
    ],
  },
  {
    text: "Essentials",
    items: [
      {
        text: "Plugin Architecture",
        link: "/concepts/essentials/package",
      },
      {
        text: "Tooling",
        link: "/concepts/essentials/tooling",
      },
      {
        text: "Runtime",
        link: "/concepts/essentials/runtime",
      },
    ],
  },
  {
    text: "Modules",
    items: [
      {
        text: "Child Process",
        link: "/concepts/modules/child_process",
      },
    ],
  },
];
