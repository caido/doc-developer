import fs from "fs";

import { parseYAML } from "confbox";
import type { OpenAPIV3, OpenAPIV3_1 } from "@scalar/openapi-types";
import { defineLoader } from "vitepress";

type OpenAPIDocument = OpenAPIV3.Document & OpenAPIV3_1.Document;

declare const data: OpenAPIDocument;
export { data };

export default defineLoader({
  watch: ["./openapi.yaml"],
  load(watchedFiles) {
    const spec = parseYAML<OpenAPIDocument>(
      fs.readFileSync(watchedFiles[0]!, "utf-8"),
    );

    spec.info = {
      title: "Public Cloud API",
    };

    spec.servers = [
      {
        url: "https://api.caido.io",
      },
    ];

    return spec;
  },
});
