# Creating a Custom Endpoint

When developing a plugin, there are two components to consider: the **frontend** and the **backend**.

You can conceptualize the difference between these two components in the context of operating a car.

The frontend includes all the buttons, dials, pedals, and other controls available to you as the driver. Some components, such as sun visors and the rear-view mirror, are purely frontend. However, most frontend components communicate with the "under-the-hood" backend. This relationship is what allows actions like pressing the gas pedal to accelerate the engine - or, in the context of Caido; clicking a button to send a request.

## Frontend

A "_page_" in Caido simply refers to a user interface. For example, the [Replay](https://docs.caido.io/reference/features/testing/replay.html) and [Automate](https://docs.caido.io/reference/features/testing/automate.html) side menu tabs each produce their own page.

Within these pages are components and elements specific to the feature, such as option menus and buttons. It is through these components and elements that the appearance is customized or communication with the backend occurs.

Think of the Caido application as a browser window with multiple open tabs, each corresponding to a specific page.

## Backend

The backend refers to what is available server-side, what is "_under-the-hood_" or "_out-of-sight_". By incorporating a backend aspect to your plugin, you can extend upon the server-side functionality. This includes storing the data produced by your plugin, sending HTTP requests, or processing user-supplied data.

## sdk.api.register()

This method allows you to register functions that can be called from the frontend. Meaning you can link a frontend action, like a button click, to the execution of some code.

For example, the following could be the contents of your plugin's `/packages/backend/src/index.ts` file:

First, the `SDK` and `DefineAPI` type aliases are imported.

``` ts
import { SDK, DefineAPI } from "caido:plugin";
```

Next, the function is defined. This is just a simple function that returns the result of multiplying two numbers together.

``` ts
function multiply(sdk: SDK, a: number, b: number) {
    return a * b;
}
```

Using the `DefineAPI` utility, we are stating what our API offers. In this case, the `multiply` function is available to be called. To ensure the function receives the correct argument data type, `typeof` is used to link the `multiply` API call to the `multiply` function definition.

``` ts
export type API = DefineAPI<{
    multiply: typeof multiply;
}>;
```

Finally, the function is registered to the backend when Caido loads your plugin.

``` ts
export function init(sdk: SDK<API>) {
    sdk.api.register("multiply", multiply);
}
```

Here is the backend file it its entirety:

``` ts
import { SDK, DefineAPI } from "caido:plugin";

function multiply(sdk: SDK, a: number, b: number) {
    return a * b;
}

export type API = DefineAPI<{
    multiply: typeof multiply;
}>;

export function init(sdk: SDK<API>) {
    sdk.api.register("multiply", multiply);
}
```

## sdk.backend.multiply()

Now that the function has been registered as an API call, let's utilize it on the frontend:

``` ts
import type { Caido } from "@caido/sdk-frontend";
import type { API } from "../../backend/src/index.ts";
```

``` ts
export type CaidoSDK = Caido<API>;
```

``` ts
const createPage = (sdk: CaidoSDK) => {
    // Create UI elements.
    const resultText = document.createElement("p");
    resultText.textContent = "Result will appear here";

    const calculateButton = sdk.ui.button({
        variant: "primary",
        label: "Calculate 5 x 3",
    });
```

``` ts
    // Add button click handler.
    calculateButton.addEventListener("click", async () => {
        const result = await sdk.backend.multiply(5, 3);
        resultText.textContent = `Result: ${result}`;
    });
```

``` ts
    // Create container for elements.
    const container = document.createElement("div");
    container.appendChild(calculateButton);
    container.appendChild(resultText);

    // Create card with the container.
    const card = sdk.ui.card({
        body: container
    });

    // Add the page.
    sdk.navigation.addPage("/multiply-page", {
        body: card
    });
}
```

``` ts
// Initialize the plugin.
export function init(sdk: CaidoSDK) {
    createPage(sdk);
    
    // Add sidebar entry.
    sdk.sidebar.registerItem("Multiply", "/multiply-page", {
        icon: "fas fa-calculator"
    });
}
```
