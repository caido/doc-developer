import type { DefaultTheme } from "vitepress";

export const guidesSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Introduction",
    items: [
      {
        text: "Directory",
        link: "/guides/",
      },
    ],
  },
  {
    text: "Example plugins",
    items: [
      {
        text: "Notebook",
        link: "/guides/plugins/notebook",
      },
    ],
  },
  {
    text: "Distribution",
    items: [
      {
        text: "Store",
        link: "/guides/distribution/store",
      },
    ],
  },
  {
    text: "Contributions",
    items: [
      {
        text: "Documentation",
        link: "/guides/contributions/documentation",
      },
    ],
  },
];
