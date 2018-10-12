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
	    	<el-form :inline="true" :model="loginForm" ref="loginForm" :rules="loginFormRules" class="demo-form-inline">
			  <el-form-item prop="userAccount">
			    <el-input v-model="loginForm.userAccount" placeholder="账号" style="width: 300px"></el-input>
			  </el-form-item>
			  <el-form-item prop="password"> 
			    <el-input @keyup.enter.native="loginSubmit" v-model="loginForm.password" type="password" placeholder="密码" style="width: 300px"></el-input>
			  </el-form-item>
			  <el-form-item>
			    <el-button type="primary" @click="loginSubmit" style="width: 300px">登陆</el-button>
			  </el-form-item>
			</el-form>
	    </el-tab-pane>
	    <el-tab-pane label="注册">
	    	<el-form :inline="true" :model="registerForm" ref="registerForm" :rules="registerFormRules" class="demo-form-inline">
			  <el-form-item prop="userAccount">
			    <el-input v-model="registerForm.userAccount" placeholder="账号" style="width: 300px"></el-input>
			  </el-form-item>
			  <el-form-item prop="nickName">
			    <el-input v-model="registerForm.nickName" placeholder="昵称" style="width: 300px"></el-input>
			  </el-form-item>
			  <el-form-item prop="password">
			    <el-input @keyup.enter.native="registerClick" v-model="registerForm.password" type="password" placeholder="密码" style="width: 300px"></el-input>
			  </el-form-item>
			  <!-- <el-form-item>
			    <el-input v-model="registerForm.yanzheng" placeholder="验证码" style="width: 200px"></el-input>
			  </el-form-item> -->
			  <el-form-item>
			    <el-button type="primary" @click="registerClick" style="width: 300px">注册</el-button>
			  </el-form-item>
			</el-form>
	    </el-tab-pane>
	  </el-tabs>
	</el-dialog>
</template>
<script>
	import { mapGetters } from 'vuex'
	import { login, register } from '@/api/login'
	export default {
		name: 'login',
		data() {
			var validateUserAccount = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号'));
        } else {
          callback();
        }
      };
      var validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      var validatenickName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入昵称'));
        } else {
          callback();
        }
      };
			return {
				loginForm: {
					userAccount: "",
					password: ""
				},
				registerForm: {
					userAccount: "",
					nickName: "",
					password: "",
					yanzheng: ""
				},
				loginFormRules: {
					userAccount: { validator: validateUserAccount, trigger: 'blur' },
					password: { validator: validatePassword, trigger: 'blur' }
				},
				registerFormRules: {
					userAccount: { validator: validateUserAccount, trigger: 'blur' },
					nickName: { validator: validatenickName, trigger: 'blur'  },
					password: { validator: validatePassword, trigger: 'blur' }
				}
			}
		},
		watch: {
			dialogVisible(value, oldValue) {
				if(value !== oldValue) {
					this.loginForm = {
						userAccount: "",
						password: ""
					}
					this.registerForm = {
						userAccount: "",
						nickName: "",
						password: "",
						yanzheng: ""
					}
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
				this.$refs['loginForm'].validate((valid) => {
          if (valid) {
            this.$store.dispatch('Login', this.loginForm).then(response => {
							this.$message({
			          message: '登陆成功',
			          type: 'success'
			        })
			        this.$store.dispatch('closeLoginDialog')
						})
          } else {
            return false;
          }
        });
			},
			registerClick(){
				this.$refs['registerForm'].validate((valid) => {
          if (valid) {
            register(this.registerForm).then(response => {
							this.$message({
			          message: '注册成功',
			          type: 'success'
			        })
			        this.$store.dispatch('closeLoginDialog')
						})
          } else {
            return false;
          }
        });
				
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