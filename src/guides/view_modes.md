# Adding Custom Request View Modes

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

## View Mode Options

- `label` - The display name shown in the view mode selector
- `view` - A component definition that renders the custom view

## Component Definition

The `view` property accepts a `ComponentDefinition` object that includes a Vue component. The component receives the request data via props.

```ts
{
  component: YourVueComponent,
  props: {
    request: {}, // The request object will be passed automatically
  },
}
```

The Vue component should be defined in a `.vue` file and receive the request as a prop:

```vue
<script setup lang="ts">
defineProps<{
  request: {
    body?: string;
    method?: string;
    url?: string;
    headers?: Record<string, string>;
  };
}>();
</script>

<template>
  <!-- Your view content -->
</template>
```

## Examples

### JSON Formatter View

This example creates a custom view mode that formats request bodies as pretty-printed JSON. If the body isn't valid JSON, it displays an error message.

First, create a Vue component that receives the request data as props:

```vue
<!-- JSONFormatterView.vue -->
<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  request: {
    body?: string;
    method?: string;
    url?: string;
    headers?: Record<string, string>;
  };
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

Then, register the view mode with the component:

```ts
import type { Caido } from "@caido/sdk-frontend";
import JSONFormatterView from "./JSONFormatterView.vue";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  sdk.httpHistory.addRequestViewMode({
    label: "JSON Formatter",
    view: {
      component: JSONFormatterView,
      props: {
        request: {}, // The request object will be passed automatically
      },
    },
  });
};
```

### Visual Request Builder

This example creates an interactive form view that displays request method, URL, and headers as editable form fields. Users can modify these values directly in the visual interface.

First, create a Vue component with reactive form fields:

```vue
<!-- VisualBuilderView.vue -->
<script setup lang="ts">
import { reactive } from "vue";

const props = defineProps<{
  request: {
    body?: string;
    method?: string;
    url?: string;
    headers?: Record<string, string>;
  };
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

Then, register the view mode:

```ts
import type { Caido } from "@caido/sdk-frontend";
import VisualBuilderView from "./VisualBuilderView.vue";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  sdk.httpHistory.addRequestViewMode({
    label: "Visual Builder",
    view: {
      component: VisualBuilderView,
      props: {
        request: {}, // The request object will be passed automatically
      },
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
