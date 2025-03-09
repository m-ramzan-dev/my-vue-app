<template>
  <template v-if="error">
    <RoundedCard>
      <div class="flex flex-col items-center space-y-4">
        <div class="text-red-500 text-center">{{ error }}</div>
        <RoundedButton @click="fetchEvents">Retry</RoundedButton>
      </div>
    </RoundedCard>
  </template>
  <template v-else>
    <h2 class="text-2xl font-medium">All Events</h2>
    <section v-if="eventsLoading" class="text-center">
      <EventLoadingComponent />
    </section>
    <section v-else class="grid grid-cols-2 gap-8">
      <RoundedCard v-if="!events.length" class="col-span-2">
        <div class="text-2xl text-gray-500 text-center">No Events Found.</div>
      </RoundedCard>
      <template v-else>
        <EventCard
          v-for="event in events"
          :key="event.id"
          :title="event.title"
          :date="event.date"
          :description="event.description"
          @register="$emit('bookEvent', event)"
        ></EventCard>
      </template>
    </section>
  </template>
</template>
<script setup>
import EventCard from "./EventCard.vue";
import EventLoadingComponent from "./EventLoadingComponent.vue";
import RoundedButton from "./RoundedButton.vue";
import { onMounted, ref } from "vue";

const events = ref([]);
const eventsLoading = ref(false);
const error = ref(null);
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
  } catch (e) {
    error.value = e;
  } finally {
    bookingLoading.value = false;
  }
}

onMounted(() => {
  fetchEvents();
});
defineEmits(["bookEvent"]);
</script>