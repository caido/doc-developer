# Footer

### FooterSDK

> **FooterSDK** = `object`

Utilities to interact with the footer.

#### Properties

##### addToSlot

> **addToSlot**: [`DefineAddToSlotFn`](slots.md#defineaddtoslotfn)\<[`FooterSlotContent`](#footerslotcontent)\>

Add a component to a slot.

###### Param

The slot to add the component to.

###### Param

The content to add to the slot.

###### Example

```ts
addToSlot(FooterSlot.FooterSlotPrimary, {
  kind: "Command",
  commandId: "my-command",
  icon: "my-icon",
});

addToSlot(FooterSlot.FooterSlotPrimary, {
  kind: "Button",
  label: "My button",
  icon: "fas fa-rocket",
  onClick: () => {
    console.log("Button clicked");
  },
});

addToSlot(FooterSlot.FooterSlotSecondary, {
  kind: "Custom",
  component: MyComponent,
});
```

***

### FooterSlotContent

> **FooterSlotContent** = `object`

Content that can be added to footer slots.

#### Properties

##### footer-primary

> **footer-primary**: [`ButtonSlotContent`](slots.md#buttonslotcontent) \| [`CustomSlotContent`](slots.md#customslotcontent) \| [`CommandSlotContent`](slots.md#commandslotcontent)

##### footer-secondary

> **footer-secondary**: [`ButtonSlotContent`](slots.md#buttonslotcontent) \| [`CustomSlotContent`](slots.md#customslotcontent) \| [`CommandSlotContent`](slots.md#commandslotcontent)

***

### FooterSlot

> `const` **FooterSlot**: `object`

The slots in the Footer UI.

#### Type Declaration

##### FooterSlotPrimary

> `readonly` **FooterSlotPrimary**: `"footer-primary"`

##### FooterSlotSecondary

> `readonly` **FooterSlotSecondary**: `"footer-secondary"`
