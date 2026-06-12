---
aside: true
outline: [1, 1]
title: API
---

<OASpec
  :tags='["api"]'
  hide-branding
>
  <template #header="header">
    <OASpecHeader :operation="header.operation" :method="header.method" :path="header.path" />
  </template>
</OASpec>
