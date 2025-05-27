<template lang="pug">
  header.bg-white.shadow-md
    .container.mx-auto.flex.justify-between.items-center.p-4
      NuxtLink(to="/").text-2xl.font-bold.text-gray-800 JobBoard

      nav.flex.space-x-4
        NuxtLink(to="/" class="text-gray-600 hover:text-gray-900 transition-colors relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-full after:h-[2px] after:bg-gray-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100") Home
        NuxtLink(to="/jobs" class="text-gray-600 hover:text-gray-900 transition-colors relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-full after:h-[2px] after:bg-gray-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100") Jobs
        NuxtLink(to="/post" class="text-gray-600 hover:text-gray-900 transition-colors relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-full after:h-[2px] after:bg-gray-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100") Post a Job
        NuxtLink(to="/about" class="text-gray-600 hover:text-gray-900 transition-colors relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-full after:h-[2px] after:bg-gray-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100") About
        span.border-l.border-gray-800
        button(class="text-yellow-600 hover:text-yellow-800 transition-colors duration-300" @click="logout()") Logout
</template>

<script setup lang="ts">
const auth = useAuthStore()
const router = useRouter()

function logout() {
  auth.logout()
  router.push('/login')
}
</script>

<style scoped>
</style>
