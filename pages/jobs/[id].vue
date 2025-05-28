<template lang="pug">
  LoadingSpinner.self-center(v-if="!job.id")
  section(v-else).container.mx-auto.px-4.py-12
    .flex.items-center.text-gray-800
      h1.text-3xl.font-bold.mb-4 {{ job.title }}
      p.ml-auto.font-bold.text-2xl {{ formatDate(job.created) }}
    .mb-4.p-2.bg-white.rounded.shadow
      .text-gray-800(v-html="DOMPurify.sanitize(job.description)")
    .flex
      .flex.gap-2
        span.font-bold Tags:
        span(v-for="tag in job.tags" ) {{ tag }}
      p.ml-auto.font-bold Salary: {{ job.salary?.amount.toLocaleString() + ' ' + job.salary?.currency }}

</template>

<script setup lang="ts">
import type {Job} from "~/types/Job";
import {findJob} from "~/utils/api/jobs";
import {formatDate} from "~/utils/date";
import LoadingSpinner from "~/components/ui/LoadingSpinner.vue"
import DOMPurify from 'dompurify'

const route = useRoute()

const job: Ref<Job> = ref({})

onMounted(async () => {
  job.value = await findJob(route.params.id)
  useHead({ title: `${job.value.title} - JobBoard` })
})

definePageMeta({
  middleware: 'auth'
})
</script>