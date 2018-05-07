<template>
	<div class="side-bar" :class="[themeColor]">
		<div class="deal-area">
			<div class="deal-items">
				<a href="#" @click="changeRouter('EventList')">
					数据列表
				</a>	
			</div>
			<div class="deal-items">
				<a href="#" @click="changeRouter('EditEvent')">
					下载数据
				</a>	
			</div>
			<div class="deal-items">
				<a href="#" @click="showModel">
					导入数据
				</a>	
			</div>
			<div class="deal-items">
				<a href="#" @click="deleteData">
					删除数据
				</a>	
			</div>
			<div class="deal-items">
				<a href="#" @click="themeShow = !themeShow">
					更换主题
				</a>
					
			</div>
			<theme-choose v-if="themeShow"></theme-choose>
		</div>
		<div class="side-bar-footer">
			created by Janice Chen
		</div>
	</div>
</template>
<script>
import ThemeChoose from './Theme.vue'
	export default {
		components: {
			ThemeChoose
		},
		data(){
			return {
				userName:'janice',
				themeShow: false
			}
		},
		methods:{
			changeRouter(routerName){
				this.$router.push({path: '/Home/' + routerName});
			},
			deleteData(){
				var del = confirm('是否确定删除所有事件数据');
				if (del) {
					this.$store.commit({
						type: 'deleteData'
					});
					localStorage.unfinishData = [];
					localStorage.finishedData = [];
					localStorage.cancelData = [];
				}
			},
			showModel(){
				this.$emit("showModel");
			}
		},
		computed:{
			themeColor(){
				return this.$store.state.themeColor + '-side-bar';
			}
		}
	}
</script>
<style lang='scss'>
	.side-bar{
		height: 100%;
		width: 200px;
		display: flex;
		flex-direction: column;
		background-color: rgba(255,255,255,0.2);
		margin: 10px;
	}
	.user-message{
		flex: none;
		padding: 5px 0px;
		.greeting{
			.user-name{
				text-align: center;
				font-size: 20px;
			}
		}
		a{
			font-size: 12px;
		}
	}
	.deal-area{
		flex: auto;
	}
	.side-bar-footer{
		height: 20px;
		flex: none;
		padding: 5px 0px;
		font-size: 12px;
		text-align: center;
	}
	.deal-items{
		background-color: rgba(255,255,255,0.3);
	}
	.deal-items {
		a{
			display: block;
			padding: 10px;
			font-size: 14px;
			font-weight: bold;
			color: #000;
			
		}

	}
	/*style-choose*/
	/*.green-theme{
		background-color: rgba(15, 189, 44,1);
		background-color: rgba(139, 174, 237,0.6);
	}*/
	.purple-side-bar{
		border:1px solid rgba(81, 3, 130,0.5);
		box-shadow: 2px 2px 2px rgba(81, 3, 130,0.3);
		.deal-items{
			box-shadow: 0px 1px 0px rgba(81, 3, 130,0.3);
			a{
				&:hover{
					background-color: rgba(81, 3, 130,0.5);
				}
				&:active{
					background-color: rgba(255,255,255,0.5);
				}
				/*&:visited{
					background-color: rgba(81, 3, 130,0.5);
				}*/
			}
			
		}
	}

	.green-side-bar{
		border:1px solid rgba(106, 168, 79,0.5);
		box-shadow: 2px 2px 2px rgba(106, 168, 79,0.5);
		.deal-items{
			box-shadow: 0px 1px 0px rgba(106, 168, 79,0.5);
			a{
				&:hover{
					background-color: rgba(106, 168, 79,0.5);
				}
				&:active{
					background-color: rgba(106, 168, 79,0.5);
				}
				/*&:visited{
					background-color: rgba(81, 3, 130,0.5);
				}*/
			}
			
		}
	}
</style>