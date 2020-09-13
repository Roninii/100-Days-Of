<template>
    <BaseCard title="Recent Logs" class="relative">
        <div
            class="hidden lg:block h-16 pointer-events-none absolute inset-x-0 z-10"
            style="background-image: linear-gradient(rgb(255, 255, 255), rgba(255, 255, 255, 0))"
        ></div>
        <div
            class="hidden lg:block h-32 pointer-events-none absolute bottom-0 inset-x-0 z-10"
            style="background-image: linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255))"
        ></div>

        <aside v-if="logs.length" class="grid gap-4 py-8 overflow-y-scroll h-64 relative">
            <template v-for="(log, i) in logs">
                <Log v-if="log" :key="i" :log="log" />
            </template>
        </aside>

        <div v-else class="flex justify-center items-center h-full p-4">
            <h3 class="text-gray-600">Nothing to show here yet..</h3>
        </div>
    </BaseCard>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { Challenge, Log } from '~/composables/useChallenge';

export default defineComponent({
    name: 'Logs',
    computed: {
        logs() {
            return this.$store.state.user.currentUser.challenges?.flatMap((chal: Challenge) =>
                chal?.logs?.map((log: Log) => log)
            );
        },
    },
});
</script>
