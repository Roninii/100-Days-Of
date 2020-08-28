<template>
    <BaseCard title="Current Progress" class="w-full">
        <div v-if="activeChallenges.length">
            <div
                v-for="challenge in activeChallenges"
                :key="challenge.id"
                class="grid lg:grid-cols-3 row-gap-10 py-8 items-baseline"
            >
                <section class="lg:col-span-2 leading-none">
                    <h2 class="text-gray-600 uppercase text-sm">Challenge</h2>
                    <p class="text-purple-500 text-4xl font-semibold max-w-full">
                        {{ challenge.name }}
                    </p>
                </section>

                <section class="leading-none">
                    <h2 class="text-sm text-gray-600 uppercase">Day</h2>
                    <p class="text-purple-500 font-medium text-4xl">{{ challenge.day }}</p>
                </section>

                <section class="grid gap-4 lg:col-span-3 lg:grid-cols-3">
                    <BasePrimaryButton>Log Progress</BasePrimaryButton>
                    <BaseSecondaryButton>Pause</BaseSecondaryButton>
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
    </BaseCard>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { useChallenge } from '~/composables';

export default defineComponent({
    name: 'Progress',
    props: {
        activeChallenges: {
            type: Array,
        },
    },

    // eslint-disable-next-line
    setup(props, ctx) {
        const { leaveChallenge } = useChallenge(ctx);

        return {
            leaveChallenge,
        };
    },
});
</script>
