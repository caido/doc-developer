# Child Process

This module tries to replicate the `child_process` module from `NodeJS`. For an exhaustive list of implemented features, refer to the [child_process.d.ts](https://github.com/caido/dependency-llrt/blob/main/types/child_process.d.ts) file.

## Spawning a process

To spawn a process, you can use the `spawn` function.

```js
import { spawn } from "child_process";

const child = spawn("echo", ["Hello, world!"]);
```

### Reading stdout and stderr

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

### Waiting for exit

To wait for the child process to close and check the exit code, you can use the `close` event of the child process.

```js
const exitCode = await new Promise((resolve, reject) => {
  child.on("close", resolve);
});

if (exitCode) {
  throw new Error(`subprocess error exit ${exitCode}, ${error}`);
}
```

### Driving a process to completion

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

## Executing within in a shell

You can use the `shell: true` or `shell: '/shell/path'` options to execute the command in a shell.

```js
import { spawn } from "child_process";

export async function test() {
  const child = spawn("echo", ["Hello, world!"], { shell: true });
  const result = await driveChild(child);
  return result;
}
```

## Limitations

- The function `exec` is not implemented, use `spawn` with the `shell` option instead.
- The method `pipe` is not available to streams (like `stdout` and `stderr`).
