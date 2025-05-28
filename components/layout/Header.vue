<template lang="pug">
  header.bg-white.shadow-md
    .container.mx-auto.flex.justify-between.items-center.p-4
      //Home icon
      NuxtLink(to="/").text-2xl.font-bold.text-gray-800 JobBoard

      //Hamburger menu for mobile
      div(ref="menuRef" class="relative md:hidden")
        button(@click="toggleMenu" class="p-2 focus:outline-none space-y-1 cursor-pointer")
          span(class="block w-6 h-0.5 bg-black")
          span(class="block w-6 h-0.5 bg-black")
          span(class="block w-6 h-0.5 bg-black")
        //The dropdown
        transition(name="fade")
          ul(v-if="isOpen" class="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded shadow-lg z-10")
            li(class="px-4 py-2 hover:bg-gray-100")
              NuxtLink(to="/") Home
            li(class="px-4 py-2 hover:bg-gray-100")
              NuxtLink(to="/jobs") Jobs
            li(class="px-4 py-2 hover:bg-gray-100")
              NuxtLink(to="/post") Post a Job
            li(class="px-4 py-2 hover:bg-gray-100")
              NuxtLink(:to="`/user/${auth.user.id}/jobs`") My Jobs
            li(class="px-4 py-2 hover:bg-gray-100")
              NuxtLink(to="/about") About

      //Navbar for PC and tablet
      nav(class="flex space-x-4 max-md:hidden")
        NuxtLink(to="/" class="text-gray-600 hover:text-gray-900 transition-colors relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-full after:h-[2px] after:bg-gray-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100") Home
        NuxtLink(to="/jobs" v-if="auth.token" class="text-gray-600 hover:text-gray-900 transition-colors relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-full after:h-[2px] after:bg-gray-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100") Jobs
        NuxtLink(to="/post" v-if="auth.token" class="text-gray-600 hover:text-gray-900 transition-colors relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-full after:h-[2px] after:bg-gray-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100") Post a Job
        NuxtLink(:to="`/user/${auth.user.id}/jobs`" v-if="auth.token" class="text-gray-600 hover:text-gray-900 transition-colors relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-full after:h-[2px] after:bg-gray-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100") My Jobs
        NuxtLink(to="/about" class="text-gray-600 hover:text-gray-900 transition-colors relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-full after:h-[2px] after:bg-gray-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100") About
        span.border-l.border-gray-800
        button(v-if="auth.token" class="text-yellow-600 hover:text-yellow-800 transition-colors duration-300" @click="logout()") Logout
        button(v-else class="text-yellow-600 hover:text-yellow-800 transition-colors duration-300" @click="login()") Login
</template>

<script setup lang="ts">
const auth = useAuthStore()
const router = useRouter()
const isOpen = ref(false)
const menuRef = ref<HTMLElement | null>(null)

function logout() {
  auth.logout()
  router.push('/login')
}
function login() {
  router.push('/login')
}

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const handleClickOutside = (event: MouseEvent) => {
  if (menuRef.value && !menuRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
