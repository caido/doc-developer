# Spawn a Process

You might want to spawn a process to interact with external tools or programs.

To do this, you can use the `spawn` function from the `child_process` module.

::: info
This module is similar to NodeJS's `child_process` module, but with some differences. You can find more information in the [child_process](/concepts/child_process.md) documentation.
:::

## Launching a Process

The code below spawns a process that echoes "Hello, world!" to the console.

```js
import { spawn } from "child_process";

const child = spawn("echo", ["Hello, world!"]);
```

## Reading STDOUT and STDERR

To handle the output and error streams of the child process, you can use the `stdout` and `stderr` properties of the child process.

```js
let output = "";
child.stdout.on("data", (data) => {
  output += data.toString();
});

let error = "";
child.stderr.on("data", (data) => {
  error += data.toString();
});
```

## Waiting for Exit

To wait for the child process to close and check the exit code, you can use the `close` event of the child process.

```js
const exitCode = await new Promise((resolve, reject) => {
  child.on("close", resolve);
});

if (exitCode) {
  throw new Error(`subprocess error exit ${exitCode}, ${error}`);
}
```

## Driving a Process to Completion

Combining the two methods, we can drive any child process to completion and get its output.

```js
async function driveChild(child) {
  let output = "";
  child.stdout.on("data", (data) => {
    output += data.toString();
  });

  let error = "";
  child.stderr.on("data", (data) => {
    error += data.toString();
  });

  const exitCode = await new Promise((resolve, reject) => {
    child.on("close", resolve);
  });

  if (exitCode) {
    throw new Error(`subprocess error exit ${exitCode}, ${error}`);
  }

  return output;
}

export async function test() {
  const child = spawn("echo", ["Hello, world!"]);
  const result = await driveChild(child);
  return result;
}
```

## Executing Within a Shell

You can use the `shell: true` or `shell: '/shell/path'` options to execute the command in a shell.

```js
import { spawn } from "child_process";

export async function test() {
  const child = spawn("echo", ["Hello, world!"], { shell: true });
  const result = await driveChild(child);
  return result;
}
```
