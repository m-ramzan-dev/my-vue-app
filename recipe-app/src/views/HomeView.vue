<script setup lang="ts">
import { useRecipeStore } from "../stores/recipe";
import { ref } from "vue";

const recipeStore = useRecipeStore();
const name = ref("");
const description = ref("");
function addRecipe() {
  recipeStore.addRecipe(name.value, description.value);
  name.value = "";
  description.value = "";
}
</script>

<template>
  <main>
    <h1>Home</h1>
    <p>
      Welcome to the Recipe App! Here you can find and manage your favorite
      recipes.
    </p>
    <div>
      <h1>Add Recipe</h1>
      <div>
        <input type="text" placeholder="Recipe Name" v-model="name" />
      </div>
      <div>
        <textarea name="description" id="" v-model="description"></textarea>
      </div>
      <button onclick="addRecipe" type="submit">Submit</button>
    </div>
  </main>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/favorites">Favorites</RouterLink>
      <RouterLink to="/add-favorites">Add Favorites</RouterLink>
    </nav>
  </header>
</template>
