<template>
  <div style="height:2rem;" class="w-full bg-gray-50"></div>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-4 mt-1">
    <div class="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
      <h1 class="text-2xl font-bold text-gray-700 mb-4">Consultar CEP</h1>
      <form @submit.prevent="buscarEndereco" class="space-y-4">
        <div>
          <label for="origem" class="block text-sm font-medium text-gray-600">
            CEP
          </label>
          <input
            id="origem"
            v-model="cepOrigem"
            type="text"
            v-mask="'#####-###'"
            placeholder="Digite o CEP de origem"
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-sm"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Consultar
        </button>
      </form>
      <div v-if="address" class="mt-4 bg-gray-100 p-4 rounded-lg">
        <h2 class="text-lg font-medium text-gray-700 mb-2">Endereço:</h2>
        <p><strong>Logradouro:</strong> {{ address.logradouro }}</p>
        <p><strong>Bairro:</strong> {{ address.bairro }}</p>
        <p><strong>Cidade:</strong> {{ address.localidade }}</p>
        <p><strong>UF:</strong> {{ address.uf }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      cepOrigem: "", 
      address: null,
    };
  },
  methods: {
    async buscarEndereco() {
      const cepValido = /^\d{5}-\d{3}$/.test(this.cepOrigem);

      if (!cepValido) {
        alert("Por favor, insira um CEP válido no formato 12345-678.");
        return;
      }

      try {
        const payload = {
          cep: this.cepOrigem.replace('-', '')
        };

        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/zip`, payload);


        if (response.data && response.data.data) {
          this.address = response.data.data; 
        } else {
          throw new Error("Erro desconhecido ao buscar o endereço.");
        }
      } catch (error) {
        if (error.response && error.response.status === 422) {
          const errorMessage = error.response.data.errors?.cep?.[0] || "Erro na validação do CEP.";
          alert(errorMessage);
        } else {
          console.error(error.message || error);
          alert("Não foi possível buscar, Verifique o CEP.");
        }
      }
    },
  },
};
</script>