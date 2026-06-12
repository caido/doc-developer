import type { DefaultTheme } from "vitepress";

export const conceptsSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Concepts",
    items: [
      {
        text: "Introduction",
        link: "/client-sdk/concepts/",
      },
    ],
  },
  {
    text: "Authentication",
    items: [
      {
        text: "Methods",
        link: "/client-sdk/concepts/auth_methods",
      },
      {
        text: "Caching of Tokens",
        link: "/client-sdk/concepts/auth_caching",
      },
    ],
  },
  {
    text: "Community implementations",
    items: [
      {
        text: "Golang SDK",
        link: "/client-sdk/concepts/community_golang",
      },
      {
        text: "Python SDK",
        link: "/client-sdk/concepts/community_python",
      },
    ],
  },
];
