<template>
	<div class="theme" :class="[themeColor]">
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
				colorList:['梦幻紫玉','深邃夜空','葱郁鲜绿']
			}
		},
		methods:{
			getTheme(color){
				this.$store.commit({
					type:'changeTheme',
					color:color
				});
			}
		},
		computed:{
			themeColor(){
				return this.$store.state.themeColor + '-theme';
			}
		}
	}
</script>
<style lang='scss'>

	ul{
		margin: 0px;
		padding: 0px;
		li{
			list-style: none;
			a{
				display: block;
				padding: 5px;
				background-color: rgba(255,255,255,0.3);
				color: #000;
			}
		}
	}

/*	theme style
*/
	.purple-theme{
		a{
			box-shadow: 0px 1px 5px rgba(81, 3, 130,0.3);
		}
	}

	.green-theme{
		a{
			box-shadow: 0px 1px 5px rgba(106, 168, 79,0.5);
		}
	}
</style>