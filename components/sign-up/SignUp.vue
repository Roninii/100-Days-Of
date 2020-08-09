<template>
  <BaseCard
    title="Don't have an account yet? Sign up now!"
    class="lg:w-1/3 m-4"
  >
    <form
      class="grid gap-10 py-8 leading-relaxed text-lg"
      @submit.prevent="signUp"
    >
      <BaseInput v-model="displayName" label="display name" required />
      <BaseInput v-model="email" type="email" label="email" required />
      <BaseInput v-model="password" type="password" label="password" required />
      <BaseInput
        v-model="confirmPass"
        type="password"
        label="confirm password"
        required
      />

      <div class="flex justify-center">
        <BaseButton type="submit" label="Submit" />
      </div>
    </form>
  </BaseCard>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive } from '@vue/composition-api'
import { required, email } from 'vuelidate/lib/validators'

import createUserProfileDocument from '../../utils/createUserProfileDocument'

export default defineComponent({
  name: 'SignUp',
  validations: {
    displayName: { required },
    email: { email, required },
    password: { required },
    comfirmPass: { required },
  },
  setup(props, { root: { $fireStore, $fireAuth } }) {
    const signUpForm = reactive({
      displayName: '',
      email: '',
      password: '',
      confirmPass: '',
    })

    const signUp = () => createUser(signUpForm, $fireAuth, $fireStore)

    return {
      signUp,
      ...toRefs(signUpForm),
    }
  },
})

async function createUser(form: any, $fireAuth: any, $fireStore: any) {
  const { displayName, email, password, confirmPass } = toRefs(form)
  if (password.value !== confirmPass.value) return

  try {
    const { user } = await $fireAuth.createUserWithEmailAndPassword(
      email.value,
      password.value
    )

    await createUserProfileDocument($fireStore, user, { ...displayName.value })

    displayName.value = ''
    email.value = ''
    password.value = ''
    confirmPass.value = ''
  } catch (e) {
    console.log('There was a problem creating the user', e)
  }
}
</script>

<style scoped></style>
