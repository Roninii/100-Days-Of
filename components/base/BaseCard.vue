<template>
  <aside class="shadow rounded-md p-8 lg:w-1/3 m-4">
    <header v-if="title">
      <h2 class="text-xl">
        {{ title }}
      </h2>
    </header>
    <slot />
  </aside>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: false,
    },
  },
})
</script>
