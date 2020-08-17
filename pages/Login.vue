<template>
  <div class="flex flex-wrap justify-evenly mx-auto py-16">
    <SignIn />
    <SignUp />
  </div>
</template>

<script>
import { defineComponent, computed, watch } from '@vue/composition-api'

export default defineComponent({
  name: 'Login',
  setup(props, { root: { $store, $router } }) {
    const isLoggedIn = computed(() => !!$store.state.user.currentUser)

    // Navigation
    watch(isLoggedIn, (status) => {
      if (status) $router.push({ path: '/' })
    })

    return {
      isLoggedIn,
    }
  },
})
</script>
