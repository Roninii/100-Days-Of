<template>
  <article>
    <h1 class="text-4xl">Welcome back, {{ user }}</h1>
    <BaseCard title="Current Progress"> </BaseCard>
  </article>
</template>

<script>
import { defineComponent, computed } from '@vue/composition-api'

export default defineComponent({
  name: 'Dashboard',
  setup(props, { root: { $store } }) {
    const user = computed(() => $store.state.user.currentUser?.displayName)

    return {
      user,
    }
  },
})
</script>
