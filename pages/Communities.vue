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
        <li>
          <a href="https://www.100daysofcode.com/about/">100 Days of Code</a>
        </li>
        <li>
          <a href="https://100dayscss.com/" target="_blank">100 Days of CSS</a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Communities',
}
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
