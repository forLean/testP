<template>
	<div class="eight">
		<div class="header">8Z8H规范</div>
		<div class="t-wrapper">
			<span class="lines"></span>
			<span class="text">8Z8H厨房新革命理念</span>
		</div>
		<ul id="zh">
			<li v-for='zh in zhs'>
				<p>{{zh.title}}</p>
				<img :src="zh.zimg" v-if="zh.zimg">
				<img :src="zh.zimg0" v-if="zh.zimg0">
				<img :src="zh.zimg1" v-if="zh.zimg1">
			</li>
		</ul>
		<footer>
			<div>易领网络科技提供技术支持</div>
		</footer>
	</div>
</template>

<script>
export default{
	name:'zh',
	data(){
		return{
			zhs:[
				{title:'整摆物件习惯化',zimg:require('../8Z8H/1-1.jpg'),zimg0:require('../8Z8H/1-2.jpg'),zimg1:require('../8Z8H/1-3.jpg')},
				{title:'整体色标分区化',zimg:require('../8Z8H/2-1.jpg'),zimg0:require('../8Z8H/2-2.jpg')},
				{title:'整合管理精细化',zimg:require('../8Z8H/3.jpg')},
				{title:'整洁干净日常化',zimg:require('../8Z8H/4.jpg'),zimg0:require('../8Z8H/4-1.jpg')},
				{title:'整治规范制度化',zimg:require('../8Z8H/5-1.jpg'),zimg0:require('../8Z8H/5-2.jpg')},
				{title:'整顿检查常态化',zimg:require('../8Z8H/6.jpg')},
				{title:'整改提升责任化',zimg:require('../8Z8H/7.jpg')},
				{title:'整理台帐规范化',zimg:require('../8Z8H/8.jpg')}
			]
		}
	},
	methods:{
		zhImage:function(){
			let z_count = 0;
			zh.onclick = function(e){
				let ev = e || event;
				let ztarget = ev.target || ev.srcElement;

				// console.log(ztarget.parentNode.children[1]);
				if (z_count == 0) {
					for (let chi = 1; chi < ztarget.parentNode.children.length; chi++){
						ztarget.parentNode.children[chi].style.display = 'block';
					}
					//ztarget.parentNode.children[1].style.display = 'block';
					z_count = 1;
				}
				else{
					for (let chi = 1; chi < ztarget.parentNode.children.length; chi++){
						ztarget.parentNode.children[chi].style.display = 'none';
					}
					//ztarget.parentNode.children[1].style.display = 'none';
					z_count = 0;
				}
			}
		}
	},
	mounted(){
		this.zhImage();
	}
}
</script>

<style scoaped>
.eight{
	width: 100%;
}
.t-wrapper{
	height: 30px;
	margin: 10px 0px 0px 0px;
	padding: 5px 5px 5px 0px;
	border-bottom: 1px solid #ccc;
	font-size: 18px;
}
.eight p{
	height: 36px;
	line-height: 36px;
	color: #000;
	background-color: rgba(192,192,192,0.8);
	border-radius: 12px;
	padding-left: 12px;
	margin-top: 15px;
}
.eight img{
	width: 100%;
	display: none;
}
.lines{
	width: 4px;
	height: 18px;
	background-color: #2ea4f8;
	display: inline-block;
	margin-left: 5px;
}
.text{
	vertical-align: top;
}
</style>
