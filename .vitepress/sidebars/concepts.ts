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
    text: "Frontend",
    items: [
      {
        text: "UI Styling",
        link: "/concepts/frontend/ui",
      },
    ],
  },
  {
    text: "Backend",
    items: [
      {
        text: "Dealing with Binary",
        link: "/concepts/backend/binary",
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
