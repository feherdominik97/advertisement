<template lang="pug">
  form(@submit.prevent)
    div(class="flex flex-col md:flex-row gap-4 mb-6")

      input(
        type="text"
        v-model="filters.title"
        placeholder="Search by title..."
        class="flex-1 p-2 border rounded"
      )

      input(
        type="text"
        v-model="filters.tag"
        placeholder="Search by tag..."
        class="flex-1 p-2 border rounded"
      )

      input(
        type="number"
        v-model.number="filters.minSalary"
        placeholder="Min salary"
        class="w-32 p-2 border rounded"
      )
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
import type { Job } from '@/types/Job'
import { getJobs } from "~/utils/api/jobs"

const jobs = ref<Array<Job>>([])

const filters = reactive({
  title: '',
  tag: '',
  minSalary: 0
})

const filteredJobs = computed(() => {
  return jobs.value.filter((job: Job) => {
    const matchesTitle = filters.title === '' || job.title.toLowerCase().includes(filters.title.toLowerCase())
    const matchesTag = filters.tag === '' || job.tags.some(t => t.toLowerCase().includes(filters.tag.toLowerCase()))
    const matchesSalary = filters.minSalary === 0 || job.salary.amount >= filters.minSalary
    return matchesTitle && matchesTag && matchesSalary
  })
})

onMounted(async () => {
  jobs.value = await getJobs()
})

defineExpose({ filteredJobs })
</script>
