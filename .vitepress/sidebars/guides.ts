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
        text: "Configure Package",
        link: "/guides/config",
      },
      {
        text: "AI Assisted Coding",
        link: "/guides/vibe_coding",
      },
      {
        text: "Set Up Repository",
        link: "/guides/repository",
      },
      {
        text: "Submit to Store",
        link: "/guides/store",
      },
      {
        text: "Contributing",
        link: "/guides/documentation",
      },
    ],
  },
  {
    text: "Frontend Guides",
    items: [
      {
        text: "User Interface",
        items: [
          {
            text: "Create a Page",
            link: "/guides/page",
          },
          {
            text: "Create a Command",
            link: "/guides/command",
          },
          {
            text: "Customize Context Menus",
            link: "/guides/menu",
          },
          {
            text: "Use the Component Library",
            link: "/guides/styling",
          },
          {
            text: "Extend Editors",
            link: "/guides/editor_extensions",
          },
          {
            text: "Add View Modes",
            link: "/guides/view_modes",
          },
          {
            text: "Add to UI Slots",
            link: "/guides/slots",
          },
          {
            text: "Show Dialogs",
            link: "/guides/dialogs",
          },
          {
            text: "Register Shortcuts",
            link: "/guides/shortcuts",
          },
          {
            text: "Customize the Command Palette",
            link: "/guides/command_palette_advanced",
          },
          {
            text: "Custom Settings Pages",
            link: "/guides/settings",
          },
        ],
      },
      {
        text: "Data Storage",
        items: [
          {
            text: "Store Frontend Data",
            link: "/guides/frontend_storage",
          },
          {
            text: "Access Static Assets",
            link: "/guides/assets",
          },
        ],
      },
      {
        text: "Caido Features",
        items: [
          {
            text: "Use HTTPQL Queries",
            link: "/guides/filters",
          },
          {
            text: "Manage Scopes",
            link: "/guides/scopes",
          },
          {
            text: "Manage Replay Sessions",
            link: "/guides/replay",
          },
          {
            text: "Manage Automate Sessions",
            link: "/guides/automate",
          },
          {
            text: "Manage Sitemap",
            link: "/guides/sitemap",
          },
          {
            text: "Manage Match and Replace",
            link: "/guides/match_replace",
          },
          {
            text: "Interact with Workflows",
            link: "/guides/workflows",
          },
        ],
      },
      {
        text: "Events",
        items: [
          {
            text: "Subscribe to Application Events",
            link: "/guides/application_events",
          },
          {
            text: "Listen to Navigation Events",
            link: "/guides/navigation_events",
          },
        ],
      },
      {
        text: "System Integration",
        items: [
          {
            text: "Log Messages",
            link: "/guides/log",
          },
          {
            text: "Get Version Information",
            link: "/guides/runtime",
          },
        ],
      },
      {
        text: "Advanced Features",
        items: [
          {
            text: "Use AI in Your Plugin",
            link: "/guides/ai",
          },
        ],
      },
    ],
  },
  {
    text: "Backend Guides",
    items: [
      {
        text: "Working with HTTP",
        items: [
          {
            text: "Send HTTP Requests",
            link: "/guides/request",
          },
          {
            text: "Send a Fetch Request",
            link: "/guides/fetch",
          },
          {
            text: "Fetch Proxied Requests",
            link: "/guides/querying_requests",
          },
          {
            text: "Use Invalid UTF-8",
            link: "/guides/utf",
          },
        ],
      },
      {
        text: "Caido Features",
        items: [
          {
            text: "Use Findings",
            link: "/guides/findings",
          },
          {
            text: "Use Environment Variables",
            link: "/guides/env",
          },
        ],
      },
      {
        text: "Data Storage",
        items: [
          {
            text: "Store Data in SQLite",
            link: "/guides/sqlite",
          },
          {
            text: "Add Files",
            link: "/guides/files",
          },
        ],
      },
      {
        text: "Events",
        items: [
          {
            text: "Handle Backend Events",
            link: "/guides/backend_events",
          },
          {
            text: "Call Custom Functions",
            link: "/guides/rpc",
          },
          {
            text: "Send Events to the Frontend",
            link: "/guides/events",
          },
          {
            text: "Intercept Requests and Connections",
            link: "/guides/plugin_upstream",
          },
        ],
      },
      {
        text: "System Integration",
        items: [
          {
            text: "Spawn a Process",
            link: "/guides/spawning_process",
          },
        ],
      },
    ],
  },
];
