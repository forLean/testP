<template>
	<div class="com-wrapper">
		<div class="header">投诉举报</div>
		<div class="com-name">
			<label class="com-label">姓名</label>
			<el-input v-model="data.name" placeholder="请输入内容"></el-input>
		</div>
		<div class="com-name">
			<label class="com-label">电话号码</label>
			<el-input v-model="data.phone" placeholder="请输入内容"></el-input>
		</div>
		<div class="com-long">
			<div>是否证照齐全，并在经营场所内醒目位置悬挂</div>
			<div>
				<el-radio class="radio" v-model="data.license_Complete" label="是">是</el-radio>
  				<el-radio class="radio" v-model="data.license_Complete" label="否">否</el-radio>
  		    </div>
  		</div>
		<div class="com-long">
			<div>是否按照核准的名称、经营范围从事经营活动</div>
			<div>
				<el-radio class="radio" v-model="data.business_Scope" label="是">是</el-radio>
  				<el-radio class="radio" v-model="data.business_Scope" label="否">否</el-radio>
  		    </div>
		</div>
		<div class="com-name">
			<label class="com-label">投诉内容</label>
			<el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="data.other">
			</el-input>
		</div>
		<div class="com-name">
			<label class="com-label" style="float: left;">上传佐证</label>
			<el-upload class="upload-demo" action="" :on-change='getFile' :limit="1" :auto-upload="false">
				  <button class="e-button">点击上传</button><span class="e-text">只能上传jpg/png格式</span>	 
			</el-upload>
		</div>
		<el-button type="primary" @click=checkComplain()>提交</el-button>
		<footer>
			<div>易领网络科技提供技术支持</div>
		</footer>
	</div>
</template>

<script>
import common from '../../comjs/common.js'

export default{
	name:'complain',
	data(){
		return{
			data:{
				merchant_id:'',
				name:'',
				phone:'',
				license_Complete:'是',
				business_Scope:'是',
				other:'',
				image_path:''
			},
			file:''
		}
	},
	methods:{
	  async checkComplain(){
	  			let reg_num= /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
				let number = reg_num.test(this.data.phone);

				if (!this.data.name) {
					this.open('姓名不能为空！');
				}
				else if (!number) {
					this.open('请输入正确的电话号码！');
				}
				else if (!this.data.other) {
					this.open('投诉内容不能为空！');
				}

				if (this.data.name && number && this.data.other) {
					//let ID = await common.getMerchantId();
					this.data.merchant_id = JSON.parse(window.sessionStorage.getItem('id'));


            		await common.Axios('/insertTousu','post',{'tousu':this.data}).then((res) => {
				 		alert(res.message);
				 	});

            		//this.$router.push({name:'Merchant'});
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
      	},
      	getFile:function(file,filelist){
      		//console.log(file);
      		this.file = file.raw;
      		let form_data = new FormData();
      		form_data.append('file',this.file);
      		common.Axios('/uploadFile','post',form_data).then((res => {
      			// console.log(res);
      			this.data.image_path = res.filePath;
      		}))
      	}
      	
	},
	mounted(){
	}
}
</script>

<style scoaped>
.com-wrapper{
	width: 100%;
}
.el-input,.el-textarea{
	width: 70%!important;
}
.com-name{
	height: 70px;
	line-height: 70px;
	border-bottom:1px solid #ccc;
}
.com-label{
	display: inline-block;
	width: 20%;
	font-size: 14px;
	margin-left: 10px;
}
.el-textarea{
	margin-bottom: 8px;
}
.com-long{
	height: 70px;
	line-height: 35px;
	padding-left: 10px;
	font-size: 14px;
	border-bottom:1px solid #ccc;
}	
.e-button{
	width: 85px;
	height: 30px;
	display: inline-block;
	border-radius: 4px;
	border:none;
	outline: none;
	background-color: #409EFF;
	color: #fff;
}
.e-text{
	margin-left: 5px;
	font-size: 14px;
}
.el-button{
	display: block!important;
	margin:15px auto!important;
	font-size: 16px!important;
	width: 40%;
}
.el-upload-list{
	display: none;
}
</style>