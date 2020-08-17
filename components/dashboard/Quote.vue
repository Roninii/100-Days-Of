<template>
  <blockquote class="text-center">
    <p class="text-2xl">{{ quote }}</p>
    <footer class="text-gray-600">-{{ author }}</footer>
  </blockquote>
</template>

<script lang="ts">
import { getQuote } from '@/utils/api'
import {
  defineComponent,
  onMounted,
  reactive,
  toRefs,
} from '@vue/composition-api'

export default defineComponent({
  setup() {
    const quote = reactive({ author: '', quote: '' })
    onMounted(async () => {
      const qod = await getQuote()
      quote.author = qod.author
      quote.quote = qod.quote
    })

    console.log(quote)

    return {
      ...toRefs(quote),
    }
  },
})
</script>
