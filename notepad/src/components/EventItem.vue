<template>
	<div class="event-item" :class='[theme]'>
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
					eventID:this.eventID
				})
				let arg = {
					type: 'dealData',
					dataType: this.type,
					dealType: dealType,
					eventID:this.eventID,
					timer: this.getNowTime()
				};
				console.log(arg);
			},
			getNowTime:function(){
				let now = new Date();
    		return now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
			}
		}

	}
</script>
<style lang='scss'>
	.event-item{
		display: flex;
		font-size: 18px;
		padding: 5px;
		.content {
			flex:auto;
			text-align: left;
		}

		.timer{
			flex: none;
			width: 100px;
			font-size: 16px;
			vertical-align: bottom;
		}

		.deal-button{
			flex: none;
			width: 100px;
		}

	}

/*	theme style
*/
	.green-event-item{
		border:1px solid rgba(15, 189, 44,0.5);
	}
</style>