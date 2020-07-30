<template>
  <BaseCard title="Don't have an account yet? Sign up now!">
    <form class="grid gap-10 py-8 leading-relaxed text-lg" @submit.prevent="">
      <BaseInput label="name" />
      <BaseInput type="email" label="email" />
      <BaseInput type="password" label="password" />

      <div class="flex justify-center">
        <BaseButton type="submit" label="Submit" />
      </div>
    </form>
  </BaseCard>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  name: 'SignUp',

  setup() {
    const name = ref('')
    const email = ref('')
    const password = ref('')
  },
})
</script>

<style scoped></style>
