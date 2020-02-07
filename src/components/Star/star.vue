<template>
	<div class="star" :class="starType">
		<span v-for="itemClass in itemClasses" :class="itemClass+'-'+starType" class="item"></span>
	</div>
</template>

<script>
const LENGTH=5;
const CLS_ON="on";
const CLS_HALF="half";
const CLS_OFF="off";
export default{
	name:'star',
	props:{
		size:{
			type:Number
		},
		score:{
			type:Number
		}
	},
	computed:{
		starType(){
			return 'star-' + this.size;
		},
		itemClasses(){

			 let result = [];
			 let score = Math.floor(this.score*2)/2;//让score的值总在整数和整数的一半这两个值，如4，4.5
			 let hasDecimal = score % 1 !== 0;//判断是否存在小数
			 let integer = Math.floor(score);//取出整数，作为整星的判断
			for(var i=0;i<integer;i++){
		 	result.push(CLS_ON);//放入整星
			 }
			 if(hasDecimal){
			 	result.push(CLS_HALF);//若存在小数，则放入半星
			 }
			 while(result.length<LENGTH){
			 	result.push(CLS_OFF);//若星星长度不足5颗，则放入灰星
			 }
			 return result;
		}
	}
}	
</script>

<style scoped>
.star{
	font-size: 0;
	width: 102px;
	height: 18px;
}
.item{
	display: inline-block;
	background-repeat: no-repeat;
}
.item:last-child{
	margin-right: 0;
}
.on-star-24{
	width: 18px;
	height: 18px;
	background-size: 18px 18px;
	background-image:url("../Star/on.png");
	margin-right: 3px;
}
.half-star-24{
	width: 18px;
	height: 18px;
	background-size: 18px 18px;
	background-image:url("../Star/half.png");
	margin-right: 3px;
}
.off-star-24{
	width: 18px;
	height: 18px;
	background-size: 18px 18px;
	background-image:url("../Star/off.png");
	margin-right: 3px;
}
</style>