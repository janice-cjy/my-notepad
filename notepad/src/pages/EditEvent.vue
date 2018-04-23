<template>
	<div class="edit-event" style="height:100%;">
		<div class="edit-body">
			<edit-table-header></edit-table-header>
			<edit-table-item v-for="(item,index) in itemList" :content='item.content' :dataType='item.type' :time="item.timer" :key="index" :itemID="index"></edit-table-item>
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
				let downDate = [];
				for(let i = 0;i<this.$store.state.chooseID.length;i++){
					downDate.push(this.itemList[this.$store.state.chooseID[i]]);
				}
				let downMessage = JSON.stringify(downDate);
				console.log(downMessage);
				this.$http.put('../static/test2.txt',{downMessage}).then(respond => {
					console.log(respond.body);
				},respond => {
					console.log("error");
				});
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