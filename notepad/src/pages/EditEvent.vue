<template>
	<div class="edit-event" style="height:100%;" :class='[theme]'>
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
			},
			theme(){
				return this.$store.state.themeColor + '-edit-event';
			}
		},
		methods:{
			downData(){
				let downData = [];
				for(let i = 0;i<this.$store.state.chooseID.length;i++){
					downData.push(this.itemList[this.$store.state.chooseID[i]]);
				}
				let aTag = document.createElement('a');
				let blob = new Blob([JSON.stringify(downData)]);
				let nowTime = new Date();

				let fileName = nowTime.getFullYear()+this.timeRule(nowTime.getMonth() +1)+this.timeRule(nowTime.getDate())+this.timeRule(nowTime.getHours())+this.timeRule(nowTime.getMinutes())+this.timeRule(nowTime.getSeconds());
				aTag.download = fileName;
				aTag.href = URL.createObjectURL(blob);
				aTag.click();
				URL.revokeObjectURL(blob);
			},
			timeRule(num){
				if (num<10) {
					return '0'+num;
				}else{
					return num;
				}
			}
		},
		created(){
			this.$store.commit({
				type:'resetChooseID'
			})
		}
	}
</script>
<style lang='scss'>
	.edit-event{
		height: 100%;
		overflow: auto;
		.edit-body{
			padding: 15px;
			.event-title{
				margin: 0px;
			}
		}
	}

/*	theme style
*/
	::-webkit-scrollbar{
		 width:8px;
		 height:8px;
		}
</style>