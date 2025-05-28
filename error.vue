<template lang="pug">
  NuxtLayout
    section.flex.flex-col.items-center.justify-center.h-screen.text-center.bg-gray-100.px-4
      h1.text-6xl.font-bold.text-gray-800.mb-4 {{ error.statusCode }}
      h2.text-2xl.text-gray-600.mb-2 {{ error.message || 'Page Not Found' }}
      NuxtLink(to="/" class="mt-4 inline-block text-blue-600 hover:underline") Go back home
</template>

<script setup lang="ts">
defineProps<{
  error: {
    statusCode: number
    message: string
  }
}>()
</script>
