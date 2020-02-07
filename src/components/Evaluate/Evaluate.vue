<template>
	<div class="eva-wrapper">
		<div class="header">信用评价</div>
		<div class="eva-name">
			<label class="eva-label">姓名</label>
			<el-input v-model="data.name" placeholder="请输入内容"></el-input>
		</div>
		<div class="eva-name">
			<label class="eva-label">电话号码</label>
			<el-input v-model="data.phone" placeholder="请输入内容"></el-input>
		</div>
		<div class="eva-name">
			<label class="eva-label">餐厅环境</label>
			<el-radio class="radio" v-model="data.renvironment" label="满意">满意</el-radio>
			<el-radio class="radio" v-model="data.renvironment" label="一般">一般</el-radio>
  			<el-radio class="radio" v-model="data.renvironment" label="不满意">不满意</el-radio>
  		</div>
		<div class="eva-name">
			<label class="eva-label">厨房环境</label>
			<el-radio class="radio" v-model="data.cenvironment" label="满意">满意</el-radio>
			<el-radio class="radio" v-model="data.cenvironment" label="一般">一般</el-radio>
  			<el-radio class="radio" v-model="data.cenvironment" label="不满意">不满意</el-radio>
		</div>
		<div class="eva-name">
			<label class="eva-label">菜品质量</label>
			<el-radio class="radio" v-model="data.product_quality" label="满意">满意</el-radio>
			<el-radio class="radio" v-model="data.product_quality" label="一般">一般</el-radio>
  			<el-radio class="radio" v-model="data.product_quality" label="不满意">不满意</el-radio>
		</div>
		<div class="eva-name">
			<label class="eva-label">服务质量</label>
			<el-radio class="radio" v-model="data.serve_quality" label="满意">满意</el-radio>
			<el-radio class="radio" v-model="data.serve_quality" label="一般">一般</el-radio>
  			<el-radio class="radio" v-model="data.serve_quality" label="不满意">不满意</el-radio>
		</div>
		<div class="eva-name">
			<label class="eva-label">评价内容</label>
			<el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="data.pingjia">
			</el-input>
		</div>
		<el-button type='primary'  @click=checkInfo()>提交</el-button>
		<footer>
			<div>易领网络科技提供技术支持</div>
		</footer>

	</div>
</template>

<script>
import common from '../../comjs/common.js'
export default{
	name:'evaluate',
	data(){
		return{
			data:{
				merchant_id:'',
				name:'',
				phone:'',
				kanfa:'满意',
				courtesy_Hospitality:'满意',
				civilized_Integrity:'满意',
				beautify_Storefront:'满意',
				pingjia:''
			}
		}
	},
	methods:{
		async checkInfo(){
			let reg_num= /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
			let number = reg_num.test(this.data.phone);

				if (!this.data.name) {
					this.open('姓名不能为空！');
				}
				else if (!number) {
					this.open('请输入正确的电话号码！');
				}
				else if (!this.data.pingjia) {
					this.open('评价内容不能为空！');
				}

				if (this.data.name && number && this.data.pingjia) {
					this.data.merchant_id = JSON.parse(window.sessionStorage.getItem('id'));
					
					//let ID = await common.getMerchantId();
				 	
				 	await common.Axios('/insertPingjia','post',{'pingjia':this.data}).then((res) => {
				 		alert(res.message);
				 	});

				 	// this.$router.push({name:'Merchant'});
            		location.href = 'http://mengkaixinghe.com/merchantInfo/#/?id='+this.data.merchant_id;
				}
		},
		open:function(text) {
	        this.$alert(text, '提示', {
	          confirmButtonText: '确定',
	          callback: action => {
	            //location.reload();
	            location.href = location.href;
	          }
	        });
      	}
	},
	mounted(){

	}
}
</script>

<style scoaped>
.eva-wrapper{
	width: 100%;
}
.el-input,.el-textarea{
	width: 70%!important;
}
.eva-name{
	height: 70px;
	line-height: 70px;
	border-bottom:1px solid #ccc;
}
.eva-label{
	display: inline-block;
	width: 20%;
	font-size: 14px;
	margin-left: 10px;
}
.el-textarea{
	margin-bottom: 8px;
}
.el-button--primary{
	display: block!important;
	margin:15px auto!important;
	font-size: 16px!important;
	width: 40%;
}
</style>