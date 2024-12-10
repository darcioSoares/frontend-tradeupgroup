<template>
  <div>
    <Banner />
    <Spacer />
    <SectionAndBanner />       
    <Spacer />
    <SectionAndBannerRight />
    <Spacer />
    <Footer /> 
  </div>
</template>
  
<script>

import Banner from "@/components/Layouts/LandPage/Banner.vue";
import SectionAndBanner from "@/components/Layouts/LandPage/SectionAndBanner.vue";
import SectionAndBannerRight from "@/components/Layouts/LandPage/SectionAndBannerRight.vue";
import Spacer from "@/components/Layouts/LandPage/Space.vue";
import Footer from "@/components/Layouts/LandPage/Footer.vue";
  
export default {
  name: "LandPage",
   components: {
    Banner,
    SectionAndBannerRight,
    SectionAndBanner,
    Spacer,
    Footer
  },
};

</script>
  