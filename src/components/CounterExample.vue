<script setup>
import { ref, watch } from "vue";
const todoId = ref(1);
const todoData = ref(null);
const count = ref(0);
function counting() {
  count.value++;
}
watch(count, () => {
  console.log(`New count value: ${count.value}`);
});

fetchTodo();
async function fetchTodo() {
  todoData.value = null;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  );
  todoData.value = await res.json();
}
watch(todoId, fetchTodo);
</script>
<template>
  <div>
    <h1>Counter Example with Vue Watchers</h1>
    <span>{{ count }}</span>
    <button @click="counting">Count</button>
  </div>
  <div>
    <h1>Fetch Api Example with Vue Watchers</h1>
    <p>Todo Id: {{ todoId }}</p>
    <button @click="todoId++" :disabled="!todoData">Fetch Next Todo</button>
    <p v-if="!todoData">Loading...</p>
    <pre v-else>{{ todoData }}</pre>
  </div>
</template>

<style scoped>
span {
  display: block;
  font-size: 26px;
  font-weight: bold;
}
</style>