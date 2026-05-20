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
  {
    text: "Client SDK",
    items: [
      {
        text: "Using the Scanner API",
        link: "/tutorials/client/scanner",
      },
      {
        text: "Using the Autorize API",
        link: "/tutorials/client/autorize",
      },
    ],
  },
];
