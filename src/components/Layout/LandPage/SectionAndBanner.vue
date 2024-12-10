<template>
    <section class="min-h-screen bg-gray-50 flex flex-col md:flex-row items-center justify-center p-8 gap-8">
      <!-- Texto Explicativo -->
      <div class="w-full md:w-1/2 flex flex-col justify-center items-start space-y-4">
        <h2 class="text-3xl font-bold">Texto Explicativo</h2>
        <p class="text-lg leading-relaxed">
          Esta é uma breve descrição da imagem ao lado. A seção é responsiva e adapta-se a qualquer
          tamanho de tela. Em telas menores, o layout muda para uma coluna.
        </p>
        <button class="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          Saiba Mais
        </button>
      </div>
  
      <!-- Imagem -->
      <div class="w-full md:w-1/2 flex items-center justify-center">
        <img
          :src="people"
          alt="Imagem Descritiva"
          class="max-w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </section>
  </template>
  
  <script>
  import people from "../../../assets/work_boxjpg";
  
  export default {
    name: "SectionAndBanner",
    data() {
      return {
        people,
      };
    },
  };
  </script>
  