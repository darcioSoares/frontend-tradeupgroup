<template>
  <div style="height:2rem;" class="w-full bg-gray-50"></div>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 space-y-6 p-4">
    <h1 class="text-2xl font-bold text-gray-800">Calcular Frete</h1>

    <div class="w-full max-w-md bg-white p-6 rounded shadow">
      <form @submit.prevent="calculateFreight" class="space-y-4">
        <!-- CEPs e Botão Calcular - Responsivo -->
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <!-- Primeiro CEP -->
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

          <!-- Segundo CEP -->
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

          <!-- Botão Calcular -->
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

    <!-- Resultado do Frete -->
    <div v-if="freightCost !== null" class="w-full max-w-md bg-white p-6 rounded shadow">
      <h2 class="text-lg font-semibold text-gray-800">Resultado</h2>
      <p class="text-gray-600 mt-2">Valor do Frete: <span class="font-bold">R$ {{ freightCost }}</span></p>
    </div>
  </div>
</template>
