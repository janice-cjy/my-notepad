<template>
	<div class="event-item" :class='[theme,type]'>
		<div class="content">{{content}}</div>
		<div class="timer">{{timer}}</div>
		<div class="deal-button">
			<button v-for="item in buttonType" :class="item.type" @click="eventDeal(item.type)">{{item.value}}</button>
		</div>
	</div>
</template>
<script>
	export default {
		props:['content','timer','type','eventID'],
		computed: {
			theme(){
				return this.$store.state.themeColor + '-event-item';
			},
			buttonType(){
				let arr = [];
				switch (this.type){
					case 'unfinish':
						arr = [
							{type: 'finished',value: '完成'},
							{type: 'cancel',value: '取消'}
						];
						break;
					case 'finished':
						arr = [
							{type: 'reset',value: '恢复'}
						];
						break;
					case 'cancel':
						arr = [
							{type: 'reset',value: '恢复'},
							{type: 'delete',value: '删除'}
						];
						break;
					default:
						break;
				}
				return arr;
			}
		},
		data(){
			return {
				
			}
		},
		methods:{
			eventDeal(dealType){
				this.$store.commit({
					type: 'dealData',
					dataType: this.type,
					dealType: dealType,
					eventID:this.eventID,
					timer: this.getNowTime()
				})
				switch (this.type){
					case 'unfinish':
						switch (dealType){
							case 'finished':
								this.dataToLocalStorage('unfinishData','finishedData');
								break;
							case 'cancel' :
								this.dataToLocalStorage('unfinishData','cancelData');
								break;
							default:
								break;
						}
						break;
					case 'finished':
							this.dataToLocalStorage('unfinishData','finishedData');
						break;
					case 'cancel':
						switch (dealType) {
							case 'reset':
								this.dataToLocalStorage('unfinishData','cancelData');
								break;
							case 'delete':
								this.dataToLocalStorage('cancelData');
								break;
							default:
								break;
						}
						break;
					default:
						break;
				}
			},
			getNowTime:function(){
				let now = new Date();
    		return now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' ' +this.getDoubleDate(now.getHours()) + ':' + this.getDoubleDate(now.getMinutes()) + ':' + this.getDoubleDate(now.getSeconds());
			},
			dataToLocalStorage(){
				var arr;
				for(let i = 0;i< arguments.length;i++){
					arr = [];
					for(let j = 0;j<this.$store.state[arguments[i]].length; j++){
						arr.push(JSON.stringify(this.$store.state[arguments[i]][j]));

					}
					localStorage[arguments[i]] = JSON.stringify(arr);
				}
			},
			getDoubleDate(num){
				if (num <10) {
					return '0'+num;
				}else{
					return num;
				}
			}
		}

	}
</script>
<style lang='scss'>
	.event-item{
		display: flex;
		font-size: 18px;
		padding: 15px;
		background-color: rgba(255,255,255,0.2);
		.content {
			flex:auto;
			text-align: left;
		}

		.timer{
			flex: none;
			width: 150px;
			font-size: 16px;
			vertical-align: bottom;
		}

		.deal-button{
			flex: none;
			width: 100px;
		}

	}

	.cancel .content{
		text-decoration: line-through;
	}

/*	theme style
*/
	.purple-event-item{
		box-shadow: 0px 2px 5px rgba(81, 3, 130,0.3);
	}

	.green-event-item{
		box-shadow: 0px 1px 5px rgba(106, 168, 79,1);
	}
</style>