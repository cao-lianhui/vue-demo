<template>
    <div>
	    
		<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo1">
						<img class="mui-media-object mui-pull-left" src="../../image/th3.jpg">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p class='mui-ellipsis'>
							    <span>发表时间：2012-12-12 12:12:12</span>
								<span>点击：0次</span>
							</p>
						</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo2">
						<img class="mui-media-object mui-pull-left" src="../../image/th3.jpg">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p class='mui-ellipsis'>
							    <span>发表时间：2012-12-12 12:12:12</span>
								<span>点击：0次</span>
							</p>
						</div>
					</router-link>
				</li>
				<li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo3">
						<img class="mui-media-object mui-pull-left" src="../../image/th3.jpg">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p class='mui-ellipsis'>
							    <span>发表时间：2012-12-12 12:12:12</span>
								<span>点击：0次</span>
							</p>
						</div>
					</router-link>
				</li>

			</ul>
		
	</div>
</template>
<script>
import {Toast} from "mint-ui"

export default{
    data(){
	   return {
	      newslist: []
	   }
	},
	created(){
	   this.getNewsList();
	},
	methods:{
	   getNewsList(){//获取新闻列表
	       this.$http.get('api/getnewsList').then(result => {
		       if(result.body.status === 0){
			        this.newslist = result.body.message;
			   }else{
			       Toast('获取新闻列表失败');
			   }
		   });
	   }
	}
}

</script>
<style lang="less" scoped>

.mui-table-view{
    li{
	   h1{
	      font-size:14px;
	   }
	   .mui-ellipsis{
	      font-size:12px;
		  color:#226aff;
		  display:flex;
		  justify-content:space-between;
	   }
	}
}

</style>