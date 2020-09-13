<template>
    <div class="grid md:grid-flow-col max-w-screen-xl gap-8 mx-auto py-16">
        <SignIn />
        <SignUp />
    </div>
</template>

<script lang="ts">
import { defineComponent, watchEffect } from '@vue/composition-api';
import { useRouteGuard } from '@/composables';

export default defineComponent({
    name: 'Login',
    setup(props, { root: { $store, $router } }) {
        const { loggedInGuard } = useRouteGuard($store, $router);

        watchEffect(loggedInGuard);
    },
});
</script>
