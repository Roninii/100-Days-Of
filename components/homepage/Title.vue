<template>
  <div class="text-center font-medium">
    <h1 class="text-6xl text-gray-800 tracking-wide uppercase leading-tight">
      100 Days Of
      <br />
      <div class="relative">
        <div class="change__outer">
          <div class="change__inner">
            <div class="el" v-for="(challenge, i) in challenges" :key="i">{{ challenge }}</div>
          </div>
        </div>
      </div>
    </h1>
    <h2 class="mt-24 text-gray-600 text-xl">Ready to start your journey?</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const challenges: Array<string> = reactive([
      'Code',
      'CSS',
      'Writing',
      'Cooking',
    ])

    return {
      challenges,
    }
  },
})
</script>

<style>
:root {
  --font-size: 4rem;
}

.change__outer {
  position: absolute;
  top: 0;
  left: 50%;
  text-align: center;
  height: calc(var(--font-size) * 1.5);
  overflow: hidden;
  transform: translateX(-50%);
}

.change__inner {
  position: relative;
  animation: rotate 8s ease-in-out infinite;
}

.el {
  display: block;
}

@keyframes rotate {
  0%,
  20% {
    transform: translateY(0);
  }
  25%,
  45% {
    transform: translateY(calc(var(--font-size) * -1.2));
  }
  50%,
  70% {
    transform: translateY(calc(var(--font-size) * -2.5));
  }
  75%,
  95% {
    transform: translateY(calc(var(--font-size) * -3.7));
  }
  100% {
    transform: translateY(calc(var(--font-size) * -5));
  }
}
</style>