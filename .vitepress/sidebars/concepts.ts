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
        link: "/concepts/ui",
      },
    ],
  },
  {
    text: "Backend",
    items: [
      {
        text: "Dealing with Binary",
        link: "/concepts/binary",
      },
      {
        text: "Plugins vs Workflows",
        link: "/concepts/workflow",
      },
    ],
  },
  {
    text: "Essentials",
    items: [
      {
        text: "Plugin Architecture",
        link: "/concepts/package",
      },
      {
        text: "Tooling",
        link: "/concepts/tooling",
      },
      {
        text: "Runtime",
        link: "/concepts/runtime",
      },
      {
        text: "Signing",
        link: "/concepts/signing",
      },
    ],
  },
  {
    text: "Modules",
    items: [
      {
        text: "Child Process",
        link: "/concepts/child_process",
      },
    ],
  },
];
