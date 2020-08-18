export async function createUserProfileDocument(
  firestore: any,
  userAuth: any,
  displayName: string
) {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  // if no user is found, create one
  if (!snapShot.exists) {
    const { email } = userAuth

    const createdAt = new Date()

    await userRef
      .set({
        email,
        createdAt,
        displayName,
      })
      .catch((e: Error) => console.log('error creating user', e.message))
  }

  return userRef
}
