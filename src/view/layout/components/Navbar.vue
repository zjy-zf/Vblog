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
        menu: []
      }
    },
    created() {
      getMenu().then(response => {
        this.menu = response.data.data
      })
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
