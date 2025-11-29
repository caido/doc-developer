# Customize Command Palette

Beyond registering commands, you can push custom views onto the command palette stack to create interactive command palette experiences, custom search interfaces, and multi-step commands.

## Pushing a Custom View

To push a custom view onto the command palette:

```ts
sdk.commandPalette.pushView({
  render: (container: HTMLElement) => {
    // Render your custom view
  },
});
```

::: warning
Keep custom views focused and lightweight. Complex views may impact command palette performance and user experience.
:::

## Examples

### Custom Search Interface

This example creates a custom search interface within the command palette. It provides a text input that filters available commands in real-time as you type, displaying matching commands as clickable items.

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

const createCustomSearchView = (sdk: CaidoSDK) => {
  return {
    render: (container: HTMLElement) => {
      container.style.padding = "16px";

      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = "Search...";
      input.style.width = "100%";
      input.style.padding = "8px";
      input.style.marginBottom = "16px";

      const results = document.createElement("div");
      results.id = "search-results";

      input.addEventListener("input", (e) => {
        const query = (e.target as HTMLInputElement).value;
        // Perform search and update results
        updateResults(query);
      });

      const updateResults = (query: string) => {
        results.innerHTML = "";
        if (!query) return;

        // Example: filter commands
        const commands = sdk.commands.getAll?.() || [];
        const filtered = commands.filter((cmd) =>
          cmd.name.toLowerCase().includes(query.toLowerCase())
        );

        filtered.forEach((cmd) => {
          const item = document.createElement("div");
          item.style.padding = "8px";
          item.style.cursor = "pointer";
          item.textContent = cmd.name;
          item.addEventListener("click", () => {
            cmd.run();
            // Close command palette (implementation depends on SDK)
          });
          results.appendChild(item);
        });
      };

      container.appendChild(input);
      container.appendChild(results);

      // Focus input when view is rendered
      input.focus();
    },
  };
};

export const init = (sdk: CaidoSDK) => {
  sdk.commands.register("custom-search", {
    name: "Custom Search",
    run: () => {
      sdk.commandPalette.pushView(createCustomSearchView(sdk));
    },
  });

  sdk.commandPalette.register("custom-search");
};
```

### Multi-Step Command

This example implements a multi-step wizard interface in the command palette. It displays a step indicator, shows the current step content, and provides Next/Back navigation buttons to move through the steps.

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

const createMultiStepView = (sdk: CaidoSDK, steps: string[]) => {
  let currentStep = 0;

  return {
    render: (container: HTMLElement) => {
      container.style.padding = "16px";

      const stepIndicator = document.createElement("div");
      stepIndicator.textContent = `Step ${currentStep + 1} of ${steps.length}`;
      stepIndicator.style.marginBottom = "16px";
      stepIndicator.style.fontWeight = "bold";

      const content = document.createElement("div");
      content.textContent = steps[currentStep];

      const buttonContainer = document.createElement("div");
      buttonContainer.style.display = "flex";
      buttonContainer.style.gap = "8px";
      buttonContainer.style.justifyContent = "flex-end";
      buttonContainer.style.marginTop = "16px";

      const nextButton = document.createElement("button");
      nextButton.textContent = currentStep < steps.length - 1 ? "Next" : "Finish";
      nextButton.style.padding = "8px 16px";

      const backButton = document.createElement("button");
      backButton.textContent = "Back";
      backButton.style.padding = "8px 16px";
      backButton.disabled = currentStep === 0;

      nextButton.addEventListener("click", () => {
        if (currentStep < steps.length - 1) {
          currentStep++;
          // Re-render view (implementation depends on SDK)
        } else {
          // Complete multi-step process
          sdk.window.showToast("Process completed!", { variant: "success" });
        }
      });

      backButton.addEventListener("click", () => {
        if (currentStep > 0) {
          currentStep--;
          // Re-render view
        }
      });

      buttonContainer.appendChild(backButton);
      buttonContainer.appendChild(nextButton);

      container.appendChild(stepIndicator);
      container.appendChild(content);
      container.appendChild(buttonContainer);
    },
  };
};

export const init = (sdk: CaidoSDK) => {
  sdk.commands.register("multi-step", {
    name: "Multi-Step Process",
    run: () => {
      const steps = ["Step 1: Configure", "Step 2: Review", "Step 3: Execute"];
      sdk.commandPalette.pushView(createMultiStepView(sdk, steps));
    },
  });

  sdk.commandPalette.register("multi-step");
};
```

### Interactive Form

This example creates an interactive form within the command palette that collects a name and email address. When submitted, it displays the collected data in a toast notification.

```ts
import type { Caido } from "@caido/sdk-frontend";

export type CaidoSDK = Caido;

const createFormView = (sdk: CaidoSDK) => {
  return {
    render: (container: HTMLElement) => {
      container.style.padding = "16px";

      const form = document.createElement("form");
      form.style.display = "flex";
      form.style.flexDirection = "column";
      form.style.gap = "12px";

      const nameLabel = document.createElement("label");
      nameLabel.textContent = "Name:";
      const nameInput = document.createElement("input");
      nameInput.type = "text";
      nameInput.required = true;
      nameLabel.appendChild(nameInput);

      const emailLabel = document.createElement("label");
      emailLabel.textContent = "Email:";
      const emailInput = document.createElement("input");
      emailInput.type = "email";
      emailInput.required = true;
      emailLabel.appendChild(emailInput);

      const submitButton = document.createElement("button");
      submitButton.type = "submit";
      submitButton.textContent = "Submit";
      submitButton.style.padding = "8px 16px";

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = {
          name: nameInput.value,
          email: emailInput.value,
        };
        sdk.window.showToast(`Submitted: ${JSON.stringify(data)}`, {
          variant: "success",
        });
        // Close command palette (implementation depends on SDK)
      });

      form.appendChild(nameLabel);
      form.appendChild(emailLabel);
      form.appendChild(submitButton);
      container.appendChild(form);

      nameInput.focus();
    },
  };
};

export const init = (sdk: CaidoSDK) => {
  sdk.commands.register("show-form", {
    name: "Show Form",
    run: () => {
      sdk.commandPalette.pushView(createFormView(sdk));
    },
  });

  sdk.commandPalette.register("show-form");
};
```

::: tip
Custom command palette views enable rich, interactive experiences beyond simple command execution. Use them for complex workflows that benefit from user interaction.
:::

::: info
Pushed views are added to a stack. Users can navigate back through the stack using standard command palette navigation.
:::
