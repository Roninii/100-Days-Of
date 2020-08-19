<template>
  <div class="max-w-screen-md mx-auto py-16">
    <header class="grid gap-2 leading-tight">
      <h1 class="text-center text-xl sm:text-3xl">
        There are an incredible amount of communities to join,
        <br class="hidden md:block" />find one that interests you and get
        started!
      </h1>
      <h2 class="text-sm sm:text-lg text-center text-gray-600">
        Don't see your community listed here?
        <a href="https://github.com/Roninii/100-Days-Of" class="underline"
          >Submit a pull request!</a
        >
      </h2>
    </header>

    <section class="mt-16">
      <ul class="grid gap-4 text-gray-600 text-lg sm:text-2xl">
        <li
          v-for="community in communities"
          :key="community.id"
          class="flex justify-between items-center px-4"
        >
          <a :href="community.homepage" target="_blank">{{ community.name }}</a>
          <BaseTertiaryButton @click="joinChallenge(community)">
            Join &rarr;
          </BaseTertiaryButton>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api'
import { useChallenge } from '~/composables'

export default defineComponent({
  name: 'Communities',
  setup(props, ctx) {
    const communities = ref([
      {
        id: 'code',
        name: '100 Days of Code',
        homepage: 'https://www.100daysofcode.com/about/',
      },
      {
        id: 'css',
        name: '100 Days of CSS',
        homepage: 'https://100dayscss.com/',
      },
    ])

    const { joinChallenge } = useChallenge(ctx)

    return { communities, joinChallenge }
  },
})
</script>

<style scoped>
li {
  @apply pl-4;
}

li::marker {
  content: '#';
}

li > a {
  @apply block;
}

li:hover,
li:hover::marker {
  @apply text-purple-500;
}
</style>
