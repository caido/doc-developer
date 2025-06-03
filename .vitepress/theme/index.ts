import DefaultTheme from "vitepress/theme";
import { theme, useOpenapi } from "vitepress-openapi/client";
import "vitepress-openapi/dist/style.css";
import "./custom.css";

import spec from "../spec.json";
import ProContainer from "../components/Pro.vue";
import VideoContainer from "../components/Video.vue";
import type { Theme } from "vitepress";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("ProContainer", ProContainer);
    app.component("VideoContainer", VideoContainer);

    useOpenapi({
      spec,
      config: {},
    });
    theme.enhanceApp({ app });
  },
} satisfies Theme;
