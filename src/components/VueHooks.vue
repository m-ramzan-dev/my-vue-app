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
const showList = ref(true);
const list = ref([1, 2, 3]);

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
  <div>
    <button @click="showList = !showList">Toggle List</button>
    <button @click="list.push(list.length + 1)">Push Number</button>
    <button @click="list.pop()">Pop Number</button>
    <button @click="list.reverse()">Reverse List</button>
  </div>
  <div>
    <ul v-if="showList && list.length">
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>
    <p v-else-if="list.length">List is hidden</p>
    <p v-else>List is empty</p>
  </div>
</template>

<style scoped>
.red {
  color: red;
}
</style>