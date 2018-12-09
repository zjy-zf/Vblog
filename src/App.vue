<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
  	this.$store.dispatch('getMenu')
  }
}
</script>
<style type="style/scss" lang="scss">
	* {
		margin: 0;
		padding: 0;
	}
	#app {
		
	}
</style>
