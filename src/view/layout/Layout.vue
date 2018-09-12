<template>
  <el-container>
    <navbar></navbar>
    <el-container class="ztblog-container">
      <el-main><router-view></router-view></el-main>
      <el-aside width="200px">aside</el-aside>
    </el-container>
    <el-footer>footer</el-footer>
  </el-container>
</template>

<script>
  import { Navbar } from './components'
  import Login from '@/components/Login'

export default {
  name: 'layout',
  components: {
    Navbar,
    Login
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .ztblog-container {
    width: 1000px;
    margin:0 auto;
  }
</style>
