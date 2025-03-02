<template>
  <div class="bg-white border border-gray-200 rounded-md">
    <h3 class="font-medium text-xl p-4 border-b border-gray-200">
      {{ title }}
    </h3>
    <p class="p-4 border-b border-gray-200">{{ date }}</p>
    <p class="p-4">{{ description }}</p>
    <section class="p-4 flex justify-end">
      <Button label="Register" @click="$emit('register')" />
    </section>
  </div>
</template>
<script setup>
import Button from "./Button.vue";
defineProps({
  title: String,
  date: String,
  description: String,
});
defineEmits(["register"]);
</script>