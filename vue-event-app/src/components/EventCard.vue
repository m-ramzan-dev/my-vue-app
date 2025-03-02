<template>
  <div class="bg-white border border-gray-200 rounded-md">
    <h3 class="font-medium text-xl p-4 border-b border-gray-200">
      {{ title }}
    </h3>
    <p class="p-4 border-b border-gray-200">{{ date }}</p>
    <p class="p-4">{{ description }}</p>
    <section class="p-4 flex justify-end">
      <button
        class="hover:bg-gray-100 border text-sm font-medium border-gray-200 rounded-full px-3 py-1"
        @click="$emit('register')"
      >
        Register
      </button>
    </section>
  </div>
</template>
<script setup>
defineProps({
  title: String,
  date: String,
  description: String,
});
defineEmits(["register"]);
</script>