<template>
	<el-dialog
	  title="登陆"
	  :visible.sync="this.$store.state.dialogVisible"
	  width="30%"
	  center
	>
	  <el-form :model="form">
	    <el-form-item label="用户名" :label-width="formLabelWidth">
	      <el-input v-model="form.username" auto-complete="off"></el-input>
	    </el-form-item>
	    <el-form-item label="密码" :label-width="formLabelWidth">
	      <el-input v-model="form.username" auto-complete="off"></el-input>
	    </el-form-item>
	    <el-button type="primary" @click="loginSubmit" width="100%" center>登陆</el-button>
	    <el-button type="primary" @click="registerClick">注册</el-button>
	  </el-form>
	  <span slot="footer" class="dialog-footer">
	    <el-button @click="toggleLoginDialog">取 消</el-button>
	    <el-button type="primary" @click="toggleLoginDialog">确 定</el-button>
	  </span>
	</el-dialog>
</template>
<script>
	import { mapGetters } from 'vuex'

	export default {
		name: 'login',
		data() {
			return {
				// dialogVisible: false,
				formLabelWidth: "120px",
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
			toggleLoginDialog(){
				this.$store.dispatch("toggleLoginDialog");
			},
			loginSubmit(){

			},
			registerClick(){

			}
		}
	}
</script>

<style type="style/scss" lang="scss" scoped>
	
</style>