<template>
    <div class="newsinfo-container">
	    <h3 class="title">新闻标题1</h3>
		<p class="subtitle">
		   <span>发表时间:2012-12-12 12:12:12</span>
		   <span>点击:0次</span>
		</p>
		
		<hr>
		
		<div class="content">
		   去年6月份， ES2015正式发布（也就是ES6，ES6是它的乳名），其中Promise被列为正式规范。
		   作为ES6中最重要的特性之一，我们有必要掌握并理解透彻。本文将由浅到深，讲解Promise的基本概念与使用方法。
           ES6 Promise 先拉出来遛遛
           复杂的概念先不讲，我们先简单粗暴地把Promise用一下，有个直观感受。那么第一个问题来了，Promise是什么玩意呢？
           是一个类？对象？数组？函数？
           别猜了，直接打印出来看看吧，console.dir(Promise)，就这么简单粗暴。
           这么一看就明白了，Promise是一个构造函数，自己身上有all、reject、resolve这几个眼熟的方法，
		   原型上有then、catch等同样很眼熟的方法。这么说用Promise new出来的对象肯定就有then、catch方法喽，没错。
           那就new一个玩玩吧。
		</div>
		
		<!--评论区域-->
		<comment-box :id="this.id"></comment-box>
	</div>
</template>

<script>
import {Toast} from "mint-ui"

//导入评论子组件
import comment from '../subcomponents/comment.vue'

export default{
    data(){
	    return {
		    //id:this.$route.params.id //将url地址中传递过来的id值，挂载到data上，方便以后调用
		    id:1,
			newsinfo:{}
		}
	},
	created(){
	    this.getNewsInfo();
	},
	methods:{
	    getNewsInfo(){
		    this.$http.get('api/getnew' + this.id).then(result => {
			    if(result.body.status === 0){
				   this.newsinfo = result.body.message[0];
				}else{
				   Toast('获取新闻失败！');
				}
			})
		}
	},
	components:{
	    //用来注册子组件的节点
		'comment-box':comment
	}
}

</script>

<style lang="less" scoped>

.newsinfo-container{
    padding:0 4px;
    .title{
	    font-size:16px;
		text-align:center;
		margin:15px 0;
		color:red;
	}
	.subtitle{
	    font-size:13px;
		color:#226aff;
		display:flex;
		justify-content:space-between;
	}
	.content{}
}

</style>