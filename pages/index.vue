<template>
  <div class="min-h-screen">
    <header class="h-screen flex flex-col items-center">
      <div class="h-1/2 flex flex-col items-center justify-end">
        <Title />
        <div class="my-4 grid grid-cols-2 gap-4">
          <nuxt-link
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
      <div class="w-full h-1/2 flex items-end">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#9f7aea"
            fill-opacity="1"
            d="M0,160L26.7,154.7C53.3,149,107,139,160,154.7C213.3,171,267,213,320,192C373.3,171,427,85,480,58.7C533.3,32,587,64,640,101.3C693.3,139,747,181,800,176C853.3,171,907,117,960,128C1013.3,139,1067,213,1120,234.7C1173.3,256,1227,224,1280,229.3C1333.3,235,1387,277,1413,298.7L1440,320L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
          />
        </svg>
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
