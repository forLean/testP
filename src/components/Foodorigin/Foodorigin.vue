<template>
	<div class="food-wrapper">
		<div class="header">食物溯源</div>
		<div id="food-button">
			<div v-for='food in foods'>
				<div class="food-date" @click='displayFood()'>{{food.create_date}}</div>
				<div v-for='(val,key) in foodDetails' class="dis-img" style="display: none;">
					<img :src="val">
				</div>
			</div>
		</div>
		<footer>
			<div>易领网络科技提供技术支持</div>
		</footer>
	</div>
</template>

<script>
import common from '../../comjs/common.js'
let clicked = 0;

export default{
	name:'food',
	data(){
		return{
			foods:[],
			foodDetails:{}
		}
	},
	methods:{
		async displayFood(e){
			let ev = e || event;
			let itarget =  ev.target || ev.srcElement;
			if (itarget.stoppropagation) {
					itarget.stoppropagation();
			}
			else{
					ev.cancelBubble = true; 
			}
			let food_date = document.getElementsByClassName('food-date');
			for (let fd = 0; fd < this.foods.length; fd++) {
				food_date[fd].id = this.foods[fd].id;
				//console.log(this.cleans[cd].id);
			}

			if (itarget.className == 'food-date' && clicked == 0) {
					await common.Axios('/getShicaiByday','get',{'id':itarget.id}).then((res) => {
						this.foodDetails = res.shicailist[0];
					});
					let all_reimgs = document.getElementsByClassName('dis-img');
						for (let aig = 0; aig < all_reimgs.length; aig++) {
							all_reimgs[aig].style.display = 'none';
						}

						let re_fimgs = itarget.parentNode.getElementsByClassName('dis-img');
						for (let del = 0 ; del < re_fimgs.length; del++) {
							re_fimgs[del].style.display = 'block';
						}
						clicked = 1;
				}
				else{
					let re_fimgs = itarget.parentNode.getElementsByClassName('dis-img');
					for (let del = 0 ; del < re_fimgs.length; del++) {
						re_fimgs[del].style.display = 'none';
					}
					clicked = 0;
				}
		}
	},
	mounted(){
		let id = JSON.parse(window.sessionStorage.getItem('id'));
		common.Axios('/shicailist','get',{'id':id}).then((res) => {
			//console.log(res);
			this.foods = res.shicaiList;
		});

	}
}
</script>

<style scoped="scoped">
.food-wrapper{
	width: 100%;
}
.food-date{
	height:32px;
	line-height: 32px;
	border-radius: 10px;
	background-color: #ccc;
	padding-left: 10px;
	margin-top: 10px;
	cursor: pointer;
	display: block;
	-webkit-tap-highlight-color:rgba(0,0,0,0);
}
#food-button img {
    width: 100%;
    display: block;
}
</style>