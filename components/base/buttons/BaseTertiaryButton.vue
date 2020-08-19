<template>
  <BaseButton
    class="text-purple-500 hover:text-white rounded"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </BaseButton>
</template>

<script>
export default {
  name: 'BaseTertiaryButton',
}
</script>
