<script setup>
import { ref } from "vue";

let id = 0;
const todo = ref("");

const todos = ref([
  { id: id++, text: "Learn Vue" },
  { id: id++, text: "Learn Laravel" },
  { id: id++, text: "Learn Flutter" },
]);

function addTodo() {
  todos.value.push({ id: id++, text: todo.value });
  todo.value = "";
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo);
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
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.text }}
        <button @click="removeTodo(todo)">x</button>
      </li>
    </ul>
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
</style>
