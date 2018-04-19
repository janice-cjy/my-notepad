<template>
	<div class="login">
		log in page.
		<a href="#" @click="goTo">home</a>
	</div>
	
</template>
<script>
	export default {
		methods :{
			goTo(){
				this.$router.push({path: '/Home'});
			}
		}
	}
</script>
<style>
	.login{

	}
</style>