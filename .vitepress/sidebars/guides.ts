import type { DefaultTheme } from "vitepress";

export const guidesSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Getting Started",
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
    text: "Building User Interfaces",
    items: [
      {
        text: "Creating a Page",
        link: "/guides/page",
      },
      {
        text: "Creating a Command",
        link: "/guides/command",
      },
      {
        text: "Customizing Context Menus",
        link: "/guides/menu",
      },
      {
        text: "Using the Component Library",
        link: "/guides/styling",
      },
    ],
  },
  {
    text: "Working with HTTP",
    items: [
      {
        text: "Sending HTTP Requests",
        link: "/guides/request",
      },
      {
        text: "Sending a Fetch Request",
        link: "/guides/fetch",
      },
      {
        text: "Fetching Proxied Requests",
        link: "/guides/querying_requests",
      },
      {
        text: "Using Invalid UTF-8",
        link: "/guides/utf",
      },
    ],
  },
  {
    text: "Working with Caido Features",
    items: [
      {
        text: "Using Findings",
        link: "/guides/findings",
      },
      {
        text: "Using Environment Variables",
        link: "/guides/env",
      },
    ],
  },
  {
    text: "Storing Data",
    items: [
      {
        text: "Storing Frontend Data",
        link: "/guides/frontend_storage",
      },
      {
        text: "Storing Data in SQLite",
        link: "/guides/sqlite",
      },
      {
        text: "Adding Files",
        link: "/guides/files",
      },
    ],
  },
  {
    text: "Communication & Events",
    items: [
      {
        text: "Creating and Calling a Custom Function",
        link: "/guides/rpc",
      },
      {
        text: "Handling Backend Events",
        link: "/guides/backend_events",
      },
      {
        text: "Sending Events to the Frontend",
        link: "/guides/events",
      },
    ],
  },
  {
    text: "System Integration",
    items: [
      {
        text: "Spawning a Process",
        link: "/guides/spawning_process",
      },
    ],
  },
  {
    text: "Distribution",
    items: [
      {
        text: "Setting Up Your Repository",
        link: "/guides/repository",
      },
      {
        text: "Submitting to the Store",
        link: "/guides/store",
      },
    ],
  },
  {
    text: "Contributions",
    items: [
      {
        text: "Documentation",
        link: "/guides/documentation",
      },
    ],
  },
];
