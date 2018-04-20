<template>
	<div class="Home">
		<!-- <a href="#" @click="goLogin">login</a> -->
		<side-bar></side-bar>
		<div class="show-content">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
import SideBar from '@/components/SideBar.vue'
	export default {
		components: {
			SideBar
		},
		methods: {
			goLogin(){
				this.$router.push({path:'/'});
			}
		},
		created(){
			this.$router.push({path: '/Home/EventLIst'});
		}
	}
</script>
<style>
	.Home{
		height: 100%;
		display: flex;
	}
	.side-bar{
		flex: none;
	}
	.show-content{
		flex: auto;
	}
</style>