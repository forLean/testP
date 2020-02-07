<template>
	<div class="sun-wrapper">
		<div class="header">阳光厨房</div>
		<ul class="sun-button">
			<div v-for='camera in cameras'>
				<div v-for='(val,key) in camera' v-if='val'>
					<a :href="val"><li>摄像头</li></a>
				</div>
			</div>
			
		</ul>
		<footer>
			<div>易领网络科技提供技术支持</div>
		</footer>
	</div>
</template>

<script>
import common from '../../comjs/common.js'

export default{
	name:'sunkitchen',
	data(){
		return{
			cameras:[]
		}
	},
	methods:{
		disCamera:function(){
			let id = JSON.parse(window.sessionStorage.getItem('id'));
			common.Axios('/getSunshineKitchen','get',{id:id}).then((res) => {
				// console.log(res);
				this.cameras = res.kitchenlist;
			});
		}
	},
	mounted(){
		this.disCamera();
	}
}
</script>

<style scoaped>
.sun-wrapper{
	position: relative;
	width: 100%;
}
.sun-button{
	width: 100%;
}
.sun-button li{
	width: 80%;
	height: 36px;
	line-height: 36px;
	background-color: #ccc;
	border-radius: 5px;
	margin: 10px auto 0px auto;
	text-align: center;
	font-size: 16px;
}
</style>