<template>
  <div class="min-h-screen">
    <header class="h-screen flex flex-col items-center">
      <div class="h-1/2 flex flex-col items-center justify-end">
        <Title />
        <div class="my-4 grid grid-flow-col gap-4">
          <nuxt-link
            v-if="!$store.state.user.currentUser"
            to="/login"
            class="border-1 border-purple-500 bg-purple-500 rounded px-4 py-2 text-white text-center uppercase hover:bg-purple-400 hover:border-purple-400 transition duration-300 linear"
            >I'm Ready</nuxt-link
          >
          <a
            href="#about"
            class="border border-purple-500 bg-white rounded px-4 py-2 text-purple-500 text-center uppercase hover:bg-purple-400 hover:border-purple-400 hover:text-white transition duration-300 linear"
            >Learn More</a
          >
        </div>
      </div>
      <div class="w-full h-1/2 flex justify-center items-end">
        <img
          src="~/assets/wave.svg"
          alt="purple wave"
          class="w-full block -mb-1"
        />
      </div>
    </header>
    <About />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({})
</script>

<style scoped>
.h-1\/2 {
  height: 50%;
}
</style>
