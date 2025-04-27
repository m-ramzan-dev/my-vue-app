<script setup lang="ts">
import { useRecipeStore } from "../stores/recipe";
import { computed, ref } from "vue";

const recipeStore = useRecipeStore();
const name = ref("");
const description = ref("");
function addRecipe() {
  recipeStore.addRecipe(name.value, description.value);
  name.value = "";
  description.value = "";
}
const recipes = computed(() => {
  return recipeStore.getAllRecipes();
});
</script>

<template>
  <main>
    <h1>Home</h1>
    <p>
      Welcome to the Recipe App! Here you can find and manage your favorite
      recipes.
    </p>
    <div>
      <h1>Recipes</h1>
      <div>
        <ul>
          <li v-for="recipe in recipes" :key="recipe.id">
            <RouterLink :to="{ name: 'recipe', params: { id: recipe.id } }">
              {{ recipe.name }}
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <h1>Add Recipe</h1>
      <div>
        <input type="text" placeholder="Recipe Name" v-model="name" />
      </div>
      <div>
        <textarea name="description" id="" v-model="description"></textarea>
      </div>
      <button @click="addRecipe" type="button">Submit</button>
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
