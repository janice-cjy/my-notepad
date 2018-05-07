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
		},
		computed:{
			theme(){
				return this.$store.state.themeColor + '-edit-table-item';
			}
		}
	}
</script>
<style lang='scss'>
	.edit-table-item{
		padding: 15px;
		display: flex;
		background-color: rgba(255,255,255,0.2);
		.edit-table-item-choose{
			width: 50px;
			flex: none;
		}

		.edit-table-item-content{
			flex: auto;
			text-align: left;
		}

		.edit-table-item-time{
			width: 150px;
			flex: none;
		}
		
		.edit-table-item-type{
			width: 100px;
			flex: none;
		}
	}
/*	theme style
*/
	.purple-edit-table-item{
		box-shadow: 0px 2px 5px rgba(81, 3, 130,0.3);
		&:hover{
			background-color:rgba(81, 3, 130,0.1);
		}
	}

	.green-edit-table-item{
		box-shadow: 0px 2px 5px rgba(106, 168, 79,0.3);
		&:hover{
			background-color:rgba(106, 168, 79,0.3);
		}
	}
</style>