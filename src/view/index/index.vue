<template>
	<div class="blog-main-container">
		<el-carousel height="450px">
	      <el-carousel-item v-for="item in bannerImages" :key="item.index">
	        <img :src="item.src" alt="" width="100%">
	      </el-carousel-item>
	    </el-carousel>
	    <div class="blog-datalist">
	    	<el-card shadow="always" class="blog-datalist-box" v-for="i in [1,2,3,4,5,6,7,8,9,10]" :key="i">
		      <article>
		      	<header>
		      		<a href="javascript:void(0)" class="article-header-label">Python</a>
		      		<h2 class="article-header-title">
		      			<a href="javascript:void(0)">破解网站登录加密–RSA</a>
		      		</h2>
		      	</header>
		      	<p>想查数据就免不了搜索，搜索就离不开搜索引擎，百度、谷歌都是一个非常庞大复杂的搜索引擎，他们几乎索引了互联网上开放的所有网页和数据。然而对于我们自己的业务数据来说，肯定就没必要用这么复杂的技术了，如果我们想实现自己的搜索引擎，方便存储和检索，Elasticsearch 就是不二选择，它是一个全文搜索引擎，可以快速地储存、搜索和分析海量数据。</p>
		      	<footer class="article-auth">
		      		<span><svg-icon icon-class="user"></svg-icon> 周天</span>
		      		<span><i class="el-icon-time"></i> 2018-09-20 14:17:21</span>
		      		<span><svg-icon icon-class="comment"></svg-icon> 10</span>
		      	</footer>
		      </article>
		    </el-card>
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
					// let loadingInstance = Loading.service({
					// 	target: ".blogs-loading"
					// })
					this.list = this.list.concat(response.data.items)
					this.total = this.total + response.data.total
					// loadingInstance.close();
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
	.blog-datalist {
		margin-top: 20px;
		.blog-datalist-box {
			margin-bottom: 20px;
			article {
				header {
					margin-bottom: 15px;
					.article-header-label {
					    margin-right: 5px;
					    position: relative;
					    // top: -2px;
					    padding: 4px 6px 4px;
					    background-color: #d9534f;
					    display: inline-block;
						line-height: 14px;
						color: #fff;
						vertical-align: baseline;
						white-space: nowrap;
						&:after {
							content: "";
							display: block;
							position: absolute;
							right: -6px;
							top: 5px;
							width: 0;
							height: 0;
							border-color: transparent;
							border-style: solid;
							border-width: 6px;
							border-right-width: 0;
							border-left-color: #d9534f;
						}
					}
					.article-header-title {
						color: #00a67c;
						display: inline;
					    font-size: 20px;
					    margin: 0;
					    font-weight: 400;
					    position: relative;
					    top: 1px;
					    line-height: 25px;
					    margin-left: 10px;
					}
				}
				p {
					color: #777;
				    line-height: 24px;
				    margin-bottom: 0;
				    font-style: normal;
				    font-size: 14px;
				}
				footer {
					float: right;
					margin-bottom: 15px;
					span {
						color: #999;
						margin-right: 20px;
						font-size: 14px;
						&:last-child {
							margin-right: 0;
						}
					}
				}
			}
		}
		
	}	
</style>