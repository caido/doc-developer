import type { DefaultTheme } from "vitepress";

export const conceptsSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Concepts",
    items: [
      {
        text: "Introduction",
        link: "/plugins/concepts/",
      },
    ],
  },
  {
    text: "Frontend",
    items: [
      {
        text: "UI Styling",
        link: "/plugins/concepts/ui",
      },
    ],
  },
  {
    text: "Backend",
    items: [
      {
        text: "Dealing with Binary",
        link: "/plugins/concepts/binary",
      },
      {
        text: "Plugins vs Workflows",
        link: "/plugins/concepts/workflow",
      },
    ],
  },
  {
    text: "Essentials",
    items: [
      {
        text: "Plugin Architecture",
        link: "/plugins/concepts/package",
      },
      {
        text: "Tooling",
        link: "/plugins/concepts/tooling",
      },
      {
        text: "Runtime",
        link: "/plugins/concepts/runtime",
      },
      {
        text: "Signing",
        link: "/plugins/concepts/signing",
      },
    ],
  },
  {
    text: "Modules",
    items: [
      {
        text: "Child Process",
        link: "/plugins/concepts/child_process",
      },
    ],
  },
];
