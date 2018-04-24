<template>
	<div class="side-bar" :class="[themeColor]">
		<div class="user-message">
			<h1 class="greeting">早上好</h1>
			<p class="user-name">{{userName}}</p>
			<a href="#" @click="changeUser">切换用户</a>
		</div>
		<div class="deal-area">
			<div class="deal-items" style="padding:5px;">
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
				<theme-choose v-if="themeShow"></theme-choose>	
			</div>
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
				/*themeColor:this.$store.state.themeColor + '-theme',*/
				themeShow: false
			}
		},
		methods:{
			changeUser(){
				this.$router.push({path:'/'});
			},
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
				return this.$store.state.themeColor + '-theme';
			}
		}
	}
</script>
<style>
	.side-bar{
		height: 100%;
		width: 200px;
		display: flex;
		flex-direction: column;
	}
	.user-message{
		flex: none;
		height: 150px;
		padding: 5px 0px;
	}
	.deal-area{
		flex: auto;
		padding: 5px 0px;
	}
	.side-bar-footer{
		height: 20px;
		flex: none;
		padding: 5px 0px;
		font-size: 12px;
		text-align: center;
	}
	.greeting{
		text-align: left;
		font-family: 'Microsoft Yahei';
		transform: skew(-25deg,10deg);
		-ms-transform: skew(-25deg,10deg);	/* IE 9 */
		-webkit-transform: skew(-25deg,10deg);	/* Safari and Chrome */
		-o-transform: skew(-25deg,10deg);	/* Opera */
		-moz-transform: skew(-25deg,10deg);
		color: rgba(0,0,0,0.2);
			}
	.user-name{
		text-align: center;
		
	}
	.deal-items{
		padding: 5px;
	}
	.deal-items a{
		display: block;
		width: 100%;
	}

	/*style-choose*/
	.green-theme{
		background-color: rgba(15, 189, 44,0.3);
	}
	.green-theme div{
		border:1px solid rgba(15, 189, 44,0.5);
	}
</style>