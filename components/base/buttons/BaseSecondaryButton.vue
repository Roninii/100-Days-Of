<template>
  <BaseButton
    class="border border-purple-500 bg-white text-purple-500 hover:text-white rounded"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </BaseButton>
</template>

<script>
export default {
  name: 'BaseSecondaryButton',
}
</script>
