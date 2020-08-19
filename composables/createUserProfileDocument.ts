export async function createUserProfileDocument(
  firestore: any,
  userAuth: any,
  additionalData: any
) {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  // if no user is found, create one
  if (!snapShot.exists) {
    const { email } = userAuth

    const createdAt = new Date()
    const user = { email, createdAt, ...additionalData }

    await userRef
      .set(user)
      .catch((e: Error) => console.log('error creating user', e.message))
  }

  return userRef
}
