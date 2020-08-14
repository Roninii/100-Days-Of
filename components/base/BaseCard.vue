<template>
  <aside class="shadow rounded-md p-8 lg:w-1/3 m-4">
    <header v-if="title" class="border-b border-gray-200">
      <h2 class="text-lg text-gray-600 uppercase">
        {{ title }}
      </h2>
    </header>
    <slot />
  </aside>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

interface Props {
  title: String
}

export default defineComponent({
  props: {
    title: {
      type: String,
      required: false,
    },
  },
})
</script>

<style scoped></style>
