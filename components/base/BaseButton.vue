<template>
  <button
    v-bind="attrs"
    class="border-1 border-purple-500 bg-purple-500 rounded px-4 py-2 text-white text-center uppercase hover:bg-purple-400 hover:border-purple-400 transition duration-300 linear text-sm"
  >
    {{ label }}
  </button>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'BaseButton',
  props: {
    label: {
      type: String,
      required: true,
    },
  },

  setup(props, ctx) {
    const { attrs } = ctx

    return {
      attrs,
    }
  },
})
</script>

<style scoped></style>
