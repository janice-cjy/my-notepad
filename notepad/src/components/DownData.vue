<template>
	<div class="down-data" :class='[theme]'>
		<button><a href="#" @click="downing">下载</a></button>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			downing(){
				this.$emit('downing');
			}
		},
		computed:{
			theme(){
				return this.$store.state.themeColor + '-down-data';
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
		background-color: rgba(255,255,255,0.3);
	}

/*theme style
*/
	.purple-down-data{
		box-shadow:  0px 0px 5px rgba(81, 3, 130,1);
	}

	.green-down-data{
		box-shadow:  0px 0px 5px rgba(106, 168, 79,1);
	}
</style>