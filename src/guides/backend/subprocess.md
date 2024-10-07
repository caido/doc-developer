# Spawning a subprocess

In this guide, we will explore how to use child processes in a backend plugin. Child processes allow you to run external commands or scripts from within your backend plugin. This can be useful for tasks such as running shell commands, executing other scripts, or interacting with other programs.

## Spawning a Child Process

The `child_process` module provides the `spawn` function, which allows you to create a new child process. The `spawn` function takes the command to run and an array of arguments as its parameters.

```js
import { spawn } from "child_process";

const child = spawn("echo", ["Hello, world!"]);
```

In this example, we use the `spawn` function to run the `echo` command with the argument `"Hello, world!"`. This will create a new child process that prints "Hello, world!" to the console.

## Handling Child Process Output

Child processes can produce output through their `stdout` and `stderr` streams. You can listen to these streams to capture the output of the child process.

```js
child.stdout.on("data", (data) => {
  console.log(`stdout: ${data}`);
});

child.stderr.on("data", (data) => {
  console.error(`stderr: ${data}`);
});
```

In this example, we listen to the `stdout` and `stderr` streams of the child process and log the output to the console.

## Handling Child Process Exit

You can listen to the `close` event to know when the child process has finished executing. The `close` event provides the exit code of the child process.

```js
child.on("close", (code) => {
  console.log(`child process exited with code ${code}`);
});
```

In this example, we listen to the `close` event and log the exit code of the child process.

## Complete Example

Here is a complete example that demonstrates how to use child processes in a backend plugin:

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

In this example, we define a `driveChild` function that drives the child process by capturing its output and handling its exit. We also define a `test` function that spawns a child process to run the `echo` command and uses the `driveChild` function to capture the output.
