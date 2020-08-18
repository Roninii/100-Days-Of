type Challenge = {
  id: string
  name: string
  homepage?: string
}

export function useChallenge(
  $firestore: any,
  $store: any
  // $router: any,
) {
  const joinChallenge = async (challenge: Challenge) => {
    console.log(`joining ${challenge.name}`)
    const userRef = $firestore.doc(`users/${$store.state.user.currentUser.id}`)
    const user = await userRef.get()

    if (user.exists) {
      await userRef
        .set(
          {
            challenges: [...user.data().challenges, challenge],
          },
          { merge: true }
        )
        .catch(console.log)

      console.log(`joined ${challenge.name} successfully.`)
    }
  }

  return {
    joinChallenge,
  }
}
