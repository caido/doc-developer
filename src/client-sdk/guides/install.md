# Install the SDK

The Caido Client SDK lets external scripts and tools interact with a Caido instance from outside the application. It handles authentication, GraphQL queries, and REST calls so you can focus on your automation logic.

::: info Requirements
- [Node.js](https://nodejs.org/en/) 18 or higher
- A package manager: [pnpm](https://pnpm.io/installation), [npm](https://www.npmjs.com/), or [yarn](https://yarnpkg.com/)
:::

## Add the package

Install [`@caido/sdk-client`](https://www.npmjs.com/package/@caido/sdk-client) into your project:

::: code-group
```bash [pnpm]
pnpm add @caido/sdk-client
```

```bash [npm]
npm install @caido/sdk-client
```

```bash [yarn]
yarn add @caido/sdk-client
```
:::

## Import the client

The SDK exposes a `Client` class as the entry point for every API call. Create an `index.ts` file and instantiate the client with the URL of your Caido instance:

### index.ts

```ts
import { Client } from "@caido/sdk-client";

const client = new Client({
  url: "http://localhost:8080",
});
```

If your TypeScript or runtime resolves the import without errors, the SDK is installed correctly.

Continue to [Base Setup](./base_setup.md) to configure authentication and make your first call.
