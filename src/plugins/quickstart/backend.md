# Backend Component Basics

The backend component of a plugin exposes functions that the frontend can call.

In the Demo Plugin, when the `Generate random string` button is clicked, `onGenerateClick` calls `sdk.backend.generateRandomString(10)`, assigns the returned string to `myVar`, and the read-only `InputText` updates to show that value.

```ts
import type { DefineAPI, SDK } from "caido:plugin";

const generateRandomString = (sdk: SDK, length: number) => {
  const randomString = Math.random()
    .toString(36)
    .substring(2, length + 2);
  sdk.console.log(`Generating random string: ${randomString}`);
  return randomString;
};

export type API = DefineAPI<{
  generateRandomString: typeof generateRandomString;
}>;

export function init(sdk: SDK<API>) {
  sdk.api.register("generateRandomString", generateRandomString);
}
```
