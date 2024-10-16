import type { DefaultTheme } from "vitepress";

export const guidesSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Introduction",
    items: [
      {
        text: "Getting Started",
        link: "/guides/",
      },
    ],
  },
  {
    text: "Example Plugins",
    items: [
      {
        text: "Notebook",
        link: "/guides/plugins/notebook",
      },
    ],
  },
  {
    text: "Frontend",
    items: [
      {
        text: "Creating a Page",
        link: "/guides/components/page",
      },
      {
        text: "Creating a Command",
        link: "/guides/components/command",
      },
      {
        text: "Customizing Context Menus",
        link: "/guides/components/menu",
      },
    ],
  },
  {
    text: "Backend",
    items: [
      {
        text: "Sending HTTP Requests",
        link: "/guides/components/request",
      },
    ],
  },
  {
    text: "Community Store",
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
