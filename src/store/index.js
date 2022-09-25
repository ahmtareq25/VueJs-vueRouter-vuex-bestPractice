import { createStore } from 'vuex';

import counterModule from './module/counter.module.js'

export default createStore({
  state: {
    counterState : counterModule.state
  },
  getters: {
    getCounterState(state){
      return state.counterState.counter;

    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    counterModule
  }
})
