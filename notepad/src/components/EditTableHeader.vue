<template>
	<div class="edit-table-header" :class='[theme]'>
		<div class="choose-box">
		</div>
		<div class="edit-table-header-content">事件描述</div>
		<div class="edit-table-header-time">创建时间</div>
		<div class="edit-table-header-buttons">事件类型</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				theme: this.$store.state.themeColor + '-edit-table-header'
			}
		}

	}
</script>
<style lang='scss'>
	.edit-table-header{
		display: flex;
		font-size: 14px;
		padding: 10px;
		font-weight: bold;
		border-radius: 5px 5px 0px 0px;
		background-color: rgba(255,255,255,0.3);
		.choose-box{
			width: 50px;
			flex: none;
		}

		.edit-table-header-content{
			flex:auto;
			text-align: left;
		}

		.edit-table-header-time{
			width: 100px;
			flex: none;
		}

		.edit-table-header-buttons{
			width: 100px;
			flex: none;
		}
	}
/* theme style*/	
	.purple-edit-table-header{
		box-shadow:  0px 0px 5px rgba(81, 3, 130,1);
	}
</style>