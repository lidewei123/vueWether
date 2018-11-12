import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    place: '北京',
    unit: 'c',
    list: [],
    list2: []
  },
  mutations: {
    increment(state, msg) {
      state.place = msg
    },
    include(state, msg) {
      state.unit = msg
    },
    ArrayP(state, list4) {
      state.list = state.list.push(list4)
    }
  },
  actions: {
  }
})
