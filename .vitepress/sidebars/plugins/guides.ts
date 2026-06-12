import type { DefaultTheme } from "vitepress";

export const guidesSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Getting Started",
    items: [
      {
        text: "Getting Started",
        link: "/plugins/guides/",
      },
      {
        text: "Configure Package",
        link: "/plugins/guides/config",
      },
      {
        text: "AI Assisted Coding",
        link: "/plugins/guides/vibe_coding",
      },
      {
        text: "Set Up Repository",
        link: "/plugins/guides/repository",
      },
      {
        text: "Submit to Store",
        link: "/plugins/guides/store",
      },
      {
        text: "Contributing",
        link: "/plugins/guides/documentation",
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
            link: "/plugins/guides/page",
          },
          {
            text: "Create a Command",
            link: "/plugins/guides/command",
          },
          {
            text: "Customize Context Menus",
            link: "/plugins/guides/menu",
          },
          {
            text: "Use the Component Library",
            link: "/plugins/guides/styling",
          },
          {
            text: "Extend Editors",
            link: "/plugins/guides/editor_extensions",
          },
          {
            text: "Add View Modes",
            link: "/plugins/guides/view_modes",
          },
          {
            text: "Add to UI Slots",
            link: "/plugins/guides/slots",
          },
          {
            text: "Show Dialogs",
            link: "/plugins/guides/dialogs",
          },
          {
            text: "Register Shortcuts",
            link: "/plugins/guides/shortcuts",
          },
          {
            text: "Customize the Command Palette",
            link: "/plugins/guides/command_palette_advanced",
          },
          {
            text: "Custom Settings Pages",
            link: "/plugins/guides/settings",
          },
        ],
      },
      {
        text: "Data Storage",
        items: [
          {
            text: "Store Frontend Data",
            link: "/plugins/guides/frontend_storage",
          },
          {
            text: "Access Static Assets",
            link: "/plugins/guides/assets",
          },
        ],
      },
      {
        text: "Caido Features",
        items: [
          {
            text: "Use HTTPQL Queries",
            link: "/plugins/guides/filters",
          },
          {
            text: "Manage Scopes",
            link: "/plugins/guides/scopes",
          },
          {
            text: "Manage Replay Sessions",
            link: "/plugins/guides/replay",
          },
          {
            text: "Manage Automate Sessions",
            link: "/plugins/guides/automate",
          },
          {
            text: "Manage Sitemap",
            link: "/plugins/guides/sitemap",
          },
          {
            text: "Manage Match and Replace",
            link: "/plugins/guides/match_replace",
          },
          {
            text: "Interact with Workflows",
            link: "/plugins/guides/workflows",
          },
        ],
      },
      {
        text: "Events",
        items: [
          {
            text: "Subscribe to Application Events",
            link: "/plugins/guides/application_events",
          },
          {
            text: "Listen to Navigation Events",
            link: "/plugins/guides/navigation_events",
          },
        ],
      },
      {
        text: "System Integration",
        items: [
          {
            text: "Log Messages",
            link: "/plugins/guides/log",
          },
          {
            text: "Get Version Information",
            link: "/plugins/guides/runtime",
          },
        ],
      },
      {
        text: "Advanced Features",
        items: [
          {
            text: "Use AI in Your Plugin",
            link: "/plugins/guides/ai",
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
            link: "/plugins/guides/request",
          },
          {
            text: "Send a Fetch Request",
            link: "/plugins/guides/fetch",
          },
          {
            text: "Fetch Proxied Requests",
            link: "/plugins/guides/querying_requests",
          },
          {
            text: "Use Invalid UTF-8",
            link: "/plugins/guides/utf",
          },
        ],
      },
      {
        text: "Caido Features",
        items: [
          {
            text: "Use Findings",
            link: "/plugins/guides/findings",
          },
          {
            text: "Use Environment Variables",
            link: "/plugins/guides/env",
          },
        ],
      },
      {
        text: "Data Storage",
        items: [
          {
            text: "Store Data in SQLite",
            link: "/plugins/guides/sqlite",
          },
          {
            text: "Add Files",
            link: "/plugins/guides/files",
          },
        ],
      },
      {
        text: "Events",
        items: [
          {
            text: "Handle Backend Events",
            link: "/plugins/guides/backend_events",
          },
          {
            text: "Call Custom Functions",
            link: "/plugins/guides/rpc",
          },
          {
            text: "Send Events to the Frontend",
            link: "/plugins/guides/events",
          },
          {
            text: "Intercept Requests and Connections",
            link: "/plugins/guides/plugin_upstream",
          },
        ],
      },
      {
        text: "System Integration",
        items: [
          {
            text: "Spawn a Process",
            link: "/plugins/guides/spawning_process",
          },
        ],
      },
    ],
  },
];
