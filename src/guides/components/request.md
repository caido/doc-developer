# Sending HTTP Requests

Requests can be interacted with and sent in both Workflows and plugins.

## RequestSpec

Used to create mutable request objects that have not yet been sent.

In Caido, requests that have been proxied can be interacted with via the an object of the `Request` type. These objects **cannot** be modified.

To create a request object that **can** be modified, the `RequestSpec` object class is used.

Compared to a `Request` object which only has methods to get a request's data, the `RequestSpec` object has different `set` methods available in order to specify certain HTTP request elements.

Although, Caido will automatically create a valid request based on the URL supplied as the constructor argument when creating a new `RequestSpec` object, these can be used to overwrite the properties of the automatically generated request.

- `removeHeader()` - Removes a header.
- `setBody()` - Specifies/overwrites the body of a request.
- `setHeader()` - Specifies a header or overwrites the same header with a different value.
- `setHost()` - Changes the target domain.
- `setMethod()` - Specifies/overwrites the HTTP method to be used.
- `setPath()` - Specifies/overwrites the URL path.
- `setPort()` - Specifies/overwrites the port.
- `setQuery()` - Specifies/overwrites the URL query.
- `setRaw()` - Sets the request to raw bytes.
- `setTls()` - Specifies/overwrites if HTTPS is to be used or not.

### Creating and Sending a Request

In the `/packages/backend/src/index.ts` file, you will first need to import the `RequestSpec`, `SDK` and `DefineAPI` type aliases.

``` ts
import { RequestSpec, Response } from "caido:utils";
import { SDK, DefineAPI } from "caido:plugin";
```

Next, define an asynchronous function that creates a new `RequestSpec` object using the target URL as the constructor. At this point, you can explicitly set request properties by calling the appropriate methods.

``` ts
async function sendRequest(sdk: SDK): Promise<void> {
  const spec = new RequestSpec("https://example.com/");
  spec.setMethod("GET");
  spec.setHost("example.com");
  spec.setPort(443);
  spec.setPath("/");
  spec.setQuery("?query=test")
  spec.setTls(true);
```

We must await for the request to be sent and processed before we are able to obtain data from the response. Using template literals, we can print the data to the backend logs.

``` ts
  let sentRequest = await sdk.requests.send(spec);

  if (sentRequest.response) {
    let domain = spec.getHost();
    let port = spec.getPort();
    let path = spec.getPath();
    let query = spec.getQuery();
    let id = sentRequest.response.getId();
    let code = sentRequest.response.getCode();
    sdk.console.log(`REQ ${id}: ${domain}:${port}${path}${query} received a status code of ${code}`);
  }
}
```

The entry in the backend log file will resemble:

``` txt
2024-10-09T19:10:34.825319Z  INFO plugin:d69424f6-a091-4660-8193-2ec624b54c5e js|sdk: REQ 4110: example.com:443/?query=test received a status code of 200
```

In order to use this new API call, the API itself must be defined and exported for use in the `/packages/frontend/src/index.ts` file. By using `typeof sendRequest`, you tie the function to a method named `sendRequest`.

``` ts
export type API = DefineAPI<{
  sendRequest: typeof sendRequest;
}>;
```

Finally, upon plugin initialization, the `sendRequest` function is registered to the backend.

``` ts
export function init(sdk: SDK<API>) {
  sdk.api.register("sendRequest", sendRequest);
}
```

::: tip
To view the entire backend script, expand the following:

<details>
<summary>Example</summary>

``` ts
import { RequestSpec } from "caido:utils";
import { SDK, DefineAPI } from "caido:plugin";

async function sendRequest(sdk: SDK): Promise<void> {
  const spec = new RequestSpec("https://example.com/");
  spec.setMethod("GET");
  spec.setHost("example.com");
  spec.setPort(443);
  spec.setPath("/");
  spec.setQuery("?query=test")
  spec.setTls(true);

  let sentRequest = await sdk.requests.send(spec);

  if (sentRequest.response) {
    let domain = spec.getHost();
    let port = spec.getPort();
    let path = spec.getPath();
    let query = spec.getQuery();
    let id = sentRequest.response.getId();
    let code = sentRequest.response.getCode();
    sdk.console.log(`REQ ${id}: ${domain}:${port}${path}${query} received a status code of ${code}`);
  }
}

export type API = DefineAPI<{
  sendRequest: typeof sendRequest;
}>;

export function init(sdk: SDK<API>) {
  sdk.api.register("sendRequest", sendRequest);
}
```

</details>
:::

By registering a command in the frontend, defining the command to make a backend call to execute the `sendRequest` function and then registering the function on the frontend - it can be called at the click of a button:

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
  await sdk.backend.sendRequest();
};

const createPage = (sdk: CaidoSDK) => {
  const requestButton = sdk.ui.button({
    variant: "primary",
    label: "Send Request",
  });

  requestButton.addEventListener("click", async () => {
    await sending(sdk);
  });

  const headerText = document.createElement("h1");
  headerText.textContent = "Hello world!";

  const subText = document.createElement("p");
  subText.textContent = "Lorem ipsum.";

  const bodyText = document.createElement("p");
  bodyText.textContent = "Paragraph.";

  const footerText = document.createElement("p");
  footerText.textContent = "Footer text.";

  const headerContainer = document.createElement("div");
  headerContainer.appendChild(headerText);
  headerContainer.appendChild(subText);
  headerContainer.appendChild(requestButton);

  const bodyContainer = document.createElement("div");
  bodyContainer.appendChild(bodyText);

  const card = sdk.ui.card({
    header: headerContainer,
    body: bodyContainer,
    footer: footerText,
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
:::
