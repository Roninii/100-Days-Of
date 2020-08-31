<template>
  <article>
    <header>
      <h3 class="text-gray-600 text-xs uppercase">
        {{ log.challenge }} - {{ log.date }}
      </h3>
    </header>
    <p class="text-gray-900 text-sm">
      {{ log.message }}
    </p>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Log",
  props: {
    log: {
      type: Object,
      required: true,
    },
  },
});
</script>
