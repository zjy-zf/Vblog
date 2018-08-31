<template>
	<el-dialog
	  title="提示"
	  :visible.sync="dialogVisible"
	  width="30%"
	>
	  <span></span>
	  <span slot="footer" class="dialog-footer">
	    <el-button @click="dialogVisible = false">取 消</el-button>
	    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
	  </span>
	</el-dialog>
</template>
<script>
	import { mapGetters } from 'vuex'

	export default {
		name: 'login',
		data() {
			return {
				dialogVisible: this.$store.state.dialogVisible
			}
		},
		computed: {
			dialogVisible() {
				// return this.$store.state.dialogVisible
			}
		}
	}
</script>

<style type="style/scss" lang="scss" scoped>
	
</style>