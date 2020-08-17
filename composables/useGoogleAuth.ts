export function useGoogleAuth($fireAuthObj: any, $fireAuth: any, $router: any) {
  const provider = new $fireAuthObj.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })

  return {
    signInWithGoogle: async () => {
      try {
        await $fireAuth.signInWithPopup(provider)
        $router.push({ path: '/' })
      } catch (e) {
        console.log(e)
      }
    },
  }
}
