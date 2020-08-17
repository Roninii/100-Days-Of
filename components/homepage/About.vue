<template>
  <section id="about" class="bg-purple-500">
    <header class="text-center">
      <h2 class="text-4xl text-white font-medium uppercase">
        About The challenge
      </h2>
      <h3 class="text-lg text-purple-100">
        100 days of what?! Are you crazy?!
      </h3>
    </header>

    <section
      class="max-w-screen-sm mx-auto py-8 text-white leading-normal text-xl"
    >
      <p>
        I promise you, I'm not. An
        <a
          href="https://twitter.com/search?q=%23100DaysOf&src=typed_query"
          class="underline font-bold"
          target="_blank"
          >absurd</a
        >
        amount of people take part in various 100 days of [x] challenges, and
        for good reason!
      </p>
      <ul class="ml-10 my-4">
        <li>
          You'll have plenty of opportunity to learn a new skill, or just deepen
          your knowledge of one!
        </li>
        <li>You can create a new, healthy, and maintainable habbit!</li>
        <li>
          Everyone says Practice makes perfect, and there is plenty of proof!
        </li>
      </ul>

      <p>
        There are loads of reasons, but the best way to learn more is to dive in
        yourself. So think of something you really want to learn or just work
        on, set your goal,
        <nuxt-link class="underline" to="/communities"
          >join a community</nuxt-link
        >, and get started!
      </p>

      <div class="flex justify-center my-4">
        <nuxt-link
          to="/sign-up"
          class="border-1 border-purple-500 bg-purple-500 rounded px-4 py-2 text-white text-center uppercase underline hover:bg-purple-400 hover:border-purple-400 transition duration-300 linear"
          >I'm Ready</nuxt-link
        >
      </div>

      <div class="flex justify-around pt-8">
        <img
          class="block"
          src="/imgs/humaaans.png"
          alt="Three people working together to make something great"
        />
      </div>
    </section>

    <footer class="relative">
      <div class="absolute -top-16 left-0 right-0 -z-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#9f7aea "
            fill-opacity="1"
            d="M0,224L120,229.3C240,235,480,245,720,250.7C960,256,1200,256,1320,256L1440,256L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          />
        </svg>
      </div>
    </footer>
  </section>
</template>

<script lang="ts">
export default {
  name: 'About',
}
</script>

<style scoped>
ul li {
  @apply p-2;
}

ul li::marker {
  content: '👉';
}
</style>
