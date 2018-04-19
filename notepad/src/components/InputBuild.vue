<template>
	<div class="input-build" :class='[theme]'>
		<div class="input-text">
			<input type="text" placeholder="请输入新建事件" v-model="message">
		</div>
		<div class="build-button">
			<a href="#" @click="buildEvent">新建</a>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				message:''
			}
		},
		computed:{
			theme(){
				return this.$store.state.themeColor + '-input-build'
			}
		},
		methods:{
			buildEvent(){
				if (this.message) {
					this.$emit('buildEvent',this.message);
					this.message = '';
					/*alert(this.message);*/
				}
				
			}
		}
	}
</script>
<style lang='scss'>
	.input-build{
		/*margin: 5px;*/
		display: flex;
		padding: 10px;
		height: 40px;

		.input-text {
			flex: auto;
			height: 100%;
			padding: 5px;
			input {
				width: 100%;
				height: 100%;
				padding: 0px !important;
				border:1px solid #000;
				border-radius: 5px;
				font-size: 16px;
			}
		}

		.build-button {
			flex: none;
			width: 100px;
			height: 100%;
			padding: 5px;
			a{
				display: block;
				height: 100%;
				width: 100%;
				border:1px solid #000;
				line-height: 250%;
				border-radius: 5px;
				font-size: 16px;
			}
		}
	}

/*	theme style*/	
	.green-input-build{
		.input-text{
			input{
				border:1px solid rgba(15, 189, 44,0.5);
			}
		}
		.build-button{
			a{
				border:1px solid rgba(15, 189, 44,0.5);
				background-color: rgba(15, 189, 44,0.3)
			}
		}
	}
	
</style>