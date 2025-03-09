<template>
  <main class="bg-gray-100 mx-auto space-y-8 p-8">
    <h1 class="text-4xl font-medium">Event Booking App</h1>
    <EventList @bookEvent="bookEvent($event)" />
    <BookingsList />
  </main>
</template>

<script setup>
import EventList from "./components/EventList.vue";
import BookingsList from "./components/BookingsList.vue";
import useBookings from "./composables/useBookings";
const { bookEvent } = useBookings();
</script>