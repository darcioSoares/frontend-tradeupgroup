<template>
    <section class="min-h-screen bg-gray-400 flex flex-col md:flex-row items-center justify-center p-8 gap-8">
      <!-- Texto Explicativo -->
      <div class="w-full md:w-1/2 flex flex-col justify-center items-start space-y-4">
        <h2 class="text-3xl font-bold">Ansioso ?</h2>
        <p class="text-lg leading-relaxed">
          Se você é ansioso e não vê a hora de sua encomenda chegar, estamos aqui para ajudar! Insira o CEP de onde seu produto está e visualize sua localização no mapa.
        </p>
        <button class="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
          Saiba Mais
        </button>
      </div>
  
  
      <!-- Imagem -->
      <div class="w-full md:w-1/2 flex items-center justify-center">
      
         <img :src="banner" alt="Imagem Send" 
           class="max-w-full h-auto rounded-lg shadow-md"
         />         
        
      </div>
    </section>
  </template>
  
<script>
import banner from "@/assets/send.jpg";

  export default {
    name: "SectionAndBanner",
    data() {
      return {  
         banner, 
      };
    },
  };
  </script>
  