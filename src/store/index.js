import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import info from './info'
import debts from './debts'
import students from './students'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError (state, error) {
      state.error = error
    },
    clearError (state) {
      state.error = null
    }
  },
  getters: {
    error: s => s.error
  },
  modules: {
    auth, students, debts, info
  }
})
