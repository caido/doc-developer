# Using the Workflow SDK

This guide shows you how to use the Workflow SDK to build practical workflow scripts in Caido. You'll learn to work with requests, findings, projects, environment variables, and network operations, with examples you can adapt to your own use cases.

## Getting Started with Workflow Scripts

Every workflow script has a `run` function that receives two parameters: the input from the workflow and the SDK object.

```js
export function run(input, sdk) {
  // Your code here
  return result;
}
```

The `sdk` object is your gateway to all Caido services. It includes:

- `sdk.requests` — Query and send HTTP requests
- `sdk.findings` — Create and retrieve security findings
- `sdk.projects` — Access project information
- `sdk.env` — Access environment variables
- `sdk.net` — Perform network operations
- `sdk.graphql` — Execute GraphQL queries
- `sdk.hostedFile` — Work with hosted files
- `sdk.console` — Log output

## Working with Requests

### Reading Requests

To fetch a request by its ID, use `sdk.requests.get()`:

```js
export async function run(input, sdk) {
  const request = await sdk.requests.get("123");

  if (!request) {
    sdk.console.log("Request not found");
    return;
  }

  sdk.console.log(`Host: ${request.request.getHost()}`);
  sdk.console.log(`Path: ${request.request.getPath()}`);
  sdk.console.log(`Method: ${request.request.getMethod()}`);

  return request;
}
```

The returned object contains both the `request` and optionally a `response`.

### Querying Multiple Requests

To search for requests, use `sdk.requests.query()`. Build your query by chaining methods:

```js
export async function run(input, sdk) {
  const results = await sdk.requests
    .query()
    .filter('req.host.eq:"api.example.com"')
    .first(10)
    .ascending("req", "created_at")
    .execute();

  sdk.console.log(`Found ${results.items.length} requests`);

  for (const item of results.items) {
    const req = item.request;
    sdk.console.log(`${req.getMethod()} ${req.getPath()}`);
  }

  return results;
}
```

Common query methods:

- `.filter(httpql)` — Apply HTTPQL filters (e.g., `'req.method.eq:"POST"'`)
- `.first(n)` — Limit to first n results
- `.last(n)` — Limit to last n results
- `.ascending("req", field)` or `.ascending("resp", field)` — Sort in ascending order
- `.descending("req", field)` or `.descending("resp", field)` — Sort in descending order
- `.after(cursor)` / `.before(cursor)` — Paginate using cursors
- `.execute()` — Run the query and get results

### Reading Request Data

Access request properties by calling getter methods:

```js
export async function run(input, sdk) {
  const reqResp = await sdk.requests.get("123");
  const request = reqResp.request;

  // Basic properties
  sdk.console.log(`URL: ${request.getUrl()}`);
  sdk.console.log(`Host: ${request.getHost()}`);
  sdk.console.log(`Port: ${request.getPort()}`);
  sdk.console.log(`Path: ${request.getPath()}`);
  sdk.console.log(`Query: ${request.getQuery()}`);
  sdk.console.log(`Method: ${request.getMethod()}`);

  // TLS/HTTPS
  if (request.getTls()) {
    sdk.console.log("Uses HTTPS");
  }

  // Headers
  const headers = request.getHeaders();
  const contentType = request.getHeader("Content-Type");
  sdk.console.log(`Content-Type: ${contentType}`);

  // Body
  const body = request.getBody();
  if (body) {
    try {
      const json = body.toJson();
      sdk.console.log(`JSON body:`, json);
    } catch {
      const text = body.toText();
      sdk.console.log(`Text body: ${text}`);
    }
  }

  return request;
}
```

### Creating and Modifying Requests

To modify a request before sending it, convert it to a `RequestSpec`:

```js
export async function run(input, sdk) {
  // Create from scratch
  const spec = new RequestSpec("https://api.example.com/users");

  // Or modify an existing request
  const reqResp = await sdk.requests.get("123");
  const spec = reqResp.request.toSpec();

  // Modify the request
  spec.setMethod("POST");
  spec.setHeader("Authorization", "Bearer token123");
  spec.setHeader("Content-Type", "application/json");
  spec.setBody(JSON.stringify({ name: "John", email: "john@example.com" }), {
    updateContentLength: true
  });

  sdk.console.log(`Modified URL: ${spec.getUrl()}`);

  return spec;
}
```

Common modification methods:

- `.setMethod(method)` — Set HTTP method
- `.setPath(path)` — Set request path
- `.setQuery(queryString)` — Set query parameters (without leading `?`)
- `.setHost(host)` — Set host
- `.setPort(port)` — Set port
- `.setBody(body, options)` — Set request body
- `.setHeader(name, value)` — Set header
- `.removeHeader(name)` — Remove header
- `.setTls(boolean)` — Enable/disable HTTPS

### Sending Requests

Send a request using `sdk.requests.send()`:

```js
export async function run(input, sdk) {
  const spec = new RequestSpec("https://api.example.com/status");

  try {
    const result = await sdk.requests.send(spec, {
      save: true,
      plugins: true,
      timeouts: {
        connect: 10000,     // 10s to connect
        response: 30000,    // 30s for first byte
        partial: 5000,      // 5s between reads
        extra: 0,           // No extra time
      }
    });

    sdk.console.log(`Request ID: ${result.request.getId()}`);
    sdk.console.log(`Response code: ${result.response.getCode()}`);

    return result;
  } catch (err) {
    if (err.message.includes("Timeout")) {
      sdk.console.error("Request timed out");
    } else {
      sdk.console.error(`Send failed: ${err}`);
    }
    throw err;
  }
}
```

Send options:

- `save` (default `true`) — Save request/response to database
- `plugins` (default `true`) — Route through upstream plugins
- `timeouts` — Timeout configuration (optional)
- `connection` — Reuse an existing connection (optional)

### Checking if Requests are in Scope

To check if a request matches your project's scope:

```js
export async function run(input, sdk) {
  const reqResp = await sdk.requests.get("123");

  // Check against default scope
  if (sdk.requests.inScope(reqResp.request)) {
    sdk.console.log("Request is in scope");
  }

  return reqResp;
}
```

### Matching Filters

Use HTTPQL filters to test if a request matches:

```js
export async function run(input, sdk) {
  const reqResp = await sdk.requests.get("123");

  const matches = sdk.requests.matches(
    'req.host.eq:"api.example.com"',
    reqResp.request,
    reqResp.response
  );

  sdk.console.log(`Matches filter: ${matches}`);

  return matches;
}
```

## Creating and Managing Findings

### Creating a Finding

After analyzing a request, report security findings:

```js
export async function run(input, sdk) {
  const reqResp = await sdk.requests.get("123");

  const finding = await sdk.findings.create({
    title: "Sensitive Data Exposed",
    description: "API key found in response body",
    reporter: "API Analyzer",
    request: reqResp.request,
    dedupeKey: `api-key-${reqResp.request.getHost()}-${reqResp.request.getId()}`
  });

  sdk.console.log(`Created finding: ${finding.getId()}`);

  return finding;
}
```

Finding spec fields:

- `title` (required) — Short title of the finding
- `description` (optional) — Detailed description
- `reporter` (required) — Name of the tool that found it
- `request` (required) — Associated request
- `dedupeKey` (optional) — Prevents duplicate findings with the same key

### Retrieving Findings

Get findings from a request:

```js
export async function run(input, sdk) {
  const reqResp = await sdk.requests.get("123");

  // Get by reporter name
  const finding = await sdk.findings.get({
    reporter: "API Analyzer",
    request: reqResp.request
  });

  // Or get by deduplication key
  const sameFinding = await sdk.findings.get("api-key-example.com-123");

  if (finding) {
    sdk.console.log(`Finding: ${finding.getTitle()}`);
    sdk.console.log(`Description: ${finding.getDescription()}`);
  }

  return finding;
}
```

### Checking if a Finding Exists

Before creating a duplicate, check if it already exists:

```js
export async function run(input, sdk) {
  const dedupeKey = "my-unique-key";

  const exists = await sdk.findings.exists(dedupeKey);

  if (!exists) {
    // Create the finding
  }

  return exists;
}
```

## Accessing Project Information

### Getting the Current Project

```js
export async function run(input, sdk) {
  const project = await sdk.projects.getCurrent();

  if (!project) {
    sdk.console.log("No project is currently open");
    return;
  }

  sdk.console.log(`Project: ${project.getName()}`);
  sdk.console.log(`Path: ${project.getPath()}`);
  sdk.console.log(`Version: ${project.getVersion()}`);
  sdk.console.log(`Status: ${project.getStatus()}`);

  return project;
}
```

Project methods:

- `.getId()` — Unique Caido ID
- `.getName()` — Project name
- `.getPath()` — Directory path
- `.getVersion()` — Version string (MAJOR.MINOR.PATCH)
- `.getStatus()` — Project status

## Using Environment Variables

### Reading Variables from an Environment

Environments let you store and reuse secrets and configuration:

```js
export async function run(input, sdk) {
  // Get all environments
  const environments = await sdk.env.getEnvironments();

  for (const env of environments) {
    sdk.console.log(`Environment: ${env.name}`);

    // Iterate variables in the environment
    for (const variable of env.variables) {
      sdk.console.log(`  ${variable.key}: ${variable.value}`);
    }
  }

  return environments;
}
```

### Getting a Specific Environment

```js
export async function run(input, sdk) {
  const env = await sdk.env.getEnvironment("prod");

  if (!env) {
    sdk.console.log("Environment not found");
    return;
  }

  // Find a variable
  const apiKey = env.variables.find(v => v.key === "API_KEY");
  if (apiKey) {
    sdk.console.log(`API Key: ${apiKey.value}`);
  }

  return env;
}
```

### Creating an Environment

Store new environments programmatically:

```js
export async function run(input, sdk) {
  const env = await sdk.env.createEnvironment({
    name: "staging",
    variables: [
      { key: "API_URL", value: "https://staging.example.com" },
      { key: "API_KEY", value: "secret-key-123" },
      { key: "DEBUG", value: "true" }
    ]
  });

  sdk.console.log(`Created environment: ${env.name}`);

  return env;
}
```

## Performing Network Operations

### Making Raw Network Connections

For protocols other than HTTP or when you need fine control:

```js
export async function run(input, sdk) {
  // Open a TCP connection
  const connection = await sdk.net.connect({
    host: "example.com",
    port: 443,
    tls: true,
    timeout: 10000  // 10 seconds
  });

  // Send data
  await connection.write("GET / HTTP/1.1\r\nHost: example.com\r\n\r\n");

  // Read response
  const data = await connection.read();
  sdk.console.log(`Response: ${sdk.asString(data)}`);

  // Close connection
  await connection.close();

  return data;
}
```

Connection methods:

- `.write(data)` — Send bytes to the connection
- `.read()` — Read available data
- `.readAll()` — Read until connection closes
- `.close()` — Terminate the connection

### Checking Network Connectivity

Test if a host is reachable:

```js
export async function run(input, sdk) {
  const canReach = await sdk.net.canReach({
    host: "api.example.com",
    port: 443,
    tls: true,
    timeout: 5000
  });

  if (canReach) {
    sdk.console.log("Host is reachable");
  } else {
    sdk.console.log("Host is not reachable");
  }

  return canReach;
}
```

## Executing GraphQL Queries

### Running a GraphQL Query

Use the Caido GraphQL API to query internal data:

```js
export async function run(input, sdk) {
  const query = `
    query {
      requests(first: 10) {
        items {
          id
          method
          path
        }
      }
    }
  `;

  const result = await sdk.graphql.query(query);

  if (result.errors) {
    for (const error of result.errors) {
      sdk.console.error(`GraphQL error: ${error.message}`);
    }
  } else {
    sdk.console.log("Query succeeded");
    sdk.console.log(result.data);
  }

  return result;
}
```

### Handling GraphQL Errors

GraphQL can return data and errors simultaneously:

```js
export async function run(input, sdk) {
  const query = `
    query {
      project {
        name
        invalid_field
      }
    }
  `;

  const result = await sdk.graphql.query(query);

  if (result.data) {
    sdk.console.log(`Project name: ${result.data.project.name}`);
  }

  if (result.errors) {
    result.errors.forEach(error => {
      sdk.console.log(`Error: ${error.message}`);
      if (error.locations) {
        error.locations.forEach(loc => {
          sdk.console.log(`  at line ${loc.line}, column ${loc.column}`);
        });
      }
    });
  }

  return result;
}
```

## Working with Hosted Files

### Uploading Files

Store files that can be accessed by your scripts:

```js
export async function run(input, sdk) {
  const fileData = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f]); // "Hello"

  const file = await sdk.hostedFile.create({
    name: "payload.bin",
    data: fileData,
    mimeType: "application/octet-stream"
  });

  sdk.console.log(`Uploaded file: ${file.name}`);
  sdk.console.log(`URL: ${file.url}`);

  return file;
}
```

### Reading Hosted Files

```js
export async function run(input, sdk) {
  // List all hosted files
  const files = await sdk.hostedFile.list();

  for (const file of files) {
    sdk.console.log(`${file.name} (${file.mimeType})`);
  }

  return files;
}
```

## Common Patterns and Best Practices

### Pattern: Batch Processing Requests

Process large numbers of requests without exhausting memory:

```js
export async function run(input, sdk) {
  let cursor = null;
  let totalProcessed = 0;

  while (true) {
    let query = sdk.requests
      .query()
      .filter('req.host.eq:"example.com"')
      .first(100);  // Process 100 at a time

    if (cursor) {
      query = query.after(cursor);
    }

    const results = await query.execute();

    // Process each request
    for (const item of results.items) {
      sdk.console.log(`Processing: ${item.request.getMethod()} ${item.request.getPath()}`);
      totalProcessed++;
    }

    // Check for more pages
    if (results.pageInfo.hasNextPage) {
      cursor = results.pageInfo.endCursor;
    } else {
      break;
    }
  }

  sdk.console.log(`Processed ${totalProcessed} requests`);
  return totalProcessed;
}
```

### Pattern: Analyzing Responses

Extract and analyze response data:

```js
export async function run(input, sdk) {
  const reqResp = await sdk.requests.get(input);

  if (!reqResp.response) {
    sdk.console.log("No response recorded");
    return;
  }

  const response = reqResp.response;
  const statusCode = response.getCode();

  sdk.console.log(`Status: ${statusCode}`);

  // Check for sensitive data in response
  const body = response.getBody();
  if (body) {
    const text = body.toText();

    if (text.includes("password") || text.includes("token") || text.includes("secret")) {
      await sdk.findings.create({
        title: "Potential Sensitive Data in Response",
        reporter: "Response Analyzer",
        request: reqResp.request,
        dedupeKey: `sensitive-data-${reqResp.request.getId()}`
      });
    }
  }

  return response;
}
```

### Pattern: Conditional Request Modification

Modify requests based on analysis:

```js
export async function run(input, sdk) {
  const reqResp = await sdk.requests.get(input);
  const spec = reqResp.request.toSpec();

  // Add auth headers if missing
  if (!spec.getHeader("Authorization")) {
    const env = await sdk.env.getEnvironment("production");
    if (env) {
      const token = env.variables.find(v => v.key === "AUTH_TOKEN");
      if (token) {
        spec.setHeader("Authorization", `Bearer ${token.value}`);
      }
    }
  }

  // Log the modified request
  sdk.console.log(`Modified request: ${spec.getUrl()}`);

  return spec;
}
```

### Pattern: Error Handling

Gracefully handle failures:

```js
export async function run(input, sdk) {
  try {
    const request = await sdk.requests.get(input);

    if (!request) {
      throw new Error(`Request not found: ${input}`);
    }

    const spec = request.request.toSpec();

    try {
      const result = await sdk.requests.send(spec);
      sdk.console.log("Request sent successfully");
      return result;
    } catch (sendError) {
      if (sendError.message.includes("Timeout")) {
        sdk.console.warn("Request timed out, retrying...");
        // Could retry with longer timeout
      } else {
        sdk.console.error(`Failed to send request: ${sendError.message}`);
      }
      throw sendError;
    }
  } catch (err) {
    sdk.console.error(`Workflow failed: ${err.message}`);
    return null;
  }
}
```

### Pattern: Using Input to Customize Behavior

Make your workflows reusable by accepting parameters:

```js
export async function run(input, sdk) {
  // Input could be a request ID, URL, or configuration object
  const config = input || {};

  const filter = config.filter || 'req.method.eq:"GET"';
  const limit = config.limit || 50;
  const reporter = config.reporter || "Default Reporter";

  const results = await sdk.requests
    .query()
    .filter(filter)
    .first(limit)
    .execute();

  sdk.console.log(`Found ${results.items.length} requests matching filter`);

  // Create findings for each
  for (const item of results.items) {
    await sdk.findings.create({
      title: `Analyzed by ${reporter}`,
      reporter: reporter,
      request: item.request,
      dedupeKey: `${reporter}-${item.request.getId()}`
    });
  }

  return results.items.length;
}
```

## Next Steps

Now that you understand the fundamentals, explore the detailed API reference for each service:

- [Requests Reference](/reference/sdks/workflow/requests.md)
- [Findings Reference](/reference/sdks/workflow/findings.md)
- [Projects Reference](/reference/sdks/workflow/projects.md)
- [Environment Reference](/reference/sdks/workflow/environment.md)
- [Network Reference](/reference/sdks/workflow/net.md)
- [GraphQL Reference](/reference/sdks/workflow/graphql.md)
- [HostedFile Reference](/reference/sdks/workflow/hostedfile.md)

For more information about building with workflows, see the [Workflows Guide](/guides/workflows.md) and [Workflow Concepts](/concepts/workflow.md).
