<template>
  <div id="app">
    <router-view/>
    <pdd-footer-bar v-if="$route.meta.flag" :indexFooter ="indexFooter"/>
  </div>
</template>

<script>
  import footerBar from "../src/components/common/footerBar"
  export default {
    name: "app",
    components: {
      "pdd-footer-bar": footerBar
    },
    mounted() {
      this.$http.get('data/index.json').then((data) => {
        data = data.data;
        this.indexFooter = data.indexFooter;
      }).catch((error) => {
        console.log(error)
      })
    },
    data() {
      return {
        indexFooter: [],
      }
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
