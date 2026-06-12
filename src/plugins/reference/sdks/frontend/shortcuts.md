# Shortcuts

### ShortcutsSDK

> **ShortcutsSDK** = `object`

Utilities to interact with shortcuts.

#### Properties

##### register()

> **register**: (`commandId`: [`CommandID`](other.md#commandid), `keys`: `string`[]) => `void`

Register a shortcut.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `commandId` | [`CommandID`](other.md#commandid) | The id of the command to run when the shortcut is triggered. |
| `keys` | `string`[] | The keys of the shortcut. Check out [KeyboardEvent.key](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values) for the list of supported keys. |

###### Returns

`void`
