<script setup>
import { computed, ref } from "vue";

let id = 0;
const todo = ref("");
const hideCompleted = ref(false);

const todos = ref([
  { id: id++, text: "Learn Vue", done: true },
  { id: id++, text: "Learn Laravel", done: true },
  { id: id++, text: "Learn Flutter", done: false },
]);

const filteredTodos = computed(() => {
  return hideCompleted.value ? todos.value.filter((t) => !t.done) : todos.value;
});

function addTodo() {
  todos.value.push({ id: id++, text: todo.value, done: false });
  todo.value = "";
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo);
}

function toggleCompleted() {
  hideCompleted.value = !hideCompleted.value;
}
</script>



<template>
  <div class="hello">
    <h1>Welcome to My App</h1>
    <form @submit.prevent="addTodo">
      <input v-model="todo" required placeholder="Enter new to do" />
      <button>Add Todo</button>
    </form>

    <ul>
      <li v-for="todo in filteredTodos" :key="todo.id">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button @click="removeTodo(todo)">x</button>
      </li>
    </ul>
    <button @click="toggleCompleted">
      {{ hideCompleted ? "Show all" : "Hide completed" }}
    </button>
  </div>
</template>



<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.done {
  text-decoration: line-through;
}
</style>
