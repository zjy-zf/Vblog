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
        basePath: ""
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
    
  }

</style>
