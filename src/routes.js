//import HelloWorld from './components/HelloWorld'
const Merchant = () => import('./components/Merchant/Merchant.vue');
const Sunkitchen = () => import('./components/Sunkitchen/Sunkitchen.vue');
const Foodorigin = () => import('./components/Foodorigin/Foodorigin.vue');
const Supervisor = () => import('./components/Supervisor/Supervisor.vue');
const Evaluate = () => import('./components/Evaluate/Evaluate.vue');
const Complain = () => import('./components/Complain/Complain.vue');
const Law = () => import('./components/Law/Law.vue');
const Environment = () => import('./components/Environment/Environment.vue');
const Promises = () => import('./components/Promise/Promises.vue');
const ZH = () => import('./components/8Z8H/ZH.vue');
const Star = () => import('./components/Star/star.vue');
const Cleanup = () => import('./components/Cleanup/Cleanup.vue');

export default[
	{path:"/",name:'Merchant',component:Merchant,meta: {
      keepAlive: false // 需要被缓存
    }},
	{path:'/Merchant/Sunkitchen',name:'sun',component:Sunkitchen},
	{path:'/Merchant/Foodorigin',component:Foodorigin},
	{path:'/Merchant/Supervisor',component:Supervisor},
	{path:'/Merchant/Evaluate',component:Evaluate},
	{path:'/Merchant/Complain',component:Complain},
	{path:'/Merchant/Law',component:Law},
	{path:'/Merchant/Environment',component:Environment},
	{path:'/Merchant/Promises',component:Promises},
	{path:'/Merchant/ZH',component:ZH},
	{path:'/Merchant/Cleanup',component:Cleanup}
]