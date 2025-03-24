<template>
  <div>
    <h2 class="text-2xl mb-4 mt-4">Notifications</h2>
    <form class="space-y-4">
      <div class="flex gap-2 items-center">
        <input type="checkbox" v-model="notifications.email" />
        <label>Email notifications</label>
      </div>
      <div class="flex gap-2 items-center">
        <input type="checkbox" v-model="notifications.sms" />
        <label>SMS notifications</label>
      </div>
      <button type="submit" class="btn-primary">Save</button>
    </form>
  </div>
</template>
<script setup lang="ts">
import { useSettings } from "../composables/useSettings";
const { notifications } = useSettings();
</script>