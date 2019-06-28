<template>
  <div id="app">
    <router-view/>
    <pdd-footer-bar v-if="$route.meta.flag"/>
  </div>
</template>

<script>
  import footerBar from "../src/components/common/footerBar"
  export default {
    name:"app",
    components:{
      "pdd-footer-bar":footerBar
    }
  }
</script>
<style lang="scss">
#app{
  width:100%;
  height:100%;
  display: flex;
  flex-direction:column;
  font-size:0.14rem;
}

</style>
