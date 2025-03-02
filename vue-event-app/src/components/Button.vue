<template>
  <button
    class="hover:bg-gray-100 border text-sm font-medium border-gray-200 rounded-full px-3 py-1"
    @click="$emit('click')"
  >
    {{ label }}
  </button>
</template>
<script setup>
defineProps({
  label: String,
});
defineEmits(["click"]);
</script>