# Authentication Methods

The Client SDK supports three methods for authenticating a script against a Caido instance: Personal Access Token, Browser Login, and Direct Token. They all produce the same kind of access token, but they differ in how that token is obtained.

Two of them use the same <a href="https://www.rfc-editor.org/rfc/rfc8628.html" target="_blank">OAuth 2.0 Device Authorization</a> grant that the Caido desktop and web applications use, described in [Instance Authentication](https://docs.caido.io/app/concepts/instance_authentication.html). The third skips the flow entirely.

## Personal Access Token

A Personal Access Token (PAT) is a long-lived credential created in the Caido Dashboard. When the SDK authenticates with a PAT, it starts the device authorization flow on the instance and then automatically approves it by calling the Caido Cloud API with the PAT as a Bearer credential. No human interaction is required.

This is the natural choice for headless environments: scripts, CI/CD pipelines, scheduled jobs, and anything that runs without a person nearby. A PAT is tied to the user that created it and inherits that user's permissions on the resources it targets, whether that's a personal account or a Team.

The PAT itself is not used as the credential for API calls. Once the Cloud approves the device flow, the instance delivers an access token and a refresh token to the script, and those are what subsequent API calls carry as Bearer tokens.

The full mechanics of PATs as a credential, where to create one, and how they relate to accounts and Teams are covered in [Personal Access Token](https://docs.caido.io/app/concepts/pat.html) in the user docs.

## Browser Login

Browser Login uses the same device authorization flow as PAT, but with a person in the loop instead of the Cloud. The SDK starts the flow on the instance, receives a verification URL and a short user code, and surfaces them to the script through an `onRequest` callback. A person opens the URL in a browser, enters the code, and approves the request on the [Caido Dashboard](https://dashboard.caido.io). The SDK waits on a WebSocket subscription until the instance delivers the resulting token pair.

This suits interactive scripts, developer tools, and one-off automations where the person running the script can complete the approval step at the time of authentication. Outside of who approves the request, the resulting token pair is identical to one obtained through a PAT.

## Direct Token

Direct Token skips the device authorization flow entirely. Instead of negotiating with the instance and the Cloud, the script provides an access token, and optionally a refresh token, that it has already obtained through some other channel. The SDK uses the token as-is on every authenticated request.

This pattern fits when the surrounding system already manages tokens for the script. Examples include a parent process that ran the device flow itself and passed the result down, a service that mints tokens out-of-band, or tests that need deterministic credentials.

If only an access token is provided, the SDK has no way to obtain a new one when it expires. The script must rotate the token externally or switch to one of the other two methods. Providing both an access token and a refresh token restores the automatic renewal behavior covered in [Caching of Tokens](./auth_caching.md).
