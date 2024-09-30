# @caido/sdk-backend

This is the reference for the backend SDK used by backend plugins.
[SDK](interfaces/SDK.md) is the main interface that provides access to various services and functionalities.

## Classes

| Class | Description |
| ------ | ------ |
| [Body](classes/Body.md) | The body of a Request or Response. |
| [Database](classes/Database.md) | A SQLite database. |
| [RequestSpec](classes/RequestSpec.md) | A mutable Request not yet sent. |
| [RequestSpecRaw](classes/RequestSpecRaw.md) | A mutable raw Request not yet sent. |
| [Statement](classes/Statement.md) | This class represents a single prepared statement. This class cannot be instantiated via its constructor. Instead, instances are created via the database.prepare() method. |

## Interfaces

| Interface | Description |
| ------ | ------ |
| [SDK](interfaces/SDK.md) | The SDK object available to all scripts. |

## Type Aliases

| Type alias | Description |
| ------ | ------ |
| [APISDK](type-aliases/APISDK.md) | The SDK for the API RPC service. |
| [Bytes](type-aliases/Bytes.md) | - |
| [Console](type-aliases/Console.md) | Console interface for logging. |
| [DefineAPI](type-aliases/DefineAPI.md) | - |
| [DefineAPICallback](type-aliases/DefineAPICallback.md) | - |
| [DefineEventCallback](type-aliases/DefineEventCallback.md) | - |
| [DefineEvents](type-aliases/DefineEvents.md) | - |
| [EventsSDK](type-aliases/EventsSDK.md) | The SDK for the API RPC service. |
| [Finding](type-aliases/Finding.md) | A saved immutable Finding. |
| [FindingSpec](type-aliases/FindingSpec.md) | A mutable Finding not yet created. |
| [FindingsSDK](type-aliases/FindingsSDK.md) | The SDK for the Findings service. |
| [GetFindingInput](type-aliases/GetFindingInput.md) | - |
| [ID](type-aliases/ID.md) | - |
| [MaybePromise](type-aliases/MaybePromise.md) | - |
| [MaybePromise](type-aliases/MaybePromise.md) | - |
| [MetaSDK](type-aliases/MetaSDK.md) | The SDK for metadata information about the plugin. |
| [PageInfo](type-aliases/PageInfo.md) | Information on the current page of paginated data. |
| [Parameter](type-aliases/Parameter.md) | - |
| [Record](type-aliases/Record.md) | Construct a type with a set of properties K of type T |
| [Request](type-aliases/Request.md) | An immutable saved Request. |
| [RequestOrderField](type-aliases/RequestOrderField.md) | - |
| [RequestRaw](type-aliases/RequestRaw.md) | An immutable saved raw Request. |
| [RequestResponse](type-aliases/RequestResponse.md) | An immutable saved Request and Response pair. |
| [RequestResponseOpt](type-aliases/RequestResponseOpt.md) | An immutable saved Request and optional Response pair. |
| [RequestsConnection](type-aliases/RequestsConnection.md) | - |
| [RequestsConnectionItem](type-aliases/RequestsConnectionItem.md) | - |
| [RequestsQuery](type-aliases/RequestsQuery.md) | Query builder to fetch requests. |
| [RequestsSDK](type-aliases/RequestsSDK.md) | The SDK for the Requests service. |
| [Response](type-aliases/Response.md) | An immutable saved Response. |
| [ResponseOrderField](type-aliases/ResponseOrderField.md) | - |
| [ResponseRaw](type-aliases/ResponseRaw.md) | An immutable saved raw Response. |
| [Result](type-aliases/Result.md) | - |
| [SetBodyOptions](type-aliases/SetBodyOptions.md) | - |
