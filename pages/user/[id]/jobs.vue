<template lang="pug">
  section.container.mx-auto.px-4.py-12
    h1.text-3xl.font-bold.mb-4 My Jobs
    LoadingSpinner(v-if="!jobs.length")
    .p-4(v-else)
      Card(v-for="job in jobs" :job="job" has-delete has-edit @delete="deleteJob" @edit="editJob")

</template>

<script setup lang="ts">
import type { Job } from "~/types/Job";
import { getJobsForUser } from "~/utils/api/jobs";
import Card from "~/components/ui/Card.vue";
import LoadingSpinner from "~/components/ui/LoadingSpinner.vue";

const jobs: Ref<Array<Job>> = ref([])
const router = useRouter()
const route = useRoute()

function deleteJob(id: string) {
  const index = jobs.value.findIndex((job: Job) => job.id === id)
  if (index !== -1) jobs.value.splice(index, 1)
}

function editJob(job: Job) {
  const index = jobs.value.findIndex((item: Job) => item.id === job.id)
  if (index !== -1) {
    jobs.value[index] = job
  }
}

onMounted(async () => {
  jobs.value = await getJobsForUser(route.params.id)
})

useHead({ title: 'My Jobs - JobBoard' })

definePageMeta({
  middleware: 'auth'
})
</script>