import type { DefaultTheme } from "vitepress";

export { pluginsNavbar } from "./plugins";
export { clientSdkNavbar } from "./client-sdk";

export const introductionNavbar: DefaultTheme.NavItemWithLink[] = [
  { text: "Get Started", link: "/introduction/" },
];
