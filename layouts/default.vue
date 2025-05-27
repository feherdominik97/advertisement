<template lang="pug">
  div
    Header
    main.bg-gray-100.p-4.min-h-screen
      slot
    Footer
</template>
<script setup lang="ts">
import Header from "~/components/layout/Header.vue";
import Footer from "~/components/layout/Footer.vue";
</script>
<style scoped>

</style>