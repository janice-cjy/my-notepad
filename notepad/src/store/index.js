import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
    	count:1,
    	themeColor:'green'
    },
    mutations:{
    	changeTheme(state,payload){
    		state.themeColor = payload.color;
    	}
    }
})