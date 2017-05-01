import Vue from 'vue'
import Vuex from 'vuex'
import { firebaseMutations } from 'vuexfire'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: null // Will be bound as an object
  },
  actions: {
  },
  mutations: {
    UPDATE_USER (state, user) {
      state.user = user
    },
    ...firebaseMutations
  },
  getters: {
  }
})

export default store
