<template>
    <div>
	    <!--顶部滑动区域-->
	    <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							推荐
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							热点
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							北京
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
					</div>
				</div>

			</div>
	</div>
</template>

<script>
//导入mui的js文件
import mui from '../../lib/mui/js/mui.min.js'

export default{
    data(){
	   return {};
	},
	mounted(){//当组件中的dom结构被渲染好并放到页面中后，会执行这个钩子函数
	    //初始化滑动控件
	    mui('.mui-scroll-warpper').scroll({
	       deceleration:0.0005
        });
	},
	methods:{}
}
</script>

<style lang="less" scoped>

*{
   touch-action:pan-y;
}

</style>