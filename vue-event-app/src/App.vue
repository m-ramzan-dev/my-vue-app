<template>
  <main class="bg-gray mx-auto space-y-8 p-8">
    <h1 class="text-4xl font-medium">Event Booking App</h1>
    <h2 class="text-2xl font-medium">All Events</h2>
    <section class="grid grid-cols-2 gap-8">
      <EventCard
        v-for="i in 8"
        :key="i"
        @register="console.log('Registering...', i)"
      >
        <template v-slot:title>Vue Conference 2024</template>
        <template v-slot:description
          >Developer Conference for Vue and JavaScript</template
        >
        <template v-slot:date>2024-05-01</template>
      </EventCard>
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
</script>