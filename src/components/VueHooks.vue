<script setup>
import { ref, onMounted } from "vue";
const elementRef = ref(null);
onMounted(() => {
  elementRef.value.textContent = "Using onMounted Life Cycle Method";
});
</script>
<template>
  <h1>Life Cycle Hooks</h1>
  <p ref="elementRef">Hello</p>
</template>