import type { DefaultTheme } from "vitepress";

export const conceptsSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Introduction",
    items: [
      {
        text: "Directory",
        link: "/concepts/",
      },
    ],
  },
  {
    text: "Essentials",
    items: [
      {
        text: "Plugins",
        link: "/concepts/essentials/plugins/",
        items: [
          {
            text: "Frontend",
            link: "/concepts/essentials/plugins/frontend",
          },
          {
            text: "Backend",
            link: "/concepts/essentials/plugins/backend",
          },
        ],
      },
      {
        text: "Tooling",
        link: "/concepts/essentials/tooling",
      },
    ],
  },
];
