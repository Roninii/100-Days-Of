<template>
  <BaseCard title="Recent Logs">
    <aside class="grid gap-4 py-8 overflow-y-scroll">
      <Log :log="log" />
    </aside>
  </BaseCard>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Logs",
  data() {
    return {
      log: {
        challenge: "#100DaysOfCode",
        date: this.$moment().format("l"),
        message:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea quos numquam rerum harum in hic libero! Suscipit vel itaque labore. ",
      },
    };
  },
});
</script>
