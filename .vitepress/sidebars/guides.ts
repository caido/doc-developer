import { DefaultTheme } from "vitepress";

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
        link: "/guides/plugins/notebook"
      },
    ],
  },
  {
    text: "Distribution",
    items: [
      {
        text: "Submitting a Plugin",
        link: "/guides/distribution/submitting_a_plugin",
      },
      {
        text: "Developer Policy",
        link: "/guides/distribution/developer_policy",
      }
    ]
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
