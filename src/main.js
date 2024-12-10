import { createApp } from 'vue'
import './main.css'
import App from './App.vue'
import router from "./router/index";
import VueTheMask from "vue-the-mask";

const app = createApp(App);
app.use(VueTheMask);
app.use(router);
app.mount("#app");


