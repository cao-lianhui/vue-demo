import VueRouter from 'vue-router'

//导入对应的路由组件
import homeContainer from './components/tabbar/homeContainer.vue'
import memberContainer from './components/tabbar/memberContainer.vue'
import shopCarContainer from './components/tabbar/shopCarContainer.vue'
import searchContainer from './components/tabbar/searchContainer.vue'
var router = new VueRouter({
	routes: [
	  {path:'/',redirect: '/home'},
	  {path:'/home', component:homeContainer},
      {path:'/member', component:memberContainer},
	  {path:'/shopcar', component:shopCarContainer},
	  {path:'/search', component:searchContainer}
	],
	linkActiveClass:'mui-active'//覆盖默认路由高亮的类，
})

//把路由对象导出
export default router