<template lang="pug">
  div(v-if="show" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50")
    .bg-white.rounded.p-6.w-full.max-w-lg.shadow-xl
      h2.text-xl.font-semibold.mb-4 Edit Job

      form(@submit.prevent="submit")
        label.block.mb-2 Title
        input(type="text" v-model="editableJob.title" class="w-full mb-4 p-2 border rounded")

        label.block.mb-2 Description
        textarea(v-model="editableJob.description" class="w-full mb-4 p-2 border rounded")

        label.block.mb-2 Salary
        input(type="number" v-model.number="editableJob.salary.amount" class="w-full mb-4 p-2 border rounded")

        .flex.justify-end.gap-2
          button(type="submit" class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-800 transition-colors") Save
          button(type="button" @click="close" class="px-4 text-white py-2 bg-yellow-600 hover:bg-yellow-700 rounded") Cancel
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue'
import type { Job } from '@/types/Job'

const props = defineProps<{
  show: boolean
  job: Job | null
}>()

const emits = defineEmits<{
  (e: 'close'): void
  (e: 'save', job: Job): void
}>()

const editableJob = reactive<Job>({
  id: '',
  userId: '',
  title: '',
  description: '',
  tags: [],
  created: 0,
  salary: { amount: 0, currency: 'EUR' }
})

watch(() => props.job, (newJob: Job) => {
  if (newJob) Object.assign(editableJob, newJob)
}, { immediate: true })

const submit = () => {
  emits('save', { ...editableJob })
  close()
}

const close = () => emits('close')
</script>
