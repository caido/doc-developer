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
      {
        text: "Extending Editors with CodeMirror",
        link: "/guides/editor_extensions",
      },
      {
        text: "Adding Custom Request View Modes",
        link: "/guides/view_modes",
      },
      {
        text: "Adding Components to UI Slots",
        link: "/guides/slots",
      },
      {
        text: "Showing Dialogs",
        link: "/guides/dialogs",
      },
      {
        text: "Registering Keyboard Shortcuts",
        link: "/guides/shortcuts",
      },
      {
        text: "Customizing the Command Palette",
        link: "/guides/command_palette_advanced",
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
      {
        text: "Working with HTTPQL Queries and Filters",
        link: "/guides/filters",
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
      {
        text: "Creating and Managing Scopes",
        link: "/guides/scopes",
      },
      {
        text: "Managing Replay Sessions and Collections",
        link: "/guides/replay",
      },
      {
        text: "Creating and Managing Match and Replace Rules",
        link: "/guides/match_replace",
      },
      {
        text: "Interacting with Workflows",
        link: "/guides/workflows",
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
      {
        text: "Accessing Static Assets",
        link: "/guides/assets",
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
      {
        text: "Subscribing to Application Events",
        link: "/guides/application_events",
      },
      {
        text: "Listening to Page Navigation Changes",
        link: "/guides/navigation_events",
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
      {
        text: "Logging Messages",
        link: "/guides/log",
      },
      {
        text: "Getting Caido Version Information",
        link: "/guides/runtime",
      },
    ],
  },
  {
    text: "Advanced Features",
    items: [
      {
        text: "Using AI in Your Plugin",
        link: "/guides/ai",
      },
      {
        text: "Querying the GraphQL API",
        link: "/guides/graphql",
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
