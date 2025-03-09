<template>
  <template v-if="eventError">
    <ErrorComponent :retry="fetchEvents">{{
      eventError
    }}</ErrorComponent></template
  >
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
import ErrorComponent from "./ErrorComponent.vue";
import { onMounted } from "vue";
import useBookings from "../composables/useBookings";

const { events, eventsLoading, eventError, fetchEvents } = useBookings();

onMounted(() => {
  fetchEvents();
});
defineEmits(["bookEvent"]);
</script>