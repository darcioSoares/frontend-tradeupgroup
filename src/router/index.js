import { createRouter, createWebHistory } from "vue-router";

import LandPage from "../pages/LandPage.vue";
import ConsultZipCode from "../pages/ConsultZipCode.vue";

// Definindo as rotas
const routes = [
  {
    path: "/",
    name: "LandPage",
    component: LandPage,
  },
  {
    path: "/zip-code",
    name: "ConsultZipCode",
    component: ConsultZipCode,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
