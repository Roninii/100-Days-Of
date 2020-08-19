type Challenge = {
  id: string
  name: string
  homepage?: string
}

export function useChallenge(ctx: any) {
  const {
    root: { $fireStore, $fireStoreObj, $store, $router },
  } = ctx
  const joinChallenge = async (challenge: Challenge) => {
    const userRef = $fireStore.doc(`users/${$store.state.user.currentUser.id}`)
    const user = await userRef.get()

    if (user.exists) {
      await userRef
        .update({
          challenges: $fireStoreObj.FieldValue.arrayUnion(challenge),
        })
        .catch(console.log)

      $router.push({ path: '/dashboard' })
    }
  }

  return {
    joinChallenge,
  }
}
