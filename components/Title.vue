<template>
  <div class="text-center font-medium leading-tight">
    <h1 class="text-6xl text-gray-800 tracking-wide uppercase">
      100 Days Of <br class="md:hidden" /><span class="challenge fade">{{
        challenge
      }}</span>
    </h1>
    <h2 class="text-gray-600 text-xl">Ready to start your journey?</h2>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  computed,
  onMounted,
  onBeforeUnmount,
} from '@vue/composition-api'

function toggleAnimation(e: any): void {
  e.target.classList.toggle('fade')
}

export default defineComponent({
  setup() {
    const challenges: Array<string> = reactive([
      'Code',
      'CSS',
      'Writing',
      'Cooking',
    ])
    const i = ref(0)
    const challenge = computed(() => challenges[i.value])
    let challengeText: any

    let challengeInterval: number
    onMounted(() => {
      challengeText = document.querySelector('.challenge')

      challengeInterval = window.setInterval(() => {
        i.value >= 2 ? (i.value = 0) : i.value++
        challengeText.classList.toggle('fade')
      }, 4000)

      challengeText.addEventListener('animationend', toggleAnimation)
    })

    onBeforeUnmount(() => {
      window.clearInterval(challengeInterval)
      challengeText.removeEventListener('animationend', toggleAnimation)
    })

    return {
      challenge,
    }
  },
})
</script>

<style scoped>
.fade {
  animation: fade 1s;
}

@keyframes fade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
