<template>
  <button
    :class="['text-sm font-medium rounded-full px-3 py-1', variants[variant]]"
    @click="$emit('click')"
  >
    <slot>OK</slot>
  </button>
</template>
<script setup>
defineEmits(["click"]);
const variants = {
  default: "border border-gray-200 hover:bg-gray-100",
  danger: "bg-red-200 enabled:hover:bg-red-100",
};
defineProps({
  variant: {
    type: String,
    default: "default",
  },
});
</script>