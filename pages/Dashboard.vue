<template>
  <div class="mt-4 px-8">
    <h1 class="text-3xl font-semibold text-gray-700">
      Welcome back, {{ user }}!
    </h1>

    <section class="flex flex-wrap justify-evenly">
      <BaseCard title="Current Challenge" class="w-full">
        <div class="grid md:grid-flow-col gap-10 md:gap-6 md:py-8">
          <h3 class="text-5xl text-purple-800 font-semibold">
            #100 Days of Code
          </h3>
          <div class="leading-none">
            <h3 class="text-sm text-gray-600 font-semibold">Streak</h3>
            <p class="text-purple-800 text-5xl">15 Days</p>
          </div>
          <section class="grid gap-4">
            <BaseButton label="Pause Challenge" />
            <BaseButton label="Log Progress" />
          </section>
        </div>
      </BaseCard>
      <BaseCard title="Completed Challenges"> </BaseCard>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'

export default defineComponent({
  setup(props, { root: { $store } }) {
    const user = computed(() => $store.state.user.currentUser?.displayName)

    return {
      user,
    }
  },
})
</script>
