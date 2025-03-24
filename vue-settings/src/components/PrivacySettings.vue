<template>
  <div>
    <h2 class="text-2xl mb-4 mt-4">Notifications</h2>
    <form class="space-y-4">
      <div class="flex gap-2">
        <input type="checkbox" v-model="privacy.searchEngineIndesing" />
        <label>Search engine indexing</label>
      </div>
      <div>
        <label class="mb-2">Visibility</label>
        <select v-model="privacy.visibility">
          <option value="private">Private</option>
          <option value="public">Public</option>
        </select>
      </div>
      <button type="submit" class="btn-primary">Save</button>
    </form>
  </div>
</template>
<script setup lang="ts">
import { useSettings } from "../composables/useSettings";
const { privacy } = useSettings();
</script>