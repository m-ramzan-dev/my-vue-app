<template>
  <h2 class="text-2xl font-medium">Your Bookings</h2>

  <section class="grid grid-col-1 gap-4">
    <template v-if="bookingLoading">
      <BookedEventLoading v-for="i in 4" :key="i" />
    </template>
    <BookedEventCard
      v-for="booking in bookings"
      :key="booking.id"
      :title="booking.event_title"
      :status="booking.status"
      @cancel="cancelBooking(booking.id)"
    />
  </section>
</template>
<script setup>
import BookedEventCard from "./BookedEventCard.vue";
import BookedEventLoading from "./BookedEventLoading.vue";
import { onMounted } from "vue";
import useBookings from "../composables/useBookings";

const { bookings, bookingLoading, fetchBookings, cancelBooking } =
  useBookings();

onMounted(() => {
  fetchBookings();
});
</script>