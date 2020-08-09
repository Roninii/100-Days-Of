<template>
  <div class="menu-container">
    <span
      class="menu-icon top"
      :class="[open ? 'cross-open' : 'cross-close']"
    ></span>
    <span class="menu-icon mid" :class="[open ? 'fade-out' : 'fade-in']"></span>
    <span
      class="menu-icon bot"
      :class="[open ? 'cross-open' : 'cross-close']"
    ></span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    open: {
      type: Boolean,
    },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped>
.menu-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 2rem;
}

.menu-icon {
  display: block;
  height: 0.15rem;
  width: 100%;
  @apply rounded;
  @apply bg-purple-500;
}

.mid {
  margin: 0.35rem 0;
}

.fade-in {
  animation-name: close-menu;
}

.fade-out {
  animation-name: open-menu;
}

.top.cross-open {
  animation-name: negative-cross-open;
  transform-origin: center;
}

.bot.cross-open {
  animation-name: cross-open;
  transform-origin: center;
}

.top.cross-close {
  animation-name: negative-cross-close;
  transform-origin: center;
}

.bot.cross-close {
  animation-name: cross-close;
  transform-origin: center;
}

.fade-out,
.fade-in,
.cross-open,
.cross-close {
  animation-duration: 0.55s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
}

@keyframes open-menu {
  0% {
    opacity: 1;
    transform: translateX(0);
  }

  100% {
    opacity: 0;
    transform: translateX(1rem);
  }
}

@keyframes close-menu {
  0% {
    opacity: 0;
    transform: translateX(1rem);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes cross-open {
  from {
    transform: rotate(0) translate(0, 0);
  }
  to {
    transform: rotate(45deg) translate(0, -0.65rem);
  }
}

@keyframes negative-cross-open {
  from {
    transform: rotate(0) translate(0, 0);
  }
  to {
    transform: rotate(-45deg) translate(0, 0.65rem);
  }
}

@keyframes cross-close {
  from {
    transform: rotate(45deg) translate(0, -0.65rem);
  }
  to {
    transform: rotate(0) translate(0, 0);
  }
}

@keyframes negative-cross-close {
  from {
    transform: rotate(-45deg) translate(0, 0.65rem);
  }
  to {
    transform: rotate(0) translate(0, 0);
  }
}
</style>
