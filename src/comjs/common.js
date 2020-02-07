import axios from 'axios'
import { Loading } from 'element-ui';

// const baseurl = 'http://62.234.91.158:8080/businessJK';
const baseurl = 'http://mengkaixinghe.com/businessJK';

const common = {
   getMerchantId:function(){
   		let url = location.href;
   		let merchant_id = url.split('=')[1];
   		//console.log(merchant_id);
   		return merchant_id;
   },
   Axios:function(url,method,params){

   		if (method == 'get') {
		   	 return new Promise((resolve,reject) => {
		   	 	axios[method](baseurl + url,{
		   	 		params:params
		   	 	}).then((res) => {
		   	 		// console.log(res.status);
		   	 		resolve(res.data);
		   	 	}).catch(err => {
		   	 		reject(err)
		   	 	})
		   	 })
		}
		else{
			return new Promise((resolve,reject) => {
			    axios[method](baseurl + url,params)
			    .then(res => {
			      resolve(res.data);
			    })
			    .catch(err => {
			      reject(err);
			    })
			  })
		}
   },
   loadingOpen:function(){
        let loadingInstance = Loading.service({fullscreen: true,text:'拼命加载中'});    
   },
   loadingClose:function(){
   		let loadingInstance = Loading.service({fullscreen: true,text:'拼命加载中'});
   		loadingInstance.close();
   },
  
};
export default common;