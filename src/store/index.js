import { createStore } from 'vuex';

import counterModule from './module/counter.module.js'
import employeeModule from './module/employee.module.js';
import userModule from './module/user.module.js';

export default createStore({
  state: {
    counterState : counterModule.state,
    employeeState : employeeModule.state,
    userState : userModule.state
  },
  getters: {
    getCounterState(state){
      return state.counterState.counter;

    },

    getEmployeeState(state){
      return state.employeeState;
    },

    getUserState(state){
      return state.userState;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    counterModule,
    employeeModule,
    userModule
  
  }
})
