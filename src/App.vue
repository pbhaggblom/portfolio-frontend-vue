<script setup>
  import { ref } from "vue";
  import Header from "./components/Header.vue";
  import Navbar from "./components/Navbar.vue";
  import Footer from "./components/Footer.vue";

  const currentSection = ref('About');

</script>

<template>
  <Header />
  <Navbar v-model="currentSection" />
  <component :is="currentSection"></component>
  <Footer />
</template>

<style scoped></style>
