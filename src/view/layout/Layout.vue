<template>
  <el-container class="app-container">
    <navbar></navbar>
    <Announce/>
    <el-container class="ztblog-container">
      <el-main class="blog-main"><router-view></router-view></el-main>
      <el-aside width="360px" class="blog-aside"><Siderbar/></el-aside>
    </el-container>
    <el-footer class="app-footer">天哥版权所有</el-footer>
    <BackToTop/>
  </el-container>
</template>

<script>
import Navbar from './components/Navbar'
import BackToTop from '@/components/ScrollToTop/BackToTop'
import Siderbar from './components/Sidebar'
import Announce from '@/view/announce'

export default {
  name: 'layout',
  components: {
    Navbar,
    BackToTop,
    Siderbar,
    Announce
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.app-container{
  background-color: #eee;
  padding: 0;
  .ztblog-container {
    width: 1200px;
    margin:0 auto;
    .blog-main {
      padding: 20px 10px 0 0;
    }
    .blog-aside {
      padding: 20px 0;
    }
  }
  .app-footer {
    vertical-align: middle;
    text-align: center;
    background: #333;
    color: #ddd;
    line-height: 52px;
    border-top: 8px solid #d56464;
  }

}


  
</style>
