<template>
  <header
    class="flex justify-between font-medium uppercase leading-4 text-gray-600 px-8 py-4"
  >
    <div class="flex items-baseline">
      <nuxt-link class="hover:text-purple-500 text-2xl" to="/"
        >#100Days</nuxt-link
      >
    </div>

    <nav class="grid grid-flow-col gap-4 justify-end items-baseline">
      <a v-if="atHome" class="hover:text-purple-500" href="/#about"
        >Learn More</a
      >
      <nuxt-link v-else class="hover:text-purple-500" to="/">Home</nuxt-link>
      <nuxt-link class="hover:text-purple-500" to="/communities"
        >Communities</nuxt-link
      >

      <!-- Sign in / out -->
      <button
        v-if="isLoggedIn"
        class="font-medium uppercase leading-4 text-gray-600 hover:text-purple-500"
        @click="logout"
      >
        Sign Out
      </button>
      <nuxt-link v-else class="hover:text-purple-500" to="/login"
        >Sign In</nuxt-link
      >
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  computed: {
    atHome() {
      return this.$route.path === '/'
    },
    isLoggedIn() {
      return !!this.$store.state.user.currentUser
    },
  },

  methods: {
    logout() {
      this.$fireAuth.signOut()
    },
  },
})
</script>
