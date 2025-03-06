<template>
  <h1>Flight Booking</h1>
  <select v-model="flightType">
    <option value="One-way Flight">One-way Flight</option>
    <option value="Return Flight">Return Flight</option>
  </select>
  <input type="date" v-model="departureDate" />
  <input type="date" v-model="returnDate" :disabled="!isReturn" />
  <button>Book</button>
  <button @click="show = !show">{{ show ? "Show" : "Hide" }}</button>
  <Transition name="fade">
    <h1 v-if="show">Show & Hide with Vue Transition</h1>
  </Transition>
  <Transition name="slide-fade" style="height: 20px">
    <h1 v-if="slide">Slide & Fade with Vue Transition</h1>
  </Transition>
  <button @click="slide = !slide">Slide</button>
</template>
<script setup>
import { computed, ref } from "vue";

const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const flightType = ref("One-way Flight");
const departureDate = ref(formatDate(new Date()));
const returnDate = ref(departureDate.value);
const show = ref(true);
const slide = ref(false);

const isReturn = computed(() => flightType.value === "Return Flight");
</script>
<style>
select,
input,
button {
  font-size: 15px;
  display: block;
  margin: 0.5em auto;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>