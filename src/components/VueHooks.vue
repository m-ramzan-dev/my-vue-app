<script setup>
import { ref, onMounted } from "vue";
const elementRef = ref(null);
onMounted(() => {
  elementRef.value.textContent = "Using onMounted Life Cycle Method";
});

const message = ref("Learning Vue Js");
const tooltip = ref("Nice 👍");
const isRed = ref(false);
const color = ref("green");

function reverse() {
  message.value = message.value.split("").reverse().join("");
}
function append() {
  message.value += "!";
}
function toggleRed() {
  isRed.value = !isRed.value;
}
function toggleColor() {
  color.value = color.value == "green" ? "blue" : "green";
}
</script>
<template>
  <h1>Life Cycle Hooks</h1>
  <p ref="elementRef">Hello</p>
  <h1 @click="toggleColor" :style="{ color }">{{ message }}</h1>
  <span :title="tooltip" @click="toggleRed" :class="{ red: isRed }"
    >Hover Here to See ToolTip</span
  >
  <button @click="reverse">Reverse Message</button>
  <button @click="append">Append !</button>
</template>

<style scoped>
.red {
  color: red;
}
</style>