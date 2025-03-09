import {  ref } from "vue";
const bookings = ref([]);
const bookingLoading = ref(false);

const events = ref([]);
const eventsLoading = ref(false);
const eventError = ref(null);
const bookingError = ref(null);


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
    bookingError.value = null;
    bookingLoading.value = true;
    try {
      const response = await fetch("http://localhost:3001/bookings");
      bookings.value = await response.json();
      
    }catch(e){
        console.error(e);
        bookingError.value =e;
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


async function fetchEvents() {
  console.log("Fetching events...");
  eventsLoading.value = true;
  eventError.value = null;
  
  try {
    const response = await fetch("http://localhost:3001/events");
    events.value = await response.json();
    console.log("Events fetched successfully",response);
    
  } catch (err) {
    eventError.value = err;
    console.error(err);
  } finally {
    eventsLoading.value = false;
  }
}

  export default function useBookings  ()  {
    return { bookings,bookingLoading,bookingError,bookEvent, fetchBookings, cancelBooking,fetchEvents,events,eventError,eventsLoading };
  }