<template>
	<div class="theme">
		<ul>
			<li v-for="item in colorList"><a href="#" @click="getTheme(item)">{{item}}</a>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				colorList:['green','red','yellow']
			}
		},
		methods:{
			getTheme(color){
				this.$store.commit({
					type:'changeTheme',
					color:color
				});
			}
		}
	}
</script>
<style>
	li{
		list-style: none;
	}
	ul{
		margin: 0px;
		padding: 0px;
	}
</style>