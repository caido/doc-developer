# Scope

### Scope

> **Scope** = `object`

A saved immutable Scope.

#### Properties

##### allowlist

> `readonly` **allowlist**: `string`[]

The allowlist of the scope.

##### denylist

> `readonly` **denylist**: `string`[]

The denylist of the scope.

##### id

> `readonly` **id**: [`ID`](shared.md#id)

The unique Caido [ID](shared.md#id) of the scope.

##### name

> `readonly` **name**: `string`

The name of the scope.

***

### ScopeSDK

> **ScopeSDK** = `object`

The SDK for the Scope service.

#### Methods

##### getAll()

> **getAll**(): `Promise`\<[`Scope`](#scope)[]\>

Get all the scopes.

###### Returns

`Promise`\<[`Scope`](#scope)[]\>

An array of [Scope](#scope)
