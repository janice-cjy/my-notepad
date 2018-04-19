<template>
	<div class="event-list">
		<input-build @buildEvent="getEvent"></input-build>
		<event-title titleName='未完成' @showEventBody="unfinishShow = !unfinishShow"></event-title>
		<div class="event-body" v-if="unfinishShow">
			<event-item v-for="(item,index) in unfinishData" :content="item.content" :timer="item.timer" :type="item.type" :eventID="index"></event-item>
		</div>

		<event-title titleName='已完成' @showEventBody="finishedShow = !finishedShow"></event-title>
		<div class="event-body" v-if="finishedShow">
			<event-item v-for="(item,index) in finishedData" :content="item.content" :timer="item.timer" :type="item.type" :eventID="index"></event-item>
		</div>
		
		<event-title titleName='已取消' @showEventBody="cancelShow = !cancelShow"></event-title>
		<div class="event-body" v-if="cancelShow">
			<event-item v-for="(item,index) in cancelData" :content="item.content" :timer="item.timer" :type="item.type" :eventID="index"></event-item>
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
				/*let arg = {};
				arg.content = content;
				arg.timer = time;
				arg.type = 'unfinish';
				this.unfinishData.push(arg);*/
				this.$store.commit({
					type:'dealData',
					dataType: 'unfinish',
					dealType: 'add',
					content: content,
					timer: time
				})
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