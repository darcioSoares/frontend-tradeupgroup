import { createApp } from 'vue'
import './main.css'
import App from './App.vue'
import router from "./router/index";
import VueTheMask from "vue-the-mask";
//import VueGoogleMaps from '@fawmi/vue-google-maps';

const app = createApp(App);

// app.use(VueGoogleMaps, {
//     load: {
//       key: 'AIzaSyAelHWMczMbxGAHdMcJM00sNrP3VKaU4gc',
//       libraries: 'places'
//     },
// });

app.use(VueTheMask);
app.use(router);
app.mount("#app");


