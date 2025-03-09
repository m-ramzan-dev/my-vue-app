<template>
  <RoundedCard>
    <div class="flex justify-between items-center">
      <div class="flex space-x-2 items-center">
        <h3 class="p-4 text-xl">
          {{ title }}
        </h3>
        <p class="text-xl">{{ status }}</p>
        <div>
          <component :is="icon" :class="{ 'animate-spin': pending }" />
        </div>
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
import { LoaderCircle, Check } from "lucide-vue-next";
import { computed } from "vue";
const props = defineProps({
  title: String,
  status: String,
});
const pending = computed(() => props.status === "pending");
const icon = computed(() => (pending.value ? LoaderCircle : Check));
defineEmits(["cancel"]);
</script>