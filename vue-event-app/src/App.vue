<template>
  <main class="bg-gray-100 mx-auto space-y-8 p-8">
    <h1 class="text-4xl font-medium">Event Booking App</h1>
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
        @register="console.log('Registering...', event)"
      ></EventCard>
    </section>
    <h2 class="text-2xl font-medium">Your Bookings</h2>
    <RoundedCard>
      <div class="flex justify-between items-center">
        <h3 class="p-4 text-xl">Vue Js Conference on 24 March 2024 - Status</h3>
        <div class="px-6">
          <RoundedButton variant="danger">Cancel</RoundedButton>
        </div>
      </div>
    </RoundedCard>
  </main>
</template>

<script setup>
import EventCard from "./components/EventCard.vue";
import RoundedCard from "./components/RoundedCard.vue";
import RoundedButton from "./components/RoundedButton.vue";
import EventLoadingComponent from "./components/EventLoadingComponent.vue";
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

onMounted(() => fetchEvents());
</script>