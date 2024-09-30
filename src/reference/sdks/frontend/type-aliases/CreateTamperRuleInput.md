[@caido/sdk-frontend](../index.md) / CreateTamperRuleInput

# Type Alias: CreateTamperRuleInput

> **CreateTamperRuleInput**: `object`

## Type declaration

### collectionId

> **collectionId**: [`Scalars`](Scalars.md)\[`"ID"`\]\[`"input"`\]

### condition?

> `optional` **condition**: [`InputMaybe`](InputMaybe.md)\<[`Scalars`](Scalars.md)\[`"HTTPQL"`\]\[`"input"`\]\>

### isEnabled

> **isEnabled**: [`Scalars`](Scalars.md)\[`"Boolean"`\]\[`"input"`\]

### isRegex

> **isRegex**: [`Scalars`](Scalars.md)\[`"Boolean"`\]\[`"input"`\]

### matchTerm

> **matchTerm**: [`Scalars`](Scalars.md)\[`"String"`\]\[`"input"`\]

### name

> **name**: [`Scalars`](Scalars.md)\[`"String"`\]\[`"input"`\]

### replaceTerm

> **replaceTerm**: [`Scalars`](Scalars.md)\[`"String"`\]\[`"input"`\]

### strategy

> **strategy**: [`TamperStrategy`](TamperStrategy.md)
