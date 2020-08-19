<template>
  <p v-if="error" class="text-center text-gray-600">
    There was an issue fetching the quote of the day ):
  </p>
  <blockquote v-else class="text-center">
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
  ref,
} from '@vue/composition-api'

export default defineComponent({
  setup() {
    const quote = reactive({ author: '', quote: '' })
    const error = ref(false)
    onMounted(async () => {
      try {
        const qod = await getQuote()
        quote.author = qod.author
        quote.quote = qod.quote
      } catch (e) {
        error.value = true
      }
    })

    return {
      ...toRefs(quote),
      error,
    }
  },
})
</script>
