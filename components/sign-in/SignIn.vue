<template>
  <BaseCard title="Login with email and password">
    <form class="grid gap-10 py-8 leading-relaxed text-lg" @submit.prevent="">
      <BaseInput type="email" label="email" />
      <BaseInput type="password" label="password" />
      <div class="grid grid-flow-col gap-2">
        <BaseButton type="submit" label="Log In" />
        <BaseButton type="button" label="Google Sign In" />
      </div>
    </form>
  </BaseCard>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  methods: {},
})
</script>

<style scoped></style>
