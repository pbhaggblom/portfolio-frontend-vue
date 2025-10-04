<script setup>
  import { ref } from "vue";
  import Header from "./components/Header.vue";
  import Navbar from "./components/Navbar.vue";

  const activeComponent = ref('About');

</script>

<template>
  <Header />
  <Navbar v-model="activeComponent" />
  <component :is="activeComponent"></component>
</template>

<style scoped></style>
