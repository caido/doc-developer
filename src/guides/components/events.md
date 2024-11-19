# Sending Events from the Backend to Frontend

In this guide, you will learn how to facilitate event-driven communication between the backend and the frontend components of a plugin.

This can be accomplished using the `DefineEvents` type utility provided by the Caido SDK.

The event can then be subscribed to on the frontend using `sdk.backend.onEvent()`.

## Registering an API Endpoint and Event

To demonstrate, we will create a plugin that sends a request, receives the response, and emits an event containing response data to the frontend.

### /packages/backend/src/index.ts

``` ts
import { RequestSpec } from "caido:utils";
import { SDK, DefineAPI, DefineEvents } from "caido:plugin";

type RequestEvent = {
  id: string;
  status: number;
  url: string;
};

export type BackendEvents = DefineEvents<{
  "request-completed": (data: RequestEvent) => void;
}>;

const sendRequest = async (sdk: SDK<{}, BackendEvents>): Promise<void> => {
  const spec = new RequestSpec("https://example.com/");

  let sentRequest = await sdk.requests.send(spec);

  if (sentRequest.response) {
    sdk.api.send("request-completed", {
      id: sentRequest.response.getId(),
      status: sentRequest.response.getCode(),
      url: `${spec.getHost()}:${spec.getPort()}${spec.getPath()}${spec.getQuery()}`
    });
  }
}

export type API = DefineAPI<{
  sendRequest: typeof sendRequest;
}>;

export function init(sdk: SDK<API, BackendEvents>) {
  sdk.api.register("sendRequest", sendRequest);
}
```

### Script Breakdown

First, import the required dependencies. `RequestSpec` is the class used to create HTTP requests. `SDK` is the interface used to interact with Caido. `DefineAPI` is used to structure the API: definining what methods or endpoints are available, the parameters those methods accept and what types of values they return. `DefineEvents` is used to structure events that can be sent between the backend and frontend.

``` ts
import { RequestSpec } from "caido:utils";
import { SDK, DefineAPI, DefineEvents } from "caido:plugin";
```

Next, create a type alias that defines the data and their data type of the event message that will be sent to the frontend.

``` ts
type RequestEvent = {
  id: string;
  status: number;
  url: string;
};
```

Using the `DefineEvents` utility, we state the event named `request-completed` will carry a `data` object using the `RequestEvent` type declarations. This is made available by exporting `BackendEvents`.

``` ts
export type BackendEvents = DefineEvents<{
  "request-completed": (data: RequestEvent) => void;
}>;
```

Next, we define a function that will:

1. Create a request to the specified domain.
2. Await the response.
3. Send the `request-completed` event to the frontend using the `sdk.api.send()` method. The data will be extracted using various methods that are available on the `response` object.

``` ts
const sendRequest = async (sdk: SDK<{}, BackendEvents>): Promise<void> => {
  const spec = new RequestSpec("https://example.com/");

  let sentRequest = await sdk.requests.send(spec);

  if (sentRequest.response) {
    sdk.api.send("request-completed", {
      id: sentRequest.response.getId(),
      status: sentRequest.response.getCode(),
      url: `${spec.getHost()}:${spec.getPort()}${spec.getPath()}${spec.getQuery()}`
    });
  }
}
```

Using the `DefineAPI` utility, we are stating what our API offers. In this case, the `sendRequest` function is available to be called. It extends upon the base SDK by adding the `<API>` and `BackendEvents`. In order to register the function, we use the `sdk.api.register()` method which takes two parameters: a string name for the function and the function it refers to. We give the name `"sendRequest"` to the `sendRequest` function.

``` ts
export type API = DefineAPI<{
  sendRequest: typeof sendRequest;
}>;

export function init(sdk: SDK<API, BackendEvents>) {
  sdk.api.register("sendRequest", sendRequest);
}
```

## Receiving the Event

Now that we've created our endpoint in the backend plugin, we can call `sendRequest` which will execute the function and emit the `request-completed` event with the response data.

The API and events are made available to the frontend script by extending the `Caido` inferface with the imports.

``` ts
export type CaidoSDK = Caido<API, BackendEvents>;
```

The event is subscribed to using the `sdk.backend.onEvent()` method that listens for the `request-completed` event and uses its `data` to print to a list.

``` ts
  sdk.backend.onEvent("request-completed", (data) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Request to ${data.url} completed with status ${data.status} (ID: ${data.id})`;
    resultsList.insertBefore(listItem, resultsList.firstChild);
  });
```

### /frontend/src/index.ts

::: tip
To view the entire frontend script, including the UI - expand the following:

<details>
<summary>Example</summary>

``` ts
import type { Caido } from "@caido/sdk-frontend";
import type { API, BackendEvents } from "../../backend/src";

import "./styles/index.css";

export type CaidoSDK = Caido<API, BackendEvents>;

const createPage = (sdk: CaidoSDK) => {
  const sendButton = sdk.ui.button({
    variant: "primary",
    label: "Send Request",
  });

  const resultsList = document.createElement("ul");
  resultsList.style.listStyle = "none";
  resultsList.style.padding = "1rem";

  sdk.backend.onEvent("request-completed", (data) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Request to ${data.url} completed with status ${data.status} (ID: ${data.id})`;
    resultsList.insertBefore(listItem, resultsList.firstChild);
  });

  sendButton.addEventListener("click", async () => {
    await sdk.backend.sendRequest();
  });

  const headerContainer = document.createElement("div");
  headerContainer.appendChild(sendButton);

  const bodyContainer = document.createElement("div");
  bodyContainer.appendChild(resultsList);

  const card = sdk.ui.card({
    header: headerContainer,
    body: bodyContainer,
  });

  sdk.navigation.addPage("/request-monitor", {
    body: card,
  });
};

export const init = (sdk: CaidoSDK) => {
  createPage(sdk);
  
  sdk.sidebar.registerItem("Request Monitor", "/request-monitor", {
    icon: "fas fa-globe",
  });
};
```

</details>
:::

## The Result

<img alt="Event output." src="/_images/frontend_event_handler.png" center/>
