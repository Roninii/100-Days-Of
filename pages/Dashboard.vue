<template>
    <div class="md:px-8 pb-20 grid md:grid-cols-2 col-gap-10 row-gap-20">
        <h1 class="text-3xl text-gray-800 md:text-4xl text-center md:text-left md:col-span-2">
            Welcome back, {{ user.displayName || '' }}
        </h1>
        <Quote class="min-h-full md:col-span-2" />
        <Progress class="min-h-full" :active-challenges="user.challenges" />
        <Logs class="min-h-full" />
        <portal-target name="log"> </portal-target>
    </div>
</template>

<script>
import { defineComponent, computed, watchEffect } from '@vue/composition-api';
import { PortalTarget } from 'portal-vue';
import { useRouteGuard } from '~/composables';

export default defineComponent({
    name: 'Dashboard',
    components: {
        PortalTarget,
    },
    setup(props, { root: { $store, $router } }) {
        const user = computed(() => $store.state.user.currentUser);
        const { notLoggedInGuard } = useRouteGuard($store, $router);

        watchEffect(notLoggedInGuard);

        return {
            user,
        };
    },
});
</script>
