import { defineStore } from "pinia";
import { ref } from "vue";
interface Recipe {
    id:number,
    name:string,
    description:string
}

export const useRecipeStore = defineStore('recipeStore',()=>{
    const recipes = ref<Recipe[]>([]);
    return {recipes}
});