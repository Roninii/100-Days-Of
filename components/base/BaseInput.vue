<template>
  <div class="relative base-input">
    <label
      v-if="label"
      :for="label"
      class="absolute text-sm text-gray-600 uppercase"
      >{{ label }}</label
    >
    <input
      :id="label ? label : null"
      v-bind="attrs"
      class="border-b-2 outline-none border-purple-500 w-full"
    />
  </div>
</template>

<script>
import { defineComponent, toRefs } from '@vue/composition-api'

export default defineComponent({
  props: {
    label: {
      type: String,
      required: false,
    },
  },
  setup(props, ctx) {
    const { attrs } = toRefs(ctx)

    return {
      attrs,
    }
  },
})
</script>

<style scoped>
label {
  bottom: 5px;
  transform: translate3d(); /* enable hardware acceleration */
  transition: all 200ms linear;
}

.base-input:focus-within label {
  bottom: 2rem;
  @apply text-xs;
}
</style>
