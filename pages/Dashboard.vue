<template>
  <div class="px-8 grid grid-cols-12 col-gap-4 row-gap-20">
    <h1 class="text-4xl col-span-12">Welcome back, {{ user }}</h1>
    <Quote class="col-span-12 min-h-full" />
    <Progress class="col-span-8 min-h-full" />
    <Logs class="col-span-4 min-h-full" />
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
