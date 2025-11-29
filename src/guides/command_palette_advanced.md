# Customize Command Palette

Beyond registering commands, you can push custom views onto the command palette stack to create interactive command palette experiences, custom search interfaces, and multi-step commands.

::: tip
Custom command palette views enable rich, interactive experiences beyond simple command execution. Use them for complex workflows that benefit from user interaction.
:::

## Pushing a Custom View

To push a custom view onto the command palette, create a Vue component and pass it using the `ComponentDefinition` format:

```ts
import CustomView from "./CustomView.vue";

sdk.commandPalette.pushView({
  type: "Custom",
  definition: {
    component: CustomView,
  },
});
```

Command palette components automatically receive the SDK as a prop. You can also pass additional props and events:

```ts
sdk.commandPalette.pushView({
  type: "Custom",
  definition: {
    component: CustomView,
    props: {
      initialValue: "Hello",
    },
    events: {
      onComplete: () => {
        console.log("Completed");
      },
    },
  },
});
```

::: info
Pushed views are added to a stack. Users can navigate back through the stack using standard command palette navigation.
:::

::: warning
Keep custom views focused and lightweight. Complex views may impact command palette performance and user experience.
:::

## Using Component Props

Command palette components automatically receive the SDK as an implicit prop. If your Vue component defines an `sdk` prop, it will automatically receive the SDK instance:

```vue
<script setup lang="ts">
import type { Caido } from "@caido/sdk-frontend";

const props = defineProps<{
  sdk: Caido;
}>();
</script>
```

## Examples

### Custom Search Interface

This example creates a custom search interface within the command palette. It provides a text input that filters available commands in real-time as you type, displaying matching commands as clickable items.

```vue
<!-- CustomSearchView.vue -->
<script setup lang="ts">
import { ref, computed } from "vue";
import type { Caido } from "@caido/sdk-frontend";

const props = defineProps<{
  sdk: Caido;
}>();

const query = ref("");

const filteredCommands = computed(() => {
  if (!query.value) return [];
  
  const commands = props.sdk.commands.getAll?.() || [];
  return commands.filter((cmd) =>
    cmd.name.toLowerCase().includes(query.value.toLowerCase())
  );
});

const runCommand = (command: { run: () => void }) => {
  command.run();
};
</script>

<template>
  <div class="p-4">
    <input
      v-model="query"
      type="text"
      placeholder="Search..."
      class="w-full p-2 mb-4 border rounded"
      autofocus
    />
    
    <div v-if="filteredCommands.length > 0" class="space-y-1">
      <div
        v-for="cmd in filteredCommands"
        :key="cmd.id"
        @click="runCommand(cmd)"
        class="p-2 cursor-pointer hover:bg-gray-100 rounded"
      >
        {{ cmd.name }}
      </div>
    </div>
    
    <div v-else-if="query" class="text-gray-500 p-2">
      No commands found
    </div>
  </div>
</template>
```

```ts
import type { Caido } from "@caido/sdk-frontend";
import CustomSearchView from "./CustomSearchView.vue";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  sdk.commands.register("custom-search", {
    name: "Custom Search",
    run: () => {
      sdk.commandPalette.pushView({
        type: "Custom",
        definition: {
          component: CustomSearchView,
        },
      });
    },
  });

  sdk.commandPalette.register("custom-search");
};
```

### Multi-Step Command

This example implements a multi-step wizard interface in the command palette. It displays a step indicator, shows the current step content, and provides Next/Back navigation buttons to move through the steps.

```vue
<!-- MultiStepView.vue -->
<script setup lang="ts">
import { ref } from "vue";
import type { Caido } from "@caido/sdk-frontend";

const props = defineProps<{
  sdk: Caido;
  steps: string[];
}>();

const currentStep = ref(0);

const next = () => {
  if (currentStep.value < props.steps.length - 1) {
    currentStep.value++;
  } else {
    props.sdk.window.showToast("Process completed!", { variant: "success" });
  }
};

const back = () => {
  if (currentStep.value > 0) {
    currentStep.value--;
  }
};
</script>

<template>
  <div class="p-4">
    <div class="mb-4 font-bold">
      Step {{ currentStep + 1 }} of {{ steps.length }}
    </div>
    
    <div class="mb-4">
      {{ steps[currentStep] }}
    </div>
    
    <div class="flex gap-2 justify-end mt-4">
      <button
        @click="back"
        :disabled="currentStep === 0"
        class="px-4 py-2 border rounded disabled:opacity-50"
      >
        Back
      </button>
      <button
        @click="next"
        class="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {{ currentStep < steps.length - 1 ? "Next" : "Finish" }}
      </button>
    </div>
  </div>
</template>
```

```ts
import type { Caido } from "@caido/sdk-frontend";
import MultiStepView from "./MultiStepView.vue";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  sdk.commands.register("multi-step", {
    name: "Multi-Step Process",
    run: () => {
      const steps = ["Step 1: Configure", "Step 2: Review", "Step 3: Execute"];
      sdk.commandPalette.pushView({
        type: "Custom",
        definition: {
          component: MultiStepView,
          props: {
            steps,
          },
        },
      });
    },
  });

  sdk.commandPalette.register("multi-step");
};
```

### Interactive Form

This example creates an interactive form within the command palette that collects a name and email address. When submitted, it displays the collected data in a toast notification.

```vue
<!-- FormView.vue -->
<script setup lang="ts">
import { ref } from "vue";
import type { Caido } from "@caido/sdk-frontend";

const props = defineProps<{
  sdk: Caido;
}>();

const name = ref("");
const email = ref("");

const submit = () => {
  const data = {
    name: name.value,
    email: email.value,
  };
  props.sdk.window.showToast(`Submitted: ${JSON.stringify(data)}`, {
    variant: "success",
  });
};
</script>

<template>
  <div class="p-4">
    <form @submit.prevent="submit" class="flex flex-col gap-3">
      <label>
        Name:
        <input
          v-model="name"
          type="text"
          required
          class="w-full p-2 mt-1 border rounded"
          autofocus
        />
      </label>
      
      <label>
        Email:
        <input
          v-model="email"
          type="email"
          required
          class="w-full p-2 mt-1 border rounded"
        />
      </label>
      
      <button
        type="submit"
        class="px-4 py-2 bg-blue-500 text-white rounded self-end"
      >
        Submit
      </button>
    </form>
  </div>
</template>
```

```ts
import type { Caido } from "@caido/sdk-frontend";
import FormView from "./FormView.vue";

export type CaidoSDK = Caido;

export const init = (sdk: CaidoSDK) => {
  sdk.commands.register("show-form", {
    name: "Show Form",
    run: () => {
      sdk.commandPalette.pushView({
        type: "Custom",
        definition: {
          component: FormView,
        },
      });
    },
  });

  sdk.commandPalette.register("show-form");
};
```
