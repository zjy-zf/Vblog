<template>
  <el-container class="app-container">
    <navbar></navbar>
    <Announce/>
    <el-container class="ztblog-container">
      <el-main class="blog-main"><ArticleList/></el-main>
      <el-aside width="360px" class="blog-aside"><Siderbar/></el-aside>
    </el-container>
    <el-footer class="app-footer">天哥版权所有</el-footer>
    <!-- <FooterView/> -->
    <BackToTop/>
    <Login/>
  </el-container>
</template>

<script>
import Navbar from '@/view/layout/components/Navbar'
import BackToTop from '@/components/ScrollToTop/BackToTop'
import Siderbar from '@/view/layout/components/Sidebar'
import Announce from '@/view/announce'
import Login from '@/components/Login'
import FooterView from '@/view/layout/components/FooterView'
import ArticleList from './Article'

export default {
  name: 'Home',
  components: {
    Navbar,
    BackToTop,
    Siderbar,
    Announce,
    Login,
    ArticleList,
    FooterView
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
