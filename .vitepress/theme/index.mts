import DefaultTheme from "vitepress/theme";
import { theme, useOpenapi } from "vitepress-openapi/client";
import "vitepress-openapi/dist/style.css";
import "./custom.css";

import { data } from "../data/openapi.data.mjs";
import NavItem from "../components/NavItem.vue";
import ProContainer from "../components/Pro.vue";
import VideoContainer from "../components/Video.vue";
import OASpecHeader from "../components/OASpecHeader.vue";
import type { Theme } from "vitepress";

import Layout from "./Layout.vue";

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp(ctx) {
    ctx.app.component("ProContainer", ProContainer);
    ctx.app.component("VideoContainer", VideoContainer);
    ctx.app.component("OASpecHeader", OASpecHeader);
    ctx.app.component("NavItem", NavItem);

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
