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
                    <BasePrimaryButton
                        @mousedown="openLoggingModal(challenge)"
                        @log-progress="updateProgress"
                        >Log Progress</BasePrimaryButton
                    >
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
                <nuxt-link to="/communities" class="block w-full">Join A Challenge</nuxt-link>
            </BasePrimaryButton>
        </div>

        <!-- Logging Dialog -->
        <LogModal
            v-if="loggingProgress"
            :challenge="activeChallenge"
            @cancel="loggingProgress = false"
            @log-progress="updateProgress"
        />
    </BaseCard>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from '@vue/composition-api';
import { useChallenge } from '~/composables';
import { Challenge, Log } from '~/composables/useChallenge';

export default defineComponent({
    name: 'Progress',
    props: {
        activeChallenges: {
            type: Array,
        },
    },

    // eslint-disable-next-line
    setup(props, ctx) {
        const { leaveChallenge, pauseChallenge, unpauseChallenge, logProgress } = useChallenge(ctx);
        const currentDay = (timestamp: any) => ctx.root.$moment().diff(timestamp.toDate(), 'days');

        const loggingProgress = ref(false);
        const activeChallenge: Ref<Challenge | null> = ref(null);

        const openLoggingModal = (challenge: Challenge) => {
            activeChallenge.value = challenge;
            loggingProgress.value = true;
        };

        const updateProgress = ({ challenge, log }: { challenge: Challenge; log: Log }) => {
            loggingProgress.value = false;

            logProgress(challenge, log);
        };

        return {
            activeChallenge,
            leaveChallenge,
            currentDay,
            pauseChallenge,
            unpauseChallenge,
            loggingProgress,
            logProgress,
            openLoggingModal,
            updateProgress,
        };
    },
});
</script>
