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
    text: "Community store",
    items: [
      {
        text: "Submitting your plugin",
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
  {
    text: "Backend",
    items: [
      {
        text: "Spawning a subprocess",
        link: "/guides/backend/subprocess",
      },
    ],
  },
];
