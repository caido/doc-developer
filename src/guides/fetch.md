# Sending a Fetch Request

Caido's [HTTP Module](/reference/modules/caido/http.md) provides an implementation of the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). With this module, you can create and send asynchronous HTTP requests and handle their responses.

In this guide, we'll cover how to create a custom endpoint that sends a `fetch` request in a backend plugin, and call it from a frontend plugin.

::: warning NOTE
The request and response objects of this module differ from those used in the [Backend SDK](/reference/sdks/backend/index.md) and [Workflow SDK](/reference/sdks/workflow/index.md). Due to this, their properties and methods differ as well. Additionally, they are not routed through the proxy and must adhere to the HTTP specification in order to be interpreted correctly.
:::

## fetch()

The `fetch()` function takes either a URL or a [Request](/reference/modules/caido/http.html#request) object and as it's `input` parameter and an optional [RequestOpts](/reference/modules/caido/http.html#requestopts) parameter that can be included to configure specific elements of the request. The function will return a Promise that resolves to a [Response](/reference/modules/caido/http.html#response) object:

``` ts
fetch(input: string | Request, init?: RequestOpts): Promise<Response>
```

## Creating and Sending a Request

First, the necessary type aliases are imported. `SDK` is the interface used to interact with Caido. `DefineAPI` is used to structure the API: definining what methods or endpoints are available, the parameters those methods accept and what types of values they return.

``` ts
import { SDK, DefineAPI } from "caido:plugin";
```

To send a request, you will also need to import the `Request` class and the `fetch()` function from the `caido:http` module.

``` ts
// Request object under the alias of FetchRequest.
import { Request as FetchRequest, fetch } from "caido:http";
```

Next, let's define an asynchronous function, specify request elements, and output the details to the [backend logs](https://docs.caido.io/reference/internal_files.html). In this example we define two URL query parameters, the `Accept` header, and the `User-Agent` header.

``` ts
export async function callApi(sdk: SDK) {
  // Create a URL with search parameters.
  const url = "https://example.com?" + new URLSearchParams({
    paramA: "a",
    paramB: "b"
  }).toString();

  // Create a new fetch request with various RequestOpts.
  const fetchRequest = new FetchRequest(url, {
    // If no method is explicitly set, defaults to GET.
    headers: {
      "Accept": "application/json",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36"
    }
  });

  // Log the fetch request details.
  sdk.console.log("\nFetch Request:");
  sdk.console.log(`URL: ${fetchRequest.url}`);
  sdk.console.log(`Method: ${fetchRequest.method}`);
  sdk.console.log("Headers: " + JSON.stringify(Object.fromEntries(fetchRequest.headers.entries())));
```

We must await for the request to be sent and processed before we are able to obtain data from the response. By accessing the response properties, we can print the data to the backend logs.

``` ts
  try {
    const response = await fetch(fetchRequest);
    
    // Log the response data.
    sdk.console.log("\nFetch Response:");
    sdk.console.log(`Status: ${response.status}`);
    sdk.console.log(`Status Text: ${response.statusText}`);
    sdk.console.log("Headers: " + JSON.stringify(Object.fromEntries(response.headers.entries())));
    
    return {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries())
    };
  } catch (error: any) {
    sdk.console.error("Error making fetch request: " + error.message);
    return `Error: ${error.message}`;
  }
}
```

Using the `DefineAPI` utility, we state that the `callApi` function is available to be called and link the definition using `typeof`. The definition is stored in the type alias `API` and exported so it can be used in other files.

``` ts
export type API = DefineAPI<{
  callApi: typeof callApi;
}>;
```

Next, we define an initialization function that will add the `API` type alias to the base `SDK` and register the `callApi` function under the name `"callApi"`.

``` ts
export function init(sdk: SDK<API>) {
  sdk.api.register("callApi", callApi);
}
```

::: tip
To view the entire script, expand the following:

<details>
<summary>Full Script</summary>

``` ts
import type { SDK, DefineAPI } from "caido:plugin";
import { Request as FetchRequest, fetch } from "caido:http";

export async function callApi(sdk: SDK) {
  // Create a URL with search parameters.
  const url = "https://example.com?" + new URLSearchParams({
    paramA: "a",
    paramB: "b"
  }).toString();

  // Create a new fetch request with various RequestOpts.
  const fetchRequest = new FetchRequest(url, {
    // If no method is explicitly set, defaults to GET.
    headers: {
      "Accept": "application/json",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36"
    }
  });

  // Log the fetch request details.
  sdk.console.log("\nFetch Request:");
  sdk.console.log(`URL: ${fetchRequest.url}`);
  sdk.console.log(`Method: ${fetchRequest.method}`);
  sdk.console.log("Headers: " + JSON.stringify(Object.fromEntries(fetchRequest.headers.entries())));

  try {
    const response = await fetch(fetchRequest);
    
    // Log the response data.
    sdk.console.log("\nFetch Response:");
    sdk.console.log(`Status: ${response.status}`);
    sdk.console.log(`Status Text: ${response.statusText}`);
    sdk.console.log("Headers: " + JSON.stringify(Object.fromEntries(response.headers.entries())));
    
    return {
      status: response.status,
      statusText: response.statusText,
      headers: Object.fromEntries(response.headers.entries())
    };
  } catch (error: any) {
    sdk.console.error("Error making fetch request: " + error.message);
    return `Error: ${error.message}`;
  }
}

export type API = DefineAPI<{
  callApi: typeof callApi;
}>;

export function init(sdk: SDK<API>) {
  sdk.api.register("callApi", callApi);
}
```

</details>
:::

::: info
Within the logs, the message will resemble:

```text
2025-04-29T16:06:01.503261Z DEBUG actix-rt|system:0|arbiter:23 api|controller: Calling plugin (6aff5b11-5baf-452a-8971-f4c6f1eb7859) function: callApi    
2025-04-29T16:06:01.503303Z  INFO plugin:6aff5b11-5baf-452a-8971-f4c6f1eb7859 plugin|executor: Calling method callApi (6aff5b11-5baf-452a-8971-f4c6f1eb7859)    
2025-04-29T16:06:01.503316Z DEBUG plugin:6aff5b11-5baf-452a-8971-f4c6f1eb7859 js|runtime: Triggering API callApi (6aff5b11-5baf-452a-8971-f4c6f1eb7859)    
2025-04-29T16:06:01.503391Z  INFO plugin:6aff5b11-5baf-452a-8971-f4c6f1eb7859 js|sdk: 
Fetch Request:    
2025-04-29T16:06:01.503406Z  INFO plugin:6aff5b11-5baf-452a-8971-f4c6f1eb7859 js|sdk: URL: https://example.com?paramA=a&paramB=b    
2025-04-29T16:06:01.503412Z  INFO plugin:6aff5b11-5baf-452a-8971-f4c6f1eb7859 js|sdk: Method: GET    
2025-04-29T16:06:01.503446Z  INFO plugin:6aff5b11-5baf-452a-8971-f4c6f1eb7859 js|sdk: Headers: {"accept":"application/json","user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36"}    
2025-04-29T16:06:02.856522Z  INFO plugin:6aff5b11-5baf-452a-8971-f4c6f1eb7859 js|sdk: 
Fetch Response:    
2025-04-29T16:06:02.856554Z  INFO plugin:6aff5b11-5baf-452a-8971-f4c6f1eb7859 js|sdk: Status: 200    
2025-04-29T16:06:02.856562Z  INFO plugin:6aff5b11-5baf-452a-8971-f4c6f1eb7859 js|sdk: Status Text: OK    
2025-04-29T16:06:02.856650Z  INFO plugin:6aff5b11-5baf-452a-8971-f4c6f1eb7859 js|sdk: Headers: {"accept-ranges":"bytes","content-type":"text/html","etag":"\"84238dfc8092e5d9c0dac8ef93371a07:1736799080.121134\"","last-modified":"Mon, 13 Jan 2025 20:11:20 GMT","vary":"Accept-Encoding","content-encoding":"gzip","cache-control":"max-age=2775","date":"Tue, 29 Apr 2025 16:06:01 GMT","alt-svc":"h3=\":443\"; ma=93600,h3-29=\":443\"; ma=93600,quic=\":443\"; ma=93600; v=\"43\"","content-length":"648","connection":"keep-alive"}
```

:::

::: tip
To view how the endpoint can be called with a frontend plugin, expand the following:

<details>
<summary>Full Script</summary>

``` ts
import type { Caido } from "@caido/sdk-frontend";
import type { API } from "../../backend/src/index.ts";

export type CaidoSDK = Caido<API>;

const createPage = (sdk: CaidoSDK) => {

    const resultText = document.createElement("p");
    resultText.textContent = "Result will appear here.";

    const calculateButton = sdk.ui.button({
        variant: "primary",
        label: "Fetch",
    });

    calculateButton.addEventListener("click", async () => {
        const result = await sdk.backend.callApi();
        resultText.textContent = `Result: ${JSON.stringify(result, null, 2)}`;
    });

    const container = document.createElement("div");
    container.appendChild(calculateButton);
    container.appendChild(resultText);

    const card = sdk.ui.card({
        body: container
    });

    sdk.navigation.addPage("/fetch-page", {
        body: card
    });
}

export function init(sdk: CaidoSDK) {
    createPage(sdk);
    
    sdk.sidebar.registerItem("Fetch", "/fetch-page", {
        icon: "fas fa-paper-plane"
    });
}
```

</details>
:::
