# Using Invalid UTF-8

``` ts
import { RequestSpecRaw } from "caido:utils";
import { SDK, DefineAPI } from "caido:plugin";

// Function to convert a string into an array of bytes.
function stringToUint8Array(str: string): Uint8Array {
  const arr = new Uint8Array(str.length);
  for (let i = 0; i < str.length; i++) {
    arr[i] = str.charCodeAt(i);
  }
  return arr;
}

async function testSendRequest(sdk: SDK): Promise<void> {
  console.log("Testing send request");
  // Create a new request using bytes.
  const req = new RequestSpecRaw("http://localhost:5555");

  // Convert the request line into a byte array.
  const rawRequest = "GET /admin\x85 HTTP/1.1\r\nHost: localhost:5555\r\n\r\n";
  req.setRaw(stringToUint8Array(rawRequest));

  // Send the request.
  const res = await sdk.requests.send(req);
  console.log(res?.response.getRaw().toText());
}

// Define the API for the plugin.
export type API = DefineAPI<{
  testSendRequest: typeof testSendRequest;
}>;

// Initialize the plugin.
export function init(sdk: SDK<API>) {
  sdk.api.register("testSendRequest", testSendRequest);
}
```

::: tip
<details>
<summary>To view the entire frontend script, expand the following:</summary>

``` ts
import type { Caido } from "@caido/sdk-frontend";
import type { API } from "../../backend/src/index";

import "./styles/index.css";

export type CaidoSDK = Caido<API>;

const Commands = {
  sending: "my-plugin-page.req",
} as const;

const sending = async (sdk: CaidoSDK) => {
  await sdk.backend.testSendRequest();
};

const createPage = (sdk: CaidoSDK) => {
  const requestButton = sdk.ui.button({
    variant: "primary",
    label: "Send Request",
  });

  requestButton.addEventListener("click", async () => {
    await sending(sdk);
  });

  const bodyContainer = document.createElement("div");
  bodyContainer.appendChild(requestButton);

  const card = sdk.ui.card({
    body: bodyContainer,

  });

  sdk.navigation.addPage("/my-plugin-page", {
    body: card,
  });
};

export const init = (sdk: CaidoSDK) => {
  createPage(sdk);
  sdk.sidebar.registerItem("My Plugin", "/my-plugin-page", {
    icon: "fas fa-rocket",
  });

  sdk.commands.register(Commands.sending, {
    name: "Send Request",
    run: () => sending(sdk),
  });
};
```

</details>
