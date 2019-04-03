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

  +在制作购物车小图标时操作会相对多些
  
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

##加载首页轮播数据HEAD

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

## 调用数组的concat方法，拼接上新数组

1.获取数据，使用vue-resource

##发表评论

  1.把文本框做双向数据绑定
  
  2.为发表按钮绑定一个事件
  
  3.校验评论内容是否为空，如果为空，则Toast提示用户评论内容不能为空
  
  4.通过Vue-resource发送一个请求，把评论内容提交给服务器
  
  5.当发表评论ok后重新刷新列表，以查看最新的评论
  
     如果调用getComments方法重新刷新评论列表，可能只能得到最后一页的评论，前几页的评论获取不到
	 
	 换一种思路：当评论成功后，在客户端，手动拼接出一个最新的评论对象，然后调用数组的unshift方法
	 
	 ，把最新的评论，追加到data中comments开头，这样就能实现刷新评论列表的需求
	 
##改造『图片分享』按钮为路由链接并显示对应的组件页面

##绘制图片列表组件页面结构并美化样式

  1.制作顶部的滑动条
  
  2.制作底部的图片列表
  
##制作顶部滑动条的坑

  1.需要借助于MUI中的tab-top-webview-main.html
  
  2.需要把id类名为slider的div中的类名mui-fullscreen去掉
  
  3.滑动条无法正常的触发滑动，通过检查官方文档，发现这是js组件，需要被初始化以下
    
	1）导入mui.js
	
	2）调用官方提供的方式去初始化
	
	mui('.mui-scroll-warpper').scroll({
	    deceleration:0.0005//flick减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
	});
	
  4.在初始化滑动条的时候，导入了mui.js，但控制台报错:mui.min.js:946 Uncaught TypeError: 
  
  'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions 
  
  or the arguments objects for calls to them
  
  可能是mui.js中用到了'caller', 'callee', and 'arguments'东西,但是webpack打包好的bundle.js中，
  
  默认是启用严格模式的，所以，这两者冲突了
  
  解决方案：
 
         1.把mui.js中的非严格模式的代码改掉，但不现实;
		    
         2.把webpack打包时候的严格模式禁用掉;
			
         禁用方式:安装babel-plugin-transform-remove-strict-mode插件
			
         npm i babel-plugin-transform-remove-strict-mode -S
					 
         在.babelrc文件中的plugins属性里添加transform-remove-strict-mode
					 
         plugins:["transform-remove-strict-mode"]
					 
  5.刚进入『图片分享』页面的时候，滑动条无法正常工作，发现，如果要初始化滑动条，必须要等DOM元素加载完毕
  
  ，所以，要把初始化滑动条代码放到mounted生命周期函数中
  
  6.当滑动条调试ok后，发现，tabbar无法正常切换了，这时候需要进入app.vue把tabbar的每个切换按钮的
  
  样式："mui-tab-item"重新更改下名字
