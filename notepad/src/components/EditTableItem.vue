<template>
	<div class="edit-table-item" :class='[theme]' @click="getChooseItem">
		<div class="edit-table-item-choose">
			<input type="checkbox" name="" :checked="isChecked">
		</div>
		<div class="edit-table-item-content">{{content}}</div>
		<div class="edit-table-item-time">{{time}}</div>
		<div class="edit-table-item-type">{{dataType}}</div>
	</div>
</template>
<script>
	export default {
		props:['content','dataType','time','itemID'],
		data(){
			return {
				theme: this.$store.state.themeColor + '-edit-table-item',
				isChecked:false
			}
		},
		methods:{
			getChooseItem(){
				this.isChecked = !this.isChecked;
				this.$store.commit({
					type: 'dealChooseID',
					dealType: this.isChecked,
					index: this.itemID
				})	
			}
		}
	}
</script>
<style lang='scss'>
	.edit-table-item{
		padding: 10px;
		display: flex;
		.edit-table-item-choose{
			width: 50px;
			flex: none;
		}

		.edit-table-item-content{
			flex: auto;
			text-align: left;
		}

		.edit-table-item-time{
			width: 100px;
			flex: none;
		}
		
		.edit-table-item-type{
			width: 100px;
			flex: none;
		}
	}
/*	theme style
*/
	.green-edit-table-item{
		border:1px solid rgba(15, 189, 44,0.5);	
		&:hover{
			background-color:rgba(15,189,44,0.3);
		}
	}
</style>