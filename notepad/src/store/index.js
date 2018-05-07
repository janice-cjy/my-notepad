import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
    	count:1,
    	themeColor:'purple',
    	unfinishData:[],
    	finishedData:[],
    	cancelData:[],
        userName: 'Janice',
        chooseID:[],
        userMessage:[],
        login:false
    },
    mutations:{
    	changeTheme(state,payload){
    		switch (payload.color){
                case '梦幻紫玉':
                    state.themeColor = 'purple';
                    break;
                case '深邃夜空':
                    state.themeColor = 'black';
                    break;
                case '葱郁鲜绿':
                    state.themeColor = 'green';
                    break;
                default:
                    break;
            }
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
        },
        dealChooseID(state,payload){
            if (!payload.dealType) {
                for (let i = 0;i<state.chooseID.length;i++) {
                    if (state.chooseID[i] == payload.index) {
                        state.chooseID.splice(i,1);
                    }
                }
            }else{
                state.chooseID.push(payload.index);
            }
        },
        resetChooseID(state){
            state.chooseID = [];
        },
        deleteData(state){
            state.unfinishData = [];
            state.finishedData = [];
            state.cancelData = [];
        },
        inputData(state,payload){
            let data = payload.data;
            for(let i=0;i<data.length;i++){
                switch (data[i].type){
                    case 'unfinish':
                        state.unfinishData.push(data[i]);
                        break;
                    case 'finished':
                        state.finishedData.push(data[i]);
                        break;
                    case 'cancel':
                        state.cancelData.push(data[i]);
                        break;
                    default:
                        break;
                }
            }
        },
        checkUserMessage(state,payload){
            for(let i =0;i<state.userMessage.length;i++){
                if (state.userMessage[i].userName == payload.userName&&state.userMessage[i].password == payload.password) {
                    state.login = true;
                    break;
                }
            }
        },
        saveUserMessage(state,payload){
            let userData = payload.userData;
            for(let i =0;i<userData.length;i++){
                state.userMessage[i]=userData[i];
            }
            console.log(state.userMessage);
        }
    }
})