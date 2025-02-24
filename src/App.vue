<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <HelloWorld />
  <VueHooks />
  <CounterExample />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import VueHooks from "./components/VueHooks.vue";
import CounterExample from "./components/CounterExample.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    VueHooks,
    CounterExample,
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
  margin-top: 60px;
}
</style>
