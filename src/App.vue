<script setup>
  import { ref } from "vue";
  import Header from "./components/Header.vue";
  import Navbar from "./components/Navbar.vue";

  const activeComponent = ref('About');

  const getActive = (component) => {
    activeComponent.value = component;
  }

</script>

<template>
  <Header />
  <Navbar @update="getActive" />
  <component v-bind:is="activeComponent"></component>
</template>

<style scoped></style>
