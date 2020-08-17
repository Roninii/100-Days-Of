import { createUserProfileDocument } from '~/composables'

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
      const userRef = await createUserProfileDocument(this.$fireStore, authUser)
      userRef.onSnapshot((snapshot) => {
        commit('SET_CURRENT_USER', { id: snapshot.id, ...snapshot.data() })
      })
    } else commit('SET_CURRENT_USER', authUser)
  },
}
