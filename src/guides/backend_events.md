# Handling Backend Events

In this guide, you will learn how to handle backend events in the frontend of your Caido plugin.

This can be accomplished using the three event handlers provided by the SDK:

## onProjectChange

An event will be triggered when the active [Project](https://docs.caido.io/quickstart/beginner_guide/first_steps_with_caido/project.html) changes.

### /packages/backend/src/index.ts

``` ts
import type { DefineAPI, SDK } from "caido:plugin";

export type API = DefineAPI<{}>;

let previousProject: string | null = null;

export function init(sdk: SDK<API>) {
  sdk.events.onProjectChange((sdk, project) => {
    const newProjectName = project?.getName() ?? null;
    sdk.console.log(`Project changed from "${previousProject}" to "${newProjectName}."`);
    previousProject = newProjectName;
  });
}
```

## The Result

``` txt
Project changed from "Caido" to "Example".
```

## onInterceptRequest and onInterceptResponse

An event will be triggered with `onInterceptRequest` and `onInterceptResponse` when a request or response is proxied through Caido respectively.

### /packages/backend/src/index.ts

``` ts
import type { DefineAPI, SDK } from "caido:plugin";
import type { Request, Response } from "caido:utils";

export type API = DefineAPI<{}>;

export function init(sdk: SDK<API>) {
  sdk.events.onInterceptRequest((sdk, request: Request) => {
    sdk.console.log(`Intercepted ${request.getMethod()} request to ${request.getUrl()}`);
  });

  sdk.events.onInterceptResponse((sdk, request: Request, response: Response) => {
    sdk.console.log(`Intercepted response from ${request.getUrl()} with status ${response.getCode()}`);
  });
}
```

## The Result

``` txt
Intercepted GET request to https://example.com/path
Intercepted response from https://example.com/path with status 304
```
