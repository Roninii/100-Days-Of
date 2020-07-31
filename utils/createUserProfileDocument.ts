export default async function createUserProfileDocument(
  firestore: any,
  userAuth: any,
  additionalData: any
) {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  // if no user is found, create one
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    await userRef
      .set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
      .catch((e: Error) => console.log('error creating user', e.message))
  }

  return userRef
}
