# Define Custom Backend Functions

In this guide, you will learn how to define and register custom backend functions that can be invoked from the frontend of your plugin.

Custom backend functions allow your frontend to communicate with your backend, enabling you to leverage server-side capabilities, interact with Caido's data, and expose plugin-specific functionality to users.

## When to Define Custom Backend Functions

Define custom backend functions when you need to:

- Execute logic on the backend that should not run in the frontend environment
- Access Caido's backend SDK services (requests, findings, HTTP utilities, etc.)
- Perform computationally expensive operations
- Interact with external systems securely (API keys, credentials)
- Perform operations that require persistence or state management
- Respond to frontend user actions with backend logic

## Type Safety with DefineAPI

To ensure type safety and autocomplete in both backend and frontend, use the `DefineAPI` utility to define your API contract.

### Defining Your API Type

Create a type that describes all available backend functions:

```ts
import { SDK, DefineAPI } from "caido:plugin";

export type BackendAPI = DefineAPI<{
  getRequestCount: () => Promise<number>;
  analyzeRequest: (requestId: string) => Promise<{ status: string; findings: string[] }>;
  processData: (input: string, options?: { verbose: boolean }) => Promise<string>;
}>;
```

Each key in the `DefineAPI` object represents a function name, and the value is the function signature that will be registered.

### Using DefineAPI in the Init Function

Pass your `BackendAPI` type to the `SDK` when defining your `init` function:

```ts
export function init(sdk: SDK<BackendAPI>) {
  // Register functions here
}
```

This ensures the SDK is aware of all available functions and provides autocomplete support in your IDE.

## Registering Functions with sdk.api.register()

Use `sdk.api.register()` to register a function with a name and implementation.

### Basic Function Registration

```ts
function getRequestCount(sdk: SDK) {
  return 42;
}

export type BackendAPI = DefineAPI<{
  getRequestCount: typeof getRequestCount;
}>;

export function init(sdk: SDK<BackendAPI>) {
  sdk.api.register("getRequestCount", getRequestCount);
}
```

The `sdk.api.register()` method takes two parameters:

1. **name** (`string`) — The function name as it will be called from the frontend
2. **callback** (`function`) — The function implementation

The function receives the `SDK` as its first parameter, followed by any arguments passed from the frontend.

### Functions with Parameters

```ts
function multiplyNumbers(sdk: SDK, a: number, b: number): number {
  return a * b;
}

export type BackendAPI = DefineAPI<{
  multiplyNumbers: typeof multiplyNumbers;
}>;

export function init(sdk: SDK<BackendAPI>) {
  sdk.api.register("multiplyNumbers", multiplyNumbers);
}
```

Parameters after `sdk` match the function signature and are passed directly from the frontend.

### Functions with Optional Parameters

```ts
function generateReport(
  sdk: SDK,
  requestId: string,
  options?: { detailed: boolean; format: "json" | "text" }
): Report {
  const detailed = options?.detailed ?? false;
  const format = options?.format ?? "json";
  // Generate report...
  return report;
}

export type BackendAPI = DefineAPI<{
  generateReport: typeof generateReport;
}>;

export function init(sdk: SDK<BackendAPI>) {
  sdk.api.register("generateReport", generateReport);
}
```

## Error Handling and Response Patterns

### Returning Values

Functions can return any serializable value: primitives, objects, or arrays.

```ts
function getMetrics(sdk: SDK): { requests: number; findings: number } {
  return {
    requests: 100,
    findings: 25,
  };
}
```

### Handling Async Operations

Use async functions when performing I/O or other asynchronous operations:

```ts
async function fetchExternalData(sdk: SDK, url: string): Promise<string> {
  const response = await fetch(url);
  const data = await response.text();
  return data;
}

export type BackendAPI = DefineAPI<{
  fetchExternalData: typeof fetchExternalData;
}>;
```

The frontend will receive the resolved promise value.

### Error Handling

Throw errors to communicate failures to the frontend:

```ts
function validateRequest(sdk: SDK, requestId: string): boolean {
  const request = sdk.requests.get(requestId);

  if (!request) {
    throw new Error(`Request with ID ${requestId} not found`);
  }

  return true;
}

export type BackendAPI = DefineAPI<{
  validateRequest: typeof validateRequest;
}>;

export function init(sdk: SDK<BackendAPI>) {
  sdk.api.register("validateRequest", validateRequest);
}
```

The error message will be transmitted to the frontend where it can be caught in a try-catch block.

## Simple Example: Counter Function

Here's a complete simple example that counts requests:

```ts
import { SDK, DefineAPI } from "caido:plugin";

let requestCount = 0;

function getCount(sdk: SDK): number {
  return requestCount;
}

function incrementCount(sdk: SDK): number {
  requestCount++;
  return requestCount;
}

export type BackendAPI = DefineAPI<{
  getCount: typeof getCount;
  incrementCount: typeof incrementCount;
}>;

export function init(sdk: SDK<BackendAPI>) {
  sdk.api.register("getCount", getCount);
  sdk.api.register("incrementCount", incrementCount);

  sdk.console.log("Counter functions registered");
}
```

## Advanced Example: Request Analysis

This example demonstrates a more advanced function that uses Caido's SDK to analyze requests:

```ts
import { SDK, DefineAPI } from "caido:plugin";

interface AnalysisResult {
  requestId: string;
  method: string;
  host: string;
  pathLength: number;
  hasQuery: boolean;
  responseStatus?: number;
}

async function analyzeRequest(
  sdk: SDK,
  requestId: string
): Promise<AnalysisResult> {
  // Fetch the request from Caido's data
  const request = await sdk.requests.get(requestId);

  if (!request) {
    throw new Error(`Request ${requestId} not found`);
  }

  const result: AnalysisResult = {
    requestId,
    method: request.getMethod(),
    host: request.getHost(),
    pathLength: request.getPath().length,
    hasQuery: request.getQuery() !== "",
  };

  // If a response exists, add its status
  const response = request.getResponse();
  if (response) {
    result.responseStatus = response.getCode();
  }

  sdk.console.log(`Analyzed request: ${requestId}`);
  return result;
}

function listAllRequests(sdk: SDK): string[] {
  const requests = sdk.requests.getAll();
  return requests.map(req => `${req.getMethod()} ${req.getHost()}${req.getPath()}`);
}

export type BackendAPI = DefineAPI<{
  analyzeRequest: typeof analyzeRequest;
  listAllRequests: typeof listAllRequests;
}>;

export function init(sdk: SDK<BackendAPI>) {
  sdk.api.register("analyzeRequest", analyzeRequest);
  sdk.api.register("listAllRequests", listAllRequests);

  sdk.console.log("Request analysis functions registered");
}
```

## Best Practices for Backend Function Design

### 1. Single Responsibility

Each function should have a clear, focused purpose:

```ts
// Good: Each function has a single responsibility
function getRequestCount(sdk: SDK): number { /* ... */ }
function getResponseCode(sdk: SDK, requestId: string): number { /* ... */ }

// Avoid: Functions doing too much
function processEverything(sdk: SDK, data: any): any { /* ... */ }
```

### 2. Type Safety

Always define explicit return types and parameter types:

```ts
// Good: Clear types
function analyze(sdk: SDK, id: string): AnalysisResult { /* ... */ }

// Avoid: Implicit types
function analyze(sdk: SDK, id) { /* ... */ }
```

### 3. Error Messages

Provide clear, descriptive error messages:

```ts
// Good: Descriptive error
if (!request) {
  throw new Error(`Request with ID ${requestId} not found. Check that the request exists before calling analyze().`);
}

// Avoid: Vague error
if (!request) {
  throw new Error("Not found");
}
```

### 4. Input Validation

Validate parameters before processing:

```ts
function processData(sdk: SDK, input: string): string {
  if (!input || input.trim().length === 0) {
    throw new Error("Input cannot be empty");
  }

  if (input.length > 10000) {
    throw new Error("Input exceeds maximum length of 10000 characters");
  }

  return input.toUpperCase();
}
```

### 5. Logging

Use `sdk.console.log()` to help with debugging:

```ts
function complexOperation(sdk: SDK, data: string): Result {
  sdk.console.log(`Starting complex operation with input: ${data}`);

  const step1 = doStep1(data);
  sdk.console.log(`Completed step 1`);

  const result = doStep2(step1);
  sdk.console.log(`Completed complex operation`);

  return result;
}
```

### 6. Performance Considerations

Avoid blocking operations and consider performance when working with large datasets:

```ts
// Good: Use efficient queries
function getRecentRequests(sdk: SDK): Request[] {
  // Caido provides efficient query methods
  return sdk.requests.query({ limit: 100 });
}

// Avoid: Processing unnecessary data
function getRecentRequests(sdk: SDK): Request[] {
  // Fetching all requests when you only need recent ones is inefficient
  return sdk.requests.getAll().slice(0, 100);
}
```

## Calling Backend Functions from the Frontend

Once you've defined and registered backend functions, call them from the frontend using `sdk.backend`:

```ts
// In your frontend code
const count = await sdk.backend.getCount();
const result = await sdk.backend.multiplyNumbers(5, 3);

try {
  const analysis = await sdk.backend.analyzeRequest("request-123");
} catch (error) {
  sdk.window.showToast(`Error: ${error.message}`, { variant: "error" });
}
```

::: tip
For a complete example of calling backend functions from the frontend, see [Call Custom Functions](/guides/rpc.md).
:::

## Next Steps

- Learn how to [Call Custom Functions](/guides/rpc.md) from your frontend
- Explore [Working with Requests](/reference/sdks/backend/requests.md) in the backend SDK
- See how to [Send Events to the Frontend](/guides/events.md) for event-driven communication
