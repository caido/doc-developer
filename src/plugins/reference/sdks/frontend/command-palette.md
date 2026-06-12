# Command Palette

### CommandPaletteSDK

> **CommandPaletteSDK** = `object`

Utilities to interact with the command palette.

#### Properties

##### pushView()

> **pushView**: (`view`: [`CommandPaletteView`](#commandpaletteview)) => `void`

Push a new view onto the command palette view stack.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `view` | [`CommandPaletteView`](#commandpaletteview) | The view to push onto the stack. |

###### Returns

`void`

##### register()

> **register**: (`commandId`: [`CommandID`](other.md#commandid)) => `void`

Register a command.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `commandId` | [`CommandID`](other.md#commandid) | The id of the command to register. |

###### Returns

`void`

***

### CommandPaletteView

> **CommandPaletteView** = `object`

Command palette view definition for custom UI content.

#### Properties

##### definition

> **definition**: [`ComponentDefinition`](utils.md#componentdefinition)

##### type

> **type**: `"Custom"`
