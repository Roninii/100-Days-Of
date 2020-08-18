<template>
  <div class="md:px-8 grid md:grid-cols-2 col-gap-10 row-gap-20">
    <h1 class="text-3xl md:text-4xl text-center md:text-left md:col-span-2">
      Welcome back, {{ user }}
    </h1>
    <Quote class="min-h-full md:col-span-2" />
    <Progress class="min-h-full" />
    <Logs class="min-h-full" />
  </div>
</template>

<script>
import { defineComponent, computed, watchEffect } from '@vue/composition-api'
import { useRouteGuard } from '~/composables'

export default defineComponent({
  name: 'Dashboard',
  setup(props, { root: { $store, $router } }) {
    const user = computed(() => $store.state.user.currentUser?.displayName)
    const { notLoggedInGuard } = useRouteGuard($store, $router)

    watchEffect(notLoggedInGuard)

    return {
      user,
    }
  },
})
</script>
