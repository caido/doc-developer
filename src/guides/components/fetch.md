# Sending a Fetch Request

Caido's [HTTP Module](/reference/modules/caido/http.md) provides an implementation of the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). With this module, you can create and send asynchronous HTTP requests and handle their responses.

::: warning NOTE
The request and response objects of this module differ from those used in the [Backend SDK](/reference/sdks/backend/index.md) and [Workflow SDK](/reference/sdks/workflow/index.md). Due to this, their properties and methods differ as well. Additionally, they are not routed through the proxy and must adhere to the HTTP specification in order to be interpreted correctly.
:::

## fetch()

The `fetch()` function takes either a URL or a [Request](/reference/modules/caido/http.html#request) object and as it's `input` parameter and an optional [RequestOpts](/reference/modules/caido/http.html#requestopts) parameter that can be included to configure specific elements of the request. The function will return a Promise that resolves to a [Response](/reference/modules/caido/http.html#response) object:

``` ts
fetch(input: string | Request, init?: RequestOpts): Promise<Response>
```

## Creating and Sending a Request

To send a request, you will first need to import the `Request` class and the `fetch()` function from the `caido:http` module.

``` js
// Request object under the alias of FetchRequest.
import { Request as FetchRequest, fetch } from "caido:http";
```

Next, define an asynchronous function and any optional element configurations.

``` js
export async function run(input, sdk) {

  // Check if Caido request is in scope.
  if (!input.request || !sdk.requests.inScope(input.request)) {
    sdk.console.log("Request is not in scope.");
    return;
  }

  // Create a new fetch request with various RequestOpts.
  const fetchRequest = new FetchRequest("https://example.com?paramA=a&paramB=b", {
    // If no method is explicitly set, defaults to GET.
    headers: {
      "Accept": "application/json",
      "User-Agent": "Caido/1.0"
    }
  });

  // Log the fetch request details.
  sdk.console.log("\nFetch Request:");
  sdk.console.log(`URL: ${fetchRequest.url}`);
  sdk.console.log(`Method: ${fetchRequest.method}`);
  sdk.console.log("Headers:", JSON.stringify(Object.fromEntries(fetchRequest.headers.entries()), null, 2));
```

We must await for the request to be sent and processed before we are able to obtain data from the response. By accessing the response properties, we can print the data to the backend logs.

``` js
  try {
    const response = await fetch(fetchRequest);
    
    // Log the response data.
    sdk.console.log("\nFetch Response:");
    sdk.console.log(`Status: ${response.status}`);
    sdk.console.log(`Status Text: ${response.statusText}`);
    sdk.console.log("Headers:", JSON.stringify(Object.fromEntries(response.headers.entries()), null, 2));
  } catch (error) {
    sdk.console.error("Error making fetch request:", error);
    return `Error: ${error.message}`;
  }
}
```

::: tip
To view the entire script, expand the following:

<details>
<summary>Full Script</summary>

``` js
/**
 * @param {HttpInput} input
 * @param {SDK} sdk
 * @returns {MaybePromise<Data | undefined>}
 */

// Request object under the alias of FetchRequest.
import { Request as FetchRequest, fetch } from "caido:http";

export async function run(input, sdk) {

  // Check if Caido request is in scope.
  if (!input.request || !sdk.requests.inScope(input.request)) {
    sdk.console.log("Request is not in scope.");
    return;
  }

  // Create a new fetch request with various RequestOpts.
  const fetchRequest = new FetchRequest("https://example.com?paramA=a&paramB=b", {
    // If no method is explicitly set, defaults to GET.
    headers: {
      "Accept": "application/json",
      "User-Agent": "Caido/1.0"
    }
  });

  // Log the fetch request details.
  sdk.console.log("\nFetch Request:");
  sdk.console.log(`URL: ${fetchRequest.url}`);
  sdk.console.log(`Method: ${fetchRequest.method}`);
  sdk.console.log("Headers:", JSON.stringify(Object.fromEntries(fetchRequest.headers.entries()), null, 2));

  try {
    const response = await fetch(fetchRequest);
    
    // Log the response data.
    sdk.console.log("\nFetch Response:");
    sdk.console.log(`Status: ${response.status}`);
    sdk.console.log(`Status Text: ${response.statusText}`);
    sdk.console.log("Headers:", JSON.stringify(Object.fromEntries(response.headers.entries()), null, 2));
  } catch (error) {
    sdk.console.error("Error making fetch request:", error);
    return `Error: ${error.message}`;
  }
}
```

</details>
:::

::: info
Within the logs, the message will resemble:

```
2025-04-15T17:57:34.951927Z DEBUG executor:0|arbiter:4 js|sdk|requests: Checking if request is in scope    
2025-04-15T17:57:34.951985Z  INFO executor:0|arbiter:4 js|sdk: 
Fetch Request:    
2025-04-15T17:57:34.952003Z  INFO executor:0|arbiter:4 js|sdk: URL: https://example.com?paramA=a&paramB=b    
2025-04-15T17:57:34.952013Z  INFO executor:0|arbiter:4 js|sdk: Method: GET    
2025-04-15T17:57:34.952052Z  INFO executor:0|arbiter:4 js|sdk: Headers:, {
  "accept": "application/json",
  "user-agent": "Caido/1.0"
}    
2025-04-15T17:57:35.160974Z  INFO executor:0|arbiter:4 js|sdk: 
Fetch Response:    
2025-04-15T17:57:35.160995Z  INFO executor:0|arbiter:4 js|sdk: Status: 200    
2025-04-15T17:57:35.161002Z  INFO executor:0|arbiter:4 js|sdk: Status Text: OK    
2025-04-15T17:57:35.161071Z  INFO executor:0|arbiter:4 js|sdk: Headers:, {
  "accept-ranges": "bytes",
  "content-type": "text/html",
  "etag": "\"84238dfc8092e5d9c0dac8ef93371a07:1736799080.121134\"",
  "last-modified": "Mon, 13 Jan 2025 20:11:20 GMT",
  "vary": "Accept-Encoding",
  "content-encoding": "gzip",
  "cache-control": "max-age=710",
  "date": "Tue, 15 Apr 2025 17:57:33 GMT",
  "alt-svc": "h3=\":443\"; ma=93600,h3-29=\":443\"; ma=93600,quic=\":443\"; ma=93600; v=\"43\"",
  "content-length": "648",
  "connection": "keep-alive"
}
```

:::
