<template>
	<div class="sup-wrapper">
		<div class="header">网格化监管人员</div>
		<div class="area">监管区域 | {{area}}</div>
		<ul class="sup-image">
			<div v-for='people in peoples'>
				<img :src="people.avatar">
				<li><span>姓名:</span>{{people.name}}</li>
				<li><span>电话:</span>{{people.tel}}</li>
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
	name:'supervisor',
	data(){
		return{
			area:'',
			peoples:[]
		}
	},
	methods:{
		async disImage(){
			let id = JSON.parse(window.sessionStorage.getItem('id'));
			await common.Axios('/getJianguan','get',{'id':id}).then((res) => {
				//console.log(res);
				this.area = res.jianguanInfo.zhifayuqu;
			});
			switch(this.area){
				case '星河广场':{
					this.peoples = [
						{name:'张琛',tel:'15847715865',avatar:require('../Supervisor/zhangchen.jpg')},
					    {name:'韩磊',tel:'18547794008',avatar:require('../Supervisor/hanlei.jpg')},
					];
				};break;
				default:;
			}
		}
	},
	mounted(){
		this.disImage();
	}
}
</script>

<style scoaped>
.sup-wrapper{
	width: 100%;
}
.area{
	height: 28px;
	line-height: 28px;
	text-align: center;
	border: 1px solid #ccc;
}	
.sup-image{
 	width: 100%;
}
.sup-image img{
	display: block;
	width: 200px;
	height: 280px;
	margin: 10px auto 0px auto;
}
.sup-image li{
	width: 55%;
	height: 18px;
	line-height: 18px;
	padding: 5px;
	border-bottom: 1px solid #ccc;
	margin: 0 auto;

}
.sup-image li span{
	display: inline-block;
	width: 40%;
	text-align: right;
}
</style>