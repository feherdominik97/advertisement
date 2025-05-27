<template lang="pug">
  section.flex.items-center.justify-center
    .w-full.max-w-sm.p-8.bg-white.rounded-lg.shadow-md
      h1.text-2xl.font-bold.mb-6.text-center.text-gray-800 Login
      form(@submit.prevent="handleLogin")
        label.block.mb-2.text-sm.font-medium.text-gray-700(for="username") Username
        input#email(
          v-model="username"
          type="username"
          required
          placeholder="username"
          class="w-full mb-4 px-3 py-2 border border-gray-300 rounded"
        )

        label.block.mb-2.text-sm.font-medium.text-gray-700(for="password") Password
        input#password(
          v-model="password"
          type="password"
          required
          placeholder="••••••••"
          class="w-full mb-4 px-3 py-2 border border-gray-300 rounded"
        )

        button(
          type="submit"
          class="w-full bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700 transition"
        ) Login
</template>

<script setup lang="ts">
const username = ref('')
const password = ref('')
const router = useRouter()
const auth = useAuthStore()

useHead({ title: 'Login - JobBoard' })

const handleLogin = async () => {
  try {
    await auth.login(username.value, password.value)
    console.log('Login successful')
    await router.push('/')
    return
  } catch (e) {
    console.error('Login failed', e)
    alert('Login failed. Please check your credentials.')
  }

}
</script>
