<script setup lang="ts">
const props = defineProps<{ url: string }>();
</script>

<template>
  <div style="width: 70%">
    <div
      style="
        position: relative;
        width: 100%;
        height: 0px;
        overflow: hidden;
        padding-bottom: min(64.95%, 95vh);
      "
    >
      <iframe
        allowfullscreen="false"
        mozallowfullscreen=""
        webkitallowfullscreen=""
        :src="props.url"
        width="100%"
        height="100%"
        style="border: 0px; position: absolute; inset: 0px"
      />
    </div>
  </div>
</template>

<style scoped></style>
