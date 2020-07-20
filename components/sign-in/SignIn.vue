<template>
  <BaseCard title="Login with email and password">
    <form class="grid gap-10 py-8 leading-relaxed text-lg" @submit.prevent="">
      <BaseInput type="email" label="email" v-model="email" />
      <BaseInput type="password" label="password" v-model="password" />
      <div class="grid grid-flow-col gap-2">
        <BaseButton type="submit" label="Log In" />
        <BaseButton type="button" label="Google Sign In" />
      </div>
    </form>
  </BaseCard>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const email = ref('')
    const password = ref('')

    return {
      email,
    }
  },
})
</script>

<style scoped></style>
