import type { DefaultTheme } from "vitepress";

export const guidesSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Getting Started",
    items: [
      {
        text: "Install the SDK",
        link: "/client-sdk/guides/install",
      },
      {
        text: "Base Setup",
        link: "/client-sdk/guides/base_setup",
      },
    ],
  },
  {
    text: "Core Features",
    items: [
      {
        text: "Extract Requests",
        link: "/client-sdk/guides/extract_requests",
      },
      {
        text: "Manage Findings",
        link: "/client-sdk/guides/manage_findings",
      },
      {
        text: "Environments and Variables",
        link: "/client-sdk/guides/environments",
      },
    ],
  },
  {
    text: "Plugins",
    items: [
      {
        text: "Install a Plugin",
        link: "/client-sdk/guides/install_plugin",
      },
      {
        text: "Call a Plugin Function",
        link: "/client-sdk/guides/call_function",
      },
      {
        text: "Receive Plugin Events",
        link: "/client-sdk/guides/receive_events",
      },
      {
        text: "Use a Plugin's NPM Spec Package",
        link: "/client-sdk/guides/spec_typing",
      },
    ],
  },
  {
    text: "Advanced",
    items: [
      {
        text: "Call GraphQL Directly",
        link: "/client-sdk/guides/graphql_direct",
      },
      {
        text: "Custom Cache Implementation",
        link: "/client-sdk/guides/custom_cache",
      },
    ],
  },
];
