<template>
	<el-card shadow="always" class="blog-announce" :body-style="{padding: '8px'}">
		<div class="blog-announce-box">
			<div class="blog-announce-left">
				<p><svg-icon icon-class="announcement"></svg-icon>
					天哥新博客开张，欢迎大家踊跃投稿！谢谢大家积极参与！！！
				</p>
			</div>
			<div class="blog-announce-right">
				<a href="javascript:void(0)"><svg-icon icon-class="user" style="color: #999;"></svg-icon> 投稿</a>
				<a href="javascript:void(0)" style="margin-left: 20px"><svg-icon icon-class="login" style="color: #999;"></svg-icon> 登陆</a>
			</div>
		</div>
	</el-card>
</template>

<script>
	export default {
		name: 'Announce',
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.blog-announce {
		width: 1200px;
		margin: 0 auto;
		.blog-announce-box {
			display: table;
			width: 100%;
			color: #666;
			font-size: 14px;
			.blog-announce-left {
				display: table-cell;
			}
			.blog-announce-right {
				display: table-cell;
				text-align: right;
			}
		}
		
		
	}
</style>