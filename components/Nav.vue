<template>
  <header
    class="flex justify-between font-medium uppercase leading-4 text-gray-600 px-8 py-4"
  >
    <div class="flex items-center">
      <nuxt-link class="hover:text-purple-500 text-2xl" to="/"
        >#100Days</nuxt-link
      >
    </div>

    <nav class="relative">
      <button
        class="md:hidden p-4"
        type="button"
        name="menu"
        @click="toggleMenu"
      >
        {{ menuHidden ? 'Menu' : 'X' }}
      </button>
      <div
        class="absolute right-0 text-right bg-white p-4 md:p-0 shadow-lg md:shadow-none rounded-b-md md:rounded-none md:text-center md:relative grid md:grid md:grid-flow-col gap-4 justify-end items-baseline"
        :class="{ hidden: menuHidden }"
      >
        <a v-if="atHome" class="hover:text-purple-500" href="/#about"
          >Learn More</a
        >
        <nuxt-link v-else class="hover:text-purple-500" to="/">Home</nuxt-link>

        <nuxt-link class="hover:text-purple-500" to="/dashboard"
          >Dashboard</nuxt-link
        >

        <nuxt-link class="hover:text-purple-500" to="/communities"
          >Communities</nuxt-link
        >

        <!-- Sign in / out -->
        <button
          v-if="isLoggedIn"
          class="font-medium uppercase leading-4 text-gray-600 hover:text-purple-500 text-right"
          @click="logout"
        >
          Sign Out
        </button>
        <nuxt-link v-else class="hover:text-purple-500 text-right" to="/login"
          >Sign In</nuxt-link
        >
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from '@vue/composition-api'

export default defineComponent({
  setup(props, { root: { $router, $route, $store, $fireAuth } }) {
    const atHome = computed(() => $route.path === '/')
    const isLoggedIn = computed(() => !!$store.state.user.currentUser)
    const menuHidden = ref(true)
    const logout = () => $fireAuth.signOut

    const toggleMenu = () => (menuHidden.value = !menuHidden.value)

    return {
      atHome,
      isLoggedIn,
      logout,
      menuHidden,
      toggleMenu,
    }
  },
})
</script>
