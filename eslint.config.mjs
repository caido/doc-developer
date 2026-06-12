import { defaultConfig } from "@caido/eslint-config";
import markdownPlugin from "@eslint/markdown";

/** @type {import('eslint').Linter.Config } */
export default [
  {
    ignores: [
      ".vitepress/cache",
      ".vitepress/dist",
      "./src/plugins/reference/sdks",
      "./src/plugins/reference/modules",
      "src/client-sdk/reference/api.md",
    ],
  },
  ...markdownPlugin.configs.recommended.map((config) => ({
    ...config,
    languageOptions: {
      frontmatter: "yaml",
    },
  })),
  ...defaultConfig().map((config) => ({
    ...config,
    files: ["**/*.ts", "**/*.vue"],
  })),
];
