<template>
	<div class="env-wrapper">
		<div class="header">餐厅环境</div>
		<div class="env-images" v-for='(val,key) in envs'>
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
			envs:{
				// 0:require('../Foodorigin/food.jpg'),
				// 1:require('../Foodorigin/food.jpg'),
				// 2:require('../Foodorigin/food.jpg'),
				// 3:require('../Foodorigin/food.jpg'),
				// 4:require('../Foodorigin/food.jpg')
			}
		}
	},
	mounted(){
		let id = JSON.parse(window.sessionStorage.getItem('id'));
		common.Axios('/gethuanjing','get',{'id':id}).then((res) => {
			//console.log(res);
			this.envs = res.huanjinglist[0];
		})
	}
}
</script>

<style scoped="scoped">
.env-wrapper{
	width: 100%;
}
.env-images{
	width: 100%
}
.env-images img{
	display: block;
	width: 100%;
}	
</style>