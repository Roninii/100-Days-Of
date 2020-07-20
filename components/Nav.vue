<template>
  <header class="flex justify-between font-medium uppercase leading-4 text-gray-600 px-8 py-4">
    <div class="flex items-baseline">
      <nuxt-link class="hover:text-purple-500 text-2xl" to="/">#100Days</nuxt-link>
    </div>

    <nav class="grid grid-flow-col gap-4 justify-end items-baseline">
      <a v-if="atHome" class="hover:text-purple-500" href="/#about">Learn More</a>
      <nuxt-link v-else class="hover:text-purple-500" to="/">Home</nuxt-link>
      <nuxt-link class="hover:text-purple-500" to="/communities">Communities</nuxt-link>
      <nuxt-link class="hover:text-purple-500" to="/login">Sign In</nuxt-link>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    atHome() {
      return this.$route.path === '/'
    },
  },
})
</script>
