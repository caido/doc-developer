# Runtime

All extensions to Caido are written in Javascript. This allows us to have an unified developement experience across the frontend and backend.

But each Javascript runtime is a bit different, we will go over the specificities in this document.

## Frontend

Javascript in the frontend (from `Frontend Plugins`) runs inside the browser or electron.

WIP

## Backend

Javascript in the backend (from `Workflows` and `Backend Plugins`) runs in a small embedded engine called [QuickJS](https://github.com/bellard/quickjs). This engines supports most of the [ES2023 specification](https://tc39.es/ecma262/2023/), but don't be surprised if some more recent language improvements are not available.

By default this engine doesn't come with any of the modules you might expect from [NodeJS](https://nodejs.org/api/).
To bridge the gap we are re-implementing some of the most popular modules ourselves.
While we try to document those modules here, the most up-to-date documentation will always be the `Typescript` definition from `@caido/sdk-backend` or `@caido/sdk-workflow`.

Here are the modules we have implemented so far:

- [`child_process`](/concepts/modules/child_process.md)
- `sqlite` (Async version)
- `buffer`
- `fs` / `fs/promise`
- `net`
- `os`
- `path`
- `crypto` (Partially)
