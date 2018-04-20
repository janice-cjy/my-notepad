<template>
	<div class="edit-event" style="height:100%;">
		<div class="edit-body">
			<edit-table-header></edit-table-header>
			<edit-table-item v-for="item in itemList" :content='item.content' :dataType='item.type' :time="item.timer"></edit-table-item>
			<down-data @downing="downData"></down-data>
		</div>
		
	</div>
</template>
<script>
import EventTitle from '@/components/EventTitle.vue'
import EditTableHeader from '@/components/EditTableHeader.vue'
import EditTableItem from '@/components/EditTableItem.vue'
import DownData from '@/components/DownData.vue'
	export default {
		components:{
			EventTitle,
			EditTableHeader,
			EditTableItem,
			DownData
		},
		data(){
			return {
				
			}
		},
		computed:{
			itemList:function(){
				let arr = [];
				return arr.concat(this.$store.state.unfinishData,this.$store.state.finishedData,this.$store.state.cancelData);
			}
		},
		methods:{
			downData(){
				alert("downing...");
			}
		}
	}
</script>
<style lang='scss'>
	.edit-event{
		height: 100%;
		
		.edit-body{
			padding: 15px;
			.event-title{
				margin: 0px;
			}
		}
	}
</style>