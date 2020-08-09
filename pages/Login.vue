<template>
  <div class="flex flex-wrap justify-evenly mx-auto py-16">
    <SignIn />
    <SignUp />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'

export default defineComponent({
  name: 'Login',
  setup(props, { root: { $store, $router } }) {
    const isLoggedIn = computed(() => !!$store.state.user.currentUser)

    // Navigation
    if (isLoggedIn.value) $router.push({ path: '/' })

    return {
      isLoggedIn,
    }
  },
})
</script>
