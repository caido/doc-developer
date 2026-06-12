import type { DefaultTheme } from "vitepress";

export const referenceSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Reference",
    items: [
      {
        text: "Introduction",
        link: "/client-sdk/reference/",
      },
    ],
  },
  {
    text: "Cloud",
    items: [
      {
        text: "Authentication",
        link: "/client-sdk/reference/authentication",
      },
      {
        text: "API",
        link: "/client-sdk/reference/api",
      },
    ],
  },
];
