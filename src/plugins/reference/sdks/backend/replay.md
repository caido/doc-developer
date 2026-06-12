# Replay

### ReplayCollection

> **ReplayCollection** = `object`

A collection of replay sessions.

#### Methods

##### getId()

> **getId**(): [`ID`](shared.md#id)

The unique Caido [ID](shared.md#id) of the replay collection.

###### Returns

[`ID`](shared.md#id)

##### getName()

> **getName**(): `string`

The name of the replay collection.

###### Returns

`string`

***

### ReplaySDK

> **ReplaySDK** = `object`

The SDK for the Replay service.

#### Methods

##### createSession()

> **createSession**(`source?`: [`RequestSource`](shared.md#requestsource), `collection?`: [`ID`](shared.md#id) \| [`ReplayCollection`](#replaycollection)): `Promise`\<[`ReplaySession`](#replaysession)\>

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `source?` | [`RequestSource`](shared.md#requestsource) |
| `collection?` | [`ID`](shared.md#id) \| [`ReplayCollection`](#replaycollection) |

###### Returns

`Promise`\<[`ReplaySession`](#replaysession)\>

##### getCollections()

> **getCollections**(): `Promise`\<[`ReplayCollection`](#replaycollection)[]\>

###### Returns

`Promise`\<[`ReplayCollection`](#replaycollection)[]\>

***

### ReplaySession

> **ReplaySession** = `object`

A replay session.

#### Methods

##### getId()

> **getId**(): [`ID`](shared.md#id)

The unique Caido [ID](shared.md#id) of the replay session.

###### Returns

[`ID`](shared.md#id)

##### getName()

> **getName**(): `string`

The name of the replay session.

###### Returns

`string`
