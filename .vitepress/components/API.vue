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
});
</script>
<template>
  <ApiReference :configuration="configuration">
    <template #sidebar-end>
      <h1>Hello</h1>
    </template>
  </ApiReference>
</template>
<style scoped></style>
