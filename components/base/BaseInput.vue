<template>
  <div class="relative base-input">
    <label
      v-if="label"
      :for="label"
      :class="[
        'absolute',
        'text-sm',
        'text-gray-600',
        'uppercase',
        value ? 'shrink' : 'inline',
      ]"
      >{{ label }}</label
    >
    <input
      :id="label ? label : null"
      v-bind="attrs"
      v-bind:value="value"
      v-on="eventListeners"
      class="border-b-2 outline-none border-purple-500 w-full"
    />
  </div>
</template>

<script>
import { defineComponent, toRefs, computed } from '@vue/composition-api'

export default defineComponent({
  props: ['label', 'value'],
  setup(props, ctx) {
    const { value } = toRefs(props)
    const { attrs, listeners, emit } = ctx

    const eventListeners = computed(() => {
      return Object.assign(
        {},
        // `Object.assign` merges objects together to form a new object
        listeners,
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        {
          // This ensures that the component works with v-model
          input: function (event) {
            emit('input', event.target.value)
          },
        }
      )
    })

    return {
      attrs,
      eventListeners,
    }
  },
})
</script>

<style scoped>
.inline {
  bottom: 5px;
  transform: translate3d(); /* enable hardware acceleration */
  transition: all 200ms linear;
}

.shrink {
  bottom: 2rem;
  @apply text-xs;
}

.base-input:focus-within label {
  @apply shrink;
}
</style>
