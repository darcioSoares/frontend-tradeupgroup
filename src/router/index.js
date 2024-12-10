import { createRouter, createWebHistory } from "vue-router";

import LandPage from "../pages/LandPage.vue";
import ConsultZipCode from "../pages/ConsultZipCode.vue";
import Map from "../pages/Map.vue" 
import ZipCodeValue from "../pages/ZipCodeValue.vue" 

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
  {
    path: "/map",
    name: "Map",
    component: Map,
  },
  {
    path: "/zip-code-value",
    name: "zipCodeValue",
    component: ZipCodeValue,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
