# Intercept Requests and Connections

The `onUpstream` hook allows backend plugins to intercept and modify HTTP requests before they are sent to their target. This enables powerful use cases such as adding authentication headers, routing requests through proxies, implementing custom authentication flows, and more.

::: info
The `onUpstream` callback is called synchronously, so it's important to keep operations fast to avoid impacting overall performance.
:::

## Understanding Upstream Plugins

Upstream plugins act similar to upstream proxies. They are configured as a set of rules in Caido's settings that map domains to plugins. For example, a rule might say "for domain `api.example.com`, call plugin `my-auth-plugin`". When a request matches a configured domain, Caido checks if the specified plugin has an `onUpstream` hook, and if so, invokes it synchronously before the request is sent.

The callback receives a `RequestSpecRaw` object representing the request that's about to be sent. You can:

- Modify the request (headers, URL, body, etc.)
- Provide a different connection to use
- Return `undefined` to let other plugins handle the request

::: tip
We recommend including upstream plugin rule management in your plugin's UI to simplify setup for users. This allows users to configure which domains your plugin should handle directly from your plugin's interface.
:::

## Registering the Upstream Callback

To intercept requests, register your callback using `sdk.events.onUpstream()` in your plugin's initialization function:

```ts
import type { DefineAPI, SDK } from "caido:plugin";
import type { RequestSpecRaw } from "caido:utils";

export type API = DefineAPI<{}>;

export function init(sdk: SDK<API>) {
  sdk.events.onUpstream(async (sdk, request: RequestSpecRaw) => {
    // Your upstream logic here
  });
}
```

The callback receives two parameters:

- `sdk`: The SDK instance (same as the one passed to `init`)
- `request`: A `RequestSpecRaw` object representing the request to be sent

## Return Values

Your callback can return different values to control how the request is handled:

- **`undefined`**: Let other upstream plugins handle the request (or proceed normally if no other plugins match)
- **`Connection`**: Use the provided connection to send the request
- **`RequestSpec`**: Use the modified request instead of the original
- **`{ connection?, request? }`**: Provide both a connection and/or a modified request

## Modifying Requests

You can modify requests by converting the `RequestSpecRaw` to a `RequestSpec` using `toSpec()`, making your changes, and returning the modified request.

### Adding Headers

Add custom headers to requests before they're sent:

```ts
import type { DefineAPI, SDK } from "caido:plugin";
import type { RequestSpecRaw } from "caido:utils";
import { RequestSpec } from "caido:utils";

export type API = DefineAPI<{}>;

export function init(sdk: SDK<API>) {
  sdk.events.onUpstream(async (sdk, request: RequestSpecRaw) => {
    const spec = request.toSpec();
    spec.setHeader("X-Custom-Header", "custom-value");
    spec.setHeader("Authorization", "Bearer token123");
    return spec;
  });
}
```

### Changing Request Properties

Modify the URL, method, body, or other request properties:

```ts
import type { DefineAPI, SDK } from "caido:plugin";
import type { RequestSpecRaw } from "caido:utils";
import { RequestSpec } from "caido:utils";

export type API = DefineAPI<{}>;

export function init(sdk: SDK<API>) {
  sdk.events.onUpstream(async (sdk, request: RequestSpecRaw) => {
    const spec = request.toSpec();

    // Change the target URL
    spec.setHost("proxy.example.com");
    spec.setPort(8080);
    spec.setTls(false);

    // Modify the method
    spec.setMethod("POST");

    // Change the body
    spec.setBody("Modified request body");

    return spec;
  });
}
```

::: warning
At the moment, modifying the host/port will **NOT** modify how the connection is opened by Caido.
If you need to change the target host of the connection, use `sdk.net.connect`.
:::

## Modifying Connections

You can provide a custom connection that will be used to send the request. This is useful for routing requests through proxies or reusing existing connections.

### Routing Through a Proxy

Create a new connection to a proxy server:

```ts
import type { DefineAPI, SDK } from "caido:plugin";
import type { RequestSpecRaw } from "caido:utils";

export type API = DefineAPI<{}>;

export function init(sdk: SDK<API>) {
  sdk.events.onUpstream(async (sdk, request: RequestSpecRaw) => {
    // Create a connection to a proxy server
    const proxyConnection = await sdk.net.connect("https://proxy.example.com:8080");

    return {
      connection: proxyConnection,
      request: request.toSpec(), // Optionally modify the request too
    };
  });
}
```

## Examples

### Implementing NTLM Authentication

Complex authentication flows like NTLM require multiple request-response exchanges. You can use `sdk.requests.send()` within your upstream callback to perform these exchanges, then return the authenticated connection and modified request.

This example demonstrates how to implement NTLM authentication by performing the three-message handshake:

```ts
import type { DefineAPI, SDK } from "caido:plugin";
import type { RequestSpecRaw } from "caido:utils";
import { RequestSpec } from "caido:utils";

export type API = DefineAPI<{}>;

const credentials = {
  username: "user",
  password: "pass",
  domain: "DOMAIN",
};

export function init(sdk: SDK<API>) {
  sdk.events.onUpstream(async (sdk, request: RequestSpecRaw) => {
    const domain = request.getHost();

    // Check if this domain requires NTLM authentication
    if (!domain.includes("example.com")) {
      return undefined; // Let other plugins handle it
    }

    try {
      const spec = request.toSpec();

      // Step 1: Send Type 1 message (negotiate)
      const type1Message = createType1Message("", "");
      spec.setHeader("Authorization", type1Message);
      spec.setHeader("Connection", "keep-alive");

      const { response, connection } = await sdk.requests.send(spec, {
        save: false,
        // plugins defaults to false when called from onUpstream, preventing recursion
      });

      // Step 2: Extract Type 2 message (challenge)
      const wwwAuthenticate = response.getHeader("WWW-Authenticate")?.[0];
      if (!wwwAuthenticate) {
        return undefined;
      }

      const type2Message = decodeType2Message(wwwAuthenticate);

      // Step 3: Create Type 3 message (authenticate)
      const type3Message = createType3Message(
        type2Message,
        credentials.username,
        credentials.password,
      );

      // Return the authenticated connection and request
      const finalSpec = request.toSpec();
      finalSpec.setHeader("Authorization", type3Message);
      finalSpec.setHeader("Connection", "Close");

      return {
        connection,
        request: finalSpec,
      };
    } catch (error) {
      sdk.console.error("NTLM authentication failed:", error);
      return undefined;
    }
  });
}
```

::: warning
When calling `sdk.requests.send()` from within an `onUpstream` callback, the `plugins` option defaults to `false` to prevent recursion. This ensures your helper request doesn't trigger upstream plugins again. However, when calling `sdk.requests.send()` from other functions (not within `onUpstream`), `plugins` defaults to `true`.
:::

### Routing Requests to Different Servers

Route requests to different servers based on domain or other criteria:

```ts
import type { DefineAPI, SDK } from "caido:plugin";
import type { RequestSpecRaw } from "caido:utils";
import { RequestSpec } from "caido:utils";

export type API = DefineAPI<{}>;

const routingRules: Record<string, string> = {
  "api.example.com": "https://api-backup.example.com",
  "cdn.example.com": "https://cdn-mirror.example.com",
};

export function init(sdk: SDK<API>) {
  sdk.events.onUpstream(async (sdk, request: RequestSpecRaw) => {
    const originalHost = request.getHost();
    const targetHost = routingRules[originalHost];

    if (!targetHost) {
      return undefined; // No routing rule, proceed normally
    }

    // Create connection to the target server
    const connection = await sdk.net.connect(targetHost);

    // Modify the request to use the new host
    const spec = request.toSpec();
    spec.setHost(new URL(targetHost).hostname);
    spec.setPort(parseInt(new URL(targetHost).port) || (targetHost.startsWith("https") ? 443 : 80));
    spec.setTls(targetHost.startsWith("https"));

    return {
      connection,
      request: spec,
    };
  });
}
```

### Logging and Monitoring Requests

Log requests before they're sent for monitoring or debugging purposes:

```ts
import type { DefineAPI, SDK } from "caido:plugin";
import type { RequestSpecRaw } from "caido:utils";

export type API = DefineAPI<{}>;

export function init(sdk: SDK<API>) {
  sdk.events.onUpstream(async (sdk, request: RequestSpecRaw) => {
    const spec = request.toSpec();
    const url = spec.getUrl();
    const method = spec.getMethod();
    const headers = spec.getHeaders();

    sdk.console.log(`[Upstream] ${method} ${url}`);
    sdk.console.log(`[Upstream] Headers: ${JSON.stringify(headers)}`);

    // Return undefined to proceed normally after logging
    return undefined;
  });
}
```

## Plugin Ordering and Multiple Plugins

When multiple upstream plugins are enabled for the same domain, they are called in the order configured by the user in Caido's upstream plugin settings. If your plugin returns `undefined`, the next plugin in the chain will be tried. If all plugins return `undefined`, the request proceeds normally.

This allows multiple plugins to work together:

- A logging plugin can log requests and return `undefined`
- An authentication plugin can add auth headers and return `undefined`
- A routing plugin can change the target server
