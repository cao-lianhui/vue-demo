import VueRouter from 'vue-router'

//导入对应的路由组件
import homeContainer from './components/tabbar/homeContainer.vue'
import memberContainer from './components/tabbar/memberContainer.vue'
import shopCarContainer from './components/tabbar/shopCarContainer.vue'
import searchContainer from './components/tabbar/searchContainer.vue'
import newsList from './components/news/newsList.vue'
import newsInfo1 from './components/news/newsInfo1.vue'
import newsInfo2 from './components/news/newsInfo2.vue'
import newsInfo3 from './components/news/newsInfo3.vue'

var router = new VueRouter({
	routes: [
	  {path:'/',redirect: '/home'},
	  {path:'/home', component:homeContainer},
      {path:'/member', component:memberContainer},
	  {path:'/shopcar', component:shopCarContainer},
	  {path:'/search', component:searchContainer},
	  {path:'/home/newslist', component:newsList},
	  {path:'/home/newsinfo1',component:newsInfo1},
	  {path:'/home/newsinfo2',component:newsInfo2},
	  {path:'/home/newsinfo3',component:newsInfo3}
	],
	linkActiveClass:'mui-active'//覆盖默认路由高亮的类，
})

//把路由对象导出
export default router