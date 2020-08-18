<template>
  <BaseCard title="Current Progress" class="w-full">
    <div class="grid xl:grid-cols-5 row-gap-10 py-8 items-baseline">
      <section class="xl:col-span-3 leading-none">
        <h2 class="text-gray-600 uppercase text-sm">Challenge</h2>
        <p class="text-purple-500 text-4xl font-semibold max-w-full">
          {{ challenge }}
        </p>
      </section>

      <section class="leading-none">
        <h2 class="text-sm text-gray-600 uppercase">Day</h2>
        <p class="text-purple-500 font-medium text-4xl">15</p>
      </section>

      <section class="grid gap-4">
        <button
          class="rounded bg-purple-500 text-white font-medium uppercase p-2 w-full"
        >
          Log Progress
        </button>
        <button
          class="rounded bg-purple-500 text-white font-medium uppercase p-2 w-full"
        >
          Pause
        </button>
      </section>
    </div>
  </BaseCard>
</template>

<script>
import { defineComponent, computed } from '@vue/composition-api'

export default defineComponent({
  name: 'Progress',
  setup() {
    const activeChallenge = '#100DaysOfCode'

    const challenge = computed(() => {
      if (activeChallenge.length > 15) {
        return `${activeChallenge.slice(0, 12)}...`
      }
      return activeChallenge
    })

    return {
      challenge,
    }
  },
})
</script>
