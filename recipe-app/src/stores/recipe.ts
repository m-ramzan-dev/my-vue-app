import { defineStore } from "pinia";
import { ref } from "vue";
interface Recipe {
    id:string,
    name:string,
    description:string
}

export const useRecipeStore = defineStore('recipeStore',()=>{
    const recipes = ref<Recipe[]>([]);

    const addRecipe = (name:string,description:string) =>{
        recipes.value.push({
            id:Date.now().toString(),
            name,
            description
        });
    }
    const removeRecipe = (id: string) =>{
        recipes.value = recipes.value.filter(recipe => recipe.id !== id);
    }
    const getRecipe = (id: string) =>{
        return recipes.value.find(recipe => recipe.id === id);
    }
    const getAllRecipes= () =>{
        return recipes.value;
    }
    const clearRecipes = () =>{
        recipes.value = [];
    }
    const updateRecipe = (id: string, updatedRecipe: Recipe) =>{
        const index = recipes.value.findIndex(recipe => recipe.id === id);
        if (index !== -1) {
            recipes.value[index] = { ...recipes.value[index], ...updatedRecipe };
        }
    }
    return {recipes,addRecipe,removeRecipe,getRecipe,getAllRecipes,clearRecipes,updateRecipe}
});