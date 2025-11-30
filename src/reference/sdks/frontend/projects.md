# Projects

### ProjectsSDK

> **ProjectsSDK** = `object`

Utilities to interact with projects.

#### Properties

##### onCurrentProjectChange()

> **onCurrentProjectChange**: (`callback`: (`event`: [`SelectedProjectChangeEvent`](#selectedprojectchangeevent)) => `void`) => [`ListenerHandle`](utils.md#listenerhandle)

Subscribe to selected project changes.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `callback` | (`event`: [`SelectedProjectChangeEvent`](#selectedprojectchangeevent)) => `void` | The callback to call when the selected project changes. |

###### Returns

[`ListenerHandle`](utils.md#listenerhandle)

An object with a `stop` method that can be called to stop listening to project changes.

###### Example

```ts
const handler = sdk.projects.onCurrentProjectChange((event) => {
  console.log('Selected project changed to:', event.projectId);
});

// Later, stop listening
handler.stop();
```

***

### SelectedProjectChangeEvent

> **SelectedProjectChangeEvent** = `object`

Event fired when the selected project changes.

#### Properties

##### projectId

> **projectId**: [`ID`](utils.md#id) \| `undefined`
