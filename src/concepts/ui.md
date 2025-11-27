# UI Styling

When using the Caido [community plugin template](https://github.com/caido-community/create-plugin), you have the option to customize the user-interface.

For this, Caido uses the following dependencies:

- [Vue.js](https://vuejs.org/): A JavaScript framework for building user-interfaces.
- [PrimeVue](https://primevue.org/): A library for Vue.js that provides a wide range of pre-built UI components.
- [TailWind CSS](https://tailwindcss.com/): A CSS framework that allows applications to be styled using predefined utility classes.

The `@caido/primevue` and `@caido/tailwindcss` packages are custom adaptations that are configured to align with the theme of the Caido application.

The `tailwindcss-primeui` package acts as a bridge, allowing PrimeVue components to be styled using Tailwind CSS.

Within the `tailwind.config.ts` file, both the `tailwindPrimeui` and `tailwindCaido` plugins are imported to inject the necessary classes.

By leveraging these technologies and creating relationships between them, we are able to customize and maintain consistency in the appearance of the frontend component of Caido plugins.

## What's next?

[Learn how to use the PrimeVue library to build a plugin frontend.](/guides/styling.md)
