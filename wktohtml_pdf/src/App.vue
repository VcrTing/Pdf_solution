<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// font-family: 'Avenir', Helvetica, Arial, sans-serif;
export default {
  name: 'App'
}
</script>

<style>
html {
  font-family: 'Noto Sans SC', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial,
	  'PingFang SC', 'Hiragino Sans GB', STHeiti, 'Microsoft YaHei',
  	'Microsoft JhengHei', 'Source Han Sans SC', 'Noto Sans CJK SC',
  	'Source Han Sans CN', 'Source Han Sans TC', 'Noto Sans CJK TC',
  	'WenQuanYi Micro Hei', SimSun, sans-serif;
      
    margin: 0 !important;
    padding: 0 !important;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0 !important;
  padding: 0 !important;
}
* {
  box-sizing: border-box !important;
}
</style>
