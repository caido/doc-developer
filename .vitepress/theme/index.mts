import DefaultTheme from "vitepress/theme";
import { theme, useOpenapi } from "vitepress-openapi/client";
import "vitepress-openapi/dist/style.css";
import "./custom.css";

import { data } from "../data/openapi.data.mjs";
import ProContainer from "../components/Pro.vue";
import VideoContainer from "../components/Video.vue";
import OASpecHeader from "../components/OASpecHeader.vue";
import type { Theme } from "vitepress";

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component("ProContainer", ProContainer);
    ctx.app.component("VideoContainer", VideoContainer);
    ctx.app.component("OASpecHeader", OASpecHeader);

    useOpenapi({
      spec: data,
      config: {
        operation: { hiddenSlots: ["playground"] },
        codeSamples: {
          langs: ["curl", "python", "javascript"],
          defaultLang: "curl",
        },
      },
    });
    theme.enhanceApp(ctx);
  },
} satisfies Theme;
