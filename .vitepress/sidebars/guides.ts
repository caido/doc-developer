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
        text: "Plugin Page",
        link: "/guides/components/page",
      },
      {
        text: "Plugin Commands",
        link: "/guides/components/command",
      },
      {
        text: "Plugin Context Menus",
        link: "/guides/components/menu",
      },
    ],
  },
  {
    text: "Backend",
    items: [
      {
        text: "Send a Request",
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
];
