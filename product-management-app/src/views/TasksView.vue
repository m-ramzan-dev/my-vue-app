<template>
  <div>
    <h1>Tasks View Screen</h1>
    <RouterLink to="/projects">Go to Projects</RouterLink>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.name }}
      </li>
    </ul>
  </div>
</template>
  
<script setup >
import { supabase } from "@/lib/supabaseClient";
import { onMounted, ref } from "vue";

const tasks = ref([]);
const fetchTasks = async () => {
  const { data, error } = await supabase.from("tasks").select();
  if (error) console.log(error);
  console.log(data);
  tasks.value = data;
};
onMounted(fetchTasks);
</script>