# Sending Events from the Backend to Frontend

In this guide, you will learn how to facilitate event-driven communication between the backend and the frontend components of a plugin.

This can be accomplished using the `onInterceptResponse()` method provided by the Caido SDK.

The event can then be subscribed to on the frontend using `sdk.backend.onEvent()`.

## Registering an API Endpoint and Event

To demonstrate, we will create a plugin that emits an event containing response data to the frontend.

### /packages/backend/src/index.ts

``` ts
import { SDK, DefineAPI, DefineEvents } from "caido:plugin";

type RequestEvent = {
  id: string;
  status: number;
  url: string;
};

export type BackendEvents = DefineEvents<{
  "request-completed": (data: RequestEvent) => void;
}>;

export type BackendAPI = DefineAPI<{}>;

export function init(sdk: SDK<BackendAPI, BackendEvents>) {
  sdk.events.onInterceptResponse((sdk, request, response) => {
    sdk.api.send("request-completed", {
      id: response.getId(),
      status: response.getCode(),
      url: `${request.getHost()}:${request.getPort()}${request.getPath()}${request.getQuery()}`
    });
  });
}
```

### Script Breakdown

First, import the required dependencies. `SDK` is the interface used to interact with Caido. `DefineAPI` is used to structure the API: definining what methods or endpoints are available, the parameters those methods accept and what types of values they return. `DefineEvents` is used to structure events that can be sent between the backend and frontend.

``` ts
import { SDK, DefineAPI, DefineEvents } from "caido:plugin";
```

Next, create a type alias that defines the data and data type of the event message that will be sent to the frontend.

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

Next, we define an empty API type using `DefineAPI` to satisy the `SDK` parameter requirements.

::: tip
To learn how to create custom API endpoints, click [here](/guides/components/rpc.html).
:::

``` ts
export type BackendAPI = DefineAPI<{}>;
```

The `init` function includes the `BackendAPI` and `BackendEvents` as `SDK` types, which tells the SDK what API calls and events are available to use. When a response to a request is received with `onInterceptResponse()`, the callback function will use various `get` methods available to request and response objects to extract the data. Once the data is collected, the event is sent to the frontend using the `sdk.api.send()` method.

``` ts
export function init(sdk: SDK<BackendAPI, BackendEvents>) {
  sdk.events.onInterceptResponse((sdk, request, response) => {
    sdk.api.send("request-completed", {
      id: response.getId(),
      status: response.getCode(),
      url: `${request.getHost()}:${request.getPort()}${request.getPath()}${request.getQuery()}`
    });
  });
}
```

## Receiving the Event

Now that we've created our endpoint in the backend plugin, we can call `sendRequest` which will execute the function and emit the `request-completed` event with the response data.

The API and events are made available to the frontend script by extending the `Caido` inferface with the imports.

``` ts
export type CaidoSDK = Caido<BackendAPI, BackendEvents>;
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
import type { BackendAPI, BackendEvents } from "../../backend/src";

import "./styles/index.css";

export type CaidoSDK = Caido<BackendAPI, BackendEvents>;

const createPage = (sdk: CaidoSDK) => {
  const resultsList = document.createElement("ul");
  resultsList.style.listStyle = "none";
  resultsList.style.padding = "1rem";

  // Subscribe to backend events.
  sdk.backend.onEvent("request-completed", (data) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Request to ${data.url} completed with status ${data.status} (ID: ${data.id})`;
    resultsList.insertBefore(listItem, resultsList.firstChild);
  });

  // Create card.
  const card = sdk.ui.card({
    body: resultsList,
  });

  // Add page.
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

<img alt="Event output." src="/_images/event_handler_response_data.png" center/>
