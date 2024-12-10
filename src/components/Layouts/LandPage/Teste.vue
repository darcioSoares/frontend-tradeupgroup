<template>
    <div class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        class="w-full h-48 object-cover"
        src="https://via.placeholder.com/150"
        alt="Card Image"
      />
      <div class="p-4">
        <h2 class="text-2xl font-bold text-gray-800">Título do Card</h2>
        <p class="mt-2 text-gray-600">
          Este é um exemplo de descrição para o card. Ele é responsivo e simples
          de usar com TailwindCSS.
        </p>
        <div class="mt-4 flex justify-between items-center">
          <button
            class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Saiba Mais
          </button>
          <span class="text-gray-700 font-bold">$49.99</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Card",
  };
  </script>
  