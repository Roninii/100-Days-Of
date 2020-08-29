<template>
  <BaseCard title="Current Progress" class="w-full">
    <div v-if="activeChallenges.length">
      <div
        v-for="challenge in activeChallenges"
        :key="challenge.id"
        class="grid lg:grid-cols-3 row-gap-10 py-8 items-baseline relative"
      >
        <section
          v-if="challenge.paused"
          class="bg-white bg-opacity- bg-opacity-90 absolute inset-0 flex flex-col justify-center items-center z-10"
        >
          <h2 class="text-purple-500 text-2xl font-bold">
            Challenge Paused
          </h2>
          <BasePrimaryButton @click="unpauseChallenge(challenge)"
            >Unpause</BasePrimaryButton
          >
        </section>

        <section class="lg:col-span-2 leading-none">
          <h2 class="text-gray-600 uppercase text-sm">Challenge</h2>
          <p class="text-purple-500 text-4xl font-semibold max-w-full">
            {{ challenge.name }}
          </p>
        </section>

        <section class="leading-none">
          <h2 class="text-sm text-gray-600 uppercase">Day</h2>
          <p class="text-purple-500 font-medium text-4xl">
            {{ currentDay(challenge.start) }}
          </p>
        </section>

        <section
          class="grid gap-4 lg:col-span-3 lg:grid-cols-3"
          :class="{
            'pointer-events-none': challenge.paused,
          }"
        >
          <BasePrimaryButton>Log Progress</BasePrimaryButton>
          <BaseSecondaryButton @click="pauseChallenge(challenge)"
            >Pause</BaseSecondaryButton
          >
          <BaseTertiaryButton @click="leaveChallenge(challenge)"
            >Leave Challenge</BaseTertiaryButton
          >
        </section>
      </div>
    </div>
    <div v-else class="grid gap-4 text-center text-purple-500 py-8">
      <p class="text-2xl font-semibold">Ready to start something?</p>
      <BasePrimaryButton class="max-w-md mx-auto">
        <nuxt-link to="/communities" class="block w-full"
          >Join A Challenge</nuxt-link
        >
      </BasePrimaryButton>
    </div>

    <portal to="log">
      <div
        class="absolute inset-0 bg-gray-800 bg-opacity-50 h-screen flex justify-center items-center"
      >
        <BaseCard class="bg-white w-full max-w-lg grid gap-4">
          <h2 class="text-center text-xl">What did you do today?</h2>
          <form action="" class="grid place-center gap-4">
            <textarea
              id=""
              name="log"
              cols="40"
              rows="10"
              class="bg-gray-200 rounded p-4"
            ></textarea>

            <BasePrimaryButton type="submit">Log it!</BasePrimaryButton>
          </form>
        </BaseCard>
      </div>
    </portal>
  </BaseCard>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { Portal } from "portal-vue";
import { useChallenge } from "~/composables";

export default defineComponent({
  name: "Progress",
  props: {
    activeChallenges: {
      type: Array,
    },
  },
  components: {
    Portal,
  },

  // eslint-disable-next-line
    setup(props, ctx) {
    const { leaveChallenge, pauseChallenge, unpauseChallenge } = useChallenge(
      ctx
    );
    const currentDay = (timestamp: any) =>
      ctx.root.$moment().diff(timestamp.toDate(), "days");

    return {
      leaveChallenge,
      currentDay,
      pauseChallenge,
      unpauseChallenge,
    };
  },
});
</script>
