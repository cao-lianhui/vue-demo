<template>
    <div>
	    <!--这是轮播图区域-->
		<mt-swipe :auto="4000">
           <mt-swipe-item>
		       <img src="../../image/th2.jpg" alt="">
		   </mt-swipe-item>
           <mt-swipe-item>
		       <img src="../../image/th3.jpg" alt="">
		   </mt-swipe-item>
           <mt-swipe-item>
		       <img src="../../image/th4.jpg" alt="">
		   </mt-swipe-item>
		   <mt-swipe-item>
		       <img src="../../image/th5.jpg" alt="">
		   </mt-swipe-item>
        </mt-swipe>
	    <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					    <router-link to="/home/newslist">
		                    <img src="../../image/banner1.jpg" alt="">
		                    <div class="mui-media-body">新闻资讯</div>
					    </router-link>
					</li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
					    <router-link to="/home/photoshare">
		                    <img src="../../image/banner2.jpg" alt=""></span>
		                    <div class="mui-media-body">图片分享</div>
						</router-link>
					</li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../image/banner3.jpg" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../image/banner4.jpg" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../image/banner5.jpg" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../image/banner6.jpg" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		</ul> 
	</div>
</template>

<script>
//导入mint-ui弹框
import {Toast} from 'mint-ui'
    export default{
	    date(){
		   return {
		       bannerList:[]//保存轮播图的数组
		   }
		},
		created(){
		   this.getBanner();
		},
		methods:{
		   getBanner(){
		      this.$http.get('api/getlunbo').then(result => {
			      console.log(result.body);
				  if(result.body.status === 0){
				      //成功了
					  this.bannerList = result.body.message;
				  }else{
				      //失败了
					  Toast('加载轮播图失败');
				  }
			  })
		   }
		}
	}
</script>

<style lang="less" scoped>
.mint-swipe{
    height:200px;
	.mint-swipe-item{
	   &:nth-child(1){
	      background:red;
	   }
	   &:nth-child(2){
	      background:yellow;
	   }
	   &:nth-child(3){
	      background:blue;
	   }
	   img{
	      width:100%;
		  height:100%;
	   }
	}
}
.mui-grid-view.mui-grid-9{
    background:white;
	border:none;
	img{
	   width:60px;
	   height:60px;
	}
	
	.mui-media-body{
	   font-size:13px;
	}
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border:none;
}
</style>