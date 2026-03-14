import type { DefaultTheme } from "vitepress";

export const referenceSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Reference",
    items: [
      {
        text: "Introduction",
        link: "/reference/",
      },
      {
        text: "AI Providers & Capabilities",
        link: "/reference/ai-providers",
      },
    ],
  },
  {
    text: "SDKs",
    items: [
      {
        text: "Backend",
        collapsed: false,
        items: [
          {
            text: "@caido/sdk-backend",
            link: "/reference/sdks/backend/",
          },
          {
            text: "API",
            link: "/reference/sdks/backend/api",
          },
          {
            text: "Environment",
            link: "/reference/sdks/backend/environment",
          },
          {
            text: "Events",
            link: "/reference/sdks/backend/events",
          },
          {
            text: "Findings",
            link: "/reference/sdks/backend/findings",
          },
          {
            text: "GraphQL",
            link: "/reference/sdks/backend/graphql",
          },
          {
            text: "HostedFile",
            link: "/reference/sdks/backend/hostedfile",
          },
          {
            text: "Meta",
            link: "/reference/sdks/backend/meta",
          },
          {
            text: "Other",
            link: "/reference/sdks/backend/other",
          },
          {
            text: "Projects",
            link: "/reference/sdks/backend/projects",
          },
          {
            text: "Replay",
            link: "/reference/sdks/backend/replay",
          },
          {
            text: "Requests",
            link: "/reference/sdks/backend/requests",
          },
          {
            text: "Runtime",
            link: "/reference/sdks/backend/runtime",
          },
          {
            text: "Scope",
            link: "/reference/sdks/backend/scope",
          },
          {
            text: "Shared",
            link: "/reference/sdks/backend/shared",
          },
        ],
      },
      {
        text: "Frontend",
        collapsed: false,
        items: [
          {
            text: "@caido/sdk-frontend",
            link: "/reference/sdks/frontend/",
          },
          {
            text: "AI",
            link: "/reference/sdks/frontend/ai",
          },
          {
            text: "Automate",
            link: "/reference/sdks/frontend/automate",
          },
          {
            text: "Backend",
            link: "/reference/sdks/frontend/backend",
          },
          {
            text: "Command Palette",
            link: "/reference/sdks/frontend/command-palette",
          },
          {
            text: "Commands",
            link: "/reference/sdks/frontend/commands",
          },
          {
            text: "Editor",
            link: "/reference/sdks/frontend/editor",
          },
          {
            text: "Environment",
            link: "/reference/sdks/frontend/environment",
          },
          {
            text: "Files",
            link: "/reference/sdks/frontend/files",
          },
          {
            text: "Filter",
            link: "/reference/sdks/frontend/filter",
          },
          {
            text: "Filters",
            link: "/reference/sdks/frontend/filters",
          },
          {
            text: "Findings",
            link: "/reference/sdks/frontend/findings",
          },
          {
            text: "Footer",
            link: "/reference/sdks/frontend/footer",
          },
          {
            text: "HTTP History",
            link: "/reference/sdks/frontend/http-history",
          },
          {
            text: "Intercept",
            link: "/reference/sdks/frontend/intercept",
          },
          {
            text: "JSON",
            link: "/reference/sdks/frontend/json",
          },
          {
            text: "Log",
            link: "/reference/sdks/frontend/log",
          },
          {
            text: "Match and Replace",
            link: "/reference/sdks/frontend/match-and-replace",
          },
          {
            text: "Menu",
            link: "/reference/sdks/frontend/menu",
          },
          {
            text: "Navigation",
            link: "/reference/sdks/frontend/navigation",
          },
          {
            text: "Other",
            link: "/reference/sdks/frontend/other",
          },
          {
            text: "Projects",
            link: "/reference/sdks/frontend/projects",
          },
          {
            text: "Replay",
            link: "/reference/sdks/frontend/replay",
          },
          {
            text: "Request",
            link: "/reference/sdks/frontend/request",
          },
          {
            text: "Runtime",
            link: "/reference/sdks/frontend/runtime",
          },
          {
            text: "Scopes",
            link: "/reference/sdks/frontend/scopes",
          },
          {
            text: "Search",
            link: "/reference/sdks/frontend/search",
          },
          {
            text: "Shortcuts",
            link: "/reference/sdks/frontend/shortcuts",
          },
          {
            text: "Sidebar",
            link: "/reference/sdks/frontend/sidebar",
          },
          {
            text: "Sitemap",
            link: "/reference/sdks/frontend/sitemap",
          },
          {
            text: "Slots",
            link: "/reference/sdks/frontend/slots",
          },
          {
            text: "Storage",
            link: "/reference/sdks/frontend/storage",
          },
          {
            text: "UI",
            link: "/reference/sdks/frontend/ui",
          },
          {
            text: "Utils",
            link: "/reference/sdks/frontend/utils",
          },
          {
            text: "Window",
            link: "/reference/sdks/frontend/window",
          },
          {
            text: "Workflows",
            link: "/reference/sdks/frontend/workflows",
          },
        ],
      },
      {
        text: "Workflow",
        collapsed: false,
        items: [
          {
            text: "@caido/sdk-workflow",
            link: "/reference/sdks/workflow/",
          },
          {
            text: "Data",
            link: "/reference/sdks/workflow/data",
          },
          {
            text: "Environment",
            link: "/reference/sdks/workflow/environment",
          },
          {
            text: "Findings",
            link: "/reference/sdks/workflow/findings",
          },
          {
            text: "GraphQL",
            link: "/reference/sdks/workflow/graphql",
          },
          {
            text: "HostedFile",
            link: "/reference/sdks/workflow/hostedfile",
          },
          {
            text: "Other",
            link: "/reference/sdks/workflow/other",
          },
          {
            text: "Projects",
            link: "/reference/sdks/workflow/projects",
          },
          {
            text: "Replay",
            link: "/reference/sdks/workflow/replay",
          },
          {
            text: "Requests",
            link: "/reference/sdks/workflow/requests",
          },
          {
            text: "Runtime",
            link: "/reference/sdks/workflow/runtime",
          },
          {
            text: "Scope",
            link: "/reference/sdks/workflow/scope",
          },
          {
            text: "Shared",
            link: "/reference/sdks/workflow/shared",
          },
        ],
      },
    ],
  },
  {
    text: "Runtime",
    items: [
      {
        text: "Backend Modules",
        link: "/reference/modules/",
      },
    ],
  },
  {
    text: "Cloud",
    items: [
      {
        text: "Authentication",
        link: "/reference/authentication",
      },
      {
        text: "API",
        link: "/reference/api",
      },
    ],
  },
  {
    text: "Files",
    items: [
      {
        text: "caido.config.ts",
        link: "/reference/config.md",
      },
      {
        text: "plugin_packages.json",
        link: "/reference/plugin_packages.md",
      },
      {
        text: "manifest.json",
        link: "/reference/manifest.md",
      },
    ],
  },
];
