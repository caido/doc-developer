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

### Registering an API Endpoint

For example, the following could be the contents of your plugin's `/packages/backend/src/index.ts` file:

First, the necessary type aliases are imported. `SDK` is the interface used to interact with Caido. `DefineAPI` is used to structure the API: definining what methods or endpoints are available, the parameters those methods accept and what types of values they return.

``` ts
import { SDK, DefineAPI } from "caido:plugin";
```

Next, the function is defined. The function takes three parameters: `sdk`, `a` and `b`. The `sdk` parameter is typed using the `SDK` alias to give the function access to its utilities. The `a` and `b` parameters are expected to be numbers as this function multiplies the two together.

``` ts
function multiply(sdk: SDK, a: number, b: number) {
    const result = a * b;
    sdk.console.log(`The product of the multiply call is: ${result}`);
    return result;
}
```

Using the `DefineAPI` utility, we are stating what our API offers. In this case, the `multiply` function is available to be called. To ensure the function receives the expected parameter data types, `typeof` is used to link the `multiply` API call to the `multiply` function definition. This definition is stored in the type alias `API` and exported so it can be used in other files.

``` ts
export type API = DefineAPI<{
    multiply: typeof multiply;
}>;
```

Next, we define a function that will run as soon as Caido loads the plugin. It extends upon the base `SDK` by adding the `<API>`. In order to register the function, we use the `sdk.api.register()` method which takes two parameters: a string name for the function and the function it refers to. We give the name `"multiply"` to the `multiply` function.

``` ts
export function init(sdk: SDK<API>) {
    sdk.api.register("multiply", multiply);
}
```

::: tip
To view the entire backend script, expand the following:

<details>
<summary>Example</summary>

``` ts
import { SDK, DefineAPI } from "caido:plugin";

function multiply(sdk: SDK, a: number, b: number) {
    const result = a * b;
    sdk.console.log(`The product of the multiply call is: ${result}`);
    return result;
}

export type API = DefineAPI<{
    multiply: typeof multiply;
}>;

export function init(sdk: SDK<API>) {
    sdk.api.register("multiply", multiply);
}
```

</details>
:::

## sdk.backend.multiply()

This method allows you to call the functions that have been registered and defined in your API. The given name of the function is appended to `sdk.backend.`.

### Calling the API Endpoint

---

<img alt="Calling the API." src="/_images/api_register_function.png" center/>

Add the following to your `/packages/frontend/src/index.ts` file:

Again, we need to import the necessary type aliases: the base `SDK` and the `API` we just defined in the backend.

``` ts
import type { Caido } from "@caido/sdk-frontend";
import type { API } from "../../backend/src/index.ts";
```

Next, we add the API to the SDK by creating the `CaidoSDK` type alias.

``` ts
export type CaidoSDK = Caido<API>;
```

The page will include two input fields, one for each expected number parameter and a `<p></p>` tag that will be used to display the result.

::: tip
For additional documentation on creating a page - click [here](/guides/components/page.md).
:::

``` ts
const createPage = (sdk: CaidoSDK) => {

    const resultText = document.createElement("p");
    resultText.textContent = "Result will appear here.";

    const inputA = document.createElement("input");
    inputA.type = "number";
    inputA.value = "0";
    inputA.style.color = "black";
    
    const inputB = document.createElement("input");
    inputB.type = "number";
    inputB.value = "0";
    inputB.style.color = "black";
```

The page also includes a button, that when clicked will take the supplied input and use the values as the parameters for the `multiply` function which is called using `sdk.backend.multiply(a, b);`. To account for processing time, `await` is used.

``` ts
    const calculateButton = sdk.ui.button({
        variant: "primary",
        label: "Calculate",
    });

    calculateButton.addEventListener("click", async () => {
        const a = Number(inputA.value);
        const b = Number(inputB.value);
        const result = await sdk.backend.multiply(a, b);
        resultText.textContent = `Result: ${result}`;
    });
```

The page elements are all grouped together and stored in the `container` variable which is then used as the `body` property value of the `sdk.ui.card({})` method. The page is then added to Caido using the `sdk.navigation.addPage()` method with the path of `"/multiply-page"`. Its content is the `card` we just defined.

``` ts
    const container = document.createElement("div");
    container.appendChild(inputA);
    container.appendChild(inputB);
    container.appendChild(calculateButton);
    container.appendChild(resultText);

    const card = sdk.ui.card({
        body: container
    });

    sdk.navigation.addPage("/multiply-page", {
        body: card
    });
}
```

Finally, we define an initialization function for the frontend that will generate this page when Caido loads our plugin. The `sdk.sidebar.registerItem()` method will add a tab for our plugin page to the left-hand side menu of Caido named `Multiply` with a calculator icon.

``` ts
export function init(sdk: CaidoSDK) {
    createPage(sdk);
    
    sdk.sidebar.registerItem("Multiply", "/multiply-page", {
        icon: "fas fa-calculator"
    });
}
```

::: tip
To view the entire backend script, expand the following:

<details>
<summary>Example</summary>

``` ts
import type { Caido } from "@caido/sdk-frontend";
import type { API } from "../../backend/src/index.ts";

export type CaidoSDK = Caido<API>;

const createPage = (sdk: CaidoSDK) => {

    const resultText = document.createElement("p");
    resultText.textContent = "Result will appear here.";

    const inputA = document.createElement("input");
    inputA.type = "number";
    inputA.value = "0";
    inputA.style.color = "black";
    
    const inputB = document.createElement("input");
    inputB.type = "number";
    inputB.value = "0";
    inputB.style.color = "black";

    const calculateButton = sdk.ui.button({
        variant: "primary",
        label: "Calculate",
    });

    calculateButton.addEventListener("click", async () => {
        const a = Number(inputA.value);
        const b = Number(inputB.value);
        const result = await sdk.backend.multiply(a, b);
        resultText.textContent = `Result: ${result}`;
    });

    const container = document.createElement("div");
    container.appendChild(inputA);
    container.appendChild(inputB);
    container.appendChild(calculateButton);
    container.appendChild(resultText);

    const card = sdk.ui.card({
        body: container
    });

    sdk.navigation.addPage("/multiply-page", {
        body: card
    });
}

export function init(sdk: CaidoSDK) {
    createPage(sdk);
    
    sdk.sidebar.registerItem("Multiply", "/multiply-page", {
        icon: "fas fa-calculator"
    });
}
```

</details>
:::

The entry to your Caido log file should resemble:

``` txt
2024-11-05T13:26:13.528023Z  INFO plugin:5a758b74-e176-473f-a545-bdb452015b9a js|sdk: The product of the multiply call is: 15
```
