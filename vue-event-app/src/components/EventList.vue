<template>
  <h2 class="text-2xl font-medium">All Events</h2>
  <section v-if="eventsLoading" class="text-center">
    <EventLoadingComponent />
  </section>
  <section v-else class="grid grid-cols-2 gap-8">
    <EventCard
      v-for="event in events"
      :key="event.id"
      :title="event.title"
      :date="event.date"
      :description="event.description"
      @register="$emit('bookEvent', event)"
    ></EventCard>
  </section>
</template>
<script setup>
import EventCard from "./EventCard.vue";
import EventLoadingComponent from "./EventLoadingComponent.vue";
import { onMounted, ref } from "vue";
const events = ref([]);
const eventsLoading = ref(false);
async function fetchEvents() {
  console.log("Fetching events...");
  eventsLoading.value = true;
  try {
    const response = await fetch("http://localhost:3001/events");
    events.value = await response.json();
  } catch (err) {
    error.value = "Failed to load events.";
    console.error(err);
  } finally {
    eventsLoading.value = false;
  }
}
async function fetchBookings() {
  bookingLoading.value = true;
  try {
    const response = await fetch("http://localhost:3001/bookings");
    bookings.value = await response.json();
  } finally {
    bookingLoading.value = false;
  }
}
onMounted(() => {
  fetchEvents();
});
defineEmits(["bookEvent"]);
</script>