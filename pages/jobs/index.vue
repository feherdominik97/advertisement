<template lang="pug">
  section.container.mx-auto.px-4.py-12
    h1.text-3xl.font-bold.mb-4 Jobs
    JobFilter(ref="jobs")
    LoadingSpinner(v-if="!jobs?.filteredJobs.length")
    .p-4(v-else)
      Card(v-for="job in jobs?.filteredJobs" :job="job" hover @click="goToDetailed(job.id)")

</template>

<script setup lang="ts">
import Card from "~/components/ui/Card.vue"
import type { Job } from "~/types/Job"
import LoadingSpinner from "~/components/ui/LoadingSpinner.vue"
import JobFilter from "~/components/ui/JobFilter.vue"

const jobs = ref<Array<Job>>()
const router = useRouter()

async function goToDetailed(id: string) {
    await router.push(`/jobs/${id}`)
}

useHead({ title: 'Jobs - JobBoard' })

definePageMeta({
  middleware: 'auth'
})

</script>