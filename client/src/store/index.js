import {createStore} from 'vuex'

export default createStore({
    state() {
        return {
          showModal: false  
        }
    },

    getters:{
     
    },

    mutations:{
        visibleModal(state){
            state.showModal = true
        },
        invisibleModal(state){
            state.showModal = false
        }
    },

    actions:{

    }

})