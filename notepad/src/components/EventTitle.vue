<template>
	<div class="event-title" :class='[theme]'><a href="#"  @click="showEventBody">{{titleName}}</a></div>
</template>
<script>
	export default {
		props:['titleName'],
		data(){
			return {
				
			}
		},
		computed:{
			theme(){
				return this.$store.state.themeColor + '-event-title';
			}
		},
		methods:{
			showEventBody(){
				this.$emit('showEventBody')
			}
		}
	}
</script>
<style lang='scss'>
	.event-title{
		margin:15px 15px 0px 15px;
		text-align: left;
		padding:5px;
		border-radius: 5px 5px 0px 0px;
		background-color: rgba(255,255,255,0.3);
		a{
			display: block;
			width: 100%;
			height: 100%;
		}
	}

/*	theme style*/
	.purple-event-title{
		box-shadow: 0px 0px 5px rgba(81, 3, 130,1);
	}
</style>