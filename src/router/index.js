import { createRouter, createWebHistory } from "vue-router";

import LandPage from "../pages/LandPage.vue";


// Definindo as rotas
const routes = [
  {
    path: "/",
    name: "LandPage",
    component: LandPage,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
