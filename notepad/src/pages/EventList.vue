<template>
	<div class="event-list">
		<input-build @buildEvent="getEvent"></input-build>
		<event-title titleName='未完成' @showEventBody="unfinishShow = !unfinishShow"></event-title>
		<div class="event-body" v-if="unfinishShow">
			<event-item v-for="(item,index) in unfinishData" :content="item.content" :timer="item.timer" :type="item.type" :eventID="index" :key="index"></event-item>
		</div>

		<event-title titleName='已完成' @showEventBody="finishedShow = !finishedShow"></event-title>
		<div class="event-body" v-if="finishedShow">
			<event-item v-for="(item,index) in finishedData" :content="item.content" :timer="item.timer" :type="item.type" :eventID="index" :key="index"></event-item>
		</div>
		
		<event-title titleName='已取消' @showEventBody="cancelShow = !cancelShow"></event-title>
		<div class="event-body" v-if="cancelShow">
			<event-item v-for="(item,index) in cancelData" :content="item.content" :timer="item.timer" :type="item.type" :eventID="index" :key="index"></event-item>
		</div>
	</div>
</template>
<script>
import InputBuild from '@/components/InputBuild.vue'
import EventTitle from '@/components/EventTitle.vue'
import EventItem from '@/components/EventItem.vue'
	export default {
		components:{
			InputBuild,
			EventTitle,
			EventItem
		},
		methods:{
			getEvent(){
				let content = arguments[0];
				let now = new Date();
				let time = now.getFullYear() + '-' + (now.getMonth()+1) + '-' + now.getDate();
				this.$store.commit({
					type:'dealData',
					dataType: 'unfinish',
					dealType: 'add',
					content: content,
					timer: time
				});
				this.dataToLocalStorage('unfinishData');

			},
			localStorageToData(dataName){
				let arr;
				console.log(localStorage[dataName]);
				for (let j = 0;j<arguments.length;j++){
					arr = [];
					if (localStorage[arguments[j]]) {
						arr =JSON.parse(localStorage[arguments[j]]);
						for(let i=0;i<arr.length;i++){
							arr[i] = JSON.parse(arr[i]);
						}
						this.$store.commit({
							type:'localStorageToData',
							arr: arr,
							dataName: arguments[j]
						});
					}
				}
			},
			dataToLocalStorage(dataName){
				var arr;
				arr = [];
				for(let j = 0;j<this.$store.state[dataName].length; j++){
					arr.push(JSON.stringify(this.$store.state[dataName][j]));

				}
				localStorage[dataName] = JSON.stringify(arr);
				
			}
		},
		data(){
			return {
				unfinishShow:true,
				finishedShow:true,
				cancelShow:true
			}
		},
		computed:{
			unfinishData(){
				return this.$store.state.unfinishData;
			},
			finishedData(){
				return this.$store.state.finishedData;
			},
			cancelData(){
				return this.$store.state.cancelData;
			}
		},

		created(){
			this.localStorageToData('unfinishData','finishedData','cancelData');
		}
	}
</script>
<style lang='scss'>
	.event-list{
		height: 100%;
		.event-body {
			margin: 0px 15px;
		}
	}
	
</style>