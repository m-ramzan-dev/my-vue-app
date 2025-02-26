<script setup>
import { ref, onMounted } from "vue";
import ListItem from "./ListItem.vue";
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
const text = ref("");
const checked = ref(false);
const checkedNames = ref(["Ramzan"]);
const shift = ref("Day");
const singleSelection = ref("");
const multiSelection = ref([]);

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
      <ListItem v-for="item in list" :key="item" :item="item"></ListItem>
    </ul>
    <p v-else-if="list.length">List is hidden</p>
    <p v-else>List is empty</p>
  </div>

  <h1>Form Bindings</h1>
  <input v-model="text" />
  <p>{{ text }}</p>
  <input type="checkbox" v-model="checked" id="checkbox" />
  <label for="checkbox">Checked: {{ checked }}</label>
  <h1>Multiple Checkbox</h1>
  <input type="checkbox" id="ramzan" value="Ramzan" v-model="checkedNames" />
  <label for="ramzan">Ramzan</label>
  <input type="checkbox" id="ali" value="Ali" v-model="checkedNames" />
  <label for="ali">Ali</label>
  <input type="checkbox" id="rehman" value="Rehman" v-model="checkedNames" />
  <label for="rehman">Rehman</label>
  <h1>Your Preferred Shift for Work</h1>
  <input type="radio" id="day" value="Day" v-model="shift" />
  <label for="day">Day Time</label>
  <input type="radio" id="night" value="Night" v-model="shift" />
  <label for="night">Night Time</label>
  <p>Selected time: {{ shift }}</p>
  <h1>Single Selection</h1>
  <select name="Framework" id="framework" v-model="singleSelection">
    <option value="" disabled>Select one framework</option>
    <option value="">Laravel</option>
    <option value="">Flutter</option>
    <option value="">Vue</option>
  </select>
  <h1>Mutliple Selection</h1>
  <select name="Framework" id="framework" v-model="multiSelection" multiple>
    <option value="" disabled>Select multiple languages</option>
    <option value="">PHP</option>
    <option value="">Dart</option>
    <option value="">Javascript</option>
    <option value="">Java</option>
  </select>
</template>

<style scoped>
.red {
  color: red;
}
</style>