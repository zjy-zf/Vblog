<template>
  <el-container class="app-container">
    <navbar></navbar>
    <Announce/>
    <el-container class="ztblog-container">
      <el-main class="blog-main"><router-view></router-view></el-main>
    </el-container>
    <el-footer class="app-footer">天哥版权所有</el-footer>
    <BackToTop/>
  </el-container>
</template>

<script>
import Navbar from '@/view/layout/components/Navbar'
import BackToTop from '@/components/ScrollToTop/BackToTop'
import Announce from '@/view/announce'
export default {
  name: 'MainLayout',
  components: {
    Navbar,
    BackToTop,
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
    width: 80%;
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
