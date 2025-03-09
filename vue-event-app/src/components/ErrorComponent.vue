<template>
  <RoundedCard>
    <div class="flex flex-col items-center space-y-4 p-4">
      <div class="text-red-500 text-center"><slot></slot></div>
      <RoundedButton @click="retry">Retry</RoundedButton>
    </div>
  </RoundedCard>
</template>
<script setup>
import RoundedCard from "./RoundedCard.vue";
import RoundedButton from "./RoundedButton.vue";
defineProps({
  retry: {
    type: Function,
    required: false,
  },
});
</script>