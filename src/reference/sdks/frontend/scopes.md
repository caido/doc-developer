# Scopes

### CurrentScopeChangeEvent

> **CurrentScopeChangeEvent** = `object`

Event fired when the current scope changes.

#### Properties

##### scopeId

> **scopeId**: [`ID`](utils.md#id) \| `undefined`

The ID of the newly selected scope, or undefined if no scope is selected.

***

### Scope

> **Scope** = `object`

Represents a scope.

#### Properties

##### allowlist

> **allowlist**: `string`[]

The list of included items.

##### denylist

> **denylist**: `string`[]

The list of excluded items.

##### id

> **id**: [`ID`](utils.md#id)

The unique ID of the scope.

##### name

> **name**: `string`

The name of the scope.

***

### ScopePageContext

> **ScopePageContext** = `object`

Scope page context.

#### Properties

##### kind

> **kind**: `"Scope"`

##### selection

> **selection**: [`Selection`](utils.md#selection)\<[`ID`](utils.md#id)\>

***

### ScopesSDK

> **ScopesSDK** = `object`

Utilities to interact with scopes

#### Properties

##### addToSlot

> **addToSlot**: [`DefineAddToSlotFn`](slots.md#defineaddtoslotfn)\<[`ScopeSlotContent`](other.md#scopeslotcontent)\>

Add a component to a slot.

###### Param

The slot to add the component to.

###### Param

The content to add to the slot.

###### Example

```ts
sdk.scopes.addToSlot(ScopeSlot.UpdateHeader, {
  type: "Button",
  label: "My Button",
  icon: "my-icon",
  onClick: () => {
    console.log("Button clicked");
  },
});

sdk.scopes.addToSlot(ScopeSlot.CreateHeader, {
  type: "Custom",
  definition: MyComponent,
});

sdk.scopes.addToSlot(ScopeSlot.UpdateHeader, {
  type: "Command",
  commandId: "my-command",
  icon: "my-icon",
});
```

##### createScope()

> **createScope**: (`options`: `object`) => `Promise`\<[`Scope`](#scope) \| `undefined`\>

Create a scope.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `allowlist`: `string`[]; `denylist`: `string`[]; `name`: `string`; \} | Options for the scope. |
| `options.allowlist` | `string`[] | The list of included items in the scope. |
| `options.denylist` | `string`[] | The list of excluded items in the scope. |
| `options.name` | `string` | The name of the scope. |

###### Returns

`Promise`\<[`Scope`](#scope) \| `undefined`\>

The created scope.

###### Example

```ts
const newScope = await sdk.scopes.createScope({
  name: "Example",
  allowlist: ["*example.com", "*github.com"],
  denylist: ["*caido.io"],
});
```

##### deleteScope()

> **deleteScope**: (`id`: [`ID`](utils.md#id)) => `Promise`\<`boolean`\>

Delete a scope.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](utils.md#id) | The id of the scope to delete. |

###### Returns

`Promise`\<`boolean`\>

Whether the scope was deleted.

##### getCurrentScope()

> **getCurrentScope**: () => [`Scope`](#scope) \| `undefined`

Get the currently selected scope.

###### Returns

[`Scope`](#scope) \| `undefined`

The currently selected scope, or undefined if no scope is selected.

##### getScopes()

> **getScopes**: () => [`Scope`](#scope)[]

Get all scopes.

###### Returns

[`Scope`](#scope)[]

A list of scopes.

##### onCurrentScopeChange()

> **onCurrentScopeChange**: (`callback`: (`event`: [`CurrentScopeChangeEvent`](#currentscopechangeevent)) => `void`) => [`ListenerHandle`](utils.md#listenerhandle)

Subscribe to current scope changes.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (`event`: [`CurrentScopeChangeEvent`](#currentscopechangeevent)) => `void` | The callback to call when the selected scope changes. |

###### Returns

[`ListenerHandle`](utils.md#listenerhandle)

An object with a `stop` method that can be called to stop listening to scope changes.

###### Example

```ts
const handler = sdk.scopes.onCurrentScopeChange((event) => {
  console.log(`Scope ${event.scopeId} got selected!`);
});

// Later, stop listening
handler.stop();
```

##### updateScope()

> **updateScope**: (`id`: [`ID`](utils.md#id), `options`: `object`) => `Promise`\<[`Scope`](#scope) \| `undefined`\>

Update a scope.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](utils.md#id) | The id of the scope to update. |
| `options` | \{ `allowlist?`: `string`[]; `denylist?`: `string`[]; `name?`: `string`; \} | Options for the scope. |
| `options.allowlist?` | `string`[] | The list of included items in the scope. |
| `options.denylist?` | `string`[] | The list of excluded items in the scope. |
| `options.name?` | `string` | The name of the scope. |

###### Returns

`Promise`\<[`Scope`](#scope) \| `undefined`\>

The updated scope.

***

### ScopeSlot

> `const` **ScopeSlot**: `object`

The slots in the Scopes UI.

#### Type Declaration

##### CreateHeader

> `readonly` **CreateHeader**: `"create-header"`

The header area of the preset form create component, to the left of the ScopeTooltip.

##### UpdateHeader

> `readonly` **UpdateHeader**: `"update-header"`

The header area of the preset form update component, to the left of the ScopeTooltip.
