<template>
  <div>
    <h1>Home Screen</h1>
    <RouterLink to="/projects">Go to Projects</RouterLink>
    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ project.name }}
      </li>
    </ul>
  </div>
</template>

<script setup >
import { supabase } from "@/lib/supabaseClient";
import { onMounted, ref } from "vue";

const projects = ref([]);
const fetchProjects = async () => {
  const { data, error } = await supabase.from("projects").select();
  if (error) console.log(error);
  console.log(data);
  projects.value = data;
};
onMounted(fetchProjects);
</script>