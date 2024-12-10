<template>
    <div :style="{ height }" class="w-full bg-gray-50"></div>
  </template>
  
  <script>
  export default {
    name: "Spacer",
    props: {
      height: {
        type: String,
        default: "4rem",
      },
    },
  };
  </script>
  