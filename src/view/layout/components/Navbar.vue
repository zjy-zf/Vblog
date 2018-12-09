<template>
  <el-header
      class="ztblog-el-header"
    >
      <el-menu
        :default-active="activePath"
        class="ztblog-el-menu"
        mode="horizontal"
        @select="handleSelect"
        background-color="#BFAB86"
        text-color="#fff"
        active-text-color="#ffd04b"
        style="border-bottom: none"
      >
      <navbar-item
        v-for="item in menu"
        :bath-path="item.treePath"
        :key="item.menuName"
        :item="item"
      ></navbar-item>
      </el-menu>
    </el-header>
</template>

<script>
  import { mapGetters } from "vuex"
  import path from 'path'
  import NavbarItem from './NavbarItem'
  import { getMenu } from '@/api/menu'

	export default {
		name: "navbar",
    components: {
      NavbarItem
    },
    data(){
      return {
        
      }
    },
    created() {
      
    },
    computed: {
      ...mapGetters([
          "permission_routers",
          'menu'
        ]),
      activePath() {
        let pathName = this.$route.name || ""
        let index = pathName.indexOf(".") > 0 ? pathName.indexOf("."):pathName.length
        return '/' + pathName.slice(0, index)
      }
    },
		methods: {
      handleSelect(key, keyPath){
        this.$router.push({path: key});
      }
		}
	}
		
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .ztblog-el-header {
    background-color: #BFAB86;
    text-align: center;
    position: relative;
    padding: 0;
    .ztblog-el-menu {
      display: inline-block;
      width: 80%;
    }
    
  }

</style>
