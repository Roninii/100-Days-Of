export function useGoogleAuth({
  root: { $fireAuthObj, $fireAuth, $router },
}: any) {
  const provider = new $fireAuthObj.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })

  return {
    signInWithGoogle: async () => {
      try {
        await $fireAuth.signInWithPopup(provider)
        $router.push({ path: '/dashboard' })
      } catch (e) {
        console.log(e)
      }
    },
  }
}
