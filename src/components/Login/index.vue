<template>
	<el-dialog
	  :visible="dialogVisible"
	  width="30%"
	  @open="openLoginDialog"
	  @close="closeLoginDialog"
	  center
	  class="blog-login-dialog"
	  :show-close="false"
	>
	  <el-tabs tab-position="left" style="height: 300px;">
	    <el-tab-pane label="登录">
	    	<el-form :inline="true" :model="form" class="demo-form-inline">
				  <el-form-item style="width: 100%">
				    <el-input v-model="form.username" placeholder="用户名" style="width: 100%"></el-input>
				  </el-form-item>
				  <el-form-item style="width: 100%">
				    <el-input v-model="form.password" placeholder="密码" style="width: 100%"></el-input>
				  </el-form-item>
				  <el-form-item style="width: 100%">
				    <el-button type="primary" @click="onSubmit" style="width: 100%">登陆</el-button>
				  </el-form-item>
				</el-form>
	    </el-tab-pane>
	    <el-tab-pane label="注册">注册</el-tab-pane>
	  </el-tabs>
	</el-dialog>
</template>
<script>
	import { mapGetters } from 'vuex'

	export default {
		name: 'login',
		data() {
			return {
				form: {
					username: "",
					password: ""
				}
			}
		},
		computed: {
			dialogVisible() {
				return this.$store.state.dialogVisible
			}
		},
		methods: {
			openLoginDialog() {
				this.$store.dispatch('openLoginDialog')
			},
			closeLoginDialog() {
				this.$store.dispatch('closeLoginDialog')
			},
			loginSubmit(){

			},
			registerClick(){

			}
		}
	}
</script>

<style type="style/scss" lang="scss">
	.blog-login-dialog {
		.el-dialog { 
			background-color: rgba(200, 200, 200, .8);
		}
		.el-dialog__header {
			padding: 0;
		}
		.el-dialog__body {
			
			padding: 0;
			.el-tabs {
				position: relative;
				overflow: initial;
				.el-tabs__header {
					position: absolute;
					left: -58px;
					top: 0;
					height: 100%;
					.el-tabs__item {
						height: 150px;
						width: 58px;
						line-height: 24px;  
    				font-size: 18px;
    				white-space: pre-wrap;
    				vertical-align: middle;
    				padding-top: 45px;
    				color: #ddd;
    				background-color: rgba(33, 33, 33, .5);
    				&.is-active {
    					background-color: rgba(255, 255, 255, .5);
    					color: #333;
    				}
					}
				}
				.el-tabs__content {
					padding: 40px;
				}
			}
		}
	}
</style>