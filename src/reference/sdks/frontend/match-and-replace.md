# Match and Replace

### MatchReplaceCollection

> **MatchReplaceCollection** = `object`

A collection in Match and Replace.

#### Properties

##### id

> **id**: [`ID`](utils.md#id)

##### name

> **name**: `string`

##### ruleIds

> **ruleIds**: [`ID`](utils.md#id)[]

***

### MatchReplaceMatcherName

> **MatchReplaceMatcherName** = `object`

A matcher that matches by name (for headers, query parameters, etc.).

#### Properties

##### kind

> **kind**: `"MatcherName"`

##### name

> **name**: `string`

***

### MatchReplaceMatcherRaw

> **MatchReplaceMatcherRaw** = [`MatchReplaceMatcherRawRegex`](#matchreplacematcherrawregex) \| [`MatchReplaceMatcherRawValue`](#matchreplacematcherrawvalue) \| [`MatchReplaceMatcherRawFull`](#matchreplacematcherrawfull)

A matcher for raw operations in Match and Replace.

***

### MatchReplaceMatcherRawFull

> **MatchReplaceMatcherRawFull** = `object`

This matcher will match the entire section.

#### Properties

##### kind

> **kind**: `"MatcherRawFull"`

***

### MatchReplaceMatcherRawRegex

> **MatchReplaceMatcherRawRegex** = `object`

This matcher will match using a regex over the section.

#### Properties

##### kind

> **kind**: `"MatcherRawRegex"`

##### regex

> **regex**: `string`

***

### MatchReplaceMatcherRawValue

> **MatchReplaceMatcherRawValue** = `object`

This matcher will match the value if present in the section.

#### Properties

##### kind

> **kind**: `"MatcherRawValue"`

##### value

> **value**: `string`

***

### MatchReplaceOperationAll

> **MatchReplaceOperationAll** = [`KeepOperation`](other.md#keepoperation)\<[`MatchReplaceOperationAllRaw`](#matchreplaceoperationallraw)\>

An operation for the entire request/response section.

***

### MatchReplaceOperationAllRaw

> **MatchReplaceOperationAllRaw** = `object`

A raw operation for the entire request/response section.

#### Properties

##### kind

> **kind**: `"OperationAllRaw"`

##### matcher

> **matcher**: [`MatchReplaceMatcherRaw`](#matchreplacematcherraw)

##### replacer

> **replacer**: [`MatchReplaceReplacer`](#matchreplacereplacer)

***

### MatchReplaceOperationBody

> **MatchReplaceOperationBody** = [`KeepOperation`](other.md#keepoperation)\<[`MatchReplaceOperationBodyRaw`](#matchreplaceoperationbodyraw)\>

An operation for the body section.

***

### MatchReplaceOperationBodyRaw

> **MatchReplaceOperationBodyRaw** = `object`

A raw operation for the body section.

#### Properties

##### kind

> **kind**: `"OperationBodyRaw"`

##### matcher

> **matcher**: [`MatchReplaceMatcherRaw`](#matchreplacematcherraw)

##### replacer

> **replacer**: [`MatchReplaceReplacer`](#matchreplacereplacer)

***

### MatchReplaceOperationFirstLine

> **MatchReplaceOperationFirstLine** = [`KeepOperation`](other.md#keepoperation)\<[`MatchReplaceOperationFirstLineRaw`](#matchreplaceoperationfirstlineraw)\>

An operation for the first line section.

***

### MatchReplaceOperationFirstLineRaw

> **MatchReplaceOperationFirstLineRaw** = `object`

A raw operation for the request first line.

#### Properties

##### kind

> **kind**: `"OperationFirstLineRaw"`

##### matcher

> **matcher**: [`MatchReplaceMatcherRaw`](#matchreplacematcherraw)

##### replacer

> **replacer**: [`MatchReplaceReplacer`](#matchreplacereplacer)

***

### MatchReplaceOperationHeader

> **MatchReplaceOperationHeader** = [`MatchReplaceOperationHeaderRaw`](#matchreplaceoperationheaderraw) \| [`MatchReplaceOperationHeaderAdd`](#matchreplaceoperationheaderadd) \| [`MatchReplaceOperationHeaderRemove`](#matchreplaceoperationheaderremove) \| [`MatchReplaceOperationHeaderUpdate`](#matchreplaceoperationheaderupdate)

An operation for the header section.

***

### MatchReplaceOperationHeaderAdd

> **MatchReplaceOperationHeaderAdd** = `object`

An operation to add a header.

#### Properties

##### kind

> **kind**: `"OperationHeaderAdd"`

##### matcher

> **matcher**: [`MatchReplaceMatcherName`](#matchreplacematchername)

##### replacer

> **replacer**: [`MatchReplaceReplacer`](#matchreplacereplacer)

***

### MatchReplaceOperationHeaderRaw

> **MatchReplaceOperationHeaderRaw** = `object`

A raw operation for the header section.

#### Properties

##### kind

> **kind**: `"OperationHeaderRaw"`

##### matcher

> **matcher**: [`MatchReplaceMatcherRaw`](#matchreplacematcherraw)

##### replacer

> **replacer**: [`MatchReplaceReplacer`](#matchreplacereplacer)

***

### MatchReplaceOperationHeaderRemove

> **MatchReplaceOperationHeaderRemove** = `object`

An operation to remove a header.

#### Properties

##### kind

> **kind**: `"OperationHeaderRemove"`

##### matcher

> **matcher**: [`MatchReplaceMatcherName`](#matchreplacematchername)

***

### MatchReplaceOperationHeaderUpdate

> **MatchReplaceOperationHeaderUpdate** = `object`

An operation to update a header.

#### Properties

##### kind

> **kind**: `"OperationHeaderUpdate"`

##### matcher

> **matcher**: [`MatchReplaceMatcherName`](#matchreplacematchername)

##### replacer

> **replacer**: [`MatchReplaceReplacer`](#matchreplacereplacer)

***

### MatchReplaceOperationMethod

> **MatchReplaceOperationMethod** = [`KeepOperation`](other.md#keepoperation)\<[`MatchReplaceOperationMethodUpdate`](#matchreplaceoperationmethodupdate)\>

An operation for the request method section.

***

### MatchReplaceOperationMethodUpdate

> **MatchReplaceOperationMethodUpdate** = `object`

An operation to update the request method.

#### Properties

##### kind

> **kind**: `"OperationMethodUpdate"`

##### replacer

> **replacer**: [`MatchReplaceReplacer`](#matchreplacereplacer)

***

### MatchReplaceOperationPath

> **MatchReplaceOperationPath** = [`KeepOperation`](other.md#keepoperation)\<[`MatchReplaceOperationPathRaw`](#matchreplaceoperationpathraw)\>

An operation for the request path section.

***

### MatchReplaceOperationPathRaw

> **MatchReplaceOperationPathRaw** = `object`

A raw operation for the request path section.

#### Properties

##### kind

> **kind**: `"OperationPathRaw"`

##### matcher

> **matcher**: [`MatchReplaceMatcherRaw`](#matchreplacematcherraw)

##### replacer

> **replacer**: [`MatchReplaceReplacer`](#matchreplacereplacer)

***

### MatchReplaceOperationQuery

> **MatchReplaceOperationQuery** = [`MatchReplaceOperationQueryRaw`](#matchreplaceoperationqueryraw) \| [`MatchReplaceOperationQueryAdd`](#matchreplaceoperationqueryadd) \| [`MatchReplaceOperationQueryRemove`](#matchreplaceoperationqueryremove) \| [`MatchReplaceOperationQueryUpdate`](#matchreplaceoperationqueryupdate)

An operation for the request query section.

***

### MatchReplaceOperationQueryAdd

> **MatchReplaceOperationQueryAdd** = `object`

An operation to add a query parameter.

#### Properties

##### kind

> **kind**: `"OperationQueryAdd"`

##### matcher

> **matcher**: [`MatchReplaceMatcherName`](#matchreplacematchername)

##### replacer

> **replacer**: [`MatchReplaceReplacer`](#matchreplacereplacer)

***

### MatchReplaceOperationQueryRaw

> **MatchReplaceOperationQueryRaw** = `object`

A raw operation for the request query section.

#### Properties

##### kind

> **kind**: `"OperationQueryRaw"`

##### matcher

> **matcher**: [`MatchReplaceMatcherRaw`](#matchreplacematcherraw)

##### replacer

> **replacer**: [`MatchReplaceReplacer`](#matchreplacereplacer)

***

### MatchReplaceOperationQueryRemove

> **MatchReplaceOperationQueryRemove** = `object`

An operation to remove a query parameter.

#### Properties

##### kind

> **kind**: `"OperationQueryRemove"`

##### matcher

> **matcher**: [`MatchReplaceMatcherName`](#matchreplacematchername)

***

### MatchReplaceOperationQueryUpdate

> **MatchReplaceOperationQueryUpdate** = `object`

An operation to update a query parameter.

#### Properties

##### kind

> **kind**: `"OperationQueryUpdate"`

##### matcher

> **matcher**: [`MatchReplaceMatcherName`](#matchreplacematchername)

##### replacer

> **replacer**: [`MatchReplaceReplacer`](#matchreplacereplacer)

***

### MatchReplaceOperationSNI

> **MatchReplaceOperationSNI** = [`KeepOperation`](other.md#keepoperation)\<[`MatchReplaceOperationSNIRaw`](#matchreplaceoperationsniraw)\>

An operation for the request SNI section.

***

### MatchReplaceOperationSNIRaw

> **MatchReplaceOperationSNIRaw** = `object`

A raw operation for the request SNI.

#### Properties

##### kind

> **kind**: `"OperationSNIRaw"`

##### replacer

> **replacer**: [`MatchReplaceReplacer`](#matchreplacereplacer)

***

### MatchReplaceOperationStatusCode

> **MatchReplaceOperationStatusCode** = [`KeepOperation`](other.md#keepoperation)\<[`MatchReplaceOperationStatusCodeUpdate`](#matchreplaceoperationstatuscodeupdate)\>

An operation for the response status code section.

***

### MatchReplaceOperationStatusCodeUpdate

> **MatchReplaceOperationStatusCodeUpdate** = `object`

An operation to update the response status code.

#### Properties

##### kind

> **kind**: `"OperationStatusCodeUpdate"`

##### replacer

> **replacer**: [`MatchReplaceReplacer`](#matchreplacereplacer)

***

### MatchReplaceReplacer

> **MatchReplaceReplacer** = [`MatchReplaceReplacerTerm`](#matchreplacereplacerterm) \| [`MatchReplaceReplacerWorkflow`](#matchreplacereplacerworkflow)

A replacer in Match and Replace.

***

### MatchReplaceReplacerTerm

> **MatchReplaceReplacerTerm** = `object`

A replacer that replaces with a term.
If the matcher is a regex, groups will be interpolated.

#### Properties

##### kind

> **kind**: `"ReplacerTerm"`

##### term

> **term**: `string`

***

### MatchReplaceReplacerWorkflow

> **MatchReplaceReplacerWorkflow** = `object`

A replacer that replaces with the result of a workflow.
The input of the workflow depends on the operation and matcher.

#### Properties

##### kind

> **kind**: `"ReplacerWorkflow"`

##### workflowId

> **workflowId**: [`ID`](utils.md#id)

***

### MatchReplaceRule

> **MatchReplaceRule** = `object`

A rule in Match and Replace.

#### Properties

##### collectionId

> **collectionId**: [`ID`](utils.md#id)

The ID of the collection the rule belongs to.

##### id

> **id**: [`ID`](utils.md#id)

The ID of the rule.

##### isEnabled

> **isEnabled**: `boolean`

Whether the rule is enabled.

##### name

> **name**: `string`

The name of the rule.

##### query

> **query**: [`HTTPQL`](utils.md#httpql)

The HTTPQL query to match the rule against.
Only requests that match the query will be affected by the rule.

##### section

> **section**: [`MatchReplaceSection`](#matchreplacesection)

The section of the rule.

***

### MatchReplaceSDK

> **MatchReplaceSDK** = `object`

Utilities to interact with the Match and Replace page.

#### Properties

##### addToSlot

> **addToSlot**: [`DefineAddToSlotFn`](slots.md#defineaddtoslotfn)\<[`MatchReplaceSlotContent`](#matchreplaceslotcontent)\>

Add a component to a slot.

###### Param

The slot to add the component to.

###### Param

The content to add to the slot.

###### Example

```ts
sdk.matchReplace.addToSlot(MatchReplaceSlot.UpdateHeader, {
  type: "Button",
  label: "My Button",
  icon: "my-icon",
  onClick: () => {
    console.log("Button clicked");
  },
});

sdk.matchReplace.addToSlot(MatchReplaceSlot.CreateHeader, {
  type: "Custom",
  definition: MyComponent,
});

sdk.matchReplace.addToSlot(MatchReplaceSlot.UpdateHeader, {
  type: "Command",
  commandId: "my-command",
  icon: "my-icon",
});
```

##### createCollection()

> **createCollection**: (`options`: `object`) => `Promise`\<[`MatchReplaceCollection`](#matchreplacecollection)\>

Create a collection.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `name`: `string`; \} | The options for the collection. |
| `options.name` | `string` | The name of the collection. |

###### Returns

`Promise`\<[`MatchReplaceCollection`](#matchreplacecollection)\>

##### createRule()

> **createRule**: (`options`: `object`) => `Promise`\<[`MatchReplaceRule`](#matchreplacerule)\>

Create a rule.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | \{ `collectionId`: [`ID`](utils.md#id); `name`: `string`; `query`: [`HTTPQL`](utils.md#httpql); `section`: [`MatchReplaceSection`](#matchreplacesection); `sources`: [`Source`](#source)[]; \} | The options for the rule. |
| `options.collectionId` | [`ID`](utils.md#id) | The ID of the collection the rule belongs to. |
| `options.name` | `string` | The name of the rule. |
| `options.query` | [`HTTPQL`](utils.md#httpql) | The HTTPQL query to match the rule against. |
| `options.section` | [`MatchReplaceSection`](#matchreplacesection) | - |
| `options.sources` | [`Source`](#source)[] | The sources the rule belongs to. |

###### Returns

`Promise`\<[`MatchReplaceRule`](#matchreplacerule)\>

##### deleteCollection()

> **deleteCollection**: (`id`: [`ID`](utils.md#id)) => `Promise`\<`void`\>

Delete a collection.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](utils.md#id) | The ID of the collection. |

###### Returns

`Promise`\<`void`\>

##### deleteRule()

> **deleteRule**: (`id`: [`ID`](utils.md#id)) => `Promise`\<`void`\>

Delete a rule.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](utils.md#id) | The ID of the rule. |

###### Returns

`Promise`\<`void`\>

##### getActiveRules()

> **getActiveRules**: () => [`MatchReplaceRule`](#matchreplacerule)[]

Get all active rules.
Rules are ordered in priority from highest to lowest.

###### Returns

[`MatchReplaceRule`](#matchreplacerule)[]

All active rules.

##### getCollections()

> **getCollections**: () => [`MatchReplaceCollection`](#matchreplacecollection)[]

Get all collections.

###### Returns

[`MatchReplaceCollection`](#matchreplacecollection)[]

##### getRules()

> **getRules**: () => [`MatchReplaceRule`](#matchreplacerule)[]

Get all rules.

###### Returns

[`MatchReplaceRule`](#matchreplacerule)[]

All rules.

##### selectRule()

> **selectRule**: (`id`: [`ID`](utils.md#id) \| `undefined`) => `void`

Select a rule to be displayed in the UI.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](utils.md#id) \| `undefined` | The ID of the rule, or undefined to clear the selection. |

###### Returns

`void`

##### toggleRule()

> **toggleRule**: (`id`: [`ID`](utils.md#id), `enabled`: `boolean`) => `Promise`\<`void`\>

Toggle a rule.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](utils.md#id) | The ID of the rule. |
| `enabled` | `boolean` | Whether the rule should be enabled. |

###### Returns

`Promise`\<`void`\>

##### updateCollection()

> **updateCollection**: (`id`: [`ID`](utils.md#id), `options`: `object`) => `Promise`\<[`MatchReplaceCollection`](#matchreplacecollection)\>

Update a collection.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](utils.md#id) | The ID of the collection. |
| `options` | \{ `name`: `string`; \} | The new values for the collection. |
| `options.name` | `string` | The new name of the collection. |

###### Returns

`Promise`\<[`MatchReplaceCollection`](#matchreplacecollection)\>

##### updateRule()

> **updateRule**: (`id`: [`ID`](utils.md#id), `options`: `object`) => `Promise`\<[`MatchReplaceRule`](#matchreplacerule)\>

Update a rule.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `id` | [`ID`](utils.md#id) | The ID of the rule. |
| `options` | \{ `name`: `string`; `query?`: [`HTTPQL`](utils.md#httpql); `section`: [`MatchReplaceSection`](#matchreplacesection); `sources`: [`Source`](#source)[]; \} | The new values for the rule. |
| `options.name` | `string` | The new name of the rule. |
| `options.query?` | [`HTTPQL`](utils.md#httpql) | The new HTTPQL query of the rule. |
| `options.section` | [`MatchReplaceSection`](#matchreplacesection) | The new section of the rule. |
| `options.sources` | [`Source`](#source)[] | The new sources of the rule. |

###### Returns

`Promise`\<[`MatchReplaceRule`](#matchreplacerule)\>

***

### MatchReplaceSection

> **MatchReplaceSection** = [`MatchReplaceSectionRequestAll`](#matchreplacesectionrequestall) \| [`MatchReplaceSectionRequestBody`](#matchreplacesectionrequestbody) \| [`MatchReplaceSectionRequestFirstLine`](#matchreplacesectionrequestfirstline) \| [`MatchReplaceSectionRequestHeader`](#matchreplacesectionrequestheader) \| [`MatchReplaceSectionRequestMethod`](#matchreplacesectionrequestmethod) \| [`MatchReplaceSectionRequestPath`](#matchreplacesectionrequestpath) \| [`MatchReplaceSectionRequestQuery`](#matchreplacesectionrequestquery) \| [`MatchReplaceSectionRequestSNI`](#matchreplacesectionrequestsni) \| [`MatchReplaceSectionResponseAll`](#matchreplacesectionresponseall) \| [`MatchReplaceSectionResponseBody`](#matchreplacesectionresponsebody) \| [`MatchReplaceSectionResponseFirstLine`](#matchreplacesectionresponsefirstline) \| [`MatchReplaceSectionResponseHeader`](#matchreplacesectionresponseheader) \| [`MatchReplaceSectionResponseStatusCode`](#matchreplacesectionresponsestatuscode)

A discriminated union of all possible match and replace sections.

***

### MatchReplaceSectionRequestAll

> **MatchReplaceSectionRequestAll** = `object`

A section for the entire request.

#### Properties

##### kind

> **kind**: `"SectionRequestAll"`

##### operation

> **operation**: [`MatchReplaceOperationAll`](#matchreplaceoperationall)

***

### MatchReplaceSectionRequestBody

> **MatchReplaceSectionRequestBody** = `object`

A section for the request body.

#### Properties

##### kind

> **kind**: `"SectionRequestBody"`

##### operation

> **operation**: [`MatchReplaceOperationBody`](#matchreplaceoperationbody)

***

### MatchReplaceSectionRequestFirstLine

> **MatchReplaceSectionRequestFirstLine** = `object`

A section for the request first line.

#### Properties

##### kind

> **kind**: `"SectionRequestFirstLine"`

##### operation

> **operation**: [`MatchReplaceOperationFirstLine`](#matchreplaceoperationfirstline)

***

### MatchReplaceSectionRequestHeader

> **MatchReplaceSectionRequestHeader** = `object`

A section for the request headers.

#### Properties

##### kind

> **kind**: `"SectionRequestHeader"`

##### operation

> **operation**: [`MatchReplaceOperationHeader`](#matchreplaceoperationheader)

***

### MatchReplaceSectionRequestMethod

> **MatchReplaceSectionRequestMethod** = `object`

A section for the request method.

#### Properties

##### kind

> **kind**: `"SectionRequestMethod"`

##### operation

> **operation**: [`MatchReplaceOperationMethod`](#matchreplaceoperationmethod)

***

### MatchReplaceSectionRequestPath

> **MatchReplaceSectionRequestPath** = `object`

A section for the request path.

#### Properties

##### kind

> **kind**: `"SectionRequestPath"`

##### operation

> **operation**: [`MatchReplaceOperationPath`](#matchreplaceoperationpath)

***

### MatchReplaceSectionRequestQuery

> **MatchReplaceSectionRequestQuery** = `object`

A section for the request query string.

#### Properties

##### kind

> **kind**: `"SectionRequestQuery"`

##### operation

> **operation**: [`MatchReplaceOperationQuery`](#matchreplaceoperationquery)

***

### MatchReplaceSectionRequestSNI

> **MatchReplaceSectionRequestSNI** = `object`

A section for the request SNI.

#### Properties

##### kind

> **kind**: `"SectionRequestSNI"`

##### operation

> **operation**: [`MatchReplaceOperationSNI`](#matchreplaceoperationsni)

***

### MatchReplaceSectionResponseAll

> **MatchReplaceSectionResponseAll** = `object`

A section for the entire response.

#### Properties

##### kind

> **kind**: `"SectionResponseAll"`

##### operation

> **operation**: [`MatchReplaceOperationAll`](#matchreplaceoperationall)

***

### MatchReplaceSectionResponseBody

> **MatchReplaceSectionResponseBody** = `object`

A section for the response body.

#### Properties

##### kind

> **kind**: `"SectionResponseBody"`

##### operation

> **operation**: [`MatchReplaceOperationBody`](#matchreplaceoperationbody)

***

### MatchReplaceSectionResponseFirstLine

> **MatchReplaceSectionResponseFirstLine** = `object`

A section for the response first line.

#### Properties

##### kind

> **kind**: `"SectionResponseFirstLine"`

##### operation

> **operation**: [`MatchReplaceOperationFirstLine`](#matchreplaceoperationfirstline)

***

### MatchReplaceSectionResponseHeader

> **MatchReplaceSectionResponseHeader** = `object`

A section for the response headers.

#### Properties

##### kind

> **kind**: `"SectionResponseHeader"`

##### operation

> **operation**: [`MatchReplaceOperationHeader`](#matchreplaceoperationheader)

***

### MatchReplaceSectionResponseStatusCode

> **MatchReplaceSectionResponseStatusCode** = `object`

A section for the response status code.

#### Properties

##### kind

> **kind**: `"SectionResponseStatusCode"`

##### operation

> **operation**: [`MatchReplaceOperationStatusCode`](#matchreplaceoperationstatuscode)

***

### MatchReplaceSlotContent

> **MatchReplaceSlotContent** = `object`

Content that can be added to match and replace slots.

#### Properties

##### create-header

> **create-header**: [`ButtonSlotContent`](slots.md#buttonslotcontent) \| [`CustomSlotContent`](slots.md#customslotcontent) \| [`CommandSlotContent`](slots.md#commandslotcontent)

##### update-header

> **update-header**: [`ButtonSlotContent`](slots.md#buttonslotcontent) \| [`CustomSlotContent`](slots.md#customslotcontent) \| [`CommandSlotContent`](slots.md#commandslotcontent)

***

### MatchReplaceSlot

> `const` **MatchReplaceSlot**: `object`

The slots in the Match and Replace UI.

#### Type Declaration

##### CreateHeader

> `readonly` **CreateHeader**: `"create-header"`

The header area of the rule form create component.

##### UpdateHeader

> `readonly` **UpdateHeader**: `"update-header"`

The header area of the rule form update component.

***

### Source

> `const` **Source**: `object`

The source of a match and replace rule.

#### Type Declaration

##### Automate

> `readonly` **Automate**: `"AUTOMATE"`

##### Intercept

> `readonly` **Intercept**: `"INTERCEPT"`

##### Plugin

> `readonly` **Plugin**: `"PLUGIN"`

##### Replay

> `readonly` **Replay**: `"REPLAY"`

##### Sample

> `readonly` **Sample**: `"SAMPLE"`

##### Workflow

> `readonly` **Workflow**: `"WORKFLOW"`
