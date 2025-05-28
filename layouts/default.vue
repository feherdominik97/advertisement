<template lang="pug">
  div.min-h-screen.flex.flex-col
    Header
    main.bg-gray-100.p-4.flex-grow
      slot
    Footer.mt-auto
</template>
<script setup lang="ts">
import Header from "~/components/layout/Header.vue";
import Footer from "~/components/layout/Footer.vue";
</script>