<template>
  <div>
    Nuxt module playground!
  </div>
</template>

<script setup>
import { useNuxtApp } from '#app';
console.log(useNuxtApp().$sst);

const sst = new useNuxtApp().$sst(5620111);
console.log(sst);
</script>
