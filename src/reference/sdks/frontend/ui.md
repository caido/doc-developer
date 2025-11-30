# UI

### UISDK

> **UISDK** = `object`

Utilities to create UI components.

#### Properties

##### button()

> **button**: (`options?`: `object`) => `HTMLElement`

Create a button.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | \{ `label?`: `string`; `leadingIcon?`: [`Icon`](utils.md#icon); `size?`: `"small"` \| `"medium"` \| `"large"`; `trailingIcon?`: [`Icon`](utils.md#icon); `variant?`: `"primary"` \| `"secondary"` \| `"tertiary"`; \} | Options for the button. |
| `options.label?` | `string` | The label of the button. |
| `options.leadingIcon?` | [`Icon`](utils.md#icon) | The leading icon of the button. |
| `options.size?` | `"small"` \| `"medium"` \| `"large"` | The size of the button. |
| `options.trailingIcon?` | [`Icon`](utils.md#icon) | The trailing icon of the button. |
| `options.variant?` | `"primary"` \| `"secondary"` \| `"tertiary"` | The variant of the button. |

###### Returns

`HTMLElement`

The button element.

###### Example

```ts
const deleteButton = sdk.ui.button({
  variant: "primary",
  label: "Delete",
  trailingIcon: "fas fa-trash-can",
  size: "small",
});
```

##### card()

> **card**: (`options?`: `object`) => `HTMLElement`

Create a card.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | \{ `body?`: `HTMLElement`; `footer?`: `HTMLElement`; `header?`: `HTMLElement`; \} | Options for the card. |
| `options.body?` | `HTMLElement` | The body of the card. |
| `options.footer?` | `HTMLElement` | The footer of the card. |
| `options.header?` | `HTMLElement` | The header of the card. |

###### Returns

`HTMLElement`

The card element.

##### httpRequestEditor()

> **httpRequestEditor**: () => [`HTTPRequestEditor`](editor.md#httprequesteditor)

Create an HTTP request editor

###### Returns

[`HTTPRequestEditor`](editor.md#httprequesteditor)

The HTTP request editor.

##### httpResponseEditor()

> **httpResponseEditor**: () => [`HTTPResponseEditor`](editor.md#httpresponseeditor)

Create an HTTP response editor

###### Returns

[`HTTPResponseEditor`](editor.md#httpresponseeditor)

The HTTP response editor.

##### well()

> **well**: (`options?`: `object`) => `HTMLElement`

Create a well.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options?` | \{ `body?`: `HTMLElement`; `footer?`: `HTMLElement`; `header?`: `HTMLElement`; \} | Options for the well. |
| `options.body?` | `HTMLElement` | The body of the well. |
| `options.footer?` | `HTMLElement` | The footer of the well. |
| `options.header?` | `HTMLElement` | The header of the well. |

###### Returns

`HTMLElement`

The well element.
