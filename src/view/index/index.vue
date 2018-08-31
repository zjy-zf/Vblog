<template>
	<div class="blog-main-container">
		<el-carousel height="450px" arrow="never">
	      <el-carousel-item v-for="item in bannerImages" :key="item.index">
	        <img :src="item.src" alt="">
	      </el-carousel-item>
	    </el-carousel>
	    <div class="blog-topnews">
	    	<h2>最新文章
				<!-- <span>
					<router-link to="/essays">韶华追忆</router-link>
					<router-link to="/technology">技术分享</router-link>
				</span> -->
	    	</h2>
	    	<div class="blogs" v-for="item in list" :key="item.id">
                <ul class="reveal-top">
                    <h3><a href="javascript:void(0)" :title="item.title" target="_blank">{{item.title}}</a></h3>
                    <p>{{item.abstract}}
                        
	
                        <a href="javascript:void(0)" target="_blank" style="color: #759b08;padding-left:5px;">[详情]</a>
                    </p>
                    <p class="autor">
                        <span class="lm f_l" :style="lmStyle"><a href="javascript:void(0)" style="color: #759b08">{{item.author}}</a></span>
                        <span class="dtime f_l" :style="dtimeStyle">{{item.createTime}}</span>
                        <!-- <input class="zan_cookie" type="hidden" value="2">
                        <input class="zan_newsid" type="hidden" value="469"> -->
                        <span class="label_bottom f_r" style="padding-left: 0;">
                            <a href="javascript:void(0)" onclick="return false;" class="yz_zan" style="">29</a>
                        </span>
                        <span class="viewnum f_r">浏览（621）</span>
                        <span class="pingl f_r">
                            <a href="javascript:void(0)">
				               <span id="sourceId::469" class="cy_cmt_count">评论（20 )</span>
                            </a>
                        </span>
                    </p>
            	</ul>
            </div>
            <div class="blogs-loading"><!-- 加载更多... --></div>
	    </div>
	</div>
</template>
<script>
	import { fetchList } from '@/api/article'
	import ScrollReveal from 'scrollreveal'
	import { Loading } from 'element-ui'
	export default {
		name: "index",
		data(){
			return {
				scrollReveal: ScrollReveal(),
				bannerImages: [
					{
						index: 1,
						src: require("@/assets/banner01.jpg")
					},
					{
						index: 2,
						src: require("@/assets/banner02.jpg")
					},
					{
						index: 3,
						src: require("@/assets/banner03.jpg")
					}
				],
				listQuery: {
					page: 1,
			        limit: 5
				},
				listLoading: false,
				lmStyle: {
					background: "url("+ require('@/assets/newsbg01.png') +") no-repeat center",
					backgroundPosition: "0px 4px"
				},
				dtimeStyle: {},
				list: [],
				total:0,
				loadStatus: false, //请求时不响应scroll事件标识
			}
		},
		created() {
			this.getList()
		},
		updated() {
			this.scrollReveal.reveal('.reveal-top', {
				     // 动画的时长
				    duration: 1000,
				    // 延迟时间
				    delay: 500,
				    // 动画开始的位置，'bottom', 'left', 'top', 'right'
				    origin: 'bottom',
				    // 回滚的时候是否再次触发动画
				    reset: true,
				    // 在移动端是否使用动画
				    mobile: false,
				    // 滚动的距离，单位可以用%，rem等
				    distance: '30px',
				    // 其他可用的动画效果
				    opacity: 0.001,
				    easing: 'linear',
				    scale: 0.9,
				});
			
		},
		mounted(){
			window.addEventListener('scroll', this.handleScroll)
		},
		destroyed(){
			window.removeEventListener('scroll', this.handleScroll)
		},
		methods: {
			getList(){
				this.loadStatus = false;
				fetchList(this.listQuery).then(response => {
					// this.listLoading = true
					let loadingInstance = Loading.service({
						target: ".blogs-loading"
					})
					setTimeout(() => {
						this.list = this.list.concat(response.data.items)
						this.total = this.total + response.data.total
						loadingInstance.close();
					}, 2 * 1000)
					this.loadStatus = true;
				})
			},
			handleScroll() {
				if(this.loadStatus){
					const clientHeight = document.documentElement.clientHeight
					const scrollHeight = document.documentElement.scrollHeight
					let offsetBottom = document.documentElement.scrollTop
					if (offsetBottom >= (scrollHeight - clientHeight - 10)) {
						this.listQuery.page += 1;
						this.getList();
					}
				}
				
			}
		}
	}
</script>
<style rel="style/scss" lang="scss" scoped>
	.blog-main-container {
		.f_l {
			float: left;
		}
		.f_r {
			float: right;
		}
		.blog-topnews{
			h2{
				font-size: 16px;
			    font-weight: bold;
			    line-height: 36px;
			    color: #333;
			    border-bottom: #db6d4c 4px solid;

			    span {
			    	float: right;
				    font-size: 12px;
				    font-weight: normal;
			    }
			}

			.blogs {
				padding: 30px 0;
			    position: relative;
			    border-bottom: #BFAB86 1px solid;
			    overflow: hidden;
				&:last-child {
					border-bottom: none !important;
				}
			    ul {
				    line-height: 22px;
				    width: 100%;
				    color: #777;
				    margin: 0;
				    padding: 0;
				    h3 {
				    	font-size: 16px;
					    font-weight: bold;
					    transition: all .5s;
					    margin-bottom: 10px;
				    }
				    p {
				    	font-size: 13px;
				    }

				    .autor {
				    	overflow: hidden;
					    clear: both;
					    margin: 10px 0;
					    display: inline-block;
					    color: #999;
					    width: 100%;
					    span {
					    	margin: 0 10px 0 0;
					    	padding-left: 20px;
					    }
				    }
			    }
			}

		}
	}
	.blogs-loading {
		height: 30px;
		width: 100%;
		margin-top: 20px;
		text-align: center;
	}	
</style>