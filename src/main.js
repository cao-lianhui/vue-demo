//入口文件
//console.log("ok");
import Vue from 'vue'
//导入路由的包
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)

//导入格式化时间插件
import moment from 'moment'
//定义全局的过滤器
Vue.filter('dateFormat', function(dataStr, pattern="YYYY-MM-DD HH:mm:ss"){
	moment(dataStr).format(pattern);
})

//导入vue-resource
import VueResource from 'vue-resource'
//安装vue-resource
Vue.use(VueResource)

//全局配置请求路径
Vue.http.options.root = 'http://vue.studyit.io';
//设置全局post时候表单数据格式的组织形式
Vue.http.options.emulateJSON = true;


//导入mui的样式
import './lib/mui/css/mui.min.css'
//导入mui的字体样式
import './lib/mui/css/icons-extra.css'

//按需导入mint-ui的组件
import {Header, Swipe, SwipeItem, Button} from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)

//导图router.js模块
import router from './router.js'

//导入app组件
import app from './app.vue'


var vm = new Vue({
	el: '#app',
	render: c => c(app),
	router
})