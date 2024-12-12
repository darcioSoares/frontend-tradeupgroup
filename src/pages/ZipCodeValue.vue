<template>
  <div style="height:4rem;" class="w-full bg-gray-50"></div>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 space-y-6 p-4">
    <h1 class="text-2xl font-bold text-gray-800">Calcular Frete</h1>

    <div class="w-full max-w-md bg-white p-6 rounded shadow">
      <form @submit.prevent="calculateFreight" class="space-y-4">

        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
 
          <div class="col-span-1 md:col-span-1">
            <label for="cep1" class="block text-sm font-medium text-gray-700">CEP de Origem</label>
            <input
              id="cep1"
              v-model="cep1"
              type="text"
              placeholder="Origem"
              class="mt-1 block w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>
    
          <div class="col-span-1 md:col-span-1">
            <label for="cep2" class="block text-sm font-medium text-gray-700">CEP de Destino</label>
            <input
              id="cep2"
              v-model="cep2"
              type="text"
              placeholder="Destino"
              class="mt-1 block w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>

          <div class="col-span-1 md:col-span-1 flex items-end">
            <button
              type="submit"
              class="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Calcular
            </button>
          </div>
        </div>
      </form>
    </div>

    <div v-if="freightCost !== null" class="w-full max-w-md bg-white p-6 rounded shadow">
      <h2 class="text-lg font-semibold text-gray-800">Resultado</h2>
      <p class="text-gray-600 mt-2">Valor do Frete: <span class="font-bold">R$ {{ freightCost }}</span></p>
      <p class="text-gray-600 mt-2">Distância: <span class="font-bold">{{ distanceKm }} km</span></p>
      <div class="mt-4">
        <span class="text-red-600 mt-6">1 km equivale a 1 real</span>
      </div>

    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      cep1: "", 
      cep2: "", 
      freightCost: null,
      distanceKm: null,
    };
  },
  methods: {
    async calculateFreight() {
      // Validação básica dos CEPs
      const cepValido = /^\d{5}-?\d{3}$/;
      if (!cepValido.test(this.cep1) || !cepValido.test(this.cep2)) {
        alert("Por favor, insira CEPs válidos no formato 12345-678.");
        return;
      }

      try {
        // Preparação do payload
        const payload = {
          cep_origin: this.cep1.replace('-', ''),
          cep_destination: this.cep2.replace('-', ''),
        };

     
        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/distance-value`, payload);


        if (response.data && response.data.data) {
          this.distanceKm = response.data.data.distance_km;
          this.freightCost = response.data.data.cost.toFixed(2);
        } else {
          throw new Error("Erro ao calcular o frete.");
        }
      } catch (error) {
   
        if (error.response && error.response.status === 422) {
          const errorMessage = error.response.data.errors?.cep_origin?.[0] || "Erro de validação nos CEPs.";
          alert(errorMessage);
        } else {
          console.error(error.message || error);
          alert("Não foi possível calcular o frete. Verifique os CEPs e tente novamente.");
        }
      }
    },
  },
};
</script>
