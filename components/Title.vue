<template>
    <h1
        class="text-6xl font-medium tracking-wide leading-loose uppercase"
    >100 Days Of {{ challenge }}</h1>
</template>

<script lang='ts'>
import {
    defineComponent,
    reactive,
    ref,
    computed,
    onMounted,
    onBeforeUnmount,
} from '@vue/composition-api';

export default defineComponent({
    setup() {
        const challenges: Array<string> = reactive(['Code', 'CSS', 'Writing', 'Cooking']);
        const i = ref(0);
        const challenge = computed(() => challenges[i.value]);

        let challengeInterval: number;
        onMounted(() => {
            challengeInterval = window.setInterval(() => {
                i.value >= 2 ? (i.value = 0) : i.value++;
            }, 3000);
        });

        onBeforeUnmount(() => {
            window.clearInterval(challengeInterval);
        });

        return {
            challenge,
        };
    },
});
</script>