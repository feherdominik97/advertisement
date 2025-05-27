<template lang="pug">
  .space-y-2
    h2.text-xl.font-semibold.text-gray-800
      slot(name="title")
    p.text-gray-600
      slot(name="content")
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>