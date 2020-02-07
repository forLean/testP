<template>
	<div class="clean-wrapper">
		<div class="header">清洁记录</div>
		<div id="clean-button">
			<div v-for='clean in cleans'>
				<div class="clean-date" @click='display()'>{{clean.create_date}}</div>
				<div v-for='(val,key) in cleanDetails' class="dis-img" style="display: none;">
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
let clicks = 0;

export default{
	name:'clean',
	data(){
		return{
			cleans:[],
			cleanDetails:{}
		}
	},
	methods:{
		async display(e){
			let ev = e || event;
			let itarget =  ev.target || ev.srcElement;
			if (itarget.stoppropagation) {
					itarget.stoppropagation();
			}
			else{
					ev.cancelBubble = true; 
			}
			let clean_date = document.getElementsByClassName('clean-date');
			for (let cd = 0; cd < this.cleans.length; cd++) {
				clean_date[cd].id = this.cleans[cd].id;
				//console.log(this.cleans[cd].id);
			}

			if (itarget.className == 'clean-date' && clicks == 0) {
					await common.Axios('/getRecordByday','get',{'id':itarget.id}).then((res) => {
						this.cleanDetails = res.recordslist[0];
					});
					let all_cimgs = document.getElementsByClassName('dis-img');
						for (let cig = 0; cig < all_cimgs.length; cig++) {
							all_cimgs[cig].style.display = 'none';
						}

						let re_cimgs = itarget.parentNode.getElementsByClassName('dis-img');
						for (let del = 0 ; del < re_cimgs.length; del++) {
							re_cimgs[del].style.display = 'block';
						}
						clicks = 1;
				}
				else{
					let re_cimgs =itarget.parentNode.getElementsByClassName('dis-img');
					for (let del = 0 ; del < re_cimgs.length; del++) {
						re_cimgs[del].style.display = 'none';
					}
					clicks = 0;
				}
		}
	},
	mounted(){
		let id = JSON.parse(window.sessionStorage.getItem('id'));
		common.Axios('/recordlist','get',{'id':id}).then((res) => {
					// console.log(res);
					this.cleans = res.recordlist;
				});

	}
}
</script>

<style scoped="scoped">
.clean-wrapper{
	width: 100%;
}
.clean-date{
	height:32px;
	line-height: 32px;
	border-radius: 10px;
	background-color: #ccc;
	padding-left: 10px;
	margin-top: 10px;
	cursor: pointer;
	-webkit-tap-highlight-color:rgba(0,0,0,0);
}
#clean-button img {
    width: 100%;
    display: block;
}	
</style>