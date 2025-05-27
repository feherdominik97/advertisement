<template lang="pug">
  LoadingSpinner(v-if="!jobs.length")
  section(v-else).container.mx-auto.px-4.py-12
    h1.text-3xl.font-bold.mb-4 Jobs
    .p-4
      Card(v-for="job in jobs" :job="job" @click="goToDetailed(job.id)")

</template>

<script setup lang="ts">
import type {Job} from "~/types/Job";
import {getJobs} from "~/utils/api/jobs";
import Card from "~/components/ui/Card.vue";
import LoadingSpinner from "~/components/ui/LoadingSpinner.vue";

const jobs: Ref<Array<Job>> = ref([])
const router = useRouter()

async function goToDetailed(id: string) {
    await router.push(`/jobs/${id}`)
}

onMounted(async () => {
  jobs.value = await getJobs()
})

useHead({ title: 'Jobs - JobBoard' })

definePageMeta({
  middleware: 'auth'
})

</script>

<style scoped>

</style>