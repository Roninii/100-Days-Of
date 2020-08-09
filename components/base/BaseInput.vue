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
      :value="value"
      class=""
      :class="[
        'border-b-2',
        'outline-none',
        error ? 'border-red-500' : 'border-purple-500',
        'w-full',
      ]"
      v-on="eventListeners"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'

export default defineComponent({
  props: ['label', 'value', 'error'],
  setup(props, { attrs, listeners, emit }) {
    const eventListeners = computed(() => ({
      ...listeners,
      input(event: any) {
        emit('input', event.target.value)
      },
    }))

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
