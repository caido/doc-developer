# Logging Messages

The frontend SDK provides logging utilities to help you debug your plugin and track information at different severity levels.

## Logging Methods

The `sdk.log` object provides four logging methods:

```ts
sdk.log.debug("Debug message", { data: "value" });
sdk.log.info("Information message");
sdk.log.warn("Warning message");
sdk.log.error("Error message", error);
```

All logging methods accept variable arguments, allowing you to pass multiple values:

```ts
sdk.log.info("User action:", action, "with data:", data);
```

## Log Levels

### Debug

Use `debug()` for detailed diagnostic information that is typically only useful during development:

```ts
sdk.log.debug("Processing request", requestId);
```

### Info

Use `info()` for general informational messages:

```ts
sdk.log.info("Plugin initialized successfully");
```

### Warn

Use `warn()` for warning messages that indicate potential issues:

```ts
sdk.log.warn("API rate limit approaching:", remaining);
```

### Error

Use `error()` for error messages that indicate failures:

```ts
try {
  await performOperation();
} catch (err) {
  sdk.log.error("Operation failed:", err);
}
```

## Example: Logging User Actions

This example demonstrates logging at different levels during user interactions. It logs info messages when operations start and complete, error messages when operations fail, and shows corresponding toast notifications to the user.

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

const createPage = (sdk: CaidoSDK) => {
  const button = sdk.ui.button({
    variant: "primary",
    label: "Perform Action",
  });

  button.addEventListener("click", async () => {
    sdk.log.info("Button clicked, starting operation");
    
    try {
      const result = await performOperation();
      sdk.log.info("Operation completed successfully:", result);
      sdk.window.showToast("Success!", { variant: "success" });
    } catch (err) {
      sdk.log.error("Operation failed:", err);
      sdk.window.showToast("Error occurred", { variant: "error" });
    }
  });

  const card = sdk.ui.card({
    body: button,
  });

  sdk.navigation.addPage("/logging-example", {
    body: card,
  });
};

export const init = (sdk: CaidoSDK) => {
  sdk.log.info("Logging example plugin initialized");
  createPage(sdk);
};
```

## Best Practices

- Use appropriate log levels: reserve `debug()` for development, `info()` for normal operations, `warn()` for warnings, and `error()` for errors
- Include context in your log messages to make debugging easier
- Use structured data when logging objects or complex values
- Avoid logging sensitive information such as passwords or API keys

