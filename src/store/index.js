import { createStore } from 'vuex';

import counterModule from './module/counter.module.js'
import employeeModule from './module/employee.module.js';

export default createStore({
  state: {
    counterState : counterModule.state,
    employeeState : employeeModule.state
  },
  getters: {
    getCounterState(state){
      return state.counterState.counter;

    },

    getEmployeeState(state){
      return state.employeeState
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    counterModule,
    employeeModule
  }
})
