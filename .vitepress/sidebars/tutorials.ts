import type { DefaultTheme } from "vitepress";

export const tutorialsSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Tutorials",
    items: [
      {
        text: "Introduction",
        link: "/tutorials/",
      },
    ],
  },
  {
    text: "Example Plugins",
    items: [
      {
        text: "Notebook",
        link: "/tutorials/notebook/",
      },
    ],
  },
];
