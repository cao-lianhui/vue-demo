<template>
    <div class="cmt-container">
	    <h3>发表评论</h3>
		<hr>
		<textarea placeholder="请输入要BB的内容(最多吐槽120字)" maxlength="120"></textarea>
		
		<mt-button type="primary" size="large" v-model="msg" @click="postComments">发表评论</mt-button>
		
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
		  comments:[],
		  msg:''
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
		},
		postComments(){
		   //校验内容是否为空
		   if(this.msg.trim().length === 0){
		       return Toast("评论内容不能为空");
		   }
		   //发表评论
		   //参数1：请求的url地址
		   //参数2：提交给服务器的数据对象(content:this.msg)
		   //参数3：定义提交时候，表单中数据的格式{emulateJSON:true}
		   this.$http.post('api/postcomment/' + this.$route.params.id,{content:this.msg.trim()}).then(function(result){
		       if(result.body.status===0){
			       //1.拼接出一个评论对象
				   var cmt = {
				       user_name: "匿名对象",
					   add_time: Date.now(),
					   content: this.msg.trim()
				   };
				   this.comments.unshift(cmt);
				   this.msg = "";
			   }
		   });
		   
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