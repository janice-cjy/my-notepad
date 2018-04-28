<template>
	<div class="login">
		<!-- log in page.
		<a href="#" @click="goTo">home</a> -->
		<div class="login-in-form">
			<input type="text" placeholder="用户名" name="" v-model="userName">
			<input type="password" placeholder="密码" name="" v-model="password">
			<div class="save-change">
				<div class="save">
					<input type="checkbox" name="">remenber me
				</div>
				<div class="change">
					<a href="#">注册</a>
				</div>
			</div>
			<button><a href="#" @click="goTo">登&nbsp&nbsp&nbsp&nbsp录</a></button>
		</div>
	</div>
	
</template>
<script>
	export default {
		methods :{
			goTo(){
				this.$store.commit({
					type: 'checkUserMessage',
					userName: this.userName,
					password: this.password
				})
				if(this.$store.state.login){
					
				}
				this.$router.push({path: '/Home'});
			}
		},
		data(){
			return {
				userName:'',
				password:''
			}
		},
		created(){
			this.$http.get('./static/test2.txt').then(
				(response)=>{
					/*console.log(response.bodyText);
					console.log(JSON.parse(response.bodyText));*/
					this.$store.commit({
						type:'saveUserMessage',
						userData:JSON.parse(response.bodyText)
					})
			},()=>{

			})
		}
	}
</script>
<style lang='scss'>
	.login{
		height: 100%;
		background-image: url('../assets/lover.jpg');
		position: relative;
		.login-in-form{
			width: 300px;
			height: 200px;
			position: absolute;
			top:50%;
			transform:translateY(-50%);
			left:50%;
			margin-left: -150px;
			border:1px solid rgba(224, 211, 211,0.5);
			border-radius: 5px;
			padding: 20px 10px;
			background-color: rgba(224, 211, 211,0.2);
			input{
				background-color: rgba(224, 211, 211,0.3);
				border-style: none;
				height: 30px;
				width: 80%;
				margin-top: 10px;
				padding: 5px;
				border:1px solid rgba(224, 211, 211,0.5);
				border-radius: 5px;
			}
			.save-change{
				width: 80%;
				display: flex;
				margin: 0px auto;
				.save{
					flex: auto;
					text-align: left;
					input{
						width: 15px;
						height: 15px;
					}
				}
				.change{
					text-align: right;
					width: 50px;
					flex: none;
					text-align: right;
					display: flex;
					align-items: flex-end;
					a{
						color: #fff;
					}
				}
			}
			button{
				width: 80%;
				padding:10px;
				background-color: rgba(17, 86, 214,0.5);
				border-style: none;
				border-radius: 3px;
				border:1px solid rgba(224, 211, 211,0.5);
				box-shadow: 2px 2px 5px #000;
				margin-top: 15px;
				a{
					width: 100%;
					height: 100%;
					display: block;
					color: #fff;
				}
			}
			
		}
	}
	input::-webkit-input-placeholder{
            color:#fff;
        }
   
</style>