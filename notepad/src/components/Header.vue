<template>
	<div class="j-header" :class='[theme]'>
		<div class="user-name">Janice</div>
		<div class="methods"><a href="#" @click="changeUser">切换账号</a></div>
	</div>
</template>
<script>
	export default {
		computed:{
			theme(){
				return this.$store.state.themeColor + '-header';
			}
		},
		methods:{
			changeUser(){
				this.$router.push({path:'/'});
				this.$store.state.login=false;
			}
		}
	}
</script>
<style lang='scss'>
	.j-header{
		display: flex;
		height: 100%;
		/*padding: 10px 50px;*/
		.user-name{
			width: 50px;
			flex: none;
			display: flex;
			align-items: flex-end;
			font-size: 30px;
			color: rgba(32, 18, 77,1);
		}
		.methods{
			flex: auto;
			text-align: right;
			display: flex;
			justify-content: flex-end;
			align-items: flex-end;
		}
	}

/*	theme style
*/
	.purple-header{
		
	}
</style>