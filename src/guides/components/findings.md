# Using Findings

Any requests or responses can be parsed for notable characteristics based on conditional statements using [Findings](https://docs.caido.io/guides/findings.html). As Caido proxies traffic, if it detects what you are looking for, an alert will be generated to draw your attention.

## Creating Findings

To create a Finding, use `sdk.findings.create()`. The `title`, `reporter` and `request` properties are required:

``` ts
await sdk.findings.create({
  title: "Title", // Label your Finding.
  description: "Description", // Add a description (optional).
  reporter: "Reporter", // Specify which plugin discovered the Finding.
  dedupe: `${request.getHost()}-${request.getPath()}`, // Prevents multiple alerts for request with matching characteristics (optional).
  request, // The associated request.
});
```

## Conditional Findings

You can then set conditions that must be met such as only creating a Finding if the request recieved a 200 response:

``` ts
import type { DefineAPI, SDK } from "caido:plugin";
import type { Request, Response } from "caido:utils";

export type API = DefineAPI<{
  // No API methods needed for this passive functionality.
}>;

export function init(sdk: SDK<API>) {
  // Listen for intercepted responses.
  sdk.events.onInterceptResponse(
    async (
      sdk: SDK<API>, 
      request: Request, 
      response: Response
    ) => {
    try {
      // Only create Findings for 200 responses.
      if (response.getCode() === 200) {
        await sdk.findings.create({
          title: `Success Response ${response.getCode()}`,
          description: `Request ID: ${request.getId()}\nResponse Code: ${response.getCode()}`,
          reporter: "Response Logger Plugin",
          request: request,
          dedupeKey: `${request.getPath()}-${response.getCode()}`
        });

        sdk.console.log(`Created finding for successful request ${request.getId()}`);
      }
    } catch (err) {
      sdk.console.error(`Error creating finding: ${err}`);
    }
  });
}
 ```

::: tip
View all of the properties that can be accessed for [request](https://developer.caido.io/reference/sdks/backend/#request) and [response](https://developer.caido.io/reference/sdks/backend/#response-3) objects.
:::

## The Result

<img alt="Finding alert." src="/_images/findings.png" centered />
