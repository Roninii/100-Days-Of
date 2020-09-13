<template>
    <article>
        <header>
            <h3 class="text-gray-600 text-xs uppercase">{{ log.challenge }} - {{ date }}</h3>
        </header>
        <p class="text-gray-900 text-sm">
            {{ log.logMessage }}
        </p>
    </article>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs, Ref } from '@vue/composition-api';
import { Log } from '~/composables/useChallenge';

export default defineComponent({
    name: 'Log',
    props: {
        log: {
            type: Object as PropType<Log>,
            required: true,
        },
    },

    setup(props, { root: { $moment } }) {
        const { log }: { log: Ref<Log> } = toRefs(props);
        const date = computed(() => $moment.unix(log.value.date.seconds).format('MMM, Do, YYYY'));
        return {
            date,
        };
    },
});
</script>
