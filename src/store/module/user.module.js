import axios from "axios";

export default {
    nameSpaced : true,

    state :{
        loader : false,
        users : [],
        errorMessage : ''

    },

    mutations:{

        GET_USER_REQUEST : function(state){
            state.loader = true;
        },

        GET_USER_SUCCESS : function(state, payload){
            state.loader = false;
            state.users = payload.users
        },

        GET_USER_FAILED : function(state, payload){
            state.loader = false;
            state.errorMessage = payload.error;
        }


    },

    actions:{

        async getUsers({commit}){
            try{
                commit("GET_USER_REQUEST")

                let response = await axios.get("https://jsonplaceholder.typicode.com/users");
                
                commit("GET_USER_SUCCESS", {users : response.data})

            }catch(error){
                commit('GET_USER_FAILED', {error : error})
            }
        }
    }
}