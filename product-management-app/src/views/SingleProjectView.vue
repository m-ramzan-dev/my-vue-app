<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
</script>
<template>
  <div>
    <h1>Single Project {{ route.params?.id }}</h1>
    <RouterLink to="/projects">Go to Projects</RouterLink>
  </div>
</template>