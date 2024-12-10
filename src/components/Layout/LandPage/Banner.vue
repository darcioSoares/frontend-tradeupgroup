<template>
    <section
      class="min-h-screen bg-cover bg-center relative flex items-center justify-center p-8 mx-8"
      :style="{ backgroundImage: `url(${banner})` }"
    >
      <!-- Overlay para escurecer a imagem e melhorar a legibilidade do texto -->
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
  
      <!-- Texto Sobreposto -->
      <div class="relative text-center text-white p-4 max-w-2xl">
        <h2 class="text-4xl font-bold mb-4">Banner Importante</h2>
        <p class="text-lg">
          Este é um banner com uma imagem de fundo. Adicione aqui uma mensagem importante ou uma chamada para ação.
        </p>
        <button class="mt-6 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md">
          Saiba Mais
        </button>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "Banner",
    data() {
      return {
        banner: require("../../../assets/send.jpg"),
      };
    },
  };
  </script>
  