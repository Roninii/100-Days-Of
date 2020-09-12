<template>
    <header class="flex justify-between font-medium uppercase leading-4 text-gray-600 px-8 py-4">
        <div class="flex items-center">
            <nuxt-link class="hover:text-purple-500 text-2xl" to="/">#100Days</nuxt-link>
        </div>

        <nav class="relative">
            <button class="md:hidden p-4" type="button" aria-label="menu" @click="toggleMenu">
                <MenuIcon :open="!menuHidden" />
            </button>
            <div
                class="fixed px-8 right-0 text-right bg-white md:p-0 shadow-lg md:shadow-none rounded-b-md md:rounded-none md:text-center md:relative grid md:grid md:grid-flow-col gap-4 justify-end items-baseline"
                :class="[menuHidden ? 'fade-out' : 'fade-in']"
            >
                <a v-if="atHome" class="hover:text-purple-500 py-2 px-4" href="/#about"
                    >Learn More</a
                >
                <nuxt-link v-else class="hover:text-purple-500 py-2 px-4" to="/">Home</nuxt-link>

                <nuxt-link v-if="isLoggedIn" class="hover:text-purple-500 py-2 px-4" to="/dashboard"
                    >Dashboard</nuxt-link
                >

                <nuxt-link class="hover:text-purple-500 py-2 px-4" to="/communities"
                    >Communities</nuxt-link
                >

                <!-- Sign in / out -->
                <button
                    v-if="isLoggedIn"
                    class="font-medium uppercase leading-4 text-gray-600 hover:text-purple-500 py-2 px-4 text-right"
                    @click="logout"
                >
                    Sign Out
                </button>
                <nuxt-link v-else class="hover:text-purple-500 py-2 px-4 text-right" to="/login"
                    >Sign In</nuxt-link
                >
            </div>
        </nav>
    </header>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from '@vue/composition-api';

export default defineComponent({
    setup(props, { root: { $route, $store, $fireAuth } }) {
        const atHome = computed(() => $route.path === '/');
        const isLoggedIn = computed(() => !!$store.state.user.currentUser);
        const menuHidden = ref(true);
        const logout = () => $fireAuth.signOut();

        const toggleMenu = () => (menuHidden.value = !menuHidden.value);

        return {
            atHome,
            isLoggedIn,
            logout,
            menuHidden,
            toggleMenu,
        };
    },
});
</script>

<style scoped>
.fade-out,
.fade-in {
    animation-duration: 300ms;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
}

.fade-in {
    animation-name: close-menu;
}
.fade-out {
    animation-name: open-menu;
}

@screen md {
    .fade-out,
    .fade-in {
        animation: none;
    }
}

@keyframes open-menu {
    0% {
        opacity: 1;
        transform: translateX(0);
    }

    100% {
        opacity: 0;
        transform: translateX(1rem);
        display: none;
    }
}

@keyframes close-menu {
    0% {
        opacity: 0;
        transform: translateX(1rem);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
        display: none;
    }
}
</style>
