<template>
	<div class="law-wrapper">
		<div class="header">法律法规</div>
		<div class="law-images">
			<img src='../Law/01.png'>
			<img src='../Law/02.png'>
			<img src='../Law/03.png'>
		</div>
		<footer>
			<div>易领网络科技提供技术支持</div>
		</footer>
	</div>
</template>

<script>
import common from '../../comjs/common.js'

export default{
	name:'law',
	data(){
		return{
			laws:{
				// 0:require('../Foodorigin/food.jpg'),
				// 1:require('../Foodorigin/food.jpg'),
				// 2:require('../Foodorigin/food.jpg'),
				// 3:require('../Foodorigin/food.jpg'),
				// 4:require('../Foodorigin/food.jpg')
			}
		}
	},
	mounted(){
		// let id =JSON.parse(window.sessionStorage.getItem('id'));
		// common.Axios('/getAnquan','get',{'id':id}).then((res) => {
		// 	console.log(res);
		// 	this.laws = res.anquanlist[0];
		// });
	}
}
</script>

<style scoped="scoped">
.law-wrapper{
	width: 100%;
}
.law-images{
	width: 100%
}
.law-images img{
	display: block;
	width: 100%;
}	
</style>