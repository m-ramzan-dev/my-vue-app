import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('../views/FavoritesView.vue'),
    },
    {
      path: '/add-favorites',
      name: 'add-favorites',
      component: () => import('../views/AddFavoriteView.vue'),
    },
    {
      path:'/recipe/:id',
      name: 'recipe',
      component: () => import('../views/RecipeView.vue'),
    }
  ],
})

export default router
