<template>
  <RoundedCard>
    <h3 class="font-medium text-xl p-4 border-b border-gray-200">
      <slot name="title"></slot>
    </h3>
    <p class="p-4 border-b border-gray-200"><slot name="date"></slot></p>
    <p class="p-4"><slot name="description"></slot></p>
    <section class="p-4 flex justify-end">
      <RoundedButton @click="$emit('register')">
        <pre>Register</pre>
      </RoundedButton>
    </section>
  </RoundedCard>
</template>
<script setup>
import RoundedButton from "./RoundedButton.vue";
import RoundedCard from "./RoundedCard.vue";
defineProps({
  title: String,
  date: String,
  description: String,
});
defineEmits(["register"]);
</script>