<template>
  <el-container>
    <navbar></navbar>
    <el-container class="ztblog-container">
      <el-main><router-view></router-view></el-main>
    </el-container>
    <el-footer>footer</el-footer>
  </el-container>
</template>

<script>
import { Navbar } from './components'

export default {
  name: 'layout',
  components: {
    Navbar
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
