# Using Invalid UTF-8

::: tip
For conceptual information regarding this guide - click [here](/concepts/backend/binary.md).
:::

## Using a Newly Created Request

When testing for potential bypasses, to use invalid UTF-8 in the path of a `new RequestSpecRaw()` request, follow these steps:

### /packages/backend/src/index.ts

First, import the required dependencies. `SDK` is the interface used to interact with Caido. `DefineAPI` is used to structure the API: definining what methods or endpoints are available, the parameters those methods accept and what types of values they return. `RequestSpecRaw` is an object class that is used to create a request in raw byte format.

``` ts
import { RequestSpecRaw } from "caido:utils";
import { SDK, DefineAPI } from "caido:plugin";
```

Next, define a function that will convert the path string into an array of bytes.

``` ts
function stringToUint8Array(str: string): Uint8Array {
  const arr = new Uint8Array(str.length);
  for (let i = 0; i < str.length; i++) {
    arr[i] = str.charCodeAt(i);
  }
  return arr;
}
```

Create an instance of the `RequestSpecRaw` class, by supplying the target URL as the constructor.

``` ts
async function testSendRequest(sdk: SDK): Promise<void> {
  console.log("Testing send request");
  const req = new RequestSpecRaw("http://localhost:5555");
```

Call the `stringToUint8Array` function on the request data to convert it into a byte array. Send the request and if a response is received, print it in plaintext.

``` ts
  const rawRequest = "GET /admin\x85 HTTP/1.1\r\nHost: localhost:5555\r\n\r\n";
  req.setRaw(stringToUint8Array(rawRequest));

  const res = await sdk.requests.send(req);
  console.log(res?.response.getRaw().toText());
}
```

Since we are using a button on the frontend to issue this request, define the `testSendRequest` function as an API call and register it to the backend.

``` ts
export type API = DefineAPI<{
  testSendRequest: typeof testSendRequest;
}>;

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
