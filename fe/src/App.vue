<style >
html,
body {
  height: 100%;

  /* 主背景色 */
  background-color:rgb(62, 62, 62);
}

body {
  position: relative;
}

#app {
  width: 100%;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<template>
<div id="app">
  <!-- 主屏 -->
  <!-- <Main v-if="hsWatch" /> -->
  <!-- 防止页面 bug 回溯主屏渲染时候 路由显示 应该关闭 -->
  <router-view />
</div>
</template>

<script>
import "./assets/css/initUtil.css";
import Main from "./components/main";
const log = console.log.bind(console)
export default {
  name: "app",
  data() {
    return {
    }
  },
 
  components: {
    Main,
  },
  
};
</script>
