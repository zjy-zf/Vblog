<template>
  <el-header
      class="ztblog-el-header"
    >
      <el-menu
        :default-active="this.$route.path"
        class="ztblog-el-menu"
        mode="horizontal"
        @select="handleSelect"
        background-color="#BFAB86"
        text-color="#fff"
        active-text-color="#ffd04b"
        
      >
      <navbar-item
        v-for="route in permission_routers"
        :bath-path="route.path"
        :key="route.name"
        :route="route"
      ></navbar-item>
      </el-menu>
      <span class="blog-login-btn" style="margin-right: 15px;" @click="loginDialog">
          登录
      </span>
      <el-dialog
        title="登陆"
        :visible.sync="dialogVisible"
        width="30%"
        center
      >
        <el-form :model="form">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="form.username" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input v-model="form.password" auto-complete="off"></el-input>
          </el-form-item>
          <el-button type="primary" @click="loginSubmit" width="100%" center>登陆</el-button>
          <el-button type="primary" @click="registerClick">注册</el-button>
        </el-form>
      </el-dialog>
    </el-header>
</template>

<script>
  import { mapGetters } from "vuex"
  import path from 'path'
  import NavbarItem from './NavbarItem'

	export default {
		name: "navbar",
    components: {
      NavbarItem
    },
    data(){
      return {
        basePath: "",
        dialogVisible: false,
        form: {
          username: '',
          password: ''
        },
        formLabelWidth: '80px'
      }
    },
    computed: {
      ...mapGetters([
          "permission_routers"
        ])
    },
		methods: {
      handleSelect(key, keyPath){
        console.log(key, keyPath);
        this.$router.push({path: key});
      },
      resolvePath(...paths){
        return path.resolve(this.basePath, ...paths)
      },
      loginDialog(){
        // this.$store.dispatch("toggleLoginDialog");
        this.dialogVisible = true
      },
      loginSubmit(){

      },
      registerClick(){

      }
		}
	}
		
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .ztblog-el-header {
    background-color: #BFAB86;
    text-align: center;
    position: relative;
    .ztblog-el-menu {
      display: inline-block;
      width: 1200px;
    }
    .blog-login-btn {
      height: 60px;
      line-height: 60px;
      display: block;
      position: absolute;
      right: 0;
      top: 0;
      cursor:pointer;
      color: white;
      outline: none;
    }
    
  }

</style>
