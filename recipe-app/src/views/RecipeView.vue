<template>
  <div>Recipe {{ route.params.id }}</div>
</template>

<script setup lang="ts">
import { useRecipeStore } from "../stores/recipe";
import { useRoute } from "vue-router";
import { computed } from "vue";
const route = useRoute();
const recipeStore = useRecipeStore();
const recipe = computed(() => {
  recipeStore.getRecipe(route.params.id as string);
});
</script>