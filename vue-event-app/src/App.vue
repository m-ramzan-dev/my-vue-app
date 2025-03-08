<template>
  <main class="bg-gray-100 mx-auto space-y-8 p-8">
    <h1 class="text-4xl font-medium">Event Booking App</h1>
    <EventList @bookEvent="bookEvent($event)" />
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
  </main>
</template>

<script setup>
import BookedEventCard from "./components/BookedEventCard.vue";
import BookedEventLoading from "./components/BookedEventLoading.vue";
import EventList from "./components/EventList.vue";
import { onMounted, ref } from "vue";

const bookings = ref([]);
const bookingLoading = ref(false);
const error = ref(null);

async function bookEvent(event) {
  if (bookings.value.some((b) => b.event_id === event.id)) {
    alert("You have already booked this event.");
    return;
  }
  const booking = {
    id: Date.now().toString(),
    user_id: 1,
    event_id: event.id,
    event_title: event.title,
    status: "pending",
  };
  bookings.value.push(booking);
  try {
    const response = await fetch("http://localhost:3001/bookings", {
      method: "POST",
      body: JSON.stringify({ ...booking, status: "confirmed" }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      const index = bookings.value.findIndex((b) => b.id === booking.id);
      bookings.value[index] = await response.json();
    } else {
      throw new Error("Failed to book event.");
    }
  } catch (e) {
    console.log(e);
    bookings.value = bookings.value.filter((b) => b.id !== booking.id);
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
async function cancelBooking(bookingId) {
  const index = bookings.value.findIndex((b) => b.id === bookingId);
  if (index === -1) return;

  const originalBooking = { ...bookings.value[index] };
  bookings.value.splice(index, 1);

  try {
    const response = await fetch(
      `http://localhost:3001/bookings/${bookingId}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to cancel booking.");
    }
    console.log(`Booking ${bookingId} canceled successfully`);
  } catch (e) {
    console.error(e);
    bookings.value.splice(index, 0, originalBooking);
  }
}

onMounted(() => {
  fetchBookings();
});
</script>