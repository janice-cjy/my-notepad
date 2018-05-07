<template>
	<div class="Home" :class='[theme]'>
		<!-- <a href="#" @click="goLogin">login</a> -->
		
		<div class="header">
			<j-header></j-header>
		</div>
		<div class="body">
			<side-bar @showModel="modelShow = true"></side-bar>
			<div class="show-content">
				<router-view></router-view>
			</div>
			<input-data v-if="modelShow" @closeModel="modelShow = false"></input-data>
		</div>
	</div>
</template>
<script>
import SideBar from '@/components/SideBar.vue'
import InputData from '@/components/InputData.vue'
import JHeader from '@/components/Header.vue'
	export default {
		components: {
			SideBar,
			InputData,
			JHeader
		},
		methods: {
			goLogin(){
				this.$router.push({path:'/'});
			}
		},
		created(){
			this.$router.push({path: '/Home/EventLIst'});
		},
		data(){
			return {
				modelShow:false
			}
		},
		computed:{
			theme(){
				return this.$store.state.themeColor + '-home';
			}
		}
	}
</script>
<style lang='scss'>
	.Home{
		height: 100%;
		display: flex;
		width: 100%;
		overflow: hidden;
		flex-direction: column;
		.header{
			height: 50px;
			flex: none;
			padding: 5px 50px;
		}
		.body{
			flex: auto;
			display: flex;
			.side-bar{
				flex: none;
			}
			.show-content{
				flex: auto;
				padding-bottom: 15px;
				margin: 10px;
			}
		}
	}
	
/*	theme style
*/
	.purple-home{
		.header{
			background-color: rgba(81, 3, 130,0.3);
		}
		
	}

	.green-home{
		.header{
			background-color: rgba(106, 168, 79,0.8);
		}
	}
</style>