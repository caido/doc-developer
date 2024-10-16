# Child Process

Caido plugins offer a `child_process` module similiar to NodeJS's `child_process` module. This allows you to spawn child processes from your code, with some limitations.

This page will cover the differences between NodeJS's `child_process` module and Caido's implementation.

::: info
For an exhaustive list of implemented features, refer to the [child_process.d.ts](https://github.com/caido/dependency-llrt/blob/main/types/child_process.d.ts) file.
:::

## Differences

- The function `exec` is not implemented, use `spawn` with the `shell` option instead.
- The method `pipe` is not available to streams (like `stdout` and `stderr`).
