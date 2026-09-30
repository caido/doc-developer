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

> **definition**: [`ComponentDefinition`](utils.md#componentdefinition)\<[`CommandPaletteViewProps`](#commandpaletteviewprops)\>

##### type

> **type**: `"Custom"`

***

### CommandPaletteViewProps

> **CommandPaletteViewProps** = [`CommandPaletteViewPropsInternal`](#commandpaletteviewpropsinternal) & `object`

The props for the command palette view.

#### Type Declaration

##### sdk

> **sdk**: [`Caido`](index.md#caido)

***

### CommandPaletteViewPropsInternal

> **CommandPaletteViewPropsInternal** = `object`

The internal props for the command palette view.

#### Properties

##### onBack()

> **onBack**: () => `void`

The function to call when the command palette is backed.

###### Returns

`void`

##### onClose()

> **onClose**: () => `void`

The function to call when the command palette is closed.

###### Returns

`void`
