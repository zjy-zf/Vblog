<template>
	<div class="blog-main-container">
		<el-carousel height="450px">
	      <el-carousel-item v-for="item in bannerImages" :key="item.index">
	        <img :src="item.src" alt="" width="100%">
	      </el-carousel-item>
	    </el-carousel>
	    <div class="blog-datalist">
	    	<el-card shadow="always" class="blog-datalist-box" v-for="item in list" :key="item.id">
		      <article>
		      	<header>
		      		<a href="javascript:void(0)" class="article-header-label">{{item.tags}}</a>
		      		<h2 class="article-header-title">
		      			<a href="javascript:void(0)" @click="viewArticalDetail(item.id)">{{item.title}}</a>
		      		</h2>
		      	</header>
		      	<p>{{item.digest}}</p>
		      	<footer class="article-auth" style="margin-top: 10px">
		      		<span><svg-icon icon-class="user"></svg-icon> {{item.userName}}</span>
		      		<span><i class="el-icon-time"></i> {{item.publishTime | parseTime}}</span>
		      		<span><svg-icon icon-class="eye"></svg-icon> {{item.clickHit}}浏览</span>
		      		<span><svg-icon icon-class="comment"></svg-icon> {{item.replyHit}}评论</span>
		      	</footer>
		      </article>
		    </el-card>
		    <div class="blogs-loading" v-loading="listLoading"></div>
	    </div>
	</div>
</template>
<script>
	import { getArticleList } from '@/api/article'
	import ScrollReveal from 'scrollreveal'
	import { Loading } from 'element-ui'
	import { parseTime } from '@/utils'
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
					pageNo: 1,
	        pageSize: 5
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
		filters: {
			parseTime(value) {
				return parseTime(value)
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
				this.loadStatus = false
				this.listLoading = true
				getArticleList(this.listQuery).then(response => {
					this.list = this.list.concat(response.data.records)
					this.total = this.total + response.data.total
					this.loadStatus = true
					this.listLoading = false
				})
			},
			handleScroll() {
				if(this.loadStatus){
					const clientHeight = document.documentElement.clientHeight
					const scrollHeight = document.documentElement.scrollHeight
					let offsetBottom = document.documentElement.scrollTop
					if (offsetBottom >= (scrollHeight - clientHeight - 10)) {
						this.listQuery.pageNo += 1;
						this.getList();
					}
				}
			},
			viewArticalDetail(articalId){
				this.$router.push({ path: `/articleDetail/${articalId}` })
			}
		}
	}
</script>
<style rel="style/scss" lang="scss" scoped>
	.blogs-loading {
		height: 40px;
		margin-bottom: 20px;
		background-color: #eee;
		div {
			background-color: #eee;
		}
	}
	.blog-datalist {
		margin-top: 20px;
		.blog-datalist-box {
			margin-bottom: 20px;
			&:last-child {
				margin-bottom: 0px;
			}
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