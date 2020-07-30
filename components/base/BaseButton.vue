<template>
  <button
    v-bind="attrs"
    :class="[
      'border-1',
      disabled ? 'border-gray-500' : 'border-purple-500',
      disabled ? 'bg-gray-500' : 'bg-purple-500',
      disabled ? 'cursor-not-allowed' : 'cursor-pointer',
      'rounded',
      'px-4',
      'py-2',
      'text-white',
      'text-center',
      'uppercase',
      disabled ? '' : 'hover:bg-purple-400',
      disabled ? '' : 'hover:border-purple-400',
      'transition',
      'duration-300',
      'linear',
      'text-sm',
    ]"
    v-on="listeners"
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
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, ctx) {
    const { attrs, listeners } = ctx

    return {
      attrs,
      listeners,
    }
  },
})
</script>

<style scoped></style>
