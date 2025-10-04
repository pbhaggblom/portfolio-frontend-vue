<script setup>
  import { ref } from "vue";
  import Header from "./components/Header.vue";
  import Navbar from "./components/Navbar.vue";

  const currentSection = ref('About');

</script>

<template>
  <Header />
  <Navbar v-model="currentSection" />
  <component :is="currentSection"></component>
</template>

<style scoped></style>
