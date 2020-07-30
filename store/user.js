export const state = () => ({
  currentUser: {},
})

export const mutations = {
  SET_CURRENT_USER(state, authUser) {
    state.currentUser.displayName = authUser.displayName
    state.currentUser.id = authUser.uid
    state.currentUser.email = authUser.email
  },
}

export const actions = {
  updateCurrentUser({ commit }, { authUser }) {
    authUser && commit('SET_CURRENT_USER', authUser)
  },
}
