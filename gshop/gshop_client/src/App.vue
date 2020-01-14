<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-if="$route.meta.showBottom"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  name: 'App',
  components: {
    FooterGuide
  },
  mounted() {
    this.$store.dispatch('getAddress')
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  width : 100%;
  height : 100%;
  background : #fff;               
  
}
</style>
