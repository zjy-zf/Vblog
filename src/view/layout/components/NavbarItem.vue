<template>
  <el-menu-item 
  v-if="hasOneShowingChild(route.children) && !onlyOneChild.children && !route.alwaysShow" 
  :index="resolvePath(onlyOneChild.path)" >
    {{onlyOneChild.meta.title}}
  </el-menu-item>
</template>

<script>
  import { mapGetters } from "vuex"
  import path from 'path'

	export default {
		name: "navbar",
    data(){
      return {
        activeIndex: "1",
        onlyOneChild: null,
      }
    },
    props: {
    	route: {
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