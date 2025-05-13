import type { DefaultTheme } from "vitepress";

export const guidesSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Guides",
    items: [
      {
        text: "Getting Started",
        link: "/guides/",
      },
      {
        text: "Configuring Your Package",
        link: "/guides/config",
      },
      {
        text: "AI Assisted Coding",
        link: "/guides/vibe_coding",
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
      {
        text: "Using the Component Library",
        link: "/guides/components/styling",
      },
    ],
  },
  {
    text: "Backend",
    items: [
      {
        text: "Creating and Calling a Custom Function",
        link: "/guides/components/rpc",
      },
      {
        text: "Handling Backend Events",
        link: "/guides/components/backend_events",
      },
      {
        text: "Sending HTTP Requests",
        link: "/guides/components/request",
      },
      {
        text: "Sending a Fetch Request",
        link: "/guides/components/fetch",
      },
      {
        text: "Sending Events to the Frontend",
        link: "/guides/components/events",
      },
      {
        text: "Spawning a Process",
        link: "/guides/components/spawning_process",
      },
      {
        text: "Storing Data in SQLite",
        link: "/guides/components/sqlite",
      },
      {
        text: "Using Findings",
        link: "/guides/components/findings",
      },
      {
        text: "Using Invalid UTF-8",
        link: "/guides/components/utf",
      },
    ],
  },
  {
    text: "Shared",
    items: [
      {
        text: "Adding Files",
        link: "/guides/components/files",
      },
      {
        text: "Using Environment Variables",
        link: "/guides/components/env",
      },
    ],
  },
  {
    text: "Community Store",
    items: [
      {
        text: "Setting Up Your Repository",
        link: "/guides/distribution/repository",
      },
      {
        text: "Submitting to the Store",
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
