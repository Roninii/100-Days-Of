<template>
    <BaseCard title="Recent Logs">
        <aside class="grid gap-4 py-8 overflow-y-scroll">
            <Log v-for="(log, i) in logs" :key="i" :log="log" />
        </aside>
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
