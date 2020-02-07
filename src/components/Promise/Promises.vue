<template>
	<div class="pro-wrapper">
		<div class="header">商家承诺</div>
		<div class="pro-images" v-for='(val,key) in promise'>
			<img :src=val>
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
			promise:{
				// 0:require('../Foodorigin/food.jpg'),
				// 1:require('../Foodorigin/food.jpg'),
				// 2:require('../Foodorigin/food.jpg'),
				// 3:require('../Foodorigin/food.jpg'),
				// 4:require('../Foodorigin/food.jpg')
			}
		}
	},
	mounted(){

		let id =JSON.parse(window.sessionStorage.getItem('id'));
		common.Axios('/getChengnuo','get',{'id':id}).then((res) => {
			//console.log(res.chengnuolist[0]);
			this.promise = res.chengnuolist[0];
		});
	}
}
</script>

<style scoped="scoped">
.pro-wrapper{
	width: 100%;
}
.pro-images{
	width: 100%
}
.pro-images img{
	display: block;
	width: 100%;
}	
</style>
