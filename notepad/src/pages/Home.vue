<template>
	<div class="Home">
		<!-- <a href="#" @click="goLogin">login</a> -->
		<side-bar @showModel="modelShow = true"></side-bar>
		<div class="show-content">
			<router-view></router-view>
		</div>
		<input-data v-if="modelShow" @closeModel="modelShow = false"></input-data>
	</div>
</template>
<script>
import SideBar from '@/components/SideBar.vue'
import InputData from '@/components/InputData.vue'
	export default {
		components: {
			SideBar,
			InputData
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
		}
	}
</script>
<style>
	.Home{
		height: 100%;
		display: flex;
		width: 100%;
		overflow: hidden;
	}
	.side-bar{
		flex: none;
	}
	.show-content{
		flex: auto;
		padding-bottom: 15px;
	}
</style>