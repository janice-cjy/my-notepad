<template>
	<div class="event-list">
		<input-build @buildEvent="getEvent"></input-build>
		<event-title titleName='未完成' @showEventBody="unfinishShow = !unfinishShow"></event-title>
		<div class="event-body" v-if="unfinishShow">
			<event-item v-for="item in unfinishData" :content="item.content" :timer="item.timer" :type="item.type"></event-item>
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
				console.log(arguments[0]);
				let content = arguments[0];
				let now = new Date();
				let time = now.getFullYear() + '-' + (now.getMonth()+1) + '-' + now.getDate();
				let arg = {};
				arg.content = content;
				arg.timer = time;
				arg.type = 'unfinish';
				this.unfinishData.push(arg);
				console.log(this.unfinishData);
			}
		},
		data(){
			return {
				unfinishShow:true,
				unfinishData:[]
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