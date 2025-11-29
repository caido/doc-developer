# Add View Modes

You can add custom view modes to display requests in alternative formats, such as custom parsers, formatted views, or visual editors. Custom view modes appear alongside the default view options in the request viewer.

## Adding a View Mode

View modes are available on multiple pages:

- HTTP History (`sdk.httpHistory.addRequestViewMode()`)
- Replay (`sdk.replay.addRequestViewMode()`)
- Search (`sdk.search.addRequestViewMode()`)
- Sitemap (`sdk.sitemap.addRequestViewMode()`)
- Automate (`sdk.automate.addRequestViewMode()`)
- Intercept (`sdk.intercept.addRequestViewMode()`)
- Findings (`sdk.findings.addRequestViewMode()`)

```ts
sdk.httpHistory.addRequestViewMode({
  label: "My Custom View",
  view: myComponent,
});
```

## Configuring View Modes

- `label` - The display name shown in the view mode selector
- `view` - A component definition that renders the custom view

## Defining View Mode Components

The `view` property accepts a `ComponentDefinition` object that includes a Vue component. The component automatically receives certain props that you don't need to pass explicitly.

## Using Component Props in View Modes

Request view mode components automatically receive the following implicit props:

- `sdk` - The Caido SDK instance
- `request` - The request object of type `RequestFull`

For writable contexts (Intercept and Replay), components also receive:

- `requestDraft` - A writable request object of type `RequestDraft`

You don't need to pass these props when registering the view mode. Simply define them in your Vue component's props:

```vue
<script setup lang="ts">
import type { Caido, RequestFull } from "@caido/sdk-frontend";

defineProps<{
  sdk: Caido;
  request: RequestFull;
}>();
</script>

<template>
  <!-- Your view content -->
</template>
```

For writable contexts (Intercept or Replay), you can also access the draft:

```vue
<script setup lang="ts">
import type { Caido, RequestFull, RequestDraft } from "@caido/sdk-frontend";

defineProps<{
  sdk: Caido;
  request: RequestFull;
  requestDraft: RequestDraft;
}>();
</script>

<template>
  <!-- Your view content -->
</template>
```

When registering the view mode, you don't need to pass these props:

```ts
{
  component: YourVueComponent,
  // No need to pass sdk, request, or requestDraft - they're passed automatically
}
```

## Examples

### JSON Formatter View

This example creates a custom view mode that formats request bodies as pretty-printed JSON. If the body isn't valid JSON, it displays an error message.

First, create a Vue component that receives the request data as props. The SDK and request are passed automatically:

```vue
<!-- JSONFormatterView.vue -->
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

Then, register the view mode with the component. You don't need to pass the SDK or request props:

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

### Visual Request Builder

This example creates an interactive form view that displays request method, URL, and headers as editable form fields. Users can modify these values directly in the visual interface.

First, create a Vue component with reactive form fields. The SDK and request are passed automatically:

```vue
<!-- VisualBuilderView.vue -->
<script setup lang="ts">
import { reactive } from "vue";
import type { Caido, RequestFull } from "@caido/sdk-frontend";

const props = defineProps<{
  sdk: Caido;
  request: RequestFull;
}>();

const methods = ["GET", "POST", "PUT", "DELETE", "PATCH"];

const localRequest = reactive({
  method: props.request.method || "GET",
  url: props.request.url || "",
  headers: { ...(props.request.headers || {}) },
});

const updateHeaderKey = (oldKey: string, newKey: string) => {
  const value = localRequest.headers[oldKey];
  delete localRequest.headers[oldKey];
  localRequest.headers[newKey] = value;
};

const updateHeaderValue = (key: string, value: string) => {
  localRequest.headers[key] = value;
};
</script>

<template>
  <div class="p-5">
    <label>
      Method:
      <select v-model="localRequest.method">
        <option v-for="method in methods" :key="method" :value="method">
          {{ method }}
        </option>
      </select>
    </label>

    <label class="block mt-4">
      URL:
      <input
        v-model="localRequest.url"
        type="text"
        class="w-full p-2 mt-1"
      />
    </label>

    <h3 class="mt-4">Headers</h3>
    <div
      v-for="(value, key, index) in localRequest.headers"
      :key="index"
      class="flex gap-2 mb-2"
    >
      <input
        :value="key"
        class="flex-1 p-2"
        @input="updateHeaderKey(index, $event.target.value)"
      />
      <input
        :value="value"
        class="flex-[2] p-2"
        @input="updateHeaderValue(key, $event.target.value)"
      />
    </div>
  </div>
</template>
```

Then, register the view mode. You don't need to pass the SDK or request props:

```ts
import type { Caido } from "@caido/sdk-frontend";
import VisualBuilderView from "./VisualBuilderView.vue";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  sdk.httpHistory.addRequestViewMode({
    label: "Visual Builder",
    view: {
      component: VisualBuilderView,
    },
  });
};
```

### Editable Request View (Writable Context)

This example creates a view mode for Intercept or Replay that allows editing the request using the `requestDraft` prop. The component receives both `request` (read-only) and `requestDraft` (writable) props automatically.

First, create a Vue component that uses the draft to modify the request:

```vue
<!-- EditableRequestView.vue -->
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

Then, register the view mode for Intercept or Replay:

```ts
import type { Caido } from "@caido/sdk-frontend";
import EditableRequestView from "./EditableRequestView.vue";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  // For Intercept
  sdk.intercept.addRequestViewMode({
    label: "Editable Body",
    view: {
      component: EditableRequestView,
    },
  });

  // For Replay
  sdk.replay.addRequestViewMode({
    label: "Editable Body",
    view: {
      component: EditableRequestView,
    },
  });
};
```

::: tip
Custom view modes are great for domain-specific request formats or when you need specialized visualization of request data.
:::

::: info
View modes are available on all pages that display requests. Consider adding your view mode to multiple pages if it's useful across different contexts.
:::

::: warning
The request object structure may vary between pages. Test your view mode on the pages where you add it to ensure compatibility.
:::
