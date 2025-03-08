<template>
  <RoundedCard>
    <div class="flex justify-between items-center">
      <div class="flex space-x-2 items-center">
        <h3 class="p-4 text-xl">
          {{ title }}
        </h3>
        <p class="text-xl">{{ status }}</p>
      </div>

      <div class="px-6">
        <RoundedButton variant="danger" @click="$emit('cancel')"
          >Cancel</RoundedButton
        >
      </div>
    </div>
  </RoundedCard>
</template>
<script setup>
import RoundedCard from "./RoundedCard.vue";
import RoundedButton from "./RoundedButton.vue";
defineProps({
  title: String,
  status: String,
});
defineEmits(["cancel"]);
</script>