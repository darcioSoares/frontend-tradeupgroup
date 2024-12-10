<template>
  <div>
    <header class="w-full bg-gray-50 text-black p-8 h-15 sm:h-20 flex items-center justify-between fixed top-0 left-0 z-50 shadow-md">
      <img :src="logo" alt="Logo TradeUp" width="200px" />
      <nav class="space-x-4">
        <router-link to="/check-zip-code" class="bg-orange-500 rounded-full py-2 px-6">
          Consulte seu CEP
        </router-link>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import logo from "@/assets/tradeup.png";

export default {
  name: "App",
  data() {
    return {
      logo,
    };
  },
};
</script>
