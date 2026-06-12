<script setup lang="ts">
import { useRoute } from "vitepress";
import type { DefaultTheme } from "vitepress";
import { computed } from "vue";

import { clientSdkNavbar, pluginsNavbar } from "../navbars";

const route = useRoute();

const navItemsWithLinks = computed(() => {
  if (route.path.startsWith("/plugins/")) {
    return pluginsNavbar.filter(
      (item): item is DefaultTheme.NavItemWithLink => "link" in item,
    );
  } else if (route.path.startsWith("/client-sdk/")) {
    return clientSdkNavbar.filter(
      (item): item is DefaultTheme.NavItemWithLink => "link" in item,
    );
  }
  return [];
});

const isActive = (link: string) => {
  if (!link) return false;
  const currentPath = route.path;
  if (link === currentPath) return true;
  if (link.endsWith("/") && currentPath.startsWith(link)) return true;
  return false;
};
</script>

<template>
  <div class="second-navbar">
    <div class="second-navbar-container">
      <a
        v-for="item in navItemsWithLinks"
        :key="item.link || item.text"
        :href="item.link"
        :class="['nav-link', { active: isActive(item.link) }]"
      >
        {{ item.text }}
      </a>
    </div>
  </div>
</template>

<style scoped>
.second-navbar {
  background: var(--vp-c-bg);
  border-bottom: 1px solid black;
  width: 100%;
  height: var(--vp-nav-height);
  position: fixed;
  padding-left: 32px;
  display: flex;
  align-items: center;
  z-index: 100 !important;
}

.second-navbar-container {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 48px;
}

.nav-link {
  padding: 8px 16px;
  background: transparent;
  border: none;
  color: var(--vp-c-text-2);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  display: inline-block;
}

.nav-link:hover {
  color: var(--vp-c-text-1);
}

.nav-link.active {
  color: var(--vp-c-brand-1);
  border-bottom-color: var(--vp-c-brand-1);
}

@media (max-width: 960px) {
  .second-navbar {
    display: none;
  }
}

@media (max-width: 768px) {
  .second-navbar-container {
    padding: 8px 16px;
  }

  .nav-link {
    padding: 8px 12px;
    font-size: 13px;
  }
}
</style>
