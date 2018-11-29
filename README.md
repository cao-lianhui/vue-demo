#这是一个vue-demo项目实战

##仅仅只是试下水

##[开源协议之间的区别？](https://www.zhihu.com/question/19568896) 

###用传统方式(命令行)把修改后的代码传到github上

1.git add

2.git commit -m "提交信息"

3.git push

##制作首页App组件
1.完成Header区域，使用的是Mint-UI中的Header组件
2.制作底部的Tabbar区域，使用的是MUI的Tabbar.html
  +在制作购物车小图标时操作会相对多些，
  +先把扩展图标的css样式，拷贝到项目中
  +拷贝扩展字体库ttf文件，到项目中
  +为购物车小图标，添加如下样式"mui-icon mui-icon-extra mui-icon-extra-cart"
3.要在中间区域放置一个router-view来展示路由匹配到的组件

##改造tabbar的a标签为router-link

##设置路由高亮

linkActiveClass:'mui-active'//覆盖默认路由高亮的类，在app.vue组件里设置该类

##点击tabbar中的路由链接，展示对应的路由组件

routes: [
	  {path:'/home', component:homeContainer},
      {path:'/member', component:memberContainer},
	  {path:'/shopcar', component:shopCarContainer},
	  {path:'/search', component:searchContainer}
	],

##制作轮播图首页

导入mui的轮播图组件:

import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

##加载首页轮播数据
1.获取数据，使用vue-resource
2.使用vue-resource的this.$http.get获取数据
3.获取到的数据要保存到homeContainer组件的data身上
4.使用v-for循环渲染每个item项