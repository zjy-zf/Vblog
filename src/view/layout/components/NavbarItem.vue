<template>
  <el-menu-item 
  v-if="!item.children" 
  :index="resolvePath(item.treePath)" >
    {{item.menuName}}
  </el-menu-item>
</template>

<script>
  import { mapGetters } from "vuex"
  import path from 'path'

	export default {
		name: "navbar",
    data(){
      return {
        activeIndex: "1"
      }
    },
    props: {
    	item: {
  			type: Object,
  			required: true
  		},
  		basePath: {
  			type: String,
  			default: ""
  		}
    },
    computed: {
      ...mapGetters([
          "permission_routers"
        ])
    },
	  methods: {
      resolvePath(...paths){
        return path.resolve(this.basePath, ...paths)
      },
		}
	}
		
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .ztblog-el-header {
    background-color: #BFAB86;
    .ztblog-el-menu {
      width: 1000px;
      margin: 0 auto;
    }
  }
</style>