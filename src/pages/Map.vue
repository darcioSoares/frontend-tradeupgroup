<template>
     <div style="height:6rem;" class="w-full bg-gray-50"></div>
    <div class="flex flex-col items-center justify-center h-screen bg-gray-100 space-y-4">
      <div class="flex space-x-2">
        <input
          v-model="cep"
          type="text"
          placeholder="Digite o CEP"
          class="border border-gray-300 rounded px-4 py-2"
        />
        <button
          @click="fetchLocation"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Buscar
        </button>
      </div>
  
      <div id="map" class="w-4/5 h-96 border border-gray-300"></div>
    </div>
  </template>
  
  <script>
  import Spacer from "@/components/Layouts/Space.vue";
  export default {
    name: "GoogleMap",
    components: {
        Spacer
    },
    data() {
      return {
        map: null, 
        marker: null,
        infoWindow: null,
        cep: "", 
      };
    },
    methods: {
      initMap(lat = -23.4858144, lng = -46.86218) {
        
        if (typeof google !== "undefined" && google.maps) {
          const mapOptions = {
            center: { lat, lng },
            zoom: 15,
          };
  
          if (!this.map) {            
            this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
          } else {           
            this.map.setCenter({ lat, lng });
          }
  
          // Inicializa a InfoWindow - uma única vez
          if (!this.infoWindow) {
            this.infoWindow = new google.maps.InfoWindow();
          }
        } else {
          console.error("Google Maps API não está disponível.");
        }
      },
      addMarker(lat, lng, address) {
        const position = { lat, lng };
         
        if (!this.marker) {
          this.marker = new google.maps.Marker({
            position,
            map: this.map,
            title: address,
          });
        } else {
          this.marker.setPosition(position);
        }
  
    
        this.marker.addListener("click", () => {
          this.infoWindow.setContent(`<p><strong>Endereço:</strong> ${address}</p>`);
          this.infoWindow.open(this.map, this.marker);
        });
      },
      async fetchLocation() {
     
        if (!this.cep || this.cep.length < 8) {
          alert("Por favor, insira um CEP válido.");
          return;
        }
  
        try {         
          const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?address=${this.cep}&key=AIzaSyAelHWMczMbxGAHdMcJM00sNrP3VKaU4gc`
          );
          const data = await response.json();
  
          if (data.status === "OK") {
            const location = data.results[0].geometry.location;
            const address = data.results[0].formatted_address;
              
            this.initMap(location.lat, location.lng);
            this.addMarker(location.lat, location.lng, address);
          } else {
            alert("Não foi possível encontrar o endereço. Tente outro CEP.");
          }
        } catch (error) {
          console.error("Erro ao buscar localização:", error);
          alert("Ocorreu um erro ao buscar a localização. Tente novamente.");
        }
      },
    },
    mounted() {      
      this.initMap();
    },
  };
  </script>
  