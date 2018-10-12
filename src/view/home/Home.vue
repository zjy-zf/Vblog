<template>
  <el-container class="app-container">
    <navbar></navbar>
    <Announce/>
    <el-container class="ztblog-container">
      <el-main class="blog-main"><ArticleList/></el-main>
      <el-aside width="360px" class="blog-aside"><Siderbar/></el-aside>
    </el-container>
    <el-footer class="app-footer">天天向上好同学版权所有 &#169; 2018</el-footer>
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
import ArticleList from './Article'

export default {
  name: 'Home',
  components: {
    Navbar,
    BackToTop,
    Siderbar,
    Announce,
    Login,
    ArticleList
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
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
