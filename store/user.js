export const state = () => ({
  currentUser: null,
})

export const mutations = {
  SET_CURRENT_USER(state, authUser) {
    authUser
      ? (state.currentUser = {
          displayName: authUser.displayName,
          id: authUser.uid,
          email: authUser.email,
        })
      : (state.currentUser = null)
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

  async joinChallenge({ commit }, challenge) {},
}
