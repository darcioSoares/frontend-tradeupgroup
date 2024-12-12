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

      <router-link to="/zip-code-value" class="bg-indigo-600 text-white hover:bg-indigo-700 rounded-full font-bold py-2 px-4">
          Saiba mais
      </router-link>
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
