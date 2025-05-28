<template lang="pug">
  div.container.mx-auto.px-4.py-12
    h1.text-3xl.font-bold.mb-4.text-gray-800 Welcome {{auth.user?.username}}
    br
    section.bg-white.py-12
      .container.mx-auto.px-4.text-center
        h1.text-4xl.font-bold.mb-4.text-gray-800 Find Your Next Opportunity
        p.text-lg.text-gray-600.mb-6
          | JobBoard connects top talent with the best companies worldwide. Whether you're hiring or job hunting, you're in the right place.

        NuxtLink(to="/jobs" class="hover:bg-yellow-700 inline-block bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition") Browse Jobs

    section(class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-left bg-gray-100 py-12 mt-12")
      Column
        template(#title) Post Jobs with Ease
        template(#content) Our intuitive job posting tools make it easy to reach thousands of qualified candidates quickly.
      Column
        template(#title) Smart Job Matching
        template(#content) We use smart filters and algorithms to ensure the right people see the right jobs.
      Column
        template(#title) Built for Speed
        template(#content) Whether you're applying or hiring, our platform is built to save you time and effort.
</template>

<script setup lang="ts">
import Column from "~/components/ui/Column.vue";

useHead({ title: 'Home - JobBoard' })
const auth = useAuthStore()
</script>