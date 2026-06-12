import type { DefaultTheme } from "vitepress";

export const tutorialsSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Tutorials",
    items: [
      {
        text: "Introduction",
        link: "/client-sdk/tutorials/",
      },
    ],
  },
  {
    text: "Client SDK",
    items: [
      {
        text: "Using the Scanner API",
        link: "/client-sdk/tutorials/scanner",
      },
      {
        text: "Using the Autorize API",
        link: "/client-sdk/tutorials/autorize",
      },
    ],
  },
];
