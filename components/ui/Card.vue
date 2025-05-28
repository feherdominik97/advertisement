<template lang="pug">
  div(:class="classes")
    .flex.items-center.mb-2
      h2.font-bold.text-xl {{ job.title }}
      p.ml-auto {{ formatDate(job.created) }}
    .mb-2
      p.truncate.white-space-pre-line {{ job.description }}
    .flex.mb-2
      div
        span.mr-2(v-for="(tag, index) in job.tags" v-show="index < 7" ) {{ tag }}
        span.mr-2(v-show="job.tags.length > 7" ) ...
      p.ml-auto.font-bold {{ job.salary.amount.toLocaleString() + ' ' + job.salary.currency }}

    .flex.justify-end.gap-2.text-white
      button(class="p-1 text-2xl bg-gray-600 hover:bg-gray-800 rounded flex justify-center items-center transition-colors duration-300" @click="showEditModal()")
        Icon(name="lucide:pencil")
      button(class="p-1 text-2xl bg-yellow-600 hover:bg-yellow-700 rounded flex justify-center items-center transition-colors duration-300" @click="onDelete()")
        Icon(name="lucide:trash-2")
    EditJobModal(:show="editFormVisible" :job="job" @close="hideEditModal" @save="onSave")

</template>

<script setup lang="ts">
import type { Job } from "~/types/Job";
import { formatDate } from "~/utils/date";
import { deleteJob } from "~/utils/api/jobs";
import EditJobModal from "~/components/ui/EditJobModal.vue";
import { putJob } from "~/utils/api/jobs";

const props = defineProps<{
  job: Job
  hasEdit?: boolean
  hasDelete?: boolean
  hover?: boolean
}>()

const emits = defineEmits<{
  (e: 'edit', job: Job): void
  (e: 'delete', id: string): void
}>()

const classes = 'border shadow rounded p-4 bg-white mb-2 border-gray-300 ' +
    (props.hover
        ? 'hover:shadow-[0_4px_10px_rgba(229,198,100,0.3)] hover:scale-105 transform transition-transform duration-500 ease-in-out'
        : '')

const editFormVisible: Ref<boolean> = ref(false)

function onDelete() {
  try {
    deleteJob(props.job.id)
    emits('delete', props.job.id)
  } catch (e) {
    alert(`Error: ${e}`)
  }
}

async function onSave(job: Job) {
  try {
    await putJob(job)
    emits('edit', job)
  } catch (e) {
    alert(`Error: ${e}`)
  }
}

function showEditModal() {
  editFormVisible.value = true
}

function hideEditModal() {
  editFormVisible.value = false
}

</script>

<style scoped>
</style>
