<template>
    <header class="w-full bg-gray-50 text-black p-8 h-15 sm:h-20 flex items-center justify-between fixed top-0 left-0 z-50 shadow-md">
      <img :src="logo" alt="Logo" width="300px" />
      <nav class="space-x-4">
        <router-link to="/login" class="bg-orange-500 rounded-full py-2 px-6">
          Login
        </router-link>
        <router-link to="/signup" class="bg-orange-500 rounded-full py-2 px-6">
          Crie sua Conta
        </router-link>
      </nav>
    </header>
  </template>
  
  <script>
  import logo from "../../../assets/logo_MINI.png";
  
  export default {
    name: "Header",
    data() {
      return {
        logo,
      };
    },
  };
  </script>
  