export const state = () => ({
  user: {},
  loggedIn: '',
  strategy: '',
})

export const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
}

export const actions = {
  user({ commit }, user) {
    commit(SET_USER, user)
  }
}

export const getters = {
  isAuthenticated(state) {
    return state.auth.loggedIn
  },
  loggedInUser(state) {
    return state.auth.user
  }
}