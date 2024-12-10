<template>
  <section   
    :class="[
      'min-h-screen', 
      'bg-cover', 
      'bg-center', 
      'relative', 
      'flex', 
      'items-center', 
      'justify-center', 
      'p-8', 
      'mx-8'
    ]"
    :style="{ backgroundImage: `url(${banner})` }"   
  >

    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    
    <!-- Texto Sobreposto -->
    <div class="relative text-center text-white p-4 max-w-2xl">
      <h2 class="text-4xl font-bold mb-4">Banner Importante</h2>
      <p class="text-lg">
        Este é um banner com uma imagem de fundo. Adicione aqui uma mensagem importante ou uma chamada para ação.
      </p>

    </div>
  </section>
</template>

<script>
import banner from "@/assets/map.jpg";

export default {
  name: "Banner",
  data() {
    return {    
      banner,
    };
  },
};
</script>
