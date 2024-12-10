<template>
  <div>
    <header class="w-full bg-gray-50 text-black p-8 h-15 sm:h-20 flex items-center justify-between fixed top-0 left-0 z-50 shadow-md">
           
      <router-link to="/" >  
        <img :src="logo" alt="Logo TradeUp" width="200px" />       
       </router-link>
      <nav class="space-x-2">
        <router-link to="/" class="rounded-full font-bold py-2 px-4">
          Home
        </router-link>

        <router-link to="/zip-code" class="rounded-full font-bold py-2 px-4">
          Consulte seu CEP
        </router-link>

        <router-link to="/zip-code-value" class="rounded-full font-bold py-2 px-4">
          Calculo de Frete
        </router-link>

        <router-link to="/map" class="rounded-full py-2 font-bold px-4">
          Mapa
        </router-link> 

      </nav>
    </header>
    <main>
    
        <router-view />
   
    </main>
  </div>
</template>

<script>
import logo from "@/assets/tradeup.png";

export default {
  name: "App",
  data() {
    return {
      logo,
    };
  },
};
</script>
