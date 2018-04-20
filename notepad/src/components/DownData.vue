<template>
	<div class="down-data" :class='[theme]'>
		<button><a href="#" @click="downing">下载</a></button>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				theme: this.$store.state.themeColor + '-down-data'
			}
		},
		methods:{
			downing(){
				this.$emit('downing');
			}
		}
	}
</script>
<style lang='scss'>
	.down-data{
		border-radius: 0px 0px 5px 5px;
		text-align: center;
		font-size: 18px;
		padding: 10px;
	}

/*theme style
*/
	.green-down-data{
		border:1px solid rgba(15, 189, 44,0.5);
		background-color: rgba(15, 189, 44,0.3);
	}
</style>