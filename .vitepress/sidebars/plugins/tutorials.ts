import type { DefaultTheme } from "vitepress";

export const tutorialsSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Tutorials",
    items: [
      {
        text: "Introduction",
        link: "/plugins/tutorials/",
      },
    ],
  },
  {
    text: "Example Plugins",
    items: [
      {
        text: "Notebook",
        link: "/plugins/tutorials/notebook/",
      },
    ],
  },
];
