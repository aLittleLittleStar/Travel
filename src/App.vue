<template>
  <div id="app">
  	<!-- 除了Detail页面之外都缓存 -->
  	<keep-alive exclude="Detail">
	    <!-- 显示的是当前路由地址所对应的内容 -->
	    <router-view/>
  	</keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
