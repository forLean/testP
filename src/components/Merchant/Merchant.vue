<template>
	<div class="wrapper">
		<div class="header">商户信息</div>
		<img src="../Merchant/newbg.jpg" class="bgimg">
		<!-- <img :src="binfo.business_logo" class="mlogo" v-if='this.binfo.business_logo'> -->
		<div class="eval-head">商家星级<star :size="24" :score="Number(binfo.integrity_star)"></star></div>
		<ul class="icons">
			<li>
				<router-link to="/Merchant/Sunkitchen" id='sun'>
				<img src="../Merchant/sun.png">
				<div>阳光厨房</div>
				</router-link>
			</li>
			<li>
				<a href="http://weixin.gycode.com/index.php?g=Wap&m=Index&a=lists&classid=112241&token=jtzbyc1575944937&wecha_id=0">
          <img src="../Merchant/environment.png">
          <div>餐厅环境</div>
				</a>
			</li>
			<li>
				<a href="http://weixin.gycode.com/index.php?g=Wap&m=Index&a=lists&classid=112242&token=jtzbyc1575944937&wecha_id=0">
				<img src="../Merchant/food.png">
				<div>食材溯源</div>
				</a>
			</li>
			<li>
				<a href="http://weixin.gycode.com/index.php?g=Wap&m=Index&a=lists&classid=112243&token=jtzbyc1575944937&wecha_id=0">
				<img src="../Merchant/clean.png">
				<div>清洁记录</div>
				</a>
			</li>
      <li>
        <a href="http://weixin.gycode.com/index.php?g=Wap&m=Index&a=lists&classid=112244&token=jtzbyc1575944937&wecha_id=0">
          <img src="../Merchant/zzxx.png">
          <div>证照信息</div>
				</a>
			</li>
			<li>
				<router-link to="/Merchant/ZH">
				<img src="../Merchant/zh.png">
				<div>8Z8H</div>
				</router-link>
			</li>
			<li>
				<a href="http://weixin.gycode.com/index.php?g=Wap&m=Index&a=lists&classid=112246&token=jtzbyc1575944937&wecha_id=0">
				<img src="../Merchant/sup.png">
				<div>监管人员</div>
				</a>
			</li>
      <li>
				<a href="http://weixin.gycode.com/index.php?g=Wap&m=Index&a=lists&classid=112247&token=jtzbyc1575944937&wecha_id=0">
          <img src="../Merchant/cyry.png">
          <div>从业人员</div>
				</a>
			</li>
      <li>
				<a href="http://weixin.gycode.com/index.php?g=Wap&m=Index&a=lists&classid=112248&token=jtzbyc1575944937&wecha_id=0">
          <img src="../Merchant/fxgk.png">
          <div>风险管控信息</div>
				</a>
			</li>
		</ul>
		<div class="line"></div>
		<table border="1">
			<tr>
				<td class="ttd">统一社会信用代码/注册号</td>
				<td>{{binfo.number}}</td>
			</tr>
			<tr>
				<td class="ttd">名称</td>
				<td>{{binfo.name}}</td>
			</tr>
			<tr>
				<td class="ttd">类型</td>
				<td>{{binfo.type}}</td>
			</tr>
			<tr>
				<td class="ttd">地址</td>
				<td>{{binfo.residence}}</td>
			</tr>
			<tr>
				<td class="ttd">经营者</td>
				<td>{{binfo.operator_or_investor}}</td>
			</tr>
			<tr>
				<td class="ttd">组成形式</td>
				<td>{{binfo.composition_form}}</td>
			</tr>
			<tr>
				<td class="ttd">注册日期</td>
				<td>{{binfo.registration_base_date}}</td>
			</tr>
			<tr>
				<td class="ttd">经营范围</td>
				<td>{{binfo.scope_of_business}}</td>
			</tr>
			<tr>
				<td class="ttd">投诉举报公示</td>
				<td>{{binfo.report_number}}</td>
			</tr>
			<tr>
				<td class="ttd">荣誉信息</td>
				<td>{{binfo.honor_information}}</td>
			</tr>
			<tr>
				<td class="ttd">失信信息</td>
				<td>{{binfo.dishonesty_information}}</td>
			</tr>
		</table>
		<div class="eval-head">商家评价</div>
		<ul class="eval-text" v-show='evaluates?true:false'>
			<li v-for='evalute in evaluates' :key="evalute.pingjia">
				<img :src="binfo.business_logo">{{evalute.pingjia}}
			</li>
		</ul>
		<footer>
			<div>易领网络科技提供技术支持</div>
		</footer>
	</div>
</template>

<script>
import common from '../../comjs/common.js';
import { Message } from 'element-ui';
import { Loading } from 'element-ui';
import star from '../../components/Star/star';

export default{
	name:'merchant',
	data(){
		return{
			msg:'hello',
			binfo:{},
			evaluates:[],
			head:[],
			id:''
		}
	},
	components:{
		star
	},
	 methods: {
      checkHeads:function(){
      	let sun = document.getElementById('sun')
      	if (this.binfo.name !== '准格尔旗石寨人家餐饮有限公司' || this.binfo.name !== '准格尔旗额尔敦传统涮火锅店' || this.binfo.name !== '准格尔旗星东饭店'){
      		if (this.head[0].kitchen0) {
      			sun.href = this.head[0].kitchen0;
      			return;
      		}
      		sun.href = '#';
      	}
      }
    },
	mounted(){
		this.id = common.getMerchantId();
	  window.sessionStorage.setItem('id',JSON.stringify(this.id));
		common.Axios('/getBusinessInfo','get',{id:this.id}).then((res) => {
      this.binfo = res.businessInfo;
      this.evaluates = res.pingjialist;
    });
		common.Axios('/getSunshineKitchen','get',{id:this.id}).then((res) => {
      this.head = res.kitchenlist;
      this.checkHeads();
    })
	}
}
</script>

<style scoaped>
.wrapper{
	position: absolute;
	width: 100%;
	background-color: #ffff;
}
.bgimg{
  float: left;
	width: 100%;
  height: 200px;
  overflow: hidden;
}
.icons{
	display: flex;
	flex-wrap:wrap;
  width: 100%;
  height: 180px;
	margin:0px auto 10px auto;
  padding-top: 5px;
}
.icons li{
  flex: 0 0 33.3%;
  float: left;
	text-align: center;
    width: 17%;
    height: 60px;
    font-size: 12px;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
}
.icons li a{
	width: 85%;
}
.icons img{
	display: inline-block;
	width: 30px;
	height: 30px;
}
.mname{
	position: relative;
	font-size: 18px;
	width: 90%;
	height: 20px;
	line-height: 20px;
	margin: 10px auto 6px auto;
	text-align: center;
}
/*.mlogo{
	width: 18px;
	height: 18px;
	vertical-align: top;
	margin-right: 10px;
	
}*/
.mlogo{
	width: 100px;
    height: 100px;
    position: absolute;
    display: block;
    top: 130px;
    left: 50%;
    margin-left: -50px;
}
.aname{
	position: relative;
	width: 54%;
	height: 20px;
	line-height: 20px;
	font-size: 18px;
	margin: 0 auto;
	text-align: center;
	color: red;
	font-weight: 800;
}
.ttd{
	width:30%;
	height: 40px;
	text-align: center;
	padding: 0px;
}
.eval-head{
	font-size: 16px;
	font-weight: bold;
	padding:9px;
	border-bottom: 6px solid rgba(175,178,180,0.4);
}
.eval-text li{
	padding:12px;
	border-bottom: 1px solid #ccc;
	font-size: 14px;
}
.eval-text img{
	width: 18px;
	height: 18px;
	vertical-align: middle;
	margin-right: 15px;
	border-radius: 50%;
}
</style>