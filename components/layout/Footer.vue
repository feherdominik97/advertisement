<template lang="pug">
  footer.bg-gray-800.text-white.py-8
    div(class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8")
      .space-y-2
        h2.text-xl.font-bold JobBoard
        p.text-sm Leading platform for finding the best talent or opportunity.
        p.text-xs.text-gray-400 &copy; {{ year }} JobBoard. All rights reserved.

      //Navigation
      .space-y-2
        h3.text-lg.font-semibold Navigation
        ul.space-y-1
          li
            NuxtLink(to="/") Home
          li
            NuxtLink(to="/jobs") Browse Jobs
          li
            NuxtLink(to="/post") Post a Job
          li
            NuxtLink(to="/about") About Us

      //Social media
      .space-y-2
        h3.text-lg.font-semibold Follow Us
        ul.space-y-1
          li
            a(class="flex items-center text-gray-300 hover:text-white transition-colors" href="https://twitter.com" target="_blank" rel="noopener")
              Icon.mr-2(name="entypo-social:twitter")
              span Twitter
          li
            a(class="flex items-center text-gray-300 hover:text-white transition-colors" href="https://linkedin.com" target="_blank" rel="noopener")
              Icon.mr-2(name="entypo-social:linkedin")
              span LinkedIn
          li
            a(class="flex items-center text-gray-300 hover:text-white transition-colors" href="https://facebook.com" target="_blank" rel="noopener")
              Icon.mr-2(name="entypo-social:facebook")
              span Facebook
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
