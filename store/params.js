export const state = () => ({
  header: {
    "onMost": false,
    "onOther": false,
    "onDrawer": false,
    "drawer": false,
  },
})

export const mutations = {
  SET_HEADER(state, header) {
    state.header = header;
  },
}

export const actions = {
  setHeader({ commit }, header) {
    commit(SET_HEADER, header)
  }
}

export const getters = {
  onMost(state) {
    return state.header.onMost
  },
  onXs(state) {
    return state.header.onXs
  },
  onDrawer(state) {
    return state.header.onDrawer
  },
  drawer(state) {
    return state.header.onDrawer
  }
}