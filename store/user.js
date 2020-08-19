export const state = () => ({
  currentUser: null,
})

export const mutations = {
  SET_CURRENT_USER(state, authUser) {
    authUser
      ? (state.currentUser = {
          id: authUser.uid,
          displayName: authUser.displayName,
          email: authUser.email,
          challenges: authUser.challenges ?? [],
        })
      : (state.currentUser = null)
  },

  JOIN_CHALLENGE({ currentUser }, challenge) {
    currentUser.challenges = [...currentUser.challenges, challenge]
  },
}

export const actions = {
  async updateCurrentUser({ commit }, { authUser }) {
    if (authUser) {
      const userRef = this.$fireStore.doc(`users/${authUser.uid}`)
      const snapShot = await userRef.get()

      commit('SET_CURRENT_USER', { ...authUser, ...snapShot.data() })
    } else commit('SET_CURRENT_USER', authUser)
  },

  async joinChallenge({ commit }, { userRef, challenge }) {
    // start user at day 0 by default
    challenge.day = 0

    await userRef
      .update({
        challenges: this.$fireStoreObj.FieldValue.arrayUnion(challenge),
      })
      .catch(console.log)

    commit('JOIN_CHALLENGE', challenge)
  },
}
