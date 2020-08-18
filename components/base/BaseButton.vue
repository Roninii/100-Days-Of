<template>
  <button
    v-bind="attrs"
    :class="{
      'border-1': true,
      'border-gray-500': disabled,
      'bg-gray-500': disabled,
      'border-purple-500': !disabled,
      'bg-purple-500': !disabled && !nobg,
      'cursor-not-allowed': disabled,
      'cursor-pointer': !disabled,
      rounded: true,
      'px-4': true,
      'py-2': true,
      'text-purple-500': nobg,
      'text-white': !nobg,
      'text-center': true,
      uppercase: true,
      'hover:bg-purple-400': !disabled,
      'hover:border-purple-400': !disabled,
      transition: true,
      'duration-300': true,
      linear: true,
      'text-sm': true,
    }"
    v-on="listeners"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'BaseButton',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    nobg: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { attrs, listeners }) {
    return {
      attrs,
      listeners,
    }
  },
})
</script>
