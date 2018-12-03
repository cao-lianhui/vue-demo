<template>
    <div class="cmt-container">
	    <h3>发表评论</h3>
		<hr>
		<textarea placeholder="请输入要BB的内容(最多吐槽120字)" maxlength="120"></textarea>
		
		<mt-button type="primary" size="large">发表评论</mt-button>
		
		<div class="cmt-list">
		     <div class="cmt-item">
			      <div class="cmt-title">
				     第1楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2018-12-3 12:12:12
				  </div>
				  <div class="cmt-body">
				     哈哈哈哈哈 呵呵
				  </div>
			 </div>
		</div>
		
		<mt-button type="danger" size="large" plain>加载更多</mt-button>
	</div>
</template>

<script>
import{Toast} from 'mint-ui';

export default{
    data(){
	    return{
		  pageIndex:1,//默认展示第一页数据
		  comments:[]
		}
	},
	created(){
	    this.getComments();
	},
	methods:{
	    getComments(){
		   //this.$http.get('api/getComments/:artid?pageindex=1');
		   this.$http.get("api/getComments/"+this.id+"pageIndex"+this.pageIndex).then(result => {
		        if(result.body.status){
				    this.comments = result.body.message;
				}else{
				    Toast('获取评论失败');
				}
		   })
		}
	},
	props:["id"]
}

</script>

<style lang="less" scoped>

.cmt-container{
    h3{
	   font-size:18px;
	}
	textarea{
	   font-size:14px;
	   height:85px;
	   margin:0;
	}
	.cmt-list{
	   margin:5px 0;
	   .cmt-item{
	        font-size:13px;
			.cmt-title{
			    line-height:30px;
				background-color:#ccc;
			}
			.cmt-body{
			    line-height:35px;
				text-indent:2em;
			}
	   }
	}
}

</style>