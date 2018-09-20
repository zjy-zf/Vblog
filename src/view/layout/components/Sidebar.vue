<template>
	<div class="zt-blog-aside">
		<el-card shadow="always" class="blog-relation">
			<a href="javascript:void(0)" class="weixin">
				<svg-icon icon-class="wechat" />
			</a>
			<a href="javascript:void(0)" class="blog">
				<svg-icon icon-class="blog" />
			</a>
			<a href="javascript:void(0)" class="qq">
				<svg-icon icon-class="qq" />
			</a>
		</el-card>
	</div>
</template>

<script>
	export default {
		name: 'Sidebar'
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.zt-blog-aside {
	.blog-relation {
		a {
			width: 40px;
			height: 40px;
			display: inline-block;
			font-size: 40px;
			margin: 0 8px;
			color: #fff;
			border-radius: 4px;
			&.weixin {
				background-color: #7fb4ab;
			}
			&.qq {

			}
			&.blog {
				background-color: #f78585;
			}
		}
	}

}
	
</style>