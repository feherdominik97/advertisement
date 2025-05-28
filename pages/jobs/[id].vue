<template lang="pug">
  LoadingSpinner.self-center(v-if="!job.id")
  section(v-else).container.mx-auto.px-4.py-12
    .flex.items-center.text-gray-800.mb-4
      h1(class="md:text-3xl max-md:text-xl font-bold") {{ job.title }}
      p(class="ml-auto font-bold md:text-2xl max-md:text-lg") {{ formatDate(job.created) }}
    .mb-4.p-2.bg-white.rounded.shadow
      .text-gray-800(v-html="DOMPurify.sanitize(job.description)")
      .flex.justify-end.p-2.items-center.gap-2
        button(v-if="applyVisible" class="p-2 bg-yellow-600 rounded text-white hover:bg-yellow-700" @click="apply()") Apply
        span.flex.items-center.text-green-800(v-if="!applyVisible") Applied
          Icon.ml-1(name="lucide:check")
    div(class="grid grid-cols-4 place-items-center gap-4 md:hidden mb-2")
      span(v-for="tag in job.tags" ) {{ tag }}
    .flex
      div(class="max-md:hidden")
        span.font-bold Tags:
        span(v-for="tag in job.tags" ) {{ tag }}
      p.ml-auto.font-bold
        span(class="max-md:hidden") Salary:
        span {{ ' ' + job.salary?.amount.toLocaleString() + ' ' + job.salary?.currency }}

</template>

<script setup lang="ts">
import type {Job} from "~/types/Job";
import {findJob} from "~/utils/api/jobs";
import {formatDate} from "~/utils/date";
import LoadingSpinner from "~/components/ui/LoadingSpinner.vue"
import DOMPurify from 'dompurify'

const route = useRoute()

const job = ref<Job>({})
const applyVisible = ref<boolean>(true)


//TODO: needs to be added to the job ad
function apply() {
  applyVisible.value = false
}

onMounted(async () => {
  job.value = await findJob(route.params.id)
  useHead({ title: `${job.value.title} - JobBoard` })
})

definePageMeta({
  middleware: 'auth'
})
</script>