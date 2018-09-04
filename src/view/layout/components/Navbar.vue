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
       <el-dropdown
        class="ztblog-el-doopdown"
        trigger="click"
       >
        <span class="el-dropdown-link" style="margin-right: 15px;" @click="loginDialog">
          登录
        </span>
        <!-- <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu> -->
      </el-dropdown>
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
        activeIndex: "1",
        onlyOneChild: null,
        basePath: "",
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
      hasOneShowingChild(children){
        const showingChildren = children.filter(item => {
          if(item.hidden){
            return false;
          }else{
            this.onlyOneChild = item;
            return true
          }
        })
        if(showingChildren.length === 1){
          return true
        } else {
          return false
        }
      },
      resolvePath(...paths){
        return path.resolve(this.basePath, ...paths)
      },
      loginDialog(){
        this.$store.dispatch("toggleLoginDialog");
      }
		}
	}
		
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .ztblog-el-header {
    background-color: #BFAB86;
    text-align: center;
    .ztblog-el-menu {
      display: inline-block;
      width: 1000px;
    }
    .ztblog-el-doopdown {
      height: 60px;
      line-height: 60px;
      display: block;
      position: absolute;
      right: 0;
      top: 0;
      .el-dropdown-link{
        cursor:pointer;
        color:#409eff;
      }
    }
    
  }

</style>
