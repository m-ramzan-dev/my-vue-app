<template>
  <RoundedCard>
    <div class="flex justify-between items-center">
      <h3 class="p-4 text-xl">
        {{ title }}
      </h3>
      <div class="px-6">
        <RoundedButton variant="danger">Cancel</RoundedButton>
      </div>
    </div>
  </RoundedCard>
</template>
<script setup>
import RoundedCard from "./RoundedCard.vue";
import RoundedButton from "./RoundedButton.vue";
defineProps({
  title: String,
});
</script>