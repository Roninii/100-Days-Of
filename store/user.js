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
  updateCurrentUser({ commit }, { authUser }) {
    commit('SET_CURRENT_USER', authUser)
  },
}
