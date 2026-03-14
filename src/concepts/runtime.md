# Runtime

All extensions to Caido are written in JavaScript. This unified approach allows a consistent development experience, but the JavaScript runtime environment differs depending on where your code runs.

When you develop a frontend plugin, backend plugin, or workflow, you work with different JavaScript engines, available modules, and global objects. Understanding these differences is crucial for writing reliable plugins and knowing what APIs and patterns are available to you.

## Overview

Caido's plugin system uses two distinct JavaScript runtimes:

- **Frontend plugins** run in the browser (or Electron shell), using the standard browser JavaScript environment
- **Backend plugins and workflows** run in [QuickJS](https://github.com/bellard/quickjs), a lightweight embedded JavaScript engine

Both runtimes support modern JavaScript features, but differ in available modules, globals, and the APIs you can access.

## Frontend Runtime

Frontend plugins execute within the browser or Electron environment. This means you have access to the full browser JavaScript API and the [Caido Frontend SDK](/reference/sdks/frontend/).

### Available Globals and APIs

In the frontend runtime, you can use:

- **DOM APIs** — `document`, `window`, `Element`, `EventTarget`, and related APIs for UI manipulation
- **Web APIs** — `fetch`, `WebSocket`, `localStorage`, `IndexedDB`, `setTimeout`, `setInterval`, and other standard browser APIs
- **ES2023+ features** — The frontend environment typically supports modern JavaScript features up to ES2023 and beyond, depending on your browser or Electron version
- **TypeScript** — The plugin template supports TypeScript with full type checking via `@caido/sdk-frontend`

### Module Support

Frontend plugins use **ES modules** (ESM) by default. You can:

- Import from npm packages (bundled with your plugin)
- Use dynamic imports (`import()`)
- Import the Caido SDK and other dependencies

### Key Differences from Backend

The frontend runtime does not have access to:

- File system operations (beyond `localStorage` or `IndexedDB`)
- Child processes or system commands
- Direct network operations at the OS level (HTTP requests use the `fetch` API)
- Node.js-style modules like `fs`, `path`, or `child_process`

## Backend Runtime

Backend plugins and workflows execute in [QuickJS](https://github.com/bellard/quickjs), a small embedded JavaScript engine designed for portability and embedded use. This environment provides a secure, sandboxed execution context.

### Engine and Language Support

QuickJS supports most of the [ES2023 specification](https://tc39.es/ecma262/2023/). While the engine is compliant with the specification, some newer JavaScript features (ES2024 and beyond) may not be available. For the most up-to-date information on what is supported, check the [QuickJS documentation](https://bellard.org/quickjs/).

### Available Globals

The backend runtime provides:

- **Standard globals** — `Object`, `Array`, `String`, `Number`, `Math`, `Date`, `JSON`, `Promise`, `Map`, `Set`, `Symbol`, and other built-in objects
- **EventEmitter** — `EventEmitter` for event-driven patterns (similar to Node.js)
- **Streams** — `ReadableStream` and `WritableStream` for handling data streams
- **Buffer** — `Buffer` for binary data handling (see [Dealing with Binary Data](/concepts/binary.md))
- **setTimeout / setInterval** — For scheduling async operations
- **console** — `console.log`, `console.error`, etc. for debugging

The backend runtime does **not** provide browser globals like `window`, `document`, `fetch`, or DOM APIs.

### Available Modules

By default, QuickJS does not include Node.js modules. However, Caido re-implements several popular modules to bridge the gap:

- **[`child_process`](/concepts/child_process.md)** — Spawn and manage child processes
- **`fs` / `fs/promises`** — File system operations (read, write, delete files and directories)
- **`path`** — Path manipulation and resolution
- **`os`** — Operating system information and utilities
- **`net`** — TCP sockets and basic networking
- **`crypto`** — Cryptographic functions (partially implemented)
- **`buffer`** — Buffer manipulation and encoding/decoding
- **`sqlite`** — Async SQLite database access (custom implementation)

For the most up-to-date list and detailed API signatures, refer to the TypeScript type definitions in the SDK:

- `@caido/sdk-backend` for backend plugins
- `@caido/sdk-workflow` for workflows

### Module Usage

In the backend runtime, you use CommonJS-style imports:

```javascript
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
```

You can also use dynamic imports:

```javascript
const fs = await import('fs');
```

### Limitations

The backend runtime has some intentional limitations:

- **No Node.js modules** — Only Caido's re-implemented modules are available
- **No npm packages** — You cannot import external npm packages (only what's provided by Caido)
- **Sandboxed execution** — The runtime cannot access arbitrary system resources without explicit module support
- **No browser APIs** — DOM and Web APIs like `fetch`, `localStorage`, or `WebSocket` are not available

If you need HTTP requests, use the [Backend SDK](/reference/sdks/backend/) to make requests through Caido's API. If you need functionality not provided by Caido's modules, consider using a [backend plugin](/concepts/package.md) with exposed methods that your frontend can call.

## Detecting the Runtime in Your Code

Sometimes you may write code that could run in both frontend and backend contexts (though this is rare). You can detect which runtime you're in:

### Frontend Detection

```javascript
// Check for browser globals
if (typeof window !== 'undefined') {
  // Running in frontend (browser/Electron)
  console.log('Frontend runtime');
}

// Or check for specific DOM APIs
if (typeof document !== 'undefined') {
  // Running in frontend
}
```

### Backend Detection

```javascript
// Backend-specific globals like EventEmitter (from require)
const { EventEmitter } = require('events');

// Or check for absence of browser globals
if (typeof window === 'undefined') {
  // Likely running in backend (QuickJS)
  console.log('Backend runtime');
}
```

## Module and Import Compatibility

When choosing how to structure your plugin:

- **Use ES modules** in the frontend (your plugin bundler handles this)
- **Use CommonJS** in the backend (via `require()`)
- **Do not mix** frontend and backend code in the same file — separate them by directory or entrypoint
- **Reference the appropriate SDK** — Import from `@caido/sdk-frontend` or `@caido/sdk-backend`, not both in the same file

This separation ensures your code remains clear and prevents runtime errors when a module is unavailable.

## What's Next?

- Explore the [Backend SDK reference](/reference/sdks/backend/index.md) for available backend APIs
- Explore the [Frontend SDK reference](/reference/sdks/frontend/index.md) for available frontend APIs
- Learn about [Plugins vs Workflows](/concepts/workflow.md) to understand when to use each approach
- See [Dealing with Binary Data](/concepts/binary.md) for handling binary content in the backend runtime
