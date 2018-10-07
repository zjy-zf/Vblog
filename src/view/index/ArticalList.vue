<template>
	<el-table
	  :data="tableData"
	  style="width: 100%">
	  <el-table-column
	    prop="date"
	    label="标题"
	    width="180">
	  </el-table-column>
	  <el-table-column
	    prop="name"
	    label="标签"
	    width="180">
	  </el-table-column>
	  <el-table-column
	    prop="address"
	    label="分类">
	  </el-table-column>
    <el-table-column
      prop="address"
      label="展现方式">
    </el-table-column>
    <el-table-column
      prop="address"
      label="作者">
    </el-table-column>
    <el-table-column
      prop="address"
      label="创建时间">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="140">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
        <el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
	</el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    handleClick(data){

    }
  }
}
</script>