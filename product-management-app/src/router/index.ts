import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue";
import { h } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path: '/',
    name:"Home",
    component:HomeView
   },
   {
    path:'/projects',
    name:"Projects",
    component:() => import('@/views/ProjectsView.vue')
   },
   {
    path:'/projects/:id',
    name:"Project",
    component:() => import('@/views/SingleProjectView.vue')
   },
   {
    path:'/tasks',
    name:"Tasks",
    component:() => import('@/views/TasksView.vue')
   },
   {
    path:'/:pathMatch(.*)*',
    name:"NotFound",
    component:h('p',{style:'color:red'},'Page not found')
   }
  ],
})

export default router
