<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  operation: { summary: string; operationId: string };
  method: string;
  path: string;
}>();

const text = computed(() => {
  return `${props.method.toUpperCase()} ${props.path}`;
});

const id = computed(() => {
  return props.operation.operationId;
});

const summary = computed(() => {
  if (props.operation.summary.startsWith(props.method.toUpperCase())) {
    return undefined;
  }
  return props.operation.summary;
});
</script>

<template>
  <div class="flex flex-col">
    <h1 :id="id">
      <a
        class="header-anchor"
        :href="`#${id}`"
        :aria-label="`Permalink to ${text}`"
        >&#8203;</a
      >
      {{ text }}
    </h1>
    <p v-if="summary">{{ summary }}</p>
  </div>
</template>

<style scoped>
.oaspec-header {
  font-family: var(--vp-font-family-mono);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}
</style>
