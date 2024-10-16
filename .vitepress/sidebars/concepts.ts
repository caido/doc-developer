import type { DefaultTheme } from "vitepress";

export const conceptsSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Introduction",
    items: [
      {
        text: "Directory",
        link: "/concepts/",
      },
    ],
  },
  {
    text: "Essentials",
    items: [
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
