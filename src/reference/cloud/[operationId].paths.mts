import { usePaths } from "vitepress-openapi";
import spec from "../../../.vitepress/spec.json";

export default {
  paths() {
    return usePaths({ spec })
      .getPathsByVerbs()
      .map((path) => {
        return {
          params: {
            operationId: path?.operationId,
            pageTitle: path?.summary,
          },
        };
      });
  },
};
