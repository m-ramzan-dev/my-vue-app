<template>
  <h1>Flight Booking</h1>
  <select v-model="flightType">
    <option value="One-way Flight">One-way Flight</option>
    <option value="Return Flight">Return Flight</option>
  </select>
  <input type="date" v-model="departureDate" />
  <input type="date" v-model="returnDate" :disabled="!isReturn" />
  <button>Book</button>
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
</style>