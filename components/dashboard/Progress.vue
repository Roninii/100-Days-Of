<template>
  <BaseCard title="Current Progress">
    <div class="grid grid-cols-5 py-8 items-baseline">
      <section class="col-span-3 leading-none">
        <h2 class="text-gray-600 uppercase text">Challenge</h2>
        <p class="text-purple-500 text-5xl font-semibold">
          #100DaysOfCode
        </p>
      </section>

      <section class="leading-none">
        <h2 class="text text-gray-600 uppercase">Day</h2>
        <p class="text-purple-500 font-medium text-5xl">15</p>
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
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'Progress',
})
</script>
