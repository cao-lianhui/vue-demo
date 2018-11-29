//入口文件
//console.log("ok");
import Vue from 'vue'

//导入mui的样式
import './lib/mui/css/mui.min.css'
//按需导入mint-ui的组件
import {Header} from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header)
//导入app组件
import app from './app.vue'


var vm = new Vue({
	el: '#app',
	render: c => c(app)
})