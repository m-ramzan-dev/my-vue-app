<template>
  <main class="bg-gray mx-auto space-y-8 p-8">
    <h1 class="text-4xl font-medium">Event Booking App</h1>
    <h2 class="text-2xl font-medium">All Events</h2>
    <section class="grid grid-cols-2 gap-8">
      <EventCard
        v-for="i in 8"
        :key="i"
        title="Vue Conference 2024"
        date="2024-05-01"
        description="Developer Conference for Vue and JavaScript"
        @register="console.log('Registering...', i)"
      />
    </section>
    <h2 class="text-2xl font-medium">Your Bookings</h2>
  </main>
</template>
<script setup>
import EventCard from "./components/EventCard.vue";
</script>