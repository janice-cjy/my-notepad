<template>
	<div class="input-data" :class='[theme]'>
		<div class="input-data-content">
			<p class="tips">
			只能导入从本记事本下载的数据文件～
			</p>
			<input type="file" accept=".txt" name="" id="file-choose">
			<button @click="inputData">导入</button>
			<button @click="closeModel">关闭</button>
		</div>
		
	</div>
</template>
<script>
	export default {
		data(){
			return {
				theme:this.$store.state.themeColor + '-input-data'
			}
		},
		methods:{
			inputData(){
				let reader = new FileReader();
				let file = document.getElementById("file-choose");
				reader.readAsText(file.files[0]);
				reader.onload = () => {
					let arr = JSON.parse(reader.result);
					this.$store.commit({
						type:'inputData',
						data:arr
					});
					this.dataToLocalStorage("finishedData");
					this.dataToLocalStorage("unfinishData");
					this.dataToLocalStorage("cancelData");
					alert("导入数据成功");
					this.$emit("closeModel");
				}
				
			},
			closeModel(){
				this.$emit("closeModel");
			},
			dataToLocalStorage(stringName){
				var arr;
				arr = [];
				for(let j = 0;j<this.$store.state[stringName].length; j++){
					arr.push(JSON.stringify(this.$store.state[stringName][j]));

				}
				localStorage[stringName] = JSON.stringify(arr);
			}
		}
	}
</script>
<style lang='scss'>
	.input-data{
		position: fixed;
		background-color: rgba(0,0,0,0.4);
		width: 100%;
		height: 100%;
		.input-data-content{
			background-color: rgba(255,255,255,0.8);
			width: 400px;
			margin: 200px auto;
			padding: 15px;
			border-radius: 5px;
			.tips{
				padding: 5px;
			}
		}
	}

/*	theme style
*/
	.purple-input-data{
		.input-data-content{
			box-shadow:  0px 0px 8px rgba(81, 3, 130,1);
		}
	}

	
</style>