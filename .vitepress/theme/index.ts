import DefaultTheme from "vitepress/theme";
import "./custom.css";

import ProContainer from "../components/Pro.vue";
import VideoContainer from "../components/Video.vue";
import type { Theme } from "vitepress";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("ProContainer", ProContainer);
    app.component("VideoContainer", VideoContainer);
  },
} satisfies Theme;
