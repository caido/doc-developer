import { defaultConfig } from '@caido/eslint-config';
import markdownPlugin from '@eslint/markdown';

/** @type {import('eslint').Linter.Config } */
export default [
  {
    ignores: [".vitepress/cache", ".vitepress/dist", "./src/reference/sdks", "./src/reference/modules"],
  },
  ...(markdownPlugin.configs.recommended.map(config => ({
    ...config,
    languageOptions: {
      frontmatter: "yaml"
    }
  }))),
  ...(defaultConfig().map(config => ({
    ...config,
    files: ["**/*.ts", "**/*.vue"],
  }))),
];
