<template>
  <portal to="log">
    <div
      class="absolute inset-0 bg-gray-800 bg-opacity-50 h-screen flex justify-center items-center"
    >
      <BaseCard
        class="bg-white w-full max-w-lg grid gap-4 text-center"
        title="What did you do today?"
      >
        <form
          class="grid place-center gap-4"
          @submit.prevent="$emit('log-progress', message)"
        >
          <textarea
            id=""
            v-model="message"
            name="log"
            cols="40"
            rows="10"
            class="bg-gray-200 rounded p-4"
          ></textarea>

          <div class="grid grid-cols-2 gap-4">
            <BasePrimaryButton type="submit">Log it!</BasePrimaryButton>
            <BaseSecondaryButton @mousedown="$emit('cancel')"
              >Cancel</BaseSecondaryButton
            >
          </div>
        </form>
      </BaseCard>
    </div>
  </portal>
</template>

<script lang="ts">
import { Portal } from "portal-vue";
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "LogModal",
  components: {
    Portal,
  },
  data() {
    return {
      message: "",
    };
  },
});
</script>
