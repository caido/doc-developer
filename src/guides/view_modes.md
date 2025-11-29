# Add View Modes

Add custom view modes to display requests in alternative formats, such as custom parsers, formatted views, or visual editors. Custom view modes appear alongside the default view options in the request viewer.

::: tip
Custom view modes are great for domain-specific request formats or when you need specialized visualization of request data.
:::

## Registering a View Mode

Call `addRequestViewMode()` on the appropriate SDK method for the page where you want the view mode to appear:

- HTTP History: `sdk.httpHistory.addRequestViewMode()`
- Replay: `sdk.replay.addRequestViewMode()`
- Search: `sdk.search.addRequestViewMode()`
- Sitemap: `sdk.sitemap.addRequestViewMode()`
- Automate: `sdk.automate.addRequestViewMode()`
- Intercept: `sdk.intercept.addRequestViewMode()`
- Findings: `sdk.findings.addRequestViewMode()`

::: info
View modes are available on all pages that display requests. Consider adding your view mode to multiple pages if it's useful across different contexts.
:::

```ts
sdk.httpHistory.addRequestViewMode({
  label: "My Custom View",
  view: {
    component: MyComponent,
  },
});
```

The `label` is the display name shown in the view mode selector. The `view.component` is your Vue component that renders the custom view.

## Using Component Props

View mode components automatically receive these props—you don't need to pass them when registering:

- `sdk` - The Caido SDK instance
- `request` - The request object of type `RequestFull`
- `requestDraft` - A writable request object of type `RequestDraft` (only in Intercept and Replay contexts)

::: warning
The request object structure may vary between pages. Test your view mode on the pages where you add it to ensure compatibility.
:::

For read-only contexts (HTTP History, Search, etc.):

```vue
<script setup lang="ts">
import type { Caido, RequestFull } from "@caido/sdk-frontend";

defineProps<{
  sdk: Caido;
  request: RequestFull;
}>();
</script>
```

For writable contexts (Intercept, Replay):

```vue
<script setup lang="ts">
import type { Caido, RequestFull, RequestDraft } from "@caido/sdk-frontend";

defineProps<{
  sdk: Caido;
  request: RequestFull;
  requestDraft: RequestDraft;
}>();
</script>
```

## Examples

### JSON Formatter View

A view mode that formats request bodies as pretty-printed JSON, displaying an error message if the body isn't valid JSON.

```vue
<script setup lang="ts">
import { computed } from "vue";
import type { Caido, RequestFull } from "@caido/sdk-frontend";

const props = defineProps<{
  sdk: Caido;
  request: RequestFull;
}>();

const formattedJson = computed(() => {
  try {
    const body = props.request.body || "{}";
    const json = JSON.parse(body);
    return JSON.stringify(json, null, 2);
  } catch {
    return "";
  }
});

const error = computed(() => {
  try {
    const body = props.request.body || "{}";
    JSON.parse(body);
    return null;
  } catch {
    return "Invalid JSON";
  }
});
</script>

<template>
  <div v-if="error" class="text-red-500 p-4">
    {{ error }}
  </div>
  <pre v-else class="p-4 bg-gray-100 rounded overflow-auto">
    {{ formattedJson }}
  </pre>
</template>
```

```ts
import type { Caido } from "@caido/sdk-frontend";
import JSONFormatterView from "./JSONFormatterView.vue";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  sdk.httpHistory.addRequestViewMode({
    label: "JSON Formatter",
    view: {
      component: JSONFormatterView,
    },
  });
};
```

### Editable Request View

A view mode for Intercept or Replay that allows editing the request using the `requestDraft` prop.

```vue
<script setup lang="ts">
import { ref } from "vue";
import type { Caido, RequestFull, RequestDraft } from "@caido/sdk-frontend";

const props = defineProps<{
  sdk: Caido;
  request: RequestFull;
  requestDraft: RequestDraft;
}>();

const editedBody = ref(props.request.body || "");

const updateBody = () => {
  props.requestDraft.setBody(editedBody.value);
  props.sdk.window.showToast("Request body updated", { variant: "success" });
};
</script>

<template>
  <div class="p-5">
    <label class="block mb-2">
      Request Body:
      <textarea
        v-model="editedBody"
        class="w-full p-2 mt-1 border rounded"
        rows="10"
      />
    </label>
    <button
      @click="updateBody"
      class="px-4 py-2 bg-blue-500 text-white rounded"
    >
      Update Request
    </button>
  </div>
</template>
```

```ts
import type { Caido } from "@caido/sdk-frontend";
import EditableRequestView from "./EditableRequestView.vue";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  sdk.intercept.addRequestViewMode({
    label: "Editable Body",
    view: {
      component: EditableRequestView,
    },
  });

  sdk.replay.addRequestViewMode({
    label: "Editable Body",
    view: {
      component: EditableRequestView,
    },
  });
};
```
