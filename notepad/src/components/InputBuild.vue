<template>
	<div class="input-build" :class='[theme]'>
		<div class="input-text">
			<input type="text" placeholder="请输入新建事件" v-model="message" @keyup.enter="buildEvent">
		</div>
		<div class="build-button">
			<a href="#" @click="buildEvent">创  建</a>
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
		padding: 0px 10px 5px 10px;
		height: 40px;

		.input-text {
			flex: auto;
			height: 100%;
			padding: 5px;
			input {
				width: 100%;
				height: 100%;
				padding:0px 5px;
				border:1px solid #000;
				border-radius: 5px;
				font-size: 16px;
				background-color: rgba(0,0,0,0);
			}
			input::-webkit-input-placeholder{
            color:rgba(0,0,0,0.5);
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
				line-height: 250%;
				border-radius: 5px;
				font-size: 16px;
				background-color: rgba(255,255,255,0.5);
			}
		}
	}

/*	theme style*/	
	.purple-input-build{
		.input-text{
			input{
				box-shadow: 0px 0px 2px rgba(81, 3, 130,1);
				border:1px solid rgba(81, 3, 130,1);
				border-style: none;
				background-color: rgba(255,255,255,0.2);
			}
		}
		.build-button{
			a{
				box-shadow:  0px 0px 2px rgba(81, 3, 130,1);
				background-color: rgba(81, 3, 130,0.5);
				color: #fff;
			}
		}
	}
	
	.green-input-build{
		.input-text{
			input{
				box-shadow: 0px 0px 2px rgba(106, 168, 79,1);
				border:1px solid rgba(106, 168, 79,1);
				border-style: none;
				background-color: rgba(255,255,255,0.2);
			}
		}
		.build-button{
			a{
				box-shadow:  0px 0px 2px rgba(106, 168, 79,1);
				background-color: rgba(106, 168, 79,0.8);
				color: #fff;
			}
		}
	}
</style>