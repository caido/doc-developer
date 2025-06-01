<script setup lang="ts">
import {
  ApiReference,
  type ApiReferenceConfiguration,
} from "@scalar/api-reference";
import { reactive } from "vue";
import content from "./open_api_api.yaml?raw";

const configuration = reactive<ApiReferenceConfiguration>({
  theme: "none",
  isEditable: false,
  showSidebar: true,
  spec: { content },
  hideClientButton: true,
  hideDarkModeToggle: true,
  hideSearch: true,
});
</script>
<template>
  <div class="scalar-container">
    <ApiReference :configuration="configuration">
      <template #sidebar-start>
        <h1>Hello</h1>
      </template>
      <template #sidebar-end>
        <h1>Hello</h1>
      </template>
    </ApiReference>
  </div>
</template>
<style scoped>
.scalar-container {
  height: 500px;
}

:deep(.VPDoc) {
  padding: 0 !important;
  max-width: none !important;
}

:deep(.VPContent) {
  padding: 0 !important;
  max-width: none !important;
}
</style>
