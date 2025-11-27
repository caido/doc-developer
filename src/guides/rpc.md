# Creating and Calling a Custom Function

When developing a plugin, there are two components to consider: the **frontend** and the **backend**.

In this guide, we'll cover how to create a custom endpoint in a backend plugin, and call it from a frontend plugin.

::: info
For additional documentation on the differences between a frontend and backend plugin - click [here](/concepts/package.md).
:::

## Registering an Endpoint

Let's start by creating an endpoint called `multiply` in our backend plugin.

`multiply` will take two numbers, output the result in the backend logs, as well as return the result. This endpoint will used by the frontend later on.

### /packages/backend/src/index.ts

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

### Script Breakdown

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

## Calling the Endpoint

Now that we've created our endpoint in the backend plugin, we can call `multiply` from our frontend plugin.

### /packages/frontend/src/index.ts

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

### Script Breakdown

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
For additional documentation on creating a page - click [here](/guides/page.md).
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

## The Result

<img alt="Calling the API." src="/_images/api_register_function.png" center/>

The entry to your Caido log file should resemble:

``` txt
2024-11-05T13:26:13.528023Z  INFO plugin:5a758b74-e176-473f-a545-bdb452015b9a js|sdk: The product of the multiply call is: 15
```
