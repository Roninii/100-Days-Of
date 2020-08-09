<template>
  <BaseCard title="Login with email and password">
    <form class="grid gap-10 py-8 leading-relaxed text-lg" @submit.prevent="">
      <BaseInput
        v-model="email"
        type="email"
        label="email"
        :error="$v.email.$dirty && $v.email.$invalid"
        required
        @blur="$v.email.$touch()"
      />
      <BaseInput
        v-model="password"
        type="password"
        label="password"
        :error="$v.password.$dirty && $v.password.$invalid"
        required
        @blur="$v.password.$touch()"
      />
      <div class="grid grid-cols-2 gap-2">
        <p
          v-if="$v.anyError"
          class="col-span-2 border border-red-800 rounded bg-red-200 text-red-800 px-4 py-2 text-sm"
        >
          Please fill out all required fields.
        </p>
        <BaseButton
          type="submit"
          label="Log In"
          class="col-span-2 sm:col-span-1"
          :disabled="$v.$invalid"
        />
        <BaseButton
          type="button"
          label="Google Sign In"
          class="col-span-2 sm:col-span-1"
          @click="signInWithGoogle"
        />
      </div>
    </form>
  </BaseCard>
</template>

<script lang="ts">
import { required, email } from 'vuelidate/lib/validators'
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  validations: {
    email: { required, email },
    password: { required },
  },

  setup(props, { root: { $fireAuthObj, $fireAuth, $router } }) {
    const email = ref('')
    const password = ref('')

    const { signInWithGoogle } = useGoogleAuth($fireAuthObj, $fireAuth, $router)

    return {
      email,
      password,
      signInWithGoogle,
    }
  },
})

function useGoogleAuth($fireAuthObj: any, $fireAuth: any, $router: any) {
  const provider = new $fireAuthObj.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })

  return {
    signInWithGoogle: async () => {
      try {
        await $fireAuth.signInWithPopup(provider)
        $router.push({ path: '/' })
      } catch (e) {
        console.log(e)
      }
    },
  }
}
</script>
