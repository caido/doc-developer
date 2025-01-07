# Workflow Data Types

::: info
[Learn about the concepts behind this.](/concepts/workflows/flow.md)
:::

``` rust
pub enum NodeDataProp {
    String {
        alias: Alias,
        name: String,
        optional: bool,
        default: Option<String>,
    },
    Bytes {
        alias: Alias,
        name: String,
        optional: bool,
    },
    Choice {
        alias: Alias,
        name: String,
        optional: bool,
        values: Vec<String>,
        default: Option<String>,
    },
    Code {
        alias: Alias,
        name: String,
        description: Option<String>,
        optional: bool,
        default: Option<String>,
        language: Option<String>,
    },
    Bool {
        alias: Alias,
        name: String,
        default: bool,
    },
    Integer {
        alias: Alias,
        name: String,
        min: i64,
        max: i64,
        default: Option<i64>,
    },
    Request {
        alias: Alias,
        name: String,
        optional: bool,
        saved: bool,
    },
    Response {
        alias: Alias,
        name: String,
        optional: bool,
        saved: bool,
    },
}
```
