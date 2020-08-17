import { computed } from '@vue/composition-api'

export function useRouteGuard($store: any, $router: any) {
  const isLoggedIn = computed(() => !!$store.state.user.currentUser)

  const loggedInGuard = () => {
    if (isLoggedIn.value) $router.push({ path: '/dashboard' })
  }

  const notLoggedInGuard = () => {
    if (!isLoggedIn.value) {
      $router.push({ path: '/login' })
    }
  }

  return {
    loggedInGuard,
    notLoggedInGuard,
  }
}
