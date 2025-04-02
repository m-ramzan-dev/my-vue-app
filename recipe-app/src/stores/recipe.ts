import { defineStore } from "pinia";
import { ref } from "vue";
interface Recipe {
    id:number,
    name:string,
    description:string
}

export const useRecipeStore = defineStore('recipeStore',()=>{
    const recipes = ref<Recipe[]>([]);

    const addRecipe = (recipe: Recipe) =>{
        recipes.value.push(recipe);
    }
    const removeRecipe = (id: number) =>{
        recipes.value = recipes.value.filter(recipe => recipe.id !== id);
    }
    const getRecipe = (id: number) =>{
        return recipes.value.find(recipe => recipe.id === id);
    }
    const getAllRecipes= () =>{
        return recipes.value;
    }
    const clearRecipes = () =>{
        recipes.value = [];
    }
    const updateRecipe = (id: number, updatedRecipe: Recipe) =>{
        const index = recipes.value.findIndex(recipe => recipe.id === id);
        if (index !== -1) {
            recipes.value[index] = { ...recipes.value[index], ...updatedRecipe };
        }
    }
    return {recipes,addRecipe,removeRecipe,getRecipe,getAllRecipes,clearRecipes,updateRecipe}
});