<template>
  <button
    v-bind="$attrs"
    :class="{
      'cursor-not-allowed': disabled,
      'cursor-pointer': !disabled,
      'px-4': true,
      'py-2': true,
      'text-center': true,
      uppercase: true,
      'hover:bg-purple-400': !disabled,
      'hover:border-purple-400': !disabled,
      transition: true,
      'duration-300': true,
      linear: true,
      'text-sm': true,
    }"
    v-on="$listeners"
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
  },
})
</script>
