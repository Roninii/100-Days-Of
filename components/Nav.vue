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
      <nuxt-link to="/dashboard">Dashboard</nuxt-link>
      <a v-if="atHome" href="/#about">Learn More</a>
      <nuxt-link v-else to="/">Home</nuxt-link>
      <nuxt-link to="/communities">Communities</nuxt-link>

      <!-- Sign in / out -->
      <button
        v-if="isLoggedIn"
        class="font-medium uppercase leading-4 text-gray-600 hover:text-purple-500"
        @click="logout"
      >
        Sign Out
      </button>
      <nuxt-link v-else to="/login">Sign In</nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {
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
}
</script>

<style scoped>
a:hover {
  @apply text-purple-500;
}
</style>
