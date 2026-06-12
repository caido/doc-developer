# GraphQL

### GraphQLError

> **GraphQLError** = `object`

An error from a GraphQL query.

#### Properties

##### extensions

> **extensions**: `Record`\<`string`, `any`\>

##### locations

> **locations**: [`GraphQLLocation`](#graphqllocation)[]

##### message

> **message**: `string`

##### path

> **path**: [`GraphQLPathSegment`](#graphqlpathsegment)[]

***

### GraphQLLocation

> **GraphQLLocation** = `object`

A location in a GraphQL query.

#### Properties

##### column

> **column**: `number`

##### line

> **line**: `number`

***

### GraphQLPathSegment

> **GraphQLPathSegment** = `string` \| `number`

A segment of a path in a GraphQL query.

***

### GraphQLResponse

> **GraphQLResponse**\<`T`\> = `object`

The response from a GraphQL query.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Properties

##### data?

> `optional` **data**: `T`

##### errors?

> `optional` **errors**: [`GraphQLError`](#graphqlerror)[]

***

### GraphQLSDK

> **GraphQLSDK** = `object`

The SDK for the GraphQL service.

#### Methods

##### execute()

> **execute**\<`T`\>(`query`: `string`, `variables?`: `Record`\<`string`, `any`\>): `Promise`\<[`GraphQLResponse`](#graphqlresponse)\<`T`\>\>

Executes a GraphQL query.

###### Type Parameters

| Type Parameter |
| ------ |
| `T` |

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `query` | `string` |
| `variables?` | `Record`\<`string`, `any`\> |

###### Returns

`Promise`\<[`GraphQLResponse`](#graphqlresponse)\<`T`\>\>

###### Example

```js
await sdk.graphql.execute(`
  query {
    viewer
  }
`);
```
