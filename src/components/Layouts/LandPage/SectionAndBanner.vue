<template>
  <section class="min-h-screen bg-gray-400 flex flex-col md:flex-row items-center justify-center p-8 gap-8">

      <!-- Imagem -->
    <div class="w-full md:w-1/2 flex items-center justify-center">
    
    <img :src="bike" alt="Imagem Send" 
      class="max-w-full h-auto rounded-lg shadow-md"
    />         
   
 </div>
    <!-- Texto Explicativo -->
    <div class="w-full md:w-1/2 flex flex-col justify-center items-start space-y-4">
      <h2 class="text-3xl font-bold">Calcule os valores de seus pedidos</h2>
      <p class="text-lg leading-relaxed">
        Calcule o valor dos seus pedidos e nunca mais seja pego de surpresa.
      </p>
      <button class="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
        Saiba Mais
      </button>
    </div>



  </section>
</template>

<script>
import bike from "@/assets/bike.jpg";

export default {
  name: "SectionAndBanner",
  data() {
    return {  
       bike, 
    };
  },
};
</script>
