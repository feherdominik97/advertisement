<template lang="pug">
  section.container.mx-auto.px-4.py-12
    h1.text-3xl.font-bold.mb-4.text-gray-800 About JobBoard
    p.text-lg.text-gray-700.mb-6
      | JobBoard is a modern platform built to connect employers with the best talent around the world.
      | We make job posting and job hunting faster, simpler, and more effective.

    h2.text-2xl.font-semibold.mb-2.text-gray-800 Our Mission
    p.text-gray-700.mb-6
      | Our mission is to streamline the hiring process by providing a reliable, user-friendly platform
      | that benefits both job seekers and employers.

    h2.text-2xl.font-semibold.mb-2.text-gray-800 Our Team
    p.text-gray-700.mb-6
      | We’re a small, passionate team of developers, designers, and hiring experts who believe in the
      | power of great matches between jobs and people.

    h2.text-2xl.font-semibold.mb-2.text-gray-800 Contact Us
    p.text-gray-700
      | For any inquiries, please reach out via our contact form or email us at
      a(class="text-yellow-600 hover:text-yellow-800 ml-1")(href="mailto:support@jobboard.com") support@jobboard.com
</template>

<script setup lang="ts">
useHead({ title: 'About - JobBoard' })
</script>

<style scoped>
</style>
