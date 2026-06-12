# Settings

### SettingsPluginSlotContent

> **SettingsPluginSlotContent** = [`CustomSlotContent`](slots.md#customslotcontent) & `object`

Content for a settings plugin slot.

#### Type Declaration

##### name

> **name**: `string`

The name of the plugin settings page displayed in the sidebar.

***

### SettingsSDK

> **SettingsSDK** = `object`

Utilities to interact with the settings page.

#### Properties

##### addToSlot

> **addToSlot**: [`DefineAddToSlotFn`](slots.md#defineaddtoslotfn)\<[`SettingsSlotContent`](other.md#settingsslotcontent)\>

Add a component to a slot.

###### Param

The slot to add the component to.

###### Param

The content to add to the slot.

###### Example

```ts
sdk.settings.addToSlot(SettingsSlot.PluginsSection, {
  type: "Custom",
  name: "My Plugin Settings",
  definition: MySettingsComponent,
});
```

***

### SettingsSlot

> `const` **SettingsSlot**: `object`

The slots in the Settings UI.

#### Type Declaration

##### PluginsSection

> `readonly` **PluginsSection**: `"plugins-section"`

The plugins section in the settings sidebar.
