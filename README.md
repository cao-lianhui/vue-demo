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

##改造九宫格样式

##改造新闻资讯路由链接

##新闻资讯 页面 制作
  
  1.绘制界面，使用MUI中的media-list.html
  
  2.使用vue-resource获取数据
  
  3.渲染真实数据
  
##实现新闻列表点击跳转到新闻详情

  1.把列表中的每一项改造为router-link，在跳转的时候应该提供唯一的id标识符
  
  2.创建新闻详情的组件页面 newsInfo.vue
  
  3.在路由模块中，将新闻详情的路由地址和组件页面对应起来

##实现新闻详情和数据渲染

##单独封装一个comment.vue评论子组件

  1.先创建一个单独的comment.vue组件模板
  
  2.在需要使用comment组件的页面中，先手动导入comment组件:import comment from './comment.vue'
  
  3.在父组件中，使用'components'属性，将刚才导入的comment组件，注册为自己的子组件
  
  4.将注册子组件时候的注册名称以标签形式在页面中引用即可
  
##获取所有的评论数据显示到页面中

##实现点击加载更多评论的功能

  1.为『加载更多』按钮，绑定点击事件，在事件中，请求下一页数据
  
  2.点击『加载更多』，让pageIndex++，然后重新调用this.getComments()方法重新获取最新一页的数据
  
  3.为了防止新数据覆盖老数据的情况，在点击『加载更多』的时候，每当获取新数据，应该让老数据
  
  调用数组的concat方法，拼接上新数组