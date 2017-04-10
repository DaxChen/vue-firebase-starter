import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    sideNavOpen: false
  },
  actions: {
  },
  mutations: {
    OPEN_SIDE_NAV (state) {
      state.sideNavOpen = true
    },
    CLOSE_SIDE_NAV (state) {
      state.sideNavOpen = false
    }
  },
  getters: {
  }
})

export default store
