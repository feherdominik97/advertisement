<template lang="pug">
  div(class="border shadow hover:shadow-[0_4px_10px_rgba(229,198,100,0.3)] rounded p-4 transform transition-transform duration-500 ease-in-out bg-white mb-2 border-gray-300 hover:scale-105")
    .flex.items-center.mb-2
      h2.font-bold.text-xl {{ job.title }}
      p.ml-auto {{ formatDate(job.created) }}
    .mb-2
      p.truncate.white-space-pre-line {{ job.description }}
    .flex
      div
        span.mr-2(v-for="(tag, index) in job.tags" v-show="index < 7" ) {{ tag }}
        span.mr-2(v-show="job.tags.length > 7" ) ...
      p.ml-auto.font-bold {{ job.salary.amount.toLocaleString() + ' ' + job.salary.currency }}
</template>

<script setup lang="ts">
import type {Job} from "~/types/Job";
import {formatDate} from "~/utils/date";

defineProps<{ job: Job }>()
</script>

<style scoped>
</style>
