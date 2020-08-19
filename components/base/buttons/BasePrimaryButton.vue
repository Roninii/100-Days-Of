<template>
  <BaseButton
    class="border border-purple-500 bg-purple-500 text-white rounded"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </BaseButton>
</template>

<script>
export default {
  name: 'BasePrimaryButton',
}
</script>
