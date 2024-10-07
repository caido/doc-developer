# Spawning a subprocess

In this guide, we will explore how to spawn processes for backend plugins using the 'child_process' node. The 'child_process' module in Caido is similar to the Node.js API but has some limitations.

### Spawning a process

To spawn a process, you can use the `spawn` function from the 'child_process' module. Here is an example:

```js
import { spawn } from "child_process";

export async function test() {
  const child = spawn("echo", ["Hello, world!"]);
  const result = await driveChild(child);
  return result;
}
```

### Reading stdout and stderr

To handle the output and error streams of the child process, you can use the `stdout` and `stderr` properties of the child process. Here is an example:

```js
export async function driveChild(child) {
  let output = "";
  child.stdout.on("data", (data) => {
    output += data.toString();
  });

  let error = "";
  child.stderr.on("data", (data) => {
    error += data.toString();
  });
}
```

### Waiting for process to close

To wait for the child process to close and check the exit code, you can use the `close` event of the child process. Here is an example:

```js
export async function driveChild(child) {
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
```

### Full example

Here is the full example that combines all the steps:

```js
import { spawn } from "child_process";

export async function driveChild(child) {
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

## Limitations

- The 'child_process' module is similar to the Node.js API, but it has some limitations.
- The .pipe and .exec methods are missing.

## Using `shell: true` or `shell: '/bin/bash'` Options

You can use the `shell: true` or `shell: '/bin/bash'` options to execute the command in a shell. Here is an example:

```js
import { spawn } from "child_process";

export async function test() {
  const child = spawn("echo", ["Hello, world!"], { shell: true });
  const result = await driveChild(child);
  return result;
}
```

## References

- For an exhaustive list of implemented features, refer to the [child_process.d.ts](https://github.com/caido/dependency-llrt/blob/main/types/child_process.d.ts) file.
- For additional information, refer to the [Node.js reference API](https://nodejs.org/api/child_process.html).
