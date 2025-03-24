<script setup lang="ts">
import { ref, computed } from "vue";
import type { Tab, TabKey } from "./types";
import LinkTab from "./components/LinkTab.vue";
import GeneralSettings from "./components/GeneralSettings.vue";
import NotificationsSettings from "./components/NotificationsSettings.vue";
import PrivacySettings from "./components/PrivacySettings.vue";
const tabs: Tab[] = [
  {
    key: "General",
    label: "General",
    component: GeneralSettings,
  },
  {
    key: "Notifications",
    label: "Notifications",
    component: NotificationsSettings,
  },
  {
    key: "Privacy",
    label: "Privacy",
    component: PrivacySettings,
  },
];
const currentTab = ref<TabKey>("General");
const currentTabComponent = computed(
  () => tabs.find((tab) => tab.key === currentTab.value)?.component
);
</script>

<template>
  <main class="max-w-2xl mx-auto px-4">
    <nav
      class="font-medium text-center text-gray-500 border-b border-gry-200mb-4"
    >
      <ul class="flex flex-wrap -mb-px">
        <li v-for="tab in tabs" :key="tab.key">
          <LinkTab
            :tab="tab"
            :current-tab="currentTab"
            @click="currentTab = tab.key"
          />
        </li>
      </ul>
    </nav>
    <KeepAlive>
      <component :is="currentTabComponent" />
    </KeepAlive>
  </main>
</template>