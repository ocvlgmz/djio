export const state = () => ({
  user: {},
  loggedIn: '',
  strategy: '',
})

export const mutations = {
  SET_USERS(state, users) {
    state.users = users;
  },
}

export const actions = {
  user({ commit }, user) {
    commit(SET_USERS, user)
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