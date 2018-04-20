import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
    	count:1,
    	themeColor:'green',
    	unfinishData:[],
    	finishedData:[],
    	cancelData:[],
        userName: 'Janice'
    },
    mutations:{
    	changeTheme(state,payload){
    		state.themeColor = payload.color;
    	},
    	dealData(state,payload){
    		let arg = {};
    		switch (payload.dataType){
    			case 'unfinish':
    				switch (payload.dealType){
    					case 'add':
    						arg.content = payload.content;
    						arg.timer = payload.timer;
    						arg.type = payload.dataType;
    						state.unfinishData.push(arg);
    						/*console.log(state.unfinishData);*/
    						break;
    					case 'finished':{
    						let arr = [];
    						arr = state.unfinishData.splice(payload.eventID,1);
    						arr[0].timer = payload.timer;
    						arr[0].type = 'finished';
    						state.finishedData.push(arr[0]);
    						break;
    					}
    					case 'cancel':{
    						let arr = [];
    						arr = state.unfinishData.splice(payload.eventID,1);
    						arr[0].timer = payload.timer;
    						arr[0].type = 'cancel';
    						state.cancelData.push(arr[0]);
    						break;
    					}
    					default:
    						break;
    				}
    				break;
    			case 'finished':
    				switch (payload.dealType) {
    					case 'reset':{
    						let arr = [];
    						arr = state.finishedData.splice(payload.eventID,1);
    						arr[0].timer = payload.timer;
    						arr[0].type = 'unfinish';
    						state.unfinishData.push(arr[0]);
    						break;
    					}
    					default:
    						break;
    				}
    				break;
    			case 'cancel':
    				let arr = [];
    				arr = state.cancelData.splice(payload.eventID,1);
    				switch (payload.dealType) {
    					case 'reset':{
    						arr[0].timer = payload.timer;
    						arr[0].type = 'unfinish';
    						state.unfinishData.push(arr[0]);
    						break;
    					}
    					default:
    						break;
    				}
    				break;
    			default:
    				break;
    		}
    	},
    	localStorageToData(state,payload){
            state[payload.dataName] = [];
            for(let i=0;i<payload.arr.length;i++){
                state[payload.dataName][i] = payload.arr[i];
            }
        }
    }
})