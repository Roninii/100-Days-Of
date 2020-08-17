<template>
  <BaseCard title="Don't have an account yet? Sign up now!">
    <form
      class="grid gap-10 py-8 leading-relaxed text-lg"
      @submit.prevent="signUp"
    >
      <BaseInput
        v-model="displayName"
        label="display name"
        :error="$v.displayName.$invalid && $v.displayName.$dirty"
        required
        @blur="$v.displayName.$touch()"
      />
      <BaseInput
        v-model="email"
        type="email"
        label="email"
        :error="$v.email.$invalid && $v.email.$dirty"
        required
        @blur="$v.email.$touch()"
      />
      <BaseInput
        v-model="password"
        type="password"
        label="password"
        :error="$v.password.$invalid && $v.password.$dirty"
        required
        @blur="$v.password.$touch()"
      />
      <BaseInput
        v-model="confirmPass"
        type="password"
        label="confirm password"
        required
        :error="$v.confirmPass.$invalid && $v.confirmPass.$dirty"
        @blur="$v.confirmPass.$touch()"
      />

      <div class="flex justify-center">
        <BaseButton type="submit" label="Submit" :disabled="$v.$invalid" />
      </div>
    </form>
  </BaseCard>
</template>

<script>
import { defineComponent, toRefs, reactive } from '@vue/composition-api'
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

import createUserProfileDocument from '../../composables/createUserProfileDocument.ts'

export default defineComponent({
  name: 'SignUp',
  validations: {
    displayName: { required },
    email: { email, required },
    password: { required, minLength: minLength(6) },
    confirmPass: {
      required,
      minLength: minLength(6),
      sameAs: sameAs('password'),
    },
  },
  setup(props, { root: { $fireStore, $fireAuth, $router } }) {
    const signUpForm = reactive({
      displayName: '',
      email: '',
      confirmPass: '',
      password: '',
    })

    const signUp = () => createUser(signUpForm, $fireAuth, $fireStore, $router)

    return {
      signUp,
      ...toRefs(signUpForm),
    }
  },
})

async function createUser(form, $fireAuth, $fireStore, $router) {
  const { displayName, email, password, confirmPass } = toRefs(form)

  try {
    const { user } = await $fireAuth.createUserWithEmailAndPassword(
      email.value,
      password.value
    )

    await createUserProfileDocument($fireStore, user, {
      displayName: displayName.value,
    })

    displayName.value = ''
    email.value = ''
    password.value = ''
    confirmPass.value = ''

    $router.push({ path: '/' })
  } catch (e) {
    console.log('There was a problem creating the user', e)
  }
}
</script>
