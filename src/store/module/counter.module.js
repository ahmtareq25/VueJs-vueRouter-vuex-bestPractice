export default{

    nameSpaced:true,

    state:{
        counter: {
            count : 0
        }

    },
    mutations:{

        INCREMENT_COUNTER:function(state){
            return state.counter.count += 1;
        },

        DECREMENT_COUNTER:function(state){
            return state.counter.count -= 1;
        },

        INCREMENT_BY_COUNTER:function(state){
            return state.counter.count += state.counter.count;
        },

        RESET_COUNTER:function(state){
            return state.counter.count = 0;
        }

    

    },
    actions:{

        incrementCounter({commit}){
            return commit("INCREMENT_COUNTER");
        },
        decrementCounter({commit}){
            return commit("DECREMENT_COUNTER");
        },
        incrementCounterBy({commit}){
            return commit("INCREMENT_BY_COUNTER");
        },
        resetCounter({commit}){
            return commit("RESET_COUNTER");
        },
    }
}