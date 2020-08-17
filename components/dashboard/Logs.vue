<template>
  <BaseCard title="Recent Logs">
    <aside class="grid gap-4 py-8 h-56 overflow-y-scroll">
      <article v-for="n in 5" :key="n">
        <header>
          <h3 class="text-gray-600 text-xs uppercase">
            #100DaysOfCode - 08/01/2020
          </h3>
        </header>
        <p class="text-gray-900 text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea quos
          numquam rerum harum in hic libero! Suscipit vel itaque labore.
        </p>
      </article>
    </aside>
  </BaseCard>
</template>

<script>
export default {}
</script>
