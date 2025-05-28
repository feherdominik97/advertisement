<template lang="pug">
  .container.mx-auto.px-4.py-12
    form(@submit.prevent="submit")
      .flex.w-full.items-center.mb-6
        h1.text-3xl.font-bold Post a New Job
        div.ml-auto.flex
          button(class="flex items-center bg-yellow-600 text-white font-bold p-1 rounded hover:bg-yellow-700")
            Icon.text-2xl(name="lucide:plus")

      .mb-4
        label.block.text-sm.font-medium(for="title") Job Title
        input#title(type="text" v-model="form.title" required class="mt-1 w-full p-2 border rounded")

      .mb-4
        label.block.text-sm.font-medium(for="description") Description
        textarea#description(v-model="form.description" required rows="5" class="mt-1 w-full p-2 border rounded")

      .mb-4
        label.block.text-sm.font-medium(for="tags") Tags (comma separated)
        input#tags(type="text" v-model="form.tags" class="mt-1 w-full p-2 border rounded")

      .mb-4
        label.block.text-sm.font-medium(for="salaryAmount") Salary
        input#salaryAmount(type="number" v-model.number="form.salary.amount" required class="mt-1 w-full p-2 border rounded")

      .mb-4
        label.block.text-sm.font-medium(for="currency") Currency
        select#currency(v-model="form.salary.currency" required class="mt-1 w-full p-2 border rounded appearance-none")
          option(value="HUF") HUF
          option(value="EUR") EUR
          option(value="USD") USD
</template>

<script setup lang="ts">
import { getNextId, postJob } from "~/utils/api/jobs"
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type {Job} from '~/types/Job'

const router = useRouter()
const auth = useAuthStore()

const form = ref({
  title: '',
  description: '',
  tags: '',
  salary: {
    amount: 0,
    currency: 'HUF',
  }
})

const submit = async () => {
  // Simulate API call or save to store
  const newJob: Job = {
    id: getNextId(),
    userId: auth.user.id,
    title: form.value.title,
    description: form.value.description,
    tags: form.value.tags.split(',').map((t: string) => t.trim()),
    created: Date.now(),
    salary: form.value.salary
  }

  const response = await postJob(newJob)

  alert(response ? 'Job submitted' : 'Error')
}

useHead({ title: 'Post a Job - JobBoard' })

definePageMeta({
  middleware: 'auth'
})

</script>

<style scoped>
</style>
