<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <HelloWorld />
  <VueHooks />
  <CounterExample />
  <FlightBooking />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import VueHooks from "./components/VueHooks.vue";
import CounterExample from "./components/CounterExample.vue";
import FlightBooking from "./components/FlightBooking.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    VueHooks,
    CounterExample,
    FlightBooking,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px;
}
</style>
